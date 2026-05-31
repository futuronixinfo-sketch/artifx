import Hero from '@/components/sections/Hero';
import ServicesShowcase from '@/components/sections/ServicesShowcase';
import ProjectsShowcase from '@/components/sections/ProjectsShowcase';
import ProblemsWeSolve from '@/components/sections/ProblemsWeSolve';
import WhyArtifx from '@/components/sections/WhyArtifx';
import OurProcess from '@/components/sections/OurProcess';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata = {
  title: "Artifx — AI Automation & Digital Systems Agency",
  description: "We build intelligent digital systems, AI automations, and scalable web platforms that help businesses scale faster.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-red-500/30 selection:text-black">
      <Hero />
      <ServicesShowcase />
      <ProjectsShowcase />
      <ProblemsWeSolve />
      <WhyArtifx />
      <OurProcess />
      <FinalCTA />
    </main>
  );
}
