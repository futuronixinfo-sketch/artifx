'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { 
  ArrowLeft, CheckCircle2, Terminal, 
  Layers, Settings, ShieldCheck, Activity 
} from 'lucide-react';

export default function TemplateDetailClient({ template }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [customDesign, setCustomDesign] = useState(false);
  const [dataIngest, setDataIngest] = useState(false);
  const [maintenance, setMaintenance] = useState(false);

  // Pricing constants requested
  const DESIGN_ADDON_PRICE = 199;
  const DATA_ADDON_PRICE = 149;
  const MAINTENANCE_PRICE = 49; // Same across all templates monthly

  // Live total calculation
  const oneTimeTotal = template.basePrice + (customDesign ? DESIGN_ADDON_PRICE : 0) + (dataIngest ? DATA_ADDON_PRICE : 0);

  return (
    <main className="min-h-screen bg-white text-black pt-32 pb-24 select-none">
      
      {/* Soft Background Grid Guides */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

      <Container className="relative z-10 max-w-6xl">
        
        {/* Breadcrumb Navigation link */}
        <div className="mb-10">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            &larr; Back to system templates
          </Link>
        </div>

        {/* Dynamic Detail Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16 pb-8 border-b border-gray-100">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50/80 border border-red-100 rounded-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-red-600">
                [ BLUEPRINT: {template.slug.toUpperCase()} // active core ]
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black uppercase leading-none">
              {template.name}
            </h1>
            
            <p className="text-xs text-gray-500 max-w-xl leading-relaxed font-mono font-light">
              /* {template.description} */
            </p>
          </div>

          {/* Telemetry metadata cards right aligned */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto shrink-0 font-mono">
            <div className="border border-gray-200/60 bg-gray-50/50 p-4 rounded-2xl min-w-[110px] text-center shadow-sm">
              <div className="text-[7px] text-gray-400 uppercase tracking-widest leading-none mb-1">Speed score</div>
              <div className="text-sm font-bold text-zinc-800">{template.speed}</div>
            </div>
            <div className="border border-gray-200/60 bg-gray-50/50 p-4 rounded-2xl min-w-[110px] text-center shadow-sm">
              <div className="text-[7px] text-gray-400 uppercase tracking-widest leading-none mb-1">SEO rating</div>
              <div className="text-sm font-bold text-green-600">{template.seo}</div>
            </div>
            <div className="border border-gray-200/60 bg-gray-50/50 p-4 rounded-2xl min-w-[110px] text-center shadow-sm">
              <div className="text-[7px] text-gray-400 uppercase tracking-widest leading-none mb-1">Deployment</div>
              <div className="text-sm font-bold text-zinc-800 uppercase">{template.engine.split(' ')[0]}</div>
            </div>
            <div className="border border-gray-200/60 bg-gray-50/50 p-4 rounded-2xl min-w-[110px] text-center shadow-sm">
              <div className="text-[7px] text-gray-400 uppercase tracking-widest leading-none mb-1">Core version</div>
              <div className="text-sm font-bold text-red-600">{template.version}</div>
            </div>
          </div>
        </div>

        {/* MAIN SPLIT GRID: SPECIFICATIONS VS PRICING CALCULATOR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT SIDE: Preview Gallery & Tech Specifications Sheet (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Interactive Image Gallery frame */}
            <div className="border border-gray-200 bg-gray-50/50 rounded-3xl p-3 relative overflow-hidden shadow-sm">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] opacity-15 pointer-events-none z-10" />
              
              {/* Main Image screen display */}
              <div className="rounded-2xl overflow-hidden aspect-[16/9] shadow-inner bg-white border border-gray-100 relative group/screen">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    src={template.images[activeImageIndex]}
                    alt={`${template.name} View ${activeImageIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Dynamic navigation chevrons on screen hover */}
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveImageIndex((prev) => (prev === 0 ? template.images.length - 1 : prev - 1));
                    }}
                    className="w-8 h-8 rounded-full bg-white/95 hover:bg-white text-black flex items-center justify-center shadow hover:scale-105 transition-all pointer-events-auto border border-gray-200/50 font-mono text-[10px] font-bold focus:outline-none"
                  >
                    &larr;
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveImageIndex((prev) => (prev === template.images.length - 1 ? 0 : prev + 1));
                    }}
                    className="w-8 h-8 rounded-full bg-white/95 hover:bg-white text-black flex items-center justify-center shadow hover:scale-105 transition-all pointer-events-auto border border-gray-200/50 font-mono text-[10px] font-bold focus:outline-none"
                  >
                    &rarr;
                  </button>
                </div>

                {/* Floating telemetry view index pill */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/75 text-white font-mono text-[8px] tracking-widest uppercase z-20 select-none">
                  VIEW {activeImageIndex + 1} / {template.images.length}
                </div>
              </div>

              {/* Grid Thumbnails row */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                {template.images.map((img, index) => {
                  const isActive = index === activeImageIndex;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`border rounded-xl aspect-[16/10] overflow-hidden bg-gray-50/50 p-1 transition-all duration-300 relative focus:outline-none hover:border-black shadow-sm ${
                        isActive
                          ? 'border-red-500 ring-2 ring-red-500/10'
                          : 'border-gray-200 hover:scale-[1.02]'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${template.name} thumbnail ${index + 1}`}
                        className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-60'
                        }`}
                      />
                      {isActive && (
                        <motion.div
                          layoutId="activeThumbnailBorder"
                          className="absolute inset-0 border-2 border-red-500 rounded-xl pointer-events-none"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

            </div>

            {/* In-Depth Specifications Block */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-black uppercase tracking-tight flex items-center gap-2 border-b border-gray-100 pb-2">
                <Layers className="w-4 h-4 text-red-500 shrink-0" />
                Architectural Specifications
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-sans font-light">
                {template.longDescription}
              </p>
            </div>

            {/* Checklist details */}
            <div className="space-y-4">
              <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest block">System Core Features</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {template.features.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-gray-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <span className="font-light font-mono leading-normal">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Release modules */}
            <div className="space-y-4">
              <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest block">Core Integration Modules</span>
              <div className="space-y-2">
                {template.modules.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50/50 font-mono text-[9px] text-gray-600">
                    <Terminal className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>SYS_CORE_MODULE_0{i + 1}: {item.toUpperCase()} // ACTIVE</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Dynamic Pricing Calculator Module Cockpit (lg:col-span-5) */}
          <div className="lg:col-span-5 flex">
            <div className="w-full border border-gray-200/80 bg-gray-50/30 backdrop-blur-sm rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-lg shadow-gray-100/30 relative overflow-hidden min-h-[500px]">
              
              {/* Internal Grid pattern overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none z-0" />
              
              <div className="relative z-10 space-y-6">
                
                {/* Header title */}
                <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                  <span className="text-[9px] font-mono text-red-600 font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    System Price Estimator
                  </span>
                  <span className="text-[7px] font-mono text-gray-400 font-bold">CALC_V1.0</span>
                </div>

                {/* Total pricing telemetry readout panel */}
                <div className="bg-white border border-gray-200/80 p-5 rounded-2xl text-center space-y-2 shadow-inner">
                  <div className="text-[8px] font-mono text-gray-400 uppercase tracking-widest">Calculated Core Price</div>
                  
                  <div className="space-y-1.5">
                    <div className="text-4xl md:text-5xl font-black text-black tracking-tight leading-none font-mono">
                      ${oneTimeTotal}
                    </div>
                    {maintenance && (
                      <div className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-widest animate-pulse">
                        + ${MAINTENANCE_PRICE} / month Support SLA
                      </div>
                    )}
                  </div>
                  
                  <div className="text-[6.5px] font-mono text-gray-400 uppercase tracking-wider">
                    One-time licensing fee & monthly maintenance plan options
                  </div>
                </div>

                {/* Pricing Toggle selection fields */}
                <div className="space-y-3">
                  <span className="text-[7px] font-mono text-gray-400 uppercase tracking-widest block mb-2">Configure System Licensing Options</span>
                  
                  {/* Option 1: Base Core (Locked Checked) */}
                  <div className="p-4 rounded-2xl border border-gray-200 bg-white flex items-start justify-between gap-4 shadow-sm relative">
                    <div className="space-y-0.5">
                      <div className="text-xs font-mono font-bold text-black uppercase tracking-wide">Base System Core License</div>
                      <p className="text-[10px] leading-relaxed text-gray-400 font-sans font-light">
                        Full access keys, optimized performance configurations, edge analytics codes.
                      </p>
                    </div>
                    <div className="shrink-0 text-right space-y-0.5">
                      <div className="text-xs font-mono font-bold text-zinc-800">${template.basePrice}</div>
                      <span className="text-[7px] font-mono text-green-600 font-bold uppercase block tracking-wider">INCLUDED</span>
                    </div>
                  </div>

                  {/* Option 2: Design Customization checkbox */}
                  <label className="p-4 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 bg-white flex items-start justify-between gap-4 shadow-sm cursor-pointer relative group">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={customDesign}
                        onChange={(e) => setCustomDesign(e.target.checked)}
                        className="w-4 h-4 shrink-0 border-gray-300 text-red-600 focus:ring-red-500 rounded mt-0.5 accent-red-600 cursor-pointer"
                      />
                      <div className="space-y-0.5">
                        <div className="text-xs font-mono font-bold text-black uppercase tracking-wide group-hover:text-red-600 transition-colors">Design Customization</div>
                        <p className="text-[10px] leading-relaxed text-gray-500 font-sans font-light">
                          Custom layout styling modifications, unique interactive modules designed by agency engineers.
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 text-right space-y-0.5">
                      <div className="text-xs font-mono font-bold text-zinc-800">+${DESIGN_ADDON_PRICE}</div>
                      <span className={`text-[7px] font-mono font-bold uppercase block tracking-wider ${customDesign ? 'text-red-500' : 'text-gray-300'}`}>
                        {customDesign ? 'ACTIVE' : 'ADD-ON'}
                      </span>
                    </div>
                  </label>

                  {/* Option 3: Data Ingestion checkbox */}
                  <label className="p-4 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 bg-white flex items-start justify-between gap-4 shadow-sm cursor-pointer relative group">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={dataIngest}
                        onChange={(e) => setDataIngest(e.target.checked)}
                        className="w-4 h-4 shrink-0 border-gray-300 text-red-600 focus:ring-red-500 rounded mt-0.5 accent-red-600 cursor-pointer"
                      />
                      <div className="space-y-0.5">
                        <div className="text-xs font-mono font-bold text-black uppercase tracking-wide group-hover:text-red-600 transition-colors">Data & Content Ingestion</div>
                        <p className="text-[10px] leading-relaxed text-gray-500 font-sans font-light">
                          We inject and map your custom copywriting, assets, team info, database structures.
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 text-right space-y-0.5">
                      <div className="text-xs font-mono font-bold text-zinc-800">+${DATA_ADDON_PRICE}</div>
                      <span className={`text-[7px] font-mono font-bold uppercase block tracking-wider ${dataIngest ? 'text-red-500' : 'text-gray-300'}`}>
                        {dataIngest ? 'ACTIVE' : 'ADD-ON'}
                      </span>
                    </div>
                  </label>

                  {/* Option 4: Maintenance Support Plan */}
                  <label className="p-4 rounded-2xl border border-gray-200 hover:border-black transition-all duration-300 bg-white flex items-start justify-between gap-4 shadow-sm cursor-pointer relative group">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={maintenance}
                        onChange={(e) => setMaintenance(e.target.checked)}
                        className="w-4 h-4 shrink-0 border-gray-300 text-red-600 focus:ring-red-500 rounded mt-0.5 accent-red-600 cursor-pointer"
                      />
                      <div className="space-y-0.5">
                        <div className="text-xs font-mono font-bold text-black uppercase tracking-wide group-hover:text-red-600 transition-colors">SLA & Core Maintenance</div>
                        <p className="text-[10px] leading-relaxed text-gray-500 font-sans font-light">
                          Bug fixes, security updates, Next.js packages checks, SSL renewals, priority support lines.
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 text-right space-y-0.5">
                      <div className="text-xs font-mono font-bold text-red-600">${MAINTENANCE_PRICE}/mo</div>
                      <span className={`text-[7px] font-mono font-bold uppercase block tracking-wider ${maintenance ? 'text-red-500' : 'text-gray-300'}`}>
                        {maintenance ? 'ACTIVE' : 'ADD-ON'}
                      </span>
                    </div>
                  </label>

                </div>

              </div>

              {/* Bottom primary dispatch button */}
              <div className="mt-8 z-10 w-full">
                <button
                  onClick={() => alert(`Initiating provisioning keys for: ${template.name}\nTotal Price: $${oneTimeTotal}${maintenance ? ` + $${MAINTENANCE_PRICE}/mo` : ''}`)}
                  className="w-full py-3.5 rounded-xl bg-black text-white font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-red-600 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md text-center"
                >
                  PROCEED TO PROVISION SYSTEM &rarr;
                </button>
              </div>

            </div>
          </div>

        </div>

      </Container>
    </main>
  );
}
