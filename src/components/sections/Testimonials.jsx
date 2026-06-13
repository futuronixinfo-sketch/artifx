'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [active, setActive] = useState(0);

  // No real testimonials yet → hide the section entirely (no fabricated proof).
  if (!testimonials.length) return null;

  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((i) => (i + 1) % testimonials.length);
  const t = testimonials[active];

  return (
    <section className="py-24 bg-black border-t-2 border-black overflow-hidden select-none">
      <Container>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#FFE500] border-2 border-[#FFE500] mb-4">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-black">[ Client Results ]</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
              Real Clients.<br />
              <span className="text-[#FFE500]">Real Results.</span>
            </h2>
          </div>
        </div>

        {/* Main testimonial card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-white/20 shadow-[6px_6px_0_#FFE500]">

          {/* Left: nav + all names */}
          <div className="lg:col-span-4 border-b-2 lg:border-b-0 lg:border-r-2 border-white/20 p-6 flex flex-col justify-between gap-6">
            <div className="space-y-2">
              {testimonials.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-4 py-3 border-2 transition-all duration-100 ${
                    i === active
                      ? 'border-[#FFE500] bg-[#FFE500] shadow-[3px_3px_0_#DC2626]'
                      : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'
                  }`}
                >
                  <div className={`text-[10px] font-mono uppercase tracking-widest mb-0.5 ${i === active ? 'text-gray-600' : 'text-gray-500'}`}>
                    {item.category}
                  </div>
                  <div className={`text-sm font-black uppercase ${i === active ? 'text-black' : 'text-white'}`}>
                    {item.name}
                  </div>
                  <div className={`text-[9px] font-mono ${i === active ? 'text-gray-700' : 'text-gray-500'}`}>
                    {item.company} · {item.location}
                  </div>
                </button>
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex gap-2">
              <button onClick={prev}
                className="flex-1 flex items-center justify-center gap-1 py-2.5 border-2 border-white/20 text-white hover:border-[#FFE500] hover:text-[#FFE500] transition-colors font-mono text-[9px] font-black uppercase tracking-widest">
                <ChevronLeft className="w-3.5 h-3.5" /> Prev
              </button>
              <button onClick={next}
                className="flex-1 flex items-center justify-center gap-1 py-2.5 border-2 border-white/20 text-white hover:border-[#FFE500] hover:text-[#FFE500] transition-colors font-mono text-[9px] font-black uppercase tracking-widest">
                Next <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: quote */}
          <div className="lg:col-span-8 p-8 md:p-12 flex flex-col justify-between min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-8 h-full"
              >
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-[#FFE500] opacity-60 shrink-0" />

                {/* Quote text */}
                <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t-2 border-white/10 pt-6">
                  <div>
                    <div className="text-base font-black text-white uppercase">{t.name}</div>
                    <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{t.role}, {t.company}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-[#FFE500]" />
                    <div className="px-3 py-1.5 bg-[#FFE500] border-2 border-[#FFE500]">
                      <span className="text-[9px] font-mono font-black uppercase tracking-widest text-black">{t.result}</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`h-1.5 transition-all duration-200 border border-white/20 ${i === active ? 'w-8 bg-[#FFE500]' : 'w-3 bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
