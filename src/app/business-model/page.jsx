import BusinessModelHero from '@/components/sections/business-model/BusinessModelHero';
import CategoriesGrid from '@/components/sections/business-model/CategoriesGrid';

export const metadata = {
  title: "Business Models — 13 Categories | Artifx",
  description: "Explore business models across Popular, Real Estate, Healthcare, E-Commerce, Home Services, Food, Logistics, Education, FinTech, Travel, Automobile, AI & SaaS, and Creator Economy.",
};

export default function BusinessModelPage() {
  return (
    <>
      <BusinessModelHero />
      <CategoriesGrid />
    </>
  );
}
