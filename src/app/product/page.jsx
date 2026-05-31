import ProductHero from '@/components/sections/product/ProductHero';
import ProductShowcase from '@/components/sections/product/ProductShowcase';
import LeadScraperSandbox from '@/components/sections/product/LeadScraperSandbox';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata = {
  title: "Product — Our SaaS & Tools | Artifx",
  description: "Explore the SaaS products and internal tools we're building to solve real operational problems.",
};

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <ProductShowcase />
      <LeadScraperSandbox />
      <FinalCTA />
    </>
  );
}


