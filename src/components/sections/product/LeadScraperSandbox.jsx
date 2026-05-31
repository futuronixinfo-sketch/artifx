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
    <section className="relative py-24 bg-white border-b border-gray-200 overflow-hidden select-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-gray-200 to-transparent" />
      
      {/* Visual Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-red-50/10 rounded-full blur-[160px] pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Title Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-50 border border-red-200 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-600">
              [ DIRECT HANDS-ON SANDBOX // MAPS EXTRACTOR ]
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-black leading-none uppercase">
            Lead Scraper Sandbox
          </h2>

          <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed font-light">
            Don&apos;t just read about it. Input a target parameters below to run the live simulated high-frequency scraper index engine.
          </p>
        </div>

        {/* Scraper Interface Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Command & Settings Panel (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 md:p-8 bg-gray-50 border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] relative overflow-hidden" style={{ borderRadius: 0 }}>
            <div className="absolute top-0 right-0 p-2 text-[6px] font-mono text-gray-300">SCRAPER_CTRL_v1.0</div>
            
            <div className="space-y-6">
              {/* Presets List */}
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block">// SELECT PRESET COORDINATES</span>
                <div className="flex flex-col gap-2">
                  {PRESET_QUERIES.map((q) => (
                    <button
                      key={q}
                      onClick={() => !isScraping && setQuery(q)}
                      disabled={isScraping}
                      className={`text-left p-3 border text-xs font-bold transition-all flex items-center justify-between ${
                        query === q 
                          ? 'bg-black text-white border-black shadow-sm' 
                          : 'bg-white hover:bg-gray-100 border-gray-200 text-gray-700'
                      }`}
                      style={{ borderRadius: 0 }}
                    >
                      <span>{q}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Parameter Input */}
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block">// CUSTOM SCRAPING TARGET</span>
                <div className="flex bg-white border border-gray-200 p-3 items-center gap-3">
                  <Search className="w-4 h-4 text-gray-400 shrink-0" />
                  <input
                    type="text"
                    disabled={isScraping}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter keywords e.g. Clinics in Abu Dhabi..."
                    className="bg-transparent border-none text-xs font-bold outline-none flex-1 text-black placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Run Extractor Button */}
            <div className="mt-8 pt-4 border-t border-gray-200">
              <button
                onClick={handleStartScrape}
                disabled={isScraping || !query}
                className={`w-full py-4.5 font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 transition-all ${
                  isScraping 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-red-600 text-white hover:bg-black hover:scale-[1.02] active:scale-95 shadow-lg shadow-red-600/10'
                }`}
                style={{ borderRadius: 0 }}
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
            
            {/* Scraper Log terminal Console */}
            <div className="border-2 border-black bg-[#121212] p-5 shadow-md flex flex-col justify-between" style={{ borderRadius: 0, minHeight: '160px' }}>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-red-500" />
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">SCRAPER_SYNC_CONSOLE</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${isScraping ? 'bg-red-500 animate-pulse' : 'bg-zinc-600'}`} />
                  <span className="text-[8px] font-mono text-zinc-500 uppercase">{isScraping ? 'EXTRACTING' : 'READY'}</span>
                </div>
              </div>

              {/* Logs Stream */}
              <div className="font-mono text-[10px] text-green-400 space-y-1.5 max-h-[140px] overflow-y-auto custom-scrollbar text-left flex-grow">
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

            {/* Live Scraped Leads Pipeline Folder */}
            <div className="border-2 border-black bg-white p-6 shadow-sm flex flex-col justify-between relative" style={{ borderRadius: 0, minHeight: '260px' }}>
              <div className="absolute top-0 right-0 p-2 text-[6px] font-mono text-gray-300">LIVE_DATABASE_FOLDER</div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div className="flex items-center gap-2 text-left">
                    <Database className="w-4 h-4 text-red-600" />
                    <div>
                      <h4 className="text-xs font-black uppercase text-black tracking-tight">SCRAPED TARGET LEADS</h4>
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Indexed leads under matching segment</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-red-50 text-red-600 font-mono text-[9px] font-bold uppercase border border-red-200">
                    COUNT: {scrapedLeads.length}
                  </span>
                </div>

                {/* Scraped Cards Render */}
                <div className="space-y-3 overflow-y-auto max-h-[220px] pr-1">
                  {scrapedLeads.length === 0 ? (
                    <div className="h-28 flex items-center justify-center border border-dashed border-gray-200">
                      <span className="text-xs text-gray-400 font-light font-mono">No active lead entities loaded yet. Run scraper logs.</span>
                    </div>
                  ) : (
                    <AnimatePresence>
                      {scrapedLeads.map((lead, i) => (
                        <motion.div
                          key={lead.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="p-4 bg-gray-50 border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-black transition-all text-left"
                          style={{ borderRadius: 0 }}
                        >
                          <div className="space-y-1.5 min-w-0 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h5 className="text-sm font-black uppercase text-black truncate">{lead.name}</h5>
                              <span className={`px-2 py-0.5 text-[8px] font-mono font-bold uppercase ${
                                lead.website === "No Website Found" 
                                  ? 'bg-red-50 text-red-600 border border-red-200' 
                                  : lead.website === "Unclaimed Listing"
                                  ? 'bg-yellow-50 text-yellow-600 border border-yellow-200'
                                  : 'bg-green-50 text-green-600 border border-green-200'
                              }`}>
                                {lead.website}
                              </span>
                            </div>
                            
                            <div className="flex gap-4 items-center text-[10px] text-gray-500 font-mono">
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
                            {/* CRM sync Button */}
                            <button
                              onClick={() => handleSyncToCRM(lead.name)}
                              disabled={syncStatus[lead.name] === 'synced'}
                              className={`px-3 py-1.5 text-[9px] font-mono font-bold uppercase transition-all flex items-center gap-1 ${
                                syncStatus[lead.name] === 'synced'
                                  ? 'bg-green-50 text-green-600 border border-green-200'
                                  : syncStatus[lead.name] === 'syncing'
                                  ? 'bg-yellow-50 text-yellow-600 border border-yellow-200'
                                  : 'bg-white hover:bg-black hover:text-white border-gray-200 text-gray-700'
                              }`}
                              style={{ borderRadius: 0 }}
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
                              className="px-3 py-1.5 bg-red-600 hover:bg-black text-white text-[9px] font-mono font-bold uppercase transition-all flex items-center gap-1"
                              style={{ borderRadius: 0 }}
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

        {/* Pitch Custom Modal / Section */}
        <AnimatePresence>
          {selectedLeadForPitch && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="mt-12 border-2 border-black bg-gray-50 p-6 md:p-8 max-w-5xl mx-auto relative overflow-hidden"
              style={{ borderRadius: 0 }}
            >
              <div className="absolute top-0 right-0 p-2 text-[6px] font-mono text-gray-300">AUTO_OUTREACH_ENG_V1</div>
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
                <div className="flex items-center gap-2 text-left">
                  <div className="w-8 h-8 rounded-none bg-red-100 flex items-center justify-center text-red-600">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-black tracking-tight">AI OUTREACH PITCH GENERATED</h4>
                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Tailored system integration proposal template for {selectedLeadForPitch.name}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedLeadForPitch(null)}
                  className="text-xs font-bold text-gray-400 hover:text-black uppercase"
                >
                  Close Pitch
                </button>
              </div>

              {isGeneratingPitch ? (
                <div className="h-48 flex flex-col gap-3 items-center justify-center">
                  <Loader2 className="w-8 h-8 animate-spin text-red-600" />
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Generating responsive email framework...</span>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 p-5 rounded-none font-mono text-[11px] text-gray-800 leading-relaxed text-left whitespace-pre-wrap select-text max-h-[300px] overflow-y-auto">
                    {generatedPitch}
                  </div>
                  
                  <div className="flex justify-between items-center gap-4 flex-wrap text-left">
                    <div className="text-[10px] text-gray-500 font-light flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-600" /> 
                      Generated using lead review score ({selectedLeadForPitch.rating} ⭐) and target location.
                    </div>
                    
                    <a
                      href={`mailto:${selectedLeadForPitch.email}?subject=Quick question regarding ${selectedLeadForPitch.name}'s web presence&body=${encodeURIComponent(generatedPitch)}`}
                      className="px-6 py-3 bg-black hover:bg-red-600 text-white text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all shadow-sm"
                      style={{ borderRadius: 0 }}
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
