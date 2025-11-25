import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Target, Zap, GitBranch, CheckCircle, AlertCircle, TrendingUp, Code2, Brain, Layers } from 'lucide-react';

const SlidePresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ============================================
  // HOW TO ADD IMAGES TO SLIDES:
  // ============================================
  // 1. Add an "image" property to any slide object:
  //    {
  //      title: "My Slide",
  //      layout: "image-with-text",
  //      image: "https://example.com/image.jpg",
  //      alt: "Description of image"
  //    }
  //
  // 2. Add a new case in the renderSlide function:
  //    case "image-with-text":
  //      return (
  //        <div className="flex items-center gap-8">
  //          <img src={slide.image} alt={slide.alt} />
  //          <div>{slide.content}</div>
  //        </div>
  //      );
  //
  // 3. For local images, upload to a service like:
  //    - Imgur (imgur.com) - Free, no account needed
  //    - Cloudinary - Free tier available
  //    - GitHub (raw.githubusercontent.com)
  //    Then use the public URL
  // ============================================

  const slides = [
    // ============================================
    // PART 1: THEORY & FOUNDATIONS
    // ============================================
    {
      title: "Evals First, Code Second",
      subtitle: "Building Reliable AI Agents Through Evaluation-Driven Development",
      layout: "title-intro",
      accent: "from-blue-600 to-cyan-600",
      speaker: "Pedro Azevedo",
      role: "AI Engineer at Hyland",
      credentials: "MSc Mechanical Engineering"
    },
    {
      title: "Story Time",
      subtitle: "Deploying to Prod without Evals and Monitoring",
      layout: "title",
      accent: "from-purple-600 to-pink-600"
    },
    {
      title: "Month 0: The Setup",
      layout: "story-beat",
      icon: "✅",
      timeline: "Launch Day",
      situation: "Agent deployed to production",
      image: "retired.jpg",
      imageAlt: "Everything is fine",
      detail: "Everything works perfectly",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Month 3: The Temptation",
      layout: "story-beat",
      icon: "🚀",
      timeline: "3 Months Later",
      situation: "New GPT-5 Model Released",
      image: "new-toy.webp",
      imageAlt: "New toy",
      detail: "Business: 'Can we switch? Might be better!'",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "The Switch",
      layout: "story-beat",
      icon: "🔄",
      timeline: "Day 1",
      situation: "Deploy new model to production",
      image: "to-prod.jpg",
      imageAlt: "Everything is fine",
      detail: "No evals. No testing. 'Let's just try it.'",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Crisis: Everything Breaks",
      layout: "story-beat",
      icon: "🚨",
      timeline: "Day 1 - Afternoon",
      situation: "Production on fire",
      detail: "Gibberish responses. Workflows failing. Angry customers calling.",
      image: "its-fine.jpg",
      imageAlt: "Everything is fine",
      color: "from-red-600 to-red-700"
    },
    {
      title: "Emergency: Rollback",
      layout: "story-beat",
      icon: "⚡",
      timeline: "Day 1 - Evening",
      situation: "Revert to old model immediately",
      detail: "Phew. Crisis averted. Back to normal.",
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "Plot Twist: Silent Failure",
      layout: "story-beat",
      icon: "🌍",
      timeline: "Month 5",
      situation: "Same gibberish output returns",
      detail: "Wait... the old model is also failing now.",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "The Real Problem - Data Drift",
      layout: "story-beat",
      icon: "🔍",
      timeline: "Week Later - Investigation",
      situation: "Root cause discovered",
      image: "french.jpg",
      imageAlt: "French",
      detail: "Business sold product in Europe. Customers speaking French. Embeddings don't support multilingual.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "The Financial Gut Punch",
      layout: "story-beat",
      icon: "💸",
      timeline: "End of Quarter",
      situation: "Finance calls: 'Our bill is $10K'",
      detail: "Token spending exploded. Retries and re-processing. No optimization.",
      color: "from-red-600 to-pink-600"
    },
    {
      title: "The Stalemate",
      layout: "story-beat",
      icon: "🤷",
      timeline: "Current Day",
      situation: "Fear paralysis sets in",
      detail: "Can't upgrade. Can't fix. Breaking thing means breaking business. Stuck.",
      color: "from-slate-600 to-slate-700"
    },
       {
      title: "Story Time",
      subtitle: "Deploying to Prod without Evals and Monitoring",
      layout: "title",
      accent: "from-purple-600 to-pink-600"
    },
    {
      title: "How We Do ML Projects",
      layout: "philosophy",
      phases: [
        { number: "1", label: "Planning", desc: "What do you want to build? When do you want it build by?" },
        { number: "2", label: "Scoping", desc: "What are going to build? What are we going to test?" },
        { number: "3", label: "Experimentation", desc: "Will this work? How does this compare with other approaches?" },
        { number: "4", label: "Development", desc: "Build Mantianable code an MLOps integration" },
        { number: "5", label: "Deployment", desc: "Make it run at production scale and monitor performance"},
        { number: "6", label: "Evaluation and Improvement", desc: "Collect the right metrics, ajust and adapt to changes" },

      ],
      accent: "from-purple-500 to-pink-500"
    },
      {
      title: "Stakeholder Conversation",
      layout: "kpi-examples",
      subtitle: "Before Writing Code: Define Your Success Metrics",
      content: "What does success look like? What tradeoffs matter? What can fail? How often?",
      kpis: [
        { 
          icon: "✓", 
          metric: "Correctness", 
          example: "Agent can be incorrect ≤ 20% of time",
          category: "ML Performance"
        },
        { 
          icon: "⏱️", 
          metric: "Response Time", 
          example: "Agent takes max 5 minutes per task",
          category: "Performance"
        },
        { 
          icon: "💰", 
          metric: "Cost Per Task", 
          example: "Agent cost shouldn't exceed $5.00",
          category: "Business"
        },
        { 
          icon: "📊", 
          metric: "Business KPI", 
          example: "Process 100+ customer issues daily",
          category: "Business"
        }
      ],
      accent: "from-orange-500 to-red-500"
    },
    {
      title: "The GenAI Problem (It's not just a Lambda)",
      layout: "problem",
      image: "genai-lambda.png",
      points: [
        { icon: "⚡", text: "GenAI is SO easy to deploy: just call an API" },
        { icon: "😰", text: "GenAI suffers from data drift, models change over time and prompts change over time" },
        { icon: "🎲", text: "We try things without thinking: 'Let's see if it works' (No Data Driven Decisions)" },
        { icon: "🚀", text: "Ship → Fail → Debug → Repeat (expensive cycle)" },
        { icon: "😰", text: "No confidence in production behavior. No real Edge Case Handeling"},
        { icon: "X", text: "No way to make the systems better over time"}
      ],
      accent: "from-red-500 to-orange-500"
    },
    {
      title: "TDD for Software: Why It Works",
      layout: "feature",
      icon: "✅",
      content: "Test-Driven Development: Write tests FIRST, then code",
      example: "1. Define test cases\n2. Watch them fail (RED)\n3. Write code\n4. Tests pass (GREEN)\n5. Refactor\n\nResult: High confidence, fewer bugs, clear requirements",
      accent: "from-blue-500 to-cyan-500"
    },
    {
      title: "Evaluation-Driven Development for ML",
      layout: "feature",
      icon: "🎯",
      content: "Same principle: Define evals FIRST, then build",
      example: "1. Talk to stakeholders → Define success\n2. Define metrics & test cases\n3. Build agent\n4. Run evals\n5. Iterate based on results\n\nResult: You KNOW your agent works",
      accent: "from-emerald-500 to-teal-500"
    },

    // ============================================
    // PART 2: METRICS & SUCCESS DEFINITION
    // ============================================
  
    {
      title: "Layers of Metrics",
      layout: "scorers",
      scorers: [
        { name: "Business Metrics", desc: "Cost per task, Time saved, User satisfaction, ROI" },
        { name: "ML Model Quality and Relevance Metrics", desc: "Correctness, Task completion..." },
        { name: "Data Quality and Integrity", desc: "Completness, Preplexity..." },
        { name: "Software System and Health", desc: "Downtime, SLA etc..." },

      ],
      accent: "from-violet-500 to-purple-500"
    },
    {
      title: "ML Metrics: With vs Without Ground Truth",
      layout: "comparison",
      left: {
        title: "With Ground Truth",
        icon: "✓",
        points: ["Requires labeled dataset", "Correctness (did we get it right?)", "Higher confidence", "More work to maintain"]
      },
      right: {
        title: "Without Ground Truth",
        icon: "👁️",
        points: ["Monitor in production", "Answer Relevancy (is it relevant?)", "Setup continuous monitoring", "Catch drift automatically"]
      },
      accent: "from-cyan-500 to-blue-500"
    },
    {
      title: "Initial Solution Pathway",
      subtitle: "Find the simplest solution that solves the problem first",
      layout: "pathway",
      pathways: [
        {
          number: "1",
          icon: "⚡",
          label: "Quick Wins",
          desc: "Simple data visualization? Simple aggregation? Single equation?",
          bgColor: "bg-green-500"
        },
        {
          number: "2",
          icon: "📊",
          label: "Advanced Analytics",
          desc: "Heuristic approach that meets requirements? Rules-based?",
          bgColor: "bg-emerald-700"
        },
        {
          number: "3",
          icon: "🤖",
          label: "Traditional ML",
          desc: "Predictive modeling? Recommendation engines? Simulations?",
          bgColor: "bg-orange-400"
        },
        {
          number: "4",
          icon: "🧠",
          label: "Complex AI",
          desc: "Deep Learning? Graph modeling? Neural networks?",
          bgColor: "bg-red-600"
        }
      ],
      progressLabel: "Increasing complexity and costs",
      accent: "from-slate-800 to-slate-900"
    },

    {
      title: "Why GenAI Changes Everything",
      subtitle: "Minimal implementation, maximum capability with few-shot learning",
      layout: "pathway",
      pathways: [
        {
          number: "1",
          icon: "⚡",
          label: "Quick Wins",
          desc: "Simple data visualization? Simple aggregation? Single equation?",
          bgColor: "bg-green-500"
        },
        {
          number: "2",
          icon: "📊",
          label: "Advanced Analytics",
          desc: "Heuristic approach that meets requirements? Rules-based?",
          bgColor: "bg-emerald-700"
        },
        {
          number: "3",
          icon: "✨",
          label: "GenAI + Few-Shot",
          desc: "Rapid Prototyping, can learn with FewShot, often deployment is simpler",
          bgColor: "bg-blue-500"
        },
        {
          number: "4",
          icon: "🧠",
          label: "Classical ML + DL",
          desc: "Fine-tuning, complex pipelines, infrastructure required",
          bgColor: "bg-red-600"
        }
      ],
      progressLabel: "Implementation effort & time to production",
      accent: "from-slate-800 to-slate-900"
    },

    // ============================================
    // PART 3: AGENT ARCHITECTURE & LEVERS
    // ============================================
    {
      title: "Agent Architecture: The 4 Levers",
      layout: "philosophy",
      phases: [
        { number: "1", label: "Scaffolding", desc: "Agent loop structure" },
        { number: "2", label: "Tools", desc: "What can it do?" },
        { number: "3", label: "Prompt", desc: "Instructions & examples" },
        { number: "4", label: "LLM", desc: "Which model?" }
      ],
      accent: "from-purple-500 to-pink-500"
    },


    // ============================================
    // PART 4: USE CASE 1 - RAG SYSTEM
    // ============================================
    {
      title: "Use Case 1: Product Support Bot (RAG)",
      layout: "scenario",
      scenario: "RAG",
      problem: "Help customers find product info: 'Can I use Watch Pro with Phone X10?'",
      solution: "Build RAG system that retrieves correct docs and synthesizes answers",
      icon: "🛍️",
      accent: "from-blue-500 to-cyan-500"
    },
    {
      title: "RAG Systems: Metrics That Matter",
      layout: "metric-showcase",
      icon: "🔍",
      subtitle: "Retrieval-Augmented Generation",
      metrics: [
        {
          name: "Correctness",
          value: "> 0.85",
          description: "Factually accurate answers",
          type: "GT",
          icon: "✓"
        },
        {
          name: "Answer Relevancy",
          value: "> 0.80",
          description: "Does it address the question?",
          type: "no GT",
          icon: "🎯"
        },
        {
          name: "Context Relevancy",
          value: "> 0.75",
          description: "Are retrieved docs relevant?",
          type: "no GT",
          icon: "📚"
        }
      ],
      accent: "from-blue-500 to-cyan-500"
    },
    
    {
      title: "RAG: Testing Architectures",
      layout: "feature",
      icon: "🔬",
      content: "Which architecture performs best?",
      example: "• Naive RAG: Simple retrieval + LLM\n• RAG + Reranker: Better ranking\n• Agentic RAG: Multi-hop reasoning\n• Long RAG: Supervisor + Planner\n\nCompare all on same metrics",
      accent: "from-blue-600 to-indigo-600"
    },
    {
      title: "RAG Results Comparison",
      layout: "experiment",
      accent: "from-blue-600 to-indigo-600",
      metrics: ["Correctness", "Cost", "Speed", "Implementation", "Team Familiarity"],
      experiments: [
        {
          name: "Naive RAG",
          description: "Simple retrieval + LLM",
          status: "failed",
          scores: [
            { value: "↓", color: "text-red-400" },
            { value: "↓", color: "text-green-300" },
            { value: "↑", color: "text-green-300" },
            { value: "↑", color: "text-green-300" },
            { value: "↑", color: "text-green-300" }
          ],
          outcome: "❌",
          comment: "Correctness 0.68"
        },
        {
          name: "Advanced RAG",
          description: "LLamaIndex Interface Query ReWrite + Ranking + Filtering",
          status: "winner",
          scores: [
            { value: "↑", color: "text-green-300" },
            { value: "→", color: "text-yellow-300" },
            { value: "→", color: "text-yellow-300" },
            { value: "↑", color: "text-green-300" },
            { value: "↑", color: "text-green-300" }
          ],
          outcome: "✓",
          comment: "Best fit for our domain"
        },
        {
          name: "Agentic RAG",
          description: "Langchain Agent Multi-hop reasoning",
          status: "expensive",
          scores: [
            { value: "↑", color: "text-green-300" },
            { value: "↑", color: "text-red-400" },
            { value: "↓", color: "text-red-400" },
            { value: "↓", color: "text-red-400" },
            { value: "→", color: "text-yellow-300" }
          ],
          outcome: "⚠️",
          comment: "Overkill for single-hop queries"
        }
      ]
    },

    // ============================================
    // PART 5: USE CASE 2 - AGENT SYSTEM
    // ============================================
    {
      title: "Use Case 2: CMS Manager Agent",
      layout: "scenario",
      scenario: "Agent",
      problem: "Automate CMS operations: Search articles, check status, publish",
      solution: "Build agent that completes tasks efficiently without redundant actions",
      icon: "📝",
      accent: "from-emerald-500 to-teal-500"
    },
    {
      title: "Agents: Metrics That Matter",
      layout: "metric-showcase",
      icon: "🤖",
      subtitle: "Autonomous AI Agents",
      metrics: [
        {
          name: "Task Completeness",
          value: "> 0.90",
          description: "Did it finish the job?",
          type: "GT",
          icon: "✓"
        },
        {
          name: "Avg Tool Calls Per Task",
          value: "Optimal",
          description: "No redundant calls",
          type: "no GT",
          icon: "🔗"
        },
        {
          name: "Time Per Task",
          value: "< 5s",
          description: "Business GO/NO-GO",
          type: "Business",
          icon: "⏱️"
        }
      ],
      accent: "from-emerald-500 to-teal-500"
    },
    {
      title: "Agent: Testing Architectures",
      layout: "feature",
      icon: "🔬",
      content: "Which agent system works best?",
      example: "• React Agent: Simple action/observation\n• Swarm Agent System: Specialist agents\n• Supervision Agent: Hierarchical control\n• Deep Agent: Multi-step reasoning\n• Planner Agent: Plan then execute\n\nCompare on all metrics",
      accent: "from-green-600 to-emerald-600"
    },
    {
      title: "Agent Results Comparison",
      layout: "experiment",
      accent: "from-green-600 to-emerald-600"
    },

    // ============================================
    // PART 6: MONITORING & PRODUCTION
    // ============================================
    {
      title: "Monitoring Scenario 1: Data Drift",
      layout: "monitoring-scenario",
      scenario: "RAG Agent",
      icon: "🚨",
      problem: "One day: gibberish output. Why? Users started uploading French documents.",
      solution: "Your monitoring catches it:",
      steps: [
        "📊 Answer Relevancy score drops → Alarm triggered",
        "🔎 Investigation: Check input data distribution",
        "📝 Discovery: French content detected (data drift)",
        "🎯 Data distribution changed → Model behavior changed",
        "✅ Action: Add multilingual embeddings or reindex"
      ],
      accent: "from-orange-500 to-red-500"
    },
    {
      title: "Monitoring Scenario 2: Model Upgrade",
      layout: "monitoring-scenario",
      scenario: "Agent Upgrade",
      icon: "⬆️",
      problem: "New GPT-5 is released. Worth switching from GPT-4?",
      solution: "Your monitoring proves it's safe:",
      steps: [
        "🧪 Shadow deploy: Run both models on same tasks",
        "📈 Compare: Task completion (same or better?)",
        "💾 Compare: Tool calls per task (fewer = cheaper)",
        "⏱️ Compare: Time per task (faster?)",
        "✅ Data-driven: Switch based on metrics, not hype"
      ],
      accent: "from-green-500 to-emerald-500"
    },
    {
      title: "Monitoring at Every Layer",
      layout: "monitoring-layers",
      layers: [
        {
          layer: "Data Layer",
          metrics: ["Input distribution", "Data drift", "Schema changes"],
          example: "French docs detected"
        },
        {
          layer: "Model Layer",
          metrics: ["Response coherence", "Task completion", "Tool efficiency"],
          example: "Fewer tool calls with new model"
        },
        {
          layer: "Business Layer",
          metrics: ["Cost per task", "Time per task", "Error rate"],
          example: "Cost vs accuracy tradeoff"
        }
      ],
      accent: "from-violet-500 to-purple-500"
    },

    

    // ============================================
    // PART 7: RECAP & ACTION
    // ============================================
    {
      title: "The EDD Loop",
      layout: "loop",
      steps: [
        "Define Success",
        "Choose Metrics",
        "Build Baseline",
        "Test Architectures",
        "Monitor Results",
        "Ship Best Option"
      ],
      accent: "from-green-500 to-emerald-500"
    },
    {
      title: "Key Takeaways",
      layout: "tips",
      tips: [
        "Talk to stakeholders FIRST. Understand success criteria.",
        "Choose metrics before coding. Mix business + ML metrics.",
        "Baseline simple solution. You'll outperform it anyway.",
        "Test multiple architectures systematically.",
        "Monitor in production. What gets measured gets managed."
      ],
      accent: "from-yellow-500 to-amber-500"
    },
    {
      title: "Your Challenge",
      layout: "cta",
      challenge: "Don't just watch—code along. Build evals for YOUR agent.",
      action: "After today: Define success with stakeholders. Write evals first. Ship with confidence.",
      accent: "from-green-500 to-emerald-500"
    }
  ];

  const goToSlide = (n) => {
    setCurrentSlide((n + slides.length) % slides.length);
  };

  const renderSlide = (slide) => {
    switch (slide.layout) {
      case "title":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} flex flex-col items-center justify-center text-white px-12 text-center`}>
            <h1 className="text-7xl font-black mb-6 leading-tight">{slide.title}</h1>
            <p className="text-2xl opacity-90 max-w-2xl">{slide.subtitle}</p>
          </div>
        );

      case "title-intro":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} flex flex-col items-start justify-between text-white px-16 py-16 relative overflow-hidden`}>
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40"></div>
            
            {/* Main content - center top (dominant) */}
            <div className="relative z-10 w-full flex flex-col items-center justify-start pt-20 flex-1">
              <h1 className="text-9xl font-black mb-8 leading-tight text-center max-w-5xl">{slide.title}</h1>
              <p className="text-3xl opacity-90 font-light text-center max-w-4xl">{slide.subtitle}</p>
            </div>

            {/* Speaker info - bottom right */}
            <div className="relative z-10 text-right">
              <p className="text-3xl font-bold mb-3 tracking-wide">{slide.speaker}</p>
              <div className="border-t border-white/40 pt-3">
                <p className="text-base opacity-90 font-medium mb-1">{slide.role}</p>
                <p className="text-sm opacity-70 font-light">{slide.credentials}</p>
              </div>
            </div>
          </div>
        );

      case "problem":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <h2 className="text-6xl font-black mb-3">{slide.title}</h2>
            <p className="text-lg opacity-80 mb-12">Why it's different from traditional software</p>
            
            <div className="flex items-center gap-12">
              {/* Points section */}
              <div className="flex-1 space-y-4">
                {slide.points.map((pt, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-5 border-l-4 border-white/40">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl flex-shrink-0 mt-1">{pt.icon}</span>
                      <p className="text-base leading-relaxed">{pt.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Image section */}
              {slide.image && (
                <div className="flex-shrink-0 w-120">
                  <img 
                    src={slide.image} 
                    alt="Problem illustration"
                    className="w-120 h-120 rounded-2xl shadow-2xl object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        );

      case "concept":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center items-center text-center`}>
            <h2 className="text-5xl font-black mb-8">{slide.title}</h2>
            <p className="text-3xl mb-6 font-bold">{slide.subtitle}</p>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-12 max-w-2xl">
              <p className="text-2xl">{slide.content}</p>
            </div>
          </div>
        );

      case "kpi-examples":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <h2 className="text-5xl font-black mb-2">{slide.title}</h2>
            <p className="text-xl opacity-90 mb-8">{slide.subtitle}</p>
            
            <div className="grid grid-cols-2 gap-6 h-full">
              {slide.kpis.map((kpi, i) => (
                <div key={i} className="bg-white/20 backdrop-blur rounded-2xl p-6 border-2 border-white/30 hover:border-white/60 transition flex flex-col">
                  {/* Category badge */}
                  <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold mb-3 opacity-80 w-fit">
                    {kpi.category}
                  </div>
                  
                  {/* Icon and metric name */}
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-4xl flex-shrink-0">{kpi.icon}</span>
                    <h3 className="text-2xl font-black leading-tight">{kpi.metric}</h3>
                  </div>
                  
                  {/* Example box */}
                  <div className="bg-white/15 rounded-xl p-4 border-l-4 border-white/60 flex-1 flex flex-col">
                    <p className="text-xs opacity-70 mb-2 font-bold">SUCCESS LOOKS LIKE:</p>
                    <p className="text-lg font-bold leading-snug">{kpi.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "philosophy":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <h2 className="text-5xl font-black mb-12">{slide.title}</h2>
            <div className="grid grid-cols-4 gap-6">
              {slide.phases.map((phase, i) => (
                <div key={i} className="bg-white/20 backdrop-blur rounded-xl p-8 text-center">
                  <div className="text-5xl font-black mb-4">{phase.number}</div>
                  <h3 className="text-2xl font-bold mb-3">{phase.label}</h3>
                  <p className="text-lg opacity-90">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "story-beat":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.color} text-white p-12 flex items-center justify-between relative overflow-hidden`}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40"></div>
            
            {/* Content */}
            <div className="relative z-10 flex-1">
              {/* Timeline badge */}
              <div className="inline-block bg-white/20 backdrop-blur px-6 py-2 rounded-full text-sm font-bold mb-6 mb-8">
                ⏱️ {slide.timeline}
              </div>

              {/* Icon */}
              <div className="text-8xl mb-8">{slide.icon}</div>

              {/* Title */}
              <h2 className="text-6xl font-black mb-6 leading-tight">{slide.title}</h2>

              {/* Situation box */}
              <div className="bg-white/20 backdrop-blur rounded-2xl p-8 mb-8 border border-white/30">
                <p className="text-sm opacity-70 font-bold mb-3">SITUATION</p>
                <p className="text-3xl font-bold mb-4">{slide.situation}</p>
                <p className="text-xl opacity-90">{slide.detail}</p>
              </div>
            </div>

            {/* Image section - right side */}
            {slide.image && (
              <div className="relative z-10 flex-shrink-0 ml-8">
                <img 
                  src={slide.image} 
                  alt={slide.imageAlt || "Story illustration"}
                  className="h-96 rounded-2xl shadow-2xl object-cover"
                />
              </div>
            )}
          </div>
        );

      case "grid":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <h2 className="text-5xl font-black mb-12">{slide.title}</h2>
            <div className="grid grid-cols-2 gap-8">
              {slide.items.map((item, i) => (
                <div key={i} className="bg-white/20 backdrop-blur rounded-2xl p-10">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-lg opacity-90">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "comparison":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <h2 className="text-5xl font-black mb-12 text-center">{slide.title}</h2>
            <div className="grid grid-cols-2 gap-12">
              <div className="bg-white/20 backdrop-blur rounded-2xl p-10">
                <div className="text-6xl mb-4">{slide.left.icon}</div>
                <h3 className="text-3xl font-bold mb-6">{slide.left.title}</h3>
                <ul className="space-y-4">
                  {slide.left.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg">
                      <div className="w-3 h-3 rounded-full bg-white"></div> {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-2xl p-10">
                <div className="text-6xl mb-4">{slide.right.icon}</div>
                <h3 className="text-3xl font-bold mb-6">{slide.right.title}</h3>
                <ul className="space-y-4">
                  {slide.right.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg">
                      <div className="w-3 h-3 rounded-full bg-white"></div> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case "feature":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <h2 className="text-5xl font-black mb-12">{slide.title}</h2>
            <div className="flex items-start gap-12">
              <div className="text-8xl">{slide.icon}</div>
              <div className="flex-1">
                <p className="text-3xl font-bold mb-8">{slide.content}</p>
                <div className="bg-white/20 backdrop-blur rounded-xl p-8 font-mono text-lg whitespace-pre-line">
                  {slide.example}
                </div>
              </div>
            </div>
          </div>
        );

      case "scorers":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <h2 className="text-5xl font-black mb-12">{slide.title}</h2>
            <div className="space-y-6">
              {slide.scorers.map((scorer, i) => (
                <div key={i} className="bg-white/20 backdrop-blur rounded-xl p-8 flex items-start gap-6">
                  <div className="text-4xl font-black">{i + 1}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{scorer.name}</h3>
                    <p className="text-lg opacity-90">{scorer.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "trace":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <h2 className="text-5xl font-black mb-12">{slide.title}</h2>
            <div className="bg-black/40 backdrop-blur rounded-xl p-8 font-mono text-lg space-y-2 max-w-3xl">
              {slide.traceItems.map((item, i) => (
                <div key={i} style={{ paddingLeft: `${item.depth * 2}rem` }} className="text-green-400">
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        );

      case "scenario":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <div className="flex items-start gap-8">
              <div className="text-8xl">{slide.icon}</div>
              <div className="flex-1">
                <div className="inline-block bg-white/30 px-6 py-2 rounded-full text-lg font-bold mb-4">
                  {slide.scenario}
                </div>
                <h2 className="text-5xl font-black mb-8">{slide.title}</h2>
                <div className="space-y-6">
                  <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                    <p className="text-sm opacity-70 mb-2">PROBLEM:</p>
                    <p className="text-2xl font-bold">{slide.problem}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                    <p className="text-sm opacity-70 mb-2">SOLUTION:</p>
                    <p className="text-2xl font-bold">{slide.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "baseline":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <h2 className="text-5xl font-black mb-12">{slide.title}</h2>
            <div className="space-y-6">
              {slide.metrics.map((m, i) => (
                <div key={i} className="bg-white/20 backdrop-blur rounded-xl p-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{m.name}</h3>
                    <p className="text-lg opacity-90">{m.why}</p>
                  </div>
                  <div className="text-4xl font-black text-yellow-300">{m.target}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "metric-showcase":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl">{slide.icon}</span>
                <div>
                  <h2 className="text-6xl font-black">{slide.title}</h2>
                  <p className="text-xl opacity-80 mt-1">{slide.subtitle}</p>
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-6">
              {slide.metrics.map((metric, i) => (
                <div key={i} className="bg-white/15 backdrop-blur rounded-2xl p-8 border border-white/30 flex flex-col">
                  {/* Icon and metric name */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">{metric.icon}</span>
                    <h3 className="text-2xl font-black">{metric.name}</h3>
                  </div>

                  {/* Value - Big and Bold */}
                  <div className="mb-6">
                    <p className="text-5xl font-black mb-2">{metric.value}</p>
                    <p className="text-sm opacity-70">{metric.description}</p>
                  </div>

                  {/* Type badge */}
                  <div className="inline-block mt-auto">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      metric.type === 'GT' ? 'bg-blue-400/30' :
                      metric.type === 'no GT' ? 'bg-purple-400/30' :
                      'bg-amber-400/30'
                    }`}>
                      {metric.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "loop":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center items-center`}>
            <h2 className="text-5xl font-black mb-16">{slide.title}</h2>
            <div className="w-full max-w-4xl">
              <div className="grid grid-cols-3 gap-6 mb-6">
                {slide.steps.slice(0, 3).map((step, i) => (
                  <div key={i} className="bg-white/20 backdrop-blur rounded-xl p-6 text-center">
                    <div className="text-4xl font-black mb-3">{i + 1}</div>
                    <p className="font-bold text-lg">{step}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-6">
                {slide.steps.slice(3).map((step, i) => (
                  <div key={i + 3} className="bg-white/20 backdrop-blur rounded-xl p-6 text-center">
                    <div className="text-4xl font-black mb-3">{i + 4}</div>
                    <p className="font-bold text-lg">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "beforeafter":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <h2 className="text-5xl font-black mb-12 text-center">{slide.title}</h2>
            <div className="grid grid-cols-2 gap-12">
              <div className="bg-red-500/30 backdrop-blur rounded-2xl p-12 border-2 border-red-400">
                <h3 className="text-4xl font-black mb-8">{slide.before.title}</h3>
                <ul className="space-y-6">
                  {slide.before.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg">
                      <AlertCircle className="w-6 h-6" /> {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-500/30 backdrop-blur rounded-2xl p-12 border-2 border-green-400">
                <h3 className="text-4xl font-black mb-8">{slide.after.title}</h3>
                <ul className="space-y-6">
                  {slide.after.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg">
                      <CheckCircle className="w-6 h-6" /> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case "tips":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <h2 className="text-5xl font-black mb-12">{slide.title}</h2>
            <div className="space-y-6">
              {slide.tips.map((tip, i) => (
                <div key={i} className="bg-white/20 backdrop-blur rounded-xl p-8 flex items-start gap-6 text-lg">
                  <div className="text-4xl font-black">✓</div>
                  <p>{tip}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "experiment":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center overflow-x-auto`}>
            <h2 className="text-5xl font-black mb-8">{slide.title}</h2>
            
            {/* Metrics Header Row */}
            <div className="flex gap-2 mb-4">
              <div className="w-48 flex-shrink-0"></div>
              <div className={`grid gap-2 flex-1`} style={{ gridTemplateColumns: `repeat(${slide.metrics.length + 2}, 1fr)` }}>
                {slide.metrics.map((metric, i) => (
                  <div key={i} className="bg-white/40 rounded-lg p-3 text-center text-xs font-bold border-2 border-white/60">
                    {metric}
                  </div>
                ))}
                <div className="bg-white/40 rounded-lg p-3 text-center text-xs font-bold border-2 border-white/60">Outcome</div>
                <div className="bg-white/40 rounded-lg p-3 text-center text-xs font-bold border-2 border-white/60">Comments</div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex gap-6 mb-6 text-sm font-bold">
              <div className="flex items-center gap-2"><span className="text-4xl text-green-300">↑</span><span>Strong</span></div>
              <div className="flex items-center gap-2"><span className="text-4xl text-red-400">↓</span><span>Weak</span></div>
              <div className="flex items-center gap-2"><span className="text-4xl text-yellow-300">→</span><span>Average</span></div>
            </div>

            {/* Experiments */}
            <div className="space-y-3">
              {slide.experiments.map((exp, expIdx) => {
                const bgColor = exp.status === "failed" ? "bg-red-900/50" : 
                               exp.status === "expensive" ? "bg-yellow-900/50" : 
                               "bg-green-900/50";
                const borderColor = exp.status === "failed" ? "border-red-400" : 
                                   exp.status === "expensive" ? "border-yellow-400" : 
                                   "border-green-400";
                const outcomeBg = exp.status === "failed" ? "bg-red-900/70" : 
                                 exp.status === "expensive" ? "bg-yellow-900/70" : 
                                 "bg-green-900/70";
                const outcomeColor = exp.status === "failed" ? "text-red-300" : 
                                    exp.status === "expensive" ? "text-yellow-300" : 
                                    "text-green-300";

                return (
                  <div key={expIdx} className="flex gap-2">
                    <div className={`w-48 flex-shrink-0 ${bgColor} rounded-lg p-4 border-l-4 ${borderColor}`}>
                      <p className="font-bold text-sm">{exp.name}</p>
                      <p className="text-xs opacity-90">{exp.description}</p>
                    </div>
                    <div className={`grid gap-2 flex-1`} style={{ gridTemplateColumns: `repeat(${slide.metrics.length + 2}, 1fr)` }}>
                      {exp.scores.map((score, scoreIdx) => (
                        <div key={scoreIdx} className="bg-white/20 rounded-lg p-4 flex items-center justify-center border border-white/40">
                          <span className={`text-5xl ${score.color}`}>{score.value}</span>
                        </div>
                      ))}
                      <div className={`${outcomeBg} rounded-lg p-4 flex items-center justify-center border-2 ${borderColor}`}>
                        <span className={`font-bold text-lg ${outcomeColor}`}>{exp.outcome}</span>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3 flex items-center justify-center border border-white/40">
                        <span className="text-xs text-center opacity-90">{exp.comment}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Insights */}
            <div className="mt-8 bg-white/20 backdrop-blur rounded-lg p-6 border-2 border-white/40">
              <p className="text-base opacity-95">
                <span className="font-bold">Key insight:</span> The simplest approach won. No complex reranking, no multi-agent orchestration—just solid fundamentals with excellent cost-benefit ratio.
              </p>
            </div>
          </div>
        );

      case "full-image":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} flex flex-col items-center justify-center p-12`}>
            <div className="max-w-5xl w-full">
              <h2 className="text-4xl font-black text-white mb-8 text-center">{slide.title}</h2>
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={slide.image} 
                  alt={slide.alt}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        );

      case "challenge":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <h2 className="text-5xl font-black mb-10">{slide.title}</h2>
            <div className="space-y-6 text-2xl leading-relaxed">
              <p>
                We're treating LLM applications like traditional microservices.
              </p>
              <p className="font-bold">
                This is fundamentally wrong. These systems need to be managed as ML artifacts with proper evaluation, versioning, and monitoring.
              </p>
              <div className="bg-white/20 backdrop-blur rounded-xl p-8 mt-8 space-y-4 text-lg">
                <p>
                  <span className="font-bold">📊 Data drift is killing us:</span> Data content changes? Your RAG system needs automated re-evaluation. Yet most teams only discover issues <span className="font-bold">through user complaints.</span>
                </p>
                <p>
                  <span className="font-bold">🔄 Prompt versioning isn't optional:</span> Moving prompts from code files to versioned systems should be table stakes. But we're still seeing widespread resistance to this basic practice.
                </p>
              </div>
            </div>
          </div>
        );

      case "tools":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <h2 className="text-5xl font-black mb-12">{slide.title}</h2>
            <div className="grid grid-cols-2 gap-8">
              {slide.tools.map((tool, i) => (
                <div key={i} className="bg-white/20 backdrop-blur rounded-xl p-10">
                  <h3 className="text-3xl font-bold mb-3">{tool.name}</h3>
                  <p className="text-lg opacity-90">{tool.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "monitoring-scenario":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <div className="flex items-start gap-8 mb-8">
              <div className="text-7xl">{slide.icon}</div>
              <div className="flex-1">
                <div className="inline-block bg-white/30 px-6 py-2 rounded-full text-lg font-bold mb-4">
                  {slide.scenario}
                </div>
                <h2 className="text-5xl font-black">{slide.title}</h2>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/20 backdrop-blur rounded-xl p-8">
                <p className="text-sm opacity-70 mb-2 font-bold">THE SITUATION:</p>
                <p className="text-2xl font-bold">{slide.problem}</p>
              </div>

              <div className="bg-white/20 backdrop-blur rounded-xl p-8">
                <p className="text-sm opacity-70 mb-4 font-bold">YOUR MONITORING CATCHES IT:</p>
                <ul className="space-y-3">
                  {slide.steps.map((step, i) => (
                    <li key={i} className="text-lg font-semibold flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{step.split(":")[0]}</span>
                      <span>{step.split(":")[1] || step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case "monitoring-benefits":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <h2 className="text-5xl font-black mb-12">{slide.title}</h2>
            <div className="grid grid-cols-2 gap-8">
              {slide.benefits.map((benefit, i) => (
                <div key={i} className="bg-white/20 backdrop-blur rounded-2xl p-10">
                  <div className="text-6xl mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-lg opacity-90">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "monitoring-layers":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <h2 className="text-5xl font-black mb-12">{slide.title}</h2>
            <div className="space-y-6">
              {slide.layers.map((item, i) => (
                <div key={i} className="bg-white/20 backdrop-blur rounded-2xl p-10">
                  <div className="flex items-start gap-8">
                    <div>
                      <h3 className="text-3xl font-black mb-4">{item.layer}</h3>
                      <div className="space-y-2 mb-4">
                        {item.metrics.map((metric, j) => (
                          <p key={j} className="text-lg flex items-center gap-2">
                            <span className="text-yellow-300">•</span> {metric}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/30 rounded-xl px-6 py-4 whitespace-nowrap">
                      <p className="text-sm opacity-70 mb-1">EXAMPLE:</p>
                      <p className="font-bold text-lg">{item.example}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "recap":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <h2 className="text-5xl font-black mb-12">{slide.title}</h2>
            <div className="grid grid-cols-2 gap-12">
              {slide.sections.map((section, i) => (
                <div key={i} className="bg-white/20 backdrop-blur rounded-2xl p-10">
                  <h3 className="text-3xl font-bold mb-6">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-lg">
                        <Play className="w-5 h-5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case "pathway":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <h2 className="text-5xl font-black mb-4">{slide.title}</h2>
            <p className="text-2xl opacity-90 mb-12">{slide.subtitle}</p>
            
            <div className="flex items-start justify-center gap-8 mb-16">
              {slide.pathways.map((pathway, i) => (
                <div key={i} className="flex flex-col items-center gap-4">
                  <div 
                    className={`rounded-xl p-8 w-56 h-80 text-center transform hover:scale-105 transition flex flex-col items-center justify-center ${pathway.bgColor}`}
                  >
                    <div className="text-6xl mb-3">{pathway.icon}</div>
                    <h3 className="text-2xl font-black mb-1">{pathway.number}</h3>
                    <h4 className="text-xl font-bold mb-3">{pathway.label}</h4>
                    <p className="text-sm opacity-90 line-clamp-4">{pathway.desc}</p>
                  </div>
                  {i < slide.pathways.length - 1 && (
                    <div className="text-4xl text-white/70">↓</div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="flex-1 h-2 bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-red-500 rounded-full"></div>
              <span className="text-4xl text-white/80">→</span>
            </div>
            <p className="text-center text-2xl opacity-90 font-bold">{slide.progressLabel}</p>
          </div>
        );

      case "cta":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col items-center justify-center text-center`}>
            <h2 className="text-6xl font-black mb-8">{slide.title}</h2>
            <div className="bg-white/20 backdrop-blur rounded-2xl p-12 max-w-2xl mb-8">
              <p className="text-3xl mb-6 font-bold">{slide.challenge}</p>
              <p className="text-2xl opacity-90">{slide.action}</p>
            </div>
            <div className="text-7xl">🚀</div>
          </div>
        );

      default:
        return <div>Unknown slide layout</div>;
    }
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col">
      {/* Slide Content */}
      <div className="flex-1 overflow-hidden">
        {renderSlide(slides[currentSlide])}
      </div>

      {/* Navigation Bar */}
      <div className="bg-slate-900 border-t border-slate-700 px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => goToSlide(currentSlide - 1)}
          style={{ backgroundColor: '#2563eb' }}
          className="flex items-center gap-2 px-6 py-3 hover:opacity-80 rounded-lg text-white font-semibold transition"
        >
          <ChevronLeft className="w-5 h-5" /> Previous
        </button>

        <div className="flex items-center gap-4">
          <span className="text-white font-mono text-lg">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>

        <button
          onClick={() => goToSlide(currentSlide + 1)}
          style={{ backgroundColor: '#2563eb' }}
          className="flex items-center gap-2 px-6 py-3 hover:opacity-80 rounded-lg text-white font-semibold transition"
        >
          Next <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicator Dots */}
      <div className="bg-slate-900 px-6 py-4 flex justify-center gap-2 flex-wrap">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            style={{ backgroundColor: '#2563eb' }}
            className={`w-3 h-3 rounded-full transition ${
              i === currentSlide ? 'bg-blue-500 w-8' : 'bg-slate-600 hover:bg-slate-500'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlidePresentation;