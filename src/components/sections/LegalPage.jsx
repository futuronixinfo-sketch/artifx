import Container from '@/components/ui/Container';

/**
 * Shared layout for static legal pages (Privacy, Terms).
 * sections: [{ heading, body: string | string[] }]
 */
export default function LegalPage({ title, updated, intro, sections = [] }) {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-black select-none">
      {/* Header */}
      <section className="relative pt-36 pb-14 border-b-2 border-black overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <Container className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] text-[10px] font-mono font-black uppercase tracking-widest">
            [ LEGAL ]
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
            {title}
          </h1>
          <p className="mt-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            Last updated: {updated}
          </p>
        </Container>
      </section>

      {/* Body */}
      <section className="py-16">
        <Container className="max-w-3xl">
          <div className="border-2 border-black bg-white shadow-[6px_6px_0_#0A0A0A] p-7 md:p-10 space-y-10 select-text">
            {intro && (
              <p className="text-sm text-gray-700 leading-relaxed">{intro}</p>
            )}

            {sections.map((s, i) => (
              <div key={i} className="space-y-3">
                <h2 className="text-lg md:text-xl font-black uppercase tracking-tight text-black flex items-baseline gap-2">
                  <span className="text-red-600 font-mono text-sm">{String(i + 1).padStart(2, '0')}</span>
                  {s.heading}
                </h2>
                {Array.isArray(s.body) ? (
                  <ul className="space-y-2">
                    {s.body.map((item, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-gray-700 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 bg-[#DC2626] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-700 leading-relaxed">{s.body}</p>
                )}
              </div>
            ))}

            <div className="pt-6 border-t-2 border-black">
              <p className="text-sm text-gray-700 leading-relaxed">
                Questions about this page? Email us at{' '}
                <a href="mailto:khanshan949@gmail.com" className="font-bold text-black underline decoration-2 underline-offset-2 hover:text-red-600">
                  khanshan949@gmail.com
                </a>.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
