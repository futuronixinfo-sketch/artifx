'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { serviceDetails } from '@/data/services-page';

export default function ServiceIndex() {
    const scrollToService = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="relative pt-32 pb-20 bg-black text-white border-b border-neutral-900 select-none overflow-hidden">
            
            {/* 1. GIANT WATERMARK TEXT (Masked Dot-Matrix / Plus-sign Pattern) */}
            <div className="absolute inset-0 flex items-start justify-center pt-16 z-0 pointer-events-none">
                {/* Soft ambient background glow */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[20%] bg-[#f95738]/[0.03] blur-[120px] rounded-full pointer-events-none" />
                
                <div 
                    className="w-full text-center text-[18vw] font-black tracking-tighter leading-none select-none"
                    style={{
                        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px)",
                        backgroundSize: "6px 6px",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        WebkitTextStroke: "1px rgba(255, 255, 255, 0.04)",
                        fontFamily: "var(--font-heading)"
                    }}
                >
                    SERVICES
                </div>
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Sticky Left Navigation */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32 self-start space-y-6">
                        <div>
                            <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest block font-bold mb-2">[ 01 / SERVICES ]</span>
                            <h1 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
                                Core engineering <br />
                                <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>capabilities</span>.
                            </h1>
                        </div>
                        <p className="text-neutral-400 text-xs font-light max-w-sm leading-relaxed">
                            Clear, sharp, decision-oriented systems. We don't build generic websites — we build what your enterprise scale actually demands.
                        </p>

                        <div className="hidden lg:flex flex-col gap-2 border-l border-neutral-900 pl-6">
                            {serviceDetails.map((service, idx) => (
                                <button
                                    key={service.id}
                                    onClick={() => scrollToService(service.id)}
                                    className="text-left text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 hover:text-[#f95738] hover:pl-2 transition-all py-1.5 cursor-pointer"
                                >
                                    [ 0{idx + 1} // {service.title} ]
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Scrollable Index Preview */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {serviceDetails.map((service, idx) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                viewport={{ once: true }}
                                onClick={() => scrollToService(service.id)}
                                className="group p-6 bg-neutral-950/40 border border-neutral-900 hover:border-[#f95738]/50 hover:bg-neutral-900/10 transition-all cursor-pointer"
                            >
                                <span className="text-[10px] font-mono font-bold text-[#f95738] mb-2 block">[ 0{idx + 1} ]</span>
                                <h3 className="text-sm font-bold uppercase tracking-tight text-white group-hover:text-[#f95738] transition-colors mb-2">{service.title}</h3>
                                <p className="text-xs text-neutral-400 font-light leading-relaxed line-clamp-2">
                                    {service.subtitle}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
