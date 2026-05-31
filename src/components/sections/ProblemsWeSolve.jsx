'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, CheckCircle2, AlertTriangle, Cpu, Server, Check, ArrowRight, Zap, RefreshCw, Terminal, TrendingUp, Sparkles, AlertOctagon } from 'lucide-react';
import Container from '@/components/ui/Container';

// Bottleneck scenario dataset
const bottlenecks = [
    {
        id: 'data_sync',
        tag: '01 / SYSTEM_SYNC',
        title: 'Scattered Data Nodes',
        description: 'Manual data copying across scattered spreadsheets, leading to major sync errors and system disconnects.',
        chaos: {
            title: 'Scattered Data Mismatches',
            metricLabel: 'DATA ERROR RATE',
            metricVal: '18.4%',
            details: 'Manual data entries cause duplicate ID warnings, stale customer cells, and expired Salesforce API tokens daily.'
        },
        machine: {
            title: 'Automated Relational Sync',
            metricLabel: 'WEBHOOK SYNC TIME',
            metricVal: '0.02s',
            details: 'Artifx edge webhooks automatically parse, filter, and sync payload data directly to relational Postgres databases.'
        }
    },
    {
        id: 'lead_response',
        tag: '02 / PIPELINE_SPEED',
        title: 'Snail-Mail Lead Pipeline',
        description: 'Ambitious leads wait hours for manual email follow-ups. Competitors convert while your sales inbox sleeps.',
        chaos: {
            title: 'Snail-Mail Response Delay',
            metricLabel: 'RESPONSE TIME',
            metricVal: '6.4 hrs',
            details: 'Prospect contact forms sit in unread queues for hours. Competitors secure leads before your sales team clicks reply.'
        },
        machine: {
            title: 'Instant AI Lead Dispatch',
            metricLabel: 'AI REACTION SPEED',
            metricVal: '2.4 secs',
            details: 'Gemini-powered warm ingest pipelines automatically screen and score leads, alerting sales reps on Slack in seconds.'
        }
    },
    {
        id: 'reporting',
        tag: '03 / METRICS_HUD',
        title: 'Strategy Metrics Blackout',
        description: 'Decisions are based on outdated spreadsheets and guesswork instead of automated, live business intelligence dashboards.',
        chaos: {
            title: 'Strategy Metrics Blackout',
            metricLabel: 'KPI DATA LATENCY',
            metricVal: '14 days',
            details: 'Opening large Excel reports causes application crashes. Monthly conversions and customer value are calculated by guesswork.'
        },
        machine: {
            title: 'Live Telemetry Dashboard',
            metricLabel: 'KPI DATA REFRESH',
            metricVal: '0.00s',
            details: 'Real-time telemetry pipelines stream customer lifetime value and acquisition metrics straight to an SSL-secured HUD.'
        }
    },
    {
        id: 'admin_burnout',
        tag: '04 / STAFF_FATIGUE',
        title: 'Team Administrative Fatigue',
        description: 'Engineers and operations managers waste critical workdays manual-sorting PDFs, typing invoices, and tracking tickets.',
        chaos: {
            title: 'Manual Administrative Load',
            metricLabel: 'HUMAN EFFORT',
            metricVal: '84%',
            details: 'Operations staff spend entire days manual-scanning invoices and copy-pasting billing data to payment engines.'
        },
        machine: {
            title: 'Autonomous System Daemons',
            metricLabel: 'HUMAN INTERACTION',
            metricVal: '1.2%',
            details: 'Serverless schedulers and OCR services scrape and map payment sheets, bypassing manual admin bottlenecks entirely.'
        }
    }
];

