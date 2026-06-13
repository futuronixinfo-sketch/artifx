'use client';
import { useState } from 'react';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowLeft, 
  Send, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Monitor 
} from 'lucide-react';

export default function TemplatesComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="relative pt-36 pb-20 bg-[#FAFAF8] min-h-[85vh] flex items-center select-none overflow-hidden">
      {/* Dynamic Grid Background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] bg-size-[24px_24px] opacity-30 pointer-events-none" />

      <Container className="max-w-4xl mx-auto relative z-10">
        <div className="space-y-12">
          
          {/* Header Status Tag */}
          <div className="flex flex-col items-center text-center space-y-4">
            <span className="px-3 py-1 bg-[#DC2626] text-white font-mono text-[10px] font-black border-2 border-black uppercase tracking-widest shadow-[3px_3px_0_#0A0A0A]">
              [ PIPELINE_STATUS // UNDER_CONSTRUCTION ]
            </span>
            
            <h1 className="text-4xl md:text-6xl font-black text-black leading-none uppercase tracking-tighter">
              TEMPLATES<span className="text-[#DC2626]">.EXE</span>
            </h1>
            
            <p className="text-sm md:text-base text-gray-700 max-w-xl leading-relaxed">
              We are currently packaging, auditing, and compiling production-grade Next.js website blueprints. No mock templates or placeholders—only high-conversion code bases ready for launch.
            </p>
          </div>

          {/* Waitlist Form Panel */}
          <div className="max-w-md mx-auto bg-white border-2 border-black p-6 shadow-[5px_5px_0_#0A0A0A]">
            <div className="border-b border-black/10 pb-3 mb-4 flex items-center justify-between">
              <span className="font-mono text-[9px] font-black uppercase tracking-wider text-gray-500">
                Waitlist Gateway
              </span>
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs text-gray-600 leading-snug">
                  Register below to secure early access and discounts on launch templates.
                </p>
                
                <div className="flex border-2 border-black p-0.5 bg-[#FAFAF8]">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER_YOUR_EMAIL.COM"
                    className="flex-1 px-3 py-2 bg-transparent text-xs font-mono placeholder-gray-400 focus:outline-none w-full"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-black text-white hover:bg-[#FFE500] hover:text-black transition-colors duration-100 font-mono text-xs font-black uppercase tracking-wider border-l border-black flex items-center gap-1.5 shrink-0"
                  >
                    Join
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-4 text-center space-y-3">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-emerald-100 border-2 border-emerald-500 rounded-none mb-1 text-emerald-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-mono text-[10px] font-black uppercase tracking-widest text-emerald-800">
                  SUCCESS // ENCRYPTED_WAITLIST_ADDED
                </h3>
                <p className="text-xs text-gray-600">
                  Your terminal session is registered. We will ping you when the repository compiles online.
                </p>
              </div>
            )}
          </div>

          {/* Upcoming Features Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            
            {/* Feature 1 */}
            <div className="bg-white border-2 border-black p-5 shadow-[3px_3px_0_#0A0A0A] space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-red-100 border border-black flex items-center justify-center text-red-600 font-black text-xs">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="font-black text-xs uppercase text-black tracking-tight">
                  99+ Lighthouse
                </h3>
              </div>
              <p className="text-[10px] text-gray-600 leading-relaxed">
                Clean, production-grade Next.js layouts. Zero garbage scripts, zero bloat, and optimized core web vitals.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border-2 border-black p-5 shadow-[3px_3px_0_#0A0A0A] space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-yellow-100 border border-black flex items-center justify-center text-yellow-600 font-black text-xs">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="font-black text-xs uppercase text-black tracking-tight">
                  Modular Aesthetics
                </h3>
              </div>
              <p className="text-[10px] text-gray-600 leading-relaxed">
                State-of-the-art Neobrutalist cards, customized aurora grids, and premium responsive layout engines.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border-2 border-black p-5 shadow-[3px_3px_0_#0A0A0A] space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-blue-100 border border-black flex items-center justify-center text-blue-600 font-black text-xs">
                  <Monitor className="w-4 h-4" />
                </div>
                <h3 className="font-black text-xs uppercase text-black tracking-tight">
                  Tailwind & TS
                </h3>
              </div>
              <p className="text-[10px] text-gray-600 leading-relaxed">
                Clean typescript types, responsive variables, custom layout hooks, and structured CSS property systems.
              </p>
            </div>

          </div>

          {/* Back Action */}
          <div className="text-center pt-4">
            <Link
              href="/business-model"
              className="inline-flex items-center gap-2 px-5 py-3 border-2 border-black bg-white text-black font-mono text-[9px] font-black uppercase tracking-widest shadow-[3px_3px_0_#0A0A0A] hover:shadow-[1px_1px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Explore Business Models
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
}
