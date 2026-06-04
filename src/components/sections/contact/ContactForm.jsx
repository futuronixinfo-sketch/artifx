'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { Check, Terminal, ShieldCheck } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic input tracking state for live terminal logging
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    role: 'Startup Founder',
    system: 'No, typical chaos',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API compile call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contact-form" className="py-32 bg-[#FAFAF8] text-black text-center border-b-2 border-black select-none relative overflow-hidden">
        <Container className="max-w-xl relative z-10 space-y-6">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-16 h-16 bg-[#FFE500] border-2 border-black shadow-[4px_4px_0_#0A0A0A] flex items-center justify-center mx-auto text-black"
          >
            <ShieldCheck className="w-8 h-8" />
          </motion.div>

          <div className="space-y-2">
            <span className="inline-block px-2 py-0.5 bg-black text-[#FFE500] font-mono text-[8px] font-bold border-2 border-black uppercase tracking-widest">
              [ TRANSMISSION // SUCCESS ]
            </span>
            <h2 className="text-2xl font-black uppercase tracking-tight text-black">
              Payload Compiled Successfully
            </h2>
          </div>

          <p className="text-gray-500 text-xs font-light max-w-sm mx-auto leading-relaxed">
            Your system diagnostics data has been ingested successfully. Our architects will evaluate your operational coordinates and respond via email within 24 hours.
          </p>
        </Container>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-24 bg-[#FAFAF8] text-black border-b-2 border-black relative overflow-hidden select-none">

      <Container className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Intake Form (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="text-left space-y-2">
              <span className="inline-block px-2 py-0.5 bg-[#FFE500] text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A] font-mono text-[8px] font-bold uppercase tracking-widest">
                [ STAGE_02 // SYSTEM_INTAKE ]
              </span>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
                Architectural Ingest parameters
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Full name input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-black uppercase tracking-wider text-black block">
                    Full Name // USER
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-2 border-black bg-white focus:outline-none focus:shadow-[2px_2px_0_#DC2626] font-mono shadow-[2px_2px_0_#0A0A0A] px-4 py-3 text-black text-xs transition-all"
                    placeholder="Enter full name"
                  />
                </div>

                {/* Company input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-black uppercase tracking-wider text-black block">
                    Company / Brand // NODE
                  </label>
                  <input
                    required
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border-2 border-black bg-white focus:outline-none focus:shadow-[2px_2px_0_#DC2626] font-mono shadow-[2px_2px_0_#0A0A0A] px-4 py-3 text-black text-xs transition-all"
                    placeholder="Acme Inc."
                  />
                </div>

              </div>

              {/* Email input */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-black uppercase tracking-wider text-black block">
                  Email Address // COMM_ROUTE
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-black bg-white focus:outline-none focus:shadow-[2px_2px_0_#DC2626] font-mono shadow-[2px_2px_0_#0A0A0A] px-4 py-3 text-black text-xs transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Role dropdown selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-black uppercase tracking-wider text-black block">
                    Engage Profile // ROLE
                  </label>
                  <div className="relative">
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full border-2 border-black bg-white focus:outline-none focus:shadow-[2px_2px_0_#DC2626] font-mono shadow-[2px_2px_0_#0A0A0A] px-4 py-3 text-black text-xs transition-all appearance-none"
                    >
                      <option>Startup Founder</option>
                      <option>Service Business Owner</option>
                      <option>Agency Owner</option>
                      <option>Product Manager</option>
                      <option>Other / Innovator</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400 font-mono text-[9px]">
                      [ SELECT ]
                    </div>
                  </div>
                </div>

                {/* System status dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-black uppercase tracking-wider text-black block">
                    Infrastructure Status // SYS
                  </label>
                  <div className="relative">
                    <select
                      name="system"
                      value={formData.system}
                      onChange={handleChange}
                      className="w-full border-2 border-black bg-white focus:outline-none focus:shadow-[2px_2px_0_#DC2626] font-mono shadow-[2px_2px_0_#0A0A0A] px-4 py-3 text-black text-xs transition-all appearance-none"
                    >
                      <option>No, typical chaos</option>
                      <option>Yes, but it&apos;s broken</option>
                      <option>Yes, need AI automation</option>
                      <option>Just starting out</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400 font-mono text-[9px]">
                      [ SELECT ]
                    </div>
                  </div>
                </div>

              </div>

              {/* Problem textarea */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-black uppercase tracking-wider text-black block">
                  Core Operational Problem // PAYLOAD
                </label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border-2 border-black bg-white focus:outline-none focus:shadow-[2px_2px_0_#DC2626] font-mono shadow-[2px_2px_0_#0A0A0A] px-4 py-3 text-black text-xs transition-all resize-none"
                  placeholder="Describe your operational bottlenecks or automated systems requirements..."
                />
              </div>

              <div className="pt-2 space-y-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center text-xs h-12 bg-[#FFE500] text-black border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 font-black uppercase tracking-widest font-mono transition-all duration-100 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "TRANSMITTING DATA..." : "COMPILE_INQUIRY // INIT_INGEST"}
                </button>

                <div className="flex items-center justify-center gap-2 text-[9px] text-gray-400 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-black shrink-0" />
                  <span>[ SECURE TRANSMISSION ENABLED // SSL_256BIT_AES ]</span>
                </div>
              </div>

            </form>
          </div>

          {/* Right Column: Dynamic Live Diagnostics Console Ingest Simulator (5 cols) */}
          <div className="lg:col-span-5 w-full sticky top-24">
            <div className="border-2 border-black bg-black text-emerald-400 font-mono p-6 min-h-105 flex flex-col justify-between relative shadow-[4px_4px_0_#0A0A0A] overflow-hidden">

              <div className="space-y-5 relative z-10">
                <div className="flex justify-between items-center border-b border-emerald-950 pb-2 text-[8px] text-emerald-600 font-bold">
                  <span className="flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5" />
                    SYS_INGEST_LOG // CONSOLE_01
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-500 animate-ping" />
                    ONLINE
                  </span>
                </div>

                {/* Dynamically logged form telemetry fields */}
                <div className="space-y-2.5 text-[8.5px] leading-relaxed">
                  <p className="text-emerald-600">SYS_INTAKE_DAEMON // INITIALIZING HANDSHAKE...</p>
                  <p className="text-emerald-600">SECURE_TUNNEL // CREATING AUTHENTICATED PATHWAY [PORT_443]</p>

                  <p className="text-white">
                    &gt; CLIENT_IDENT: <span className={formData.name ? "text-emerald-400 font-bold" : "text-emerald-700/60"}>
                      {formData.name ? formData.name.toUpperCase() : "PENDING_INPUT..."}
                    </span>
                  </p>

                  <p className="text-white">
                    &gt; BRAND_DOMAIN: <span className={formData.company ? "text-emerald-400 font-bold" : "text-emerald-700/60"}>
                      {formData.company ? formData.company.toUpperCase() : "WAITING_DATA..."}
                    </span>
                  </p>

                  <p className="text-white">
                    &gt; COMM_ROUTING: <span className={formData.email ? "text-emerald-400 font-bold" : "text-emerald-700/60"}>
                      {formData.email ? formData.email.toUpperCase() : "PORT_ESTABLISH..."}
                    </span>
                  </p>

                  <p className="text-white">
                    &gt; ENGAGE_PROFILE: <span className="text-amber-400 font-bold uppercase">
                      [{formData.role}]
                    </span>
                  </p>

                  <p className="text-white">
                    &gt; TELEMETRY_STATE: <span className="text-rose-400 font-bold uppercase">
                      [{formData.system}]
                    </span>
                  </p>

                  <p className="text-white">
                    &gt; PAYLOAD_RAW: <span className={formData.message ? "text-emerald-400" : "text-emerald-700/60"}>
                      {formData.message ? `"${formData.message.substring(0, 100)}${formData.message.length > 100 ? '...' : ''}"` : "AWAITING_INGEST_DATA..."}
                    </span>
                  </p>
                </div>
              </div>

              {/* Console Telemetry Footer */}
              <div className="border-t border-emerald-950 pt-3 space-y-1.5 relative z-10 text-[7.5px] text-emerald-600">
                <div className="flex justify-between">
                  <span>CONNECTION_STABILITY:</span>
                  <span className="text-emerald-400 font-bold">100% ENCRYPTED</span>
                </div>
                <div className="flex justify-between">
                  <span>AUDIT_STATUS:</span>
                  <span className="text-emerald-400 font-bold animate-pulse">AWAITING_TRIGGER</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
