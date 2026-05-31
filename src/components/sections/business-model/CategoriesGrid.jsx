'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { categories } from '@/data/business-models';
import { 
  ArrowRight, Flame, Home, Activity, ShoppingBag, 
  Wrench, Utensils, Truck, GraduationCap, CreditCard, 
  Compass, Car, Cpu, Palette, Plus, Sparkles 
} from 'lucide-react';

const iconMap = {
  'popular': Flame,
  'real-estate': Home,
  'healthcare': Activity,
  'ecommerce': ShoppingBag,
  'home-services': Wrench,
  'food': Utensils,
  'logistics': Truck,
  'education': GraduationCap,
  'fintech': CreditCard,
  'travel': Compass,
  'automobile': Car,
  'ai-saas': Cpu,
  'creator-economy': Palette
};

const spanMap = {
  'popular': 'col-span-1 md:col-span-2',
  'fintech': 'col-span-1 md:col-span-2',
  'ai-saas': 'col-span-1 md:col-span-2',
};

function getCardTelemetry(catId) {
  switch (catId) {
    case 'popular':
      return { system: 'GLOBAL_SYS', engine: 'V8_RUNTIME', protocol: 'TLS_1.3' };
    case 'real-estate':
      return { system: 'GEO_SPATIAL', engine: 'GIS_PERSIST', protocol: 'AES_256' };
    case 'healthcare':
      return { system: 'HL7_COMPLIANT', engine: 'MED_CORE', protocol: 'HIPAA_SEC' };
    case 'ecommerce':
      return { system: 'OMS_FLOW', engine: 'CART_ENGINE', protocol: 'PCI_DSS_v4' };
    case 'home-services':
      return { system: 'MATCH_ALGO', engine: 'ROUTER_v3', protocol: 'HMAC_SHA' };
    case 'food':
      return { system: 'KDS_CONNECT', engine: 'TICKET_MGMT', protocol: 'MD5_SALT' };
    case 'logistics':
      return { system: 'ROUTE_OPTI', engine: 'OVR_MAPS', protocol: 'SHA_256' };
    case 'education':
      return { system: 'LMS_STREAM', engine: 'CORE_ACAD', protocol: 'OAUTH_2' };
    case 'fintech':
      return { system: 'LEDGER_ESCROW', engine: 'DOUBLE_ENTRY', protocol: 'ISO_20022' };
    case 'travel':
      return { system: 'GDS_API', engine: 'FLIGHT_CORE', protocol: 'SSL_V3' };
    case 'automobile':
      return { system: 'FLEET_SYS', engine: 'TELEMETRY_X', protocol: 'CAN_BUS' };
    case 'ai-saas':
      return { system: 'NEURAL_INTELL', engine: 'COGNITIVE_API', protocol: 'SOC_2_TYPE2' };
    case 'creator-economy':
      return { system: 'MEDIA_CDN', engine: 'RENDER_V2', protocol: 'JWT_SEC' };
    default:
      return { system: 'BLUEPRINT', engine: 'SYSTEMS_CORE', protocol: 'TLS_1.3' };
  }
}

