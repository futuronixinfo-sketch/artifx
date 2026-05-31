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
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 py-4 pointer-events-none"
        >
            <div 
                className={`mx-auto w-[92%] max-w-5xl px-6 py-2.5 rounded-full border transition-all duration-500 flex items-center justify-between pointer-events-auto shadow-[0_15px_40px_rgba(0,0,0,0.7)] ${
                    isScrolled 
                        ? 'bg-black/60 backdrop-blur-xl border-white/10 scale-[0.97]' 
                        : 'bg-black/35 backdrop-blur-md border-white/5'
                }`}
            >
                {/* Logo */}
                <Link href="/" className="group flex items-center">
                    <Logo className="group-hover:scale-102 transition-transform duration-300" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1 relative">
                    {navigation.map((item, idx) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="text-xs font-semibold text-neutral-400 hover:text-white px-4 py-2 rounded-full transition-colors relative"
                        >
                            {/* Animated hover background pill */}
                            {hoveredIndex === idx && (
                                <motion.span
                                    layoutId="navbar-hover-pill"
                                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                                />
                            )}
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button 
                        variant="primary" 
                        size="sm" 
                        href="/contact" 
                        className="rounded-full bg-white text-black hover:bg-neutral-200 border-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)] text-xs font-bold px-5 py-2 transition-all duration-300"
                    >
                        Book Strategy Call
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Full Screen Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 420, damping: 38 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-3xl md:hidden flex flex-col justify-between p-8 pointer-events-auto shadow-2xl"
                    >
                        {/* Top Bar inside Menu */}
                        <div className="flex items-center justify-between">
                            <Logo showText={true} />
                            <button
                                className="text-white p-3 hover:bg-white/5 rounded-full transition-colors border border-white/10"
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Navigation List */}
                        <div className="flex flex-col gap-6 my-auto text-left pl-4">
                            {navigation.map((item, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.05 }}
                                    key={item.name}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-4xl font-extrabold text-neutral-300 hover:text-white transition-colors relative block py-2 group"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="text-xs font-mono text-indigo-500 mr-4">0{idx + 1}</span>
                                        {item.name}
                                        <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom CTA Block */}
                        <div className="space-y-6">
                            <Button 
                                variant="primary" 
                                className="w-full justify-center rounded-full py-4 text-base font-bold bg-white text-black hover:bg-neutral-200 border-transparent shadow-[0_0_20px_rgba(255,255,255,0.15)]" 
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Book Strategy Call
                            </Button>
                            <div className="text-center font-mono text-xs text-neutral-600">
                                artifx_menu_active: v1.0
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
