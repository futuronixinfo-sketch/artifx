'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';

export default function SolutionsCTA() {
    return (
        <section className="py-32 bg-black relative overflow-hidden select-none border-t border-neutral-900">
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f95738]/[0.03] blur-[140px] pointer-events-none" />

            <Container className="relative z-10 text-center">
                <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest mb-4 block font-bold">
                    <span className="inline-block h-1.5 w-1.5 bg-[#f95738] animate-pulse mr-2" />
                    [ 06 / SYSTEM_MAPPING ]
                </span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-light tracking-tight text-white leading-tight mb-8"
                >
                    Not Sure What <br className="hidden md:block" />
                    <span className="italic text-[#f95738]" style={{ fontFamily: 'Georgia, serif' }}>System</span> You Need?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-sm font-light text-neutral-400 max-w-xl mx-auto mb-12"
                >
                    You don't need to decide today. We help you map your business and identify the right solution.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button variant="primary" size="md" href="/contact" className="group">
                        Get Free System Mapping Call
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="md" href="/solutions">
                        Explore Solutions
                    </Button>
                </motion.div>
            </Container>
        </section>
    );
}
