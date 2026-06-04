'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { whoShouldContact } from '@/data/contact-page';
import { Check, X, ShieldAlert, CheckCircle } from 'lucide-react';

export default function WhoShouldContact() {
  return (
    <section className="py-24 bg-[#FAFAF8] text-black border-b-2 border-black select-none">
      <Container className="max-w-5xl mx-auto space-y-12">

        {/* Title Block */}
        <div className="text-center space-y-2">
          <span className="inline-block px-2 py-0.5 bg-[#FFE500] text-black font-mono text-[8px] font-bold border-2 border-black shadow-[3px_3px_0_#0A0A0A] uppercase tracking-widest">
            [ FEASIBILITY CHECK // PARTNER MATRIX ]
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
            Structural Alignment Diagnostics
          </h2>
          <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">
            Before executing ingestion, verify system compatibility index.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* GOOD FIT / SYSTEM COMPATIBILITY [PASS] */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 p-8"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b-2 border-black pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#FFE500] text-black flex items-center justify-center border-2 border-black shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-black uppercase tracking-tight">
                      System Compatibility
                    </h3>
                    <p className="text-[7.5px] font-mono text-black uppercase tracking-wider font-bold">
                      VERDICT: OPTIMAL_FIT [ PASS ]
                    </p>
                  </div>
                </div>
                <span className="w-2 h-2 bg-black animate-pulse" />
              </div>

              <ul className="space-y-4">
                {whoShouldContact.goodFit.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-4 h-4 text-black mt-0.5 shrink-0" />
                    <span className="text-xs text-gray-700 leading-relaxed font-sans font-light">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* NOT A FIT / SYSTEM DISRUPTION [FAIL] */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 p-8"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b-2 border-black pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-black text-white flex items-center justify-center border-2 border-black shrink-0">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-black uppercase tracking-tight">
                      System Disruption
                    </h3>
                    <p className="text-[7.5px] font-mono text-red-600 uppercase tracking-wider font-bold">
                      VERDICT: COGNITIVE_MISMATCH [ FAIL ]
                    </p>
                  </div>
                </div>
                <span className="w-2 h-2 bg-red-600 animate-pulse" />
              </div>

              <ul className="space-y-4">
                {whoShouldContact.notFit.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <X className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                    <span className="text-xs text-gray-500 leading-relaxed font-sans font-light">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
