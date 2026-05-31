import SaasVision from '@/components/sections/saas/SaasVision';
import WhySaas from '@/components/sections/saas/WhySaas';
import SaasPhilosophy from '@/components/sections/saas/SaasPhilosophy';
import ProductsInBuild from '@/components/sections/saas/ProductsInBuild';
import WhyDifferent from '@/components/sections/saas/WhyDifferent';
import SaasArchitecture from '@/components/sections/saas/SaasArchitecture';
import SaasCTA from '@/components/sections/saas/SaasCTA';

export const metadata = {
  title: "SaaS Products — Operational Tools | Artifx",
  description: "Explore the battle-tested SaaS tools and business dashboards Artifx builds to solve real operational bottlenecks.",
};

export default function SaasPage() {
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
