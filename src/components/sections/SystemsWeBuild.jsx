'use client';
import { motion } from 'framer-motion';
import { systemsWeBuild } from '@/data/home';
import Container from '@/components/ui/Container';
import { LayoutDashboard, Users, Workflow, Database, MessageSquare, Briefcase } from 'lucide-react';

const systemIcons = [
  Briefcase,
  LayoutDashboard,
  Users,
  Database,
  Workflow,
  MessageSquare
];

const systemGradients = [
  'bg-red-700',
  'bg-red-600',
  'bg-red-700',
  'bg-red-600',
  'bg-red-600',
  'bg-red-700',
];

export default function SystemsWeBuild() {
  return (
    <section className="py-28 bg-white border-t border-gray-200 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(167, 139, 250, 0.3) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-red-600 uppercase tracking-[0.2em] mb-4 block">[ 06 / CORE_INFRASTRUCTURE ]</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black leading-tight mb-4">
            Systems, not just <span className="gradient-text">websites</span>
          </h2>
          <p className="text-base text-red-600/50">
            We engineer the deep operational backbones that keep modern enterprises running.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {systemsWeBuild.items.map((item, idx) => {
            const Icon = systemIcons[idx % systemIcons.length];
            const gradient = systemGradients[idx % systemGradients.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-gray-50 border border-gray-200 hover:border-red-500 transition-all duration-500 p-6 text-center group"
              >
                <div className={`w-14 h-14 rounded-xl ${gradient} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-sm tracking-tight text-red-600/70 group-hover:text-black transition-colors">
                  {item}
                </span>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
