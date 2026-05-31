import Link from 'next/link';
import { navigation, legal } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-gray-200 py-16 px-6 lg:px-8 mt-auto w-full overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-red-500/10" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">

          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 group mb-6">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform">
                A
              </div>
              <span className="text-xl font-bold tracking-tight text-black">
                Artifx
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Building intelligent digital systems that help businesses scale faster using AI and modern technology.
            </p>
          </div>

          <div className="col-span-1">
              <h3 className="text-black font-semibold text-sm uppercase tracking-wider mb-6">Company</h3>
              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-500 hover:text-red-600 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
              <h3 className="text-black font-semibold text-sm uppercase tracking-wider mb-6">Legal</h3>
              <ul className="space-y-4">
                {legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-500 hover:text-red-600 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-black font-semibold text-sm uppercase tracking-wider mb-6">Stay Updated</h3>
            <p className="text-gray-500 text-sm mb-4">
              Join our newsletter for the latest in AI and automation.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-100 border border-gray-200 text-black px-4 py-2.5 rounded-xl focus:outline-none focus:border-red-500/40 transition-colors placeholder:text-gray-400 text-sm"
              />
              <button
                type="submit"
                className="bg-red-600 text-white font-medium py-2.5 rounded-xl hover:bg-red-500 transition-all text-sm shadow-lg shadow-red-500/10"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Artifx Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
              <span key={social} className="hover:text-red-600 cursor-pointer transition-colors">
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
