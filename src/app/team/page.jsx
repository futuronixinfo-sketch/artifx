'use client';
import { motion } from 'framer-motion';
import { Users, Cpu, Terminal, ExternalLink, Github, Linkedin, Shield, Workflow, CheckCircle, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { teamIntro, teamMembers, teamValues } from '@/data/team';

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white text-black select-none relative overflow-hidden pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-16 border-b border-gray-100 flex items-center bg-white overflow-hidden select-none">
        
        {/* Soft Background Grid Guides */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

        {/* Decorative vertical center grid guide */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-gray-200 via-gray-100 to-transparent pointer-events-none" />

        {/* Ambient Crimson Aura Backdrop */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-red-50/50 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Huge Watermarked Background Text (matches homepage fix) */}
        <div className="absolute inset-x-0 top-[14%] sm:top-[16%] md:top-[12%] flex justify-center z-0 pointer-events-none select-none">
          <div
            className="w-full text-center text-[24vw] sm:text-[18vw] font-black tracking-tighter leading-none opacity-[0.03]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {teamIntro.watermark}
          </div>
        </div>

        <Container className="relative z-10 max-w-4xl text-center space-y-6">
          {/* Release badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-50/80 border border-red-200 rounded-xl shadow-sm"
          >
            <Users className="w-3.5 h-3.5 text-red-600 animate-pulse" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-600">
              [ {teamIntro.badge} ]
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-black uppercase leading-[0.95]"
            >
              {teamIntro.title.split(' ')[0]}{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">
                {teamIntro.title.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>
          </div>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs md:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed font-mono"
          >
            /* {teamIntro.subtitle} */
          </motion.p>
        </Container>
      </section>

      {/* 2. TEAM MEMBERS SECTION */}
      <section className="py-20 relative z-10">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group border border-gray-200 bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl hover:shadow-2xl hover:border-gray-300 transition-all duration-300 flex flex-col justify-between"
              >
                
                {/* Visual guideline metrics inside cards */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/[0.01] rounded-full blur-2xl pointer-events-none group-hover:bg-red-500/[0.02] transition-colors" />
                <div className="absolute top-4 right-4 text-[9px] font-mono text-gray-300 font-bold">
                  CORE_NODE // 0{idx + 1}
                </div>

                <div className="space-y-6">
                  {/* Member Name and Identity Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-white font-mono font-black text-lg shadow-lg shadow-black/10 border border-neutral-800">
                      {member.avatarText}
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">{member.name}</h2>
                      <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-red-600 font-bold mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Biography */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-mono">
                    {member.bio}
                  </p>

                  {/* Dynamic Tech Stack Badges */}
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono text-gray-400 font-bold uppercase tracking-wider block">
                      Active Tech Infrastructure & Core Focus
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.techStack.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-500 font-mono text-[9px] uppercase tracking-wide rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Monospaced Diagnostic Status Telemetry */}
                  <div className="bg-black/95 p-4 rounded-2xl border border-neutral-900 font-mono text-[9px] text-neutral-400 space-y-2 select-text relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-950/20 rounded-full blur-xl pointer-events-none" />
                    <div className="flex justify-between items-center text-red-500 font-bold border-b border-neutral-900 pb-1 mb-1 select-none">
                      <span>STATUS ENGINE TELEMETRY</span>
                      <span className="flex items-center gap-1 text-[8px] px-1.5 py-0.5 bg-red-950/50 border border-red-900/50 rounded-sm">
                        {member.stats.find(s => s.label === "Status Engine")?.value || "ONLINE"}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 pt-1">
                      {member.stats.filter(s => s.label !== "Status Engine").map((stat) => (
                        <div key={stat.label} className="flex flex-col">
                          <span className="text-gray-500 uppercase text-[8px] tracking-wider">{stat.label}</span>
                          <span className="text-white font-extrabold text-[10px] mt-0.5">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* External Social Profiles & Portals */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    {member.links.website && (
                      <a
                        href={member.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-gray-200 hover:border-black rounded-xl text-gray-500 hover:text-black transition-all hover:scale-105"
                        title="Personal Website"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {member.links.github && (
                      <a
                        href={member.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-gray-200 hover:border-black rounded-xl text-gray-500 hover:text-black transition-all hover:scale-105"
                        title="GitHub Profile"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.links.linkedin && (
                      <a
                        href={member.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-gray-200 hover:border-black rounded-xl text-gray-500 hover:text-black transition-all hover:scale-105"
                        title="LinkedIn Profile"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  
                  <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest">
                    SYSTEM_LINK_ACTIVE // 200_OK
                  </span>
                </div>

              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. CORE ENGINEERING VALUES */}
      <section className="py-20 relative z-10 border-t border-b border-gray-100 bg-gray-50/30">
        <Container className="max-w-5xl">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[9px] font-mono text-red-600 font-bold uppercase tracking-widest">
              HOW WE COMPILE SYSTEMS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
              Our Core Operational Values
            </h2>
            <p className="text-xs font-mono text-gray-400 uppercase tracking-wider max-w-xl mx-auto">
              Behind every line of code lies a strict architecture benchmark focused on scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamValues.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-gray-200 bg-white p-5 rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center text-red-600 font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-black uppercase tracking-tight">{val.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mt-2 font-mono">
                      {val.desc}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100 mt-6 select-text">
                  <code className="text-[9px] font-mono text-red-600 font-semibold block break-all">
                    &gt; {val.code}
                  </code>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. MEET THE ENGINEERS CTA */}
      <section className="py-20 relative z-10">
        <Container className="max-w-4xl text-center">
          <div className="border border-neutral-900 bg-black text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
            {/* Glowing red accent behind CTA text */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-900/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <span className="text-[9px] font-mono text-red-500 font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 animate-pulse" />
                COGNITIVE SCHEDULING INTERFACE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-none">
                Ready to Architect <br className="hidden sm:inline" /> Your Scaling Blueprint?
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 font-mono max-w-xl mx-auto leading-relaxed">
                Connect directly with our engineering founders to diagnose bottlenecks and engineer custom high-velocity AI pipelines.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  variant="custom"
                  size="lg"
                  href="/contact"
                  className="bg-red-600 text-white hover:bg-red-500 border-0 shadow-lg shadow-red-500/20 text-xs font-mono uppercase tracking-widest px-8 py-4.5 rounded-xl flex items-center justify-center gap-2 group transition-all"
                >
                  Initiate System Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </main>
  );
}
