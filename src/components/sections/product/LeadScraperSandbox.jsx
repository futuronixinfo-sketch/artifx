'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Terminal, Database, Star, MapPin,
  Check, Play, Loader2, Sparkles, Send, Mail, CheckCircle2,
  ChevronRight
} from 'lucide-react';
import Container from '@/components/ui/Container';

const MOCK_LEADS = {
  "Restaurants near Palm Jumeirah": [
    { name: "La Bella Vista Dubai", rating: 3.9, reviews: 42, website: "No Website Found", status: "CRITICAL_LEAD", location: "Palm Jumeirah Boardwalk", email: "contact@labellavista.ae" },
    { name: "The Grill Point", rating: 4.1, reviews: 118, website: "Unclaimed Listing", status: "HIGH_INTENT", location: "Palm West Beach", email: "info@grillpointdxb.com" },
    { name: "Aura Seaside Cafe", rating: 3.5, reviews: 19, website: "No Website Found", status: "CRITICAL_LEAD", location: "Marina Crescent", email: "hello@auraseaside.com" }
  ],
  "Gyms in Downtown Dubai": [
    { name: "Apex Fitness Club", rating: 4.0, reviews: 88, website: "Unclaimed Listing", status: "HIGH_INTENT", location: "Downtown Boulevard", email: "memberships@apexfitness.ae" },
    { name: "Elite Iron Gym", rating: 3.8, reviews: 31, website: "No Website Found", status: "CRITICAL_LEAD", location: "Business Bay", email: "support@eliteiron.com" },
    { name: "PowerPulse Studio", rating: 4.2, reviews: 145, website: "No Website Found", status: "HIGH_INTENT", location: "Sheikh Zayed Rd", email: "pulse@powerpulsestudio.com" }
  ],
  "Dentists near Dubai Marina": [
    { name: "Marina Dental Care", rating: 4.8, reviews: 204, website: "Active Website", status: "LOW_PRIORITY", location: "Marina Walk", email: "info@marinadental.ae" },
    { name: "Sparkle Dental Suite", rating: 3.9, reviews: 22, website: "No Website Found", status: "CRITICAL_LEAD", location: "JLT Cluster T", email: "appointments@sparkledental.ae" },
    { name: "Vertex Dental Clinic", rating: 4.1, reviews: 67, website: "Unclaimed Listing", status: "HIGH_INTENT", location: "Marina Heights", email: "contact@vertexdental.com" }
  ]
};

const PRESET_QUERIES = [
  "Restaurants near Palm Jumeirah",
  "Gyms in Downtown Dubai",
  "Dentists near Dubai Marina"
];

