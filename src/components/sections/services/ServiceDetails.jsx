'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Container from '@/components/ui/Container';
import { serviceDetails } from '@/data/services-page';
import { ArrowUpRight, Cpu } from 'lucide-react';

export default function ServiceDetails() {
    return (
        <section className="py-28 bg-white border-b border-gray-100 select-none relative">
            {/* Tech line indicator */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-gray-200 to-transparent" />

            <Container className="max-w-6xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                    <span className="text-xs font-mono text-red-600 uppercase tracking-widest block font-bold">
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
    const cardRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <Link href={`/services/${service.id}`} className="group block h-full">
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="border border-gray-200 bg-white p-7 group-hover:border-black transition-all duration-500 flex flex-col h-full relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-black/5"
            >
                {/* Glowing radial backdrop spotlight on hover */}
                <div
                    className="absolute -inset-px transition duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                        background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(220, 38, 38, 0.04), transparent 45%)`,
                    }}
                />

                {/* Decorative border highlight indicator */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

                {/* Card Header */}
                <div className="flex justify-between items-start mb-4 relative z-10">
                    <span className="text-[10px] font-mono text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded-md">
                        {"//"} 0{idx + 1}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-500">
                        <ArrowUpRight className="w-4 h-4" />
                    </div>
                </div>

                {/* Card Title & Description */}
                <div className="space-y-2 mb-6 relative z-10">
                    <h3 className="text-lg font-bold text-black group-hover:text-red-600 transition-colors duration-300 uppercase tracking-tight">
                        {service.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">{service.subtitle}</p>
                </div>

                {/* Interactive list tags */}
                <div className="flex flex-wrap gap-1.5 mb-8 relative z-10">
                    {service.includes.map((item) => (
                        <span
                            key={item}
                            className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-[9px] text-gray-500 font-mono uppercase tracking-wider rounded-md group-hover:bg-red-50/30 group-hover:border-red-100 group-hover:text-red-600 transition-all duration-500"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Card Footer */}
                <div className="mt-auto pt-5 border-t border-gray-100 flex justify-between items-center relative z-10">
                    <div className="flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-gray-300 group-hover:text-red-500 transition-colors" />
                        <span className="text-[9px] font-mono text-gray-400 uppercase tracking-wider">
                            {service.bestFor.split(',')[0]}
                        </span>
                    </div>
                    <span className="text-[9px] font-mono text-red-600 font-bold opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        INSPECT SPEC &rarr;
                    </span>
                </div>
            </motion.div>
        </Link>
    );
}
