'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Container from '@/components/ui/Container';
import { productsInBuild } from '@/data/saas-page';
import { Layers, Zap, Bot } from 'lucide-react';

const icons = [Layers, Zap, Bot];

export default function ProductsInBuild() {
    return (
        <section className="py-32 bg-[#FAFAF8] relative overflow-hidden select-none border-b-2 border-black">
            <Container className="relative z-10 max-w-4xl mx-auto">
                <div className="text-left mb-20">
                    <span className="inline-block text-xs font-mono bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] px-3 py-1 uppercase tracking-widest font-black mb-4">[ 04 / ACTIVE_BUILDS ]</span>
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mt-4">
                        Products in <span className="italic text-red-600 underline decoration-4 underline-offset-4" style={{ fontFamily: "Georgia, serif" }}>Development</span>.
                    </h2>
                </div>

                <div className="space-y-32">
                    {productsInBuild.map((product, idx) => {
                        const Icon = icons[idx % icons.length];
                        return (
                            <ProductBlock key={product.name} product={product} Icon={Icon} index={idx} />
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}

function ProductBlock({ product, Icon, index }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            style={{ opacity }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group"
        >
            {/* Details Content (7 Cols) */}
            <div className={`lg:col-span-7 flex gap-8 items-start ${!isEven ? 'lg:order-2' : ''}`}>
                <div className="w-12 h-12 bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] flex shrink-0 items-center justify-center transition-all duration-100">
                    <Icon className="w-5 h-5 text-red-600" />
                </div>

                <div className="grow border-l-2 border-black pl-8 md:pl-12 py-2 text-left">
                    <h3 className="text-xl font-bold uppercase tracking-tight text-black mb-2">{product.name}</h3>
                    <p className="text-xs text-red-600 font-mono uppercase tracking-widest mb-4">{product.purpose}</p>
                    <p className="text-xs text-gray-600 mb-8 max-w-xl leading-relaxed font-light">
                        {product.description}
                    </p>

                    <div>
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-4">Solves:</span>
                        <div className="flex flex-wrap gap-3">
                            {product.solves.map((item) => (
                                <span key={item} className="border-2 border-black bg-[#FAFAF8] text-black font-mono font-black uppercase text-[9px] px-2.5 py-1">
                                    {item}
                                </span>
                             ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Dashboard Visual (5 Cols) */}
            <div className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : ''}`}>
                <div className="relative border-2 border-black p-2 bg-white shadow-[4px_4px_0_#0A0A0A] group-hover:shadow-[6px_6px_0_#0A0A0A] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-100">
                    <div className="relative overflow-hidden aspect-16/10">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-1000 filter grayscale"
                        />
                        <div className="absolute inset-0 bg-black/80" />
                        <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase text-white bg-black border-2 border-black px-3 py-1">
                            dev_status: compiling
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
