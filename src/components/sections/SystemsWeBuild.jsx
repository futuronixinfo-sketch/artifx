'use client';
import { motion } from 'framer-motion';
import { systemsWeBuild } from '@/data/home';
import Container from '@/components/ui/Container';
import { LayoutDashboard, Users, Workflow, Database, MessageSquare, Briefcase } from 'lucide-react';

import {
    AnimatedCRM,
    AnimatedDashboard,
    AnimatedLeads,
    AnimatedPortal,
    AnimatedWorkflow,
    AnimatedAI
} from '@/components/ui/SystemIcons';
import SpotlightCard from '@/components/ui/SpotlightCard';

const icons = [
    Briefcase,
    LayoutDashboard,
    Users,
    Database,
    Workflow,
    MessageSquare
];

export default function SystemsWeBuild() {
    return (
        <section className="py-28 bg-black relative border-t border-neutral-900 select-none">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <Container className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest mb-2 block font-bold">[ 06 / CORE_INFRASTRUCTURE ]</span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight mb-4">
                        Systems, not just <span className="italic text-[#f95738]" style={{ fontFamily: 'Georgia, serif' }}>websites</span>
                    </h2>
                    <p className="text-neutral-400 text-sm font-light">
                        We engineer the deep operational backbones that keep modern enterprises running.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {systemsWeBuild.items.map((item, idx) => {
                        let AnimatedIcon;

                        // Map items to their specific animated icons based on index or content
                        // Order in data/home.js:
                        // 0: "Custom CRM Systems" -> AnimatedCRM
                        // 1: "Admin Dashboards" -> AnimatedDashboard
                        // 2: "Lead Management Engines" -> AnimatedLeads
                        // 3: "Client Portals" -> AnimatedPortal
                        // 4: "Workflow Automation Tools" -> AnimatedWorkflow
                        // 5: "AI Customer Support Agents" -> AnimatedAI

                        switch (idx) {
                            case 0: AnimatedIcon = AnimatedCRM; break;
                            case 1: AnimatedIcon = AnimatedDashboard; break;
                            case 2: AnimatedIcon = AnimatedLeads; break;
                            case 3: AnimatedIcon = AnimatedPortal; break;
                            case 4: AnimatedIcon = AnimatedWorkflow; break;
                            case 5: AnimatedIcon = AnimatedAI; break;
                            default: AnimatedIcon = icons[idx % icons.length]; // Fallback
                        }

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                viewport={{ once: true }}
                                className="h-full"
                            >
                                <SpotlightCard className="h-full flex flex-col items-center justify-center p-6 text-center group transition-colors bg-neutral-950/40 border-neutral-900 hover:border-[#f95738]/50">
                                    <div className="w-12 h-12 md:w-16 md:h-16 text-neutral-500 group-hover:text-[#f95738] transition-colors mb-6 mx-auto">
                                        <AnimatedIcon className="w-full h-full" />
                                    </div>
                                    <span className="font-bold text-xs md:text-sm uppercase tracking-tight text-neutral-400 group-hover:text-white transition-colors">
                                        {item}
                                    </span>
                                </SpotlightCard>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
