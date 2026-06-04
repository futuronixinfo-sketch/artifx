'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import { Terminal, Cpu, Check, Activity, BarChart2 } from 'lucide-react';

const workflowSteps = [
    {
        number: "01",
        name: "Discovery",
        purpose: "Telemetry Diagnostic & Audit",
        summary: "We deep-dive into your existing operational metrics, manually tracking workflows and team friction.",
        metrics: ["4-Hour Audit Workshop", "Tool Fragmentation Diagnostics", "Pain-Point Telemetry Logs"]
    },
    {
        number: "02",
        name: "System Mapping",
        purpose: "Data Schemas & Blueprints",
        summary: "Before writing any code, we document every database schema, pipeline flow, and automation hook.",
        metrics: ["Data Flow Mapping", "Integration Telemetry Blueprints", "Bottleneck Diagnostics"]
    },
    {
        number: "03",
        name: "Proposal",
        purpose: "Rigid Architectural Spec",
        summary: "You receive an exact blueprint layout, fixed pricing deliverables, and modular launch phases.",
        metrics: ["100% Fixed-Price Commitment", "Detailed Milestone Scopes", "Guaranteed SLA Deadlines"]
    },
    {
        number: "04",
        name: "Build",
        purpose: "Custom Engineering Cycle",
        summary: "We develop cleanly using Next.js 16, custom API systems, and secure state handling.",
        metrics: ["Weekly Testing Sandboxes", "Sub-second Route Optimizations", "Edge-Compliant Database Sync"]
    },
    {
        number: "05",
        name: "Launch",
        purpose: "Operational Deployment",
        summary: "We coordinate database migrations, run security reviews, and onboard your active staff.",
        metrics: ["Zero-Downtime Migration Logs", "Granular Security Audits", "Staff Walkthrough Recordings"]
    },
    {
        number: "06",
        name: "Scale",
        purpose: "Continuous Evolution",
        summary: "We proactively monitor telemetry, speed up endpoints, and add product modules.",
        metrics: ["Proactive Health Logs", "Ongoing Telemetry Audits", "Priority Expansion Backlog"]
    }
];

export default function EngagementFlow() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-28 bg-[#FAFAF8] border-b-2 border-black select-none relative overflow-hidden">

            <Container className="max-w-5xl mx-auto relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
                    <span className="inline-block px-2 py-0.5 bg-[#FFE500] text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A] font-mono text-xs font-bold uppercase tracking-widest">
                        [ PIPELINE ENGINEERING ]
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black uppercase">
                        The Engagement Pipeline
                    </h2>
                    <p className="text-xs text-gray-500 max-w-sm mx-auto font-light leading-relaxed">
                        Click on any step of our engineering cycle to observe active diagnostic specifications and deliverables.
                    </p>
                </div>

                {/* Steps Selector Timeline */}
                <div className="relative mb-12">
                    {/* Horizontal Line Connection (Desktop) */}
                    <div className="hidden lg:block absolute top-5.25 left-8 right-8 h-0.5 bg-black -z-10" />

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
                        {workflowSteps.map((step, idx) => {
                            const isActive = idx === activeIndex;
                            return (
                                <button
                                    key={step.name}
                                    onClick={() => setActiveIndex(idx)}
                                    className="flex flex-col items-center gap-3 text-center cursor-pointer group focus:outline-none"
                                >
                                    {/* Number Badge */}
                                    <div className={`w-11 h-11 border-2 border-black flex items-center justify-center font-mono text-xs font-bold transition-all duration-150 relative ${
                                        isActive
                                            ? 'bg-black text-white shadow-[2px_2px_0_#0A0A0A]'
                                            : 'bg-white text-black group-hover:bg-[#FFE500]'
                                    }`}>
                                        {step.number}
                                        {isActive && (
                                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-600 animate-ping" />
                                        )}
                                    </div>

                                    <span className={`text-[10px] font-mono uppercase tracking-wider font-bold transition-colors ${
                                        isActive ? 'text-red-600' : 'text-gray-400 group-hover:text-black'
                                    }`}>
                                        {step.name}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Active Diagnostic Panel */}
                <div className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] p-7 md:p-10 min-h-75 flex flex-col justify-between relative overflow-hidden">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                        >
                            {/* Panel Details */}
                            <div className="lg:col-span-7 space-y-5">
                                <div className="space-y-2">
                                    <span className="text-[10px] font-mono text-red-600 uppercase font-bold tracking-widest flex items-center gap-1.5">
                                        <Activity className="w-3.5 h-3.5 text-red-600 animate-pulse" />
                                        Phase 0{activeIndex + 1} // {workflowSteps[activeIndex].purpose}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-black uppercase text-black tracking-tight">
                                        {workflowSteps[activeIndex].name}
                                    </h3>
                                </div>
                                <p className="text-xs text-gray-500 font-light leading-relaxed max-w-lg">
                                    {workflowSteps[activeIndex].summary}
                                </p>
                            </div>

                            {/* Panel Metrics Checklist */}
                            <div className="lg:col-span-5 border-2 border-black bg-[#FAFAF8] p-6 space-y-4">
                                <h4 className="text-[10px] font-mono text-black font-bold uppercase tracking-widest border-b-2 border-black pb-1.5 flex items-center gap-1.5">
                                    <Terminal className="w-3.5 h-3.5 text-red-600" />
                                    Active Telemetry Scope
                                </h4>
                                <ul className="space-y-3">
                                    {workflowSteps[activeIndex].metrics.map((metric) => (
                                        <li key={metric} className="flex gap-2.5 items-start text-xs text-gray-500 leading-normal">
                                            <div className="w-4 h-4 bg-[#FFE500] border-2 border-black flex items-center justify-center text-black shrink-0 mt-0.5">
                                                <Check className="w-2.5 h-2.5" />
                                            </div>
                                            <span className="font-light">{metric}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Bottom Status bar */}
                    <div className="mt-8 pt-6 border-t-2 border-black flex flex-wrap justify-between items-center text-[9px] font-mono text-gray-400 gap-4">
                        <span className="flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5 text-gray-400" />
                            CLIENT_COORDINATION: SYNCHRONIZED
                        </span>
                        <span className="flex items-center gap-1.5">
                            <BarChart2 className="w-3.5 h-3.5 text-gray-400" />
                            STAGES_HEALTH: OPTIMAL
                        </span>
                    </div>
                </div>
            </Container>
        </section>
    );
}
