'use client';
import { motion } from 'framer-motion';
import { systemMapping } from '@/data/solutions-page';
import Container from '@/components/ui/Container';

export default function SystemMapping() {
    return (
        <section className="relative py-28 bg-[#FAFAF8] border-t-2 border-black overflow-hidden select-none">

            {/* Huge Watermarked Background Text */}
            <div className="absolute inset-0 flex items-start justify-center pt-16 z-0 pointer-events-none">
                <div
                    className="w-full text-center text-[16vw] font-black tracking-tighter leading-none select-none opacity-[0.03]"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    ARCHITECTURE
                </div>
            </div>

            <Container className="relative z-10 flex flex-col items-center">
                <div className="text-center max-w-2xl mb-16">
                    <span className="inline-block px-3 py-1 bg-[#FFE500] text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A] text-xs font-mono font-black uppercase tracking-widest mb-6">
                        [ 03 / SYSTEM_MAPPING ]
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black uppercase leading-tight mb-4">
                        Interconnected{' '}
                        <span className="text-red-600 underline decoration-4 underline-offset-4">Systems</span>
                    </h2>
                    <p className="text-gray-500 text-sm font-mono max-w-lg mx-auto">
                        We don&apos;t build isolated features. We design interconnected systems that work together seamlessly.
                    </p>
                </div>

                <div className="flex flex-col gap-6 w-full max-w-md relative">
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
                                <div className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-100 p-6 flex items-center gap-6 group">
                                    <div className="w-12 h-12 bg-[#FAFAF8] border-2 border-black flex items-center justify-center group-hover:bg-[#FFE500] transition-colors shrink-0">
                                        <Icon className="w-6 h-6 text-gray-600 group-hover:text-black transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-black mb-1 uppercase tracking-tight">{item.step}</h3>
                                        <p className="text-xs font-mono text-gray-500 group-hover:text-gray-600 transition-colors">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Connection Line */}
                                {idx !== systemMapping.length - 1 && (
                                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-0.5 h-6 bg-black/20" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
