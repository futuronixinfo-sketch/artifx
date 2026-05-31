

import SolutionsIntro from '@/components/sections/solutions/SolutionsIntro';
import BusinessBreakpoint from '@/components/sections/solutions/BusinessBreakpoint';
import SystemMapping from '@/components/sections/solutions/SystemMapping';
import SolutionLayers from '@/components/sections/solutions/SolutionLayers';
import SolutionAccordion from '@/components/sections/solutions/SolutionAccordion';
import SolutionsCTA from '@/components/sections/solutions/SolutionsCTA';

export const metadata = {
  title: "Solutions — Enterprise System Architecture | Artifx",
  description: "Discover our system-first approach to business growth. We map, architect, and build scalable digital ecosystems.",
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsIntro />
      <BusinessBreakpoint />
      <SystemMapping />
      <SolutionLayers />
      <SolutionAccordion />
      <SolutionsCTA />
    </>
  );
}
