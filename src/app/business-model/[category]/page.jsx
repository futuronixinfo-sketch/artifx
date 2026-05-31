import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';
import { categories, getCategory, getModelsByCategory, trending2026 } from '@/data/business-models';
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
      <section className="pt-36 pb-20 text-center">
        <p className="text-gray-500">Category not found.</p>
        <Link href="/business-model" className="text-red-600 text-sm underline mt-4 inline-block">Back to Business Models</Link>
      </section>
    );
  }

  return (
    <>
      <section className="relative pt-40 pb-16 bg-white border-b border-gray-100 overflow-hidden select-none">
        {/* Soft Background Grid Guides */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

        {/* Decorative vertical center grid guide */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-gray-200 via-gray-100 to-transparent pointer-events-none" />

        {/* Ambient Crimson Aura Backdrop */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-red-50/50 rounded-full blur-[100px] pointer-events-none z-0" />

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
          {/* High-tech Back Capsule */}
          <Link 
            href="/business-model" 
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-[9px] font-mono uppercase tracking-widest text-gray-500 hover:text-black transition-all mb-6 relative z-10 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-red-500" />
            [ BACK_TO_CATEGORIES ]
          </Link>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {/* Glowing High-Tech Icon Bezel */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 text-3xl flex items-center justify-center shadow-sm shrink-0">
                {cat.icon}
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight leading-none">
                  {cat.name}
                </h1>
                <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider mt-1.5">
                  {cat.tagline}
                </p>
              </div>
            </div>

            {/* Uptime and models telemetry badge */}
            <div className="flex flex-col items-start md:items-end justify-center font-mono">
              <span className="px-2.5 py-1 rounded bg-red-50 text-red-600 border border-red-100 text-[9px] font-bold uppercase tracking-widest">
                [ ACTIVE_DECK // {cat.count} MODELS LOADED ]
              </span>
              <span className="text-[7.5px] text-gray-400 mt-1.5 uppercase tracking-widest">
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

