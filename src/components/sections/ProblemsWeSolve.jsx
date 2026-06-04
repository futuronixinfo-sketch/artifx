'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import { problemsWeSolve } from '@/data/home';
import { ShieldAlert, Clock, Activity, TrendingDown, Terminal, AlertTriangle } from 'lucide-react';

const problemSpecs = [
  {
    id: 'silos',
    title: "Data Silos",
    stat: "18.4%",
    statLabel: "Data Error Rate",
    description: "Customer data lives scattered across isolated spreadsheets, personal WhatsApps, and personal emails, creating total blind spots and fragmented records.",
    loss: "CRITICAL: OVERLAPPING INQUIRIES & REPETITIVE WORKLOADS DETECTED",
    icon: ShieldAlert,
    accent: "#DC2626"
  },
  {
    id: 'response',
    title: "Slow Lead Response",
    stat: "6.4 hrs",
    statLabel: "Avg. Response Latency",
    description: "Fresh, high-intent inbound leads sit frozen in inbox backlogs while competitors follow up and close them in sub-second response speeds.",
    loss: "WARNING: 80% CHURN INCREASE OBSERVED ON AGED TELEMETRY LEADS",
    icon: Clock,
    accent: "#FFE500"
  },
  {
    id: 'decision',
    title: "Blind Decision Making",
    stat: "14 days",
    statLabel: "Data Latency / Delay",
    description: "Strategic choices and financial investments are dictated by guesswork and outdated reports compiled weeks ago instead of live system signals.",
    loss: "CRITICAL: STRATEGIC PLANNING LAG IS DRIFTING BUSINESS VELOCITY",
    icon: Activity,
    accent: "#DC2626"
  },
  {
    id: 'burnout',
    title: "Admin Burnout",
    stat: "84%",
    statLabel: "Wasted Human Effort",
    description: "Your highest-paid talent wastes 80% of their operational capacity copy-pasting data, sending manual updates, and fighting recurring admin chaos.",
    loss: "WARNING: REPETITIVE TASKS REDUCING IN-HOUSE VELOCITY CAPACITY",
    icon: TrendingDown,
    accent: "#FFE500"
  }
];

export default function ProblemsWeSolve() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative py-24 bg-[#FAFAF8] border-t-2 border-black overflow-hidden select-none">

      <Container className="relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-600 text-white border-2 border-black shadow-[3px_3px_0_#0A0A0A]">
            <span className="text-[10px] font-mono font-black uppercase tracking-widest">[ SYSTEM DIAGNOSTICS ]</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black leading-[0.95] uppercase">
            The Cost of{' '}
            <span className="text-red-600 underline decoration-4 underline-offset-4">
              Manual Chaos.
            </span>
          </h2>
          <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed font-mono">
            Manual processes stunt company growth. Select a system bottleneck on the left console to scan its telemetry diagnostic.
          </p>
        </div>

        {/* INTERACTIVE TELEMETRY CONSOLE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-black shadow-[6px_6px_0_#0A0A0A]">

          {/* Left Panel: Problem Tabs */}
          <div className="lg:col-span-5 flex flex-col border-r-2 border-black">
            {problemSpecs.map((item, idx) => {
              const isActive = idx === activeTab;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-5 border-b-2 border-black flex items-center justify-between transition-all duration-100 focus:outline-none last:border-b-0 ${
                    isActive
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-[#FFE500]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] font-mono font-black transition-colors ${isActive ? 'text-red-400' : 'text-gray-400'}`}>
                      0{idx + 1}
                    </span>
                    <div className={`w-8 h-8 flex items-center justify-center border-2 transition-all duration-100 ${
                      isActive
                        ? 'bg-neutral-800 border-neutral-600 text-red-400'
                        : 'bg-[#FAFAF8] border-black text-black'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-black uppercase tracking-wider">{item.title}</span>
                  </div>
                  <span className={`text-[10px] font-mono font-black ${isActive ? 'text-red-400' : 'text-gray-400'}`}>
                    {isActive ? 'SCANNING' : 'SELECT'} &rarr;
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Telemetry Scanner HUD */}
          <div className="lg:col-span-7 flex">
            <div className="w-full bg-black text-white p-6 md:p-8 relative overflow-hidden flex flex-col justify-between min-h-95">

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6 h-full flex flex-col justify-between"
                >
                  {/* HUD Header */}
                  <div className="flex justify-between items-center border-b-2 border-neutral-800 pb-4">
                    <span className="text-[10px] font-mono text-red-500 font-black tracking-widest flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 bg-red-600"></span>
                      </span>
                      VULNERABILITY DETECTED // PHASE 0{activeTab + 1}
                    </span>
                    <span className="text-[9px] font-mono text-neutral-500">DIAGNOSTIC TRACE</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-7 space-y-4">
                      <h4 className="text-xl font-black uppercase text-white tracking-tight border-b-2 border-neutral-800 pb-2">
                        {problemSpecs[activeTab].title}
                      </h4>
                      <p className="text-xs text-neutral-400 font-mono leading-relaxed">
                        {problemSpecs[activeTab].description}
                      </p>
                    </div>

                    {/* Stats readout */}
                    <div className="md:col-span-5 border-2 border-neutral-700 bg-neutral-950 p-5 text-center space-y-2 relative overflow-hidden shadow-[3px_3px_0_#DC2626]">
                      <div className="text-[9px] font-mono text-red-500 uppercase tracking-widest font-black">Friction Index</div>
                      <div className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none pt-1">
                        {problemSpecs[activeTab].stat}
                      </div>
                      <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">
                        {problemSpecs[activeTab].statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Telemetry log */}
                  <div className="bg-neutral-950 border-2 border-neutral-800 p-3.5 font-mono text-[9px] text-red-500 flex gap-2.5 items-start">
                    <Terminal className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-[8px] text-neutral-400 font-black uppercase mb-0.5">TELEMETRY DEGRADATION REPORT</h5>
                      <p className="leading-relaxed font-black">{problemSpecs[activeTab].loss}</p>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* HUD Footer */}
              <div className="mt-8 pt-4 border-t-2 border-neutral-900 flex justify-between items-center text-[9px] font-mono text-neutral-500">
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