export default function ProblemsWeSolve() {
    const [activeTab, setActiveTab] = useState('data_sync');
    const [resolvedNodes, setResolvedNodes] = useState([]);
    const [solvingState, setSolvingState] = useState(null); // 'solving' or null

    const activeIdx = bottlenecks.findIndex(b => b.id === activeTab);
    const activeData = bottlenecks[activeIdx];
    const isResolved = resolvedNodes.includes(activeTab);
    const isSolving = solvingState === activeTab;

    const handleAutoResolve = () => {
        if (isResolved || isSolving) return;

        setSolvingState(activeTab);

        // Matrix scanner sweeps for 1.4 seconds
        setTimeout(() => {
            setResolvedNodes(prev => [...prev, activeTab]);
            setSolvingState(null);
        }, 1400);
    };

    const handleNextTab = () => {
        const nextIdx = (activeIdx + 1) % bottlenecks.length;
        setActiveTab(bottlenecks[nextIdx].id);
    };

    // Auto-cycle timeline tabs every 6 seconds (unless actively resolving)
    useEffect(() => {
        if (solvingState !== null) return;

        const interval = setInterval(() => {
            setActiveTab(current => {
                const idx = bottlenecks.findIndex(b => b.id === current);
                const nextIdx = (idx + 1) % bottlenecks.length;
                return bottlenecks[nextIdx].id;
            });
        }, 6000);

        return () => clearInterval(interval);
    }, [activeTab, solvingState]);

    return (
        <section className="relative py-28 bg-black border-t border-neutral-900 overflow-hidden select-none">
            
            {/* 1. GIANT WATERMARK TEXT (Masked Dot-Matrix / Plus-sign Pattern) */}
            <div className="absolute inset-0 flex items-start justify-center pt-16 z-0 pointer-events-none">
                {/* Soft editorial background glow centered under the watermark */}
                <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[70%] h-[20%] bg-[#f95738]/[0.03] blur-[120px] rounded-full pointer-events-none" />
                
                <div 
                    className="w-full text-center text-[16vw] font-black tracking-tighter leading-none select-none"
                    style={{
                        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px)",
                        backgroundSize: "6px 6px",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        WebkitTextStroke: "1px rgba(255, 255, 255, 0.04)",
                        fontFamily: "var(--font-heading)"
                    }}
                >
                    RESOLVE
                </div>
            </div>

            {/* Subtle background tech line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-neutral-900 z-0 pointer-events-none" />

            <Container className="relative z-10 flex flex-col gap-10">
                
                {/* 2. EDITORIAL SECTION TITLE HEADER */}
                <div className="max-w-3xl relative z-10 mb-6">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.1]">
                        Problems we <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>solve</span> <br />
                        <span className="pl-0 md:pl-20 font-normal block mt-1">so your team can focus.</span>
                    </h2>
                </div>

                {/* 3. TIMELINE INDICATOR BAR (Replaced heavy tabs layout) */}
                <div className="w-full flex justify-between items-center font-mono text-xs text-neutral-500 pb-4 border-b border-neutral-900 select-none relative z-10">
                    <div className="flex items-center gap-6">
                        {bottlenecks.map((item, idx) => {
                            const isItemActive = item.id === activeTab;
                            const isItemResolved = resolvedNodes.includes(item.id);
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`hover:text-white transition-colors cursor-pointer font-mono font-bold py-1 relative ${
                                        isItemActive ? 'text-white' : 'text-neutral-600'
                                    }`}
                                >
                                    0{idx + 1}
                                    {isItemResolved && (
                                        <span className="absolute -top-1 -right-2 text-[6px] text-emerald-400 font-extrabold">✓</span>
                                    )}
                                    {isItemActive && (
                                        <motion.span
                                            layoutId="problems-timeline-dot"
                                            className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#f95738]"
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                    <div className="text-[10px] text-neutral-600">
                        DIAGNOSTIC_QUEUE: 0{activeIdx + 1} / 04
                    </div>
                </div>

                {/* 4. ASYMMETRIC COMPARATIVE EDITORIAL SPREAD (No cards, no heavy boxes!) */}
                <div className="relative w-full h-[420px] md:h-[350px] lg:h-[320px] flex items-center">
                    
                    {/* Scanning scanner line when resolving active */}
                    {isSolving && (
                        <motion.div 
                            className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#f95738] to-transparent shadow-[0_0_15px_rgba(249,87,56,0.8)] z-30 pointer-events-none"
                            initial={{ top: '0%' }}
                            animate={{ top: '100%' }}
                            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                        />
                    )}

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.4 }}
                            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start relative z-10"
                        >
                            
                            {/* LEFT SIDE: THE FRICTION (Chaos - Red Accents) */}
                            <div className="space-y-4 relative overflow-hidden group">
                                {/* Chaos background graphic texture (Low-opacity styled inline) */}
                                <div 
                                    className="absolute -inset-4 bg-cover bg-center opacity-[0.08] pointer-events-none transition-transform duration-700 z-0"
                                    style={{ backgroundImage: "url('/chaos-red.png')" }}
                                />

                                <div className="space-y-3 z-10 relative">
                                    <div className="text-[9px] font-mono font-bold text-red-500 uppercase tracking-widest flex items-center gap-1.5 select-none">
                                        <AlertOctagon className="w-3.5 h-3.5 animate-pulse" />
                                        [!] Friction / Manual System Mismatch
                                    </div>
                                    
                                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                                        {activeData.chaos.title}
                                    </h3>
                                    
                                    <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-md">
                                        {activeData.chaos.details}
                                    </p>
                                </div>

                                {/* Large stats display */}
                                <div className="pt-2 z-10 relative flex items-baseline gap-4">
                                    <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-red-500 tracking-tighter leading-none select-none">
                                        {isResolved ? "0.0%" : activeData.chaos.metricVal}
                                    </div>
                                    <div className="text-[9px] font-mono text-red-900 uppercase font-bold tracking-wider select-none">
                                        {activeData.chaos.metricLabel} <br />
                                        {isResolved ? "SYSTEM SECURED" : "CRITICAL THREAT"}
                                    </div>
                                </div>

                                {/* Automation button embedded inside Friction area */}
                                {!isResolved && !isSolving && (
                                    <div className="pt-4 z-10 relative">
                                        <button
                                            onClick={handleAutoResolve}
                                            className="px-6 py-2.5 border border-[#f95738] text-[#f95738] hover:bg-[#f95738]/5 hover:text-white font-mono text-[10px] tracking-wider transition-all uppercase active:scale-98 select-none cursor-pointer flex items-center gap-2 font-bold animate-pulse"
                                        >
                                            <Zap className="w-3.5 h-3.5 animate-bounce" />
                                            [⚡ Automate Pipeline]
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* RIGHT SIDE: THE RESOLUTION (Artifx Way - Emerald Accents) */}
                            <div className="space-y-4 relative overflow-hidden group">
                                {/* System background graphic texture */}
                                <div 
                                    className="absolute -inset-4 bg-cover bg-center opacity-[0.07] pointer-events-none transition-transform duration-700 z-0"
                                    style={{ backgroundImage: "url('/system-green.png')" }}
                                />

                                <div className="space-y-3 z-10 relative">
                                    <div className="text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5 select-none">
                                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                                        [✓] Resolution / Artifx Machine
                                    </div>
                                    
                                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                                        {activeData.machine.title}
                                    </h3>
                                </div>

                                {/* Dynamic transition depending on resolve state */}
                                <div className="h-[120px] flex items-center z-10 relative">
                                    {isSolving ? (
                                        <div className="font-mono text-xs text-indigo-400 flex items-center gap-2.5">
                                            <RefreshCw className="w-4 h-4 animate-spin" />
                                            <span>OPTIMIZING_QUEUES: SECURING DATABASE SHARDS...</span>
                                        </div>
                                    ) : isResolved ? (
                                        // GORGEOUS SCALING STAT AND REVENUE CHART
                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center w-full">
                                            {/* Large metric stat */}
                                            <div className="md:col-span-5 flex items-baseline gap-2 pt-2">
                                                <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-emerald-400 tracking-tighter leading-none select-none">
                                                    {activeData.machine.metricVal}
                                                </div>
                                                <div className="text-[8px] font-mono text-emerald-700 uppercase font-bold tracking-wider select-none leading-tight">
                                                    {activeData.machine.metricLabel} <br />
                                                    <span className="text-white">OPERATIONAL</span>
                                                </div>
                                            </div>

                                            {/* Dotted clean SVG scaling growth chart (spans right col-span) */}
                                            <div className="md:col-span-7 h-[100px] border-l border-neutral-900 pl-4 flex flex-col justify-between relative overflow-hidden">
                                                <div className="flex justify-between items-center font-mono text-[8px] text-neutral-500 z-10 select-none pb-1">
                                                    <span>SCALING_DYNAMICS</span>
                                                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                                                        <Sparkles className="w-2.5 h-2.5 animate-pulse" />
                                                        10x GAIN
                                                    </span>
                                                </div>

                                                <div className="w-full h-[60px] relative z-10">
                                                    <svg className="w-full h-full overflow-visible" viewBox="0 0 200 100" fill="none">
                                                        <line x1="0" y1="20" x2="200" y2="20" stroke="#14532d" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.3" />
                                                        <line x1="0" y1="60" x2="200" y2="60" stroke="#14532d" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.3" />

                                                        {/* Glowing sweeping revenue path */}
                                                        <motion.path
                                                            d="M 10 90 Q 50 85 90 60 T 170 15 T 200 10"
                                                            stroke="#10b981"
                                                            strokeWidth="2.2"
                                                            fill="none"
                                                            initial={{ pathLength: 0 }}
                                                            animate={{ pathLength: 1 }}
                                                            transition={{ duration: 1.6, ease: "easeOut" }}
                                                            style={{ filter: 'drop-shadow(0px 0px 4px rgba(16, 185, 129, 0.6))' }}
                                                        />

                                                        {/* Pulsing indicator */}
                                                        <motion.circle
                                                            cx="200"
                                                            cy="10"
                                                            r="3.5"
                                                            fill="#34d399"
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: [1, 1.4, 1] }}
                                                            transition={{ duration: 1.5, repeat: Infinity }}
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="text-xs font-mono text-neutral-500 leading-relaxed font-light">
                                            [ RESOLUTION_PENDING ]: Trigger automated pipeline diagnostic to compile database daemons and secure edge queues.
                                        </p>
                                    )}
                                </div>

                                {/* Machine resolved status text description */}
                                {isResolved && !isSolving && (
                                    <motion.p 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-[11px] text-neutral-400 font-light leading-relaxed max-w-md z-10 relative pt-2"
                                    >
                                        {activeData.machine.details}
                                    </motion.p>
                                )}
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* 5. EDITORIAL SPREAD FOOTER PAGE NAVIGATION */}
                <div className="w-full flex justify-between items-center border-t border-neutral-900 pt-6 mt-8 font-mono text-[9px] select-none text-neutral-600 relative z-10">
                    <span>GRID_THEORY: DYNAMIC_BALANCER</span>
                    <button
                        onClick={handleNextTab}
                        className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 uppercase font-bold text-white tracking-wider text-[10px]"
                    >
                        [ Next Bottle_neck → ]
                    </button>
                </div>

            </Container>
        </section>
    );
}
