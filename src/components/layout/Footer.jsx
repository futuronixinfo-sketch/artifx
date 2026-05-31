import Link from 'next/link';
import { motion } from 'framer-motion';
import { navigation, legal } from '@/data/navigation';

export default function Footer() {
    return (
        <footer className="bg-neutral-950 border-t border-neutral-800 py-16 px-6 lg:px-8 mt-auto w-full">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-2 group mb-6">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-lg group-hover:scale-110 transition-transform">
                                A
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white group-hover:text-neutral-300 transition-colors">
                                Artifx
                            </span>
                        </Link>
                        <p className="text-neutral-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            Building intelligent digital systems that help businesses scale faster using AI and modern technology.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="col-span-1">
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Company</h3>
                        <ul className="space-y-4">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-neutral-400 hover:text-white transition-colors text-sm">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="col-span-1">
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Legal</h3>
                        <ul className="space-y-4">
                            {legal.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-neutral-400 hover:text-white transition-colors text-sm">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter / CTA */}
                    <div className="col-span-1">
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Stay Updated</h3>
                        <p className="text-neutral-400 text-sm mb-4">
                            Join our newsletter for the latest in AI and automation.
                        </p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-neutral-900 border border-neutral-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-neutral-600 transition-colors placeholder:text-neutral-600 text-sm"
                            />
                            <button
                                type="submit"
                                className="bg-white text-black font-medium py-2 rounded-lg hover:bg-neutral-200 transition-colors text-sm"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
                    <p>© {new Date().getFullYear()} Artifx Agency. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        {/* Social Icons Placeholder */}
                        <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
                        <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
