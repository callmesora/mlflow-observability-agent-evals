import os
import mlflow
import pandas as pd
from dotenv import load_dotenv

# Load API keys from .env
load_dotenv()

from mlflow.genai.scorers import (
    RetrievalGroundedness,
    RetrievalRelevance,
    RetrievalSufficiency,
    Correctness
)
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_core.prompts import ChatPromptTemplate
from langchain_community.vectorstores import FAISS
from langchain_core.documents import Document
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain.chains import create_retrieval_chain

# --- 1. SETUP & TRACING ---
# This is crucial: It ensures the 'RETRIEVER' spans are captured for the judges
mlflow.langchain.autolog()

# --- 2. BUILD SYSTEM UNDER TEST (RAG) ---
def build_rag_chain():
    """Builds a simple RAG chain with a mock vector store."""
    print("Building Mock Knowledge Base...")
    docs = [
        Document(page_content="MLflow Tracing allows logging of GenAI agent execution steps."),
        Document(page_content="LangChain 0.2 separated langchain-core from the main package."),
        Document(page_content="UV is a fast Python package manager written in Rust."),
        Document(page_content="The 'Correctness' scorer in MLflow uses an LLM judge.")
    ]
    # Standard LangChain retriever - automatically traced by MLflow
    vectorstore = FAISS.from_documents(docs, OpenAIEmbeddings())
    retriever = vectorstore.as_retriever()

    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0)
    
    prompt = ChatPromptTemplate.from_template("""
    Answer the question based only on the context provided.
    
    <context>
    {context}
    </context>
    
    Question: {input}
    """)

    document_chain = create_stuff_documents_chain(llm, prompt)
    retrieval_chain = create_retrieval_chain(retriever, document_chain)
    return retrieval_chain

rag_chain = build_rag_chain()

# --- 3. PREDICTION WRAPPER ---
def rag_predict(inputs):
    """
    Wrapper required by mlflow.evaluate.
    Extracts query, runs chain, returns answer string.
    """
    query = inputs["input"].iloc[0] if isinstance(inputs, pd.DataFrame) else inputs["input"]
    # The trace is captured automatically here during invocation
    return rag_chain.invoke({"input": query})["answer"]

# --- 4. DEFINE EVALUATION DATA ---
eval_data = pd.DataFrame([
    {
        "inputs": {"input": "What is UV?"},
        "expectations": {"expected_answer": "UV is a fast Python package manager written in Rust."}
    },
    {
        "inputs": {"input": "Does MLflow support Tracing?"},
        "expectations": {"expected_answer": "Yes, MLflow Tracing allows logging of execution steps."}
    },
    {
        "inputs": {"input": "What is the capital of France?"}, 
        # This query is irrelevant to our docs, evaluating how RAG handles missing info
        "expectations": {"expected_answer": "I cannot answer that based on the context."}
    }
])

# --- 5. RUN EVALUATION ---
if __name__ == "__main__":
    print("Starting RAG Evaluation...")
    
    with mlflow.start_run(run_name="UV_RAG_Eval"):
        results = mlflow.genai.evaluate(
            data=eval_data,
            predict_fn=rag_predict,
            scorers=[
                # Did we retrieve relevant docs? (Requires RETRIEVER span)
                RetrievalRelevance(model="openai:/gpt-4o"),
                
                # Did we hallucinate info not in docs? (Requires RETRIEVER + CHAT_MODEL span)
                RetrievalGroundedness(model="openai:/gpt-4o"),
                
                # Did we find enough info to match expectations? (Requires RETRIEVER span + expected_answer)
                RetrievalSufficiency(model="openai:/gpt-4o"),
                
                # Is the final answer factually correct vs expectations?
                Correctness(model="openai:/gpt-4o")
            ]
        )
        
        print("\nEvaluation Complete!")
        # Print a summary of the metrics
        metrics = results.tables["eval_results_table"]
        print(metrics[["input", "score_retrieval_relevance", "score_correctness", "rationale_correctness"]])