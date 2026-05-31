'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { whoShouldContact } from '@/data/contact-page';
import { Check, X, ShieldAlert, CheckCircle } from 'lucide-react';

export default function WhoShouldContact() {
  return (
    <section className="py-24 bg-white text-black border-b border-gray-100 select-none">
      <Container className="max-w-5xl mx-auto space-y-12">
        
        {/* Title Block */}
        <div className="text-center space-y-2">
          <span className="px-2 py-0.5 rounded bg-red-50 text-red-600 font-mono text-[8px] font-bold border border-red-100 uppercase tracking-widest">
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
            className="border border-emerald-200/60 bg-gradient-to-br from-white via-white to-emerald-50/20 p-8 rounded-3xl relative overflow-hidden shadow-sm shadow-emerald-500/5 group"
          >
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b981_1px,transparent_1px),linear-gradient(to_bottom,#10b981_1px,transparent_1px)] bg-[size:16px_16px] opacity-[0.03] pointer-events-none z-0" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-center border-b border-emerald-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-black uppercase tracking-tight">
                      System Compatibility
                    </h3>
                    <p className="text-[7.5px] font-mono text-emerald-600 uppercase tracking-wider font-bold">
                      VERDICT: OPTIMAL_FIT [ PASS ]
                    </p>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
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
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
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
            className="border border-red-200/50 bg-gradient-to-br from-white via-white to-red-50/10 p-8 rounded-3xl relative overflow-hidden shadow-sm shadow-red-500/5 opacity-80 hover:opacity-100 transition-opacity duration-300 group"
          >
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:16px_16px] opacity-[0.02] pointer-events-none z-0" />

            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-center border-b border-red-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center border border-red-200 shrink-0">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-black uppercase tracking-tight">
                      System Disruption
                    </h3>
                    <p className="text-[7.5px] font-mono text-red-500 uppercase tracking-wider font-bold">
                      VERDICT: COGNITIVE_MISMATCH [ FAIL ]
                    </p>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
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
                    <X className="w-4 h-4 text-red-500/60 mt-0.5 shrink-0" />
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

