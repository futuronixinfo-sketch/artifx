import { motion } from 'framer-motion';

export default function Logo({ className = "", showText = true }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Abstract System Icon */}
            <div className="relative w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
                    <path d="M12 2L2 22H22L12 2Z" fill="currentColor" className="opacity-10" />
                    <path d="M12 2L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 16L4.5 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 16L19.5 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="12" cy="16" r="2" fill="currentColor" />
                    <circle cx="12" cy="2" r="1.5" fill="currentColor" />
                    <circle cx="4.5" cy="22" r="1.5" fill="currentColor" />
                    <circle cx="19.5" cy="22" r="1.5" fill="currentColor" />
                </svg>
            </div>

            {/* Typography */}
            {showText && (
                <span className="text-xl font-bold tracking-tight text-white font-sans">
                    ARTIFX
                </span>
            )}
        </div>
    );
}
