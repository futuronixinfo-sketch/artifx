import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Container from '@/components/ui/Container';
import { categories, getCategory, getModelsByCategory } from '@/data/business-models';
import CategoryModels from '@/components/sections/business-model/CategoryModels';
import TrendingSection from '@/components/sections/business-model/TrendingSection';

export function generateStaticParams() {
  return categories.map(cat => ({ category: cat.id }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return { title: 'Category Not Found' };
  return {
    title: `${cat.name} — Business Models | Artifx`,
    description: `Explore ${cat.name} business models. ${cat.tagline}.`,
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const cat = getCategory(category);
  const models = getModelsByCategory(category);

  if (!cat) {
    return (
      <section className="pt-36 pb-20 text-center bg-[#FAFAF8]">
        <p className="text-gray-500 font-mono text-sm">Category not found.</p>
        <Link href="/business-model" className="inline-block mt-4 px-4 py-2 border-2 border-black bg-[#FFE500] text-black font-mono text-xs font-black uppercase tracking-widest shadow-[3px_3px_0_#0A0A0A] hover:shadow-[1px_1px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100">
          Back to Business Models
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="relative pt-40 pb-16 bg-[#FAFAF8] border-b-2 border-black overflow-hidden select-none">

        {/* Huge Watermarked Background Text */}
        <div className="absolute inset-0 flex items-start justify-center pt-24 z-0 pointer-events-none select-none">
          <div
            className="w-full text-center text-[15vw] font-black tracking-tighter leading-none opacity-[0.03]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            SYSTEMS
          </div>
        </div>

        <Container className="relative z-10 max-w-5xl">
          {/* Back link */}
          <Link
            href="/business-model"
            className="inline-flex items-center gap-1.5 px-3 py-1 border-2 border-black bg-white text-black font-mono text-[9px] font-black uppercase tracking-widest shadow-[3px_3px_0_#0A0A0A] hover:shadow-[1px_1px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100 mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-red-600" />
            [ BACK_TO_CATEGORIES ]
          </Link>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {/* Icon Bezel */}
              <div className="w-14 h-14 bg-white border-2 border-black shadow-[3px_3px_0_#0A0A0A] text-3xl flex items-center justify-center shrink-0">
                {cat.icon}
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight leading-none">
                  {cat.name}
                </h1>
                <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mt-1.5">
                  {cat.tagline}
                </p>
              </div>
            </div>

            {/* Telemetry badge */}
            <div className="flex flex-col items-start md:items-end justify-center font-mono">
              <span className="px-2.5 py-1 bg-[#FFE500] text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A] text-[9px] font-black uppercase tracking-widest">
                [ ACTIVE_DECK // {cat.count} MODELS LOADED ]
              </span>
              <span className="text-[7.5px] text-gray-500 mt-1.5 font-mono uppercase tracking-widest">
                SYSTEMS_STATUS: ON_AIR // LATENCY: 0.01MS
              </span>
            </div>
          </div>
        </Container>
      </section>

      <CategoryModels models={models} categoryId={category} />

      {category === "popular" && <TrendingSection />}
    </>
  );
}
