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
      <section className="pt-36 pb-20 text-center">
        <p className="text-gray-500">Model not found.</p>
        <Link href="/business-model" className="text-red-600 text-sm underline mt-4 inline-block">Back to Business Models</Link>
      </section>
    );
  }

  return (
    <>
      <section className="py-8 bg-white border-b border-gray-200 select-none">
        <Container className="max-w-4xl">
          <Link href={`/business-model/${category}`} className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
            <ArrowLeft className="w-3 h-3" />
            {cat.name}
          </Link>
        </Container>
      </section>

      <ModelDetail model={model} category={cat} />
    </>
  );
}
