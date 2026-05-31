import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const variants = {
    primary: 'bg-white text-black hover:bg-neutral-200 border border-transparent',
    secondary: 'bg-black text-white hover:bg-gray-800 border border-gray-800',
    outline: 'bg-transparent text-black border border-gray-300 hover:border-black hover:text-black',
    glass: 'bg-black/5 backdrop-blur-md text-black border border-black/10 hover:bg-black/10',
    link: 'text-gray-500 hover:text-black underline-offset-4 hover:underline p-0 h-auto',
    custom: '',
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
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:pointer-events-none';
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
