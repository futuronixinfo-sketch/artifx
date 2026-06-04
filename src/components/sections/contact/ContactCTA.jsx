'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Container from '@/components/ui/Container';

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
      className="py-32 bg-[#FAFAF8] border-t-2 border-black text-black text-center relative overflow-hidden select-none"
    >
      <Container className="relative z-10 max-w-2xl space-y-6">

        {/* Badge */}
        <div>
          <span className="inline-block px-2 py-0.5 bg-black text-[#FFE500] font-mono text-[8px] font-bold border-2 border-black uppercase tracking-widest">
            [ STAGE_04 // SYSTEM_DIAGNOSTICS ]
          </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-black leading-none">
          Not Sure Where To <br />
          <span className="text-red-600 underline decoration-4 underline-offset-4">
            Start?
          </span>
        </h2>

        <p className="text-xs text-gray-500 font-mono max-w-md mx-auto leading-relaxed">
          /* That&apos;s completely fine. Most premium digital automated infrastructures begin with a simple system discovery call. No sales pitch, just pure architecture diagnostics. */
        </p>

        <div className="pt-4">
          <button
            onClick={scrollToForm}
            className="px-8 py-3 bg-[#FFE500] text-black border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 font-black uppercase tracking-widest font-mono transition-all duration-100 text-xs"
          >
            Start a Conversation
          </button>
        </div>

        <p className="text-[7.5px] text-gray-400 font-mono uppercase tracking-widest">
          [ NO SALES PRESSURE // TECHNICAL ARCHITECTURE AUDIT ONLY ]
        </p>
      </Container>
    </motion.section>
  );
}
