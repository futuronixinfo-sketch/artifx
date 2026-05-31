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
            className="py-32 bg-white border-t border-gray-200 relative overflow-hidden text-center select-none"
        >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-50 rounded-full blur-[140px] pointer-events-none" />

            <Container className="relative z-10 max-w-2xl">
                <span className="text-xs font-mono text-red-600 uppercase tracking-widest block font-bold mb-4">[ 07 / WAITLIST ]</span>

                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-black mb-6 leading-tight">
                    Interested in <span className="italic gradient-text" style={{ fontFamily: "Georgia, serif" }}>Early Access</span>?
                </h2>

                <p className="text-xs text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
                    {whatNext.content}
                </p>

                <p className="text-xs text-gray-700 mb-12 font-medium">
                    Join the waitlist to receive private alpha telemetry reports.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="work@email.com"
                         className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 text-black placeholder:text-gray-400 focus:outline-none focus:border-red-500 transition-colors text-xs"
                        style={{ borderRadius: 0 }}
                    />
                    <Button variant="primary" className="bg-white text-black hover:bg-neutral-200 border-transparent w-full sm:w-auto justify-center text-xs h-11" style={{ borderRadius: 0 }}>
                        Join Waitlist
                    </Button>
                </form>

                <p className="mt-8 text-[10px] text-gray-400 font-mono uppercase tracking-widest">
                    [ BUILDING IN PUBLIC • PRIVATE TELEMETRY RULES APPLY ]
                </p>
            </Container>
        </motion.section>
    );
}
