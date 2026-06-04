'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { ArrowRight, Lock, Calendar } from 'lucide-react';

export default function AICTA() {
    return (
        <section className="py-32 bg-white border-t-2 border-black relative overflow-hidden select-none">
            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <span className="inline-block text-xs font-mono bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] px-3 py-1 uppercase tracking-widest font-black mb-6">[ 06 / AUTOMATION_INITIATIVE ]</span>

                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-black mb-6 leading-tight mt-4">
                        Identify where AI can <br />
                        <span className="text-red-600 italic underline decoration-4 underline-offset-4">actually</span> help your operations.
                    </h2>

                    <p className="text-xs font-light text-gray-600 mb-12 max-w-md mx-auto leading-relaxed">
                        No sales pitch or theoretical slides. We deliver a concrete architectural blueprint of how automation can streamline your specific workflows.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="/contact"
                            className="bg-[#FFE500] text-black border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 font-black uppercase tracking-widest font-mono transition-all duration-100 px-6 py-3 text-xs inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[200px]"
                        >
                            Request AI Audit
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="/contact"
                            className="bg-black text-white border-2 border-black shadow-[4px_4px_0_#444] hover:shadow-[2px_2px_0_#444] hover:translate-x-0.5 hover:translate-y-0.5 font-black uppercase tracking-widest font-mono transition-all duration-100 px-6 py-3 text-xs inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[200px]"
                        >
                            Book Strategy Call
                            <Calendar className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-8 text-[10px] text-gray-500 font-mono uppercase tracking-widest">
                        <span className="flex items-center gap-2">
                            <Lock className="w-3 h-3 text-red-600" /> SECURE & PRIVATE
                        </span>
                        <span>•</span>
                        <span>DETERMINISTIC BLUEPRINT</span>
                        <span>•</span>
                        <span>SYSTEM ARCHITECTS</span>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
