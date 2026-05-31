export const categories = [
  {
    id: "popular",
    name: "Popular Models",
    tagline: "25 Modern Business Architectures",
    icon: "🔥",
    count: 25,
  },
  {
    id: "real-estate",
    name: "Real Estate",
    tagline: "Property Systems Technology",
    icon: "🏠",
    count: 5,
  },
  {
    id: "healthcare",
    name: "Medical / Healthcare",
    tagline: "Healthcare Infrastructure Services",
    icon: "🏥",
    count: 5,
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    tagline: "Electronic Commerce Networks",
    icon: "🛒",
    count: 5,
  },
  {
    id: "home-services",
    name: "Home Services",
    tagline: "On-Demand Home Care Infrastructure",
    icon: "🔧",
    count: 5,
  },
  {
    id: "food",
    name: "Food / Restaurant",
    tagline: "Hyperlocal Food Technology Systems",
    icon: "🍽️",
    count: 5,
  },
  {
    id: "logistics",
    name: "Logistics / Delivery",
    tagline: "Supply Chain & Dispatch Algorithms",
    icon: "🚚",
    count: 5,
  },
  {
    id: "education",
    name: "Education / EdTech",
    tagline: "Educational Systems & LMS Technologies",
    icon: "📚",
    count: 5,
  },
  {
    id: "fintech",
    name: "Finance / FinTech",
    tagline: "Financial Ingestion & Ledgers Technology",
    icon: "💰",
    count: 5,
  },
  {
    id: "travel",
    name: "Travel & Tourism",
    tagline: "GDS Systems & Hospitality Routing",
    icon: "✈️",
    count: 5,
  },
  {
    id: "automobile",
    name: "Automobile",
    tagline: "Automotive Fleet Telematics",
    icon: "🚗",
    count: 5,
  },
  {
    id: "ai-saas",
    name: "AI & SaaS",
    tagline: "Cognitive AI & Enterprise SaaS Systems",
    icon: "🤖",
    count: 5,
  },
  {
    id: "creator-economy",
    name: "Creator Economy",
    tagline: "Digital Media Monetization Engines",
    icon: "🎨",
    count: 5,
  },
];

