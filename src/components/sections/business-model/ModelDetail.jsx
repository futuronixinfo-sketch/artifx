'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { 
  ArrowLeft, ArrowRight, Terminal, ShieldCheck, 
  Layers, Cpu, Award, Server, Activity, Workflow
} from 'lucide-react';

function RenderCategoryDiagram({ categoryId, modelName }) {
  // Common node styling helper
  const nodeBox = "fill-white stroke-gray-300 stroke-[1] rx-[8] ry-[8]";
  const activeNodeBox = "fill-white stroke-red-500 stroke-[1.5] rx-[8] ry-[8]";
  
  switch (categoryId) {
    case 'real-estate':
      return (
        <svg className="w-full h-full text-gray-800" viewBox="0 0 500 220" fill="none">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 2 L 10 5 L 0 8 z" fill="#ef4444" />
            </marker>
          </defs>
          <rect x="20" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="70" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">CLIENT / BUYER</text>
          
          <rect x="180" y="70" width="140" height="40" rx="8" className="fill-white stroke-red-500 stroke-[1.5]" />
          <text x="250" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">REAL ESTATE PLATFORM</text>
          <text x="250" y="104" textAnchor="middle" className="fill-gray-400 font-mono text-[6.5px] uppercase">Broker Routing Core</text>

          <rect x="380" y="25" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="430" y="49" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">VETTED BROKERS</text>

          <rect x="380" y="115" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="430" y="139" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">BUILDER INVENTORY</text>

          {/* Linking paths */}
          <path id="path1" d="M 120 90 L 180 90" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arrow)" />
          <path id="path2" d="M 320 85 L 380 45" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrow)" />
          <path id="path3" d="M 320 95 L 380 135" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrow)" />

          {/* Flow packets */}
          <circle r="3" fill="#ef4444">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 120 90 L 180 90" />
          </circle>
          <circle r="3" fill="#ef4444">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 320 85 L 380 45" />
          </circle>
        </svg>
      );
    case 'healthcare':
      return (
        <svg className="w-full h-full text-gray-800" viewBox="0 0 500 220" fill="none">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 2 L 10 5 L 0 8 z" fill="#ef4444" />
            </marker>
          </defs>
          <rect x="25" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="75" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">PATIENT CLIENT</text>
          
          <rect x="175" y="70" width="150" height="40" rx="8" className="fill-white stroke-red-500 stroke-[1.5]" />
          <text x="250" y="90" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">HIPAA SECURE GATEWAY</text>
          <text x="250" y="102" textAnchor="middle" className="fill-emerald-600 font-mono text-[6.5px] uppercase font-bold">HL7_COMPLIANT_TUNNEL</text>

          <rect x="375" y="25" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="425" y="49" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">CLINICAL DOCS DB</text>

          <rect x="375" y="115" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="425" y="139" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">TELEMED PHYSICIAN</text>

          <path d="M 125 90 L 175 90" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arrow)" />
          <path d="M 325 85 L 375 45" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrow)" />
          <path d="M 325 95 L 375 135" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrow)" />

          <circle r="3" fill="#10b981">
            <animateMotion dur="2.8s" repeatCount="indefinite" path="M 125 90 L 175 90" />
          </circle>
          <circle r="3" fill="#ef4444">
            <animateMotion dur="2.2s" repeatCount="indefinite" path="M 325 95 L 375 135" />
          </circle>
        </svg>
      );
    case 'ecommerce':
      return (
        <svg className="w-full h-full text-gray-800" viewBox="0 0 500 220" fill="none">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 2 L 10 5 L 0 8 z" fill="#ef4444" />
            </marker>
          </defs>
          <rect x="20" y="70" width="90" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="65" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">BUYER APP</text>
          
          <rect x="150" y="70" width="110" height="40" rx="8" className="fill-white stroke-red-500 stroke-[1.5]" />
          <text x="205" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">OMS CART ROUTER</text>

          <rect x="290" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="340" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">DARK STORE DEPOT</text>

          <rect x="410" y="70" width="80" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="450" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">LOGISTICS FLEET</text>

          <path d="M 110 90 L 150 90" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arrow)" />
          <path d="M 260 90 L 290 90" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrow)" />
          <path d="M 390 90 L 410 90" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrow)" />

          <circle r="3" fill="#ef4444">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 110 90 L 150 90" />
          </circle>
          <circle r="3" fill="#ef4444">
            <animateMotion dur="2s" repeatCount="indefinite" path="M 260 90 L 290 90" />
          </circle>
          <circle r="3" fill="#ef4444">
            <animateMotion dur="1.5s" repeatCount="indefinite" path="M 390 90 L 410 90" />
          </circle>
        </svg>
      );
    case 'home-services':
      return (
        <svg className="w-full h-full text-gray-800" viewBox="0 0 500 220" fill="none">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 2 L 10 5 L 0 8 z" fill="#ef4444" />
            </marker>
          </defs>
          <rect x="25" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="75" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">CLIENT BOOKING</text>
          
          <rect x="175" y="70" width="150" height="40" rx="8" className="fill-white stroke-red-500 stroke-[1.5]" />
          <text x="250" y="90" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">GEO DISPATCH ROUTER</text>
          <text x="250" y="102" textAnchor="middle" className="fill-gray-400 font-mono text-[6.5px] uppercase">Active Matching Engine</text>

          <rect x="375" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="425" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">FIELD CONTRACTOR</text>

          <path d="M 125 90 L 175 90" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arrow)" />
          <path d="M 325 90 L 375 90" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrow)" />

          <circle r="3" fill="#ef4444">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 125 90 L 175 90" />
          </circle>
          <circle r="3" fill="#ef4444">
            <animateMotion dur="2s" repeatCount="indefinite" path="M 325 90 L 375 90" />
          </circle>
        </svg>
      );
    case 'food':
      return (
        <svg className="w-full h-full text-gray-800" viewBox="0 0 500 220" fill="none">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 2 L 10 5 L 0 8 z" fill="#ef4444" />
            </marker>
          </defs>
          <rect x="20" y="70" width="90" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="65" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">CUSTOMER APP</text>
          
          <rect x="150" y="70" width="120" height="40" rx="8" className="fill-white stroke-red-500 stroke-[1.5]" />
          <text x="210" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">MENU AGGREGATOR</text>

          <rect x="300" y="70" width="90" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="345" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">CLOUD KITCHEN</text>

          <rect x="410" y="70" width="80" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="450" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">COURIER RIDER</text>

          <path d="M 110 90 L 150 90" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arrow)" />
          <path d="M 270 90 L 300 90" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrow)" />
          <path d="M 390 90 L 410 90" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrow)" />

          <circle r="3" fill="#ef4444">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 110 90 L 150 90" />
          </circle>
          <circle r="3" fill="#ef4444">
            <animateMotion dur="2s" repeatCount="indefinite" path="M 270 90 L 300 90" />
          </circle>
          <circle r="3" fill="#ef4444">
            <animateMotion dur="1.5s" repeatCount="indefinite" path="M 390 90 L 410 90" />
          </circle>
        </svg>
      );
    case 'logistics':
      return (
        <svg className="w-full h-full text-gray-800" viewBox="0 0 500 220" fill="none">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 2 L 10 5 L 0 8 z" fill="#ef4444" />
            </marker>
          </defs>
          <rect x="25" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="75" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">CARGO DISPATCH</text>
          
          <rect x="175" y="70" width="150" height="40" rx="8" className="fill-white stroke-red-500 stroke-[1.5]" />
          <text x="250" y="90" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">ROUTE OPTI NETWORK</text>
          <text x="250" y="102" textAnchor="middle" className="fill-gray-400 font-mono text-[6.5px] uppercase">Smart Hub Distributor</text>

          <rect x="375" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="425" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">FINAL DESTINATION</text>

          <path d="M 125 90 L 175 90" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arrow)" />
          <path d="M 325 90 L 375 90" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrow)" />

          <circle r="3" fill="#ef4444">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 125 90 L 175 90" />
          </circle>
          <circle r="3" fill="#ef4444">
            <animateMotion dur="2s" repeatCount="indefinite" path="M 325 90 L 375 90" />
          </circle>
        </svg>
      );
    case 'education':
      return (
        <svg className="w-full h-full text-gray-800" viewBox="0 0 500 220" fill="none">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 2 L 10 5 L 0 8 z" fill="#ef4444" />
            </marker>
          </defs>
          <rect x="25" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="75" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">STUDENT APP</text>
          
          <rect x="175" y="70" width="150" height="40" rx="8" className="fill-white stroke-red-500 stroke-[1.5]" />
          <text x="250" y="90" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">LMS VIDEO CONTROLLER</text>
          <text x="250" y="102" textAnchor="middle" className="fill-gray-400 font-mono text-[6.5px] uppercase">Live Streaming CDN</text>

          <rect x="375" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="425" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">ACADEMIC MENTOR</text>

          <path d="M 125 90 L 175 90" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arrow)" />
          <path d="M 325 90 L 375 90" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrow)" />

          <circle r="3" fill="#ef4444">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 125 90 L 175 90" />
          </circle>
          <circle r="3" fill="#ef4444">
            <animateMotion dur="2s" repeatCount="indefinite" path="M 325 90 L 375 90" />
          </circle>
        </svg>
      );
    case 'fintech':
      return (
        <svg className="w-full h-full text-gray-800" viewBox="0 0 500 220" fill="none">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 2 L 10 5 L 0 8 z" fill="#ef4444" />
            </marker>
          </defs>
          <rect x="25" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="75" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">INVESTOR / USER</text>
          
          <rect x="175" y="70" width="150" height="40" rx="8" className="fill-white stroke-red-500 stroke-[1.5]" />
          <text x="250" y="90" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">LEDGER ESCROW NETWORK</text>
          <text x="250" y="102" textAnchor="middle" className="fill-gray-400 font-mono text-[6.5px] uppercase">ISO_20022 Audit Trail</text>

          <rect x="375" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="425" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">CLEARING CORE</text>

          <path d="M 125 90 L 175 90" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arrow)" />
          <path d="M 325 90 L 375 90" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrow)" />

          <circle r="3" fill="#ef4444">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 125 90 L 175 90" />
          </circle>
          <circle r="3" fill="#ef4444">
            <animateMotion dur="2s" repeatCount="indefinite" path="M 325 90 L 375 90" />
          </circle>
        </svg>
      );
    case 'travel':
      return (
        <svg className="w-full h-full text-gray-800" viewBox="0 0 500 220" fill="none">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 2 L 10 5 L 0 8 z" fill="#ef4444" />
            </marker>
          </defs>
          <rect x="25" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="75" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">TRAVELLER PRO</text>
          
          <rect x="175" y="70" width="150" height="40" rx="8" className="fill-white stroke-red-500 stroke-[1.5]" />
          <text x="250" y="90" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">GDS ENGINE API</text>
          <text x="250" y="102" textAnchor="middle" className="fill-gray-400 font-mono text-[6.5px] uppercase">Multi-Hospitality Router</text>

          <rect x="375" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="425" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">GLOBAL INVENTORY</text>

          <path d="M 125 90 L 175 90" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arrow)" />
          <path d="M 325 90 L 375 90" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrow)" />

          <circle r="3" fill="#ef4444">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 125 90 L 175 90" />
          </circle>
          <circle r="3" fill="#ef4444">
            <animateMotion dur="2s" repeatCount="indefinite" path="M 325 90 L 375 90" />
          </circle>
        </svg>
      );
    case 'automobile':
      return (
        <svg className="w-full h-full text-gray-800" viewBox="0 0 500 220" fill="none">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 2 L 10 5 L 0 8 z" fill="#ef4444" />
            </marker>
          </defs>
          <rect x="25" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="75" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">VEHICLE TELEMATICS</text>
          
          <rect x="175" y="70" width="150" height="40" rx="8" className="fill-white stroke-red-500 stroke-[1.5]" />
          <text x="250" y="90" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">FLEET ROUTER HUB</text>
          <text x="250" y="102" textAnchor="middle" className="fill-gray-400 font-mono text-[6.5px] uppercase">Active GPS Telematics</text>

          <rect x="375" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="425" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">EV CHARGING GRID</text>

          <path d="M 125 90 L 175 90" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arrow)" />
          <path d="M 325 90 L 375 90" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrow)" />

          <circle r="3" fill="#ef4444">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 125 90 L 175 90" />
          </circle>
          <circle r="3" fill="#ef4444">
            <animateMotion dur="2s" repeatCount="indefinite" path="M 325 90 L 375 90" />
          </circle>
        </svg>
      );
    case 'ai-saas':
      return (
        <svg className="w-full h-full text-gray-800" viewBox="0 0 500 220" fill="none">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 2 L 10 5 L 0 8 z" fill="#ef4444" />
            </marker>
          </defs>
          <rect x="25" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="75" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">USER API QUERY</text>
          
          <rect x="175" y="70" width="150" height="40" rx="8" className="fill-white stroke-red-500 stroke-[1.5]" />
          <text x="250" y="90" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">COGNITIVE ORCHESTRATOR</text>
          <text x="250" y="102" textAnchor="middle" className="fill-emerald-600 font-mono text-[6.5px] uppercase font-bold">LLM_AGENT_REASONING</text>

          <rect x="375" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="425" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">VECTOR DB / ACTION</text>

          <path d="M 125 90 L 175 90" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arrow)" />
          <path d="M 325 90 L 375 90" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrow)" />

          <circle r="3" fill="#10b981">
            <animateMotion dur="2.2s" repeatCount="indefinite" path="M 125 90 L 175 90" />
          </circle>
          <circle r="3" fill="#ef4444">
            <animateMotion dur="1.8s" repeatCount="indefinite" path="M 325 90 L 375 90" />
          </circle>
        </svg>
      );
    case 'creator-economy':
      return (
        <svg className="w-full h-full text-gray-800" viewBox="0 0 500 220" fill="none">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 2 L 10 5 L 0 8 z" fill="#ef4444" />
            </marker>
          </defs>
          <rect x="25" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="75" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">SUBSCRIBER PORTAL</text>
          
          <rect x="175" y="70" width="150" height="40" rx="8" className="fill-white stroke-red-500 stroke-[1.5]" />
          <text x="250" y="90" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">MEDIA PAYWALL ENGINE</text>
          <text x="250" y="102" textAnchor="middle" className="fill-gray-400 font-mono text-[6.5px] uppercase">Direct Subscription CDN</text>

          <rect x="375" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="425" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">CREATOR WALLET</text>

          <path d="M 125 90 L 175 90" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arrow)" />
          <path d="M 325 90 L 375 90" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrow)" />

          <circle r="3" fill="#ef4444">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 125 90 L 175 90" />
          </circle>
          <circle r="3" fill="#ef4444">
            <animateMotion dur="2s" repeatCount="indefinite" path="M 325 90 L 375 90" />
          </circle>
        </svg>
      );
    default: // popular / general aggregator
      return (
        <svg className="w-full h-full text-gray-800" viewBox="0 0 500 220" fill="none">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 2 L 10 5 L 0 8 z" fill="#ef4444" />
            </marker>
          </defs>
          <rect x="25" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="75" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">DEMAND INGEST</text>
          
          <rect x="175" y="70" width="150" height="40" rx="8" className="fill-white stroke-red-500 stroke-[1.5]" />
          <text x="250" y="90" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">ORCHESTRATOR MATRIX</text>
          <text x="250" y="102" textAnchor="middle" className="fill-gray-400 font-mono text-[6.5px] uppercase">Real-Time Routing Core</text>

          <rect x="375" y="70" width="100" height="40" rx="8" className="fill-white stroke-gray-300 stroke-[1]" />
          <text x="425" y="94" textAnchor="middle" className="fill-black font-mono text-[9px] font-bold">SERVICE NODES</text>

          <path d="M 125 90 L 175 90" stroke="#d1d5db" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arrow)" />
          <path d="M 325 90 L 375 90" stroke="#ef4444" strokeWidth="1" markerEnd="url(#arrow)" />

          <circle r="3" fill="#ef4444">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 125 90 L 175 90" />
          </circle>
          <circle r="3" fill="#ef4444">
            <animateMotion dur="2s" repeatCount="indefinite" path="M 325 90 L 375 90" />
          </circle>
        </svg>
      );
  }
}

