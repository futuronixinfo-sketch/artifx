import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Container from '@/components/ui/Container';
import { categories, getCategory, getModelBySlug, getAllModelEntries } from '@/data/business-models';
import ModelDetail from '@/components/sections/business-model/ModelDetail';

export function generateStaticParams() {
  return getAllModelEntries();
}

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const model = getModelBySlug(category, slug);
  if (!model) return { title: 'Model Not Found' };
  return {
    title: `${model.name} — ${getCategory(category)?.name || ''} | Artifx`,
    description: model.desc,
  };
}

export default async function ModelPage({ params }) {
  const { category, slug } = await params;
  const cat = getCategory(category);
  const model = getModelBySlug(category, slug);

  if (!model || !cat) {
    return (
      <section className="pt-36 pb-20 text-center bg-[#FAFAF8]">
        <p className="text-gray-500 font-mono text-sm">Model not found.</p>
        <Link href="/business-model" className="inline-block mt-4 px-4 py-2 border-2 border-black bg-[#FFE500] text-black font-mono text-xs font-black uppercase tracking-widest shadow-[3px_3px_0_#0A0A0A] hover:shadow-[1px_1px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100">
          Back to Business Models
        </Link>
      </section>
    );
  }

  return (
    <>
      <section className="py-8 bg-[#FAFAF8] border-b-2 border-black select-none">
        <Container className="max-w-4xl">
          <Link
            href={`/business-model/${category}`}
            className="inline-flex items-center gap-2 px-3 py-1 border-2 border-black bg-white text-black font-mono text-[10px] font-black uppercase tracking-widest shadow-[3px_3px_0_#0A0A0A] hover:shadow-[1px_1px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100"
          >
            <ArrowLeft className="w-3 h-3" />
            {cat.name}
          </Link>
        </Container>
      </section>

      <ModelDetail model={model} category={cat} />
    </>
  );
}