function BlueprintSVG({ categoryId }) {
  switch (categoryId) {
    case 'popular':
      return (
        <svg className="w-full h-full text-red-500/10 group-hover:text-red-500/25 transition-colors duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="50" cy="50" r="40" strokeDasharray="3 3" className="animate-[spin_40s_linear_infinite]" />
          <circle cx="50" cy="50" r="25" strokeDasharray="2 2" className="animate-[spin_20s_linear_infinite_reverse]" />
          <circle cx="50" cy="50" r="10" />
          <line x1="50" y1="10" x2="50" y2="90" strokeDasharray="1 4" />
          <line x1="10" y1="50" x2="90" y2="50" strokeDasharray="1 4" />
          <circle cx="50" cy="10" r="2" fill="currentColor" className="animate-ping" />
          <circle cx="90" cy="50" r="2" fill="currentColor" className="animate-ping [animation-delay:0.5s]" />
          <circle cx="50" cy="90" r="2" fill="currentColor" className="animate-ping [animation-delay:1s]" />
          <circle cx="10" cy="50" r="2" fill="currentColor" className="animate-ping [animation-delay:1.5s]" />
        </svg>
      );
    case 'real-estate':
      return (
        <svg className="w-full h-full text-red-500/10 group-hover:text-red-500/25 transition-colors duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M10,30 L50,10 L90,30 L50,50 Z" strokeDasharray="2 2" />
          <path d="M10,60 L50,40 L90,60 L50,80 Z" strokeDasharray="2 2" />
          <line x1="10" y1="30" x2="10" y2="60" />
          <line x1="50" y1="10" x2="50" y2="40" />
          <line x1="90" y1="30" x2="90" y2="60" />
          <line x1="50" y1="50" x2="50" y2="80" />
          <path d="M30,45 L50,35 L70,45 L50,55 Z" fill="currentColor" fillOpacity="0.05" className="group-hover:fill-opacity-20 transition-all duration-500" />
          <line x1="30" y1="45" x2="30" y2="65" />
          <line x1="50" y1="55" x2="50" y2="75" />
          <line x1="70" y1="45" x2="70" y2="65" />
          <path d="M30,65 L50,75 L70,65" />
        </svg>
      );
    case 'healthcare':
      return (
        <svg className="w-full h-full text-red-500/10 group-hover:text-red-500/25 transition-colors duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M10,0 V100 M30,0 V100 M50,0 V100 M70,0 V100 M90,0 V100 M0,20 H100 M0,40 H100 M0,60 H100 M0,80 H100" strokeDasharray="1 8" />
          <path d="M0,50 L35,50 L40,30 L45,70 L50,45 L53,52 L56,50 L100,50" 
                strokeDasharray="200" 
                strokeDashoffset="200"
                className="group-hover:[stroke-dashoffset:0] transition-all duration-[1.5s] ease-in-out" 
                strokeWidth="1.5" />
          <circle cx="45" cy="70" r="3" fill="currentColor" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" />
        </svg>
      );
    case 'ecommerce':
      return (
        <svg className="w-full h-full text-red-500/10 group-hover:text-red-500/25 transition-colors duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M15,20 L85,20 L70,50 L30,50 Z" strokeDasharray="2 2" />
          <path d="M35,60 L65,60 L55,85 L45,85 Z" />
          <line x1="50" y1="20" x2="50" y2="90" strokeDasharray="2 4" />
          <circle cx="50" cy="35" r="2.5" fill="currentColor" className="animate-bounce" />
          <circle cx="50" cy="72" r="2" fill="currentColor" className="animate-ping [animation-delay:0.3s]" />
        </svg>
      );
    case 'home-services':
      return (
        <svg className="w-full h-full text-red-500/10 group-hover:text-red-500/25 transition-colors duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="35" cy="40" r="20" strokeDasharray="4 2" className="animate-[spin_12s_linear_infinite]" />
          <circle cx="35" cy="40" r="10" />
          <circle cx="65" cy="65" r="16" strokeDasharray="4 2" className="animate-[spin_10s_linear_infinite_reverse]" />
          <circle cx="65" cy="65" r="8" />
          <line x1="35" y1="40" x2="65" y2="65" strokeDasharray="2 6" />
        </svg>
      );
    case 'food':
      return (
        <svg className="w-full h-full text-red-500/10 group-hover:text-red-500/25 transition-colors duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="50" cy="50" r="30" />
          <g className="animate-[spin_15s_linear_infinite]">
            <circle cx="50" cy="20" r="3" fill="currentColor" />
            <circle cx="50" cy="80" r="3" fill="currentColor" />
            <line x1="50" y1="20" x2="50" y2="80" strokeDasharray="2 4" />
          </g>
          <g className="animate-[spin_10s_linear_infinite_reverse]">
            <circle cx="20" cy="50" r="2.5" fill="currentColor" />
            <circle cx="80" cy="50" r="2.5" fill="currentColor" />
            <line x1="20" y1="50" x2="80" y2="50" strokeDasharray="2 4" />
          </g>
          <circle cx="50" cy="50" r="6" fill="currentColor" fillOpacity="0.1" />
        </svg>
      );
    case 'logistics':
      return (
        <svg className="w-full h-full text-red-500/10 group-hover:text-red-500/25 transition-colors duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="50" cy="50" r="4" fill="currentColor" />
          <circle cx="20" cy="30" r="2.5" fill="currentColor" />
          <circle cx="80" cy="30" r="2.5" fill="currentColor" />
          <circle cx="15" cy="70" r="2.5" fill="currentColor" />
          <circle cx="85" cy="70" r="2.5" fill="currentColor" />
          <circle cx="50" cy="85" r="2.5" fill="currentColor" />
          <line x1="50" y1="50" x2="20" y2="30" />
          <line x1="50" y1="50" x2="80" y2="30" />
          <line x1="50" y1="50" x2="15" y2="70" />
          <line x1="50" y1="50" x2="85" y2="70" />
          <line x1="50" y1="50" x2="50" y2="85" />
          <circle cx="50" cy="50" r="25" strokeDasharray="2 8" className="animate-[ping_3s_ease-in-out_infinite]" />
        </svg>
      );
    case 'education':
      return (
        <svg className="w-full h-full text-red-500/10 group-hover:text-red-500/25 transition-colors duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <line x1="50" y1="80" x2="50" y2="50" />
          <line x1="50" y1="50" x2="25" y2="30" />
          <line x1="50" y1="50" x2="75" y2="30" />
          <line x1="25" y1="30" x2="15" y2="15" />
          <line x1="25" y1="30" x2="35" y2="15" />
          <line x1="75" y1="30" x2="65" y2="15" />
          <line x1="75" y1="30" x2="85" y2="15" />
          <circle cx="50" cy="50" r="2.5" fill="currentColor" />
          <circle cx="25" cy="30" r="2.5" fill="currentColor" />
          <circle cx="75" cy="30" r="2.5" fill="currentColor" />
          <circle cx="15" cy="15" r="2.5" fill="currentColor" className="animate-pulse" />
          <circle cx="35" cy="15" r="2" fill="currentColor" className="animate-pulse [animation-delay:0.3s]" />
          <circle cx="65" cy="15" r="2" fill="currentColor" className="animate-pulse [animation-delay:0.6s]" />
          <circle cx="85" cy="15" r="2.5" fill="currentColor" className="animate-pulse [animation-delay:0.9s]" />
        </svg>
      );
    case 'fintech':
      return (
        <svg className="w-full h-full text-red-500/10 group-hover:text-red-500/25 transition-colors duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <line x1="5" y1="80" x2="95" y2="80" />
          <line x1="5" y1="80" x2="5" y2="20" strokeDasharray="1 4" />
          <g>
            <line x1="20" y1="70" x2="20" y2="40" strokeWidth="2" stroke="currentColor" />
            <line x1="20" y1="75" x2="20" y2="35" />
          </g>
          <g>
            <line x1="40" y1="60" x2="40" y2="30" strokeWidth="2" stroke="currentColor" />
            <line x1="40" y1="65" x2="40" y2="20" />
          </g>
          <g>
            <line x1="60" y1="50" x2="60" y2="65" strokeWidth="2" stroke="currentColor" />
            <line x1="60" y1="40" x2="60" y2="70" />
          </g>
          <g>
            <line x1="80" y1="35" x2="80" y2="15" strokeWidth="2" stroke="currentColor" />
            <line x1="80" y1="45" x2="80" y2="10" />
          </g>
          <path d="M20,60 Q50,30 80,18" strokeDasharray="2 2" className="group-hover:stroke-red-500/50 transition-colors" />
        </svg>
      );
    case 'travel':
      return (
        <svg className="w-full h-full text-red-500/10 group-hover:text-red-500/25 transition-colors duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="50" cy="50" r="35" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="20" />
          <line x1="50" y1="50" x2="80" y2="30" className="animate-[spin_6s_linear_infinite]" strokeWidth="1.5" />
          <circle cx="80" cy="30" r="1.5" fill="currentColor" className="animate-ping" />
        </svg>
      );
    case 'automobile':
      return (
        <svg className="w-full h-full text-red-500/10 group-hover:text-red-500/25 transition-colors duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M10,25 C30,25 40,15 90,15" strokeDasharray="3 3" />
          <path d="M10,50 C35,50 45,40 90,40" strokeWidth="1.5" />
          <path d="M10,75 C30,75 40,65 90,65" strokeDasharray="3 3" />
          <circle cx="30" cy="25" r="1.5" fill="currentColor" className="animate-[ping_2s_linear_infinite]" />
          <circle cx="60" cy="40" r="2" fill="currentColor" className="animate-[ping_1.5s_linear_infinite_reverse]" />
          <circle cx="45" cy="75" r="1.5" fill="currentColor" className="animate-[ping_2.5s_linear_infinite]" />
        </svg>
      );
    case 'ai-saas':
      return (
        <svg className="w-full h-full text-red-500/10 group-hover:text-red-500/25 transition-colors duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="20" cy="25" r="3" fill="currentColor" />
          <circle cx="20" cy="50" r="3" fill="currentColor" />
          <circle cx="20" cy="75" r="3" fill="currentColor" />
          <circle cx="50" cy="20" r="3" fill="currentColor" />
          <circle cx="50" cy="40" r="3" fill="currentColor" />
          <circle cx="50" cy="60" r="3" fill="currentColor" />
          <circle cx="50" cy="80" r="3" fill="currentColor" />
          <circle cx="80" cy="35" r="3" fill="currentColor" />
          <circle cx="80" cy="65" r="3" fill="currentColor" />
          <line x1="20" y1="25" x2="50" y2="20" />
          <line x1="20" y1="25" x2="50" y2="40" />
          <line x1="20" y1="50" x2="50" y2="40" />
          <line x1="20" y1="50" x2="50" y2="60" />
          <line x1="20" y1="75" x2="50" y2="60" />
          <line x1="20" y1="75" x2="50" y2="80" />
          <line x1="50" y1="20" x2="80" y2="35" />
          <line x1="50" y1="40" x2="80" y2="35" />
          <line x1="50" y1="60" x2="80" y2="65" />
          <line x1="50" y1="80" x2="80" y2="65" />
          <circle cx="50" cy="40" r="4" fill="currentColor" className="animate-ping" />
        </svg>
      );
    case 'creator-economy':
      return (
        <svg className="w-full h-full text-red-500/10 group-hover:text-red-500/25 transition-colors duration-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="20" y="20" width="60" height="60" strokeDasharray="3 3" />
          <circle cx="20" cy="20" r="3.5" fill="currentColor" />
          <circle cx="80" cy="20" r="2" fill="currentColor" />
          <circle cx="80" cy="80" r="3.5" fill="currentColor" />
          <circle cx="20" cy="80" r="2" fill="currentColor" />
          <line x1="50" y1="50" x2="30" y2="30" />
          <circle cx="30" cy="30" r="2.5" fill="currentColor" className="animate-pulse" />
          <line x1="50" y1="50" x2="70" y2="70" />
          <circle cx="70" cy="70" r="2.5" fill="currentColor" className="animate-pulse" />
          <circle cx="50" cy="50" r="4" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

export default function CategoriesGrid() {
  return (
    <section className="py-24 bg-white border-b border-gray-100 select-none">
      <Container className="max-w-6xl mx-auto">
        
        {/* CATEGORIES BLUEPRINT BENTO MATRIX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const IconComponent = iconMap[cat.id] || Sparkles;
            const spanClass = spanMap[cat.id] || 'col-span-1';
            const telemetry = getCardTelemetry(cat.id);

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04 }}
                viewport={{ once: true }}
                className={spanClass}
              >
                <Link
                  href={`/business-model/${cat.id}`}
                  className="block border border-gray-200 bg-gradient-to-br from-white via-white to-gray-50/70 p-6 rounded-3xl hover:border-black hover:shadow-2xl hover:shadow-black/5 hover:scale-[1.01] transition-all duration-500 h-full flex flex-col justify-between min-h-[250px] relative group overflow-hidden shadow-sm"
                >
                  {/* Subtle Grid inside each card */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:16px_16px] opacity-30 pointer-events-none z-0" />
                  
                  {/* Absolute Animated Schematic Overlay in background */}
                  <div className="absolute right-4 bottom-14 w-28 h-28 pointer-events-none z-0">
                    <BlueprintSVG categoryId={cat.id} />
                  </div>

                  <div className="relative z-10 space-y-4 w-full">
                    {/* Header: Bezel Icon & Sector index */}
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-2">
                        {/* High-tech Bezel Icon frame */}
                        <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 text-lg flex items-center justify-center group-hover:bg-red-50 group-hover:border-red-100 transition-colors duration-500 shrink-0">
                          <IconComponent className="w-5 h-5 text-gray-500 group-hover:text-red-600 transition-colors duration-500" />
                        </div>
                        {/* Live active tagger */}
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[7.5px] font-mono text-gray-400 font-bold uppercase tracking-widest leading-none">
                          SYS_ACTIVE
                        </span>
                      </div>

                      {/* Sector mono index tag */}
                      <span className="text-[8px] font-mono text-gray-400 font-bold uppercase tracking-widest">
                        [ SEC_0{idx + 1 < 10 ? '0' + (idx + 1) : idx + 1} ]
                      </span>
                    </div>

                    {/* Headline and tagline */}
                    <div className="space-y-1 pb-2">
                      <h3 className="text-base font-bold text-black uppercase tracking-tight group-hover:text-red-600 transition-colors duration-300">
                        {cat.name}
                      </h3>
                      <p className="text-[9px] text-gray-400 font-mono uppercase tracking-wider leading-none">
                        {cat.tagline}
                      </p>
                    </div>

                    {/* Technical Telemetry Dashboard Panel */}
                    <div className="border-t border-gray-100 pt-3 space-y-1.5 font-mono text-[7px] text-gray-400/80 group-hover:text-gray-500 transition-colors">
                      <div className="flex justify-between">
                        <span>CORE_SYSTEM:</span>
                        <span className="text-black font-semibold uppercase">{telemetry.system}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ROUTING_ENG:</span>
                        <span className="text-black font-semibold uppercase">{telemetry.engine}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>SECURITY_PROTOCOL:</span>
                        <span className="text-black font-semibold uppercase">{telemetry.protocol}</span>
                      </div>
                    </div>
                  </div>

                  {/* Telemetry footer & action details */}
                  <div className="relative z-10 flex flex-col justify-end mt-6">
                    {/* Schematic count progress bar */}
                    <div className="w-full bg-gray-100 rounded-full h-[3px] overflow-hidden mb-4 relative">
                      <div 
                        className="bg-red-500 h-full rounded-full transition-all duration-700 ease-out group-hover:bg-red-600"
                        style={{ width: `${Math.min(100, (cat.count / 25) * 100)}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Schematic count pill */}
                      <span className="px-2 py-0.5 rounded bg-red-50 text-red-600 border border-red-100 font-mono text-[8px] font-bold uppercase tracking-widest">
                        [ {cat.count} SCHEMATICS ]
                      </span>
                      
                      {/* Action trigger chevron */}
                      <span className="inline-flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors duration-300">
                        ACCESS DECK
                        <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-red-600 transition-colors shrink-0" />
                      </span>
                    </div>
                  </div>

                </Link>
              </motion.div>
            );
          })}

          {/* Row 6 Bento Slot: Custom Systems Architect CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: categories.length * 0.04 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <Link
              href="/contact"
              className="block border border-dashed border-gray-300 bg-gradient-to-br from-gray-50/50 via-white to-gray-50 p-6 rounded-3xl hover:border-black hover:shadow-2xl hover:shadow-black/5 hover:scale-[1.01] transition-all duration-500 h-full flex flex-col justify-between min-h-[250px] relative group overflow-hidden shadow-sm"
            >
              {/* Subtle Grid inside each card */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:16px_16px] opacity-30 pointer-events-none z-0" />
              
              {/* Animated Blueprint background representation */}
              <div className="absolute right-6 bottom-12 w-32 h-32 pointer-events-none z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                <svg className="w-full h-full text-black" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75">
                  <circle cx="50" cy="50" r="38" strokeDasharray="2 4" />
                  <path d="M50,12 V88 M12,50 H88 M25,25 L75,75 M25,75 L75,25" strokeDasharray="1 5" />
                  <rect x="35" y="35" width="30" height="30" strokeDasharray="2 2" className="animate-[spin_30s_linear_infinite]" />
                  <circle cx="50" cy="50" r="5" fill="currentColor" />
                  <circle cx="50" cy="12" r="3" fill="white" stroke="currentColor" />
                  <circle cx="50" cy="88" r="3" fill="white" stroke="currentColor" />
                  <circle cx="12" cy="50" r="3" fill="white" stroke="currentColor" />
                  <circle cx="88" cy="50" r="3" fill="white" stroke="currentColor" />
                </svg>
              </div>

              <div className="relative z-10 space-y-4 w-full">
                {/* Header: Bezel Icon & Info tag */}
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-black border border-black text-lg flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-colors duration-500 shrink-0">
                      <Plus className="w-5 h-5 text-white" />
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
                    <span className="text-[7.5px] font-mono text-red-600 font-bold uppercase tracking-widest leading-none">
                      CUSTOM_ENGINEERING
                    </span>
                  </div>

                  <span className="text-[8px] font-mono text-gray-400 font-bold uppercase tracking-widest">
                    [ SEC_CUSTOM ]
                  </span>
                </div>

                {/* Headline and tagline */}
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-black uppercase tracking-tight group-hover:text-red-600 transition-colors duration-300">
                    Proprietary Architecture
                  </h3>
                  <p className="text-[9px] text-gray-400 font-mono uppercase tracking-wider leading-none">
                    Can't find a matching system for your project?
                  </p>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed font-sans font-light max-w-md">
                  Collaborate directly with our engineering team to design, draft, and deploy a custom proprietary business model and workflow engine customized specifically to your enterprise operations.
                </p>
              </div>

              {/* Telemetry footer & action details */}
              <div className="relative z-10 flex flex-col justify-end mt-6">
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  {/* Schematic count pill */}
                  <span className="px-2 py-0.5 rounded bg-black text-white font-mono text-[8px] font-bold uppercase tracking-widest group-hover:bg-red-600 transition-colors">
                    [ INITIATE INGEST ]
                  </span>
                  
                  {/* Action trigger chevron */}
                  <span className="inline-flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors duration-300">
                    CONSULT ARCHITECT
                    <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-red-600 transition-colors shrink-0" />
                  </span>
                </div>
              </div>

            </Link>
          </motion.div>
        </div>

      </Container>
    </section>
  );
}

