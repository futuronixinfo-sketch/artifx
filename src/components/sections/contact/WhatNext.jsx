'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { whatNext } from '@/data/contact-page';

export default function WhatNext() {
  return (
    <section className="py-24 bg-[#FAFAF8] text-black border-b-2 border-black select-none relative overflow-hidden">

      <Container className="max-w-3xl mx-auto space-y-12">

        {/* Title Block */}
        <div className="text-center space-y-2">
          <span className="inline-block px-2 py-0.5 bg-[#FFE500] text-black font-mono text-[8px] font-bold border-2 border-black shadow-[3px_3px_0_#0A0A0A] uppercase tracking-widest">
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
        <div className="relative border-l-2 border-black ml-6 md:ml-12 space-y-8 pl-6 md:pl-10 py-2">
          {whatNext.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Node indicator on the line */}
              <span className="absolute -left-7.75 md:-left-11.75 top-4 w-3.5 h-3.5 bg-[#FFE500] border-2 border-black flex items-center justify-center z-10">
                <span className="w-1.5 h-1.5 bg-black" />
              </span>

              {/* Step Module Card */}
              <div className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 p-5 relative">

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
