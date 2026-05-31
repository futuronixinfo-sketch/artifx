'use client';
import { motion } from 'framer-motion';
import { whoThisIsFor } from '@/data/home';
import Container from '@/components/ui/Container';
import SpotlightCard from '@/components/ui/SpotlightCard';

export default function WhoThisIsFor() {
    return (
        <section className="py-28 bg-black border-t border-neutral-900 relative overflow-hidden select-none">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#f95738]/[0.02] rounded-full blur-[120px] pointer-events-none" />

            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest mb-2 block font-bold">[ 04 / COMPATIBILITY ]</span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight mb-4">
                        Built for teams that want to <span className="italic text-[#f95738]" style={{ fontFamily: 'Georgia, serif' }}>scale</span>
                    </h2>
                    <p className="text-neutral-400 text-sm font-light">
                        We don't just write code. We design systems to solve core scalability bottlenecks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {whoThisIsFor.items.map((item, idx) => {
                        const Icon = item.icon;
                        const bgImages = [
                            "https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=400",
                            "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400",
                            "https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=400",
                            "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
                        ];
                        const bgImage = bgImages[idx % bgImages.length];

                        return (
                            <SpotlightCard
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 text-center group h-full relative overflow-hidden bg-neutral-950/40 border-neutral-900"
                            >
                                <div 
                                    className="absolute inset-0 bg-cover bg-center opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-105 transition-all duration-700 pointer-events-none"
                                    style={{ backgroundImage: `url(${bgImage})` }}
                                />

                                <div className="w-12 h-12 border border-neutral-800 bg-neutral-900 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#f95738] group-hover:border-[#f95738] group-hover:text-white transition-all duration-300 relative z-10">
                                    <Icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-base font-bold uppercase tracking-tight text-white mb-2 relative z-10">{item.title}</h3>
                                <p className="text-xs text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors relative z-10">
                                    {item.description}
                                </p>
                            </SpotlightCard>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
