'use client';
import { motion } from 'framer-motion';
import { Code2, Cpu, Sparkles, Terminal, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function ServiceIndex() {
    return (
        <section className="relative pt-40 pb-20 border-b border-gray-100 min-h-[75vh] md:min-h-[80vh] flex items-center bg-white overflow-hidden select-none">
            {/* Tech Mesh Backdrop */}
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
            
            {/* Glowing Ambient Orbs */}
            <div className="absolute top-[10%] left-1/3 w-[60%] h-[35%] bg-red-100/40 blur-[130px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-red-50/20 rounded-full blur-[110px] pointer-events-none z-0" />
            
            {/* Giant Watermark Text */}
            <div className="absolute inset-0 flex items-start justify-center pt-20 z-0 pointer-events-none select-none">
                <div
                    className="w-full text-center text-[19vw] font-black tracking-tighter leading-none opacity-[0.04] bg-clip-text bg-gradient-to-b from-black via-red-950 to-transparent"
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
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-50/80 border border-red-200 rounded-xl"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                            </span>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-600">
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
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-black">
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
                                className="bg-black text-white hover:bg-neutral-900 border-0 text-xs font-mono uppercase tracking-widest px-7 py-4 rounded-xl shadow-lg shadow-black/10 flex items-center gap-2 group"
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
                            className="pt-4 border-t border-gray-100 flex flex-wrap gap-6 font-mono text-[9px] text-gray-400"
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

                    {/* Right Column: Breathtaking Custom Animated SVG Pipeline Diagram */}
                    <div className="lg:col-span-5 relative flex justify-center items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full max-w-[400px] aspect-square border border-gray-200 bg-white p-5 rounded-2xl shadow-2xl shadow-black/5 relative overflow-hidden"
                        >
                            {/* SVG Graphic */}
                            <svg viewBox="0 0 400 400" className="w-full h-full text-black">
                                
                                {/* Background grid guides */}
                                <circle cx="200" cy="200" r="140" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                                <circle cx="200" cy="200" r="80" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                                
                                {/* Connection lines / Data pathways */}
                                {/* Path 1: Top Left to Center */}
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

                                {/* Path 2: Top Right to Center */}
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

                                {/* Path 3: Bottom Left to Center */}
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

                                {/* Path 4: Bottom Right to Center */}
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
                                {/* Node 1: Incoming Leads */}
                                <motion.g whileHover={{ scale: 1.1 }} className="cursor-pointer">
                                    <circle cx="80" cy="80" r="14" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
                                    <circle cx="80" cy="80" r="6" fill="#111111" />
                                    <motion.circle cx="80" cy="80" r="14" fill="none" stroke="#ef4444" strokeWidth="1"
                                        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                    />
                                    <text x="80" y="110" textAnchor="middle" className="font-mono text-[8px] font-bold fill-gray-400">LEADS</text>
                                </motion.g>

                                {/* Node 2: AI Automation */}
                                <motion.g whileHover={{ scale: 1.1 }} className="cursor-pointer">
                                    <circle cx="320" cy="80" r="14" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
                                    <circle cx="320" cy="80" r="6" fill="#111111" />
                                    <motion.circle cx="320" cy="80" r="14" fill="none" stroke="#ef4444" strokeWidth="1"
                                        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                                        transition={{ repeat: Infinity, duration: 2.3, ease: "easeInOut" }}
                                    />
                                    <text x="320" y="110" textAnchor="middle" className="font-mono text-[8px] font-bold fill-gray-400">AI AGENT</text>
                                </motion.g>

                                {/* Node 3: Database Sync */}
                                <motion.g whileHover={{ scale: 1.1 }} className="cursor-pointer">
                                    <circle cx="80" cy="320" r="14" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
                                    <circle cx="80" cy="320" r="6" fill="#111111" />
                                    <motion.circle cx="80" cy="320" r="14" fill="none" stroke="#ef4444" strokeWidth="1"
                                        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                                    />
                                    <text x="80" y="348" textAnchor="middle" className="font-mono text-[8px] font-bold fill-gray-400">CRM SYNC</text>
                                </motion.g>

                                {/* Node 4: Live Analytics */}
                                <motion.g whileHover={{ scale: 1.1 }} className="cursor-pointer">
                                    <circle cx="320" cy="320" r="14" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
                                    <circle cx="320" cy="320" r="6" fill="#111111" />
                                    <motion.circle cx="320" cy="320" r="14" fill="none" stroke="#ef4444" strokeWidth="1"
                                        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                                        transition={{ repeat: Infinity, duration: 2.1, ease: "easeInOut" }}
                                    />
                                    <text x="320" y="348" textAnchor="middle" className="font-mono text-[8px] font-bold fill-gray-400">METRICS</text>
                                </motion.g>

                                {/* Central Core Hub */}
                                <g className="cursor-pointer">
                                    {/* Pulse outer rings */}
                                    <motion.circle cx="200" cy="200" r="38" fill="none" stroke="#fee2e2" strokeWidth="1"
                                        animate={{ r: [38, 55, 38] }}
                                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                    />
                                    <motion.circle cx="200" cy="200" r="28" fill="none" stroke="#fecaca" strokeWidth="2"
                                        animate={{ r: [28, 42, 28] }}
                                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                                    />
                                    
                                    {/* Core background */}
                                    <circle cx="200" cy="200" r="22" fill="#111111" />
                                    
                                    {/* Glowing inner red center */}
                                    <motion.circle cx="200" cy="200" r="9" fill="#dc2626"
                                        animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
                                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                    />
                                    
                                    {/* Rotating dashed ring */}
                                    <motion.circle cx="200" cy="200" r="22" fill="none" stroke="#dc2626" strokeWidth="1" strokeDasharray="5 4"
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