function ModelFlowDiagram({ categoryId, modelName }) {
  return (
    <div className="border border-gray-200 bg-gradient-to-br from-white via-white to-gray-50/50 p-6 rounded-3xl relative overflow-hidden shadow-sm">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:16px_16px] opacity-25 pointer-events-none z-0" />
      
      <div className="relative z-10 space-y-4">
        {/* Header telemetry details */}
        <div className="flex justify-between items-center border-b border-gray-150 pb-3 text-[8px] font-mono text-gray-400 font-bold uppercase tracking-widest">
          <span className="flex items-center gap-1.5 text-red-600">
            <Workflow className="w-3.5 h-3.5" />
            [ ARCHITECTURE_BLUEPRINT // FLOW_SCHEMATIC ]
          </span>
          <span>SYS_FAMILY: {categoryId.toUpperCase()}</span>
        </div>

        {/* Diagram Canvas */}
        <div className="w-full h-52 border border-gray-150 bg-white/80 rounded-2xl relative overflow-hidden flex items-center justify-center p-2 shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] opacity-35 pointer-events-none" />
          <RenderCategoryDiagram categoryId={categoryId} modelName={modelName} />
        </div>

        {/* Diagnostic info logs */}
        <div className="flex items-center justify-between font-mono text-[7px] text-gray-400">
          <span>PIPELINE_ROUTE: CONNECTED ➔ AUTOMATED</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            LIVE_DIAGNOSTICS // STREAMING
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ModelDetail({ model, category }) {
  const specs = [
    {
      title: "How It Works",
      content: model.howItWorks,
      icon: Cpu,
      badge: "FUNCTIONAL_LOGIC"
    },
    {
      title: "Revenue Model",
      content: model.revenueModel,
      icon: Layers,
      badge: "FINANCIAL_TELEMETRY"
    },
    {
      title: "Tech Stack",
      content: model.techStack,
      icon: Terminal,
      badge: "ENGINE_STACK"
    },
    {
      title: "Suitable For",
      content: model.suitableFor,
      icon: Award,
      badge: "SECTOR_TARGETS"
    }
  ];

  return (
    <section className="relative py-20 bg-white border-b border-gray-100 overflow-hidden select-none">
      
      {/* Soft Background Grid Guides */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

      {/* Ambient Crimson Aura Backdrop */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[20%] bg-red-50/50 rounded-full blur-[100px] pointer-events-none z-0" />

      <Container className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-10"
        >
          {/* Header Specifications Block */}
          <div className="pb-6 border-b border-gray-200/60 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-red-50 text-red-600 font-mono text-[8px] font-bold border border-red-100 uppercase tracking-widest">
                [ SYSTEM ARCHITECTURE DETAIL // {category.name.toUpperCase()} ]
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight leading-none mt-2">
              {model.name}
            </h1>

            {model.example && (
              <div className="inline-block px-3 py-1 rounded-xl bg-gray-50 border border-gray-200/60 font-mono text-[9px] text-gray-500">
                <span className="text-gray-400">PROD_MODEL_EXAMPLE:</span> {model.example.toUpperCase()}
              </div>
            )}

            <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-sans font-light mt-4">
              {model.desc}
            </p>
          </div>

          {/* DYNAMIC SYSTEM FLOW ARCHITECTURE DIAGRAM CARD */}
          <ModelFlowDiagram categoryId={category.id} modelName={model.name} />

          {/* SPECIFICATION CARD GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specs.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <div 
                  key={i}
                  className="border border-gray-200 bg-gray-50/30 backdrop-blur-sm rounded-3xl p-6 relative overflow-hidden group shadow-sm hover:border-black transition-colors duration-300 min-h-[160px] flex flex-col justify-between"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] opacity-25 pointer-events-none z-0" />
                  
                  <div className="relative z-10 space-y-3">
                    
                    {/* Header bezel */}
                    <div className="flex justify-between items-center border-b border-gray-200/60 pb-2 mb-2">
                      <span className="text-[8px] font-mono text-red-600 font-bold uppercase tracking-widest flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        {spec.title}
                      </span>
                      <span className="text-[6.5px] font-mono text-gray-400 uppercase tracking-widest">{spec.badge}</span>
                    </div>

                    <p className="text-xs text-gray-600 font-sans font-light leading-relaxed">
                      {spec.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action buttons row */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
            <Link 
              href={`/business-model/${category.id}`} 
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gray-250 bg-white text-gray-600 font-mono text-[9px] font-bold uppercase tracking-widest hover:text-black hover:border-black transition-all shadow-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
              Back to {category.name}
            </Link>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-black text-white font-mono text-[9px] font-bold uppercase tracking-widest hover:bg-red-600 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md"
            >
              Build This Model
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
          </div>

        </motion.div>
      </Container>
    </section>
  );
}

