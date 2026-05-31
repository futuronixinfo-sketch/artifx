'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { whatNext } from '@/data/contact-page';

export default function WhatNext() {
  return (
    <section className="py-24 bg-white text-black border-b border-gray-100 select-none relative overflow-hidden">
      {/* Background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />

      <Container className="max-w-3xl mx-auto space-y-12">
        
        {/* Title Block */}
        <div className="text-center space-y-2">
          <span className="px-2 py-0.5 rounded bg-red-50 text-red-600 font-mono text-[8px] font-bold border border-red-100 uppercase tracking-widest">
            [ PIPELINE // INTEGRATION_FLOW ]
          </span>
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
            Operational Processing Pipeline
          </h3>
          <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">
            Step-by-step telemetry routing and scheduling roadmap.
          </p>
        </div>

        {/* Vertical Pipeline Trail */}
        <div className="relative border-l border-dashed border-gray-300 ml-6 md:ml-12 space-y-8 pl-6 md:pl-10 py-2">
          {whatNext.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Pulsing indicator node on the dashed line */}
              <span className="absolute -left-[31px] md:-left-[47px] top-4 w-3.5 h-3.5 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:border-black transition-colors duration-300 z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              </span>

              {/* Step Module Card */}
              <div className="border border-gray-200 bg-gradient-to-br from-white via-white to-gray-50/50 rounded-2xl p-5 hover:border-black hover:shadow-lg hover:shadow-black/5 transition-all duration-300 relative shadow-sm">
                
                {/* Tech watermark */}
                <div className="absolute right-4 top-4 font-mono text-[10px] text-gray-300 uppercase tracking-widest font-bold">
                  [ STEP_{item.step} ]
                </div>

                <div className="space-y-1">
                  <span className="text-[8px] font-mono text-red-600 font-bold uppercase tracking-widest leading-none block">
                    STAGE_PREREQ // ACTIVE
                  </span>
                  
                  <h4 className="text-xs font-black text-black uppercase tracking-tight">
                    {item.title}
                  </h4>
                  
                  <p className="text-xs text-gray-500 font-sans font-light leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}

