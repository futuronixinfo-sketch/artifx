'use client';
import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';
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
        <section className="py-24 bg-white border-b-2 border-black">
            <Container>
                <div className="text-left max-w-2xl mb-16">
                    <span className="inline-block text-xs font-mono bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] px-3 py-1 uppercase tracking-widest font-black mb-4">[ 02 / REALITY_CHECK ]</span>
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mb-4 mt-4">
                        Why Most AI Implementations <span className="text-red-600 italic underline decoration-4 underline-offset-4">Fail</span>.
                    </h2>
                    <p className="text-xs font-light text-gray-600 leading-relaxed max-w-md">
                        Without structural workflow design, AI becomes shelfware. We resolve friction before writing a single line of logic.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {fails.map((fail, idx) => (
                        <motion.div
                            key={fail.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-100"
                        >
                            <div className="w-8 h-8 bg-red-600 border-2 border-black flex items-center justify-center mb-4">
                                <XCircle className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="text-sm font-bold uppercase tracking-tight text-black mb-2">{fail.title}</h3>
                            <p className="text-xs font-light text-gray-600 leading-relaxed">
                                {fail.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
