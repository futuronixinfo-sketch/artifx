'use client';
import { motion } from 'framer-motion';

const iconProps = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
};

export const AnimatedCRM = ({ className }) => {
    return (
        <div className={className}>
            <motion.svg {...iconProps} className="w-full h-full">
                {/* Central Hub */}
                <motion.circle
                    cx="12" cy="12" r="3"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: [0.8, 1.1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Connecting Lines */}
                <motion.path d="M12 9V5"
                    initial={{ pathLength: 0, opacity: 0.2 }}
                    animate={{ pathLength: [0, 1, 1, 0], opacity: [0.2, 1, 1, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
                />
                <motion.path d="M14.5 13.5L18 17"
                    initial={{ pathLength: 0, opacity: 0.2 }}
                    animate={{ pathLength: [0, 1, 1, 0], opacity: [0.2, 1, 1, 0.2] }}
                    transition={{ duration: 2, delay: 0.5, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
                />
                <motion.path d="M9.5 13.5L6 17"
                    initial={{ pathLength: 0, opacity: 0.2 }}
                    animate={{ pathLength: [0, 1, 1, 0], opacity: [0.2, 1, 1, 0.2] }}
                    transition={{ duration: 2, delay: 1, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
                />

                {/* Nodes */}
                <motion.circle cx="12" cy="5" r="1.5"
                    animate={{ r: [1.5, 2, 1.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.circle cx="18" cy="17" r="1.5"
                    animate={{ r: [1.5, 2, 1.5] }}
                    transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                />
                <motion.circle cx="6" cy="17" r="1.5"
                    animate={{ r: [1.5, 2, 1.5] }}
                    transition={{ duration: 2, delay: 1, repeat: Infinity }}
                />
            </motion.svg>
        </div>
    );
};

export const AnimatedDashboard = ({ className }) => {
    return (
        <div className={className}>
            <motion.svg {...iconProps} className="w-full h-full">
                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                <motion.rect
                    x="7" y="10" width="3" height="8" rx="1" fill="currentColor" fillOpacity="0.2"
                    animate={{ height: [8, 12, 6, 8], y: [13, 9, 15, 13] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.rect
                    x="14" y="8" width="3" height="10" rx="1" fill="currentColor" fillOpacity="0.2"
                    animate={{ height: [10, 5, 11, 10], y: [11, 16, 10, 11] }}
                    transition={{ duration: 3, delay: 0.2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path d="M3 9h18" strokeDasharray="2 2" opacity="0.5" />
            </motion.svg>
        </div>
    );
};

export const AnimatedLeads = ({ className }) => {
    return (
        <div className={className}>
            <motion.svg {...iconProps} className="w-full h-full">
                {/* Funnel Shape */}
                <path d="M4 4h16l-6.5 9v7l-3-3v-4L4 4z" />

                {/* Particles dropping in */}
                <motion.circle cx="12" cy="2" r="1" fill="currentColor"
                    animate={{ y: [0, 10, 18], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeIn" }}
                />
                <motion.circle cx="8" cy="1" r="1" fill="currentColor"
                    animate={{ y: [0, 8, 15], x: [0, 2, 4], opacity: [0, 1, 0] }}
                    transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, ease: "easeIn" }}
                />
                <motion.circle cx="16" cy="1" r="1" fill="currentColor"
                    animate={{ y: [0, 8, 15], x: [0, -2, -4], opacity: [0, 1, 0] }}
                    transition={{ duration: 2.2, delay: 1, repeat: Infinity, ease: "easeIn" }}
                />
            </motion.svg>
        </div>
    );
};

export const AnimatedPortal = ({ className }) => {
    return (
        <div className={className}>
            <motion.svg {...iconProps} className="w-full h-full">
                <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="2" />

                {/* Sliding Door/Panel */}
                <motion.rect
                    x="11" y="4" width="2" height="16" fill="currentColor"
                    animate={{ width: [2, 14, 2], x: [0, -6, 0], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Lock Icon */}
                <motion.path d="M12 10v4" strokeWidth="2"
                    animate={{ scaleY: [1, 0, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />
            </motion.svg>
        </div>
    );
};

export const AnimatedWorkflow = ({ className }) => {
    return (
        <div className={className}>
            <motion.svg {...iconProps} className="w-full h-full">
                {/* Path */}
                <path d="M4 18h4l4-12h4l4 12" strokeOpacity="0.3" />

                {/* Animated Path trace */}
                <motion.path d="M4 18h4l4-12h4l4 12"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    strokeWidth="2"
                />

                {/* Nodes */}
                <circle cx="4" cy="18" r="2" />
                <circle cx="20" cy="18" r="2" />
                <motion.circle cx="12" cy="6" r="2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            </motion.svg>
        </div>
    );
};

export const AnimatedAI = ({ className }) => {
    return (
        <div className={className}>
            <motion.svg {...iconProps} className="w-full h-full">
                {/* Brain Shape */}
                <motion.path
                    d="M12 4c-3 0-5 2-5 5c0 2 2 4 2 6c0 3-3 4-3 4h12s-3-1-3-4c0-2 2-4 2-6c0-3-2-5-5-5z"
                    strokeWidth="2"
                    animate={{ strokeWidth: [2, 3, 2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Pulsing Waves */}
                <motion.path
                    d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 1.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    style={{ transformOrigin: "center" }}
                />
            </motion.svg>
        </div>
    );
};
