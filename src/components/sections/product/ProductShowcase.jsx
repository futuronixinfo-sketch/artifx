'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, FileCheck, LayoutDashboard, Receipt, 
  ArrowRight, ExternalLink, ShieldCheck, CheckCircle2,
  Database, Sparkles, Zap, Smartphone, Monitor, ChevronRight
} from 'lucide-react';
import Container from '@/components/ui/Container';

const steps = [
  {
    id: 1,
    num: "01",
    tag: "PROSPECTING & SEARCH",
    title: "Prospect Intelligence Scraper",
    description: "Extract local business listings, reviews, websites, and emails directly from Google Maps parameters. Populate your CRM pipeline with high-intent cold leads in seconds.",
    solves: "Manual lead sourcing, dusty CSV sheets, outdated contact data.",
    features: [
      "Targeted regional coordinates scanning",
      "Auto-identification of missing sites/low reviews",
      "Direct pipeline CRM syncing",
      "Pre-formatted outreach templates generator"
    ],
    image: "/images/product/flowartifx/flow-1.png",
    color: "from-red-500 to-rose-600",
    icon: Search
  },
  {
    id: 2,
    num: "02",
    tag: "PIPELINE & ONBOARDING",
    title: "E-Sign Proposals & CRM",
    description: "Convert scraped leads into active deals. Build elegant, custom Master Service Agreements (MSAs) and project scope proposals with interactive e-signature authorization.",
    solves: "Gmail contract chases, PDF signing friction, untracked pipelines.",
    features: [
      "Consolidated CRM deal cards",
      "Interactive web-browser drawing signature pads",
      "Real-time contract status logging",
      "One-click milestone invoice drafting"
    ],
    image: "/images/product/flowartifx/flow-2.png",
    color: "from-rose-500 to-red-600",
    icon: FileCheck
  },
  {
    id: 3,
    num: "03",
    tag: "COLLABORATION HUB",
    title: "White-Labeled Client Portal",
    description: "Give clients a premium, custom-branded environment to monitor roadmap sprint logs, check tasks, approve milestones, upload assets, and communicate directly with your team.",
    solves: "WhatsApp project chaos, lost feedback, screen-sharing fatigue.",
    features: [
      "Interactive milestone roadmap checklists",
      "Live Kanban task progress boards",
      "Granular permission controls per client",
      "Centralized media & asset storage vault"
    ],
    image: "/images/product/flowartifx/flow-3.png",
    color: "from-red-600 to-orange-600",
    icon: LayoutDashboard
  },
  {
    id: 4,
    num: "04",
    tag: "FINANCE & COLLATERAL",
    title: "Billing & Asset Settlement",
    description: "Generate compliant tax invoices, track secure client deposits, and automatically release project build code or media files only after milestone payments are settled.",
    solves: "Chasing late invoices, manual payment matching, unsecure file transfers.",
    features: [
      "Auto-generated compliant invoice drafts",
      "Encrypted milestone-locked download gates",
      "Real-time operational margin tracking",
      "Direct online payment gateway integrations"
    ],
    image: "/images/product/flowartifx/flow-4.png",
    color: "from-orange-600 to-red-500",
    icon: Receipt
  }
];

