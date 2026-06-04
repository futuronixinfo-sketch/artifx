export const products = [
  {
    slug: 'flow',
    name: 'Artifx Flow',
    tagline: 'Agency Operating System',
    description: 'The first high-performance agency OS that runs the entire project lifecycle — from lead scraping and e-signatures to white-labeled client workspaces and automated financial settlements.',
    status: 'Live',
    category: 'Agency Tools',
    accent: '#FFE500',
    accentFg: '#0A0A0A',
    url: 'https://flow.artifx.dev/',
    tags: ['Lead Scraper', 'E-Sign Proposals', 'Client Portal', 'Billing & Invoicing'],
    stats: [
      { label: 'OS Modules', value: '4' },
      { label: 'Time Saved', value: '70%' },
      { label: 'Clients Active', value: '12+' },
    ],
  },
  {
    slug: 'debt-relief',
    name: 'DebtFree',
    tagline: 'Personalized Debt Relief Planning Platform',
    description: 'Answer a few questions about your debt situation and get a structured, step-by-step relief plan — repayment schedules, creditor negotiation scripts, settlement strategies, and financial counseling — all generated instantly.',
    status: 'Coming Soon',
    category: 'FinTech / Personal Finance',
    accent: '#16a34a',
    accentFg: '#ffffff',
    url: null,
    tags: ['Debt Analysis', 'Repayment Plans', 'Creditor Negotiation', 'Settlement Guides', 'Financial Coaching'],
    stats: [
      { label: 'Relief Strategies', value: '12+' },
      { label: 'Avg Debt Cleared', value: '60%' },
      { label: 'Plan Time', value: '<5 min' },
    ],
  },
  {
    slug: 'ui-library',
    name: 'Artifx UI',
    tagline: 'Open-Source Component Library',
    description: 'A production-ready, opinionated React + Tailwind component library built on the Neubrutalism design system. Copy-paste components, design tokens, dark mode, and full TypeScript support — ship faster without starting from scratch.',
    status: 'Coming Soon',
    category: 'Developer Tools',
    accent: '#2563EB',
    accentFg: '#ffffff',
    url: null,
    tags: ['React Components', 'Neubrutalism Design', 'Tailwind CSS', 'TypeScript', 'Dark Mode'],
    stats: [
      { label: 'Components', value: '80+' },
      { label: 'Design Tokens', value: '120+' },
      { label: 'Framework', value: 'React' },
    ],
  },
  {
    slug: 'habitforge',
    name: 'HabitForge',
    tagline: 'Smart Habit Building & Streak Tracker',
    description: 'Build lasting habits with science-backed routines, streak tracking, daily check-ins, and smart reminders. Visualize your progress, identify break patterns, and get AI-powered suggestions to stay consistent.',
    status: 'Coming Soon',
    category: 'Productivity',
    accent: '#f59e0b',
    accentFg: '#0A0A0A',
    url: null,
    tags: ['Habit Streaks', 'Daily Check-ins', 'Progress Analytics', 'AI Suggestions', 'Smart Reminders'],
    stats: [
      { label: 'Habit Templates', value: '50+' },
      { label: 'Avg Streak Gain', value: '3×' },
      { label: 'Check-in Time', value: '<1 min' },
    ],
  },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug) || null;
}
