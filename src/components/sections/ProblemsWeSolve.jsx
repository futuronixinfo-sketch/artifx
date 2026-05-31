'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import { problemsWeSolve } from '@/data/home';
import { ShieldAlert, Clock, Activity, TrendingDown, Terminal, AlertTriangle, Cpu } from 'lucide-react';

const problemSpecs = [
  {
    id: 'silos',
    title: "Data Silos",
    stat: "18.4%",
    statLabel: "Data Error Rate",
    description: "Customer data lives scattered across isolated spreadsheets, personal WhatsApps, and personal emails, creating total blind spots and fragmented records.",
    loss: "CRITICAL: OVERLAPPING INQUIRIES & REPETITIVE WORKLOADS DETECTED",
    icon: ShieldAlert,
    color: "#ef4444"
  },
  {
    id: 'response',
    title: "Slow Lead Response",
    stat: "6.4 hrs",
    statLabel: "Avg. Response Latency",
    description: "Fresh, high-intent inbound leads sit frozen in inbox backlogs while competitors follow up and close them in sub-second response speeds.",
    loss: "WARNING: 80% CHURN INCREASE OBSERVED ON AGED TELEMETRY LEADS",
    icon: Clock,
    color: "#f59e0b"
  },
  {
    id: 'decision',
    title: "Blind Decision Making",
    stat: "14 days",
    statLabel: "Data Latency / Delay",
    description: "Strategic choices and financial investments are dictated by guesswork and outdated reports compiled weeks ago instead of live system signals.",
    loss: "CRITICAL: STRATEGIC PLANNING LAG IS DRIFTING BUSINESS VELOCITY",
    icon: Activity,
    color: "#ef4444"
  },
  {
    id: 'burnout',
    title: "Admin Burnout",
    stat: "84%",
    statLabel: "Wasted Human Effort",
    description: "Your highest-paid talent wastes 80% of their operational capacity copy-pasting data, sending manual updates, and fighting recurring admin chaos.",
    loss: "WARNING: REPETITIVE TASKS REDUCING IN-HOUSE VELOCITY CAPACITY",
    icon: TrendingDown,
    color: "#f59e0b"
  }
];

export default function ProblemsWeSolve() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative py-32 bg-white border-t border-b border-gray-100 overflow-hidden select-none">
      {/* Decorative top grid guide */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-gray-200 to-transparent" />
      
      {/* Ambient Crimson Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-50/20 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <span className="text-xs font-mono text-red-600 uppercase tracking-widest block font-bold">
            [ SYSTEM DIAGNOSTICS ]
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black leading-[0.95] uppercase">
            The Cost of <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">
              Manual Chaos.
            </span>
          </h2>
          <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed font-light">
            Manual processes stunt company growth. Select a system bottleneck on the left console to scan its telemetry diagnostic.
          </p>
        </div>

        {/* INTERACTIVE TELEMETRY VULNERABILITY CONSOLE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Problem Tabs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-3 relative z-10">
            {problemSpecs.map((item, idx) => {
              const isActive = idx === activeTab;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-5 border rounded-2xl flex items-center justify-between transition-all duration-500 group focus:outline-none ${
                    isActive
                      ? 'bg-black text-white border-black scale-102 shadow-xl shadow-black/5'
                      : 'bg-gray-50/50 text-gray-400 hover:text-black hover:border-gray-300 border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Index mono indicator */}
                    <span className={`text-[10px] font-mono font-bold transition-colors ${
                      isActive ? 'text-red-500' : 'text-gray-300 group-hover:text-red-500'
                    }`}>
                      0{idx + 1}
                    </span>
                    
                    {/* Icon */}
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-500 ${
                      isActive
                        ? 'bg-neutral-900 border-neutral-800 text-red-500'
                        : 'bg-white border-gray-200 text-gray-400 group-hover:bg-red-50 group-hover:border-red-100 group-hover:text-red-600'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <span className="text-xs font-mono font-bold uppercase tracking-wider">{item.title}</span>
                  </div>

                  <span className={`text-[10px] font-mono transition-colors ${
                    isActive ? 'text-red-500 font-bold' : 'text-gray-300 group-hover:text-black'
                  }`}>
                    {isActive ? 'SCANNING' : 'SELECT'} &rarr;
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Breathtaking Telemetry Scanner HUD Screen (7 cols) */}
          <div className="lg:col-span-7 flex">
            <div className="w-full border border-gray-200 bg-black text-white rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between min-h-[380px] shadow-2xl shadow-red-950/10">
              {/* Glowing Ambient red aura background */}
              <div className="absolute top-0 right-0 w-52 h-52 bg-red-900 rounded-full blur-[100px] pointer-events-none opacity-40" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 h-full flex flex-col justify-between relative z-10"
                >
                  {/* HUD Header */}
                  <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
                    <span className="text-[10px] font-mono text-red-500 font-bold tracking-widest flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                      </span>
                      VULNERABILITY DETECTED // PHASE 0{activeTab + 1}
                    </span>
                    <span className="text-[9px] font-mono text-neutral-500">DIAGNOSTIC TRACE</span>
                  </div>

                  {/* Split Layout: SVG Vector Graphic & Main Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    
                    {/* Left: Dynamic bottleneck animated visualizer */}
                    <div className="md:col-span-7 space-y-4">
                      <h4 className="text-xl font-bold uppercase text-white tracking-tight border-b border-neutral-800/50 pb-2">
                        {problemSpecs[activeTab].title}
                      </h4>
                      <p className="text-xs text-neutral-400 font-light leading-relaxed">
                        {problemSpecs[activeTab].description}
                      </p>
                    </div>

                    {/* Right: Massive High-Friction Statistics readout */}
                    <div className="md:col-span-5 border border-neutral-800 bg-neutral-950 p-5 rounded-2xl text-center space-y-2 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-red-950/20 rounded-full blur-xl pointer-events-none" />
                      <div className="text-[9px] font-mono text-red-500 uppercase tracking-widest font-bold">Friction Index</div>
                      
                      <div className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none pt-1">
                        {problemSpecs[activeTab].stat}
                      </div>
                      
                      <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">
                        {problemSpecs[activeTab].statLabel}
                      </div>
                    </div>

                  </div>

                  {/* Telemetry log trace block */}
                  <div className="bg-neutral-950 border border-neutral-800 p-3.5 rounded-xl font-mono text-[9px] text-red-500 flex gap-2.5 items-start">
                    <Terminal className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-[8px] text-neutral-400 font-bold uppercase mb-0.5">TELEMETRY DEGRADATION REPORT</h5>
                      <p className="leading-relaxed font-bold">{problemSpecs[activeTab].loss}</p>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* HUD Footer readouts */}
              <div className="mt-8 pt-4 border-t border-neutral-900 flex justify-between items-center text-[9px] font-mono text-neutral-500 relative z-10">
                <span className="flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-600 animate-bounce" />
                  INFRASTRUCTURE RISK: HIGH
                </span>
                <span>SYSTEM HEALTH: DEGRADED</span>
              </div>

            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
