

import OpeningStatement from '@/components/sections/about/OpeningStatement';
import WhyArtifx from '@/components/sections/about/WhyArtifx';
import Beliefs from '@/components/sections/about/Beliefs';
import SystemThinking from '@/components/sections/about/SystemThinking';
import HowWeWork from '@/components/sections/about/HowWeWork';
import FounderNote from '@/components/sections/about/FounderNote';
import AboutCTA from '@/components/sections/about/AboutCTA';

export const metadata = {
  title: "About — The System Builders | Artifx",
  description: "Meet the team obsessed with efficiency. Learn about our philosophy, our process, and our vision.",
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
