'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Globe, Database, Rocket, Terminal } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { servicesData } from '@/data/home';

export default function ServicesShowcase() {
  return (
    <section className="relative py-24 bg-[#FAFAF8] overflow-hidden select-none border-t-2 border-black">

      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626]"
          >
            <span className="text-[10px] font-mono font-black uppercase tracking-widest">[ CORE CAPABILITIES ]</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black leading-[0.95] uppercase"
          >
            What We Build
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs text-gray-600 max-w-md leading-relaxed font-mono"
          >
            We don&apos;t build isolated features. We engineer custom-coded operational backbones designed for scale, speed, and continuous automation.
          </motion.p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-2 border-black">

          {/* Box 1: AI Automation (Wide 8-col card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-8 border-b-2 border-black lg:border-b-0 lg:border-r-2 bg-white p-7 md:p-8 relative overflow-hidden flex flex-col justify-between group hover:bg-[#FFE500] transition-colors duration-150"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center h-full">
              <div className="md:col-span-7 space-y-4 flex flex-col justify-center h-full">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-red-600 border-2 border-black flex items-center justify-center text-white">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono font-black text-black bg-[#FAFAF8] border-2 border-black px-2 py-0.5 uppercase tracking-wider">SYSTEM: AI_INTEGRATION</span>
                </div>

                <h3 className="text-xl font-black uppercase text-black tracking-tight">{servicesData.services[0].title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-mono">{servicesData.services[0].description}</p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {servicesData.services[0].tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-[#FAFAF8] border-2 border-black text-[9px] text-black font-mono font-bold uppercase tracking-wider group-hover:bg-black group-hover:text-[#FFE500] transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* SVG Visualizer */}
              <div className="md:col-span-5 hidden md:flex justify-center items-center h-full">
                <div className="w-full max-w-[200px] aspect-square border-2 border-black bg-[#FAFAF8] p-3 relative shadow-[4px_4px_0_#0A0A0A]">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-black">
                    <circle cx="100" cy="100" r="60" stroke="#0A0A0A" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                    <path d="M 40 40 L 100 100 M 160 40 L 100 100 M 40 160 L 100 100 M 160 160 L 100 100" stroke="#e5e7eb" strokeWidth="1.5" />
                    <motion.circle cx="40" cy="40" r="4" fill="#dc2626" animate={{ cx: [40, 100], cy: [40, 100] }} transition={{ repeat: Infinity, duration: 2 }} />
                    <motion.circle cx="160" cy="40" r="4" fill="#dc2626" animate={{ cx: [160, 100], cy: [40, 100] }} transition={{ repeat: Infinity, duration: 2.5 }} />
                    <motion.circle cx="40" cy="160" r="4" fill="#dc2626" animate={{ cx: [40, 100], cy: [160, 100] }} transition={{ repeat: Infinity, duration: 2.8 }} />
                    <rect x="84" y="84" width="32" height="32" fill="#0A0A0A" />
                    <motion.circle cx="100" cy="100" r="7" fill="#dc2626" animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
                    <rect x="28" y="28" width="12" height="12" fill="#ffffff" stroke="#0A0A0A" strokeWidth="1.5" />
                    <rect x="148" y="28" width="12" height="12" fill="#ffffff" stroke="#0A0A0A" strokeWidth="1.5" />
                    <rect x="28" y="148" width="12" height="12" fill="#ffffff" stroke="#0A0A0A" strokeWidth="1.5" />
                    <rect x="148" y="148" width="12" height="12" fill="#ffffff" stroke="#0A0A0A" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Box 2: Web Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-6 lg:col-span-4 border-b-2 border-black bg-white p-7 md:p-8 relative overflow-hidden flex flex-col justify-between group hover:bg-[#FFE500] transition-colors duration-150"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-black border-2 border-black flex items-center justify-center text-white">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-mono font-black text-black bg-[#FAFAF8] border-2 border-black px-2 py-0.5 uppercase tracking-wider">ENGINE: UX_CORE</span>
              </div>
              <h3 className="text-xl font-black uppercase text-black tracking-tight">{servicesData.services[1].title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-mono">{servicesData.services[1].description}</p>
            </div>

            {/* Browser Frame Visual */}
            <div className="border-2 border-black bg-[#FAFAF8] p-2.5 mt-4">
              <div className="flex justify-between items-center text-[8px] font-mono text-gray-600 pb-1.5 border-b-2 border-black mb-2">
                <span className="flex gap-1 items-center">
                  <span className="w-2 h-2 bg-red-500 border border-black" />
                  <span className="w-2 h-2 bg-yellow-400 border border-black" />
                  <span className="w-2 h-2 bg-green-400 border border-black" />
                </span>
                <span className="font-black">HTTPS://ARTIFX.IO</span>
              </div>
              <div className="flex justify-between items-center font-mono text-[9px]">
                <span className="text-black font-black">LCP RATING</span>
                <span className="text-green-600 font-black flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 animate-ping" />
                  0.2s SPEED
                </span>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Business Dashboards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-6 lg:col-span-4 border-b-2 border-black border-l-2 bg-white p-7 md:p-8 relative overflow-hidden flex flex-col justify-between group hover:bg-[#FFE500] transition-colors duration-150"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-red-600 border-2 border-black flex items-center justify-center text-white">
                  <Database className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-mono font-black text-black bg-[#FAFAF8] border-2 border-black px-2 py-0.5 uppercase tracking-wider">PORTAL: KPI_CONSOLE</span>
              </div>
              <h3 className="text-xl font-black uppercase text-black tracking-tight">{servicesData.services[2].title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-mono">{servicesData.services[2].description}</p>
            </div>

            {/* Dashboard HUD */}
            <div className="border-2 border-black bg-[#FAFAF8] p-3 mt-4 flex flex-col justify-between gap-2 h-16">
              <div className="flex justify-between items-center text-[7px] font-mono text-gray-600 font-bold">
                <span>OPERATIONAL VELOCITY</span>
                <span>STATUS: STABLE</span>
              </div>
              <div className="flex items-end gap-1.5 h-6">
                <motion.div animate={{ height: [8, 16, 12, 16] }} transition={{ repeat: Infinity, duration: 2.2 }} className="w-2.5 bg-red-600 border border-black" />
                <motion.div animate={{ height: [12, 6, 16, 10] }} transition={{ repeat: Infinity, duration: 1.8 }} className="w-2.5 bg-black" />
                <motion.div animate={{ height: [16, 10, 8, 16] }} transition={{ repeat: Infinity, duration: 2.5 }} className="w-2.5 bg-red-600 border border-black" />
                <motion.div animate={{ height: [6, 16, 14, 12] }} transition={{ repeat: Infinity, duration: 2.0 }} className="w-2.5 bg-black" />
                <motion.div animate={{ height: [14, 8, 16, 14] }} transition={{ repeat: Infinity, duration: 3.2 }} className="w-2.5 bg-red-600 border border-black" />
                <span className="ml-auto text-[10px] font-mono font-black text-black">+99.4%</span>
              </div>
            </div>
          </motion.div>

          {/* Box 4: SaaS Products (Wide 8-col) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-12 lg:col-span-8 border-t-2 border-black border-r-2 bg-[#0A0A0A] text-white p-7 md:p-8 relative overflow-hidden flex flex-col justify-between group hover:bg-red-600 transition-colors duration-150"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center h-full">
              <div className="md:col-span-7 space-y-4 flex flex-col justify-center h-full">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-[#FFE500] border-2 border-[#FFE500] flex items-center justify-center text-black">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono font-black text-black bg-[#FFE500] border-2 border-[#FFE500] px-2 py-0.5 uppercase tracking-wider">STACK: SAAS_CLOUD</span>
                </div>
                <h3 className="text-xl font-black uppercase text-white tracking-tight">{servicesData.services[3].title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-mono">{servicesData.services[3].description}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {servicesData.services[3].tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-neutral-900 border-2 border-neutral-700 text-[9px] text-gray-300 font-mono font-bold uppercase tracking-wider group-hover:bg-[#FFE500] group-hover:text-black group-hover:border-[#FFE500] transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Storage SVG */}
              <div className="md:col-span-5 hidden md:flex justify-center items-center h-full">
                <div className="w-full max-w-[200px] aspect-square border-2 border-neutral-700 bg-neutral-900 p-3 relative shadow-[4px_4px_0_#DC2626] flex justify-center items-center">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-black">
                    <motion.circle cx="100" cy="100" r="50" stroke="#444" strokeWidth="1" strokeDasharray="3 3" fill="none" animate={{ r: [50, 60, 50] }} transition={{ repeat: Infinity, duration: 3 }} />
                    <ellipse cx="100" cy="140" rx="35" ry="14" fill="#111111" stroke="#dc2626" strokeWidth="2" />
                    <ellipse cx="100" cy="134" rx="35" ry="14" fill="#222222" stroke="#dc2626" strokeWidth="2" />
                    <ellipse cx="100" cy="105" rx="35" ry="14" fill="#111111" stroke="#dc2626" strokeWidth="2" />
                    <ellipse cx="100" cy="99" rx="35" ry="14" fill="#222222" stroke="#dc2626" strokeWidth="2" />
                    <ellipse cx="100" cy="70" rx="35" ry="14" fill="#111111" stroke="#dc2626" strokeWidth="2" />
                    <ellipse cx="100" cy="64" rx="35" ry="14" fill="#222222" stroke="#dc2626" strokeWidth="2" />
                    <motion.rect x="85" y="52" width="3.5" height="9" fill="#dc2626" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2 }} />
                    <motion.rect x="100" y="55" width="3.5" height="6" fill="#dc2626" animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
                    <motion.rect x="115" y="52" width="3.5" height="9" fill="#dc2626" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.8 }} />
                    <text x="100" y="176" textAnchor="middle" className="font-mono text-[9px] font-black fill-red-600 tracking-widest">CLOUD ENGINE</text>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white border-2 border-black shadow-[4px_4px_0_#DC2626] hover:shadow-[2px_2px_0_#DC2626] hover:translate-x-[2px] hover:translate-y-[2px] text-xs font-mono font-black uppercase tracking-widest transition-all duration-100"
          >
            Inspect All Capabilities &rarr;
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
