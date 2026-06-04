'use client';
import { motion } from 'framer-motion';
import { Code2, Cpu, Terminal, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function ServiceIndex() {
    return (
        <section className="relative pt-40 pb-20 border-b-2 border-black min-h-[75vh] md:min-h-[80vh] flex items-center bg-[#FAFAF8] overflow-hidden select-none">

            {/* Giant Watermark Text */}
            <div className="absolute inset-0 flex items-start justify-center pt-20 z-0 pointer-events-none select-none">
                <div
                    className="w-full text-center text-[19vw] font-black tracking-tighter leading-none opacity-[0.04]"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    SYSTEMS
                </div>
            </div>

            <Container className="relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Copywriting & Content */}
                    <div className="lg:col-span-7 text-left space-y-6">

                        {/* Tech status tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFE500] text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A]"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full bg-black opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 bg-black"></span>
                            </span>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-black">
                                Dynamic Pipeline Engine // V2.0 Active
                            </span>
                        </motion.div>

                        {/* Title */}
                        <div className="space-y-3">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-black leading-[0.95] uppercase"
                            >
                                Custom <br />
                                <span className="text-red-600 underline decoration-4 underline-offset-4">
                                    Intelligent
                                </span> <br />
                                Pipeline Systems.
                            </motion.h1>
                        </div>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-xs sm:text-sm text-gray-500 max-w-lg leading-relaxed font-light"
                        >
                            We build custom-engineered digital systems and automated pathways that solve operational bottlenecks, unify databases, and supercharge team velocity.
                        </motion.p>

                        {/* Buttons Block */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button
                                variant="custom"
                                size="md"
                                href="/contact"
                                className="bg-[#FFE500] text-black border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 font-black uppercase tracking-widest font-mono transition-all duration-100 text-xs px-7 py-4 flex items-center gap-2 group"
                            >
                                Request System Audit
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>

                        {/* Metric stats console */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="pt-4 border-t-2 border-black flex flex-wrap gap-6 font-mono text-[9px] text-gray-400"
                        >
                            <div className="flex items-center gap-1.5">
                                <Code2 className="w-3.5 h-3.5 text-red-600" />
                                <span>ZERO BLOAT CODE</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Cpu className="w-3.5 h-3.5 text-red-600" />
                                <span>DETERMINISTIC AI</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Terminal className="w-3.5 h-3.5 text-red-600" />
                                <span>100% SECURE DATA</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Animated SVG Pipeline Diagram */}
                    <div className="lg:col-span-5 relative flex justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full max-w-100 aspect-square border-2 border-black bg-white p-5 relative overflow-hidden shadow-[4px_4px_0_#0A0A0A]"
                        >
                            {/* SVG Graphic */}
                            <svg viewBox="0 0 400 400" className="w-full h-full text-black">

                                {/* Background grid guides */}
                                <circle cx="200" cy="200" r="140" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                                <circle cx="200" cy="200" r="80" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="3 3" fill="none" />

                                {/* Connection lines / Data pathways */}
                                <path d="M 80 80 Q 140 140 200 200" stroke="#e5e7eb" strokeWidth="2" fill="none" />
                                <motion.path
                                    d="M 80 80 Q 140 140 200 200"
                                    stroke="#dc2626"
                                    strokeWidth="2"
                                    fill="none"
                                    initial={{ pathLength: 0.15, pathOffset: 0 }}
                                    animate={{ pathOffset: [0, 1] }}
                                    transition={{ repeat: Infinity, duration: 3.2, ease: "linear" }}
                                />

                                <path d="M 320 80 Q 260 140 200 200" stroke="#e5e7eb" strokeWidth="2" fill="none" />
                                <motion.path
                                    d="M 320 80 Q 260 140 200 200"
                                    stroke="#dc2626"
                                    strokeWidth="2"
                                    fill="none"
                                    initial={{ pathLength: 0.15, pathOffset: 0 }}
                                    animate={{ pathOffset: [0, 1] }}
                                    transition={{ repeat: Infinity, duration: 2.8, ease: "linear" }}
                                />

                                <path d="M 80 320 Q 140 260 200 200" stroke="#e5e7eb" strokeWidth="2" fill="none" />
                                <motion.path
                                    d="M 80 320 Q 140 260 200 200"
                                    stroke="#dc2626"
                                    strokeWidth="2"
                                    fill="none"
                                    initial={{ pathLength: 0.15, pathOffset: 0 }}
                                    animate={{ pathOffset: [0, 1] }}
                                    transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
                                />

                                <path d="M 320 320 Q 260 260 200 200" stroke="#e5e7eb" strokeWidth="2" fill="none" />
                                <motion.path
                                    d="M 320 320 Q 260 260 200 200"
                                    stroke="#dc2626"
                                    strokeWidth="2"
                                    fill="none"
                                    initial={{ pathLength: 0.15, pathOffset: 0 }}
                                    animate={{ pathOffset: [0, 1] }}
                                    transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                                />

                                {/* Satellite Nodes */}
                                <motion.g whileHover={{ scale: 1.1 }} className="cursor-pointer">
                                    <rect x="66" y="66" width="28" height="28" fill="#ffffff" stroke="#111111" strokeWidth="2" />
                                    <rect x="74" y="74" width="12" height="12" fill="#111111" />
                                    <motion.rect x="66" y="66" width="28" height="28" fill="none" stroke="#ef4444" strokeWidth="1"
                                        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                        style={{ transformOrigin: "80px 80px" }}
                                    />
                                    <text x="80" y="110" textAnchor="middle" className="font-mono text-[8px] font-bold fill-gray-400">LEADS</text>
                                </motion.g>

                                <motion.g whileHover={{ scale: 1.1 }} className="cursor-pointer">
                                    <rect x="306" y="66" width="28" height="28" fill="#ffffff" stroke="#111111" strokeWidth="2" />
                                    <rect x="314" y="74" width="12" height="12" fill="#111111" />
                                    <motion.rect x="306" y="66" width="28" height="28" fill="none" stroke="#ef4444" strokeWidth="1"
                                        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                                        transition={{ repeat: Infinity, duration: 2.3, ease: "easeInOut" }}
                                        style={{ transformOrigin: "320px 80px" }}
                                    />
                                    <text x="320" y="110" textAnchor="middle" className="font-mono text-[8px] font-bold fill-gray-400">AI AGENT</text>
                                </motion.g>

                                <motion.g whileHover={{ scale: 1.1 }} className="cursor-pointer">
                                    <rect x="66" y="306" width="28" height="28" fill="#ffffff" stroke="#111111" strokeWidth="2" />
                                    <rect x="74" y="314" width="12" height="12" fill="#111111" />
                                    <motion.rect x="66" y="306" width="28" height="28" fill="none" stroke="#ef4444" strokeWidth="1"
                                        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                                        style={{ transformOrigin: "80px 320px" }}
                                    />
                                    <text x="80" y="348" textAnchor="middle" className="font-mono text-[8px] font-bold fill-gray-400">CRM SYNC</text>
                                </motion.g>

                                <motion.g whileHover={{ scale: 1.1 }} className="cursor-pointer">
                                    <rect x="306" y="306" width="28" height="28" fill="#ffffff" stroke="#111111" strokeWidth="2" />
                                    <rect x="314" y="314" width="12" height="12" fill="#111111" />
                                    <motion.rect x="306" y="306" width="28" height="28" fill="none" stroke="#ef4444" strokeWidth="1"
                                        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                                        transition={{ repeat: Infinity, duration: 2.1, ease: "easeInOut" }}
                                        style={{ transformOrigin: "320px 320px" }}
                                    />
                                    <text x="320" y="348" textAnchor="middle" className="font-mono text-[8px] font-bold fill-gray-400">METRICS</text>
                                </motion.g>

                                {/* Central Core Hub */}
                                <g className="cursor-pointer">
                                    <motion.rect x="162" y="162" width="76" height="76" fill="none" stroke="#fecaca" strokeWidth="1"
                                        animate={{ scale: [1, 1.25, 1] }}
                                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                        style={{ transformOrigin: "200px 200px" }}
                                    />
                                    <motion.rect x="172" y="172" width="56" height="56" fill="none" stroke="#fee2e2" strokeWidth="2"
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                                        style={{ transformOrigin: "200px 200px" }}
                                    />

                                    {/* Core background */}
                                    <rect x="178" y="178" width="44" height="44" fill="#111111" />

                                    {/* Glowing inner red center */}
                                    <motion.rect x="191" y="191" width="18" height="18" fill="#dc2626"
                                        animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
                                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                        style={{ transformOrigin: "200px 200px" }}
                                    />

                                    {/* Rotating dashed ring */}
                                    <motion.rect x="178" y="178" width="44" height="44" fill="none" stroke="#dc2626" strokeWidth="1" strokeDasharray="5 4"
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                                        style={{ transformOrigin: "200px 200px" }}
                                    />
                                    <text x="200" y="240" textAnchor="middle" className="font-mono text-[9px] font-extrabold fill-red-600 tracking-wider">ARTIFX CORE</text>
                                </g>
                            </svg>
                        </motion.div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