const modelDetails = {
  "Aggregator Model": {
    howItWorks: "The platform aggregates multiple independent service providers onto a single interface. When a user requests a service, the routing engine automatically assigns the nearest optimal provider.",
    revenueModel: "Commission per transaction, featured listings, subscription fees from providers.",
    techStack: "Mobile App, Real-time Tracking, Payment Gateway, Rating System, Admin Dashboard.",
    suitableFor: "Transport, Delivery, Home Services, Healthcare.",
  },
  "Marketplace Model": {
    howItWorks: "Connects buyers and sellers in a unified directory. The platform facilitates checkout and payment escrow without maintaining physical inventory.",
    revenueModel: "Listing fee, transaction commission, promoted listings, subscription.",
    techStack: "Web Platform, Search & Filters, Payment Escrow, Review System, Seller Dashboard.",
    suitableFor: "E-Commerce, Services, Freelancing, Rental Marketplaces.",
  },
  "Dark Store / Quick Commerce": {
    howItWorks: "Mini-fulfillment hubs (dark stores) are strategically deployed across dense urban zones. Upon order confirmation, the inventory routing engine assigns the dispatch to the nearest hub, enabling ultra-fast delivery.",
    revenueModel: "Product margin, delivery fee, subscription (free delivery).",
    techStack: "Inventory Management, Order Routing, Real-time Tracking, Delivery Fleet App.",
    suitableFor: "Groceries, Medicines, Essentials, Hyperlocal Delivery.",
  },
  "Subscription Model": {
    howItWorks: "Provides recurring access to products, services, or premium content in exchange for a monthly or annual fee, ensuring high customer lifetime value.",
    revenueModel: "Monthly/Yearly subscription fees, tiered pricing.",
    techStack: "Subscription Management, Payment Recurring, User Portal, Analytics.",
    suitableFor: "Content, SaaS, Boxes, Memberships, Fitness, Education.",
  },
  "SaaS Model": {
    howItWorks: "Hosts software centrally on cloud servers, renting access to business users on a multi-tenant subscription plan with auto-updates.",
    revenueModel: "Monthly/yearly subscription, per-seat pricing, usage-based.",
    techStack: "Cloud Infrastructure, Multi-tenant DB, Payment System, Dashboard, APIs.",
    suitableFor: "Business Tools, CRM, Project Management, Analytics.",
  },
  "Freemium Model": {
    howItWorks: "Distributes a basic version of a digital utility for free to acquire a large user base, while gating advanced features behind premium paid tiers.",
    revenueModel: "Free user se premium conversion, upgraded plans, add-ons.",
    techStack: "User Management, Feature Flags, Payment Gateway, Usage Tracking.",
    suitableFor: "Productivity Apps, Design Tools, Music Streaming, Games.",
  },
  "Commission-Based Model": {
    howItWorks: "Facilitates high-value transactions or rentals between third parties, extracting a percentage-based processing fee from each transaction.",
    revenueModel: "Percentage per transaction, flat fee per booking.",
    techStack: "Payment Processing, Transaction Logging, Dispute System.",
    suitableFor: "Travel, Real Estate, Freelancing, Booking Platforms.",
  },
  "Franchise Model": {
    howItWorks: "Licenses trademarked branding, proprietary operating playbooks, and centralized supply chain access to independent local operators.",
    revenueModel: "Initial franchise fee, monthly royalty on revenue, supply chain margin.",
    techStack: "Franchise Management System, Training Portal, Inventory Chain.",
    suitableFor: "Food Chains, Retail, Service Brands, Education Centers.",
  },
  "D2C (Direct to Consumer)": {
    howItWorks: "Manufactures proprietary consumer products and distributes them directly to customers via online channels, bypassing traditional retail middlemen.",
    revenueModel: "Product margin, subscription boxes, repeat orders.",
    techStack: "E-Commerce Store, Logistics Integration, Marketing Automation, CRM.",
    suitableFor: "Fashion, Beauty, Food, Electronics, Home Decor.",
  },
  "Dropshipping Model": {
    howItWorks: "Operates an online storefront showcasing products without storing inventory. Upon purchase, the order is routed directly to a third-party manufacturer for fulfillment.",
    revenueModel: "Price difference between listing and supplier cost.",
    techStack: "E-Commerce Platform, Supplier Integration, Order Automation.",
    suitableFor: "Fashion, Accessories, Home Goods, Niche Products.",
  },
  "Hyperlocal Delivery Model": {
    howItWorks: "Creates a rapid delivery ecosystem within a tight geographical radius, connecting local merchants with consumers via independent courier fleets.",
    revenueModel: "Delivery fee, surge pricing, subscription plans.",
    techStack: "Real-time Tracking, Route Optimization, Delivery App, Payment System.",
    suitableFor: "Food, Grocery, Documents, Parcels, Pharma.",
  },
  "Cloud Kitchen Model": {
    howItWorks: "Operates a strictly delivery-only food preparation facility. Multiple virtual culinary brands are prepared in a single physical kitchen, optimizing overhead.",
    revenueModel: "Food margin, multiple brands from same kitchen, franchise.",
    techStack: "Order Management, Kitchen Display, Delivery Integration, Analytics.",
    suitableFor: "Food Business, Multi-Brand Restaurants, Food Startups.",
  },
  "Gig Economy Model": {
    howItWorks: "Orchestrates a scalable pool of on-demand freelancers. The matching engine allocates micro-tasks to nearby verified gig workers.",
    revenueModel: "Commission per task, subscription, premium listings.",
    techStack: "Gig Matching Algorithm, Payment Escrow, Rating System, Chat.",
    suitableFor: "Rides, Delivery, Home Services, Freelancing, Task Based.",
  },
  "On-Demand Service Model": {
    howItWorks: "Provides instantaneous scheduling and dispatch of specialized services to client locations, utilizing automated resource allocation.",
    revenueModel: "Per service fee, surge pricing, subscription.",
    techStack: "Real-time Tracking, Matching Algorithm, In-app Chat, Payment.",
    suitableFor: "Rides, Food Delivery, Home Services, Healthcare.",
  },
  "Membership Model": {
    howItWorks: "Curates a premium club structure offering exclusive operational access, early product drops, or private networking benefits for members.",
    revenueModel: "Monthly/annual membership fee, tiered plans.",
    techStack: "Member Portal, Access Control, Payment System, Community Features.",
    suitableFor: "Content, Fitness, Professional Networks, Clubs.",
  },
  "Creator Economy Model": {
    howItWorks: "Enables digital creators to monetize content directly through digital channels. The platform acts as the subscription and payout gateway.",
    revenueModel: "Platform fee, subscription revenue share, tipping fee.",
    techStack: "Content Management, Payment Processing, Subscriber Management, Analytics.",
    suitableFor: "Content Creators, Artists, Educators, Influencers.",
  },
  "Affiliate Model": {
    howItWorks: "Enlists a network of publishers to drive lead generation and customer acquisition in exchange for trackable sales cuts.",
    revenueModel: "Commission per sale, CPA, referral bonus.",
    techStack: "Affiliate Tracking, Link Management, Payment System, Analytics Dashboard.",
    suitableFor: "E-Commerce, Digital Products, Courses, Services.",
  },
  "White Label Model": {
    howItWorks: "Develops unbranded software or physical goods, allowing third-party resellers to place their own logos and brand identities over the system.",
    revenueModel: "License fee, revenue share, per-user fee.",
    techStack: "Multi-tenant Architecture, Brand Customization, API Integration.",
    suitableFor: "SaaS, Digital Agencies, Resellers, Enterprise Solutions.",
  },
  "API-as-a-Service Model": {
    howItWorks: "Packages specialized programmatic utilities into endpoints, allowing developers to embed capabilities directly into custom apps.",
    revenueModel: "Usage-based pricing, tiered plans, enterprise contracts.",
    techStack: "API Gateway, Documentation, Developer Portal, Usage Analytics.",
    suitableFor: "Communication, Payments, Data Services, AI/ML.",
  },
  "AI Automation Model": {
    howItWorks: "Deploys autonomous cognitive workflows, intelligent routing agents, and conversational LLM integrations to replace manual operational tasks.",
    revenueModel: "Subscription, usage-based, project-based setup fee.",
    techStack: "AI/ML Models, RPA, Chatbot Platform, Workflow Engine, Integration APIs.",
    suitableFor: "Customer Support, Data Processing, Lead Generation, Operations.",
  },
  "Social Commerce Model": {
    howItWorks: "Integrates e-commerce storefronts directly into social media networks and messaging channels, enabling direct in-chat transactions.",
    revenueModel: "Commission per sale, listing fee, promoted products.",
    techStack: "Chat Integration, Catalog Management, Order System, Payment Link.",
    suitableFor: "Fashion, Beauty, Handmade, Local Products.",
  },
  "Buy Now Pay Later (BNPL)": {
    howItWorks: "Integrates a financing gateway at checkout. Customers split purchases into interest-free installments while the merchant receives instant settlement.",
    revenueModel: "Merchant fee, late fees, interest on installments.",
    techStack: "Credit Check, Payment Scheduling, Merchant Integration, Risk Engine.",
    suitableFor: "E-Commerce, Retail, Travel, Education.",
  },
  "Super App Model": {
    howItWorks: "Unifies a massive suite of consumer utilities (payments, food delivery, messaging, transport) under a single consolidated user profile and database.",
    revenueModel: "Multiple revenue streams from different services.",
    techStack: "Modular Architecture, Shared Wallet, Unified UI, Service Integrations.",
    suitableFor: "Large User Base, Multi-Service Ecosystems, Emerging Markets.",
  },
  "Peer-to-Peer (P2P) Model": {
    howItWorks: "Enables direct exchanges of value, asset rentals, or services between individual users, acting as the secure routing and mediation platform.",
    revenueModel: "Transaction fee, listing fee, premium features.",
    techStack: "User Verification, Payment Escrow, Dispute Resolution, Rating System.",
    suitableFor: "Rentals, Services, Lending, Skill Sharing.",
  },
  "Managed Service Model": {
    howItWorks: "Undertakes the complete technical maintenance, operations, and optimization of client business systems, delivering predictable outcomes.",
    revenueModel: "Monthly retainer, managed service fee, performance-based bonus.",
    techStack: "Service Delivery Platform, Monitoring Tools, Reporting Dashboard.",
    suitableFor: "IT Services, Marketing, Operations, Facility Management.",
  },
};

const defaultDetail = {
  howItWorks: "Platform operates a highly structured operational loop where multiple client channels interact with an orchestrator engine to achieve business deliverables.",
  revenueModel: "Aggregated transaction commissions, recurring software subscriptions, or customized managed service SLAs.",
  techStack: "Responsive Web Portal, API Ingestion Gateway, Payment Escrow, Admin Command Cockpit, Telemetry Analytics.",
  suitableFor: "Enterprises seeking to automate manual pipelines and establish clean, scalable systems.",
};

