'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { ArrowRight, Lock, Calendar } from 'lucide-react';

export default function AICTA() {
    return (
        <section className="py-32 bg-white border-t border-gray-200 relative overflow-hidden select-none">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50 rounded-full blur-[140px] pointer-events-none" />

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <span className="text-xs font-mono text-red-600 uppercase tracking-widest mb-4 block font-bold">[ 06 / AUTOMATION_INITIATIVE ]</span>

                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-black mb-6 leading-tight">
                        Identify where AI can <br />
                        <span className="gradient-text italic">actually</span> help your operations.
                    </h2>

                    <p className="text-xs font-light text-gray-500 mb-12 max-w-md mx-auto leading-relaxed">
                        No sales pitch or theoretical slides. We deliver a concrete architectural blueprint of how automation can streamline your specific workflows.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button variant="primary" size="md" href="/contact" className="w-full sm:w-auto min-w-[200px] justify-center px-6">
                            Request AI Audit
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="md" href="/contact" className="w-full sm:w-auto min-w-[200px] justify-center px-6">
                            Book Strategy Call
                            <Calendar className="ml-2 w-4 h-4 text-red-600" />
                        </Button>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-8 text-[10px] text-gray-400 font-mono uppercase tracking-widest">
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
