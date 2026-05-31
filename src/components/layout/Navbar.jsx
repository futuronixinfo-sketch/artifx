'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/data/navigation';
import Button from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className={`mx-auto w-[92%] max-w-4xl mt-4 px-6 py-2 rounded-full border transition-all duration-700 flex items-center justify-between pointer-events-auto ${
        isScrolled
          ? 'bg-white/75 backdrop-blur-2xl border-neutral-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.015)] shadow-red-500/[0.02]'
          : 'bg-white/30 backdrop-blur-md border-neutral-100/20'
      }`}>
        <Link href="/" className="group flex items-center">
          <Logo className="group-hover:scale-[1.02] transition-transform duration-300" />
        </Link>

        <nav className="hidden md:flex items-center gap-1.5 relative">
          {navigation.map((item, idx) => (
            <Link
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="text-[10px] font-mono uppercase tracking-wider text-gray-400 hover:text-black px-3.5 py-1.5 transition-colors relative"
            >
              {item.name}
              {hoveredIndex === idx && (
                <motion.span
                  layoutId="navbar-hover-dot"
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            variant="custom"
            size="sm"
            href="/contact"
            className="rounded-full bg-black text-white hover:bg-neutral-900 border-0 shadow-md shadow-black/5 text-[9px] font-mono uppercase tracking-widest px-5 py-2 transition-all duration-300"
          >
            Get Audit &rarr;
          </Button>
        </div>

        <button
          className="md:hidden text-black p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 420, damping: 38 }}
            className="fixed inset-0 z-[100] bg-white backdrop-blur-3xl md:hidden flex flex-col justify-between p-8 pointer-events-auto"
          >
            <div className="flex items-center justify-between">
              <Logo showText={true} />
              <button
                className="text-black p-3 hover:bg-gray-100 rounded-xl transition-colors border border-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-6 my-auto pl-4">
              {navigation.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  key={item.name}
                >
                  <Link
                    href={item.href}
                    className="text-4xl font-extrabold text-gray-500 hover:text-black transition-colors relative block py-2 group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-xs font-mono text-red-500 mr-4">0{idx + 1}</span>
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <Button
                variant="custom"
                className="w-full justify-center rounded-xl py-4 text-base font-bold bg-red-600 text-white hover:bg-red-500 border-0 shadow-lg shadow-red-500/20"
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
