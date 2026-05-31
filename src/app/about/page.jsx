import OpeningStatement from '@/components/sections/about/OpeningStatement';
import WhyArtifx from '@/components/sections/about/WhyArtifx';
import Beliefs from '@/components/sections/about/Beliefs';
import SystemThinking from '@/components/sections/about/SystemThinking';
import HowWeWork from '@/components/sections/about/HowWeWork';
import FounderNote from '@/components/sections/about/FounderNote';
import AboutCTA from '@/components/sections/about/AboutCTA';

export const metadata = {
  title: "About Us — Agency Vision | Artifx",
  description: "Learn about Artifx's vision, our systems-first thinking, and how we help businesses build scalable operational foundations.",
};

export default function AboutPage() {
  return (
    <>
      <OpeningStatement />
      <WhyArtifx />
      <Beliefs />
      <SystemThinking />
      <HowWeWork />
      <FounderNote />
      <AboutCTA />
    </>
  );
}
