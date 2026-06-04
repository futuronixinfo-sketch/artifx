'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Check, Terminal, ShieldAlert, Cpu, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { serviceDetails } from '@/data/services-page';
import * as SystemIcons from '@/components/ui/SystemIcons';

// Map service ID to an animated system icon
const systemIconMap = {
    'web-development': SystemIcons.AnimatedPortal,
    'business-automation': SystemIcons.AnimatedWorkflow,
    'ai-integrations': SystemIcons.AnimatedAI,
    'dashboards-admin': SystemIcons.AnimatedDashboard,
    'saas-development': SystemIcons.AnimatedPortal,
    'ecommerce-development': SystemIcons.AnimatedCRM,
    'tech-partnership': SystemIcons.AnimatedWorkflow,
};

export default function ServiceDetail({ service }) {
    const currentIdx = serviceDetails.findIndex(s => s.id === service.id);
    const prev = currentIdx > 0 ? serviceDetails[currentIdx - 1] : null;
    const next = currentIdx < serviceDetails.length - 1 ? serviceDetails[currentIdx + 1] : null;

    const [activeTab, setActiveTab] = useState('pipeline');

    // Get the animated icon or fallback
    const AnimatedIcon = systemIconMap[service.id] || SystemIcons.AnimatedWorkflow;

    return (
        <main className="bg-[#FAFAF8] text-black min-h-screen">
            {/* Top Navigation / Breadcrumbs */}
            <div className="border-b-2 border-black select-none py-5">
                <Container className="flex items-center justify-between">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-gray-400 hover:text-black transition-colors group"
                    >
                        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                        Back to Capabilities
                    </Link>
                    <span className="text-[10px] font-mono text-gray-300">
                        SYSTEM // 0{currentIdx + 1}
                    </span>
                </Container>
            </div>

            {/* Main Interactive Hero Section */}
            <section className="relative py-16 md:py-24 border-b-2 border-black overflow-hidden bg-[#FAFAF8]">

                <Container className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Left Side: System Details */}
                        <div className="lg:col-span-7 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFE500] text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A] text-xs font-mono font-bold uppercase tracking-wider"
                            >
                                <Cpu className="w-3 h-3" />
                                {service.bestFor.split(',')[0]}
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black leading-tight uppercase"
                            >
                                {service.title}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-base text-gray-500 max-w-xl leading-relaxed font-light"
                            >
                                {service.subtitle}
                            </motion.p>

                            {/* Impact Console card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] p-5 max-w-xl"
                            >
                                <div className="flex gap-3">
                                    <Terminal className="w-4 h-4 text-red-600 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="text-[10px] font-mono text-red-600 font-bold uppercase tracking-widest mb-1">Target Business Impact</h4>
                                        <p className="text-sm font-semibold text-black leading-relaxed">{service.outcome}</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-wrap gap-4 pt-4"
                            >
                                <Button
                                    variant="custom"
                                    size="md"
                                    href="/contact"
                                    className="bg-[#FFE500] text-black border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 font-black uppercase tracking-widest font-mono transition-all duration-100 text-xs px-8 py-4 flex items-center gap-2 group"
                                >
                                    Book System Audit
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                <Button
                                    variant="custom"
                                    size="md"
                                    href="#modules"
                                    className="bg-black text-white border-2 border-black shadow-[4px_4px_0_#444] hover:shadow-[2px_2px_0_#444] hover:translate-x-0.5 hover:translate-y-0.5 font-black uppercase tracking-widest font-mono transition-all duration-100 text-xs px-8 py-4"
                                >
                                    View Capabilities
                                </Button>
                            </motion.div>
                        </div>

                        {/* Right Side: Interactive Live Dashboard / System Pipeline Diagram */}
                        <div className="lg:col-span-5 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] p-6 relative"
                            >
                                {/* Header of console */}
                                <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-6">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 bg-red-600 animate-pulse" />
                                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">System Pipeline // Live Trace</span>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <button
                                            onClick={() => setActiveTab('pipeline')}
                                            className={`px-2.5 py-1 text-[9px] font-mono uppercase transition-colors border-2 border-black font-bold ${
                                                activeTab === 'pipeline'
                                                    ? 'bg-black text-white'
                                                    : 'bg-white text-black hover:bg-[#FFE500]'
                                            }`}
                                        >
                                            Flow
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('inspect')}
                                            className={`px-2.5 py-1 text-[9px] font-mono uppercase transition-colors border-2 border-black font-bold ${
                                                activeTab === 'inspect'
                                                    ? 'bg-black text-white'
                                                    : 'bg-white text-black hover:bg-[#FFE500]'
                                            }`}
                                        >
                                            Specs
                                        </button>
                                    </div>
                                </div>

                                {activeTab === 'pipeline' ? (
                                    <div className="space-y-6">
                                        {/* Dynamic Icon */}
                                        <div className="h-28 w-28 mx-auto text-red-600 bg-[#FAFAF8] border-2 border-black p-6 flex items-center justify-center">
                                            <AnimatedIcon className="w-full h-full" />
                                        </div>

                                        {/* Simulation Flow representation */}
                                        <div className="space-y-3 bg-[#FAFAF8] border-2 border-black p-4 font-mono text-[10px]">
                                            <div className="flex items-center justify-between text-gray-400">
                                                <span>INPUT SOURCE:</span>
                                                <span className="text-black font-bold">CLIENT TRIGGER</span>
                                            </div>
                                            <div className="w-full h-0.5 bg-black relative overflow-hidden">
                                                <motion.div
                                                    animate={{ x: ['-100%', '100%'] }}
                                                    transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
                                                    className="absolute top-0 bottom-0 w-1/3 bg-linear-to-r from-transparent via-red-600 to-transparent"
                                                />
                                            </div>
                                            <div className="space-y-1 text-gray-500 pt-2 border-t-2 border-black">
                                                <div className="flex items-center gap-1.5 text-black font-bold">
                                                    <Check className="w-3.5 h-3.5 shrink-0" />
                                                    <span>Initializing core stack &hellip; DONE</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-black">
                                                    <span className="w-1.5 h-1.5 bg-red-600 animate-ping shrink-0" />
                                                    <span>Routing request through AI-Pipeline &hellip;</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-gray-400">
                                                    <span className="w-1.5 h-1.5 bg-gray-300 shrink-0" />
                                                    <span>Evaluating optimization bottlenecks &hellip;</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <h5 className="text-[11px] font-mono text-black font-bold uppercase border-b-2 border-black pb-1">System Integration Specs</h5>
                                        <ul className="space-y-2.5 font-mono text-[10px] text-gray-500">
                                            <li className="flex justify-between">
                                                <span>ARCHITECTURAL STYLE:</span>
                                                <span className="text-black font-bold uppercase">Modern Systems Stack</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span>AI ENGINE CAPABILITY:</span>
                                                <span className="text-black font-bold uppercase">Agentic Integrations</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span>RECOMMENDED SCALE:</span>
                                                <span className="text-black font-bold uppercase">{service.bestFor}</span>
                                            </li>
                                            <li className="flex justify-between border-t-2 border-black pt-2 text-[9px] text-red-600 font-bold">
                                                <span>PIPELINE HEALTH:</span>
                                                <span>100% OPERATIONAL</span>
                                            </li>
                                        </ul>
                                        <div className="mt-4 p-3 bg-[#FFE500] border-2 border-black flex gap-2">
                                            <Terminal className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                                            <p className="text-[9px] font-mono text-black leading-normal">
                                                Our digital systems are optimized for raw performance, sub-second latency, and maximum modularity. No WordPress, no bloated tools.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>

                    </div>
                </Container>
            </section>

            {/* Deep Dive Capabilities */}
            <section id="modules" className="py-24 border-b-2 border-black bg-[#FAFAF8] select-none">
                <Container className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-2 py-0.5 bg-black text-[#FFE500] border-2 border-black font-mono text-[10px] font-bold uppercase tracking-widest mb-3">
                            [ System Components ]
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black uppercase">
                            What we actually engineer
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {service.includes.map((module, idx) => (
                            <motion.div
                                key={module}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 p-6 flex items-start gap-4"
                            >
                                <div className="w-8 h-8 bg-[#FFE500] text-black flex items-center justify-center text-xs font-mono font-bold shrink-0 border-2 border-black">
                                    0{idx + 1}
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-black uppercase mb-1">
                                        {module}
                                    </h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        Fully tailored {module.toLowerCase()} systems architected to seamlessly blend into your existing workflow architecture.
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Contrast check: What makes us different */}
            <section className="py-24 border-b-2 border-black bg-[#FAFAF8] select-none">
                <Container className="max-w-4xl mx-auto">
                    <div className="border-2 border-black overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-[4px_4px_0_#0A0A0A]">
                        {/* Traditional Vendor */}
                        <div className="p-8 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-black space-y-6 bg-white">
                            <div className="flex items-center gap-2 text-gray-400">
                                <ShieldAlert className="w-4 h-4 shrink-0" />
                                <span className="text-[10px] font-mono uppercase tracking-wider font-bold">Traditional Freelancers</span>
                            </div>
                            <h3 className="text-xl font-bold text-black uppercase">The Outdated Freelancer Path</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-2.5 text-xs text-gray-500">
                                    <span className="w-1.5 h-1.5 bg-gray-300 mt-1.5 shrink-0" />
                                    <span>Drag-and-drop template pages with heavy bloated builders.</span>
                                </li>
                                <li className="flex items-start gap-2.5 text-xs text-gray-500">
                                    <span className="w-1.5 h-1.5 bg-gray-300 mt-1.5 shrink-0" />
                                    <span>Manual data entry and repetitive copy-paste workflows.</span>
                                </li>
                                <li className="flex items-start gap-2.5 text-xs text-gray-500">
                                    <span className="w-1.5 h-1.5 bg-gray-300 mt-1.5 shrink-0" />
                                    <span>Transactional vendor relationships that vanish post-launch.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Artifx Systems */}
                        <div className="p-8 md:p-12 space-y-6 bg-black text-white">
                            <div className="flex items-center gap-2 text-[#FFE500]">
                                <Terminal className="w-4 h-4 shrink-0" />
                                <span className="text-[10px] font-mono uppercase tracking-wider font-bold">Artifx Advantage</span>
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase">Our Systems-First Approach</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-2.5 text-xs text-neutral-300">
                                    <span className="w-1.5 h-1.5 bg-[#FFE500] mt-1.5 shrink-0" />
                                    <span>Clean-code custom engineering optimized for raw speed.</span>
                                </li>
                                <li className="flex items-start gap-2.5 text-xs text-neutral-300">
                                    <span className="w-1.5 h-1.5 bg-[#FFE500] mt-1.5 shrink-0" />
                                    <span>Autonomous AI agents handling repetitive operational chores.</span>
                                </li>
                                <li className="flex items-start gap-2.5 text-xs text-neutral-300">
                                    <span className="w-1.5 h-1.5 bg-[#FFE500] mt-1.5 shrink-0" />
                                    <span>Strategic long-term engineering partnership scaling with your team.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Bottom pagination / route switcher */}
            <section className="py-12 border-b-2 border-black bg-[#FAFAF8]">
                <Container className="max-w-4xl mx-auto flex items-center justify-between">
                    {prev ? (
                        <Link
                            href={`/services/${prev.id}`}
                            className="inline-flex flex-col items-start gap-1 p-4 bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100 font-mono text-[10px] group"
                        >
                            <span className="text-gray-400 flex items-center gap-1">
                                &larr; PREVIOUS SYSTEM
                            </span>
                            <span className="text-xs font-bold text-black group-hover:text-red-600 transition-colors uppercase">
                                {prev.title}
                            </span>
                        </Link>
                    ) : <div />}

                    {next ? (
                        <Link
                            href={`/services/${next.id}`}
                            className="inline-flex flex-col items-end gap-1 p-4 bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100 font-mono text-[10px] group text-right"
                        >
                            <span className="text-gray-400 flex items-center gap-1">
                                NEXT SYSTEM &rarr;
                            </span>
                            <span className="text-xs font-bold text-black group-hover:text-red-600 transition-colors uppercase">
                                {next.title}
                            </span>
                        </Link>
                    ) : <div />}
                </Container>
            </section>

            {/* Dedicated Service Call to Action */}
            <section className="py-24 bg-[#FAFAF8] text-center select-none relative overflow-hidden">
                <Container className="max-w-3xl relative z-10 space-y-6">
                    <span className="inline-block px-2 py-0.5 bg-[#FFE500] text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A] font-mono text-[10px] font-bold uppercase tracking-widest">
                        [ Engineering Request ]
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-black leading-tight uppercase">
                        Let&apos;s automate your operational bottlenecks.
                    </h2>
                    <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
                        Request a free custom system audit. We will map out your current bottlenecks and layout the architecture of an intelligent solution.
                    </p>
                    <div className="pt-4">
                        <Button
                            variant="custom"
                            size="lg"
                            href="/contact"
                            className="bg-[#FFE500] text-black border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 font-black uppercase tracking-widest font-mono transition-all duration-100 text-xs px-10 py-5 inline-flex items-center gap-2 group"
                        >
                            Talk to Systems Expert
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </Container>
            </section>
        </main>
    );
}
