'use client';
import { motion } from 'framer-motion';
import { solutionLayers } from '@/data/solutions-page';
import Container from '@/components/ui/Container';

export default function SolutionLayers() {
    return (
        <section className="relative py-28 bg-black border-t border-neutral-900 overflow-hidden select-none">
            {/* Giant watermark text */}
            <div className="absolute inset-0 flex items-start justify-center pt-16 z-0 pointer-events-none">
                <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[70%] h-[20%] bg-[#f95738]/[0.03] blur-[120px] pointer-events-none" />
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
                    STACK
                </div>
            </div>

            <div className="absolute top-1/2 left-0 right-0 h-px bg-neutral-900 z-0 pointer-events-none" />

            <Container className="relative z-10 text-center">
                <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest mb-4 block font-bold">
                    [ 04 / SOLUTION_STACK ]
                </span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight mb-16">
                    Our Solution <br />
                    <span className="italic text-[#f95738]" style={{ fontFamily: 'Georgia, serif' }}>Stack</span>
                </h2>

                <div className="relative max-w-4xl mx-auto space-y-6">
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-neutral-800" />

                    {solutionLayers.map((layer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}
                        >
                            {/* Content Block */}
                            <div className="w-1/2 p-6 bg-neutral-900/80 backdrop-blur border border-neutral-800 text-left relative z-10 hover:border-[#f95738]/30 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-[#f95738]/10 flex items-center justify-center text-[#f95738]">
                                        <span className="font-mono text-sm">{index + 1}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">{layer.layer}</h3>
                                </div>

                                <ul className="space-y-2">
                                    {layer.features.map((feature, i) => (
                                        <li key={i} className="text-sm text-neutral-400 flex items-center gap-2 font-light">
                                            <span className="w-1.5 h-px bg-neutral-600" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Timeline Dot */}
                            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-neutral-900 border-2 border-[#f95738] shadow-[0_0_10px_rgba(249,87,56,0.5)] z-20" />

                            <div className="w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
