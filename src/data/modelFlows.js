/**
 * Model-specific flow steps, money flow, metrics, and simulated console logs.
 * Created for a premium, interactive, and highly educational UX.
 */

// Helper to normalize strings for comparison
const normalize = (str) => str?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || '';

export function getModelFlow(categorySlug, modelSlug, model) {
  const name = model?.name || '';
  const desc = model?.desc || '';
  const howItWorks = model?.howItWorks || '';
  const revenueModel = model?.revenueModel || '';
  const techStack = model?.techStack || '';
  const suitableFor = model?.suitableFor || '';

  // 1. DYNAMIC METRICS GENERATION based on text keywords & category
  let takeRate = "15% - 25%";
  let complexity = "Medium";
  let setupCost = "$500 - $2,500";
  let ltv = "Transactional (Medium)";
  let margin = "15% - 30%";

  if (categorySlug === 'ai-saas' || categorySlug === 'education' || modelSlug.includes('saas') || modelSlug.includes('subscription')) {
    takeRate = "100% (Direct)";
    complexity = "High";
    setupCost = "$1,500 - $5,000";
    ltv = "Recurring (High)";
    margin = "75% - 90%";
  } else if (categorySlug === 'ecommerce' || modelSlug.includes('dropshipping') || modelSlug.includes('brand')) {
    takeRate = "100% (Markup)";
    complexity = "Medium";
    setupCost = "$200 - $1,000";
    ltv = "Repeat Buyers (Medium)";
    margin = "20% - 50%";
  } else if (categorySlug === 'fintech' || modelSlug.includes('lending') || modelSlug.includes('trading')) {
    takeRate = "2% - 10% (Fee/Spread)";
    complexity = "Very High";
    setupCost = "$3,000 - $10,000";
    ltv = "High LTV";
    margin = "40% - 70%";
  } else if (categorySlug === 'creator-economy' || modelSlug.includes('community') || modelSlug.includes('marketplace')) {
    takeRate = "5% - 15%";
    complexity = "Medium";
    setupCost = "$100 - $800";
    ltv = "Community Support (High)";
    margin = "85% - 95%";
  } else if (categorySlug === 'real-estate' || categorySlug === 'travel') {
    takeRate = "3% - 15%";
    complexity = "Medium";
    setupCost = "$500 - $3,000";
    ltv = "High Transaction Value";
    margin = "30% - 60%";
  }

  // Overrides for specific high-profile models
  if (modelSlug === 'tokenized-property-investment') {
    takeRate = "2% - 5% (Ingestion) + Asset Fees";
    complexity = "High";
    setupCost = "$4,000 - $12,000";
    margin = "40% - 60%";
  } else if (modelSlug === 'ai-automation-agency') {
    takeRate = "100% (Retainer & Setup)";
    complexity = "Medium";
    setupCost = "$300 - $1,200";
    margin = "80% - 95%";
  } else if (modelSlug === 'dark-store-quick-commerce' || modelSlug === 'medicine-dark-store-model') {
    takeRate = "Markup + Delivery Surcharge";
    complexity = "Very High";
    setupCost = "$10,000+ (Hub Setup)";
    margin = "15% - 25%";
  }

  // 2. SIMULATED LIVE CONSOLE LOGS
  let simulatedLogs = [
    `[SYS] Initializing mock transaction cycle for ${name}...`,
    `[API] Heartbeat check on routing gateway: OK`,
    `[DB] Cache warmed. Standing by for client action...`
  ];

  // Tailored simulated logs based on category
  switch (categorySlug) {
    case 'real-estate':
      simulatedLogs = [
        `[LEAD] 🔍 Buyer in Manhattan viewed luxury 2BHK listings`,
        `[ROUTER] ⚡ Matching coordinates with vetted area brokers`,
        `[MATCH] 📲 Notified Broker ID #802 (Specialty: Luxury Residential)`,
        `[COMM] 💳 Buyer initialized booking deposit ($5,000 held in escrow)`,
        `[SYS] ✅ Transaction recorded. Platform fee (3.5%) locked: $175`
      ];
      break;
    case 'healthcare':
      simulatedLogs = [
        `[PATIENT] 🩺 Symptoms matching submitted: "Severe migraine, fatigue"`,
        `[GATEWAY] 🔒 HIPAA secure tunnel opened. Access tokens verified`,
        `[QUEUE] 📅 Routing to Dr. Sarah Jenkins (Neurologist, Slots: 3 open)`,
        `[CALL] 🎥 WebRTC stream established. Latency: 32ms. Recording: disabled`,
        `[PAY] 💰 Consultation ended. $75 processed. Platform fee (15%): $11.25`
      ];
      break;
    case 'ecommerce':
      simulatedLogs = [
        `[ORDER] 🛒 Cart checked out: ID #89201. Items: 3`,
        `[INVENTORY] 📦 Verifying stock at Dark Store Hub #04 (Sector-B)`,
        `[PICKER] 🔧 In-store picker assigned. Packaging initialized (Est: 90s)`,
        `[FLEET] 🛵 Courier allocated. Route optimized (Dist: 2.1km, Est: 9 min)`,
        `[STATUS] 🏁 Handed to buyer. Transaction closed. Profit margin: $18.40`
      ];
      break;
    case 'home-services':
      simulatedLogs = [
        `[TICKET] 🔧 Service request: "Clogged main line drain, emergency"`,
        `[DISPATCH] 📍 Scan radius 5km: Found 3 active technicians`,
        `[LOCK] 🔒 Booking locked. Technician David (ID #401) dispatched`,
        `[WORK] 🛠️ Technician checked in on-site. Job status updated to RUNNING`,
        `[ESCROW] 💳 Job verified by homeowner. $120 escrow released. Commission: $24`
      ];
      break;
    case 'food':
      simulatedLogs = [
        `[APP] 🍽️ Order received: "Double Patty Burger, Truffle Fries"`,
        `[KITCHEN] 🍳 Sent to Cloud Kitchen #08 (Brand: BurgerNation)`,
        `[KDS] 🔥 Chef accepted. Prep started. Estimated dispatch: 11 mins`,
        `[COURIER] 🛵 Rider arrived at kitchen hub. Order bag #903 picked up`,
        `[PAY] 💳 Order completed. Platform fee (25%): $4.80. Rider fee: $2.50`
      ];
      break;
    case 'logistics':
      simulatedLogs = [
        `[CARGO] 🚛 Cargo load logged: 14 tons dry goods, Chicago to Cleveland`,
        `[MATCHER] 🤖 Loading rates parsed. Dynamic quote: $1,420`,
        `[FLEET] 📲 Carrier "Alliance Freight" claimed load. GPS Tracking initialized`,
        `[GPS] 📍 Truck coordinates: 41.8781° N, 87.6298° W (Speed: 62mph)`,
        `[PROOF] 📝 Electronic Bill of Lading signed by receiver. Payout authorized`
      ];
      break;
    case 'education':
      simulatedLogs = [
        `[STUDENT] 📚 Course booking: "Advanced React Patterns" (Teacher: Alex)`,
        `[CALENDAR] 📅 Syncing Google Calendar slots... Locked Sunday 3PM`,
        `[WEBRTC] 🎥 Classroom initialized. Student joined. Tutor joined`,
        `[PROGRESS] 📊 Diagnostic assessment generated. Topic: "Render Props"`,
        `[FUNDS] 💳 Lesson locked. $40 split released: Tutor (80%), Platform (20%)`
      ];
      break;
    case 'fintech':
      simulatedLogs = [
        `[KYC] 🆔 Identity verification request for User #9812. Status: VERIFIED`,
        `[RISK] 💳 Credit scorecard check: Score 742. Alternative DB: OK`,
        `[ESCROW] 🔒 Escrow sub-ledger created. Split parameters locked`,
        `[LEDGER] 💰 Transaction processed. Capital dispersed: $350`,
        `[SYS] 📈 Ledger updated. Late fee scheduler set. Direct Debit synced`
      ];
      break;
    case 'travel':
      simulatedLogs = [
        `[SEARCH] ✈️ Destination queried: Bali, Indonesia. Duration: 7 days`,
        `[GDS] 🏨 Aggregating rooms from 3 GDS APIs. Total rooms: 142`,
        `[BOOK] 🔒 Room 304 at Villa Seminyak locked. GDS verification successful`,
        `[SPLIT] 💳 Payment processed: $1,240. Hotel payout scheduled (T-24 hrs)`,
        `[SYS] ✅ Travel voucher email sent. Commission margin (12%): $148.80`
      ];
      break;
    case 'automobile':
      simulatedLogs = [
        `[FLEET] 🚗 Vehicle ID #EV-284 unlocked via telematics API`,
        `[TELEMETRY] 🔋 Battery state: 84%. GPS: Active. Cabin temp: 21°C`,
        `[TRIP] ⏱️ Rental session started. User: #7731. Rate: $0.15/min`,
        `[GPS] 📍 Route tracking active. Heading North-East towards Downtown`,
        `[BILL] 💳 Session closed. Time: 48 mins. Charged: $7.20. Ledger OK`
      ];
      break;
    case 'ai-saas':
      simulatedLogs = [
        `[API] 🤖 Incoming query: "Generate marketing copy for eco-friendly bottle"`,
        `[ORCHESTRATOR] 🧠 Vector database queried for context. Hits: 3`,
        `[LLM] 🧠 Token analysis initialized. Input tokens: 412, Output: 890`,
        `[METER] ⚡ Token cost calculated: $0.0065. Deducting client credits`,
        `[SYS] ✅ API Response delivered in 410ms. Latency percentile: 99th`
      ];
      break;
    case 'creator-economy':
      simulatedLogs = [
        `[SUBSCRIBER] 🎨 User "creative_mind" joined Creator Tier 2 ($15/mo)`,
        `[PAYWALL] 🔓 Access key issued for private audio archive`,
        `[CDN] 📦 Streaming video asset: "Color-Theory-Session.mp4" (240MB)`,
        `[WALLET] 💰 Processing subscription payout to Creator Wallet #4902`,
        `[TAX] 💳 Creator receives $13.50. Platform transaction fee (10%): $1.50`
      ];
      break;
    default:
      simulatedLogs = [
        `[SYS] 🔍 Parsing business model operational structures...`,
        `[MATCH] ⚡ Routing incoming demand requests to backend controllers`,
        `[PAY] 💳 Payment gateway initializing secure transaction split`,
        `[LEDGER] 📝 Transaction logged. Escrow released to providers`,
        `[STATUS] ✅ Cycle completed. Platform service surcharge processed`
      ];
  }

  // 3. STEP-BY-STEP FLOW DATA (Data/Operations Flow)
  let steps = [
    {
      number: 1,
      title: "Demand Ingest",
      desc: "User requests service or submits parameters through the client interface.",
      tech: "Client Interface / API Gateway"
    },
    {
      number: 2,
      title: "Orchestration & Routing",
      desc: "Platform engine analyzes the request and matches it with optimal providers.",
      tech: "Routing Algorithm / DB Filters"
    },
    {
      number: 3,
      title: "Value Execution",
      desc: "The assigned provider or software completes the request.",
      tech: "Service Node / Worker Network"
    },
    {
      number: 4,
      title: "Transaction Settlement",
      desc: "Platform verifies delivery, updates databases, and settles payments.",
      tech: "Escrow Gateway / Ledger DB"
    }
  ];

  // Customize operational steps based on category & specific models
  if (categorySlug === 'real-estate') {
    if (modelSlug === 'tokenized-property-investment') {
      steps = [
        { number: 1, title: "Asset Sourcing", desc: "Premium, high-yield commercial real estate is sourced and vetted.", tech: "Underwriting / Asset Scanners" },
        { number: 2, title: "Fractionalization", desc: "Property is legal-wrapped and split into digital micro-equity tokens.", tech: "Asset Ledger Registry" },
        { number: 3, title: "Retail Purchase", desc: "Investors buy tokens on the platform starting from low ticket sizes.", tech: "Payment Gateway / Investor Portal" },
        { number: 4, title: "Yield Distribution", desc: "Monthly rental payouts are distributed proportionally to token wallets.", tech: "Dividends Scheduler / Ledger DB" }
      ];
    } else if (modelSlug === 'broker-aggregator-model') {
      steps = [
        { number: 1, title: "Lead Capture", desc: "Area-specific marketing landing pages capture high-intent property leads.", tech: "Ad Network Integrations / Web forms" },
        { number: 2, title: "Routing Engine", desc: "System parses buyer preferences, budget, and geographical coordinates.", tech: "Lead Distribution Engine" },
        { number: 3, title: "Broker Matching", desc: "Leads are routed to vetted area brokers who accept via mobile terminal.", tech: "Broker Mobile App" },
        { number: 4, title: "Deal Settlement", desc: "Broker conducts tours, closes transaction, and splits commission.", tech: "Commission Escrow Ledger" }
      ];
    } else {
      steps = [
        { number: 1, title: "Property Listing", desc: "Landlords/builders catalog properties with specs, pricing, and 3D media.", tech: "Property Registry Portal" },
        { number: 2, title: "Buyer Discovery", desc: "Prospects search, filter, and compare listings via search indexing.", tech: "ElasticSearch / Listing DB" },
        { number: 3, title: "Tour & Verification", desc: "System routes tour bookings or schedules 3D virtual walkthroughs.", tech: "Scheduling API / WebGL VR Engine" },
        { number: 4, title: "Contract Closure", desc: "Buyers put down reservations, triggering contracts and payout cuts.", tech: "Escrow Gateway / Document Signing API" }
      ];
    }
  } else if (categorySlug === 'healthcare') {
    steps = [
      { number: 1, title: "Symptom Logging", desc: "Patient searches conditions or logs specific clinical requirements.", tech: "Client App / Ingestion UI" },
      { number: 2, title: "Triage & Routing", desc: "HIPAA-secure gateway matches request to clinical specialists or dispatchers.", tech: "HIPAA Gateway / Slot Lockers" },
      { number: 3, title: "Clinical Session", desc: "Doctor consults via WebRTC, caretaker visits property, or diagnostics occur.", tech: "WebRTC Video / Caretaker Dispatch" },
      { number: 4, title: "Health Update", desc: "System stores records, prints prescriptions, and processes payment cuts.", tech: "EHR compliant storage / Payment API" }
    ];
  } else if (categorySlug === 'ecommerce') {
    if (modelSlug === 'dropshipping-model') {
      steps = [
        { number: 1, title: "Retail Order", desc: "Customer places order on storefront at retail markups.", tech: "D2C Web Storefront" },
        { number: 2, title: "Order Translation", desc: "Storefront API forwards order metrics to wholesale suppliers automatically.", tech: "Supplier Sync API" },
        { number: 3, title: "Supplier Packaging", desc: "Supplier packs product with retailer branding and coordinates shipping.", tech: "Manufacturer WMS" },
        { number: 4, title: "Direct Shipping", desc: "Supplier ships parcel directly to consumer; tracking code is synced.", tech: "International Logistics API" }
      ];
    } else {
      steps = [
        { number: 1, title: "Checkout Ingest", desc: "Consumer places order, checking items against active stock indexes.", tech: "E-Commerce Web Portal" },
        { number: 2, title: "Hub Routing", desc: "Order router matches delivery location to nearest micro-warehouse hub.", tech: "Order Routing Matrix" },
        { number: 3, title: "Item Picking", desc: "Packers receive terminal list and assemble order box in under 3 minutes.", tech: "Picker Operations App" },
        { number: 4, title: "Last-Mile Delivery", desc: "Gig driver claims courier ticket, tracks GPS path, and delivers package.", tech: "Driver App / Route Optimizer" }
      ];
    }
  } else if (categorySlug === 'home-services') {
    steps = [
      { number: 1, title: "Service Request", desc: "Homeowner schedules job (plumbing, electrical, cleanup) and sets times.", tech: "Customer Booking Portal" },
      { number: 2, title: "Geo-Dispatch", desc: "Engine scans 10km radius for active, vetted freelance technicians.", tech: "Geo Dispatch Engine" },
      { number: 3, title: "On-site Fix", desc: "Technician arrives, updates progress checklist, and completes task.", tech: "Contractor Service App" },
      { number: 4, title: "Inspection & Release", desc: "Homeowner signs off, escrow payment is released, and review is saved.", tech: "Escrow Vault / Review API" }
    ];
  } else if (categorySlug === 'food') {
    steps = [
      { number: 1, title: "Food Query", desc: "Customer queries cuisines, selects menu dishes, and checks out.", tech: "Customer Food App" },
      { number: 2, title: "Kitchen Aggregation", desc: "Kitchen terminals ingest orders and queue preparation display slots.", tech: "Kitchen Display System (KDS)" },
      { number: 3, title: "Courier Dispatch", desc: "Prep completion signals courier router to assign nearest active rider.", tech: "Rider Dispatch Optimizer" },
      { number: 4, title: "Fresh Hand-off", desc: "Courier collects food bag, traces thermal path, and delivers meal.", tech: "Active Rider App / Map API" }
    ];
  } else if (categorySlug === 'ai-saas') {
    if (modelSlug === 'ai-automation-agency') {
      steps = [
        { number: 1, title: "Operations Audit", desc: "Client manual document flows and API bottlenecks are audited.", tech: "Manual Workflow Maps" },
        { number: 2, title: "Agent Design", desc: "System architects custom cognitive agent flows and prompt chains.", tech: "AI Orchestrator Engine" },
        { number: 3, title: "RPA Integration", desc: "Robotic process automation scripts and LLM routers are deployed.", tech: "Custom APIs / RPA Tools" },
        { number: 4, title: "Upkeep & Retainer", desc: "Engine logs uptime metrics, handles SLA updates, and processes retainers.", tech: "Uptime Logs Dashboard" }
      ];
    } else {
      steps = [
        { number: 1, title: "API Request", desc: "Developer or application shoots a query payload to the API endpoints.", tech: "Client HTTP API / Gateway" },
        { number: 2, title: "Cognitive Routing", desc: "Orchestrator parses request, fetching vector database records for context.", tech: "LLM Agent Orchestrator" },
        { number: 3, title: "Model Generation", desc: "AI model synthesizes the answer or triggers automated action scripts.", tech: "Cognitive Inference Server" },
        { number: 4, title: "Token Logging", desc: "Outputs are sent, tokens are metered, and credits are deducted.", tech: "Metered Billing API / DB" }
      ];
    }
  }

  // 4. REVENUE / MONEY FLOW STEPS
  let moneyFlow = [
    {
      number: 1,
      title: "Escrow Deposit",
      desc: "Buyer pays platform. Money is locked securely in payment escrow.",
      tech: "Stripe Escrow / PayPal API"
    },
    {
      number: 2,
      title: "Fee Deduction",
      desc: "Platform takes transaction processing cut or commission (e.g. 15%).",
      tech: "Billing Splits Engine"
    },
    {
      number: 3,
      title: "Partner Payout",
      desc: "Remaining balance is auto-routed to provider/vendor digital wallet.",
      tech: "Instant Payout Gateway"
    }
  ];

  // Customize money steps based on category & specific models
  if (categorySlug === 'ai-saas' || categorySlug === 'education' || modelSlug.includes('saas') || modelSlug.includes('subscription')) {
    moneyFlow = [
      { number: 1, title: "Recurring Billing", desc: "Customer credit card is charged automatically at start of billing tier cycle.", tech: "Stripe Subscriptions" },
      { number: 2, title: "Credit Allocation", desc: "System registers active account quota, usage credits, or license keys.", tech: "Feature Flags / API Keys DB" },
      { number: 3, title: "Infrastructure Cost", desc: "Platform consumes credits and offsets server overhead, saving margin.", tech: "Billing Analytics" }
    ];
  } else if (modelSlug.includes('commission') || modelSlug.includes('aggregator') || modelSlug.includes('marketplace') || categorySlug === 'real-estate' || categorySlug === 'healthcare' || categorySlug === 'home-services') {
    moneyFlow = [
      { number: 1, title: "Transaction Lock", desc: "Customer pays total booking fee; funds held securely in escrow sub-ledger.", tech: "Escrow Escalate API" },
      { number: 2, title: "Take Rate Cut", desc: "Platform slices transaction commissions (typically 5% - 25% take rate).", tech: "Payout Split Ledger" },
      { number: 3, title: "Vendor Release", desc: "Fulfillment confirmation triggers instant release of remaining funds to vendor.", tech: "Node Wallet Payout" }
    ];
  } else if (modelSlug.includes('dropshipping')) {
    moneyFlow = [
      { number: 1, title: "Retail Checkin", desc: "Customer pays full retail price on storefront (e.g. $100).", tech: "Stripe checkout" },
      { number: 2, title: "Wholesale Purchase", desc: "System auto-orders from supplier at wholesale rate (e.g. $40).", tech: "Supplier Invoicing API" },
      { number: 3, title: "Arbitrage Capture", desc: "Platform collects and holds the price difference ($60 net margin).", tech: "Internal Ledger Bank" }
    ];
  } else if (modelSlug === 'tokenized-property-investment') {
    moneyFlow = [
      { number: 1, title: "Token Sale Ingest", desc: "Retail investors buy shares. Capital pooled in property legal entity.", tech: "Pool Bank Portal" },
      { number: 2, title: "Asset Management Fee", desc: "Platform charges 1-2% annual asset fee plus onboarding brokerage fee.", tech: "Asset Management Ledger" },
      { number: 3, title: "Yield Distribution", desc: "Monthly rental income from property tenants is distributed to investors.", tech: "Token yield payments" }
    ];
  }

  return {
    metrics: {
      takeRate,
      complexity,
      setupCost,
      ltv,
      margin
    },
    simulatedLogs,
    steps,
    moneyFlow
  };
}
