import Hero from '@/components/sections/Hero';
import ServicesShowcase from '@/components/sections/ServicesShowcase';
import ProjectsShowcase from '@/components/sections/ProjectsShowcase';
import Testimonials from '@/components/sections/Testimonials';
import WhyArtifx from '@/components/sections/WhyArtifx';
import OurProcess from '@/components/sections/OurProcess';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata = {
  title: "Artifx — AI Automation & Digital Systems Agency",
  description: "We build intelligent digital systems, AI automations, and scalable web platforms that help businesses scale faster.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-black">
      <Hero />
      <ServicesShowcase />
      <ProjectsShowcase />
      <Testimonials />
      <WhyArtifx />
      <OurProcess />
      <FinalCTA />
    </main>
  );
}
