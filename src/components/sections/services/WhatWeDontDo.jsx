'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { X, Check, ShieldAlert, Sparkles, Terminal } from 'lucide-react';

const legacyCMS = [
    { title: "Generic Templates", desc: "Drag-and-drop themes with bloated markup, slowing down loading speeds." },
    { title: "Bloated CMS (WordPress)", desc: "Heavy database requests, slow page loads, and constant security vulnerabilities." },
    { title: "Transactional Vendors", desc: "Freelancers that hand over a basic zip file and disappear when something breaks." },
    { title: "Disconnected Tools", desc: "Running operations manually over WhatsApp, fragmented sheets, and post-its." }
];

const artifxSystems = [
    { title: "Custom Code Only", desc: "Clean Next.js 16 and Tailwind CSS v4, built entirely from scratch." },
    { title: "Sub-Second Performance", desc: "Static rendering, edge execution, and highly optimized database querying." },
    { title: "Long-Term Partnership", desc: "We act as your dedicated engineering arm, expanding and scaling as you grow." },
    { title: "Intelligent Pipelines", desc: "Data is unified in a single, automated source of truth, augmented with deterministic AI." }
];

export default function WhatWeDontDo() {
    return (
        <section className="py-28 bg-white border-b border-gray-100 select-none relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-red-50/30 rounded-full blur-[100px] pointer-events-none" />

            <Container className="max-w-5xl mx-auto relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
                    <span className="text-xs font-mono text-red-600 uppercase tracking-widest block font-bold">
                        [ SYSTEM BOUNDARIES ]
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black uppercase">
                        Our Architectural Guardrails
                    </h2>
                    <p className="text-xs text-gray-400 max-w-sm mx-auto font-light leading-relaxed">
                        We build robust operational backbones for companies that want to scale. Here is the strict difference between simple websites and Artifx engineering.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    
                    {/* Left: Traditional Freelancer Path (Legacy CMS) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6 border border-gray-200 bg-gray-50/50 p-8 md:p-10 rounded-2xl flex flex-col justify-between"
                    >
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 text-gray-400">
                                <ShieldAlert className="w-4 h-4" />
                                <span className="text-[10px] font-mono font-bold uppercase tracking-widest">Legacy Methodologies</span>
                            </div>
                            
                            <h3 className="text-xl md:text-2xl font-bold uppercase text-black tracking-tight">
                                Traditional Freelancer Build
                            </h3>
                            
                            <div className="space-y-6 pt-4 border-t border-gray-200/55">
                                {legacyCMS.map((item, idx) => (
                                    <div key={item.title} className="flex gap-4 items-start">
                                        <div className="w-5 h-5 rounded-md bg-gray-100 flex items-center justify-center text-gray-400 shrink-0 mt-0.5">
                                            <X className="w-3 h-3" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-tight mb-1">{item.title}</h4>
                                            <p className="text-[11px] text-gray-400 leading-relaxed font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200/55 text-center">
                            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                                [ NOT SUITABLE FOR SCALING BUSINESSES ]
                            </span>
                        </div>
                    </motion.div>

                    {/* Right: The Artifx Systems-First Architecture */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-6 border border-gray-200 bg-black text-white p-8 md:p-10 rounded-2xl flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-red-950/10"
                    >
                        {/* Red glow backdrop */}
                        <div className="absolute top-0 right-0 w-44 h-44 bg-red-900 rounded-full blur-[100px] pointer-events-none opacity-40" />

                        <div className="space-y-6 relative z-10">
                            <div className="flex items-center gap-2 text-red-500">
                                <Sparkles className="w-4 h-4" />
                                <span className="text-[10px] font-mono font-bold uppercase tracking-widest">Artifx Blueprint</span>
                            </div>
                            
                            <h3 className="text-xl md:text-2xl font-bold uppercase text-white tracking-tight">
                                Custom Systems Engineering
                            </h3>
                            
                            <div className="space-y-6 pt-4 border-t border-neutral-800">
                                {artifxSystems.map((item, idx) => (
                                    <div key={item.title} className="flex gap-4 items-start">
                                        <div className="w-5 h-5 rounded-md bg-red-950 border border-red-900 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-white uppercase tracking-tight mb-1">{item.title}</h4>
                                            <p className="text-[11px] text-neutral-400 leading-relaxed font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-neutral-800 flex justify-between items-center relative z-10 font-mono text-[9px] text-neutral-500">
                            <span>TRACE DETECTED</span>
                            <span className="flex items-center gap-1 text-red-500 font-bold">
                                <Terminal className="w-3.5 h-3.5" />
                                100% OPERATIONAL STACK
                            </span>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
