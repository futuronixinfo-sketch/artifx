

import SaasVision from '@/components/sections/saas/SaasVision';
import WhySaas from '@/components/sections/saas/WhySaas';
import SaasPhilosophy from '@/components/sections/saas/SaasPhilosophy';
import ProductsInBuild from '@/components/sections/saas/ProductsInBuild';
import WhyDifferent from '@/components/sections/saas/WhyDifferent';
import SaasArchitecture from '@/components/sections/saas/SaasArchitecture';
import SaasCTA from '@/components/sections/saas/SaasCTA';

export const metadata = {
  title: "SaaS Products — Building Key Infrastructure | Artifx",
  description: "Explore the internal tools and SaaS products we are building to solve complex operational problems.",
};

export default function SaaSPage() {
  return (
    <>
      <SaasVision />
      <WhySaas />
      <SaasPhilosophy />
      <ProductsInBuild />
      <WhyDifferent />
      <SaasArchitecture />
      <SaasCTA />
    </>
  );
}
