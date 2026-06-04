import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Container from '@/components/ui/Container';
import { products } from '@/data/products';

const STATUS_STYLES = {
  'Live':         'bg-[#FFE500] text-black border-black',
  'Beta':         'bg-[#DC2626] text-white border-[#DC2626]',
  'Coming Soon':  'bg-[#FAFAF8] text-gray-500 border-black',
};

export default function ProductGrid() {
  return (
    <section className="py-20 bg-[#FAFAF8] border-b-2 border-black">
      <Container>

        {/* Section header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] mb-4">
            <span className="text-[10px] font-mono font-black uppercase tracking-widest">[ All Products ]</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-black uppercase leading-none">
            What We&apos;re Building
          </h2>
          <p className="text-sm text-gray-500 mt-3 font-mono max-w-xl">
            Internal tools and SaaS products solving real operational problems — built in-house, battle-tested with clients.
          </p>
        </div>

        {/* Product card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-black shadow-[6px_6px_0_#0A0A0A]">
          {products.map((product, idx) => {
            const isLast = idx === products.length - 1;
            const isOdd = idx % 2 !== 0;
            return (
              <div
                key={product.slug}
                className={`bg-white group flex flex-col
                  ${!isOdd ? 'border-r-2 border-black' : ''}
                  ${idx < products.length - 2 ? 'border-b-2 border-black' : ''}
                  ${idx === products.length - 2 && products.length % 2 === 0 ? 'border-b-0' : ''}
                  ${idx === products.length - 1 && products.length % 2 !== 0 ? 'border-r-0 md:col-span-2' : ''}
                `}
              >
                {/* Accent top bar */}
                <div className="h-2 border-b-2 border-black" style={{ background: product.accent }} />

                <div className="p-7 flex flex-col flex-1">

                  {/* Status + Category */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className={`px-2.5 py-0.5 text-[9px] font-mono font-black uppercase tracking-widest border-2 ${STATUS_STYLES[product.status]}`}>
                      {product.status}
                    </span>
                    <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                      {product.category}
                    </span>
                  </div>

                  {/* Name + Tagline */}
                  <h3 className="text-2xl font-black text-black uppercase tracking-tight leading-none mb-1">
                    {product.name}
                  </h3>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">
                    {product.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-relaxed mb-5 flex-1">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {product.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-[#FAFAF8] border-2 border-black text-[8px] font-mono font-bold uppercase tracking-wider text-black">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats row */}
                  <div className="flex gap-0 border-2 border-black mb-5">
                    {product.stats.map((stat, i) => (
                      <div key={i} className={`flex-1 text-center py-2.5 ${i < product.stats.length - 1 ? 'border-r-2 border-black' : ''}`}>
                        <div className="text-base font-black text-black">{stat.value}</div>
                        <div className="text-[8px] font-mono text-gray-500 uppercase tracking-wide mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    {product.status !== 'Coming Soon' ? (
                      <Link
                        href={`/product/${product.slug}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-black text-white border-2 border-black font-mono text-[9px] font-black uppercase tracking-widest shadow-[3px_3px_0_#0A0A0A] hover:shadow-[1px_1px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100"
                      >
                        Explore Product <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <div className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-[#FAFAF8] border-2 border-black font-mono text-[9px] font-black uppercase tracking-widest text-gray-400 cursor-default">
                        Coming Soon
                      </div>
                    )}
                    {product.url && (
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-white border-2 border-black hover:bg-[#FFE500] shadow-[2px_2px_0_#0A0A0A] hover:shadow-[1px_1px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100"
                        title="Open live app"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
