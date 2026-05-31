'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Briefcase, DollarSign, MapPin, ArrowRight } from 'lucide-react';

const positions = [
    {
        title: "Upwork Bidder / Lead Gen",
        type: "Contract / Commission Based",
        salary: "20% of Project Value",
        location: "Remote",
        description: "Focus on writing winning proposals and getting responses on Upwork. You are the first touchpoint.",
        requirements: [
            "Expert at writing custom, non-AI cover letters",
            "Deep understanding of Upwork algorithms & bidding strategies",
            "Ability to filter junk leads and identify high-value clients",
            "Must have a track record of winning jobs on Upwork"
        ]
    },
    {
        title: "Sales Executive (Closer)",
        type: "Contract / Commission Based",
        salary: "20% of Project Value",
        location: "Remote",
        description: "Take the leads generated and convert them into paying clients. Handle calls, negotiations, and closing.",
        requirements: [
            "Native/Fluent English speaker (or neutral accent)",
            "Experience selling high-ticket digital services ($5k+)",
            "Confidence in handling objections and negotiating price",
            "Available for US/EU timezone calls"
        ]
    }
];

export default function CareersPage() {
    return (
        <main className="bg-black min-h-screen text-white select-none overflow-hidden pb-32">
            {/* 1. HERO SECTION WITH GIANT WATERMARK TEXT */}
            <section className="relative pt-32 pb-20 border-b border-neutral-900 min-h-[60vh] flex items-center">
                {/* GIANT WATERMARK TEXT */}
                <div className="absolute inset-0 flex items-start justify-center pt-16 z-0 pointer-events-none">
                    {/* Soft ambient background glow */}
                    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[20%] bg-[#f95738]/[0.03] blur-[120px] rounded-full pointer-events-none" />
                    
                    <div 
                        className="w-full text-center text-[18vw] font-black tracking-tighter leading-none select-none"
                        style={{
                            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px)",
                            backgroundSize: "6px 6px",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            WebkitTextStroke: "1px rgba(255, 255, 255, 0.04)",
                            fontFamily: "var(--font-heading)"
                        }}
                    >
                        MISSION
                    </div>
                </div>

                <Container className="relative z-10 max-w-4xl text-center space-y-6">
                    <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest block font-bold mb-2">[ 01 / JOIN_US ]</span>
                    
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight"
                    >
                        Build systems that <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>scale</span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xs text-neutral-400 font-light leading-relaxed max-w-xl mx-auto"
                    >
                        We don't just write source code; we establish deterministic architectures that eliminate operational friction. Join our mission if you care about zero-compromise execution.
                    </motion.p>
                </Container>
            </section>

            {/* 2. CULTURE IMAGE ARCHIVAL VIEW */}
            <section className="py-24 border-b border-neutral-900 bg-neutral-950/40 relative">
                <Container className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative border border-neutral-900 p-2 bg-neutral-950/40 group shadow-2xl"
                    >
                        <div className="relative overflow-hidden aspect-[21/9]">
                            <img 
                                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                                alt="Artifx remote team work culture" 
                                className="w-full h-full object-cover opacity-40 group-hover:scale-102 transition-all duration-1000 filter grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                            <div className="absolute bottom-6 left-6 text-left">
                                <p className="text-white font-bold text-xs uppercase tracking-wider mb-1">[ culture: remote_deterministic_execution ]</p>
                                <p className="text-neutral-500 text-[10px] font-mono">ESTABLISHED FOR HIGHEST INDEPENDENT DUAL PERFORMANCE</p>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* 3. OPEN OPPORTUNITIES GRID */}
            <section className="py-24 bg-black relative">
                <Container className="max-w-4xl">
                    <div className="text-left mb-16">
                        <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest block font-bold mb-4">[ 02 / ROLES ]</span>
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">Open Positions</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {positions.map((job, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 bg-neutral-950/40 border border-neutral-900 hover:border-[#f95738]/40 transition-colors flex flex-col h-full justify-between"
                                style={{ borderRadius: 0 }}
                            >
                                <div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono uppercase bg-emerald-950/40 text-emerald-400 border border-emerald-900/60" style={{ borderRadius: 0 }}>
                                            <DollarSign className="w-3 h-3 text-emerald-400" />
                                            {job.salary}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono uppercase bg-neutral-900 border border-neutral-800 text-neutral-400" style={{ borderRadius: 0 }}>
                                            <Briefcase className="w-3 h-3" />
                                            CONTRACT
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono uppercase bg-neutral-900 border border-neutral-800 text-neutral-400" style={{ borderRadius: 0 }}>
                                            <MapPin className="w-3 h-3" />
                                            {job.location}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-white">{job.title}</h3>
                                    
                                    <p className="text-xs text-neutral-400 font-light leading-relaxed mb-8">
                                        {job.description}
                                    </p>

                                    <div className="mb-8 w-full border-t border-neutral-900 pt-6">
                                        <h4 className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mb-4">Core Requirements</h4>
                                        <ul className="space-y-3">
                                            {job.requirements.map((req, rIdx) => (
                                                <li key={rIdx} className="flex items-start gap-3 text-xs text-neutral-400 font-light leading-relaxed">
                                                    <span className="w-1.5 h-1.5 bg-[#f95738] mt-1.5 shrink-0" style={{ borderRadius: 0 }} />
                                                    <span>{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-neutral-900">
                                    <Button href="mailto:careers@artifx.agency" variant="primary" className="w-full justify-center text-xs h-10">
                                        Apply Now <ArrowRight className="ml-2 w-3 h-3" />
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
}
