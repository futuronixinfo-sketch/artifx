import ProductHero from '@/components/sections/product/ProductHero';
import ProductGrid from '@/components/sections/product/ProductGrid';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata = {
  title: "Products — SaaS Tools by Artifx",
  description: "Explore the SaaS products and internal tools we're building to solve real operational problems.",
};

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <ProductGrid />
      <FinalCTA />
    </>
  );
}
