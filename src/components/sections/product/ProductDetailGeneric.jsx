import Container from '@/components/ui/Container';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function ProductDetailGeneric({ product }) {
  return (
    <section className="py-20 bg-[#FAFAF8] border-b-2 border-black">
      <Container className="max-w-4xl">

        {/* Header */}
        <div className="border-b-2 border-black pb-10 mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 border-2 border-black font-mono text-[9px] font-black uppercase tracking-widest"
              style={{ background: product.accent, color: product.accentFg }}>
              {product.status}
            </span>
            <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">{product.category}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tight leading-none mb-3">
            {product.name}
          </h1>
          <p className="text-[11px] font-mono text-gray-500 uppercase tracking-widest mb-6">{product.tagline}</p>
          <p className="text-base text-gray-700 leading-relaxed max-w-2xl">{product.description}</p>
          {product.url && (
            <a href={product.url} target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-black text-white border-2 border-black font-mono text-[9px] font-black uppercase tracking-widest shadow-[3px_3px_0_#0A0A0A] hover:shadow-[1px_1px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100">
              Open Live App <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Stats */}
        <div className="flex gap-0 border-2 border-black shadow-[4px_4px_0_#0A0A0A] mb-10">
          {product.stats.map((stat, i) => (
            <div key={i} className={`flex-1 text-center py-6 ${i < product.stats.length - 1 ? 'border-r-2 border-black' : ''}`}>
              <div className="text-3xl font-black text-black">{stat.value}</div>
              <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div>
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-3">Features</div>
          <div className="flex flex-wrap gap-2">
            {product.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-white border-2 border-black font-mono text-[10px] font-black uppercase tracking-wider shadow-[2px_2px_0_#0A0A0A]">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
