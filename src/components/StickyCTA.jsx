'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

/**
 * Persistent "Book a Call" CTA.
 * Bottom-left so it never collides with the bottom-right EstimateWidget.
 * Fades in after the user scrolls past the hero.
 */
export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 650);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <Link
      href="/contact"
      className="fixed bottom-6 left-6 z-[390] flex items-center gap-2.5 px-5 py-3.5 bg-[#DC2626] text-white font-mono font-black text-[10px] uppercase tracking-widest border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-100"
    >
      <Phone className="w-4 h-4 text-[#FFE500]" />
      Book a Call
    </Link>
  );
}
