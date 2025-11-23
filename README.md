# Eval Driven Development with MLflow & LangChain (UV Edition)

This repository demonstrates how to perform Evaluation Driven Development (EDD) for GenAI agents using MLflow 3.0+ and LangChain, managed by the uv package manager.

🚀 Prerequisites

Install uv: A fast Python package installer and resolver.

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

API Keys: You need an OpenAI API Key. Copy `.env.example` to `.env` and fill in your key.

```bash
cp .env.example .env
```

📦 Setup

Initialize the environment and install dependencies in one go:

```bash
uv sync
```

This creates a virtual environment at `.venv` with all locked dependencies.

🧪 Running Evaluations

1. **RAG Evaluation (Built-in Judges)**  
    Evaluates a Retrieval Augmented Generation system using MLflow's pre-made LLM judges (RetrievalGroundedness, RetrievalRelevance, RetrievalSufficiency).

    ```bash
    uv run src/rag_eval.py
    ```

2. **Agent Evaluation (Custom Scorers)**  
    Evaluates a Tool-Calling Agent using custom scorers that inspect the MLflow Trace for execution trajectory and argument correctness.

    ```bash
    uv run src/agent_eval.py
    ```

📊 Viewing Results

After running the scripts, start the MLflow UI to inspect Traces and Evaluation metrics:

```bash
uv run mlflow ui
```

Open http://127.0.0.1:5000 in your browser.