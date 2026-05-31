'use client';
import { motion } from 'framer-motion';
import { MessageSquare, Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';
import { contactIntro } from '@/data/contact-page';

export default function ContactIntro() {
  return (
    <section className="relative pt-40 pb-20 border-b border-gray-100 min-h-[45vh] flex items-center bg-white overflow-hidden select-none">
      
      {/* Soft Background Grid Guides */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

      {/* Decorative vertical center grid guide */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-gray-200 via-gray-100 to-transparent pointer-events-none" />

      {/* Ambient Crimson Aura Backdrop */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-red-50/50 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Huge Watermarked Background Text */}
      <div className="absolute inset-0 flex items-start justify-center pt-24 z-0 pointer-events-none select-none">
        <div
          className="w-full text-center text-[18vw] font-black tracking-tighter leading-none opacity-[0.03]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          CONNECT
        </div>
      </div>

      <Container className="relative z-10 max-w-4xl text-center space-y-6">
        
        {/* Release badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-50/80 border border-red-200 rounded-xl shadow-sm"
        >
          <MessageSquare className="w-3.5 h-3.5 text-red-600 animate-pulse" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-600">
            [ SYSTEM INTEGRATION // INTAKE PORTAL ]
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
            Let&apos;s build systems <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">
              that scale.
            </span>
          </motion.h1>
        </div>

        {/* Subtitle description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs md:text-sm text-gray-500 max-w-xl mx-auto leading-relaxed font-mono"
        >
          /* {contactIntro.subtitle} */
        </motion.p>

      </Container>
    </section>
  );
}

