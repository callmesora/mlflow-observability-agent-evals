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
    // Slide 1: Title
    {
      title: "Evals First, Code Second",
      subtitle: "Building Reliable AI Agents Through Evaluation-Driven Development",
      layout: "title",
      accent: "from-blue-600 to-cyan-600"
    },
    // Slide 2: ML Engineering Roadmap (Context)
    {
      title: "The ML Engineering Roadmap",
      layout: "full-image",
      image: "https://imgur.com/placeholder1.jpg",
      alt: "ML Engineering Roadmap with Planning, Scoping, Experimentation, Development, Deployment, and Evaluation phases",
      accent: "from-slate-700 to-slate-900"
    },
    // Slide 3: Key Challenge
    {
      title: "🎯 Key Challenge:",
      layout: "challenge",
      accent: "from-red-600 to-orange-600"
    },
    // Slide 4: The Problem
    {
      title: "The Agent Building Problem",
      layout: "problem",
      points: [
        { icon: "⚠️", text: "We build agents blindly, hoping they work" },
        { icon: "🔄", text: "Discover bugs only in production" },
        { icon: "💰", text: "Expensive debugging cycles" },
        { icon: "😰", text: "No confidence in edge case handling" }
      ],
      accent: "from-red-500 to-orange-500"
    },
    // Slide 3: The Solution
    {
      title: "Evaluation-Driven Development",
      subtitle: "A Paradigm Shift",
      layout: "concept",
      content: "Define WHAT SUCCESS LOOKS LIKE before writing a single line of agent code.",
      accent: "from-emerald-500 to-teal-500"
    },
    // Slide 4: EDD Philosophy
    {
      title: "The EDD Philosophy",
      layout: "philosophy",
      phases: [
        { number: "1", label: "Define", desc: "Test Cases & Metrics" },
        { number: "2", label: "Build", desc: "Agents & Tools" },
        { number: "3", label: "Evaluate", desc: "Automated Scoring" },
        { number: "4", label: "Iterate", desc: "Based on Traces" }
      ],
      accent: "from-purple-500 to-pink-500"
    },
    // Slide 5: Why Evals Matter
    {
      title: "Why Evals Matter",
      layout: "grid",
      items: [
        { icon: "📊", title: "Quantify Quality", desc: "No more 'seems good'" },
        { icon: "🔍", title: "Catch Edge Cases", desc: "Before production" },
        { icon: "🚀", title: "Ship with Confidence", desc: "Metrics don't lie" },
        { icon: "📈", title: "Track Progress", desc: "See improvements over time" }
      ],
      accent: "from-indigo-500 to-blue-500"
    },
    // Slide 6: RAG vs Agents
    {
      title: "Two Critical Patterns",
      layout: "comparison",
      left: {
        title: "RAG Systems",
        icon: "🔍",
        points: ["Retrieval Quality", "Answer Correctness", "Multi-hop Reasoning"]
      },
      right: {
        title: "Agentic Systems",
        icon: "🤖",
        points: ["Tool Efficiency", "SOP Adherence", "Decision Logic"]
      },
      accent: "from-cyan-500 to-blue-500"
    },
    // Slide 7: Test Case Design
    {
      title: "Designing Test Cases",
      layout: "feature",
      icon: "🎯",
      content: "Multi-hop test cases reveal real issues. Single-hop is too easy.",
      example: "❌ 'What\\'s the battery life?' → Easy\n✅ 'Can I use Watch X with Phone Y?' → Requires 2 docs",
      accent: "from-orange-500 to-red-500"
    },
    // Slide 8: Scorers & Judges
    {
      title: "Scorers: How We Measure",
      layout: "scorers",
      scorers: [
        { name: "Correctness", desc: "Is the answer factually right?" },
        { name: "Relevance", desc: "Does it answer the question?" },
        { name: "Context Relevancy", desc: "Were retrieved docs relevant?" },
        { name: "Tool Trajectory", desc: "Did tools follow SOP?" }
      ],
      accent: "from-violet-500 to-purple-500"
    },
    // Slide 9: Traces Are Gold
    {
      title: "Traces: Your Debugging Superpower",
      layout: "concept",
      content: "Every agent execution is captured as a hierarchical trace. Debug failures with surgical precision.",
      accent: "from-amber-500 to-orange-500"
    },
    // Slide 10: Trace Anatomy
    {
      title: "Understanding Traces",
      layout: "trace",
      traceItems: [
        { depth: 0, label: "Trace (entire execution)" },
        { depth: 1, label: "├── Span: LLM Call" },
        { depth: 1, label: "├── Span: Tool Call (search)" },
        { depth: 2, label: "│   ├── Input: {query}" },
        { depth: 2, label: "│   └── Output: [results]" },
        { depth: 1, label: "└── Span: Tool Call (publish)" }
      ],
      accent: "from-slate-600 to-slate-700"
    },
    // Slide 11: RAG Scenario
    {
      title: "Scenario 1: Product Support Bot",
      layout: "scenario",
      scenario: "RAG",
      problem: "User asks: 'Can I use Watch Pro with Phone X10?'",
      solution: "Must retrieve specs from BOTH product docs",
      icon: "🛍️",
      accent: "from-blue-500 to-cyan-500"
    },
    // Slide 12: Agent Scenario
    {
      title: "Scenario 2: CMS Manager Agent",
      layout: "scenario",
      scenario: "Agent",
      problem: "User: 'Ensure Summer Recipes is published'",
      solution: "Search → Check Status → Publish ONLY if needed",
      icon: "📝",
      accent: "from-emerald-500 to-teal-500"
    },
    // Slide 13: Metrics & KPIs
    {
      title: "Building Success: The KPI Pyramid",
      layout: "full-image",
      image: "https://imgur.com/placeholder2.jpg",
      alt: "KPI Pyramid showing Software System Health, Data Quality, ML Model Quality, and Business KPI",
      accent: "from-red-700 to-red-900"
    },
    // Slide 14: Setting Baselines
    {
      title: "Setting Baselines",
      layout: "baseline",
      metrics: [
        { name: "Correctness", target: "> 0.85", why: "Core quality" },
        { name: "Relevance", target: "> 0.80", why: "Addresses user need" },
        { name: "Efficiency", target: "No redundant calls", why: "Cost & latency" }
      ],
      accent: "from-pink-500 to-rose-500"
    },
    // Slide 14: The Feedback Loop
    {
      title: "The EDD Feedback Loop",
      layout: "loop",
      steps: [
        "Evaluate Current State",
        "Identify Low Scores",
        "Drill Into Traces",
        "Root Cause Analysis",
        "Improve (Prompt/Tools/Data)",
        "Re-evaluate"
      ],
      accent: "from-green-500 to-emerald-500"
    },
    // Slide 15: Before vs After
    {
      title: "Before EDD vs After EDD",
      layout: "beforeafter",
      before: {
        title: "Before",
        points: ["Hope agents work", "Discover bugs late", "Manual testing", "Ship with doubt"]
      },
      after: {
        title: "After",
        points: ["Know agents work", "Catch issues early", "Automated scoring", "Ship with confidence"]
      },
      accent: "from-red-500 to-green-500"
    },
    // Slide 16: CI/CD Integration
    {
      title: "Scale with CI/CD",
      layout: "feature",
      icon: "🔄",
      content: "Run evals on every commit. Fail builds if metrics drop.",
      example: "Your agent improves → Metrics improve → Deploy with confidence",
      accent: "from-purple-500 to-indigo-500"
    },
    // Slide 17: Quick Tips
    {
      title: "EDD Best Practices",
      layout: "tips",
      tips: [
        "Start with 5-10 critical test cases, not 100",
        "Include edge cases that previously failed",
        "Use LLM-as-a-judge but understand limitations",
        "Monitor traces religiously",
        "Update tests as you discover new issues"
      ],
      accent: "from-yellow-500 to-amber-500"
    },
    // Slide 18: Experiment Tracking (with diagram)
    {
      title: "Experiment Tracking: The EDD Workflow",
      layout: "experiment",
      accent: "from-blue-600 to-indigo-600"
    },

    // Slide 19: Key Challenge
    {
      title: "🎯 Key Challenge:",
      layout: "challenge",
      accent: "from-red-600 to-orange-600"
    },

    // Slide 20: Tools & Resources
    {
      title: "Your EDD Toolkit",
      layout: "tools",
      tools: [
        { name: "MLflow", purpose: "Trace logging & evaluation" },
        { name: "LangChain", purpose: "Agent framework" },
        { name: "DeepEval", purpose: "Custom metrics" },
        { name: "Your imagination", purpose: "Better prompts & tools" }
      ],
      accent: "from-blue-600 to-cyan-600"
    },
    // Slide 19: Monitoring Section - Title
    {
      title: "🔍 Beyond Launch: Monitoring & Continuous Improvement",
      layout: "concept",
      content: "Your evals don't stop after launch. They become your production monitoring system.",
      accent: "from-purple-600 to-indigo-600"
    },
    // Slide 20: Monitoring Scenario 1 - Data Drift
    {
      title: "Scenario 1: Detecting Data Drift",
      layout: "monitoring-scenario",
      scenario: "RAG Agent",
      icon: "🚨",
      problem: "One day: gibberish output. Why? Users started uploading French documents.",
      solution: "Your monitoring catches it:",
      steps: [
        "📊 Text cohesiveness score drops → Alarm triggered",
        "🔎 Investigation: Check input data",
        "📝 Discovery: French content detected (data drift)",
        "🎯 Data distribution changed → Model behavior changed",
        "✅ Action: Retrain embedder or add multilingual support"
      ],
      accent: "from-orange-500 to-red-500"
    },
    // Slide 21: Monitoring Scenario 2 - Model Upgrade
    {
      title: "Scenario 2: Confident Model Upgrades",
      layout: "monitoring-scenario",
      scenario: "Agent Upgrade",
      icon: "⬆️",
      problem: "Claude 5 Turbo Mini is released. Should we switch?",
      solution: "Your monitoring proves it's safe:",
      steps: [
        "🧪 Deploy new model in shadow mode with same evals",
        "📈 Compare: Task completion rate (same or better?)",
        "💾 Compare: Average tool calls per task (fewer = cheaper)",
        "🔄 Compare: Prompt performance (do old prompts still work?)",
        "✅ Data-driven decision: Switch with confidence"
      ],
      accent: "from-green-500 to-emerald-500"
    },
    // Slide 22: Why Monitoring Matters
    {
      title: "Why Continuous Monitoring?",
      layout: "monitoring-benefits",
      benefits: [
        {
          icon: "🛑",
          title: "Catch Issues Early",
          desc: "Detect problems before users complain"
        },
        {
          icon: "💡",
          title: "Safe Experimentation",
          desc: "Try upgrades with data backing your decisions"
        },
        {
          icon: "💰",
          title: "Cost Optimization",
          desc: "Switch models/prompts when metrics prove it's worth it"
        },
        {
          icon: "📊",
          title: "Build Trust",
          desc: "Stakeholders see metrics, not just 'it seems better'"
        }
      ],
      accent: "from-blue-600 to-cyan-600"
    },
    // Slide 23: Monitoring Metrics by Layer
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
          example: "Fewer tool calls after upgrade"
        },
        {
          layer: "Business Layer",
          metrics: ["User satisfaction", "Cost per task", "Response latency"],
          example: "Cost savings with new model"
        }
      ],
      accent: "from-violet-500 to-purple-500"
    },
    // Slide 24: Workshop Recap
    {
      title: "What We're Building Today",
      layout: "recap",
      sections: [
        { title: "RAG Evaluation", items: ["Knowledge base", "Multi-hop queries", "Retrieval scorers"] },
        { title: "Agent Evaluation", items: ["Tool trajectory", "Task completion", "Efficiency analysis"] }
      ],
      accent: "from-pink-500 to-purple-500"
    },
    // Slide 25: Call to Action
    {
      title: "Your Challenge",
      layout: "cta",
      challenge: "Don't just watch—code along. Modify. Experiment. Break it.",
      action: "After today: Take your own agents. Write evals first. Ship with confidence.",
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

      case "problem":
        return (
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <h2 className="text-5xl font-black mb-12">{slide.title}</h2>
            <div className="space-y-6">
              {slide.points.map((pt, i) => (
                <div key={i} className="flex items-start gap-6 text-xl">
                  <span className="text-4xl">{pt.icon}</span>
                  <p className="pt-2">{pt.text}</p>
                </div>
              ))}
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
          <div className={`h-full bg-gradient-to-br ${slide.accent} text-white p-12 flex flex-col justify-center`}>
            <h2 className="text-5xl font-black mb-12">{slide.title}</h2>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-12 max-h-96 overflow-auto">
              <svg viewBox="0 0 1000 600" className="w-full h-auto">
                {/* Experiment 1 Box */}
                <rect x="20" y="30" width="250" height="140" rx="20" fill="none" stroke="white" strokeWidth="2"/>
                <text x="40" y="60" fontSize="18" fontWeight="bold" fill="white">Experiment 1</text>
                <text x="40" y="90" fontSize="14" fill="#64B5F6">- LLangchain</text>
                <text x="40" y="115" fontSize="14" fill="#64B5F6">- Multi Agent</text>
                <text x="40" y="140" fontSize="14" fill="#64B5F6">- React Tool calling on each agent</text>
                <text x="85" y="170" fontSize="16" fontWeight="bold" fill="#FFB74D">LangChain</text>

                {/* Run 1 Bad - Red arrow */}
                <line x1="270" y1="100" x2="380" y2="100" stroke="#EF5350" strokeWidth="3" markerEnd="url(#arrowred)"/>
                <rect x="380" y="60" width="200" height="80" rx="10" fill="none" stroke="#EF5350" strokeWidth="2"/>
                <text x="390" y="85" fontSize="14" fontWeight="bold" fill="#EF5350">Very Bad</text>
                <text x="390" y="105" fontSize="14" fontWeight="bold" fill="#EF5350">Performance on</text>
                <text x="390" y="125" fontSize="14" fontWeight="bold" fill="#EF5350">Q4 Dataset</text>

                {/* Comment */}
                <text x="590" y="105" fontSize="13" fill="#FFD54F" fontStyle="italic">Seems to be an</text>
                <text x="590" y="125" fontSize="13" fill="#FFD54F" fontStyle="italic">overall solution</text>

                {/* Run 1 False Refusals - Red arrow */}
                <line x1="270" y1="150" x2="380" y2="200" stroke="#EF5350" strokeWidth="3" markerEnd="url(#arrowred)"/>
                <rect x="380" y="170" width="200" height="80" rx="10" fill="none" stroke="#EF5350" strokeWidth="2"/>
                <text x="390" y="195" fontSize="14" fontWeight="bold" fill="#EF5350">Lots of False</text>
                <text x="390" y="215" fontSize="14" fontWeight="bold" fill="#EF5350">refusals</text>

                {/* Comment for false refusals */}
                <text x="590" y="200" fontSize="13" fill="#FFD54F" fontStyle="italic">Better put my focus</text>
                <text x="590" y="220" fontSize="13" fill="#FFD54F" fontStyle="italic">elsewhere</text>

                {/* Experiment 2 Box */}
                <rect x="20" y="300" width="250" height="120" rx="20" fill="none" stroke="white" strokeWidth="2"/>
                <text x="40" y="330" fontSize="18" fontWeight="bold" fill="white">Experiment 2</text>
                <text x="40" y="360" fontSize="14" fill="#64B5F6">- LlamaIndex</text>
                <text x="40" y="385" fontSize="14" fill="#64B5F6">- ReFlexion Prompting</text>
                <text x="40" y="410" fontSize="14" fill="#64B5F6">- RAG with Reranker</text>
                <text x="95" y="440" fontSize="16" fontWeight="bold" fill="white">LlamaIndex</text>

                {/* Run 2 Blue arrow */}
                <line x1="270" y1="360" x2="380" y2="360" stroke="#42A5F5" strokeWidth="3" markerEnd="url(#arrowblue)"/>
                <rect x="380" y="330" width="200" height="80" rx="10" fill="none" stroke="#42A5F5" strokeWidth="2"/>
                <text x="390" y="355" fontSize="14" fontWeight="bold" fill="#42A5F5">Great Results But</text>
                <text x="390" y="375" fontSize="14" fontWeight="bold" fill="#42A5F5">Expensive token</text>
                <text x="390" y="395" fontSize="14" fontWeight="bold" fill="#42A5F5">spending</text>

                {/* Comment */}
                <text x="590" y="375" fontSize="13" fill="#FFD54F" fontStyle="italic">Not bad, let's see</text>
                <text x="590" y="395" fontSize="13" fill="#FFD54F" fontStyle="italic">if we can come up with</text>
                <text x="590" y="415" fontSize="13" fill="#FFD54F" fontStyle="italic">something else</text>

                {/* Experiment 3 Box */}
                <rect x="20" y="490" width="250" height="100" rx="20" fill="none" stroke="white" strokeWidth="2"/>
                <text x="40" y="520" fontSize="18" fontWeight="bold" fill="white">Experiment 3</text>
                <text x="40" y="550" fontSize="14" fill="#64B5F6">- Plain LLM</text>
                <text x="40" y="575" fontSize="14" fill="#64B5F6">- Simple RAG, without Reranker</text>
                <text x="95" y="600" fontSize="16" fontWeight="bold" fill="white">OpenAI</text>

                {/* Run 3 Green arrow */}
                <line x1="270" y1="540" x2="380" y2="540" stroke="#66BB6A" strokeWidth="3" markerEnd="url(#arrowgreen)"/>
                <rect x="380" y="510" width="200" height="80" rx="10" fill="none" stroke="#66BB6A" strokeWidth="2"/>
                <text x="390" y="535" fontSize="14" fontWeight="bold" fill="#66BB6A">Factfulness = 0.9</text>
                <text x="390" y="555" fontSize="14" fontWeight="bold" fill="#66BB6A">Good metrics!</text>

                {/* Comment */}
                <text x="590" y="545" fontSize="13" fill="#FFD54F" fontStyle="italic">Now we're talking!</text>

                {/* Arrow markers */}
                <defs>
                  <marker id="arrowred" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#EF5350"/>
                  </marker>
                  <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#42A5F5"/>
                  </marker>
                  <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#66BB6A"/>
                  </marker>
                </defs>
              </svg>
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
          className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-white font-semibold transition"
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
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition"
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