'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Artifx delivered a full real estate platform in 6 weeks — property listings, lead CRM, and payment gateway — all pixel-perfect. The team communicates daily and every deadline was met. Wouldn't trust anyone else.",
    name: "Rahul Sharma",
    role: "Founder",
    company: "Mqamy Real Estate",
    category: "Real Estate Platform",
    location: "Dubai, UAE",
    result: "3× faster lead conversion",
  },
  {
    quote: "We needed a complex restaurant ordering system with live kitchen tracking and rider dispatch. Artifx built it in 8 weeks, and our order fulfilment went from 28 minutes to 14. Genuinely impressive execution.",
    name: "Aisha Al-Farsi",
    role: "Operations Head",
    company: "CloudKitchen DXB",
    category: "Food Tech Platform",
    location: "Abu Dhabi, UAE",
    result: "50% faster order fulfilment",
  },
  {
    quote: "The admin panel alone was worth every dirham. Full inventory management, analytics dashboard, and staff roles — all built cleanly and delivered with zero bugs. The after-support is outstanding.",
    name: "Priya Nair",
    role: "CEO",
    company: "Legacy Wear",
    category: "E-Commerce + Admin",
    location: "Mumbai, India",
    result: "Launched in 5 weeks",
  },
  {
    quote: "Our AI-powered talent matching platform is live and converting. Artifx integrated the LLM layer and built the full dashboard in one sprint. No other agency understood the brief as fast as they did.",
    name: "James Okonkwo",
    role: "Co-Founder",
    company: "Impact Talent Centre",
    category: "AI SaaS Platform",
    location: "Lagos, Nigeria",
    result: "2× placement efficiency",
  },
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '96%', label: 'Client Retention' },
  { value: '4.9★', label: 'Avg. Rating' },
  { value: '0', label: 'Missed Deadlines' },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
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

          {/* Stats row */}
          <div className="flex gap-0 border-2 border-white/20 shrink-0">
            {stats.map((s, i) => (
              <div key={i} className={`text-center px-5 py-4 ${i < stats.length - 1 ? 'border-r-2 border-white/20' : ''}`}>
                <div className="text-2xl font-black text-[#FFE500]">{s.value}</div>
                <div className="text-[8px] font-mono text-gray-500 uppercase tracking-widest mt-0.5 whitespace-nowrap">{s.label}</div>
              </div>
            ))}
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