function getDetail(name) {
  return modelDetails[name] || defaultDetail;
}

const popularModels = [
  { name: "Aggregator Model", example: "Uber, Rapido, Zomato", desc: "Aggregates independent service providers under a single unified dashboard, routing demand with transaction splits.", ...getDetail("Aggregator Model") },
  { name: "Marketplace Model", example: "Amazon, Flipkart", desc: "Unifies buyers and third-party merchants under a single transactional registry without keeping local inventory.", ...getDetail("Marketplace Model") },
  { name: "Dark Store / Quick Commerce", example: "Zepto, Blinkit", desc: "Coordinates micro-fulfillment warehouses in dense zones to pack and deliver daily goods in under 15 minutes.", ...getDetail("Dark Store / Quick Commerce") },
  { name: "Subscription Model", example: "Netflix, Spotify", desc: "Provides high-value continuous product or media access in exchange for recurring monthly licensing contracts.", ...getDetail("Subscription Model") },
  { name: "SaaS Model", example: "Slack, Notion", desc: "Hosts software solutions centrally on secure multi-tenant cloud servers on an automated subscription setup.", ...getDetail("SaaS Model") },
  { name: "Freemium Model", example: "Canva", desc: "Grants free access to a functional core utility while gating advanced creative templates and tools behind paid tiers.", ...getDetail("Freemium Model") },
  { name: "Commission-Based Model", example: "Airbnb", desc: "Monetizes bilateral listings by charging a percentage cut from each verified customer transaction.", ...getDetail("Commission-Based Model") },
  { name: "Franchise Model", example: "McDonald's", desc: "Licenses trademarked branding, proprietary supply chain networks, and operational protocols to local owners.", ...getDetail("Franchise Model") },
  { name: "D2C (Direct to Consumer)", example: "boAt", desc: "Distributes proprietary brand products online directly to consumer targets, bypassing standard retail middlemen.", ...getDetail("D2C (Direct to Consumer)") },
  { name: "Dropshipping Model", desc: "Lists wholesale inventories online and triggers manufacturer dispatches directly to the customer on purchase.", ...getDetail("Dropshipping Model") },
  { name: "Hyperlocal Delivery Model", example: "Dunzo", desc: "Dispatches courier fleets within narrow municipal sectors to ship local products from merchant to consumer.", ...getDetail("Hyperlocal Delivery Model") },
  { name: "Cloud Kitchen Model", example: "Rebel Foods", desc: "Operates delivery-only commercial cooking networks under multiple digital branding menus, reducing lease costs.", ...getDetail("Cloud Kitchen Model") },
  { name: "Gig Economy Model", example: "Urban Company", desc: "Coordinates dynamic local pools of certified independent contractors who complete on-demand service assignments.", ...getDetail("Gig Economy Model") },
  { name: "On-Demand Service Model", desc: "Enables immediate booking and assignment of field professionals to client properties using automated routers.", ...getDetail("On-Demand Service Model") },
  { name: "Membership Model", desc: "Restricts operational access, private forums, or premium assets behind exclusive tiers of verified members.", ...getDetail("Membership Model") },
  { name: "Creator Economy Model", example: "Patreon", desc: "Allows digital content creators to collect direct recurring payouts and tips from their active audience nodes.", ...getDetail("Creator Economy Model") },
  { name: "Affiliate Model", desc: "Monetizes targeted media loops by earning sales percentages on tracked third-party conversion links.", ...getDetail("Affiliate Model") },
  { name: "White Label Model", desc: "Enables corporate partners to license software systems and deploy their own branded layouts over the core engine.", ...getDetail("White Label Model") },
  { name: "API-as-a-Service Model", example: "Twilio", desc: "Exposes robust programmatic functions through endpoints, letting developers scale utilities inside custom code.", ...getDetail("API-as-a-Service Model") },
  { name: "AI Automation Model", desc: "Replaces high-volume manual office processes using cognitive pipelines, routing LLMs, and custom RPA agents.", ...getDetail("AI Automation Model") },
  { name: "Social Commerce Model", example: "Meesho", desc: "Integrates direct catalog checkouts inside popular consumer chat platforms like WhatsApp and Instagram.", ...getDetail("Social Commerce Model") },
  { name: "Buy Now Pay Later (BNPL)", example: "Klarna", desc: "Splits customer invoices into custom interest-free installment pipelines at checkout, increasing order values.", ...getDetail("Buy Now Pay Later (BNPL)") },
  { name: "Super App Model", example: "WeChat", desc: "Consolidates messaging, digital wallets, e-commerce, and transport channels under a single database profiles ecosystem.", ...getDetail("Super App Model") },
  { name: "Peer-to-Peer (P2P) Model", desc: "Facilitates direct assets swap, lending, or micro-services between individuals under protected platform escrows.", ...getDetail("Peer-to-Peer (P2P) Model") },
  { name: "Managed Service Model", desc: "Runs entire infrastructure operations for clients under structured performance SLAs and retentive pricing.", ...getDetail("Managed Service Model") },
];

