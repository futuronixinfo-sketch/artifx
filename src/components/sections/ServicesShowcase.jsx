'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Globe, Database, Rocket, Terminal, Check } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { servicesData } from '@/data/home';

export default function ServicesShowcase() {
  return (
    <section className="relative py-32 bg-white overflow-hidden select-none border-b border-gray-100">
      {/* Decorative top grid guide */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-gray-200 to-transparent" />

      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-red-600 uppercase tracking-widest block font-bold"
          >
            [ CORE CAPABILITIES ]
          </motion.span>
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
            className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed font-light"
          >
            We don&apos;t build isolated features. We engineer custom-coded operational backbones designed for scale, speed, and continuous automation.
          </motion.p>
        </div>

        {/* HIGH-TECH BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px] md:auto-rows-[300px]">
          
          {/* Box 1: AI Automation (Wide 8-col card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-12 lg:col-span-8 border border-gray-200 bg-white p-7 md:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group hover:border-black transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-black/5"
          >
            <div className="absolute top-0 right-0 w-52 h-52 bg-red-50/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Split layout inside Bento Box */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center h-full">
              {/* Text side */}
              <div className="md:col-span-7 space-y-4 flex flex-col justify-center h-full">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md uppercase tracking-wider">SYSTEM: AI_INTEGRATION</span>
                </div>
                
                <h3 className="text-xl font-bold uppercase text-black tracking-tight">{servicesData.services[0].title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-light">{servicesData.services[0].description}</p>
                
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {servicesData.services[0].tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-gray-50 border border-gray-200 text-[9px] text-gray-400 font-mono uppercase tracking-wider rounded-md group-hover:text-red-600 group-hover:bg-red-50/20 group-hover:border-red-100 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Animated SVG Visualizer side */}
              <div className="md:col-span-5 hidden md:flex justify-center items-center h-full">
                <div className="w-full max-w-[200px] aspect-square border border-gray-100 bg-white p-3 rounded-2xl relative shadow-md">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-black">
                    <circle cx="100" cy="100" r="60" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                    <line x1="40" y1="40" x2="100" y2="100" stroke="#e5e7eb" strokeWidth="1.5" />
                    <motion.circle cx="40" cy="40" r="100" fill="none"
                      animate={{ cx: [40, 100], cy: [40, 100] }}
                      transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                    />
                    <path d="M 40 40 L 100 100 M 160 40 L 100 100 M 40 160 L 100 100 M 160 160 L 100 100" stroke="#e5e7eb" strokeWidth="1.5" />
                    
                    <motion.circle cx="40" cy="40" r="4" fill="#dc2626" animate={{ cx: [40, 100], cy: [40, 100] }} transition={{ repeat: Infinity, duration: 2 }} />
                    <motion.circle cx="160" cy="40" r="4" fill="#dc2626" animate={{ cx: [160, 100], cy: [40, 100] }} transition={{ repeat: Infinity, duration: 2.5 }} />
                    <motion.circle cx="40" cy="160" r="4" fill="#dc2626" animate={{ cx: [40, 100], cy: [160, 100] }} transition={{ repeat: Infinity, duration: 2.8 }} />
                    
                    <circle cx="100" cy="100" r="15" fill="#111111" />
                    <motion.circle cx="100" cy="100" r="7" fill="#dc2626" animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
                    
                    {/* Satellites */}
                    <circle cx="40" cy="40" r="6" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1.5" />
                    <circle cx="160" cy="40" r="6" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1.5" />
                    <circle cx="40" cy="160" r="6" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1.5" />
                    <circle cx="160" cy="160" r="6" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Box 2: Web Platforms (Tall 4-col card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-6 lg:col-span-4 border border-gray-200 bg-white p-7 md:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group hover:border-black transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-black/5"
          >
            {/* Custom browser mini mockup */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md uppercase tracking-wider">ENGINE: UX_CORE</span>
                </div>
              </div>

              <h3 className="text-xl font-bold uppercase text-black tracking-tight">{servicesData.services[1].title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">{servicesData.services[1].description}</p>
            </div>

            {/* Miniature Browser Frame Visual */}
            <div className="border border-gray-200 bg-gray-50 p-2.5 rounded-xl space-y-1.5 relative overflow-hidden group-hover:border-neutral-300 transition-colors">
              <div className="flex justify-between items-center text-[8px] font-mono text-gray-400 pb-1.5 border-b border-gray-200">
                <span className="flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                </span>
                <span>HTTPS://ARTIFX.IO</span>
              </div>
              <div className="flex justify-between items-center pt-1 font-mono text-[9px]">
                <span className="text-black font-bold">LCP RATING</span>
                <span className="text-green-600 font-extrabold flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-green-500 animate-ping" />
                  0.2s SPEED
                </span>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Business Dashboards (Tall 4-col card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-6 lg:col-span-4 border border-gray-200 bg-white p-7 md:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group hover:border-black transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-black/5"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center">
                    <Database className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md uppercase tracking-wider">PORTAL: KPI_CONSOLE</span>
                </div>
              </div>

              <h3 className="text-xl font-bold uppercase text-black tracking-tight">{servicesData.services[2].title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">{servicesData.services[2].description}</p>
            </div>

            {/* Miniature Dashboard HUD Graph */}
            <div className="border border-gray-200 bg-gray-50 p-3 rounded-xl flex flex-col justify-between gap-2 h-16 group-hover:border-neutral-300 transition-colors">
              <div className="flex justify-between items-center text-[7px] font-mono text-gray-400">
                <span>OPERATIONAL VELOCITY</span>
                <span>STATUS: STABLE</span>
              </div>
              <div className="flex items-end gap-1.5 h-6">
                <motion.div animate={{ height: [8, 16, 12, 16] }} transition={{ repeat: Infinity, duration: 2.2 }} className="w-2.5 bg-red-600" />
                <motion.div animate={{ height: [12, 6, 16, 10] }} transition={{ repeat: Infinity, duration: 1.8 }} className="w-2.5 bg-black" />
                <motion.div animate={{ height: [16, 10, 8, 16] }} transition={{ repeat: Infinity, duration: 2.5 }} className="w-2.5 bg-red-600" />
                <motion.div animate={{ height: [6, 16, 14, 12] }} transition={{ repeat: Infinity, duration: 2.0 }} className="w-2.5 bg-black" />
                <motion.div animate={{ height: [14, 8, 16, 14] }} transition={{ repeat: Infinity, duration: 3.2 }} className="w-2.5 bg-red-600" />
                <span className="ml-auto text-[10px] font-mono font-bold text-black">+99.4%</span>
              </div>
            </div>
          </motion.div>

          {/* Box 4: SaaS Products (Wide 8-col card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-12 lg:col-span-8 border border-gray-200 bg-white p-7 md:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group hover:border-black transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-black/5"
          >
            <div className="absolute top-0 right-0 w-52 h-52 bg-red-50/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center h-full">
              {/* Text side */}
              <div className="md:col-span-7 space-y-4 flex flex-col justify-center h-full">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md uppercase tracking-wider">STACK: SAAS_CLOUD</span>
                </div>
                
                <h3 className="text-xl font-bold uppercase text-black tracking-tight">{servicesData.services[3].title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-light">{servicesData.services[3].description}</p>
                
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {servicesData.services[3].tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-gray-50 border border-gray-200 text-[9px] text-gray-400 font-mono uppercase tracking-wider rounded-md group-hover:text-red-600 group-hover:bg-red-50/20 group-hover:border-red-100 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Animated Storage Disk stacks side */}
              <div className="md:col-span-5 hidden md:flex justify-center items-center h-full">
                <div className="w-full max-w-[200px] aspect-square border border-gray-100 bg-white p-3 rounded-2xl relative shadow-md flex justify-center items-center">
                  <svg viewBox="0 0 200 200" className="w-full h-full text-black">
                    {/* Pulsing visual guide wave circles */}
                    <motion.circle cx="100" cy="100" r="50" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="3 3" fill="none" animate={{ r: [50, 60, 50] }} transition={{ repeat: Infinity, duration: 3 }} />
                    
                    {/* Cylinder Disks Stack */}
                    <ellipse cx="100" cy="140" rx="35" ry="14" fill="#111111" stroke="#dc2626" strokeWidth="1.5" />
                    <ellipse cx="100" cy="134" rx="35" ry="14" fill="#222222" stroke="#dc2626" strokeWidth="1.5" />

                    <ellipse cx="100" cy="105" rx="35" ry="14" fill="#111111" stroke="#dc2626" strokeWidth="1.5" />
                    <ellipse cx="100" cy="99" rx="35" ry="14" fill="#222222" stroke="#dc2626" strokeWidth="1.5" />

                    <ellipse cx="100" cy="70" rx="35" ry="14" fill="#111111" stroke="#dc2626" strokeWidth="1.5" />
                    <ellipse cx="100" cy="64" rx="35" ry="14" fill="#222222" stroke="#dc2626" strokeWidth="1.5" />

                    {/* Glowing active metrics bars */}
                    <motion.rect x="85" y="52" width="3.5" height="9" rx="0.5" fill="#dc2626" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.2 }} />
                    <motion.rect x="100" y="55" width="3.5" height="6" rx="0.5" fill="#dc2626" animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
                    <motion.rect x="115" y="52" width="3.5" height="9" rx="0.5" fill="#dc2626" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.8 }} />

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
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-600 hover:text-black transition-colors group"
          >
            Inspect All Capabilities &rarr;
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
