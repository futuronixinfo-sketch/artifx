import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const variants = {
    primary: 'bg-white text-black hover:bg-neutral-200 border border-transparent',
    secondary: 'bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-800',
    outline: 'bg-transparent text-white border border-neutral-700 hover:border-neutral-500 hover:text-neutral-300',
    glass: 'bg-white/10 backdrop-blur-md text-white border border-white/10 hover:bg-white/20',
    link: 'text-neutral-400 hover:text-white underline-offset-4 hover:underline p-0 h-auto',
};

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    icon: 'p-2',
};

export default function Button({
    variant = 'primary',
    size = 'md',
    className = '',
    href,
    children,
    ...props
}) {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 disabled:opacity-50 disabled:pointer-events-none';
    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={combinedClassName}
            {...props}
        >
            {children}
        </motion.button>
    );
}
