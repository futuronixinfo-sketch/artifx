'use client';
import { motion } from 'framer-motion';
import { AlertTriangle, XCircle } from 'lucide-react';
import Container from '@/components/ui/Container';

const fails = [
    {
        title: "No Workflow Integration",
        description: "AI added without understanding the business process first.",
        icon: XCircle
    },
    {
        title: "Generic Tools",
        description: "Using off-the-shelf tools with no business logic.",
        icon: XCircle
    },
    {
        title: "Zero Scalability",
        description: "Solutions that break as soon as data volume increases.",
        icon: XCircle
    },
    {
        title: "Unused Systems",
        description: "AI becomes shelfware because it doesn't solve real problems.",
        icon: XCircle
    }
];

export default function AIFails() {
    return (
        <section className="py-24 bg-neutral-950 border-b border-neutral-900">
            <Container>
                <div className="text-left max-w-2xl mb-16">
                    <span className="text-xs font-mono text-red-500 uppercase tracking-widest block font-bold mb-4">[ 02 / REALITY_CHECK ]</span>
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-4">
                        Why Most AI Implementations <span className="italic text-red-500" style={{ fontFamily: "Georgia, serif" }}>Fail</span>.
                    </h2>
                    <p className="text-xs font-light text-neutral-400 leading-relaxed max-w-md">
                        Without structural workflow design, AI becomes shelfware. We resolve friction before writing a single line of logic.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {fails.map((fail, idx) => {
                        return (
                            <motion.div
                                key={fail.title}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-neutral-950/40 border border-neutral-900 hover:border-red-500/30 transition-colors group"
                                style={{ borderRadius: 0 }}
                            >
                                <div className="w-8 h-8 bg-red-950/40 border border-red-900/40 flex items-center justify-center mb-4 transition-transform text-red-500" style={{ borderRadius: 0 }}>
                                    <XCircle className="w-4 h-4" />
                                </div>
                                <h3 className="text-sm font-bold uppercase tracking-tight text-white mb-2">{fail.title}</h3>
                                <p className="text-xs font-light text-neutral-400 leading-relaxed">
                                    {fail.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
