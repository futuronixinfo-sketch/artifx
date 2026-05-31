

import ServiceIndex from '@/components/sections/services/ServiceIndex';
import ServiceDetails from '@/components/sections/services/ServiceDetails';
import WhatWeDontDo from '@/components/sections/services/WhatWeDontDo';
import EngagementFlow from '@/components/sections/services/EngagementFlow';
import ServicesCTA from '@/components/sections/services/ServicesCTA';

export const metadata = {
  title: "Services — Development & Automation | Artifx",
  description: "Our core offerings: Custom AI Solutions, Web Applications, and Digital Transformation Strategy.",
};

export default function ServicesPage() {
  return (
    <>
      <ServiceIndex />
      <ServiceDetails />
      <WhatWeDontDo />
      <EngagementFlow />
      <ServicesCTA />
    </>
  );
}
