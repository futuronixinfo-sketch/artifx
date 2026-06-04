import { notFound } from 'next/navigation';
import { products, getProduct } from '@/data/products';
import ProductShowcase from '@/components/sections/product/ProductShowcase';
import LeadScraperSandbox from '@/components/sections/product/LeadScraperSandbox';
import ProductDetailGeneric from '@/components/sections/product/ProductDetailGeneric';
import FinalCTA from '@/components/sections/FinalCTA';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return products
    .filter((p) => p.status !== 'Coming Soon')
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.tagline} | Artifx`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product || product.status === 'Coming Soon') notFound();

  return (
    <>
      {/* Back nav */}
      <div className="bg-[#FAFAF8] border-b-2 border-black pt-24 pb-4">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/product"
            className="inline-flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-widest text-black hover:text-[#DC2626] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Products
          </Link>
        </div>
      </div>

      {/* Per-product content */}
      {slug === 'flow' && (
        <>
          <ProductShowcase />
          <LeadScraperSandbox />
        </>
      )}

      {slug !== 'flow' && (
        <ProductDetailGeneric product={product} />
      )}

      <FinalCTA />
    </>
  );
}
