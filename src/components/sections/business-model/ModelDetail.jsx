'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight, 
  Lightbulb, 
  TrendingUp, 
  Code2, 
  Target, 
  Workflow, 
  Play, 
  Pause, 
  Terminal, 
  Coins, 
  Cpu, 
  Activity, 
  Info,
  Layers,
  Sparkles
} from 'lucide-react';
import { getModelFlow } from '@/data/modelFlows';

// Simple helper to normalize name into slug
function modelSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function ModelDetail({ model, category }) {
  const modelSlugStr = modelSlug(model.name);
  const flowData = getModelFlow(category.id, modelSlugStr, model);

  // States
  const [isMoneyFlow, setIsMoneyFlow] = useState(false);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(true);
  const [terminalLogs, setTerminalLogs] = useState([]);
  const terminalEndRef = useRef(null);

  // Toggle Flow Mode
  const handleFlowToggle = (mode) => {
    setIsMoneyFlow(mode);
    setCurrentLogIndex(0);
  };

  // Steps matching the mode
  const stepsToRender = isMoneyFlow ? flowData.moneyFlow : flowData.steps;

  // Steps count
  const totalSteps = stepsToRender.length;
  // Active step highlights (synced with the logs index)
  const activeStep = isMoneyFlow
    ? (currentLogIndex >= totalSteps ? totalSteps - 1 : currentLogIndex)
    : (currentLogIndex >= totalSteps ? totalSteps - 1 : currentLogIndex);

  // Log Simulation Loop
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      setCurrentLogIndex((prev) => (prev + 1) % flowData.simulatedLogs.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [isSimulating, flowData.simulatedLogs]);

  // Sync log array based on log index
  useEffect(() => {
    const activeLogs = [];
    // Include all logs up to currentLogIndex
    for (let i = 0; i <= currentLogIndex; i++) {
      if (flowData.simulatedLogs[i]) {
        activeLogs.push(flowData.simulatedLogs[i]);
      }
    }
    setTerminalLogs(activeLogs);

    // Auto-scroll terminal
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollTop = terminalEndRef.current.scrollHeight;
    }
  }, [currentLogIndex, flowData.simulatedLogs]);

  // Restart/Trigger transaction manually
  const triggerManualTransaction = () => {
    setCurrentLogIndex(0);
    setIsSimulating(true);
    // Add a quick system log
    setTerminalLogs([`[SYS] Force-triggering live transaction pipeline...`]);
  };

  return (
    <section className="relative py-12 bg-[#FAFAF8] select-none">
      <Container className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="space-y-8"
        >
          {/* ── HEADER ── */}
          <div className="border-b-2 border-black pb-8 space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3 py-1 bg-[#FFE500] text-black font-mono text-[10px] font-black border-2 border-black uppercase tracking-widest shadow-[2px_2px_0_#0A0A0A]">
                {category.name}
              </span>
              {model.example && (
                <span className="px-3 py-1 bg-white text-gray-700 font-mono text-[10px] border-2 border-black uppercase tracking-widest">
                  e.g. {model.example}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-black leading-[0.95] tracking-tight">
              {model.name}
            </h1>

            <p className="text-base text-gray-700 leading-relaxed max-w-3xl">
              {model.desc}
            </p>
          </div>

          {/* ── VISUAL FLOW DASHBOARD (UX FIX) ── */}
          <div className="border-2 border-black shadow-[6px_6px_0_#0A0A0A] bg-white overflow-hidden flex flex-col">
            {/* Control Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-black bg-[#FAFAF8] p-4 gap-3">
              <div className="flex items-center gap-2">
                <Workflow className="w-5 h-5 text-[#DC2626]" />
                <span className="font-mono text-xs font-black uppercase tracking-wider text-black">
                  Interactive Business Flow
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[9px] bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 uppercase font-bold ml-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping inline-block" />
                  Live Simulator
                </span>
              </div>

              {/* Mode Toggles */}
              <div className="flex border-2 border-black p-0.5 bg-white max-w-max">
                <button
                  onClick={() => handleFlowToggle(false)}
                  className={`px-3 py-1.5 font-mono text-[10px] font-black uppercase tracking-wider transition-all duration-100 ${
                    !isMoneyFlow 
                      ? 'bg-black text-white' 
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  ⚙️ Data & Ops Flow
                </button>
                <button
                  onClick={() => handleFlowToggle(true)}
                  className={`px-3 py-1.5 font-mono text-[10px] font-black uppercase tracking-wider transition-all duration-100 ${
                    isMoneyFlow 
                      ? 'bg-[#FFE500] text-black border-l-2 border-black' 
                      : 'bg-white text-black hover:bg-gray-100 border-l-2 border-black'
                  }`}
                >
                  💰 Money & Payouts
                </button>
              </div>
            </div>

            {/* Dashboard Workspace */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Visual Pipeline representation */}
              <div className="lg:col-span-8 p-6 bg-[#FAFAF8] border-r-0 lg:border-r-2 lg:border-black flex flex-col justify-center min-h-[280px] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] bg-size-[18px_18px] opacity-40 pointer-events-none" />
                
                {/* Connector Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-12 right-12 h-1 bg-black -translate-y-1/2 z-0" />

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-stretch gap-6 md:gap-4">
                  {stepsToRender.map((step, idx) => {
                    const isPassed = idx < activeStep;
                    const isActive = idx === activeStep;
                    
                    return (
                      <div
                        key={idx}
                        onClick={() => setCurrentLogIndex(idx)}
                        className={`flex-1 relative cursor-pointer group flex flex-col justify-between p-4 border-2 border-black shadow-[3px_3px_0_#0A0A0A] hover:-translate-y-0.5 transition-all duration-150 ${
                          isActive 
                            ? 'bg-[#FFE500] shadow-[5px_5px_0_#0A0A0A]' 
                            : isPassed 
                              ? 'bg-[#e2f9e9]' 
                              : 'bg-white'
                        }`}
                      >
                        {/* Mobile Connectors */}
                        {idx < totalSteps - 1 && (
                          <div className="block md:hidden absolute left-1/2 -bottom-6 w-1 h-6 bg-black -translate-x-1/2 z-0" />
                        )}

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[9px] font-black text-gray-500">
                              STEP 0{idx + 1}
                            </span>
                            {isPassed && (
                              <span className="font-mono text-[9px] font-bold text-emerald-700">✓ OK</span>
                            )}
                            {isActive && (
                              <span className="w-2 h-2 bg-[#DC2626] rounded-full animate-ping" />
                            )}
                          </div>

                          <h3 className="font-black text-xs uppercase text-black leading-tight tracking-tight">
                            {step.title}
                          </h3>

                          <p className="text-[10px] text-gray-600 leading-snug line-clamp-3">
                            {step.desc}
                          </p>
                        </div>

                        {/* Tech Tag Badge */}
                        <div className="mt-4 pt-2 border-t border-black/10">
                          <span className="inline-block font-mono text-[8px] bg-black text-white px-1.5 py-0.5 border border-black uppercase font-bold">
                            {step.tech}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Console / Log Terminal */}
              <div className="lg:col-span-4 bg-black p-4 flex flex-col h-[280px] lg:h-auto min-h-[250px]">
                <div className="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full inline-block" />
                    <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full inline-block" />
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full inline-block" />
                    <span className="ml-2 font-mono text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      CONSOLE SHELL
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsSimulating(!isSimulating)}
                      className="p-1 hover:bg-gray-800 text-gray-400 hover:text-white border border-gray-800 transition-colors"
                      title={isSimulating ? "Pause Simulator" : "Play Simulator"}
                    >
                      {isSimulating ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    </button>
                    <button
                      onClick={triggerManualTransaction}
                      className="p-1 hover:bg-gray-800 text-gray-400 hover:text-[#FFE500] border border-gray-800 transition-colors"
                      title="Trigger Transaction"
                    >
                      <Sparkles className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Log Terminal Screen */}
                <div 
                  ref={terminalEndRef}
                  className="flex-1 overflow-y-auto font-mono text-[10px] space-y-1.5 pr-2 custom-scrollbar text-emerald-400"
                >
                  <AnimatePresence initial={false}>
                    {terminalLogs.map((log, index) => {
                      let color = "text-emerald-400";
                      if (log.includes("[SYS]")) color = "text-blue-400 font-bold";
                      if (log.includes("[PAY]") || log.includes("[FUNDS]") || log.includes("[COMM]")) color = "text-[#FFE500]";
                      if (log.includes("✅")) color = "text-emerald-300 font-bold";
                      if (log.includes("[LEAD]") || log.includes("[TICKET]") || log.includes("[PATIENT]")) color = "text-purple-400";

                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.15 }}
                          className={`${color} leading-relaxed`}
                        >
                          {log}
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                  {isSimulating && (
                    <span className="inline-block w-1.5 h-3.5 bg-emerald-400 ml-1 animate-pulse" />
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* ── METRICS DASHBOARD (UX UPGRADE) ── */}
          <div className="space-y-4">
            <h2 className="text-xl font-black text-black uppercase tracking-wider flex items-center gap-2">
              <Activity className="w-4 h-4 text-black" />
              Key Business Metrics
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Take Rate */}
              <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_#0A0A0A] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[9px] font-black uppercase text-gray-400 block mb-1">
                    Take Rate / Margin
                  </span>
                  <div className="font-black text-lg md:text-xl text-[#DC2626]">
                    {flowData.metrics.takeRate}
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 mt-2 border-t border-black/10 pt-2 leading-snug">
                  Platform transaction split or markup percentage.
                </p>
              </div>

              {/* Dev Complexity */}
              <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_#0A0A0A] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[9px] font-black uppercase text-gray-400 block mb-1">
                    Development Complexity
                  </span>
                  <div className="font-black text-lg md:text-xl text-black">
                    {flowData.metrics.complexity}
                  </div>
                </div>
                <div className="mt-2 border-t border-black/10 pt-2 flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 leading-snug">Effort Level</span>
                  <div className="flex gap-0.5">
                    <span className={`w-1.5 h-1.5 border border-black ${flowData.metrics.complexity !== 'Low' ? 'bg-black' : 'bg-transparent'}`} />
                    <span className={`w-1.5 h-1.5 border border-black ${flowData.metrics.complexity === 'High' || flowData.metrics.complexity === 'Very High' ? 'bg-black' : 'bg-transparent'}`} />
                    <span className={`w-1.5 h-1.5 border border-black ${flowData.metrics.complexity === 'Very High' ? 'bg-black' : 'bg-transparent'}`} />
                  </div>
                </div>
              </div>

              {/* Setup Cost */}
              <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_#0A0A0A] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[9px] font-black uppercase text-gray-400 block mb-1">
                    Est. Setup Budget
                  </span>
                  <div className="font-black text-lg md:text-xl text-black">
                    {flowData.metrics.setupCost}
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 mt-2 border-t border-black/10 pt-2 leading-snug">
                  Estimated cloud infrastructure, API subscriptions, and initial launch budget.
                </p>
              </div>

              {/* Profit Margin */}
              <div className="bg-white border-2 border-black p-4 shadow-[3px_3px_0_#0A0A0A] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[9px] font-black uppercase text-gray-400 block mb-1">
                    Gross Profit Margin
                  </span>
                  <div className="font-black text-lg md:text-xl text-[#059669]">
                    {flowData.metrics.margin}
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 mt-2 border-t border-black/10 pt-2 leading-snug">
                  Net margin after direct operational/infra overhead.
                </p>
              </div>
            </div>
          </div>

          {/* ── SPEC CARDS (Tabulated & Badged) ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* How It Works */}
            <div className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] flex flex-col">
              <div className="flex items-center gap-2 px-5 py-3 border-b-2 border-black bg-[#FFE500] text-black">
                <Lightbulb className="w-4 h-4 shrink-0" />
                <span className="font-black text-[11px] uppercase tracking-widest">
                  How It Works
                </span>
              </div>
              <div className="px-5 py-5 flex-1 space-y-3">
                <p className="text-sm text-gray-800 leading-relaxed font-medium">
                  {model.howItWorks}
                </p>
                <div className="p-3 bg-[#FAFAF8] border border-black/10 rounded-none text-[11px] text-gray-600 flex gap-2">
                  <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    This operational loop coordinates database registers, event hooks, and direct checkout actions to scale value delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Revenue Model */}
            <div className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] flex flex-col">
              <div className="flex items-center gap-2 px-5 py-3 border-b-2 border-black bg-[#DC2626] text-white">
                <TrendingUp className="w-4 h-4 shrink-0" />
                <span className="font-black text-[11px] uppercase tracking-widest">
                  Revenue Engine
                </span>
              </div>
              <div className="px-5 py-5 flex-1 space-y-4">
                <p className="text-sm text-gray-800 leading-relaxed font-medium">
                  {model.revenueModel}
                </p>
                <div className="flex items-center gap-2 flex-wrap pt-2">
                  <span className="px-2 py-0.5 bg-red-50 text-red-700 font-mono text-[9px] border border-red-200 uppercase font-black tracking-wider">
                    Take rate: {flowData.metrics.takeRate}
                  </span>
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 font-mono text-[9px] border border-emerald-200 uppercase font-black tracking-wider">
                    LTV: {flowData.metrics.ltv}
                  </span>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] flex flex-col">
              <div className="flex items-center gap-2 px-5 py-3 border-b-2 border-black bg-black text-white">
                <Code2 className="w-4 h-4 shrink-0" />
                <span className="font-black text-[11px] uppercase tracking-widest">
                  Tech Architecture Stack
                </span>
              </div>
              <div className="px-5 py-5 flex-1">
                <p className="text-xs text-gray-500 uppercase font-mono tracking-wider mb-3 block">
                  Core Technologies Required:
                </p>
                <div className="flex flex-wrap gap-2">
                  {model.techStack && model.techStack.split(',').map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-[#FAFAF8] text-black font-mono text-[10px] font-black border border-black uppercase tracking-wider shadow-[1.5px_1.5px_0_#0A0A0A]"
                    >
                      🛠️ {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Suitable For */}
            <div className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] flex flex-col">
              <div className="flex items-center gap-2 px-5 py-3 border-b-2 border-black bg-black text-white">
                <Target className="w-4 h-4 shrink-0" />
                <span className="font-black text-[11px] uppercase tracking-widest">
                  Best Suited For
                </span>
              </div>
              <div className="px-5 py-5 flex-1">
                <p className="text-xs text-gray-500 uppercase font-mono tracking-wider mb-3 block">
                  Target Niches & Audiences:
                </p>
                <div className="flex flex-wrap gap-2">
                  {model.suitableFor && model.suitableFor.split(',').map((niche, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white text-gray-700 font-mono text-[10px] border border-black uppercase tracking-wider"
                    >
                      🎯 {niche.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* ── ACTIONS ── */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t-2 border-black">
            <Link
              href={`/business-model/${category.id}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-black bg-white text-black font-mono text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to {category.name}
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-black bg-black text-white font-mono text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0_#444] hover:shadow-[2px_2px_0_#444] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100"
            >
              Build This Model
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </motion.div>
      </Container>
    </section>
  );
}
