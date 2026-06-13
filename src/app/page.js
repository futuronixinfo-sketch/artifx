import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import ServicesShowcase from '@/components/sections/ServicesShowcase';
import ClientLogos from '@/components/sections/ClientLogos';
import ProjectsShowcase from '@/components/sections/ProjectsShowcase';
import SectionCTA from '@/components/sections/SectionCTA';
import FounderSpotlight from '@/components/sections/FounderSpotlight';
import Testimonials from '@/components/sections/Testimonials';
import TechStack from '@/components/sections/TechStack';
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
      <StatsBar />
      <ServicesShowcase />
      <SectionCTA text="Need A System Like This Built?" cta="Let's Build It" />
      <ClientLogos />
      <ProjectsShowcase />
      <SectionCTA text="Have A Project In Mind?" cta="Book A Discovery Call" />
      <FounderSpotlight />
      <Testimonials />
      <TechStack />
      <WhyArtifx />
      <OurProcess />
      <FinalCTA />
    </main>
  );
}
