'use client';
import { useState } from 'react';
import Link from 'next/link';
import { uiStyles } from '@/data/uiStyles';
import { categories } from '@/data/business-models';
import { STYLE_TO_CATEGORIES } from '@/data/uiBusinessMapping';

/* ── Per-style Google Font overrides ── */
const FONT_MAP = {
  'terminal-hacker-ui': { url: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap',                                family: '"JetBrains Mono", monospace' },
  'pixel-art-ui':       { url: 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',                                              family: '"Press Start 2P", monospace' },
  'retro-ui':           { url: 'https://fonts.googleapis.com/css2?family=VT323&display=swap',                                                        family: '"VT323", monospace' },
  'vintage-ui':         { url: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap',                 family: '"Playfair Display", serif' },
  'y2k-design':         { url: 'https://fonts.googleapis.com/css2?family=Righteous&display=swap',                                                    family: '"Righteous", cursive' },
  'cyberpunk-ui':       { url: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&display=swap',                                family: '"Orbitron", sans-serif' },
  'neon-ui':            { url: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&display=swap',                                family: '"Orbitron", sans-serif' },
  'futuristic-ui':      { url: 'https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;600;700;800&display=swap',                             family: '"Oxanium", sans-serif' },
  'sci-fi-ui':          { url: 'https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600;700;800&display=swap',                              family: '"Exo 2", sans-serif' },
  'holographic-ui':     { url: 'https://fonts.googleapis.com/css2?family=Audiowide&display=swap',                                                    family: '"Audiowide", cursive' },
  'chrome-ui':          { url: 'https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;600;700;800&display=swap',                             family: '"Oxanium", sans-serif' },
  'luxury-ui':          { url: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap',                 family: '"Playfair Display", serif' },
  'premium-minimal-ui': { url: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&display=swap',        family: '"Cormorant Garamond", serif' },
  'editorial-design':   { url: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap',                family: '"Libre Baskerville", serif' },
  'magazine-style-ui':  { url: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap',                family: '"Libre Baskerville", serif' },
  'swiss-design':       { url: 'https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap',                                               family: '"Archivo Black", sans-serif' },
  'bauhaus-design':     { url: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',                                                   family: '"Bebas Neue", cursive' },
  'kinetic-typography': { url: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',                                                   family: '"Bebas Neue", cursive' },
  'memphis-design':     { url: 'https://fonts.googleapis.com/css2?family=Righteous&display=swap',                                                    family: '"Righteous", cursive' },
  'anime-ui':           { url: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap',                              family: '"Nunito", sans-serif' },
  'cartoon-ui':         { url: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&display=swap',                                  family: '"Comfortaa", cursive' },
  'ai-native-ui':       { url: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap',                               family: '"Inter", sans-serif' },
  'apple-style-ui':     { url: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap',                               family: '"Inter", sans-serif' },
  'illustrative-ui':    { url: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap',                                     family: '"Caveat", cursive' },
  'storytelling-ui':    { url: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap',                     family: '"Merriweather", serif' },
  'corporate-ui':       { url: 'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;600;700&display=swap',                          family: '"Source Sans 3", sans-serif' },
  'enterprise-ui':      { url: 'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;600;700&display=swap',                          family: '"Source Sans 3", sans-serif' },
};

const CAT_FONT_MAP = {
  'Morphism':     { url: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap',                              family: '"Inter", sans-serif' },
  'Minimal':      { url: 'https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700&display=swap', family: '"DM Sans", sans-serif' },
  'Dark':         { url: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap',                                   family: '"Syne", sans-serif' },
  'Retro':        { url: 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap',                                     family: '"Space Mono", monospace' },
  'Modern':       { url: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap',              family: '"Plus Jakarta Sans", sans-serif' },
  'Creative':     { url: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&display=swap',                         family: '"Outfit", sans-serif' },
  'Luxury':       { url: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&display=swap',       family: '"Cormorant Garamond", serif' },
  'Functional':   { url: 'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;600;700&display=swap',                         family: '"Source Sans 3", sans-serif' },
  'Immersive':    { url: 'https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600;700;800&display=swap',                             family: '"Exo 2", sans-serif' },
  'Experimental': { url: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',                                                 family: '"Bebas Neue", cursive' },
};

/* ── Background decoration overlay per style ── */
function BgDecor({ slug, category, t }) {
  const type = (() => {
    if (['glassmorphism','frosted-glass-ui','glass-aurora-ui','bento-glassmorphism','liquid-glass'].includes(slug)) return 'orbs';
    if (['aurora-ui','mesh-gradient-ui','gradient-ui'].includes(slug)) return 'orbs';
    if (['neon-ui','glow-ui','holographic-ui'].includes(slug)) return 'glow';
    if (['terminal-hacker-ui'].includes(slug)) return 'scanlines-grid';
    if (['retro-ui','vintage-ui','y2k-design'].includes(slug)) return 'scanlines';
    if (['pixel-art-ui'].includes(slug)) return 'pixels';
    if (['cyberpunk-ui','futuristic-ui','sci-fi-ui','vr-ui','ar-ui','spatial-ui','mixed-reality-ui'].includes(slug)) return 'grid';
    if (['memphis-design','geometric-ui','abstract-ui','asymmetrical-layout','deconstructivist-ui'].includes(slug)) return 'shapes';
    if (['swiss-design','bauhaus-design','modular-design','data-visualization-ui','dashboard-ui'].includes(slug)) return 'grid';
    if (['neumorphism','claymorphism','soft-ui','morphism-ui'].includes(slug)) return 'noise';
    if (category === 'Morphism') return 'orbs';
    if (category === 'Minimal' || slug === 'apple-style-ui') return 'none';
    if (category === 'Dark') return 'grid';
    if (category === 'Experimental') return 'shapes';
    return 'dots';
  })();

  if (type === 'none') return null;
  const base = { position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' };

  if (type === 'orbs') return (
    <div style={base}>
      <div style={{ position:'absolute', width:'700px', height:'700px', borderRadius:'50%', background:t.accent, filter:'blur(140px)', opacity:0.18, top:'-200px', right:'-150px' }} />
      <div style={{ position:'absolute', width:'500px', height:'500px', borderRadius:'50%', background:t.accent2||t.accent, filter:'blur(110px)', opacity:0.14, bottom:'5%', left:'-120px' }} />
      <div style={{ position:'absolute', width:'300px', height:'300px', borderRadius:'50%', background:t.headingColor, filter:'blur(90px)', opacity:0.05, top:'40%', left:'45%' }} />
    </div>
  );

  if (type === 'glow') return (
    <div style={base}>
      <div style={{ position:'absolute', width:'500px', height:'500px', borderRadius:'50%', background:t.accent, filter:'blur(100px)', opacity:0.38, top:'0%', left:'20%' }} />
      <div style={{ position:'absolute', width:'350px', height:'350px', borderRadius:'50%', background:t.accent2||t.accent, filter:'blur(80px)', opacity:0.3, top:'50%', right:'10%' }} />
      <div style={{ position:'absolute', width:'250px', height:'250px', borderRadius:'50%', background:t.btnBg, filter:'blur(60px)', opacity:0.22, bottom:'15%', left:'5%' }} />
    </div>
  );

  if (type === 'scanlines') return (
    <div style={{ ...base, backgroundImage:'repeating-linear-gradient(0deg,rgba(0,0,0,0.05) 0px,rgba(0,0,0,0.05) 1px,transparent 1px,transparent 4px)' }} />
  );

  if (type === 'scanlines-grid') return (
    <div style={{ ...base, backgroundImage:`repeating-linear-gradient(0deg,${t.accent}18 0,${t.accent}18 1px,transparent 1px,transparent 32px),repeating-linear-gradient(90deg,${t.accent}18 0,${t.accent}18 1px,transparent 1px,transparent 32px)` }} />
  );

  if (type === 'grid') return (
    <div style={{ ...base, backgroundImage:`linear-gradient(${t.accent}20 1px,transparent 1px),linear-gradient(90deg,${t.accent}20 1px,transparent 1px)`, backgroundSize:'48px 48px' }} />
  );

  if (type === 'dots') return (
    <div style={{ ...base, backgroundImage:`radial-gradient(${t.accent}30 1.5px,transparent 1.5px)`, backgroundSize:'28px 28px' }} />
  );

  if (type === 'pixels') return (
    <div style={{ ...base, backgroundImage:`linear-gradient(${t.accent}28 1px,transparent 1px),linear-gradient(90deg,${t.accent}28 1px,transparent 1px)`, backgroundSize:'8px 8px' }} />
  );

  if (type === 'noise') return (
    <div style={{ ...base, backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`, backgroundSize:'200px 200px' }} />
  );

  if (type === 'shapes') return (
    <div style={base}>
      {[[40,10,'72px',t.accent,0.12,0],[78,55,'48px',t.accent2||t.accent,0.1,45],[15,65,'90px',t.bodyColor,0.05,20],[60,80,'40px',t.btnBg,0.09,60],[88,20,'56px',t.accent,0.08,30],[30,35,'36px',t.headingColor,0.06,15]].map(([l,top,s,c,o,r],i)=>(
        <div key={i} style={{ position:'absolute', left:`${l}%`, top:`${top}%`, width:s, height:s, border:`2px solid ${c}`, opacity:o, transform:`rotate(${r}deg)` }} />
      ))}
    </div>
  );

  return null;
}

/* Build a representative gradient straight from the style's own palette.
   Skips translucent values; falls back to the accent so every style shows
   its real colours instead of a random stock photo. */
function paletteGradient(palette = [], fallback = '#888888') {
  const solid = palette
    .map((c) => c.hex)
    .filter((h) => h && !h.includes('rgba') && !h.toLowerCase().includes('transparent'));
  const cols = (solid.length ? solid : [fallback]).slice(0, 5);
  if (cols.length === 1) return cols[0];
  return `linear-gradient(135deg, ${cols.join(', ')})`;
}

export default function UIStyleDetail({ style }) {
  const t = style.theme;
  const idx = uiStyles.findIndex((s) => s.slug === style.slug);
  const prev = idx > 0 ? uiStyles[idx - 1] : null;
  const next = idx < uiStyles.length - 1 ? uiStyles[idx + 1] : null;

  const suggestedCategoryIds = STYLE_TO_CATEGORIES[style.slug] || [];
  const suggestedCategories = suggestedCategoryIds
    .map((id) => categories.find((c) => c.id === id))
    .filter(Boolean)
    .slice(0, 4);

  const fontCfg = FONT_MAP[style.slug] || CAT_FONT_MAP[style.category] || null;
  const hf = fontCfg?.family || t.headingFont || 'system-ui, -apple-system, sans-serif';
  const bf = fontCfg?.family || t.bodyFont || 'system-ui, -apple-system, sans-serif';

  const [radiusPercent, setRadiusPercent] = useState(100);

  /* glow / shadow accent on hero heading for styles that support it */
  const heroGlow = (() => {
    if (['neon-ui','glow-ui','cyberpunk-ui'].includes(style.slug)) return `0 0 20px ${t.accent}, 0 0 60px ${t.accent}80`;
    if (['holographic-ui','aurora-ui','glass-aurora-ui'].includes(style.slug)) return `0 2px 30px ${t.accent}88`;
    if (['terminal-hacker-ui'].includes(style.slug)) return `0 0 12px ${t.accent}`;
    return 'none';
  })();

  // Helper: element that needs border-radius uses this pattern
  // --br-scale on the outer div does the actual scaling (0=sharp, 1=themed)
  const br = (radius, extra = {}) => ({ '--br': radius, ...extra });

  return (
    <div className="ui-style-detail uisd" style={{ fontFamily: bf, color: t.bodyColor, background: t.pageBg, minHeight: '100vh' }}>
      {fontCfg && <style>{`@import url('${fontCfg.url}');`}</style>}
      <style>{`.ui-style-detail .ui-br { border-radius: calc(var(--br, 0px) * ${(radiusPercent / 100).toFixed(4)}) !important; }`}</style>
      <style>{`
        .uisd .uisd-2col { display:grid; grid-template-columns:1fr 1fr; gap:60px; }
        .uisd .uisd-cards { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .uisd .uisd-split { display:grid; grid-template-columns:240px 1fr; gap:64px; align-items:start; }
        @media (max-width: 820px) {
          .uisd .uisd-2col, .uisd .uisd-cards, .uisd .uisd-split { grid-template-columns:1fr !important; gap:28px !important; }
          .uisd .uisd-sec { padding-left:20px !important; padding-right:20px !important; }
          .uisd .uisd-divider { margin-left:20px !important; margin-right:20px !important; }
          .uisd .uisd-nav { padding-left:16px !important; padding-right:16px !important; flex-wrap:wrap; gap:10px; }
          .uisd .uisd-radius { display:none !important; }
          .uisd .uisd-phone { justify-self:center; }
          .uisd .uisd-hero-h1 { font-size:clamp(34px,9vw,52px) !important; }
        }
      `}</style>
      <BgDecor slug={style.slug} category={style.category} t={t} />
      <div style={{ position: 'relative', zIndex: 1 }}>

      {/* ── CUSTOM NAVBAR ── */}
      <nav className="uisd-nav" style={{
        background: t.navBg,
        borderBottom: t.navBorderBottom,
        backdropFilter: t.cardBackdrop,
        WebkitBackdropFilter: t.cardBackdrop,
        position: 'sticky', top: 0, zIndex: 50,
        padding: '12px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '16px',
      }}>
        <Link href="/ui-styles" style={{
          color: t.navFg, textDecoration: 'none',
          fontWeight: 700, fontSize: '11px',
          letterSpacing: '0.1em', fontFamily: hf,
          textTransform: 'uppercase', opacity: 0.85,
          display: 'flex', alignItems: 'center', gap: '6px',
        }}>
          ← UI Lab
        </Link>
        {/* ── Border Radius Control ── */}
        <div className="uisd-radius" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '9px', color: t.navFg, fontFamily: 'monospace', fontWeight: 700, opacity: 0.55, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Radius
          </span>
          {[0, 50, 100].map((val) => (
            <button
              key={val}
              onClick={() => setRadiusPercent(val)}
              style={{
                padding: '3px 9px',
                fontSize: '9px',
                fontFamily: 'monospace',
                fontWeight: 700,
                background: radiusPercent === val ? t.accent : 'transparent',
                color: radiusPercent === val ? (t.pageBg || '#fff') : t.navFg,
                border: `1px solid ${t.navFg}40`,
                cursor: 'pointer',
                borderRadius: val === 0 ? '0px' : val === 50 ? '4px' : '20px',
                opacity: radiusPercent === val ? 1 : 0.5,
                transition: 'all 0.1s',
              }}
            >
              {val === 0 ? 'Sharp' : val === 50 ? '50%' : 'Round'}
            </button>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <input
              type="range"
              min="0"
              max="100"
              value={radiusPercent}
              onChange={(e) => setRadiusPercent(Number(e.target.value))}
              style={{ width: '72px', accentColor: t.accent, cursor: 'pointer' }}
            />
            <span style={{ fontSize: '9px', color: t.accent, fontFamily: 'monospace', fontWeight: 700, minWidth: '28px' }}>
              {radiusPercent}%
            </span>
          </div>
        </div>
        <button className="ui-br" style={br(t.btnRadius, {
          background: t.btnBg, color: t.btnFg,
          border: t.btnBorder, padding: '7px 18px',
          fontSize: '10px', fontWeight: 700,
          cursor: 'pointer', boxShadow: t.btnShadow,
          letterSpacing: '0.06em', textTransform: 'uppercase',
          fontFamily: hf,
        })}>
          Use Style →
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="uisd-sec" style={{ padding: '72px 40px 56px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
          {style.tags.map((tag) => (
            <span key={tag} className="ui-br" style={br(t.badgeRadius, {
              background: t.badgeBg, color: t.badgeFg,
              border: t.badgeBorder || 'none',
              padding: '3px 10px', fontSize: '9px',
              fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.1em',
            })}>
              {tag}
            </span>
          ))}
          <span style={{ color: t.captionColor, fontSize: '9px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', paddingLeft: '8px' }}>
            {style.era}
          </span>
          <span style={{ color: t.captionColor, fontSize: '9px', letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.7 }}>
            #{String(idx + 1).padStart(2, '0')} · {style.category}
          </span>
        </div>

        <h1 className="uisd-hero-h1" style={{
          fontFamily: hf,
          color: t.headingColor,
          fontWeight: t.headingWeight || '900',
          fontSize: 'clamp(40px,7vw,88px)',
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          marginBottom: '24px',
          margin: '0 0 24px',
          textShadow: heroGlow,
        }}>
          {style.name}
        </h1>

        <p style={{ color: t.bodyColor, fontSize: '15px', lineHeight: 1.7, maxWidth: '560px', opacity: 0.85 }}>
          {style.description}
        </p>

        {style.pioneeredBy && (
          <p style={{ color: t.captionColor, fontSize: '11px', marginTop: '16px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Pioneered by: <span style={{ color: t.accent, fontWeight: 700 }}>{style.pioneeredBy}</span>
          </p>
        )}

        {/* Hero LIVE preview — a real mini-page rendered in this exact theme (no stock photos) */}
        <div className="ui-br" style={br(t.cardRadius, {
          marginTop: '40px',
          overflow: 'hidden',
          border: t.cardBorder,
          boxShadow: t.cardShadow,
          position: 'relative',
          background: t.pageBg,
          minHeight: '340px',
        })}>
          {/* the style's own palette, used as an ambient wash so its real colours always show */}
          <div style={{ position: 'absolute', inset: 0, background: paletteGradient(style.palette, t.accent), opacity: 0.20, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', width: '260px', height: '260px', borderRadius: '50%', background: t.accent, filter: 'blur(90px)', opacity: 0.4, top: '-60px', right: '-40px', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', minHeight: '340px', boxSizing: 'border-box' }}>
            <span className="ui-br" style={br(t.badgeRadius, {
              alignSelf: 'flex-start',
              background: t.badgeBg, color: t.badgeFg,
              border: t.badgeBorder || 'none',
              padding: '4px 11px', fontSize: '9px', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.1em',
            })}>
              Live Preview
            </span>

            <div style={{
              fontFamily: hf, color: t.headingColor,
              fontWeight: t.headingWeight || 900,
              fontSize: 'clamp(26px,4.2vw,44px)', lineHeight: 1.04,
              letterSpacing: '-0.02em', maxWidth: '560px', textShadow: heroGlow,
            }}>
              Real components, rendered in the {style.name} style.
            </div>
            <p style={{ color: t.bodyColor, fontSize: '13px', lineHeight: 1.6, maxWidth: '440px', opacity: 0.85 }}>
              Everything you see below — buttons, cards, type and colour — is this theme applied live, so you know exactly how your product would feel.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '4px' }}>
              <button className="ui-br" style={br(t.btnRadius, {
                background: t.btnBg, color: t.btnFg, border: t.btnBorder || 'none',
                padding: '11px 22px', fontSize: '11px', fontWeight: 700, cursor: 'pointer',
                boxShadow: t.btnShadow, letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: hf,
              })}>
                Get Started →
              </button>
              <button className="ui-br" style={br(t.btnRadius, {
                background: 'transparent', color: t.accent, border: `2px solid ${t.accent}`,
                padding: '11px 22px', fontSize: '11px', fontWeight: 700, cursor: 'pointer',
                letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: hf,
              })}>
                Learn More
              </button>
            </div>

            {/* floating themed card — surfaces depth / glass / iridescence per style */}
            <div className="ui-br" style={br(t.cardRadius, {
              background: t.cardBg, border: t.cardBorder, boxShadow: t.cardShadow,
              backdropFilter: t.cardBackdrop, WebkitBackdropFilter: t.cardBackdrop,
              padding: '14px 16px', maxWidth: '280px', marginTop: '6px',
            })}>
              <div style={{ fontFamily: hf, color: t.headingColor, fontWeight: 700, fontSize: '12px', marginBottom: '4px' }}>Component Card</div>
              <div style={{ color: t.bodyColor, fontSize: '11px', opacity: 0.8, lineHeight: 1.5 }}>Uses the real {style.name} tokens — not a stock image.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="uisd-divider" style={{ height: '1px', background: t.dividerColor, margin: '0 40px' }} />

      {/* ── PALETTE + TYPOGRAPHY ── */}
      <section className="uisd-sec uisd-2col" style={{ padding: '56px 40px', maxWidth: '1200px', margin: '0 auto' }}>

        {/* Palette */}
        <div>
          <h2 style={{ fontFamily: hf, color: t.headingColor, fontWeight: 700, fontSize: '11px', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.6 }}>
            Color Palette
          </h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {style.palette.map((color) => (
              <div key={color.name}>
                <div className="ui-br" style={br(t.cardRadius === '0px' ? '4px' : t.cardRadius, {
                  width: '64px', height: '64px',
                  background: color.hex,
                  border: t.cardBorder,
                  marginBottom: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                })} />
                <div style={{ fontSize: '9px', fontWeight: 700, color: t.bodyColor, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{color.name}</div>
                <div style={{ fontSize: '9px', color: t.captionColor, fontFamily: 'monospace', marginTop: '2px' }}>{color.hex.length > 20 ? color.hex.slice(0, 20) + '…' : color.hex}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div>
          <h2 style={{ fontFamily: hf, color: t.headingColor, fontWeight: 700, fontSize: '11px', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.6 }}>
            Typography
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { label: 'Display', size: '36px', weight: t.headingWeight || '900' },
              { label: 'H2', size: '24px', weight: t.headingWeight || '700' },
              { label: 'H3', size: '18px', weight: '600' },
              { label: 'Body', size: '14px', weight: '400', font: bf },
              { label: 'Caption', size: '11px', weight: '400', font: bf },
              { label: 'Mono', size: '12px', weight: '400', font: 'monospace' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'baseline', gap: '16px', borderBottom: `1px solid ${t.dividerColor}`, paddingBottom: '10px', paddingTop: '10px' }}>
                <span style={{ fontSize: '9px', color: t.captionColor, fontFamily: 'monospace', width: '48px', flexShrink: 0, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {item.label}
                </span>
                <span style={{
                  fontFamily: item.font || hf,
                  fontSize: item.size, fontWeight: item.weight,
                  color: t.headingColor, lineHeight: 1,
                }}>
                  Aa Bb Cc
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="uisd-divider" style={{ height: '1px', background: t.dividerColor, margin: '0 40px' }} />

      {/* ── COMPONENT GALLERY ── */}
      <section className="uisd-sec" style={{ padding: '56px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: hf, color: t.headingColor, fontWeight: 700, fontSize: '11px', marginBottom: '48px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.6 }}>
          Component Gallery
        </h2>

        {/* BUTTONS */}
        <div style={{ marginBottom: '52px' }}>
          <div style={{ fontSize: '10px', color: t.captionColor, fontFamily: 'monospace', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            // Buttons
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            {[
              { label: 'Primary', bg: t.btnBg, fg: t.btnFg, border: t.btnBorder, shadow: t.btnShadow },
              { label: 'Secondary', bg: t.btnSecBg, fg: t.btnSecFg, border: t.btnSecBorder, shadow: 'none' },
              { label: 'Ghost', bg: 'transparent', fg: t.accent, border: `2px solid ${t.accent}`, shadow: 'none' },
              { label: 'Disabled', bg: t.cardBg, fg: t.captionColor, border: t.cardBorder, shadow: 'none', disabled: true },
            ].map((btn) => (
              <button
                key={btn.label}
                disabled={btn.disabled}
                className="ui-br"
                style={br(t.btnRadius, {
                  background: btn.bg, color: btn.fg,
                  border: btn.border || 'none',
                  padding: '11px 24px', fontSize: '11px',
                  fontWeight: 700, cursor: btn.disabled ? 'not-allowed' : 'pointer',
                  boxShadow: btn.shadow, fontFamily: hf,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  opacity: btn.disabled ? 0.45 : 1,
                  backdropFilter: btn.bg?.includes('rgba') ? t.cardBackdrop : undefined,
                })}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* CARDS */}
        <div style={{ marginBottom: '52px' }}>
          <div style={{ fontSize: '10px', color: t.captionColor, fontFamily: 'monospace', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            // Cards
          </div>
          <div className="uisd-cards">
            {[
              { title: 'Design System', desc: 'Consistent visual language and component patterns for scalable product teams.', tag: 'UI/UX' },
              { title: 'Component Lib', desc: 'Reusable building blocks that maintain visual consistency across all surfaces.', tag: 'Dev' },
              { title: 'Style Guide', desc: 'Documented rules for typography, spacing, color, and interaction patterns.', tag: 'Docs' },
            ].map((card, i) => (
              <div key={i} className="ui-br" style={br(t.cardRadius, {
                background: t.cardBg,
                border: t.cardBorder,
                boxShadow: t.cardShadow,
                backdropFilter: t.cardBackdrop,
                WebkitBackdropFilter: t.cardBackdrop,
                overflow: 'hidden',
              })}>
                {/* image area — rendered from the style's own palette (no stock photos) */}
                <div style={{
                  height: '148px',
                  borderBottom: t.cardBorder,
                  overflow: 'hidden',
                  position: 'relative',
                  background: t.pageBg,
                }}>
                  <div style={{ position: 'absolute', inset: 0, background: paletteGradient(style.palette, t.accent), opacity: 0.95 }} />
                  <div style={{ position: 'absolute', width: '90px', height: '90px', borderRadius: '50%', background: style.palette[i % style.palette.length]?.hex || t.accent, filter: 'blur(26px)', opacity: 0.55, top: '-16px', right: '-10px' }} />
                  <span className="ui-br" style={br(t.badgeRadius, {
                    position: 'absolute', left: '12px', bottom: '12px',
                    background: t.badgeBg, color: t.badgeFg, border: t.badgeBorder || 'none',
                    padding: '3px 9px', fontSize: '8px', fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                  })}>
                    {card.tag}
                  </span>
                </div>
                <div style={{ padding: '18px' }}>
                  <span className="ui-br" style={br(t.badgeRadius, {
                    background: t.badgeBg, color: t.badgeFg,
                    border: t.badgeBorder || 'none',
                    padding: '2px 8px', fontSize: '8px', fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                    display: 'inline-block', marginBottom: '10px',
                  })}>
                    {card.tag}
                  </span>
                  <h3 style={{ fontFamily: hf, color: t.headingColor, fontWeight: 700, fontSize: '14px', marginBottom: '8px' }}>
                    {card.title}
                  </h3>
                  <p style={{ color: t.bodyColor, fontSize: '11px', lineHeight: 1.6, opacity: 0.8 }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FORM */}
        <div style={{ marginBottom: '52px' }}>
          <div style={{ fontSize: '10px', color: t.captionColor, fontFamily: 'monospace', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            // Form Elements
          </div>
          <div className="ui-br" style={br(t.cardRadius, {
            background: t.cardBg, border: t.cardBorder,
            boxShadow: t.cardShadow, padding: '28px',
            maxWidth: '440px',
            backdropFilter: t.cardBackdrop,
            WebkitBackdropFilter: t.cardBackdrop,
          })}>
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: t.headingColor, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Your Name
              </label>
              <input readOnly value="Jane Smith" className="ui-br" style={br(t.inputRadius, {
                width: '100%', background: t.inputBg,
                color: t.bodyColor, border: t.inputBorder,
                padding: '10px 13px', fontSize: '13px',
                fontFamily: bf, outline: 'none',
                boxSizing: 'border-box',
              })} />
            </div>
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: t.headingColor, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Message
              </label>
              <textarea readOnly value="Tell me about your design vision..." rows={3} className="ui-br" style={br(t.inputRadius, {
                width: '100%', background: t.inputBg,
                color: t.bodyColor, border: t.inputBorder,
                padding: '10px 13px', fontSize: '13px',
                fontFamily: bf, outline: 'none',
                resize: 'none', boxSizing: 'border-box',
              })} />
            </div>
            <button className="ui-br" style={br(t.btnRadius, {
              background: t.btnBg, color: t.btnFg,
              border: t.btnBorder, padding: '11px 24px',
              fontSize: '11px', fontWeight: 700, cursor: 'pointer',
              boxShadow: t.btnShadow, letterSpacing: '0.08em',
              textTransform: 'uppercase', fontFamily: hf,
            })}>
              Submit →
            </button>
          </div>
        </div>

        {/* MINI NAVBAR EXAMPLE */}
        <div style={{ marginBottom: '52px' }}>
          <div style={{ fontSize: '10px', color: t.captionColor, fontFamily: 'monospace', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            // Navigation Bar
          </div>
          <div className="ui-br" style={br(t.cardRadius, {
            background: t.navBg,
            border: t.navBorderBottom ? `1px solid ${t.dividerColor}` : t.cardBorder,
            padding: '13px 24px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            backdropFilter: t.cardBackdrop,
            WebkitBackdropFilter: t.cardBackdrop,
          })}>
            <div style={{ fontFamily: hf, color: t.navFg, fontWeight: 900, fontSize: '17px', letterSpacing: '-0.02em' }}>LOGO</div>
            <div style={{ display: 'flex', gap: '22px' }}>
              {['Home', 'About', 'Work', 'Contact'].map((item) => (
                <span key={item} style={{ color: t.navFg, fontSize: '11px', fontWeight: 600, opacity: 0.7, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{item}</span>
              ))}
            </div>
            <button className="ui-br" style={br(t.btnRadius, {
              background: t.btnBg, color: t.btnFg,
              border: t.btnBorder, padding: '7px 16px',
              fontSize: '10px', fontWeight: 700, cursor: 'pointer',
              boxShadow: t.btnShadow,
            })}>
              CTA →
            </button>
          </div>
        </div>

        {/* BADGES */}
        <div style={{ marginBottom: '52px' }}>
          <div style={{ fontSize: '10px', color: t.captionColor, fontFamily: 'monospace', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            // Badges & Tags
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
            {['Design System', 'Component', 'v2.0', 'Beta', 'New', 'Featured', 'Open Source'].map((badge) => (
              <span key={badge} className="ui-br" style={br(t.badgeRadius, {
                background: t.badgeBg, color: t.badgeFg,
                border: t.badgeBorder || 'none',
                padding: '4px 11px', fontSize: '9px',
                fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
              })}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="uisd-divider" style={{ height: '1px', background: t.dividerColor, margin: '0 40px' }} />

      {/* ── MOBILE PREVIEW + CHARACTERISTICS ── */}
      <section className="uisd-sec uisd-split" style={{ padding: '56px 40px', maxWidth: '1200px', margin: '0 auto' }}>

        {/* Phone Frame */}
        <div className="uisd-phone">
          <h2 style={{ fontFamily: hf, color: t.headingColor, fontWeight: 700, fontSize: '11px', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.6 }}>
            Mobile Preview
          </h2>
          <div style={{
            width: '200px', height: '400px',
            border: `3px solid ${t.headingColor}`,
            borderRadius: '32px', padding: '10px',
            background: t.headingColor,
            boxShadow: t.cardShadow,
            position: 'relative',
          }}>
            {/* Notch */}
            <div style={{ width: '50px', height: '6px', background: '#333', borderRadius: '3px', margin: '0 auto 8px' }} />
            {/* Screen */}
            <div style={{ height: '100%', background: t.pageBg, borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              {/* Mini nav */}
              <div style={{
                background: t.navBg, padding: '8px 12px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                borderBottom: t.navBorderBottom,
              }}>
                <div style={{ fontFamily: hf, color: t.navFg, fontWeight: 900, fontSize: '10px' }}>LOGO</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {[14, 10, 14].map((w, i) => (
                    <div key={i} style={{ width: `${w}px`, height: '1.5px', background: t.navFg, opacity: 0.7 }} />
                  ))}
                </div>
              </div>
              {/* Mini content */}
              <div style={{ padding: '14px 12px', flex: 1, overflow: 'hidden' }}>
                <div className="ui-br" style={br(t.badgeRadius, {
                  background: t.badgeBg, color: t.badgeFg,
                  border: t.badgeBorder || 'none',
                  padding: '2px 7px', fontSize: '6px', fontWeight: 700,
                  display: 'inline-block', marginBottom: '6px',
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                })}>
                  {style.tags[0]}
                </div>
                <div style={{ fontFamily: hf, color: t.headingColor, fontWeight: 900, fontSize: '13px', marginBottom: '5px', lineHeight: 1.1 }}>
                  {style.name}
                </div>
                <div style={{ color: t.bodyColor, fontSize: '6.5px', lineHeight: 1.5, opacity: 0.8, marginBottom: '10px' }}>
                  {style.description.slice(0, 55)}...
                </div>
                <button className="ui-br" style={br(t.btnRadius, {
                  background: t.btnBg, color: t.btnFg,
                  border: t.btnBorder, padding: '5px 10px',
                  fontSize: '7px', fontWeight: 700, cursor: 'pointer',
                  boxShadow: t.btnShadow, display: 'block',
                })}>
                  Explore →
                </button>
              </div>
              {/* Mini card */}
              <div style={{ padding: '0 12px 12px' }}>
                <div className="ui-br" style={br(t.cardRadius, {
                  background: t.cardBg, border: t.cardBorder,
                  boxShadow: t.cardShadow, padding: '9px',
                  backdropFilter: t.cardBackdrop,
                })}>
                  <div style={{ fontFamily: hf, color: t.headingColor, fontWeight: 700, fontSize: '8px', marginBottom: '3px' }}>Feature Card</div>
                  <div style={{ color: t.bodyColor, fontSize: '6px', opacity: 0.7 }}>Component example in this style</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Characteristics */}
        <div>
          <h2 style={{ fontFamily: hf, color: t.headingColor, fontWeight: 700, fontSize: '11px', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.6 }}>
            What Defines This Style
          </h2>
          <p style={{ color: t.captionColor, fontSize: '12px', marginBottom: '22px', fontFamily: bf, opacity: 0.75, lineHeight: 1.5 }}>
            The signature details that make {style.name} instantly recognisable.
          </p>
          <div>
            {style.characteristics.map((char, i) => (
              <div key={i} style={{ padding: '16px 0', borderBottom: `1px solid ${t.dividerColor}`, display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span className="ui-br" style={br(t.btnRadius, {
                  width: '28px', height: '28px', flexShrink: 0,
                  background: t.btnBg, border: t.btnBorder,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'monospace', fontSize: '10px', fontWeight: 700,
                  color: t.btnFg, boxShadow: t.btnShadow,
                })}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p style={{ color: t.bodyColor, fontSize: '13px', lineHeight: 1.65, fontFamily: bf, margin: 0 }}>
                  {char}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES SECTION ── */}
      {suggestedCategories.length > 0 && (
        <>
          <div className="uisd-divider" style={{ height: '1px', background: t.dividerColor, margin: '0 40px' }} />
          <section className="uisd-sec" style={{ padding: '56px 40px', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: hf, color: t.headingColor, fontWeight: 700, fontSize: '11px', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.6 }}>
              Industries &amp; Business Models
            </h2>
            <p style={{ color: t.captionColor, fontSize: '12px', marginBottom: '28px', fontFamily: bf, opacity: 0.75 }}>
              {style.name} works best for these industries
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {suggestedCategories.map((cat) => (
                <Link key={cat.id} href={`/business-model/${cat.id}`} style={{ textDecoration: 'none' }}>
                  <div
                    className="ui-br"
                    style={br(t.cardRadius, {
                      background: t.cardBg,
                      border: t.cardBorder,
                      boxShadow: t.cardShadow,
                      backdropFilter: t.cardBackdrop,
                      WebkitBackdropFilter: t.cardBackdrop,
                      padding: '22px',
                      cursor: 'pointer',
                      transition: 'transform 0.1s, box-shadow 0.1s',
                      display: 'block',
                    })}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-2px,-2px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'translate(0,0)'; }}
                  >
                    <div style={{ fontSize: '28px', marginBottom: '10px', lineHeight: 1 }}>{cat.icon}</div>
                    <div style={{ fontFamily: hf, color: t.headingColor, fontWeight: 700, fontSize: '14px', marginBottom: '5px' }}>
                      {cat.name}
                    </div>
                    <div style={{ color: t.captionColor, fontSize: '11px', fontFamily: bf, marginBottom: '14px', lineHeight: 1.5, opacity: 0.75 }}>
                      {cat.tagline}
                    </div>
                    <span style={{ color: t.accent, fontSize: '10px', fontFamily: bf, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Explore Models →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ── DIVIDER ── */}
      <div className="uisd-divider" style={{ height: '1px', background: t.dividerColor, margin: '0 40px' }} />

      {/* ── FOOTER NAV ── */}
      <section className="uisd-sec" style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        {prev ? (
          <Link href={`/ui-styles/${prev.slug}`} style={{ textDecoration: 'none' }}>
            <button className="ui-br" style={br(t.btnRadius, {
              background: t.cardBg, color: t.headingColor,
              border: t.cardBorder, padding: '12px 22px',
              fontSize: '10px', fontWeight: 700, cursor: 'pointer',
              boxShadow: t.cardShadow, letterSpacing: '0.06em', textTransform: 'uppercase',
              fontFamily: hf,
            })}>
              ← {prev.name}
            </button>
          </Link>
        ) : <div />}

        <div style={{ textAlign: 'center' }}>
          <Link href="/ui-styles" style={{ textDecoration: 'none' }}>
            <span style={{ color: t.captionColor, fontSize: '10px', fontFamily: 'monospace', letterSpacing: '0.08em' }}>
              {idx + 1} / {uiStyles.length} styles
            </span>
          </Link>
        </div>

        {next ? (
          <Link href={`/ui-styles/${next.slug}`} style={{ textDecoration: 'none' }}>
            <button className="ui-br" style={br(t.btnRadius, {
              background: t.btnBg, color: t.btnFg,
              border: t.btnBorder, padding: '12px 22px',
              fontSize: '10px', fontWeight: 700, cursor: 'pointer',
              boxShadow: t.btnShadow, letterSpacing: '0.06em', textTransform: 'uppercase',
              fontFamily: hf,
            })}>
              {next.name} →
            </button>
          </Link>
        ) : <div />}
      </section>

      </div>{/* end z-1 content wrapper */}
    </div>
  );
}
