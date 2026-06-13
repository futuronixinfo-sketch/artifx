import Link from 'next/link';
import { navigation, legal } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="relative bg-[#FAFAF8] border-t-4 border-black mt-auto w-full overflow-hidden">

      {/* Top accent bar */}
      <div className="h-2 bg-[#FFE500] border-b-2 border-black" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-2 border-black">

          {/* Brand */}
          <div className="col-span-1 p-8 border-b-2 border-black md:border-b-0 md:border-r-2">
            <Link href="/" className="inline-flex items-center gap-2 group mb-6">
              <div className="w-8 h-8 bg-red-600 border-2 border-black flex items-center justify-center text-white font-black text-lg shadow-[2px_2px_0_#0A0A0A] group-hover:shadow-none group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all duration-100">
                A
              </div>
              <span className="text-xl font-black uppercase tracking-tight text-black">ARTIFX</span>
            </Link>
            <p className="text-gray-600 text-xs leading-relaxed max-w-xs font-mono">
              Building intelligent digital systems that help businesses scale faster using AI and modern technology.
            </p>
            <div className="mt-6">
              <span className="block text-[9px] font-mono font-black uppercase tracking-widest text-gray-500 mb-1.5">Get in touch</span>
              <a
                href="mailto:khanshan949@gmail.com"
                className="inline-block text-xs font-mono font-bold text-black border-2 border-black bg-white px-3 py-2 shadow-[2px_2px_0_#0A0A0A] hover:bg-[#FFE500] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100"
              >
                khanshan949@gmail.com
              </a>
            </div>
          </div>

          {/* Company nav */}
          <div className="col-span-1 p-8 border-b-2 border-black md:border-b-0 md:border-r-2">
            <h3 className="text-black font-black text-xs uppercase tracking-widest mb-6 font-mono">Company</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-black hover:underline underline-offset-2 decoration-2 transition-colors text-xs font-mono font-bold uppercase tracking-wider"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1 p-8 border-b-2 border-black md:border-b-0 md:border-r-2">
            <h3 className="text-black font-black text-xs uppercase tracking-widest mb-6 font-mono">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-black hover:underline underline-offset-2 decoration-2 transition-colors text-xs font-mono font-bold uppercase tracking-wider"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 p-8">
            <h3 className="text-black font-black text-xs uppercase tracking-widest mb-6 font-mono">Stay Updated</h3>
            <p className="text-gray-600 text-xs mb-4 font-mono">
              Join our newsletter for the latest in AI and automation.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-white border-2 border-black text-black px-4 py-2.5 focus:outline-none focus:shadow-[2px_2px_0_#DC2626] transition-all placeholder:text-gray-400 text-xs font-mono shadow-[2px_2px_0_#0A0A0A]"
              />
              <button
                type="submit"
                className="bg-[#FFE500] text-black font-black py-2.5 border-2 border-black shadow-[3px_3px_0_#0A0A0A] hover:shadow-[1px_1px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 text-xs uppercase tracking-widest font-mono transition-all duration-100"
              >
                Subscribe &rarr;
              </button>
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-0 border-l-2 border-r-2 border-b-2 border-black px-8 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono bg-black">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Artifx Agency. All rights reserved.</p>
          <div className="flex gap-0 mt-3 md:mt-0">
            <a href="mailto:khanshan949@gmail.com" className="hover:text-[#FFE500] transition-colors px-4 py-1 border-r border-neutral-700">
              khanshan949@gmail.com
            </a>
            <Link href="/contact" className="hover:text-[#FFE500] transition-colors px-4 py-1">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
