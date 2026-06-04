'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { whatNext } from '@/data/saas-page';

export default function SaasCTA() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.8, 1], [0.95, 1]);

    return (
        <motion.section
            style={{ scale }}
            className="py-32 bg-[#FAFAF8] border-t-2 border-black relative overflow-hidden text-center select-none"
        >
            <Container className="relative z-10 max-w-2xl">
                <span className="inline-block text-xs font-mono bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] px-3 py-1 uppercase tracking-widest font-black mb-6">[ 07 / WAITLIST ]</span>

                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-black mb-6 leading-tight mt-4">
                    Interested in <span className="italic text-red-600 underline decoration-4 underline-offset-4" style={{ fontFamily: "Georgia, serif" }}>Early Access</span>?
                </h2>

                <p className="text-xs text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                    {whatNext.content}
                </p>

                <p className="text-xs text-gray-700 mb-12 font-medium">
                    Join the waitlist to receive private alpha telemetry reports.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="work@email.com"
                        className="flex-1 px-4 py-3 bg-white border-2 border-black text-black placeholder:text-gray-400 focus:outline-none focus:shadow-[4px_4px_0_#0A0A0A] transition-all duration-100 text-xs"
                    />
                    <button
                        type="submit"
                        className="bg-[#FFE500] text-black border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 font-black uppercase tracking-widest font-mono transition-all duration-100 px-6 py-3 text-xs w-full sm:w-auto"
                    >
                        Join Waitlist
                    </button>
                </form>

                <p className="mt-8 text-[10px] text-gray-500 font-mono uppercase tracking-widest">
                    [ BUILDING IN PUBLIC • PRIVATE TELEMETRY RULES APPLY ]
                </p>
            </Container>
        </motion.section>
    );
}
