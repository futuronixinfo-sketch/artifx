export const projectsIntro = {
    title: "Real Systems. Real Business Problems.",
    subtitle: "Every project at Artifx begins with a business challenge — not with design or features."
};

export const projectFilters = [
    "All",
    "Websites",
    "E-Commerce",
    "Real Estate",
    "Education",
    "Digital Solutions"
];

export const projects = [
    {
        slug: "impact-talent-centre",
        type: "Education & Talent Center",
        client: "Impact Talent Centre",
        url: "https://campaigns.impacttalentcentre.com/",
        image: "/images/impact/1.png",
        gallery: ["/images/impact/2.png", "/images/impact/3.png", "/images/impact/4.png"],
        context: "A Dubai-based talent development center offering expert-led programs in music, dance, UCMAS abacus, martial arts, and languages for children and adults.",
        problem: [
            "Manual inquiry and lead management across channels",
            "Fragmented program registration process",
            "No centralized booking system for free trials",
            "Difficulty showcasing 10+ programs effectively"
        ],
        solution: [
            "Campaign landing page with program showcase",
            "Integrated consultation booking form",
            "Automated lead capture with instant confirmation",
            "Mobile-optimized responsive design"
        ],
        architecture: ["Next.js", "Responsive Design", "Form Automation", "WhatsApp Integration"],
        impact: [
            "Streamlined student enrollment process",
            "Simplified free trial booking for 500+ families",
            "Centralized lead management system"
        ],
        quote: "Where young talents shine — expert-led programs for holistic development.",
        feedback: [
            { name: "Wazir Akhtar", role: "Parent", text: "Impact Talent and Performing Arts Center is a premier destination for nurturing talent and creativity in individuals of all ages." },
            { name: "Keyboard Star", role: "Student", text: "I have been studying at Impact since age 6. I can very confidently confirm that Impact has had a huge impact on my life suiting its name." },
            { name: "Anu Arya", role: "Parent of 7-year-old", text: "The quality of the training programs is outstanding. The instructors are well-versed with their work, passionate, and put their best into every class." }
        ]
    },
    {
        slug: "mqamy-real-estate",
        type: "Real Estate Portal",
        client: "Mqamy Real Estate",
        url: "https://mqamy-website.vercel.app/",
        image: "/images/mqamy/1.png",
        gallery: ["/images/mqamy/2.png", "/images/mqamy/3.png", "/images/mqamy/4.png"],
        context: "A Dubai-based real estate firm needing a premium digital presence to showcase luxury properties and attract high-net-worth investors.",
        problem: [
            "Outdated website not reflecting premium brand image",
            "Poor property listing presentation",
            "Inefficient lead capture from prospective investors",
            "Lack of trust-building elements for international clients"
        ],
        solution: [
            "Modern real estate portal with sleek UI",
            "Dynamic property listing pages",
            "Expert team showcase with agent profiles",
            "Integrated contact and inquiry system"
        ],
        architecture: ["Next.js", "Vercel Deployment", "Responsive UI", "Contact Form Integration"],
        impact: [
            "Elevated brand presence in competitive Dubai market",
            "Improved property inquiry conversion",
            "Seamless experience for international investors"
        ],
        quote: "Your property, our passion — price or quality? With us you give up nothing.",
        feedback: [
            { name: "Ahmed Wazir", role: "GM at Mqamy Real Estate", text: "At Mqamy Real Estate, the focus is always on people, not just property. Every investor we work with deserves honest advice, clear numbers, and a smooth experience." }
        ]
    },
    {
        slug: "legacy-wear",
        type: "E-Commerce Platform",
        client: "Legacy Wear",
        url: "https://www.legacywear.in/",
        image: "/images/legecy/1.png",
        gallery: ["/images/legecy/2.png", "/images/legecy/3.png", "/images/legecy/4.png"],
        context: "A fashion brand needing a full-featured e-commerce platform to sell timeless clothing pieces with a seamless shopping experience.",
        problem: [
            "No online presence for brand reach",
            "Manual order management and tracking",
            "Poor mobile shopping experience",
            "Limited payment and checkout options"
        ],
        solution: [
            "Complete e-commerce storefront",
            "Product catalog with categories and collections",
            "Shopping cart and checkout system",
            "Responsive design for all devices"
        ],
        architecture: ["Next.js", "E-Commerce Engine", "Payment Integration", "Responsive UI"],
        impact: [
            "Launched online store for nationwide reach",
            "Seamless shopping experience across devices",
            "Scalable platform for future growth"
        ],
        quote: "Timeless fashion for the modern generation — quality clothing that tells your story.",
        feedback: []
    },
    {
        slug: "beabeyond",
        type: "Minimalist Fashion Brand",
        client: "BeaBeyond",
        url: "https://www.beabeyond.com/",
        image: "/images/beabeyond/1.png",
        gallery: ["/images/beabeyond/2.png", "/images/beabeyond/3.png", "/images/beabeyond/4.png"],
        context: "A minimalist fashion brand needing a dual-platform presence — a main brand site and a dedicated clothing store — both reflecting their sharp, monochrome aesthetic.",
        problem: [
            "Brand identity not consistently represented online",
            "Separate needs for brand showcase and e-commerce",
            "Need for editorial-style product presentation",
            "Mobile-first shopping experience required"
        ],
        solution: [
            "Main brand website with editorial storytelling",
            "Dedicated clothing store with quick-add shopping",
            "Collection-based product organization",
            "Newsletter and community integration"
        ],
        architecture: ["Next.js", "E-Commerce UI", "Responsive Design", "Newsletter Integration"],
        impact: [
            "Cohesive brand experience across both platforms",
            "Enhanced product discovery with editorial layout",
            "Increased newsletter signups and customer retention"
        ],
        quote: "Minimalism, structure, and timeless design — defined by sharp silhouettes.",
        feedback: []
    },
    {
        slug: "futuronix",
        type: "Digital Solutions Agency",
        client: "Futuronix",
        url: "https://www.futuronix.ae/",
        image: "/images/futuronix/1.png",
        gallery: ["/images/futuronix/2.png", "/images/futuronix/3.png", "/images/futuronix/4.png"],
        context: "A Dubai-based digital solutions company needing a powerful website to showcase their automation, AI, and SaaS products to drive client acquisition.",
        problem: [
            "Agency services not clearly communicated online",
            "No centralized portfolio of SaaS products",
            "Difficulty converting visitors into leads",
            "Complex service offerings hard to navigate"
        ],
        solution: [
            "Modern agency website with service architecture",
            "SaaS product showcase with pricing tiers",
            "Case study and client success sections",
            "CTA-optimized lead generation flow"
        ],
        architecture: ["Next.js", "SEO Optimization", "Analytics Integration", "Lead Capture System"],
        impact: [
            "Clear service differentiation across 4 verticals",
            "Launched SaaS product marketplace",
            "Improved lead quality and consultation bookings"
        ],
        quote: "We build smart business systems — turning chaos into efficiency.",
        feedback: [
            { name: "Vaibhav", role: "Creative Interiors", text: "Futuronix transformed how we showcase our interior projects. The automation in our lead follow-ups has been a game changer." },
            { name: "Shristi", role: "Shristi Clothing", text: "Our e-commerce site is now faster and more intuitive. Sales have increased significantly since we switched to their custom solution." },
            { name: "Afrid", role: "Agency Client", text: "We needed a site that reflects our creativity. Futuronix delivered exactly that, with a sleek design and powerful backend." },
            { name: "Anand R.", role: "Global Logistics", text: "The custom CRM they built for our operations is lightyears ahead of what we were using. It captures and manages leads seamlessly." }
        ]
    },
    {
        slug: "adporate",
        type: "Digital Agency Portfolio",
        client: "Adporate",
        url: "https://www.adporate.co/",
        image: "/images/adporate/1.png",
        gallery: ["/images/adporate/2.png", "/images/adporate/3.png", "/images/adporate/4.png"],
        context: "An award-winning digital agency needing a comprehensive website to showcase their services, portfolio, and attract high-value clients across multiple industries.",
        problem: [
            "Agency portfolio spread across multiple platforms",
            "Service offerings not clearly organized",
            "Need for trust-building client testimonials",
            "Inefficient client inquiry process"
        ],
        solution: [
            "Full-featured agency website with service catalog",
            "Portfolio showcase with project case studies",
            "Client testimonial and trust signal sections",
            "Integrated booking and contact system"
        ],
        architecture: ["Next.js", "SEO Strategy", "Analytics", "Contact Automation"],
        impact: [
            "Centralized portfolio with structured case studies",
            "Enhanced client trust with testimonials and awards",
            "Streamlined client onboarding process"
        ],
        quote: "We craft digital experiences that transform businesses through innovation and creativity.",
        feedback: [
            { name: "John Doe", role: "CEO, TechCorp", text: "Working with Adporate was an absolute pleasure. Their attention to detail and innovative approach transformed our digital presence completely." },
            { name: "Sarah Lee", role: "Founder, StartupX", text: "The team delivered an exceptional website that perfectly captures our brand essence. Their expertise in UI/UX design is unmatched." },
            { name: "Michael Smith", role: "Marketing Director, EcomBrands", text: "From concept to launch, they guided us through every step. Our e-commerce platform now drives incredible results." }
        ]
    }
];

export function getProjectBySlug(slug) {
    return projects.find(p => p.slug === slug) || null;
}

export const commonPhilosophy = [
    "System-First Approach",
    "Scalable Architecture",
    "Clean Data Flow",
    "Automation Mindset",
    "Future-Ready Design"
];
