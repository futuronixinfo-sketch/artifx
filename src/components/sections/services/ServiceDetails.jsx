'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Container from '@/components/ui/Container';
import { serviceDetails } from '@/data/services-page';
import { ArrowUpRight, Cpu } from 'lucide-react';

export default function ServiceDetails() {
    return (
        <section className="py-28 bg-[#FAFAF8] border-b-2 border-black select-none relative">

            <Container className="max-w-6xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                    <span className="inline-block px-2 py-0.5 bg-[#FFE500] text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A] font-mono text-xs font-bold uppercase tracking-widest">
                        [ SYSTEM DISCOVERY ]
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black uppercase">
                        Select your operational stack
                    </h2>
                    <p className="text-xs text-gray-500 max-w-sm mx-auto font-light leading-relaxed">
                        Click on any system block below to inspect its detailed specifications, engineering modules, and target outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {serviceDetails.map((service, idx) => (
                        <ServiceCard key={service.id} service={service} idx={idx} />
                    ))}
                </div>
            </Container>
        </section>
    );
}

function ServiceCard({ service, idx }) {
    return (
        <Link href={`/services/${service.id}`} className="group block h-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 p-7 flex flex-col h-full relative overflow-hidden"
            >
                {/* Card Header */}
                <div className="flex justify-between items-start mb-4 relative z-10">
                    <span className="text-[10px] font-mono text-black font-bold bg-[#FFE500] px-2 py-0.5 border-2 border-black">
                        {"//"} 0{idx + 1}
                    </span>
                    <div className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-150">
                        <ArrowUpRight className="w-4 h-4" />
                    </div>
                </div>

                {/* Card Title & Description */}
                <div className="space-y-2 mb-6 relative z-10">
                    <h3 className="text-lg font-bold text-black group-hover:text-red-600 transition-colors duration-150 uppercase tracking-tight">
                        {service.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">{service.subtitle}</p>
                </div>

                {/* Tag list */}
                <div className="flex flex-wrap gap-1.5 mb-8 relative z-10">
                    {service.includes.map((item) => (
                        <span
                            key={item}
                            className="px-2.5 py-1 bg-[#FAFAF8] border-2 border-black text-[9px] text-black font-mono uppercase tracking-wider group-hover:bg-[#FFE500] transition-all duration-150"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Card Footer */}
                <div className="mt-auto pt-5 border-t-2 border-black flex justify-between items-center relative z-10">
                    <div className="flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-black" />
                        <span className="text-[9px] font-mono text-gray-400 uppercase tracking-wider">
                            {service.bestFor.split(',')[0]}
                        </span>
                    </div>
                    <span className="text-[9px] font-mono text-red-600 font-bold opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-150">
                        INSPECT SPEC &rarr;
                    </span>
                </div>
            </motion.div>
        </Link>
    );
}
