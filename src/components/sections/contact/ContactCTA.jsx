'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { Sparkles } from 'lucide-react';

export default function ContactCTA() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.8, 1], [0.98, 1]);

  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      style={{ scale }}
      className="py-32 bg-white border-t border-gray-100 text-black text-center relative overflow-hidden select-none"
    >
      {/* Background Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:32px_32px] opacity-25 pointer-events-none" />

      {/* Center glowing red radial aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-50/40 rounded-full blur-[140px] pointer-events-none z-0" />

      <Container className="relative z-10 max-w-2xl space-y-6">
        
        {/* Outline badge */}
        <div>
          <span className="px-2 py-0.5 rounded bg-red-50 text-red-600 border border-red-100 font-mono text-[8px] font-bold uppercase tracking-widest">
            [ STAGE_04 // SYSTEM_DIAGNOSTICS ]
          </span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-black leading-none">
          Not Sure Where To <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">
            Start?
          </span>
        </h2>
        
        <p className="text-xs text-gray-500 font-mono max-w-md mx-auto leading-relaxed">
          /* That&apos;s completely fine. Most premium digital automated infrastructures begin with a simple system discovery call. No sales pitch, just pure architecture diagnostics. */
        </p>

        <div className="pt-4">
          <Button
            variant="primary"
            size="md"
            onClick={scrollToForm}
            className="px-8 bg-black text-white hover:bg-red-600 transition-all font-mono text-[9px] uppercase tracking-widest font-bold"
          >
            Start a Conversation
          </Button>
        </div>
        
        <p className="text-[7.5px] text-gray-400 font-mono uppercase tracking-widest">
          [ NO SALES PRESSURE // TECHNICAL ARCHITECTURE AUDIT ONLY ]
        </p>
      </Container>
    </motion.section>
  );
}

