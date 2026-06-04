'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/data/navigation';
import Logo from '@/components/ui/Logo';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8] border-b-2 border-black">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-red-600 border-2 border-black flex items-center justify-center text-white font-black text-lg shadow-[2px_2px_0_#0A0A0A] group-hover:shadow-none group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-100">
            A
          </div>
          <span className="text-lg font-black uppercase tracking-tight text-black">ARTIFX</span>
        </Link>

        <nav className="hidden md:flex items-center gap-0">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[10px] font-mono font-bold uppercase tracking-widest text-black px-4 py-2 border-l-2 border-transparent hover:border-black hover:bg-black hover:text-[#FFE500] transition-all duration-100"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#FFE500] text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A] hover:shadow-[1px_1px_0_#0A0A0A] hover:translate-x-[2px] hover:translate-y-[2px] text-[10px] font-mono font-black uppercase tracking-widest transition-all duration-100"
          >
            Get Audit &rarr;
          </Link>
        </div>

        <button
          className="md:hidden text-black p-2 border-2 border-black hover:bg-black hover:text-white transition-all duration-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-[#FAFAF8] border-l-2 border-black md:hidden flex flex-col p-8"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="text-xl font-black uppercase tracking-tight">ARTIFX</span>
              <button
                className="p-2 border-2 border-black hover:bg-black hover:text-white transition-all duration-100"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col gap-0 flex-1">
              {navigation.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.name}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-4 py-5 border-b-2 border-black hover:bg-black hover:text-white hover:px-4 transition-all duration-100 group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-[10px] font-mono text-red-600 font-bold group-hover:text-[#FFE500]">0{idx + 1}</span>
                    <span className="text-3xl font-black uppercase tracking-tight">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-8 w-full flex items-center justify-center py-4 bg-[#FFE500] text-black border-2 border-black shadow-[4px_4px_0_#0A0A0A] text-sm font-black uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started &rarr;
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