export default function ProductShowcase() {
  const [activeStep, setActiveStep] = useState(1);
  const current = steps.find(s => s.id === activeStep);
  const IconComponent = current.icon;

  return (
    <section className="relative py-24 md:py-32 bg-gray-50 overflow-hidden select-none border-b border-gray-200">
      {/* Decorative Blueprint Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.25] pointer-events-none" />
      
      {/* Red Ambient Core Glows */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-red-100/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-rose-100/10 rounded-full blur-[130px] pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 md:mb-24 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-50 border border-red-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-600">
              [ SOVEREIGN ENGINE IN FOCUS // SAAS CORE ]
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-black leading-none uppercase">
            Artifx <span className="text-red-600 italic font-serif lowercase">Flow</span> OS.
          </h2>

          <p className="text-base text-gray-500 max-w-2xl leading-relaxed font-light">
            The first high-performance agency operating system designed to run the entire project lifecycle—from location intelligence scraping to e-signatures, white-labeled client workspaces, and final automated financial settlements.
          </p>
          
          <div className="pt-2">
            <a 
              href="https://flow.artifx.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-black transition-colors uppercase tracking-wider group"
            >
              Launch Live App <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Vertical Steppers (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-4 block">
              // SELECT LIFECYCLE NODE
            </div>
            
            <div className="space-y-4">
              {steps.map((step) => {
                const isActive = step.id === activeStep;
                const StepIcon = step.icon;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`w-full text-left p-5 border transition-all duration-300 relative group flex gap-4 items-start ${
                      isActive 
                        ? 'bg-white border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] translate-x-[-4px] translate-y-[-4px]' 
                        : 'bg-white/60 hover:bg-white border-gray-200 hover:border-gray-400 hover:shadow-lg'
                    }`}
                    style={{ borderRadius: 0 }}
                  >
                    {/* Active Accent Border Line */}
                    {isActive && (
                      <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-red-600" />
                    )}

                    {/* Step Icon */}
                    <div className={`w-10 h-10 border flex flex-shrink-0 items-center justify-center transition-colors ${
                      isActive 
                        ? 'bg-red-50 border-red-200 text-red-600' 
                        : 'bg-gray-50 border-gray-200 text-gray-400 group-hover:text-black group-hover:border-gray-300'
                    }`} style={{ borderRadius: 0 }}>
                      <StepIcon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1 min-w-0 flex-grow">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] font-mono text-red-600 font-bold uppercase tracking-widest">
                          {step.tag}
                        </span>
                        <span className="text-[10px] font-mono text-gray-300 font-bold">
                          {step.num}
                        </span>
                      </div>
                      <h3 className="text-base font-bold uppercase text-black tracking-tight">
                        {step.title}
                      </h3>
                      {isActive && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="text-xs text-gray-500 leading-relaxed font-light pt-2"
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-Fidelity Interactive Browser Mockup Viewport (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                // SYSTEM_MONITOR: ACTIVE_SCREEN_VIEW
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="text-[9px] font-mono text-red-600 uppercase font-bold">LIVE TELEMETRY</span>
              </div>
            </div>

            {/* Premium Browser Window Frame */}
            <div className="border-2 border-black bg-white shadow-[12px_12px_0px_rgba(0,0,0,1)] relative overflow-hidden" style={{ borderRadius: 0 }}>
              
              {/* Browser Header Bar */}
              <div className="bg-gray-100 border-b-2 border-black px-4 py-3 flex items-center justify-between select-none">
                {/* Window Actions */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-600" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 border border-green-600" />
                </div>

                {/* URL Bar */}
                <div className="bg-white border border-gray-200 px-4 py-1 text-[10px] font-mono text-gray-400 w-1/2 max-w-[280px] truncate text-center flex items-center justify-center gap-1">
                  <span className="text-gray-300 text-xs">🔒</span> flow.artifx.dev/dashboard/0{activeStep}
                </div>

                {/* Right Space */}
                <div className="w-12" />
              </div>

              {/* Viewport Screenshot Display with Elegant Transitions */}
              <div className="relative aspect-[16/10] bg-gray-50 flex items-center justify-center overflow-hidden border-b border-gray-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full p-1"
                  >
                    <img 
                      src={current.image} 
                      alt={current.title}
                      className="w-full h-full object-cover object-top border border-gray-200 shadow-sm"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Corner Accents */}
                <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 text-[8px] font-mono text-white tracking-widest uppercase">
                  SCREEN: 0{activeStep}
                </div>
                <div className="absolute bottom-3 right-3 bg-red-600 text-white font-mono text-[8px] px-2.5 py-1 uppercase tracking-widest">
                  COMPLETED OS MODULE
                </div>
              </div>

              {/* Viewport Meta Detail Drawer */}
              <div className="p-6 bg-white border-t-2 border-black grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block mb-2">// SOLVES CORE PAIN</span>
                  <p className="text-xs font-bold text-red-600 font-mono uppercase tracking-tight">
                    ⚡ {current.solves}
                  </p>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block mb-2">// CAPABILITIES</span>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {current.features.map((feat, i) => (
                      <span key={i} className="text-[10px] font-medium text-gray-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-red-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Launch Callout Banner */}
            <div className="p-5 border border-red-200 bg-red-50/50 flex flex-col md:flex-row gap-4 items-center justify-between text-left" style={{ borderRadius: 0 }}>
              <div className="space-y-1">
                <div className="text-[8px] font-mono text-red-600 uppercase tracking-widest font-bold">
                  [ LIVE OS HANDS-ON EXPERIENCE ]
                </div>
                <p className="text-xs text-gray-700 leading-relaxed font-light">
                  Want to explore the live, fully responsive interface? We have deployed the build in staging.
                </p>
              </div>
              <a
                href="https://flow.artifx.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-6 py-3 bg-red-600 hover:bg-black text-white hover:text-white transition-all text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 group shrink-0"
                style={{ borderRadius: 0 }}
              >
                INITIALIZE OPERATING SYSTEM
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>

        </div>

        {/* Value Comparison / Matrix Details Section */}
        <div className="mt-28 border-t border-gray-200 pt-20">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono text-red-600 uppercase tracking-[0.3em] font-bold">[ SYSTEM ARCHITECT MATRIX ]</span>
            <h3 className="text-2xl md:text-3xl font-black uppercase text-black mt-2">OPERATIONAL CONFLICT ANALYSIS</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            {/* Legacy Box */}
            <div className="p-8 md:p-10 border border-gray-200 bg-white shadow-sm hover:border-gray-300 transition-colors" style={{ borderRadius: 0 }}>
              <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block mb-4">[ LEGACY FRICTION ]</span>
              <h4 className="text-lg font-black uppercase text-neutral-800 mb-6">Classical Agency Chaos</h4>
              <ul className="space-y-4 text-xs font-medium text-gray-500">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span> Scrapers dumping unvalidated email spreadsheets manually
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span> Proposal PDFs chased through disjointed client email threads
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span> Clients mailing screenshots of bug trackers and status queries
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span> Scattered billing invoices and manually tracked deposits
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span> Project handovers done via unencrypted cloud storage folders
                </li>
              </ul>
            </div>

            {/* Flow Box */}
            <div className="p-8 md:p-10 border-2 border-black bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)]" style={{ borderRadius: 0 }}>
              <span className="text-[9px] font-mono text-red-600 uppercase tracking-widest block mb-4">[ ARTIFXFLOW INTEGRITY ]</span>
              <h4 className="text-lg font-black uppercase text-black mb-6">Artifx Flow Unified Ecosystem</h4>
              <ul className="space-y-4 text-xs font-bold text-gray-900">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✔</span> 1-Click Maps lead extraction syncing straight into sales pipeline
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✔</span> Interactive web proposals with real-time e-sign authorization
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✔</span> White-labeled client workspace with live roadmap and task logs
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✔</span> Auto-generated tax-compliant billing invoice drafts with status sync
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✔</span> Encrypted download gates automatically releasing handover collateral
                </li>
              </ul>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
