'use client';
import { motion } from 'framer-motion';
import { whyArtifx } from '@/data/home';
import Container from '@/components/ui/Container';

export default function WhyArtifx() {
    return (
        <section className="py-28 bg-black border-t border-neutral-900 select-none">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left: Sticky Headline */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32 space-y-8">
                        <div>
                            <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest mb-2 block font-bold">[ 07 / ADVANTAGES ]</span>
                            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight mb-4">
                                Why <span className="italic text-[#f95738]" style={{ fontFamily: 'Georgia, serif' }}>Artifx</span>?
                            </h2>
                            <p className="text-sm text-neutral-400 font-light mb-8">
                                {whyArtifx.subtitle}
                            </p>
                            <div className="w-16 h-0.5 bg-[#f95738]" />
                        </div>

                        {/* Premium Visual Image Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative hidden lg:block border border-neutral-900 bg-neutral-950/30 group"
                        >
                            <img 
                                src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=600" 
                                alt="System architecture discussion" 
                                className="w-full h-64 object-cover opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-700 filter grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                            <div className="absolute bottom-4 left-4 font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
                                [ artifx_methodology: active ]
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Scrollable Content */}
                    <div className="lg:w-2/3 grid grid-cols-1 gap-6">
                        {whyArtifx.items.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="flex gap-6 p-8 bg-neutral-950/40 border border-neutral-900 hover:bg-neutral-900/10 hover:border-neutral-800 transition-colors"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-[#f95738]">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2">{item.title}</h3>
                                        <p className="text-xs text-neutral-400 font-light leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
