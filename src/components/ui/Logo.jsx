import { motion } from 'framer-motion';

export default function Logo({ className = "", showText = true }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-8 h-8 flex items-center justify-center">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="50%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#b91c1c" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#logo-grad)" className="opacity-20" />
          <path d="M16 4L8 28H24L16 4Z" fill="url(#logo-grad)" />
          <path d="M16 4V20" stroke="white" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
          <path d="M16 20L10 28" stroke="white" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
          <path d="M16 20L22 28" stroke="white" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
          <circle cx="16" cy="20" r="2.5" fill="white" />
        </svg>
      </div>
      {showText && (
        <span className="text-xl font-bold tracking-tight text-black">
          ARTIFX
        </span>
      )}
    </div>
  );
}
