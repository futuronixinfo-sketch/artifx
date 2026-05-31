'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { serviceDetails } from '@/data/services-page';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ServiceDetails() {
    return (
        <section className="py-24 bg-black border-b border-neutral-900 relative select-none">
            <Container className="max-w-4xl mx-auto space-y-32">
                {serviceDetails.map((service, index) => (
                    <motion.div
                        key={service.id}
                        id={service.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col gap-8 relative"
                    >
                        {/* Sticky Number */}
                        <div className="absolute -left-20 top-0 text-2xl font-bold text-neutral-800 hidden lg:block font-mono">
                            // 0{index + 1}
                        </div>

                        <div className="border-b border-neutral-900 pb-8 grid grid-cols-1 md:grid-cols-[1fr_200px] gap-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4 text-white">{service.title}</h2>
                                <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-lg">{service.subtitle}</p>
                            </div>
                            <div className="flex flex-col justify-end">
                                <Button variant="outline" size="sm" href="/contact">
                                    Inquire Now
                                </Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                            {/* Left Column: Tiers & Info */}
                            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#f95738] mb-6">[ Includes ]</h3>
                                    <ul className="space-y-4">
                                        {service.includes.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-neutral-300 font-light text-xs leading-relaxed">
                                                <CheckCircle2 className="w-4 h-4 text-[#f95738] flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#f95738] mb-4">[ Best For ]</h3>
                                        <span className="inline-block px-4 py-2 bg-neutral-950/40 border border-neutral-900 text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                                            {service.bestFor}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#f95738] mb-4">[ Outcome ]</h3>
                                        <div className="p-4 bg-neutral-950/40 border border-[#10b981]/20 flex items-start gap-4">
                                            <div className="w-8 h-8 border border-neutral-800 bg-neutral-900 flex items-center justify-center flex-shrink-0 text-[#10b981]">
                                                <ArrowRight className="w-4 h-4 animate-pulse" />
                                            </div>
                                            <p className="text-emerald-400 text-xs font-mono font-bold uppercase tracking-wide mt-1">{service.outcome}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Service Feature Image */}
                            <div className="lg:col-span-5">
                                <div className="relative h-full border border-neutral-900 p-1.5 bg-neutral-950/40 group min-h-[220px]">
                                    <img 
                                        src={service.image} 
                                        alt={service.title} 
                                        className="w-full h-full min-h-[200px] object-cover opacity-50 group-hover:scale-102 group-hover:opacity-75 transition-all duration-700 filter grayscale"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </Container>
        </section>
    );
}
