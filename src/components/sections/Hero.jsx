'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Terminal, Cpu, Database, Globe, Zap, Shield, Sparkles, MessageSquare, Bot, MessageCircle, BarChart, Users, Settings } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const inputsList = [
  { id: 'whatsapp', label: 'WhatsApp API', icon: MessageSquare, desc: 'Capture active chats & inquiries automatically.' },
  { id: 'web', label: 'Web Leads', icon: Globe, desc: 'Capture custom web form traffic & qualified entries.' },
  { id: 'api', label: 'Inbound APIs', icon: Terminal, desc: 'Accept secure developer webhook data payloads.' }
];

const processList = [
  { id: 'chatbot', label: 'AI Support Agent', icon: Bot, desc: 'Deploy LLM agents to converse and answer queries.' },
  { id: 'qualifier', label: 'Lead Qualifier', icon: Cpu, desc: 'Filter, score, and qualify data using custom rules.' },
  { id: 'sync', label: 'Database Sync', icon: Database, desc: 'Map, format, and structure clean records in SQL.' }
];

const outputsList = [
  { id: 'slack', label: 'Slack Alerts', icon: MessageCircle, desc: 'Send glowing instant notifications to team channels.' },
  { id: 'dashboard', label: 'KPI Dashboard', icon: BarChart, desc: 'Feed real-time business visibility performance charts.' },
  { id: 'portal', label: 'Client Portal', icon: Users, desc: 'Instantly sync credentials and sync onboarding portals.' }
];

