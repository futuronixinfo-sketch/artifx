import React from 'react';
import Link from 'next/link';

const variants = {
    primary: 'bg-[#FFE500] text-black border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-[2px] hover:translate-y-[2px]',
    secondary: 'bg-black text-white border-2 border-black shadow-[4px_4px_0_#444] hover:shadow-[2px_2px_0_#444] hover:translate-x-[2px] hover:translate-y-[2px]',
    outline: 'bg-[#FAFAF8] text-black border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-[2px] hover:translate-y-[2px]',
    red: 'bg-red-600 text-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-[2px] hover:translate-y-[2px]',
    glass: 'bg-[#FAFAF8] text-black border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-[2px] hover:translate-y-[2px]',
    link: 'text-black underline underline-offset-4 hover:text-red-600 p-0 h-auto border-0 shadow-none',
    custom: '',
};

const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
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
    const baseStyles = 'inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-100 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:translate-x-[4px] active:translate-y-[4px] active:shadow-none';
    const combinedClassName = `${baseStyles} ${variants[variant] || ''} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}
