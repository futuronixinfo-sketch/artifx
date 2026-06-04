'use client';
import { motion } from 'framer-motion';
import { Users, ExternalLink, Github, Linkedin, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { teamIntro, teamMembers, teamValues } from '@/data/team';

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-black select-none relative overflow-hidden pb-24">

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-16 border-t-2 border-b-2 border-black flex items-center bg-[#FAFAF8] overflow-hidden select-none">

        {/* Huge Watermarked Background Text */}
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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFE500] text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A]"
          >
            <Users className="w-3.5 h-3.5 text-black animate-pulse" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-black">
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
              <span className="text-red-600 underline decoration-4 underline-offset-4">
                {teamIntro.title.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>
          </div>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed font-mono"
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
                className="group bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-100 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-4 right-4 text-[9px] font-mono text-gray-400 font-bold">
                  CORE_NODE // 0{idx + 1}
                </div>

                <div className="space-y-6">
                  {/* Member Name and Identity Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-black border-2 border-black flex items-center justify-center text-white font-mono font-black text-lg">
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
                    <span className="text-[9px] font-mono text-gray-500 font-bold uppercase tracking-wider block">
                      Active Tech Infrastructure & Core Focus
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.techStack.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 bg-[#FAFAF8] border-2 border-black text-gray-700 font-mono text-[9px] uppercase tracking-wide">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Monospaced Diagnostic Status Telemetry */}
                  <div className="bg-black p-4 border-2 border-black font-mono text-[9px] text-neutral-400 space-y-2 select-text relative overflow-hidden">
                    <div className="flex justify-between items-center text-red-500 font-bold border-b border-neutral-800 pb-1 mb-1 select-none">
                      <span>STATUS ENGINE TELEMETRY</span>
                      <span className="flex items-center gap-1 text-[8px] px-1.5 py-0.5 bg-red-950/50 border border-red-900/50">
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
                <div className="flex items-center justify-between pt-6 mt-6 border-t-2 border-black">
                  <div className="flex items-center gap-3">
                    {member.links.website && (
                      <a
                        href={member.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border-2 border-black text-gray-600 hover:text-black hover:bg-[#FFE500] transition-all duration-100"
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
                        className="p-2 border-2 border-black text-gray-600 hover:text-black hover:bg-[#FFE500] transition-all duration-100"
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
                        className="p-2 border-2 border-black text-gray-600 hover:text-black hover:bg-[#FFE500] transition-all duration-100"
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
      <section className="py-20 relative z-10 border-t-2 border-b-2 border-black bg-[#FAFAF8]">
        <Container className="max-w-5xl">
          <div className="text-center space-y-4 mb-16">
            <span className="inline-block text-[9px] font-mono text-[#FFE500] font-bold uppercase tracking-widest px-3.5 py-1.5 bg-black border-2 border-black shadow-[3px_3px_0_#DC2626]">
              HOW WE COMPILE SYSTEMS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
              Our Core Operational Values
            </h2>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-wider max-w-xl mx-auto">
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
                className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-100 p-5 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-8 h-8 bg-[#FFE500] border-2 border-black flex items-center justify-center text-black font-mono text-xs font-black">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-black uppercase tracking-tight">{val.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed mt-2 font-mono">
                      {val.desc}
                    </p>
                  </div>
                </div>

                <div className="bg-black p-2.5 border-2 border-black mt-6 select-text">
                  <code className="text-[9px] font-mono text-[#FFE500] font-semibold block break-all">
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
          <div className="border-2 border-black bg-black text-white p-8 sm:p-12 relative overflow-hidden shadow-[8px_8px_0_#0A0A0A]">

            <div className="relative z-10 space-y-6">
              <span className="inline-block text-[9px] font-mono text-black font-bold uppercase tracking-widest px-3.5 py-1.5 bg-[#FFE500] border-2 border-black shadow-[3px_3px_0_#0A0A0A]">
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
                  className="bg-[#FFE500] text-black border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 text-xs font-mono uppercase tracking-widest px-8 py-4 flex items-center justify-center gap-2 font-black transition-all duration-100"
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
