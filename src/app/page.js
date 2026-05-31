import Hero from '@/components/sections/Hero';
import WhoThisIsFor from '@/components/sections/WhoThisIsFor';
import WhatWeBuild from '@/components/sections/WhatWeBuild';
import ProblemsWeSolve from '@/components/sections/ProblemsWeSolve';
import SystemsWeBuild from '@/components/sections/SystemsWeBuild';
import OurProcess from '@/components/sections/OurProcess';
import WhyArtifx from '@/components/sections/WhyArtifx';
import PartnershipModel from '@/components/sections/PartnershipModel';
import FinalCTA from '@/components/sections/FinalCTA';


export const metadata = {
  title: "Artifx — System Architecture & AI Automation Agency",
  description: "We build high-performance business systems, AI automations, and scalable digital infrastructure for ambitious companies.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Hero />
      <ProblemsWeSolve />
      <OurProcess />
      <WhoThisIsFor />
      <WhatWeBuild />
      <SystemsWeBuild />
      <WhyArtifx />
      <PartnershipModel />
      <FinalCTA />
    </main>
  );
}