export default function Hero() {
  const [selectedInput, setSelectedInput] = useState('whatsapp');
  const [selectedProcess, setSelectedProcess] = useState('qualifier');
  const [selectedOutput, setSelectedOutput] = useState('slack');
  
  const [hoveredDescription, setHoveredDescription] = useState(null);
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getActiveText = () => {
    const inputObj = inputsList.find(i => i.id === selectedInput);
    const procObj = processList.find(p => p.id === selectedProcess);
    const outObj = outputsList.find(o => o.id === selectedOutput);
    return `${inputObj.label} ➔ ${procObj.label} ➔ ${outObj.label}`;
  };

  return (
    <section className="relative min-h-screen bg-white text-black flex flex-col items-center justify-center overflow-hidden select-none pt-28 pb-16">
      
      {/* Background Mesh */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      
      {/* Glowing Crimson Orbs */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[35%] bg-red-100/40 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[5%] left-[10%] w-72 h-72 bg-red-50/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Huge Watermarked Background Text */}
      <div className="absolute inset-x-0 top-[14%] sm:top-[16%] md:top-[12%] flex justify-center z-0 pointer-events-none select-none">
        <div
          className="w-full text-center text-[24vw] sm:text-[18vw] font-black tracking-tighter leading-none opacity-[0.03]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          ARTIFX
        </div>
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-red-500/10" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-red-500/10" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-red-500/10" />
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-red-500/10" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-red-500/10" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-red-500/10" />
      </div>

      <Container className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center space-y-10">
        
        {/* Status tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-50/80 border border-red-200 rounded-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-600">
            Interactive System sandbox // build yours
          </span>
        </motion.div>

        {/* Headline */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] uppercase max-w-3xl mx-auto"
          >
            We Build Digital{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-black">
              Systems
            </span>{' '}
            That Scale.
          </motion.h1>
          <p className="text-[9px] sm:text-[10px] font-mono text-gray-400 uppercase tracking-widest max-w-4xl mx-auto">
            Toggle the controllers below to configure and simulate your custom operational system in real-time.
          </p>
        </div>

        {/* THE MASTER COCKPIT: Main Gamified Interactive Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full border border-gray-200 bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-2xl shadow-black/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          
          {/* Left Column: Interactive Controller Interface (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left relative z-10">
            
            {/* Step 1: Inputs Selector */}
            <div className="space-y-2">
              <span className="text-[9px] font-mono text-red-600 font-bold uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                Step 01 // Select Input Channel
              </span>
              <div className="grid grid-cols-3 gap-2">
                {inputsList.map((item) => {
                  const isSelected = selectedInput === item.id;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedInput(item.id)}
                      onMouseEnter={() => setHoveredDescription(item.desc)}
                      onMouseLeave={() => setHoveredDescription(null)}
                      className={`flex flex-col items-center gap-1.5 p-3 border transition-all duration-300 rounded-xl focus:outline-none ${
                        isSelected
                          ? 'bg-black text-white border-black scale-102 shadow-md shadow-black/5 font-semibold'
                          : 'bg-gray-50/50 text-gray-400 hover:text-black hover:border-gray-300 border-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-[9px] font-mono uppercase tracking-wider text-center">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Processing Systems Selector */}
            <div className="space-y-2">
              <span className="text-[9px] font-mono text-red-600 font-bold uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                Step 02 // Select Automation Process
              </span>
              <div className="grid grid-cols-3 gap-2">
                {processList.map((item) => {
                  const isSelected = selectedProcess === item.id;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedProcess(item.id)}
                      onMouseEnter={() => setHoveredDescription(item.desc)}
                      onMouseLeave={() => setHoveredDescription(null)}
                      className={`flex flex-col items-center gap-1.5 p-3 border transition-all duration-300 rounded-xl focus:outline-none ${
                        isSelected
                          ? 'bg-black text-white border-black scale-102 shadow-md shadow-black/5 font-semibold'
                          : 'bg-gray-50/50 text-gray-400 hover:text-black hover:border-gray-300 border-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-[9px] font-mono uppercase tracking-wider text-center">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Outputs Selector */}
            <div className="space-y-2">
              <span className="text-[9px] font-mono text-red-600 font-bold uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                Step 03 // Select Target Output
              </span>
              <div className="grid grid-cols-3 gap-2">
                {outputsList.map((item) => {
                  const isSelected = selectedOutput === item.id;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedOutput(item.id)}
                      onMouseEnter={() => setHoveredDescription(item.desc)}
                      onMouseLeave={() => setHoveredDescription(null)}
                      className={`flex flex-col items-center gap-1.5 p-3 border transition-all duration-300 rounded-xl focus:outline-none ${
                        isSelected
                          ? 'bg-black text-white border-black scale-102 shadow-md shadow-black/5 font-semibold'
                          : 'bg-gray-50/50 text-gray-400 hover:text-black hover:border-gray-300 border-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-[9px] font-mono uppercase tracking-wider text-center">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live Readout Console screen */}
            <div className="bg-black/95 p-3.5 rounded-xl border border-neutral-800 font-mono text-[9px] text-neutral-400 min-h-[46px] flex flex-col justify-center select-text relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-950/20 rounded-full blur-xl pointer-events-none" />
              <div className="flex justify-between items-center text-red-500 font-bold border-b border-neutral-900 pb-1 mb-1.5 select-none">
                <span>SYSTEM COMPILATION LOG</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                  COMPILE_READY
                </span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredDescription || getActiveText()}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="leading-relaxed"
                >
                  {hoveredDescription ? (
                    <span className="text-white font-semibold">{hoveredDescription}</span>
                  ) : (
                    <span>ACTIVE ROUTE: <span className="text-red-500 font-extrabold">{getActiveText()}</span> is 100% operational.</span>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Right Column: Dynamic SVG Live Map (5 cols) */}
          <div ref={cardRef} onMouseMove={handleMouseMove} className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Ambient visual card border container */}
            <div className="w-full aspect-square border border-gray-100 bg-white p-4 rounded-2xl shadow-xl shadow-black/5 relative overflow-hidden group">
              
              {/* Internal card spotlight reflection */}
              <div
                className="absolute -inset-px transition duration-500 opacity-0 group-hover:opacity-100 pointer-events-none z-0"
                style={{
                  background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(220, 38, 38, 0.03), transparent 45%)`,
                }}
              />

              {/* Graphic SVG */}
              <svg viewBox="0 0 500 500" className="w-full h-full text-black relative z-10">
                
                {/* Visual guideline metrics grid */}
                <circle cx="250" cy="250" r="130" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                <circle cx="250" cy="250" r="70" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="3 3" fill="none" />

                {/* Connection lines from Left inputs to central core */}
                {inputsList.map((item, idx) => {
                  const isActive = selectedInput === item.id;
                  const portY = 100 + idx * 150;
                  return (
                    <g key={`in-link-${item.id}`}>
                      <path d={`M 80 ${portY} Q 165 ${(portY + 250) / 2} 250 250`} stroke={isActive ? '#dc2626' : '#e5e7eb'} strokeWidth={isActive ? '2' : '1.5'} fill="none" className="transition-colors duration-300" />
                      {isActive && (
                        <motion.path
                          d={`M 80 ${portY} Q 165 ${(portY + 250) / 2} 250 250`}
                          stroke="#dc2626"
                          strokeWidth="2"
                          fill="none"
                          initial={{ pathLength: 0.2, pathOffset: 0 }}
                          animate={{ pathOffset: [0, 1] }}
                          transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                        />
                      )}
                    </g>
                  );
                })}

                {/* Connection lines from Central core to right outputs */}
                {outputsList.map((item, idx) => {
                  const isActive = selectedOutput === item.id;
                  const portY = 100 + idx * 150;
                  return (
                    <g key={`out-link-${item.id}`}>
                      <path d={`M 250 250 Q 335 ${(portY + 250) / 2} 420 ${portY}`} stroke={isActive ? '#dc2626' : '#e5e7eb'} strokeWidth={isActive ? '2' : '1.5'} fill="none" className="transition-colors duration-300" />
                      {isActive && (
                        <motion.path
                          d={`M 250 250 Q 335 ${(portY + 250) / 2} 420 ${portY}`}
                          stroke="#dc2626"
                          strokeWidth="2"
                          fill="none"
                          initial={{ pathLength: 0.2, pathOffset: 0 }}
                          animate={{ pathOffset: [0, 1] }}
                          transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                        />
                      )}
                    </g>
                  );
                })}

                {/* Left Satellite nodes (Inputs) */}
                {inputsList.map((item, idx) => {
                  const isActive = selectedInput === item.id;
                  const portY = 100 + idx * 150;
                  const Icon = item.icon;
                  return (
                    <motion.g
                      key={`in-node-${item.id}`}
                      onClick={() => setSelectedInput(item.id)}
                      whileHover={{ scale: 1.05 }}
                      className="cursor-pointer"
                    >
                      <circle cx="80" cy={portY} r="16" fill="#ffffff" stroke={isActive ? '#dc2626' : '#e5e7eb'} strokeWidth="1.5" className="transition-colors duration-300" />
                      <circle cx="80" cy={portY} r="6" fill={isActive ? '#dc2626' : '#111111'} className="transition-colors duration-300" />
                      {isActive && (
                        <motion.circle cx="80" cy={portY} r="16" fill="none" stroke="#ef4444" strokeWidth="1"
                          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                          transition={{ repeat: Infinity, duration: 2.2 }}
                        />
                      )}
                      <text x="80" y={portY + 28} textAnchor="middle" className="font-mono text-[8px] font-bold fill-gray-400">{item.id.toUpperCase()}</text>
                    </motion.g>
                  );
                })}

                {/* Right Satellite nodes (Outputs) */}
                {outputsList.map((item, idx) => {
                  const isActive = selectedOutput === item.id;
                  const portY = 100 + idx * 150;
                  return (
                    <motion.g
                      key={`out-node-${item.id}`}
                      onClick={() => setSelectedOutput(item.id)}
                      whileHover={{ scale: 1.05 }}
                      className="cursor-pointer"
                    >
                      <circle cx="420" cy={portY} r="16" fill="#ffffff" stroke={isActive ? '#dc2626' : '#e5e7eb'} strokeWidth="1.5" className="transition-colors duration-300" />
                      <circle cx="420" cy={portY} r="6" fill={isActive ? '#dc2626' : '#111111'} className="transition-colors duration-300" />
                      {isActive && (
                        <motion.circle cx="420" cy={portY} r="16" fill="none" stroke="#ef4444" strokeWidth="1"
                          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                          transition={{ repeat: Infinity, duration: 2.2 }}
                        />
                      )}
                      <text x="420" y={portY + 28} textAnchor="middle" className="font-mono text-[8px] font-bold fill-gray-400">{item.id.toUpperCase()}</text>
                    </motion.g>
                  );
                })}

                {/* Central CPU Core Hub */}
                <g className="cursor-pointer">
                  {/* Pulsing orbit waves */}
                  <motion.circle cx="250" cy="250" r="50" fill="none" stroke="#fee2e2" strokeWidth="1.5"
                    animate={{ r: [50, 62, 50] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  />
                  <circle cx="250" cy="250" r="20" fill="#111111" />
                  
                  {/* Rotating plates inside center core representing active calculations */}
                  <motion.circle cx="250" cy="250" r="20" fill="none" stroke="#dc2626" strokeWidth="1" strokeDasharray="5 3"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    style={{ transformOrigin: "250px 250px" }}
                  />

                  {/* Pulsing Core Red light */}
                  <motion.circle cx="250" cy="250" r="8" fill="#dc2626"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  />
                  <text x="250" y="308" textAnchor="middle" className="font-mono text-[9px] font-black fill-red-600 tracking-widest">ARTIFX CORE</text>
                </g>
              </svg>
            </div>
          </div>

        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-2 w-full max-w-2xl"
        >
          <Button
            variant="custom"
            size="lg"
            href={`/contact?input=${selectedInput}&process=${selectedProcess}&output=${selectedOutput}`}
            className="w-full sm:w-auto bg-red-600 text-white hover:bg-red-500 border-0 shadow-lg shadow-red-500/20 text-[10px] sm:text-xs font-mono uppercase tracking-widest px-8 py-5 rounded-xl flex items-center justify-center gap-2 group"
          >
            Deploy This Custom System &rarr;
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="/contact"
            className="w-full sm:w-auto text-xs font-mono uppercase tracking-widest px-8 py-5 rounded-xl flex justify-center"
          >
            Request Free System Audit
          </Button>
        </motion.div>

        {/* Bottom Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-12 pt-8 font-mono border-t border-gray-100 w-full"
        >
          {[
            { label: 'Systems Engineered', value: '50+' },
            { label: 'Avg. Efficiency Gain', value: '78%' },
            { label: 'Client Retention', value: '96%' },
            { label: 'API Integrations', value: '30+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl font-black text-black">{stat.value}</div>
              <div className="text-[9px] text-gray-400 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </Container>
    </section>
  );
}
