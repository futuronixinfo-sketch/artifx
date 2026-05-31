import TemplatesHero from '@/components/sections/templates/TemplatesHero';
import TemplatesGrid from '@/components/sections/templates/TemplatesGrid';

export const metadata = {
  title: "Templates — Pre-Built Websites | Artifx",
  description: "Premium pre-built websites ready for purchase. Launch your online presence in days.",
};

export default function TemplatesPage() {
  return (
    <>
      <TemplatesHero />
      <TemplatesGrid />
    </>
  );
}
