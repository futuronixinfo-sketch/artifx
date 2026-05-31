'use client';
import { motion } from 'framer-motion';
import { systemMapping } from '@/data/solutions-page';
import Container from '@/components/ui/Container';

export default function SystemMapping() {
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
                    ARCHITECTURE
                </div>
            </div>

            <div className="absolute top-1/2 left-0 right-0 h-px bg-neutral-900 z-0 pointer-events-none" />

            <Container className="relative z-10 flex flex-col items-center">
                <div className="text-center max-w-2xl mb-16">
                    <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest mb-4 block font-bold">
                        [ 03 / SYSTEM_MAPPING ]
                    </span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight mb-4">
                        Interconnected <br />
                        <span className="italic text-[#f95738]" style={{ fontFamily: 'Georgia, serif' }}>Systems</span>
                    </h2>
                    <p className="text-neutral-400 text-sm font-light max-w-lg mx-auto">
                        We don't build isolated features. We design interconnected systems that work together seamlessly.
                    </p>
                </div>

                <div className="flex flex-col gap-8 w-full max-w-md relative">
                    {systemMapping.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="relative z-10"
                            >
                                <div className="bg-black border border-neutral-800 p-6 flex items-center gap-6 hover:border-[#f95738]/50 transition-colors group">
                                    <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center border border-neutral-800 group-hover:bg-[#f95738]/10 group-hover:text-[#f95738] transition-colors">
                                        <Icon className="w-6 h-6 text-neutral-500 group-hover:text-inherit" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">{item.step}</h3>
                                        <p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors font-light">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Connection Line */}
                                {idx !== systemMapping.length - 1 && (
                                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-px h-8 bg-gradient-to-b from-neutral-800 to-[#f95738]/50" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
