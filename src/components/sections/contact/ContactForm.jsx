'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Check } from 'lucide-react';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <section id="contact-form" className="py-32 bg-black text-white text-center border-b border-neutral-900 select-none">
                <Container className="max-w-xl">
                    <motion.div
                        initial={{ scale: 0.98, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-16 h-16 border border-neutral-800 bg-neutral-900 flex items-center justify-center mx-auto mb-8 text-emerald-400"
                    >
                        <Check className="w-8 h-8" />
                    </motion.div>
                    <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">Message Received</h2>
                    <p className="text-neutral-400 text-xs font-light max-w-sm mx-auto leading-relaxed">
                        We'll review your telemetry and reach out on Slack or email within 24 hours with architectural next steps.
                    </p>
                </Container>
            </section>
        );
    }

    return (
        <section id="contact-form" className="py-32 bg-black text-white border-b border-neutral-900 relative overflow-hidden select-none">
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#f95738]/[0.02] rounded-full blur-[140px] pointer-events-none" />

            <Container className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    
                    {/* Left Column: Form (7 cols) */}
                    <div className="lg:col-span-7 space-y-12">
                        <div className="text-left">
                            <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest mb-4 block font-bold">[ 02 / INTAKE ]</span>
                            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">Project Details</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">Full Name</label>
                                    <input required type="text" className="w-full bg-neutral-950/40 border border-neutral-900 px-4 py-3 text-white text-xs focus:outline-none focus:border-[#f95738] transition-colors" placeholder="John Doe" style={{ borderRadius: 0 }} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">Company / Brand</label>
                                    <input required type="text" className="w-full bg-neutral-950/40 border border-neutral-900 px-4 py-3 text-white text-xs focus:outline-none focus:border-[#f95738] transition-colors" placeholder="Acme Inc." style={{ borderRadius: 0 }} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">Email Address</label>
                                <input required type="email" className="w-full bg-neutral-950/40 border border-neutral-900 px-4 py-3 text-white text-xs focus:outline-none focus:border-[#f95738] transition-colors" placeholder="john@company.com" style={{ borderRadius: 0 }} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">I am a...</label>
                                    <select className="w-full bg-neutral-950/40 border border-neutral-900 px-4 py-3 text-white text-xs focus:outline-none focus:border-[#f95738] transition-colors appearance-none" style={{ borderRadius: 0 }}>
                                        <option>Startup Founder</option>
                                        <option>Service Business Owner</option>
                                        <option>Agency Owner</option>
                                        <option>Product Manager</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">Do you have a system?</label>
                                    <select className="w-full bg-neutral-950/40 border border-neutral-900 px-4 py-3 text-white text-xs focus:outline-none focus:border-[#f95738] transition-colors appearance-none" style={{ borderRadius: 0 }}>
                                        <option>No, typical chaos</option>
                                        <option>Yes, but it's broken</option>
                                        <option>Yes, need optimization</option>
                                        <option>Just starting out</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">What is the core problem?</label>
                                <textarea required rows={4} className="w-full bg-neutral-950/40 border border-neutral-900 px-4 py-3 text-white text-xs focus:outline-none focus:border-[#f95738] transition-colors" placeholder="Describe the operational chaos..." style={{ borderRadius: 0 }} />
                            </div>

                            <div className="pt-4">
                                <Button
                                    variant="primary"
                                    className="w-full justify-center text-sm h-12 bg-white text-black hover:bg-neutral-200 border-transparent"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                                </Button>
                                <p className="mt-4 text-center text-[10px] text-neutral-600 font-mono">
                                    [ PRIVATE_SECURE: WE PROTECT AND NEVER SHARE SENSITIVE DATABASE DETAILS ]
                                </p>
                            </div>
                        </form>
                    </div>

                    {/* Right Column: Visual Anchor (5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 hidden lg:block"
                    >
                        <div className="relative border border-neutral-900 p-2 bg-neutral-950/40 group shadow-2xl">
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <img 
                                    src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800" 
                                    alt="Focus developer coding at desk" 
                                    className="w-full h-full object-cover opacity-50 group-hover:scale-102 group-hover:opacity-75 transition-all duration-1000 filter grayscale"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                                <div className="absolute bottom-6 left-6 text-left">
                                    <p className="text-white font-bold text-sm mb-1 uppercase tracking-tight">Let's build foundations.</p>
                                    <p className="text-neutral-500 text-xs font-light">Our typical response window is under 24 hours.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
