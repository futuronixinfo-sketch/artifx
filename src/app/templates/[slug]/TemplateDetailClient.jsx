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

  const DESIGN_ADDON_PRICE = 199;
  const DATA_ADDON_PRICE = 149;
  const MAINTENANCE_PRICE = 49;

  const oneTimeTotal =
    template.basePrice +
    (customDesign ? DESIGN_ADDON_PRICE : 0) +
    (dataIngest ? DATA_ADDON_PRICE : 0);

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-black pt-32 pb-24 select-none">

      <Container className="relative z-10 max-w-6xl">

        {/* Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 px-3 py-1 border-2 border-black bg-white text-black font-mono text-[10px] font-black uppercase tracking-wider shadow-[3px_3px_0_#0A0A0A] hover:shadow-[1px_1px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            &larr; Back to system templates
          </Link>
        </div>

        {/* Dynamic Detail Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16 pb-8 border-b-2 border-black">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFE500] border-2 border-black shadow-[3px_3px_0_#0A0A0A]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-black opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 bg-black"></span>
              </span>
              <span className="text-[9px] font-mono font-black uppercase tracking-widest text-black">
                [ BLUEPRINT: {template.slug.toUpperCase()} // active core ]
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black uppercase leading-none">
              {template.name}
            </h1>

            <p className="text-xs text-gray-600 max-w-xl leading-relaxed font-mono font-light">
              /* {template.description} */
            </p>
          </div>

          {/* Telemetry metadata cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto shrink-0 font-mono">
            {[
              { label: 'Speed score', value: template.speed, cls: 'text-black' },
              { label: 'SEO rating', value: template.seo, cls: 'text-green-600' },
              { label: 'Deployment', value: template.engine.split(' ')[0], cls: 'text-black' },
              { label: 'Core version', value: template.version, cls: 'text-red-600' },
            ].map(({ label, value, cls }) => (
              <div key={label} className="bg-white border-2 border-black shadow-[3px_3px_0_#0A0A0A] p-4 min-w-28 text-center">
                <div className="text-[7px] text-gray-500 uppercase tracking-widest leading-none mb-1">{label}</div>
                <div className={`text-sm font-black uppercase ${cls}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* MAIN SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* LEFT: Preview Gallery & Specifications */}
          <div className="lg:col-span-7 space-y-10">

            {/* Image Gallery */}
            <div className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] p-3 relative overflow-hidden">

              {/* Main image */}
              <div className="overflow-hidden aspect-video border-2 border-black relative group/screen bg-[#FAFAF8]">
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

                {/* Navigation chevrons */}
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveImageIndex((prev) =>
                        prev === 0 ? template.images.length - 1 : prev - 1
                      );
                    }}
                    className="w-8 h-8 border-2 border-black bg-white text-black flex items-center justify-center shadow-[2px_2px_0_#0A0A0A] hover:bg-[#FFE500] transition-all duration-100 pointer-events-auto font-mono text-[10px] font-black focus:outline-none"
                  >
                    &larr;
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveImageIndex((prev) =>
                        prev === template.images.length - 1 ? 0 : prev + 1
                      );
                    }}
                    className="w-8 h-8 border-2 border-black bg-white text-black flex items-center justify-center shadow-[2px_2px_0_#0A0A0A] hover:bg-[#FFE500] transition-all duration-100 pointer-events-auto font-mono text-[10px] font-black focus:outline-none"
                  >
                    &rarr;
                  </button>
                </div>

                {/* View index pill */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black text-white font-mono text-[8px] tracking-widest uppercase z-20 select-none border border-black">
                  VIEW {activeImageIndex + 1} / {template.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                {template.images.map((img, index) => {
                  const isActive = index === activeImageIndex;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`border-2 aspect-16/10 overflow-hidden bg-[#FAFAF8] p-1 transition-all duration-100 relative focus:outline-none ${
                        isActive
                          ? 'border-black shadow-[3px_3px_0_#0A0A0A]'
                          : 'border-gray-300 hover:border-black'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${template.name} thumbnail ${index + 1}`}
                        className={`w-full h-full object-cover transition-opacity duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-50'
                        }`}
                      />
                      {isActive && (
                        <motion.div
                          layoutId="activeThumbnailBorder"
                          className="absolute inset-0 border-2 border-black pointer-events-none"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Specifications */}
            <div className="space-y-4">
              <h3 className="text-lg font-black text-black uppercase tracking-tight flex items-center gap-2 border-b-2 border-black pb-2">
                <Layers className="w-4 h-4 text-red-600 shrink-0" />
                Architectural Specifications
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-sans font-light">
                {template.longDescription}
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-4">
              <span className="text-[8px] font-mono text-gray-500 font-black uppercase tracking-widest block">System Core Features</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {template.features.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-gray-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                    <span className="font-light font-mono leading-normal">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modules */}
            <div className="space-y-4">
              <span className="text-[8px] font-mono text-gray-500 font-black uppercase tracking-widest block">Core Integration Modules</span>
              <div className="space-y-2">
                {template.modules.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 border-2 border-black bg-white font-mono text-[9px] text-gray-600 shadow-[2px_2px_0_#0A0A0A]">
                    <Terminal className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    <span>SYS_CORE_MODULE_0{i + 1}: {item.toUpperCase()} // ACTIVE</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Pricing Calculator */}
          <div className="lg:col-span-5 flex">
            <div className="w-full bg-white border-2 border-black shadow-[6px_6px_0_#0A0A0A] p-6 md:p-8 flex flex-col justify-between relative overflow-hidden min-h-125">

              <div className="space-y-6">

                {/* Header */}
                <div className="flex justify-between items-center border-b-2 border-black pb-3">
                  <span className="text-[9px] font-mono text-red-600 font-black uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-red-600 animate-pulse" />
                    System Price Estimator
                  </span>
                  <span className="text-[7px] font-mono text-gray-500 font-black">CALC_V1.0</span>
                </div>

                {/* Price readout */}
                <div className="bg-[#FAFAF8] border-2 border-black p-5 text-center space-y-2 shadow-[3px_3px_0_#0A0A0A]">
                  <div className="text-[8px] font-mono text-gray-500 font-black uppercase tracking-widest">Calculated Core Price</div>

                  <div className="space-y-1.5">
                    <div className="text-4xl md:text-5xl font-black text-black tracking-tight leading-none font-mono">
                      ${oneTimeTotal}
                    </div>
                    {maintenance && (
                      <div className="text-[10px] font-mono font-black text-red-600 uppercase tracking-widest animate-pulse">
                        + ${MAINTENANCE_PRICE} / month Support SLA
                      </div>
                    )}
                  </div>

                  <div className="text-[6.5px] font-mono text-gray-500 uppercase tracking-wider">
                    One-time licensing fee & monthly maintenance plan options
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-3">
                  <span className="text-[7px] font-mono text-gray-500 font-black uppercase tracking-widest block mb-2">Configure System Licensing Options</span>

                  {/* Base Core — locked */}
                  <div className="p-4 border-2 border-black bg-[#FAFAF8] flex items-start justify-between gap-4 shadow-[2px_2px_0_#0A0A0A]">
                    <div className="space-y-0.5">
                      <div className="text-xs font-mono font-black text-black uppercase tracking-wide">Base System Core License</div>
                      <p className="text-[10px] leading-relaxed text-gray-500 font-sans font-light">
                        Full access keys, optimized performance configurations, edge analytics codes.
                      </p>
                    </div>
                    <div className="shrink-0 text-right space-y-0.5">
                      <div className="text-xs font-mono font-black text-black">${template.basePrice}</div>
                      <span className="text-[7px] font-mono text-green-600 font-black uppercase block tracking-wider">INCLUDED</span>
                    </div>
                  </div>

                  {/* Design Customization */}
                  <label className="p-4 border-2 border-black bg-white hover:border-black hover:bg-[#FAFAF8] hover:shadow-[2px_2px_0_#0A0A0A] transition-all duration-100 flex items-start justify-between gap-4 cursor-pointer group">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={customDesign}
                        onChange={(e) => setCustomDesign(e.target.checked)}
                        className="w-4 h-4 shrink-0 border-2 border-black text-black focus:ring-black mt-0.5 accent-black cursor-pointer"
                      />
                      <div className="space-y-0.5">
                        <div className="text-xs font-mono font-black text-black uppercase tracking-wide group-hover:text-red-600 transition-colors duration-100">Design Customization</div>
                        <p className="text-[10px] leading-relaxed text-gray-500 font-sans font-light">
                          Custom layout styling modifications, unique interactive modules designed by agency engineers.
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 text-right space-y-0.5">
                      <div className="text-xs font-mono font-black text-black">+${DESIGN_ADDON_PRICE}</div>
                      <span className={`text-[7px] font-mono font-black uppercase block tracking-wider ${customDesign ? 'text-red-600' : 'text-gray-400'}`}>
                        {customDesign ? 'ACTIVE' : 'ADD-ON'}
                      </span>
                    </div>
                  </label>

                  {/* Data Ingestion */}
                  <label className="p-4 border-2 border-black bg-white hover:bg-[#FAFAF8] hover:shadow-[2px_2px_0_#0A0A0A] transition-all duration-100 flex items-start justify-between gap-4 cursor-pointer group">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={dataIngest}
                        onChange={(e) => setDataIngest(e.target.checked)}
                        className="w-4 h-4 shrink-0 border-2 border-black text-black focus:ring-black mt-0.5 accent-black cursor-pointer"
                      />
                      <div className="space-y-0.5">
                        <div className="text-xs font-mono font-black text-black uppercase tracking-wide group-hover:text-red-600 transition-colors duration-100">Data & Content Ingestion</div>
                        <p className="text-[10px] leading-relaxed text-gray-500 font-sans font-light">
                          We inject and map your custom copywriting, assets, team info, database structures.
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 text-right space-y-0.5">
                      <div className="text-xs font-mono font-black text-black">+${DATA_ADDON_PRICE}</div>
                      <span className={`text-[7px] font-mono font-black uppercase block tracking-wider ${dataIngest ? 'text-red-600' : 'text-gray-400'}`}>
                        {dataIngest ? 'ACTIVE' : 'ADD-ON'}
                      </span>
                    </div>
                  </label>

                  {/* SLA Maintenance */}
                  <label className="p-4 border-2 border-black bg-white hover:bg-[#FAFAF8] hover:shadow-[2px_2px_0_#0A0A0A] transition-all duration-100 flex items-start justify-between gap-4 cursor-pointer group">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={maintenance}
                        onChange={(e) => setMaintenance(e.target.checked)}
                        className="w-4 h-4 shrink-0 border-2 border-black text-black focus:ring-black mt-0.5 accent-black cursor-pointer"
                      />
                      <div className="space-y-0.5">
                        <div className="text-xs font-mono font-black text-black uppercase tracking-wide group-hover:text-red-600 transition-colors duration-100">SLA & Core Maintenance</div>
                        <p className="text-[10px] leading-relaxed text-gray-500 font-sans font-light">
                          Bug fixes, security updates, Next.js packages checks, SSL renewals, priority support lines.
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0 text-right space-y-0.5">
                      <div className="text-xs font-mono font-black text-red-600">${MAINTENANCE_PRICE}/mo</div>
                      <span className={`text-[7px] font-mono font-black uppercase block tracking-wider ${maintenance ? 'text-red-600' : 'text-gray-400'}`}>
                        {maintenance ? 'ACTIVE' : 'ADD-ON'}
                      </span>
                    </div>
                  </label>

                </div>

              </div>

              {/* Primary CTA */}
              <div className="mt-8 w-full">
                <button
                  onClick={() =>
                    alert(
                      `Initiating provisioning keys for: ${template.name}\nTotal Price: $${oneTimeTotal}${maintenance ? ` + $${MAINTENANCE_PRICE}/mo` : ''}`
                    )
                  }
                  className="w-full py-3.5 border-2 border-black bg-[#FFE500] text-black font-mono text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100 text-center"
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
