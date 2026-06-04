'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, FileCheck, LayoutDashboard, Receipt,
  ArrowRight, ExternalLink, CheckCircle2,
  Database, ChevronRight
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
    icon: Receipt
  }
];

export default function ProductShowcase() {
  const [activeStep, setActiveStep] = useState(1);
  const current = steps.find(s => s.id === activeStep);
  const IconComponent = current.icon;

  return (
    <section className="relative py-24 md:py-32 bg-[#FAFAF8] overflow-hidden select-none border-b-2 border-black">
      <Container className="relative z-10">

        {/* Header Block */}
        <div className="max-w-3xl mb-16 md:mb-24 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFE500] border-2 border-black shadow-[3px_3px_0_#0A0A0A]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-black opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 bg-black"></span>
            </span>
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-black">
              [ SOVEREIGN ENGINE IN FOCUS // SAAS CORE ]
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-black leading-none uppercase">
            Artifx <span className="text-red-600 italic font-serif lowercase underline decoration-4 underline-offset-4">Flow</span> OS.
          </h2>

          <p className="text-base text-gray-600 max-w-2xl leading-relaxed font-light">
            The first high-performance agency operating system designed to run the entire project lifecycle—from location intelligence scraping to e-signatures, white-labeled client workspaces, and final automated financial settlements.
          </p>

          <div className="pt-2">
            <a
              href="https://flow.artifx.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A] hover:shadow-[1px_1px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100 bg-white px-4 py-2 group"
            >
              Launch Live App <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Vertical Steppers (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4 block">
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
                    className={`w-full text-left p-5 border-2 transition-all duration-100 relative flex gap-4 items-start ${
                      isActive
                        ? 'bg-white border-black shadow-[6px_6px_0_#0A0A0A] -translate-x-0.5 -translate-y-0.5'
                        : 'bg-white border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5'
                    }`}
                  >
                    {/* Active Accent Border Line */}
                    {isActive && (
                      <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-red-600" />
                    )}

                    {/* Step Icon */}
                    <div className={`w-10 h-10 border-2 border-black flex shrink-0 items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-[#FFE500] text-black'
                        : 'bg-[#FAFAF8] text-gray-500'
                    }`}>
                      <StepIcon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1 min-w-0 grow">
                      <div className="flex justify-between items-center">
                        <span className="border-2 border-black bg-[#FAFAF8] text-black font-mono font-black uppercase text-[9px] px-2.5 py-1">
                          {step.tag}
                        </span>
                        <span className="text-[10px] font-mono text-gray-400 font-bold">
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
                          className="text-xs text-gray-600 leading-relaxed font-light pt-2"
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

          {/* Right Column: Browser Mockup Viewport (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                // SYSTEM_MONITOR: ACTIVE_SCREEN_VIEW
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-2 h-2 bg-red-600 border border-black animate-ping" />
                <span className="text-[9px] font-mono text-red-600 uppercase font-black">LIVE TELEMETRY</span>
              </div>
            </div>

            {/* Browser Window Frame */}
            <div className="border-2 border-black bg-white shadow-[12px_12px_0_#0A0A0A] relative overflow-hidden">

              {/* Browser Header Bar */}
              <div className="bg-[#FAFAF8] border-b-2 border-black px-4 py-3 flex items-center justify-between select-none">
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-3 h-3 bg-red-500 border border-black" />
                  <div className="w-3 h-3 bg-yellow-400 border border-black" />
                  <div className="w-3 h-3 bg-black border border-black" />
                </div>

                <div className="bg-white border-2 border-black px-4 py-1 text-[10px] font-mono text-gray-500 w-1/2 max-w-70 truncate text-center flex items-center justify-center gap-1">
                  flow.artifx.dev/dashboard/0{activeStep}
                </div>

                <div className="w-12" />
              </div>

              {/* Viewport Screenshot */}
              <div className="relative aspect-16/10 bg-[#FAFAF8] flex items-center justify-center overflow-hidden border-b border-black">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full p-1"
                  >
                    <img
                      src={current.image}
                      alt={current.title}
                      className="w-full h-full object-cover object-top border-2 border-black"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute top-3 left-3 bg-black px-2.5 py-1 text-[8px] font-mono text-white tracking-widest uppercase border-2 border-black">
                  SCREEN: 0{activeStep}
                </div>
                <div className="absolute bottom-3 right-3 bg-red-600 text-white font-mono text-[8px] px-2.5 py-1 uppercase tracking-widest border-2 border-black">
                  COMPLETED OS MODULE
                </div>
              </div>

              {/* Viewport Meta Detail Drawer */}
              <div className="p-6 bg-white border-t-2 border-black grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block mb-2">// SOLVES CORE PAIN</span>
                  <p className="text-xs font-black text-red-600 font-mono uppercase tracking-tight">
                    ⚡ {current.solves}
                  </p>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block mb-2">// CAPABILITIES</span>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {current.features.map((feat, i) => (
                      <span key={i} className="text-[10px] font-medium text-gray-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-red-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Launch Callout Banner */}
            <div className="p-5 bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] flex flex-col md:flex-row gap-4 items-center justify-between text-left">
              <div className="space-y-1">
                <div className="text-[8px] font-mono text-black uppercase tracking-widest font-black bg-[#FFE500] border-2 border-black px-2 py-1 inline-block">
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
                className="w-full md:w-auto bg-[#FFE500] text-black border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100 px-6 py-3 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 group shrink-0"
              >
                INITIALIZE OPERATING SYSTEM
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Value Comparison Matrix */}
        <div className="mt-28 border-t-2 border-black pt-20">
          <div className="text-center mb-12">
            <span className="inline-block text-[10px] font-mono bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] px-3 py-1 uppercase tracking-[0.3em] font-black">[ SYSTEM ARCHITECT MATRIX ]</span>
            <h3 className="text-2xl md:text-3xl font-black uppercase text-black mt-4">OPERATIONAL CONFLICT ANALYSIS</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            {/* Legacy Box */}
            <div className="p-8 md:p-10 bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A]">
              <span className="border-2 border-black bg-[#FAFAF8] text-black font-mono font-black uppercase text-[9px] px-2.5 py-1 block w-fit mb-4">[ LEGACY FRICTION ]</span>
              <h4 className="text-lg font-black uppercase text-neutral-800 mb-6">Classical Agency Chaos</h4>
              <ul className="space-y-4 text-xs font-medium text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-black">✕</span> Scrapers dumping unvalidated email spreadsheets manually
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-black">✕</span> Proposal PDFs chased through disjointed client email threads
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-black">✕</span> Clients mailing screenshots of bug trackers and status queries
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-black">✕</span> Scattered billing invoices and manually tracked deposits
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-black">✕</span> Project handovers done via unencrypted cloud storage folders
                </li>
              </ul>
            </div>

            {/* Flow Box */}
            <div className="p-8 md:p-10 bg-black text-white border-2 border-black shadow-[4px_4px_0_#444]">
              <span className="bg-[#FFE500] text-black border-2 border-black font-mono font-black uppercase text-[9px] px-2.5 py-1 block w-fit mb-4">[ ARTIFXFLOW INTEGRITY ]</span>
              <h4 className="text-lg font-black uppercase text-white mb-6">Artifx Flow Unified Ecosystem</h4>
              <ul className="space-y-4 text-xs font-bold text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#FFE500] font-black">✔</span> 1-Click Maps lead extraction syncing straight into sales pipeline
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFE500] font-black">✔</span> Interactive web proposals with real-time e-sign authorization
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFE500] font-black">✔</span> White-labeled client workspace with live roadmap and task logs
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFE500] font-black">✔</span> Auto-generated tax-compliant billing invoice drafts with status sync
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FFE500] font-black">✔</span> Encrypted download gates automatically releasing handover collateral
                </li>
              </ul>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