export default function LeadScraperSandbox() {
  const [query, setQuery] = useState(PRESET_QUERIES[0]);
  const [isScraping, setIsScraping] = useState(false);
  const [logs, setLogs] = useState([]);
  const [scrapedLeads, setScrapedLeads] = useState([]);
  const [syncStatus, setSyncStatus] = useState({});
  const [selectedLeadForPitch, setSelectedLeadForPitch] = useState(null);
  const [isGeneratingPitch, setIsGeneratingPitch] = useState(false);
  const [generatedPitch, setGeneratedPitch] = useState("");
  const consoleEndRef = useRef(null);

  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  const addLog = (text, delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${text}`]);
        resolve();
      }, delay);
    });
  };

  const handleStartScrape = async () => {
    setIsScraping(true);
    setLogs([]);
    setScrapedLeads([]);
    setSelectedLeadForPitch(null);
    setGeneratedPitch("");
    setSyncStatus({});

    await addLog("⚡ Initializing secure proxy network...", 100);
    await addLog("📡 Connecting to maps.google.com scraper cluster...", 400);
    await addLog(`🔍 Querying: "${query}"...`, 600);
    await addLog("⚙️ Injecting coordinate viewport layers...", 400);
    await addLog("📥 Raw index stream established. Scraping coordinates...", 500);

    const targetLeads = MOCK_LEADS[query] || MOCK_LEADS[PRESET_QUERIES[0]];

    for (let i = 0; i < targetLeads.length; i++) {
      const lead = targetLeads[i];
      await addLog(`🧩 Found entity: "${lead.name}" (${lead.location})`, 600);
      await addLog(`   └─ Review Score: ${lead.rating} ⭐ | Web Status: ${lead.website}`, 200);

      setScrapedLeads(prev => [...prev, lead]);
    }

    await addLog("✨ Scraping operation finished.", 500);
    await addLog(`🎉 Captured ${targetLeads.length} prospects! Database status: SECURED.`, 200);
    setIsScraping(false);
  };

  const handleSyncToCRM = (leadName) => {
    setSyncStatus(prev => ({ ...prev, [leadName]: 'syncing' }));
    setTimeout(() => {
      setSyncStatus(prev => ({ ...prev, [leadName]: 'synced' }));
    }, 1200);
  };

  const handleDraftPitch = (lead) => {
    setSelectedLeadForPitch(lead);
    setIsGeneratingPitch(true);
    setGeneratedPitch("");

    setTimeout(() => {
      const pitch = `Subject: Quick question regarding ${lead.name}'s web presence in ${lead.location}\n\nHi team at ${lead.name},\n\nI was reviewing local listings around ${lead.location} and noticed your profile has excellent reviews (${lead.rating} stars!). However, it looks like you currently do not have a website linked to your profile, or the listing is unclaimed.\n\nAt Artifx, we help local business owners double their table bookings and memberships by deploying hyper-fast custom mobile landing pages in less than a week.\n\nI actually mocked up a quick landing page draft for ${lead.name} already. Would you be open to a 2-minute quick look at it?\n\nBest,\nYour Dedicated System Architect\nArtifx Systems`;
      setGeneratedPitch(pitch);
      setIsGeneratingPitch(false);
    }, 1500);
  };

  return (
    <section className="relative py-24 bg-[#FAFAF8] border-b-2 border-black overflow-hidden select-none">
      <Container className="relative z-10">

        {/* Title Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFE500] border-2 border-black shadow-[3px_3px_0_#0A0A0A]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-black opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 bg-black"></span>
            </span>
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-black">
              [ DIRECT HANDS-ON SANDBOX // MAPS EXTRACTOR ]
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-black leading-none uppercase">
            Lead Scraper Sandbox
          </h2>

          <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed font-light">
            Don&apos;t just read about it. Input a target parameters below to run the live simulated high-frequency scraper index engine.
          </p>
        </div>

        {/* Scraper Interface Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">

          {/* Left Column: Command & Settings Panel (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 bg-white border-2 border-black shadow-[8px_8px_0_#0A0A0A] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 text-[6px] font-mono text-gray-300">SCRAPER_CTRL_v1.0</div>

            <div className="space-y-6">
              {/* Presets List */}
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">// SELECT PRESET COORDINATES</span>
                <div className="flex flex-col gap-2">
                  {PRESET_QUERIES.map((q) => (
                    <button
                      key={q}
                      onClick={() => !isScraping && setQuery(q)}
                      disabled={isScraping}
                      className={`text-left p-3 border-2 text-xs font-black transition-all duration-100 flex items-center justify-between ${
                        query === q
                          ? 'bg-black text-white border-black shadow-[2px_2px_0_#444]'
                          : 'bg-[#FAFAF8] border-black text-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5'
                      }`}
                    >
                      <span>{q}</span>
                      <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Parameter Input */}
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">// CUSTOM SCRAPING TARGET</span>
                <div className="flex bg-[#FAFAF8] border-2 border-black p-3 items-center gap-3">
                  <Search className="w-4 h-4 text-gray-500 shrink-0" />
                  <input
                    type="text"
                    disabled={isScraping}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter keywords e.g. Clinics in Abu Dhabi..."
                    className="bg-transparent border-none text-xs font-bold outline-none grow text-black placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Run Extractor Button */}
            <div className="mt-8 pt-4 border-t-2 border-black">
              <button
                onClick={handleStartScrape}
                disabled={isScraping || !query}
                className={`w-full py-4 font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 transition-all duration-100 border-2 border-black ${
                  isScraping
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed border-gray-300'
                    : 'bg-[#FFE500] text-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5'
                }`}
              >
                {isScraping ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    EXTRACTING TARGET RECORDS...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    RUN LIVE GOOGLE MAPS EXTRACTOR
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Console Logs & Scraped Output (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Scraper Log Terminal Console */}
            <div className="border-2 border-black bg-[#121212] p-5 flex flex-col justify-between" style={{ minHeight: '160px' }}>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-red-500" />
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">SCRAPER_SYNC_CONSOLE</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 ${isScraping ? 'bg-red-500 animate-pulse' : 'bg-zinc-600'}`} />
                  <span className="text-[8px] font-mono text-zinc-500 uppercase">{isScraping ? 'EXTRACTING' : 'READY'}</span>
                </div>
              </div>

              {/* Logs Stream */}
              <div className="font-mono text-[10px] text-green-400 space-y-1.5 max-h-35 overflow-y-auto text-left grow">
                {logs.length === 0 ? (
                  <span className="text-zinc-500 italic">/* Engine standby. Select coordinates or click Run above to trigger scraping console logs */</span>
                ) : (
                  logs.map((log, idx) => (
                    <div key={idx} className="leading-relaxed border-l-2 border-zinc-800 pl-2">
                      {log}
                    </div>
                  ))
                )}
                <div ref={consoleEndRef} />
              </div>
            </div>

            {/* Live Scraped Leads Pipeline */}
            <div className="border-2 border-black bg-white p-6 flex flex-col justify-between relative" style={{ minHeight: '260px' }}>
              <div className="absolute top-0 right-0 p-2 text-[6px] font-mono text-gray-300">LIVE_DATABASE_FOLDER</div>

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b-2 border-black pb-3">
                  <div className="flex items-center gap-2 text-left">
                    <Database className="w-4 h-4 text-red-600" />
                    <div>
                      <h4 className="text-xs font-black uppercase text-black tracking-tight">SCRAPED TARGET LEADS</h4>
                      <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Indexed leads under matching segment</p>
                    </div>
                  </div>
                  <span className="bg-red-600 text-white border-2 border-black font-mono font-black uppercase text-[9px] px-2 py-1">
                    COUNT: {scrapedLeads.length}
                  </span>
                </div>

                {/* Scraped Cards */}
                <div className="space-y-3 overflow-y-auto max-h-55 pr-1">
                  {scrapedLeads.length === 0 ? (
                    <div className="h-28 flex items-center justify-center border-2 border-dashed border-black">
                      <span className="text-xs text-gray-500 font-light font-mono">No active lead entities loaded yet. Run scraper logs.</span>
                    </div>
                  ) : (
                    <AnimatePresence>
                      {scrapedLeads.map((lead, i) => (
                        <motion.div
                          key={lead.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="p-4 bg-[#FAFAF8] border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-100 text-left"
                        >
                          <div className="space-y-1.5 min-w-0 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h5 className="text-sm font-black uppercase text-black truncate">{lead.name}</h5>
                              <span className={`border-2 border-black font-mono font-black uppercase text-[8px] px-2 py-0.5 ${
                                lead.website === "No Website Found"
                                  ? 'bg-red-600 text-white'
                                  : lead.website === "Unclaimed Listing"
                                  ? 'bg-[#FFE500] text-black'
                                  : 'bg-black text-white'
                              }`}>
                                {lead.website}
                              </span>
                            </div>

                            <div className="flex gap-4 items-center text-[10px] text-gray-600 font-mono">
                              <span className="flex items-center gap-0.5 text-black font-semibold">
                                <Star className="w-3 h-3 fill-red-600 text-red-600 inline" /> {lead.rating}
                              </span>
                              <span className="text-gray-300">|</span>
                              <span className="flex items-center gap-0.5">
                                <MapPin className="w-3 h-3 text-red-600 inline" /> {lead.location}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0 justify-end">
                            {/* CRM Sync Button */}
                            <button
                              onClick={() => handleSyncToCRM(lead.name)}
                              disabled={syncStatus[lead.name] === 'synced'}
                              className={`px-3 py-1.5 text-[9px] font-mono font-black uppercase transition-all duration-100 flex items-center gap-1 border-2 ${
                                syncStatus[lead.name] === 'synced'
                                  ? 'bg-black text-white border-black'
                                  : syncStatus[lead.name] === 'syncing'
                                  ? 'bg-[#FFE500] text-black border-black'
                                  : 'bg-[#FAFAF8] text-black border-black shadow-[3px_3px_0_#0A0A0A] hover:shadow-[1px_1px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5'
                              }`}
                            >
                              {syncStatus[lead.name] === 'synced' ? (
                                <>
                                  <Check className="w-3 h-3" />
                                  CRM_SYNCED
                                </>
                              ) : syncStatus[lead.name] === 'syncing' ? (
                                <>
                                  <Loader2 className="w-3 h-3 animate-spin" />
                                  SYNCING...
                                </>
                              ) : (
                                "SYNC TO CRM"
                              )}
                            </button>

                            {/* Pitch Button */}
                            <button
                              onClick={() => handleDraftPitch(lead)}
                              className="px-3 py-1.5 bg-red-600 text-white border-2 border-black shadow-[3px_3px_0_#0A0A0A] hover:shadow-[1px_1px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 text-[9px] font-mono font-black uppercase transition-all duration-100 flex items-center gap-1"
                            >
                              <Mail className="w-3 h-3" />
                              PITCH
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  )}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Pitch Modal */}
        <AnimatePresence>
          {selectedLeadForPitch && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="mt-12 border-2 border-black bg-white shadow-[8px_8px_0_#0A0A0A] p-6 md:p-8 max-w-5xl mx-auto relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 text-[6px] font-mono text-gray-300">AUTO_OUTREACH_ENG_V1</div>
              <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-6">
                <div className="flex items-center gap-2 text-left">
                  <div className="w-8 h-8 bg-[#FFE500] border-2 border-black flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-black tracking-tight">AI OUTREACH PITCH GENERATED</h4>
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Tailored system integration proposal template for {selectedLeadForPitch.name}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedLeadForPitch(null)}
                  className="text-xs font-black text-black border-2 border-black px-3 py-1 bg-[#FAFAF8] shadow-[3px_3px_0_#0A0A0A] hover:shadow-[1px_1px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 uppercase tracking-widest font-mono transition-all duration-100"
                >
                  Close Pitch
                </button>
              </div>

              {isGeneratingPitch ? (
                <div className="h-48 flex flex-col gap-3 items-center justify-center">
                  <Loader2 className="w-8 h-8 animate-spin text-red-600" />
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Generating responsive email framework...</span>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-[#FAFAF8] border-2 border-black p-5 font-mono text-[11px] text-gray-800 leading-relaxed text-left whitespace-pre-wrap select-text max-h-75 overflow-y-auto">
                    {generatedPitch}
                  </div>

                  <div className="flex justify-between items-center gap-4 flex-wrap text-left">
                    <div className="text-[10px] text-gray-600 font-light flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                      Generated using lead review score ({selectedLeadForPitch.rating} ⭐) and target location.
                    </div>

                    <a
                      href={`mailto:${selectedLeadForPitch.email}?subject=Quick question regarding ${selectedLeadForPitch.name}'s web presence&body=${encodeURIComponent(generatedPitch)}`}
                      className="bg-black text-white border-2 border-black shadow-[4px_4px_0_#444] hover:shadow-[2px_2px_0_#444] hover:translate-x-0.5 hover:translate-y-0.5 px-6 py-3 text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all duration-100"
                    >
                      <Send className="w-3.5 h-3.5" />
                      SEND EMAIL DIRECTLY
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </Container>
    </section>
  );
}