export const industryModels = {
  "real-estate": [
    { name: "Broker Aggregator Model", desc: "Aggregates independent brokers on a single system dashboard, routing captured high-intent property leads dynamically.", howItWorks: "Real estate brokers register and complete vetting on the platform. When client leads are captured via area-specific marketing landing pages, the engine routes them to brokers specializing in those coordinates.", revenueModel: "Per-deal transaction commission splits, premium broker highlight subscriptions, platform lead-generation fees.", techStack: "Lead Distribution Engine, CRM Integrations, Broker App Portal, Commission Escalation Ledger.", suitableFor: "Dynamic Real Estate Brokerages, Regional Property Networks." },
    { name: "Builder Inventory Model", desc: "Lists developer inventory directly, providing digital tools for property comparison and direct transaction splits.", howItWorks: "Developers register off-market and under-construction inventories on the platform. Consumers browse detailed 3D structural blueprints, compare unit pricing, and execute reservations.", revenueModel: "Percentage commissions per property purchase, builder project advertisement space, digital reservation fees.", techStack: "3D Spatial Inventory Registry, Live Price Escalation Modules, Escrow Payment Gateways.", suitableFor: "Large Scale Developers, Real Estate Syndicates." },
    { name: "Managed Rental Model", desc: "Leases raw properties, elevates them to high-end executive housing, and operates the units on a rental arbitrage model.", howItWorks: "The company leases long-term residential spaces, implements modern interior transformations, and sublets fully furnished individual rooms to corporate workers.", revenueModel: "Rental price arbitrage (margin between flat long-term lease costs and high-occupancy co-living rental payouts).", techStack: "Co-Living Tenant Portal, Auto-Billing Recurrings, Maintenance Dispatch Tickets.", suitableFor: "Executive Stays Providers, Co-living Operators, Student Housing Hubs." },
    { name: "Tokenized Property Investment", desc: "Fractionalizes high-ticket real estate assets, letting retail investors purchase equity shares and draw monthly rental yields.", howItWorks: "High-yield commercial properties are acquired and fractionalized into micro-equity shares. Small investors purchase digital units and collect proportional rental payouts.", revenueModel: "Asset ingestion transaction fees, ongoing portfolio property management cuts, secondary market trading margins.", techStack: "Fractional Ledger Registry, Portfolio Telemetry Cockpit, Automatic Dividends Distribution.", suitableFor: "Real Estate Crowdfunding, Alternative Asset Portals." },
    { name: "Virtual Property Tour Model", desc: "Drafts interactive 3D virtual tours for long-distance and international buyers, charging builders per-project modeling rates.", howItWorks: "Deploys specialized high-resolution architectural scanning cameras to draft full 3D virtual walkthroughs of pre-construction and luxury units.", revenueModel: "Bespoke VR creation project commissions, recurring hosting fees for interactive 3D spaces.", techStack: "Web 3D Render Engine, VR Headsets Integrations, Property Embed API.", suitableFor: "Luxury Listings Agents, International Developer Pools." },
  ],
  "healthcare": [
    { name: "Doctor Aggregator Model", desc: "Coordinates local specialist availability, letting patients check credentials, schedule consults, and manage health folders.", howItWorks: "Certified medical professionals register and update active shifts. Patients perform parameterized query searches based on symptoms, check ratings, and initiate appointments.", revenueModel: "Consultation convenience booking cuts, monthly clinic scheduler SaaS subscriptions.", techStack: "EHR Compliant Storage, Real-time Slot Lockers, Telemedicine WebRTC Console.", suitableFor: "Private Practitioner Pools, Clinical Care Hubs." },
    { name: "Medicine Dark Store Model", desc: "Manages urban micro-pharmacy nodes to store, track, and dispatch prescription drugs in under 30 minutes.", howItWorks: "Deploys secure, temp-controlled dark stores across major sectors. On order, inventory checking occurs automatically, and a nearby courier dispatches the medicine.", revenueModel: "Direct product markup margins, premium swift delivery surcharges, priority order passes.", techStack: "Dynamic WMS, Prescription Ingestion OCR, Real-time Logistics Fleet Routing.", suitableFor: "Healthcare Logistics Networks, Pharmacy Group Consolidations." },
    { name: "At-Home Healthcare Model", desc: "Dispatches licensed medical caretakers directly to patient properties, billing structural care hour rates.", howItWorks: "Coordinates home care requirements (physiotherapy, post-op dressing, geriatric care). The dispatch system allocates nearby qualified caretakers based on patient needs.", revenueModel: "Per-visit operational service fees, monthly recurring family care plans.", techStack: "Caretaker Dispatcher, Medical Tasks Tracker, Geo-Fencing Attendance Monitor.", suitableFor: "Elderly Support Agencies, Post-Surgery Wellness Services." },
    { name: "Subscription Healthcare Model", desc: "Bundles corporate and family wellness perks into a monthly plan, offering unlimited telemedicine consults.", howItWorks: "Provides flat monthly premium subscriptions. Members access round-the-clock general physician video sessions, free prescription dispatches, and diagnostics discounts.", revenueModel: "Recurring monthly family subscriptions, corporate premium health retainers.", techStack: "Tiered Billing Portal, WebRTC Consultation Rooms, Diagnostics Booking Router.", suitableFor: "Corporate Benefit Aggregators, Primary Healthcare Collectives." },
    { name: "Diagnostic Pickup Model", desc: "Collects blood and lab samples from patient properties, processing them at pathology hubs with digital report outputs.", howItWorks: "Patients book diagnostic panels online. A certified phlebotomist is dispatched to collect bio-samples. Materials are logged, processed at partner labs, and digitized.", revenueModel: "Commissions from partner pathology centers, collection visit fees, customized premium health bundles.", techStack: "Cold-Chain Logistics Tracker, Pathology Ingestion APIs, Secure HIPAA Report Portal.", suitableFor: "Diagnostic Pathology Networks, Preventative Health Hubs." },
  ],
  "ecommerce": [
    { name: "Dark Store Quick Commerce", desc: "Manages localized mini-warehouses to fulfill, pack, and deliver consumer essentials in under 15 minutes.", howItWorks: "Deploys dark stores in core urban zip codes. Real-time inventory monitors sync items. When ordered, a micro-picker packs the basket in under 3 minutes for courier handoff.", revenueModel: "Retail inventory margins, peak-hour dynamic delivery surcharges, prioritized packing fees.", techStack: "Real-time Inventory Monitor, Automated In-store Picker App, Hyperlocal Fleet Router.", suitableFor: "Grocery Distribution Groups, Daily Essentials Chains." },
    { name: "Dropshipping Model", desc: "Displays supplier stock online, automating purchase logs to trigger direct factory-to-consumer fulfillment.", howItWorks: "Integrates dropshipping storefronts with overseas supplier APIs. When a customer orders, the platform buys the item from the supplier at wholesale, routing shipping details.", revenueModel: "Arbitrage margin (the difference between customer retail price and supplier wholesale cost).", techStack: "Supplier Product Sync, Automated Ordering API, International Parcel Tracker.", suitableFor: "Niche Retail Brands, Digital Marketing Agencies." },
    { name: "Local Shop Aggregator", desc: "Unifies physical neighborhood shops under a single checkout app, facilitating local delivery networks.", howItWorks: "Local merchants input catalog data via a simple terminal. Shoppers browse and place consolidated orders from nearby vendors, processed by dedicated couriers.", revenueModel: "Merchant commission fees (5-15%), local delivery fees, in-app shop promotional spaces.", techStack: "Merchant Catalog Sync, Multi-Vendor Payment Splits, Hyperlocal Driver Dispatch.", suitableFor: "Municipal Commerce Initiatives, Local Business Hubs." },
    { name: "Private Label Brand Model", desc: "Manufactures proprietary branded items via contract suppliers, scaling direct-to-consumer channels.", howItWorks: "Identifies trending product niches via search metrics. The company contracts manufacturers to produce custom-packaged inventory, selling via direct channels.", revenueModel: "High retail product margins (50-80%), customer high-retention repeat subscriptions.", techStack: "D2C Brand Storefront, Custom Warehouse Management, Marketing Retargeting Systems.", suitableFor: "Custom Wellness Brands, Independent Apparel Projects." },
    { name: "Subscription Commerce Model", desc: "Automates repeating orders for daily essential consumable goods, shipping items on fixed monthly schedules.", howItWorks: "Shoppers select essential commodities (coffee, pet food, shaving sets) and configure delivery schedules. Payment is processed automatically before dispatch.", revenueModel: "Predictable monthly recurring product revenue, dynamic inventory upselling.", techStack: "Subscription Core Engine, Payment Recurrings Gateway, Warehouse Automation Dispatch.", suitableFor: "Consumable Commodity Brands, Pet Supply Distributors." },
  ],
  "home-services": [
    { name: "Gig Worker Aggregator", desc: "Deploys a dynamic platform matching nearby certified technicians with residential maintenance projects.", howItWorks: "When homeowners submit repair tickets, the dispatch algorithm matches nearby vetted contractors based on proximity, credentials, and job ratings.", revenueModel: "Platform matchmaking commission cuts (15-20%), contractor tool subscriptions.", techStack: "On-Demand Resource Allocator, Real-time GPS Tracker, Contractor Operations App.", suitableFor: "Local Plumbing Co-ops, Regional Electrical Contractor Networks." },
    { name: "Verified Partner Network", desc: "Hosts audited, trained local service agencies, letting users book complex home improvement services with secure escrows.", howItWorks: "Integrates established service companies into a premium portal. Clients request detailed projects (remodeling, painting). Payments are held in escrow until completion.", revenueModel: "Project escrow platform transaction cuts, partner background vetting fees.", techStack: "Milestone Escrow Vaults, Service Estimator Engine, Detailed Review Registry.", suitableFor: "Complex Home Improvement Networks, Premium Cleaning Agencies." },
    { name: "Annual Maintenance Subscription", desc: "Provides subscription-based home upkeep contracts, dispatching scheduled technical checkups throughout the year.", howItWorks: "Homeowners pay a flat monthly or annual fee. The system schedules preventative checkups (AC service, filter checks, pest spray) and handles emergency calls.", revenueModel: "Recurring annual maintenance subscriptions, discounted off-plan parts margins.", techStack: "Scheduled Operations Router, Recurring Plans Core, Technical Tasks Planner.", suitableFor: "Appliance Maintenance Brands, Residential Care Groups." },
    { name: "Emergency Fast Service Model", desc: "Guarantees rapid technician arrival under 30 minutes, billing premium priority service rates.", howItWorks: "Maintains dedicated emergency technician hubs. Priority distress calls trigger immediate geo-fenced route dispatches to guarantee rapid onsite presence.", revenueModel: "Premium emergency service pricing, priority membership subscriptions.", techStack: "Priority Queue Handler, Emergency Fleet Dispatcher, Active Route Tracker.", suitableFor: "24/7 Security Networks, Rapid Locksmith & Plumbing Fleets." },
    { name: "Franchise Service Model", desc: "Provides verified system branding and operational tech stacks to local home services business franchises.", howItWorks: "Home care entrepreneurs acquire regional franchise licenses, adopting the company's booking software, customer support hubs, and tech routing engines.", revenueModel: "Upfront franchise acquisition fees, monthly gross revenue royalties, supply chain cuts.", techStack: "Franchise Dashboard, Regional Job Allocation Manager, Unified Operations Hub.", suitableFor: "Multi-City Home Care Expansion, Established Service Franchisers." },
  ],
  "food": [
    { name: "Cloud Kitchen Model", desc: "Runs delivery-only food preparation properties, maximizing kitchen utilization under multiple digital brands.", howItWorks: "Operates commercial kitchens without front-of-house space. Multiple menu concepts (pizza, sushi, burgers) are prepared by the same chefs, optimized for delivery platforms.", revenueModel: "Direct culinary inventory margins, brand licensing royalties, franchise expansion fees.", techStack: "Centralized Order Aggregator, Kitchen Display System (KDS), Delivery Dispatch API.", suitableFor: "Culinary Entrepreneurs, Fast-Casual Restaurant Groups." },
    { name: "Restaurant Aggregator", desc: "Consolidates dining menus under a single platform interface, coordinating courier dispatch networks.", howItWorks: "Restaurants list their operational hours and food menus. Customers place orders, the platform manages payment splits, and dispatches a nearby gig courier.", revenueModel: "Restaurant order commissions (20-30%), consumer delivery fees, premium in-app listings.", techStack: "Multi-Merchant Catalog API, Driver Dispatch Engine, Real-time Delivery Tracker.", suitableFor: "Regional Food Delivery Networks, Restaurant Consolidations." },
    { name: "Hyperlocal Tiffin Subscription", desc: "Packages customizable recurring meal plans, dispatching fresh lunch boxes directly to offices and homes.", howItWorks: "Subscribers curate weekly or monthly nutrition templates. The central kitchen prepares fresh food daily, loaded onto optimization routers for targeted lunch drops.", revenueModel: "Predictable monthly recurring meal subscriptions, dynamic plan updates.", techStack: "Nutritional Menu Planner, Subscription Core Engine, Group Delivery Optimization.", suitableFor: "Corporate Meal Providers, Specialized Nutrition Startups." },
    { name: "Dark Kitchen Franchise", desc: "Licenses virtual brand menus and operational software to existing under-utilized restaurant kitchens.", howItWorks: "Identifies local restaurant kitchens with spare capacity, licensing them virtual brand menus (e.g., virtual chicken wing brand) and routing order feeds.", revenueModel: "Virtual brand licensing royalties, kitchen supply chain commissions.", techStack: "Multi-Brand POS Integration, Global Ingredient Distributor ERP.", suitableFor: "Restaurant Optimization Services, Enterprise Virtual Brands." },
    { name: "Chef Marketplace", desc: "Aggregates independent home chefs on a premium booking platform, listing specialized local culinary events.", howItWorks: "Talented local chefs create listings for private dining experiences or catering. Customers book meals, and the platform holds payments in escrow.", revenueModel: "Catering transaction commission splits, private chef listing subscriptions.", techStack: "Chef Profiles Builder, Escrow Settlement Gateway, Calendar Booking Engine.", suitableFor: "Home Chef Networks, Premium Catering Collectives." },
  ],
  "logistics": [
    { name: "Hyperlocal Delivery Fleet", desc: "Coordinates micro-courier networks within tight municipal sectors, billing per-kilometer freight routing.", howItWorks: "Binds nearby gig delivery riders via active mobile GPS signals. Third-party merchants place order dispatches, routed to optimal riders by distance.", revenueModel: "Dynamic per-kilometer courier routing fees, merchant platform access retainers.", techStack: "Active Mobile GPS Tracker, Dispatch Routing Matrix, Dynamic Pricing Engine.", suitableFor: "Last-Mile Delivery Services, Hyperlocal Logistics Hubs." },
    { name: "Truck Aggregator Model", desc: "Unifies commercial truck operators on an active load-matching board, automating freight assignments.", howItWorks: "Cargo shippers submit load metrics (weight, dimensions, route). Truck owners query lists and claim shipments via mobile terminals, backed by secure documentation.", revenueModel: "Freight brokerage transaction cuts (10-15%), carrier premium load subscriptions.", techStack: "B2B Cargo Matcher, Electronic Bill of Lading, Truck Telematics API.", suitableFor: "Regional Cargo Shippers, Fleet Operators Networks." },
    { name: "Warehouse-as-a-Service", desc: "Exposes scalable commercial storage and inventory pick-and-pack services to digital brands.", howItWorks: "Distributes warehousing spaces as a flexible resource. E-commerce merchants ship goods to hubs, paying strictly for storage volume and shipping processing tasks.", revenueModel: "Monthly pallet storage storage fees, individual pick-and-pack processing margins.", techStack: "Inventory Management ERP, Pallet Space Tracker, Shipping APIs Integration.", suitableFor: "E-Commerce Fulfillment Platforms, Supply Chain Managers." },
    { name: "Micro Fulfillment Centers", desc: "Deploys localized urban packaging hubs to process, bundle, and route final-mile parcel handoffs.", howItWorks: "Sets up high-efficiency micro-fulfillment nodes in city zones. Bulk shipments are split into individual packages and handed over to local delivery fleets.", revenueModel: "Micro-fulfillment packaging convenience fees, bulk consolidation rates.", techStack: "Micro-WMS Scanner, Parcel Label Printing, Carrier Allocation Router.", suitableFor: "Regional E-Commerce Logistics, Delivery Carrier Groups." },
    { name: "Delivery Subscription Model", desc: "Offers flat monthly corporate shipping subscription plans, providing unlimited local parcel dispatches.", howItWorks: "Local businesses pay a fixed monthly membership fee to access guaranteed daily courier dispatches for documents and cargo, bypassing volatile rates.", revenueModel: "Predictable corporate monthly subscriptions, variable over-limit surcharges.", techStack: "B2B Shipping Portal, Automated Invoice Builder, Corporate Fleet Monitor.", suitableFor: "Medical Laboratory Networks, E-Commerce Hubs." },
  ],
  "education": [
    { name: "Live Teacher Marketplace", desc: "Connects independent educators with global students, routing live video classes and payment splits.", howItWorks: "Educators compile profiles, specify course curriculums, and list open slots. Students discover teachers, execute bookings, and enter virtual classrooms.", revenueModel: "Class booking commission cuts (15-25%), premium teacher highlights.", techStack: "Tutor Profiling API, Calendar Sync Manager, WebRTC Video Interface.", suitableFor: "Language Tutoring Hubs, Specialized Hobby Classes." },
    { name: "Recorded Course Subscription", desc: "Curates expert-led digital courses on a premium platform, billing monthly catalog membership fees.", howItWorks: "Industry experts record high-quality training curriculums. Users pay a flat monthly membership fee to draw unlimited access to the educational library.", revenueModel: "Recurring monthly student subscriptions, customized corporate seat licenses.", techStack: "Secure LMS Streaming, Student Progress Analytics, Automated Certificates.", suitableFor: "Professional Skill Upgrades, Corporate Training Platforms." },
    { name: "Hybrid Coaching Model", desc: "Integrates physical coaching center structures with online content registries and assessment systems.", howItWorks: "Students attend physical classrooms for lectures while accessing personalized test portals, review recordings, and assignments at home.", revenueModel: "Unified physical classroom tuition fees, supplemental digital plan additions.", techStack: "Coaching ERP Database, Automated Grading Portal, Live Session Streamer.", suitableFor: "Competitive Exam Centers, University Prep Academies." },
    { name: "AI Tutor Assistant", desc: "Deploys personalized learning pipelines that automatically adapt educational content to student capabilities.", howItWorks: "Monitors a student's diagnostic test inputs. The cognitive algorithm automatically restructures lesson plans to focus on weak topics.", revenueModel: "Monthly diagnostic app subscriptions, institutional curriculum licenses.", techStack: "Adaptive Learning Engine, Performance Analytics Graph, LLM Tutoring Agent.", suitableFor: "K-12 Educational Platforms, Test Prep Apps." },
    { name: "Exam Preparation Ecosystem", desc: "Bundles prep books, adaptive mock tests, and live mentor channels into a unified dashboard.", howItWorks: "Assembles comprehensive prep material. Students practice with real-time test simulations while accessing direct chat panels for mentor feedback.", revenueModel: "Targeted course bundle sales, recurring mock test subscriptions.", techStack: "Interactive Test Engine, Mentor Chat Gateway, Content Manager.", suitableFor: "National Certification Prep, Entrance Exams Training." },
  ],
  "fintech": [
    { name: "Commission-Based Investment App", desc: "Enables digital stock and mutual fund investments, extracting micro-commissions per transaction.", howItWorks: "Provides streamlined stock, bond, and fund investment interfaces. Users verify KYC, link bank portals, and execute trades with automatic commission splits.", revenueModel: "Asset brokerage commissions, advisory asset cuts, premium analytics subscriptions.", techStack: "BSE/NSE API Integration, Automated KYC Ingestion, Portfolio Analytics Engine.", suitableFor: "Wealth Management Portals, Micro-Investment Applications." },
    { name: "BNPL (Buy Now Pay Later)", desc: "Integrates flexible split-payment checkout pathways, driving up transactional volumes for merchants.", howItWorks: "When purchasing online, customers select the BNPL option. The risk engine approves credit in seconds, splitting the invoice into interest-free installments.", revenueModel: "Merchant checkout transaction fees, user late fees, installment interest.", techStack: "Alternative Credit Scorecard, Automated Invoicing Router, Payment Escrows.", suitableFor: "High-Ticket Retailers, Leisure & Travel Storefronts." },
    { name: "Micro Lending Platform", desc: "Dispenses small-volume collateral-free loans instantly, using alternative data credit scorecards.", howItWorks: "Consumers request micro-loans (e.g., $100-$500) for emergencies. Alternate credit scorecards evaluate risk via mobile telemetry, executing instant payouts.", revenueModel: "Upfront processing commissions, daily interest percentages, late penalty charges.", techStack: "Alternate Credit Evaluator, Digital KYC Gateway, Automated UPI Collections.", suitableFor: "Gig Worker Financing, Emergency Consumer Credit." },
    { name: "Trading Community Subscription", desc: "Hosts professional market analysts who share real-time signals with verified premium community members.", howItWorks: "Market experts publish strategic trading signals and investment strategies. Subscribers pay a monthly fee to gain real-time SMS or chat signal alerts.", revenueModel: "Monthly community access subscriptions, private advisory retainers.", techStack: "High-Speed Signal Router, Subscription Engine, Community Gateway.", suitableFor: "Forex & Crypto Trading Groups, Stock Analysts Networks." },
    { name: "Expense Automation SaaS", desc: "Unifies invoicing, bookkeeping, and business tax calculations on a multi-tenant cloud setup.", howItWorks: "Companies connect their business accounts via bank APIs. The accounting engine reads invoices, automatically categorizes expenses, and generates tax logs.", revenueModel: "Monthly/yearly corporate SaaS subscriptions, premium billing extensions.", techStack: "Open Banking API, Automated Receipt Parser, Tax Logging Matrix.", suitableFor: "Small Business Accounting, Startup Bookkeeping Platforms." },
  ],
  "travel": [
    { name: "Hotel Aggregator", desc: "Standardizes boutique hotels under a unified booking interface, ensuring quality guidelines.", howItWorks: "Boutique hotels join the partner platform. The company implements standardized amenities and lists rooms across aggregated travel platforms.", revenueModel: "Commission splits per room night booked (15-25%), property management fees.", techStack: "PMS Integration, Global Distribution Router, Room Allocation Matrix.", suitableFor: "Boutique Hotel Chains, Budget Stays Aggregators." },
    { name: "Experience Marketplace", desc: "Aggregates verified local activity guides and bookings under a single geographic directory.", howItWorks: "Local tour guides, outdoor event organizers, and instructors list their schedules. Tourists query activities by city, booking slots under secure escrows.", revenueModel: "Experience transaction commission cuts, guide listing verification fees.", techStack: "Dynamic Scheduling Ledger, Client Review Matrix, Payment Escrow Gateway.", suitableFor: "Adventure Travel Portals, City Tourism Groups." },
    { name: "Travel Subscription Model", desc: "Gives frequent travelers access to exclusive hotel rates and private airport lounges for monthly membership fees.", howItWorks: "Members pay recurring fees to draw discounted corporate rates on flights, hotels, and luxury car rentals, bypassing volatile retail markups.", revenueModel: "Monthly recurring consumer subscriptions, hotel partner commissions.", techStack: "Exclusive Rates Aggregator, Lounge Access API, Membership Portal.", suitableFor: "Business Travel Groups, Frequent Vacationers." },
    { name: "Group Travel Community", desc: "Assembles curated shared group itineraries, matching solo travelers by profiles and dividing travel costs.", howItWorks: "Organizes themed group itineraries. Travelers apply, match with compatible roommates by system profiles, and make group payments for the tour.", revenueModel: "Itinerary package markup margins, community membership fees.", techStack: "Community Matcher, Group Payment Splitter, Itinerary Builder API.", suitableFor: "Solo Travel Clubs, Adventure Outings Agencies." },
    { name: "Luxury Concierge Model", desc: "Coordinates bespoke, high-end travel plans (private jets, luxury villas) for high-net-worth clients under annual retainers.", howItWorks: "Provides customized luxury travel planning. Elite operators secure custom assets (yachts, jets, private estates) under dedicated personal portfolios.", revenueModel: "Bespoke annual concierge retainers, asset booking markup commissions.", techStack: "Private Clients Dashboard, Global Asset Partner Network, Direct Booking API.", suitableFor: "HNW Individuals Travel, Corporate Executive Concierges." },
  ],
  "automobile": [
    { name: "Bike Taxi Aggregator", desc: "Manages on-demand two-wheeler taxi booking dashboards, optimizing city route dispatch allocations.", howItWorks: "Enrolls independent motorbike riders. Urban commuters request immediate trips via mobile, routed by the platform dispatcher to the closest rider.", revenueModel: "Platform trip commission cuts (20%), dynamic surge pricing, local delivery additions.", techStack: "Dynamic Ride Allocator, Active GPS Tracking, Dynamic Fare Matrix.", suitableFor: "Municipal Transit Agencies, Last-Mile Commuting Networks." },
    { name: "Vehicle Rental Subscription", desc: "Offers flexible vehicle rentals on a monthly flat-fee contract, covering maintenance and insurance.", howItWorks: "Users choose cars or motorbikes online and subscribe. The monthly contract automatically includes full insurance coverage, registration, and routine care.", revenueModel: "Predictable monthly vehicle subscriptions, mileage overage charges.", techStack: "Fleet Registry Database, Rental Scheduling Board, Vehicle Telematics API.", suitableFor: "Corporate Commuting Fleets, Digital Nomads Mobility." },
    { name: "Used Vehicle Marketplace", desc: "Hosts certified direct buyers-to-sellers vehicle listings, offering comprehensive mechanical inspection reports.", howItWorks: "Individual vehicle owners list listings. The marketplace dispatches inspectors to generate full mechanical reports, handling payment escrows and title shifts.", revenueModel: "Listing convenience fees, inspection report sales, vehicle finance commissions.", techStack: "Vehicle Specifications API, Inspection Registry, Escrow Gateway.", suitableFor: "Used Cars Distributing Groups, Automotive Dealership Platforms." },
    { name: "Doorstep Vehicle Service", desc: "Dispatches mobile mechanical stations to client driveways for onsite auto maintenance.", howItWorks: "Vehicle owners schedule maintenance (oil change, battery replacement, detailing). A equipped mobile van is dispatched to service the vehicle on-site.", revenueModel: "Service hour fees, parts retail margins, commercial preventive subscriptions.", techStack: "Mobile Mechanic Dispatcher, Parts Inventory ERP, Onsite Service App.", suitableFor: "Residential Auto Maintenance, Fleet Upkeep Networks." },
    { name: "EV Charging Network Model", desc: "Operates dynamic electric vehicle charging station grids, offering automated pay-per-use billing.", howItWorks: "Installs EV chargers in commercial spaces. Drivers locate stations via mobile, initialize charging sessions, and pay automatically by kilowatt-hour.", revenueModel: "Kilowatt-hour markup margins, premium charging subscriptions, station host partnerships.", techStack: "EV Grid Management System, OCPP Charger Connector, Mobile Billing App.", suitableFor: "Commercial Real Estate Groups, EV Fleet Service Stations." },
  ],
  "ai-saas": [
    { name: "Subscription SaaS Model", desc: "Hosts proprietary enterprise utilities in the cloud, generating predictable recurring subscription revenue.", howItWorks: "Builds high-value multi-tenant software tools. Corporate users sign up and pay flat monthly tier rates to manage their daily business workflows.", revenueModel: "Recurring monthly software licensing, scalable user seat licenses, advanced feature add-ons.", techStack: "Cloud Hosting Registry, Multi-Tenant Database, Subscription Invoicing Engine.", suitableFor: "B2B Workflow Platforms, Corporate Management Startups." },
    { name: "Usage-Based AI Pricing", desc: "Bills AI software utilization strictly by volume, monitoring token usage and API computation cycles.", howItWorks: "Exposes advanced cognitive LLM endpoints. Developer portals monitor usage automatically, billing clients precisely by processed data tokens or volume.", revenueModel: "Pay-as-you-go volume charging, tiered enterprise threshold contracts.", techStack: "Cognitive API Gateway, Metered Usage Monitor, Automated Billing API.", suitableFor: "Cognitive API Engines, AI Image & Text Models." },
    { name: "White Label SaaS", desc: "Allows enterprise clients to deploy proprietary software systems under their own customized branding layouts.", howItWorks: "Licenses the core system engine to partner firms. The partner customizes brand logos, color schemas, and domains, reselling the tool to their user base.", revenueModel: "Core engine licensing retainers, custom design integration setup fees.", techStack: "Multi-tenant Domain Router, Client Branding Configurator, Reseller Billing.", suitableFor: "Agency Software Resellers, Enterprise White Label Distributors." },
    { name: "AI Automation Agency", desc: "Audits manual operational bottlenecks, creating custom RPA scripts, automated routers, and LLM agent networks.", howItWorks: "Our team audits a company's manual data flows. We implement custom robotic process automation (RPA) networks and cognitive agents to replace manual entries.", revenueModel: "Custom project blueprint implementation fees, monthly system upkeep SLA retainers.", techStack: "RPA Orchestrator Engine, AI Framework Integrators, Automated APIs Router.", suitableFor: "Manual Operations Auditing, Workflow Efficiency Improvements." },
    { name: "Freemium Conversion Model", desc: "Offers a highly functional free software core, driving organic customer acquisition toward paid premium upgrades.", howItWorks: "Releases a clean digital utility with robust capabilities for free. Users seeking advanced workspace features, team collaboration, or custom integrations upgrade to paid tiers.", revenueModel: "Premium subscription conversion margins, functional workspace additions.", techStack: "Feature Flag Manager, User Tier Monitor, In-App Upgrades Gateway.", suitableFor: "Productivity Apps Startups, Design & Media Utilities." },
  ],
  "creator-economy": [
    { name: "Paid Community Model", desc: "Enables content experts to run private membership clubs, billing monthly subscription fees for forum access.", howItWorks: "Coaches or experts create private membership channels. The platform restricts message boards, training libraries, and event links to active subscribers.", revenueModel: "Monthly recurring community memberships, private event sales, sponsor placements.", techStack: "Community Portal Database, Video Storage CDN, Stripe Billing Engine.", suitableFor: "Specialist Coaches, Business Masterminds, Academic Guilds." },
    { name: "Digital Product Sales", desc: "Facilitates direct online downloads of files (code templates, digital design sets) with instant payouts.", howItWorks: "Creators build downloadable design files or templates. The storefront hosts files securely, executing instant email downloads when payment is verified.", revenueModel: "Direct product margin sales, platform transaction convenience splits.", techStack: "Secure Digital File Vault, Automated Email Dispatcher, Payments Ingest.", suitableFor: "SaaS Template Designers, Digital Authors, Graphic Artists." },
    { name: "Brand Sponsorship Marketplace", desc: "Binds marketing brands with targeted digital influencers, facilitating campaign agreements under secure escrows.", howItWorks: "Brands post detailed marketing campaigns. Influencers apply and list pricing metrics. The platform holds campaign deposits in escrow until deliverables are published.", revenueModel: "Sponsorship escrow transaction cuts, brand campaign listing subscriptions.", techStack: "Influencer Analytics Scraper, Milestone Escrow Vault, Campaign Manager.", suitableFor: "Influencer Marketing Agencies, Social Media Consolidations." },
    { name: "Fan Subscription Platform", desc: "Provides high-value exclusive behind-the-scenes content libraries in exchange for premium monthly subscriptions.", howItWorks: "Artists and creators host exclusive video, audio, and chat feeds. Fans purchase monthly tier subscriptions to access the private media catalog.", revenueModel: "Tiered fan subscription splits, direct visual tip allocations.", techStack: "Media Streaming Server, Tiered Access Controller, Creator Payout Ledger.", suitableFor: "Independent Musicians, Creative Video Makers, Podcasters." },
    { name: "AI Creator Assistant Platform", desc: "Hosts automated AI writing, image rendering, and scheduling tools to accelerate digital media workflows.", howItWorks: "Creators utilize AI generators to automate scripting, draft graphic banners, and schedule multi-channel social media dispatches from a single cockpit.", revenueModel: "Recurring monthly assistant subscriptions, volume-based generation billing.", techStack: "AI Generation Interface, Multi-platform Scheduler API, Media Importer.", suitableFor: "Social Media Managers, Independent Copywriters." },
  ],
};

export const trending2026 = [
  "AI Automation", "Hyperlocal Delivery", "Quick Commerce", "Aggregator",
  "SaaS", "Subscription", "Creator Economy", "D2C Brand", "Marketplace", "Community + Membership",
];

export function modelSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function getModelsByCategory(categoryId) {
  if (categoryId === "popular") return popularModels;
  return industryModels[categoryId] || [];
}

export function getCategory(categoryId) {
  return categories.find(c => c.id === categoryId) || null;
}

export function getAllModelEntries() {
  const entries = [];
  for (const cat of categories) {
    const models = getModelsByCategory(cat.id);
    for (const model of models) {
      entries.push({ category: cat.id, slug: modelSlug(model.name) });
    }
  }
  return entries;
}

export function getModelBySlug(categoryId, slug) {
  const models = getModelsByCategory(categoryId);
  return models.find(m => modelSlug(m.name) === slug) || null;
}
