import { useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

function fadeIn(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.52, delay },
  };
}

const TICKER_ITEMS = [
  { asset: 'BTC // USD', price: '$67,420.00', feed: 'Chainlink', status: 'LIVE', live: true },
  { asset: 'ETH // USD', price: '$3,540.12', feed: 'Chainlink', status: 'LIVE', live: true },
  { asset: 'Series B Pre-IPO', price: '———', feed: 'NO FEED', status: 'UNPRICED', live: false },
  { asset: 'SOL // USD', price: '$178.44', feed: 'Pyth', status: 'LIVE', live: true },
  { asset: 'Private Credit Fund', price: '———', feed: 'NO FEED', status: 'UNPRICED', live: false },
  { asset: 'MATIC // USD', price: '$0.89', feed: 'Band', status: 'LIVE', live: true },
  { asset: 'PE Portfolio Interest', price: '———', feed: 'NO FEED', status: 'UNPRICED', live: false },
  { asset: 'Pre-Revenue Startup', price: '———', feed: 'NO FEED', status: 'UNPRICED', live: false },
  { asset: 'BNB // USD', price: '$412.77', feed: 'Chainlink', status: 'LIVE', live: true },
  { asset: 'Illiquid PE Note', price: '———', feed: 'NO FEED', status: 'UNPRICED', live: false },
];

const TABLE_ASSETS = [
  { name: 'BTC / USD', category: 'Liquid · Crypto', price: '$67,420', feed: 'Chainlink ✓', status: 'LIVE', live: true },
  { name: 'ETH / USD', category: 'Liquid · Crypto', price: '$3,540', feed: 'Chainlink ✓', status: 'LIVE', live: true },
  { name: 'SOL / USD', category: 'Liquid · Crypto', price: '$178', feed: 'Pyth ✓', status: 'LIVE', live: true },
  null,
  { name: 'Series B Pre-IPO', category: 'Private · Equity', price: '———', feed: '✕ NO FEED', status: 'UNPRICED', live: false },
  { name: 'Private Credit Fund', category: 'Illiquid · Debt', price: '———', feed: '✕ NO FEED', status: 'UNPRICED', live: false },
  { name: 'PE Portfolio Interest', category: 'Illiquid · Equity', price: '———', feed: '✕ NO FEED', status: 'UNPRICED', live: false },
  { name: 'Pre-Revenue Startup', category: 'Private · Early Stage', price: '———', feed: '✕ NO FEED', status: 'UNPRICED', live: false },
];

const MANDATE = [
  {
    num: '01',
    label: 'Whitepaper Co-authorship',
    strategic: 'The whitepaper was not treated as documentation. It was treated as the primary trust-building artifact. For a product this conceptually dense, the quality of the explanation was indistinguishable from the quality of the product in the market\'s perception. A weak whitepaper would have made the protocol look weak — not just the writing.',
  },
  {
    num: '02',
    label: 'Protocol Explanation',
    strategic: 'The goal here was not simplification. It was making the mechanism legible without losing the precision that gave it credibility. Oversimplifying the Seeker-Expert dynamic or the reputation clearing mechanism would have stripped the very logic that made the protocol defensible. The challenge was compression without distortion.',
  },
  {
    num: '03',
    label: 'Narrative Framing',
    strategic: 'The category had to exist before the product could be evaluated. Leading with mechanism before establishing the problem space — why illiquid assets are structurally unpriceable in DeFi — would have lost the audience before they understood why any of this mattered. Category definition came first, always.',
  },
  {
    num: '04',
    label: 'Educational Translation',
    strategic: 'The protocol had multiple conceptual layers, each requiring its own entry point. The design challenge was building an education system where each layer reinforced the one before it — so a reader moving from a short explainer to the full whitepaper never felt they had jumped categories.',
  },
  {
    num: '05',
    label: 'Market-Facing Positioning',
    strategic: 'Over-marketing Lithium would have backfired. The protocol\'s value came from the rigor of its mechanism, and the market would sense immediately if the communication style was softer than the product deserved. The positioning lane was intellectual credibility — not loudness. The content had to earn belief, not announce it.',
  },
  {
    num: '06',
    label: 'Vernacular Explainers',
    strategic: 'Moving into Hindi and regional formats was not a distribution tactic. It was a strategic recognition that comprehension friction is the hardest friction to fix once a product has already launched. If only English-first crypto insiders understood Lithium, the market would stay small by design — not by accident.',
  },
];

export default function CaseStudyLithium() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ background: '#060C16' }}>
      <style>{`
        @keyframes ticker-move {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .lith-ticker {
          animation: ticker-move 45s linear infinite;
          display: flex;
          width: max-content;
        }
        .lith-ticker:hover { animation-play-state: paused; }
      `}</style>

      {/* ── Sticky Nav ── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b" style={{ height: 56, background: 'rgba(6,12,22,0.92)', backdropFilter: 'blur(16px)', borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium transition-colors group" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to work
          </Link>
          <Link href="/" className="font-display font-bold text-base tracking-tight flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.8)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Abhishek.
          </Link>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-mono hidden md:block" style={{ color: 'rgba(249,115,22,0.5)' }}>
            Case Study · 03 / 03
          </span>
        </div>
      </header>

      <main style={{ paddingTop: 56 }}>

        {/* ════════════════════════════════════
            HERO — dark, terminal, oracle feel
        ════════════════════════════════════ */}
        <section className="relative overflow-hidden pt-20 pb-0" style={{ background: '#060C16' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 75% 55% at 35% 65%, rgba(249,115,22,0.05) 0%, transparent 65%)' }} />

          {/* UNPRICED ghost watermark */}
          <span
            className="absolute font-black font-mono select-none pointer-events-none"
            style={{ bottom: '8%', right: '-2%', fontSize: 'clamp(5rem, 22vw, 20rem)', letterSpacing: '-0.06em', lineHeight: 1, color: 'rgba(255,255,255,0.02)' }}
          >UNPRICED</span>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-16">
            <motion.div {...fadeIn()} className="flex items-center gap-3 mb-8">
              <span className="h-px w-6 bg-primary flex-shrink-0" />
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase font-mono" style={{ color: 'rgba(249,115,22,0.55)' }}>
                Case Study · DeFi Pricing Oracle
              </span>
            </motion.div>

            <motion.h1
              {...fadeIn(0.06)}
              className="font-display font-black text-white leading-[1.02]"
              style={{ fontSize: 'clamp(2.4rem, 6.5vw, 5.2rem)', letterSpacing: '-0.038em', maxWidth: 960 }}
            >
              Making one of DeFi's hardest ideas{' '}
              <span className="text-primary italic" style={{ fontStyle: 'normal' }}>legible.</span>
            </motion.h1>

            <motion.p
              {...fadeIn(0.12)}
              className="mt-6 leading-[1.8] max-w-xl"
              style={{ color: 'rgba(255,255,255,0.42)', fontSize: '1.02rem' }}
            >
              A pricing oracle for private and illiquid assets — the kind of DeFi product where the communication layer is not a wrapper around the tech. It is the mechanism that makes the tech trustworthy.
            </motion.p>

            {/* Inline stats row */}
            <motion.div {...fadeIn(0.18)} className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-10">
              {[
                ['WP', 'Whitepaper co-authored'],
                ['6', 'Mandate layers'],
                ['3', 'Languages'],
                ['7', 'Content pillars'],
              ].map(([val, lab], i) => (
                <div key={i} className="flex items-baseline gap-2.5">
                  {i > 0 && <span className="w-px h-5 bg-white/8 self-center" />}
                  <span className="font-display font-black text-primary" style={{ fontSize: '1.45rem', letterSpacing: '-0.03em' }}>{val}</span>
                  <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.28)' }}>{lab}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Ticker band */}
          <div className="relative overflow-hidden border-t" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.018)', height: 46 }}>
            <div className="lith-ticker h-full items-center">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <div key={i} className="flex items-center h-full px-6 gap-3 flex-shrink-0" style={{ borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                  <span className="font-mono text-[11px] font-bold" style={{ color: 'rgba(255,255,255,0.38)', letterSpacing: '0.04em' }}>{item.asset}</span>
                  <span className="font-mono text-[11px]" style={{ color: item.live ? 'rgba(34,197,94,0.75)' : 'rgba(255,255,255,0.18)' }}>{item.price}</span>
                  <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded-full" style={{
                    background: item.live ? 'rgba(34,197,94,0.1)' : 'rgba(249,115,22,0.1)',
                    color: item.live ? 'rgba(34,197,94,0.7)' : 'rgba(249,115,22,0.65)',
                    letterSpacing: '0.12em',
                  }}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            THE STRUCTURAL PROBLEM
            Bloomberg-style terminal table
        ════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
              <motion.div {...fadeIn()}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-6 bg-primary flex-shrink-0" />
                  <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">The Structural Problem</span>
                </div>
                <h2 className="font-display font-black text-foreground leading-tight" style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)', letterSpacing: '-0.028em' }}>
                  The market problem was structural, not just complicated.
                </h2>
              </motion.div>
              <motion.div {...fadeIn(0.08)} className="pt-1">
                <p className="text-[14.5px] text-muted-foreground leading-[1.82] mb-4">
                  The first strategic call was understanding what kind of problem this actually was. Most DeFi marketing is solving a positioning problem — how to differentiate within a familiar category. Lithium was solving a{' '}
                  <strong className="text-foreground font-semibold">category problem</strong>. The gap it was filling did not have a name yet.
                </p>
                <p className="text-[14.5px] text-muted-foreground leading-[1.82]">
                  That meant the first job was not to promote the product. It was to make the gap itself visible. For liquid assets, price discovery is continuous and public. For private assets — pre-IPO equity, credit instruments, illiquid PE interests — there is no oracle infrastructure. That is a structural absence, not a gap a better API could fix.
                </p>
              </motion.div>
            </div>

            {/* Bloomberg terminal table */}
            <motion.div {...fadeIn(0.1)} className="rounded-2xl overflow-hidden" style={{ background: '#090F1B', border: '1px solid rgba(255,255,255,0.07)' }}>
              {/* Terminal chrome */}
              <div className="flex items-center gap-3 px-5 py-3 border-b" style={{ background: '#060C16', borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <span className="font-mono text-[10px] ml-3" style={{ color: 'rgba(255,255,255,0.18)', letterSpacing: '0.08em' }}>
                  ASSET_ORACLE_FEED_STATUS // LITHIUM_TERMINAL_v1
                </span>
              </div>

              {/* Column headers */}
              <div className="grid px-6 py-3 border-b" style={{ gridTemplateColumns: '2fr 1fr 1.6fr 1fr', borderColor: 'rgba(255,255,255,0.06)' }}>
                {['ASSET', 'PRICE', 'ORACLE FEED', 'STATUS'].map(h => (
                  <span key={h} className="font-mono text-[9px] font-bold tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.18)' }}>{h}</span>
                ))}
              </div>

              {/* Data rows */}
              {TABLE_ASSETS.map((row, i) => {
                if (!row) return (
                  <div key={`sep-${i}`} className="px-6 pt-3 pb-2">
                    <div className="border-t border-dashed" style={{ borderColor: 'rgba(255,255,255,0.07)' }} />
                    <p className="font-mono text-[9px] mt-2" style={{ color: 'rgba(249,115,22,0.3)', letterSpacing: '0.08em' }}>
                      {'// PRIVATE & ILLIQUID ASSETS — NO CONTINUOUS PUBLIC PRICE FEED AVAILABLE'}
                    </p>
                  </div>
                );
                return (
                  <div
                    key={i}
                    className="grid px-6 py-3.5 border-b"
                    style={{ gridTemplateColumns: '2fr 1fr 1.6fr 1fr', borderColor: 'rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}
                  >
                    <div>
                      <span className="font-mono text-[12.5px] font-bold" style={{ color: row.live ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.3)' }}>{row.name}</span>
                      <span className="block font-mono text-[9.5px] mt-0.5" style={{ color: 'rgba(255,255,255,0.18)' }}>{row.category}</span>
                    </div>
                    <span className="font-mono text-[12.5px] self-center" style={{ color: row.live ? 'rgba(34,197,94,0.8)' : 'rgba(255,255,255,0.14)' }}>{row.price}</span>
                    <span className="font-mono text-[11px] self-center" style={{ color: row.live ? 'rgba(34,197,94,0.6)' : 'rgba(249,115,22,0.5)' }}>{row.feed}</span>
                    <span
                      className="font-mono text-[9px] font-bold self-center rounded px-2 py-1"
                      style={{
                        background: row.live ? 'rgba(34,197,94,0.1)' : 'rgba(249,115,22,0.08)',
                        color: row.live ? 'rgba(34,197,94,0.7)' : 'rgba(249,115,22,0.6)',
                        letterSpacing: '0.1em',
                        width: 'fit-content',
                      }}
                    >{row.status}</span>
                  </div>
                );
              })}

              {/* Footer comment */}
              <div className="px-6 py-4">
                <p className="font-mono text-[10px]" style={{ color: 'rgba(255,255,255,0.18)' }}>
                  {'// Without a credible pricing layer, private assets cannot flow into DeFi. That is the gap Lithium was built to close.'}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════
            THE MANDATE — vertical spine
        ════════════════════════════════════ */}
        <section className="py-16 md:py-24 border-y border-border bg-card">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...fadeIn()} className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-6 bg-primary flex-shrink-0" />
                <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">The Mandate</span>
              </div>
              <h2 className="font-display font-black text-foreground leading-tight mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em', maxWidth: 700 }}>
                Build the communication layer around the complexity. Don't flatten it.
              </h2>
              <p className="text-[14.5px] text-muted-foreground leading-[1.82] max-w-2xl">
                The real job was not writing content. It was reducing the gap between what Lithium actually did and what the market could understand quickly enough to care about. Each of the six layers below was a deliberate strategic decision — not a task list.
              </p>
            </motion.div>

            {/* Spine timeline */}
            <div className="relative ml-3 md:ml-6">
              {/* Vertical spine */}
              <div className="absolute top-0 bottom-0 w-px left-0" style={{ background: 'linear-gradient(to bottom, rgba(249,115,22,0.35) 0%, rgba(249,115,22,0.04) 100%)' }} />

              <div className="flex flex-col">
                {MANDATE.map((m, i) => (
                  <motion.div key={i} {...fadeIn(i * 0.06)} className="flex gap-8 py-8 border-b border-border last:border-b-0 relative pl-8">
                    {/* Spine dot */}
                    <div className="absolute left-0 top-[2.15rem] w-4 h-4 rounded-full flex items-center justify-center" style={{ background: 'hsl(var(--card))', border: '2px solid rgba(249,115,22,0.45)', transform: 'translateX(-7.5px)' }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-10">
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-[9px] font-black text-primary/40 tracking-widest">{m.num}</span>
                        <h3 className="font-display font-bold text-foreground" style={{ fontSize: '0.98rem', letterSpacing: '-0.012em', lineHeight: 1.3 }}>{m.label}</h3>
                      </div>
                      <p className="text-[13.5px] text-muted-foreground leading-[1.78]">{m.strategic}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            THE MECHANISM — oracle diagram
            Dark section · signature visual
        ════════════════════════════════════ */}
        <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: '#080E1A' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...fadeIn()} className="mb-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-6 bg-primary flex-shrink-0" />
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase font-mono" style={{ color: 'rgba(249,115,22,0.55)' }}>The Mechanism</span>
              </div>
              <h2 className="font-display font-black text-white leading-tight mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em' }}>
                Seeker meets Expert. Protocol makes trust possible.
              </h2>
            </motion.div>

            <motion.div {...fadeIn(0.07)} className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
              <p className="text-[14.5px] leading-[1.82]" style={{ color: 'rgba(255,255,255,0.44)' }}>
                The two-sided design was Lithium's strongest structural idea. The communication decision was to make the Seeker/Expert dynamic the central organising frame for everything else — because once a reader understood this relationship, the token model, the reputation system, and the privacy design all fell into place as supporting architecture rather than isolated technical features requiring separate explanations.
              </p>
              <p className="text-[14.5px] leading-[1.82]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Without clear role comprehension, the protocol looked like a complex black box. With it, the protocol looked like a functioning information market — one where Seekers paid for pricing insight they could not source themselves, and Experts were cryptoeconomically incentivised to be honest rather than approximate.
              </p>
            </motion.div>

            {/* SVG Oracle Flow Diagram */}
            <motion.div {...fadeIn(0.12)} className="w-full overflow-x-auto">
              <div style={{ minWidth: 580 }}>
                <svg viewBox="0 0 900 370" style={{ width: '100%', height: 'auto' }} xmlns="http://www.w3.org/2000/svg">

                  {/* ── Connection lines (behind boxes) ── */}

                  {/* Seeker → Protocol Core */}
                  <line x1="222" y1="178" x2="382" y2="178" stroke="rgba(249,115,22,0.3)" strokeWidth="1.5" strokeDasharray="5 4" />
                  <polygon points="382,173 394,178 382,183" fill="rgba(249,115,22,0.3)" />

                  {/* Wisdom Nodes → Protocol Core */}
                  <line x1="652" y1="75" x2="518" y2="163" stroke="rgba(59,130,246,0.22)" strokeWidth="1.5" strokeDasharray="5 4" />
                  <line x1="652" y1="178" x2="518" y2="178" stroke="rgba(59,130,246,0.22)" strokeWidth="1.5" strokeDasharray="5 4" />
                  <line x1="652" y1="281" x2="518" y2="193" stroke="rgba(59,130,246,0.22)" strokeWidth="1.5" strokeDasharray="5 4" />

                  {/* Protocol Core → Price Output */}
                  <line x1="450" y1="240" x2="450" y2="305" stroke="rgba(249,115,22,0.22)" strokeWidth="1.5" />
                  <polygon points="445,305 450,318 455,305" fill="rgba(249,115,22,0.22)" />

                  {/* Privacy layer enclosure */}
                  <rect x="516" y="22" width="148" height="316" rx="7" fill="rgba(255,255,255,0.014)" stroke="rgba(255,255,255,0.055)" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="590" y="355" textAnchor="middle" fill="rgba(255,255,255,0.18)" fontSize="8" fontFamily="monospace" letterSpacing="3">PRIVACY LAYER</text>

                  {/* ── SEEKER BOX ── */}
                  <rect x="18" y="128" width="204" height="100" rx="10" fill="rgba(249,115,22,0.07)" stroke="rgba(249,115,22,0.2)" strokeWidth="1" />
                  <text x="120" y="158" textAnchor="middle" fill="rgba(249,115,22,0.62)" fontSize="8.5" fontFamily="monospace" fontWeight="700" letterSpacing="3">PRICE SEEKER</text>
                  <text x="120" y="177" textAnchor="middle" fill="rgba(255,255,255,0.52)" fontSize="11" fontFamily="system-ui, sans-serif">Requests valuation</text>
                  <text x="120" y="195" textAnchor="middle" fill="rgba(255,255,255,0.24)" fontSize="10" fontFamily="monospace">Pays in $LITH</text>
                  <text x="120" y="211" textAnchor="middle" fill="rgba(255,255,255,0.17)" fontSize="9" fontFamily="monospace">Gets confidence-weighted output</text>

                  {/* ── PROTOCOL CORE (diamond) ── */}
                  <polygon points="450,112 522,178 450,244 378,178" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <text x="450" y="162" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8.5" fontFamily="monospace" fontWeight="700" letterSpacing="2">PROTOCOL</text>
                  <text x="450" y="177" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8.5" fontFamily="monospace" fontWeight="700" letterSpacing="2">CORE</text>
                  <text x="450" y="194" textAnchor="middle" fill="rgba(255,255,255,0.22)" fontSize="8" fontFamily="monospace">$LITH · DMI · Rep</text>
                  <text x="450" y="208" textAnchor="middle" fill="rgba(255,255,255,0.14)" fontSize="7.5" fontFamily="monospace">Slashing · Privacy</text>

                  {/* ── WISDOM NODE 1 ── */}
                  <circle cx="700" cy="75" r="44" fill="rgba(59,130,246,0.07)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
                  <text x="700" y="69" textAnchor="middle" fill="rgba(59,130,246,0.62)" fontSize="8.5" fontFamily="monospace" fontWeight="700" letterSpacing="2">WISDOM</text>
                  <text x="700" y="83" textAnchor="middle" fill="rgba(59,130,246,0.62)" fontSize="8.5" fontFamily="monospace" fontWeight="700" letterSpacing="2">NODE</text>
                  <text x="700" y="97" textAnchor="middle" fill="rgba(255,255,255,0.18)" fontSize="8" fontFamily="monospace">Expert A</text>

                  {/* ── WISDOM NODE 2 ── */}
                  <circle cx="700" cy="178" r="44" fill="rgba(59,130,246,0.07)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
                  <text x="700" y="172" textAnchor="middle" fill="rgba(59,130,246,0.62)" fontSize="8.5" fontFamily="monospace" fontWeight="700" letterSpacing="2">WISDOM</text>
                  <text x="700" y="186" textAnchor="middle" fill="rgba(59,130,246,0.62)" fontSize="8.5" fontFamily="monospace" fontWeight="700" letterSpacing="2">NODE</text>
                  <text x="700" y="200" textAnchor="middle" fill="rgba(255,255,255,0.18)" fontSize="8" fontFamily="monospace">Expert B</text>

                  {/* ── WISDOM NODE 3 ── */}
                  <circle cx="700" cy="281" r="44" fill="rgba(59,130,246,0.07)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
                  <text x="700" y="275" textAnchor="middle" fill="rgba(59,130,246,0.62)" fontSize="8.5" fontFamily="monospace" fontWeight="700" letterSpacing="2">WISDOM</text>
                  <text x="700" y="289" textAnchor="middle" fill="rgba(59,130,246,0.62)" fontSize="8.5" fontFamily="monospace" fontWeight="700" letterSpacing="2">NODE</text>
                  <text x="700" y="303" textAnchor="middle" fill="rgba(255,255,255,0.18)" fontSize="8" fontFamily="monospace">Expert C</text>

                  {/* ── PRICE OUTPUT ── */}
                  <rect x="348" y="318" width="204" height="44" rx="8" fill="rgba(249,115,22,0.07)" stroke="rgba(249,115,22,0.2)" strokeWidth="1" />
                  <text x="450" y="337" textAnchor="middle" fill="rgba(249,115,22,0.65)" fontSize="9.5" fontFamily="monospace" fontWeight="700" letterSpacing="2">PRICE OUTPUT</text>
                  <text x="450" y="353" textAnchor="middle" fill="rgba(255,255,255,0.28)" fontSize="9" fontFamily="monospace">→ DeFi Ecosystem</text>
                </svg>
              </div>
            </motion.div>

            {/* Strategic callouts below diagram */}
            <motion.div {...fadeIn(0.18)} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl p-5" style={{ background: 'rgba(59,130,246,0.05)', border: '1px solid rgba(59,130,246,0.12)' }}>
                <span className="text-[9px] font-bold font-mono tracking-[0.2em] uppercase block mb-3" style={{ color: 'rgba(59,130,246,0.5)' }}>Privacy Layer — The Strategic Reason</span>
                <p className="text-[13px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.38)' }}>
                  Wisdom Nodes were responding to price-sensitive questions about assets they had privileged, often non-public access to. Privacy was not a side feature — it was the reason informed participants would contribute at all. The communication had to carry confidentiality as a core trust signal, not a technical footnote, or the entire expert contribution model would look implausible.
                </p>
              </div>
              <div className="rounded-xl p-5" style={{ background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.12)' }}>
                <span className="text-[9px] font-bold font-mono tracking-[0.2em] uppercase block mb-3" style={{ color: 'rgba(249,115,22,0.5)' }}>Slashing + Rewards — The Strategic Reason</span>
                <p className="text-[13px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.38)' }}>
                  The slashing mechanism was the proof that this was not naive crowdsourcing. It was the design element that made the protocol's price outputs defensible — the difference between an information market and an opinion poll. Making this legible to the market was critical. Without it, the entire credibility argument collapsed into a different kind of oracle with the same old problems.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════
            THE BRIDGE — asymmetric split
            TradFi ← LITHIUM → DeFi
        ════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...fadeIn()} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-6 bg-primary flex-shrink-0" />
                <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">The Bridge</span>
              </div>
              <h2 className="font-display font-black text-foreground leading-tight mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em', maxWidth: 760 }}>
                The content had to work in two directions simultaneously.
              </h2>
              <p className="text-[14.5px] text-muted-foreground leading-[1.82] max-w-2xl">
                DeFi-native readers needed to understand why private markets were worth bringing onchain. TradFi readers needed to trust that decentralised price discovery was not naive crowdsourcing. The narrative had to make the bridge feel strategically inevitable — not experimental, not speculative, not still-being-figured-out.
              </p>
            </motion.div>

            {/* Asymmetric split panel */}
            <motion.div {...fadeIn(0.1)} className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-stretch rounded-2xl overflow-hidden border border-border">

              {/* TradFi — dark */}
              <div className="p-8 md:p-10 flex flex-col" style={{ background: '#0C1422' }}>
                <span className="text-[9px] font-bold font-mono tracking-[0.25em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.18)' }}>Traditional Finance</span>
                <h3 className="font-display font-black text-white mb-6" style={{ fontSize: '1.3rem', letterSpacing: '-0.02em' }}>Gated. Expensive. Opaque.</h3>
                <div className="flex flex-col gap-3.5 flex-1">
                  {[
                    ['Information', 'Privileged, relationship-guarded'],
                    ['Price discovery', 'Manual, expensive, infrequent'],
                    ['Data access', 'Not public, not continuous'],
                    ['Liquidity', 'Low — exits are events, not flows'],
                    ['DeFi compatibility', 'Structurally absent'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-start gap-3">
                      <span className="text-[11px] font-bold flex-shrink-0 mt-0.5" style={{ color: 'rgba(255,255,255,0.25)', width: 108 }}>{k}</span>
                      <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.22)' }}>{v}</span>
                    </div>
                  ))}
                </div>
                <blockquote className="mt-8 pt-5 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                  <p className="text-[12px] leading-[1.7] italic" style={{ color: 'rgba(255,255,255,0.2)' }}>
                    "The raw material behind the oracle was itself hidden, fragmented, and socially guarded by nature."
                  </p>
                </blockquote>
              </div>

              {/* Divider with LITHIUM vertical text */}
              <div className="relative flex items-center justify-center min-w-[52px] py-8" style={{ background: 'linear-gradient(to bottom, #0C1422, hsl(var(--background)))' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-px h-full" style={{ background: 'linear-gradient(to bottom, rgba(249,115,22,0.18), rgba(249,115,22,0.04))' }} />
                </div>
                <div className="relative z-10 flex flex-col items-center gap-[3px] px-2 py-4 rounded-lg" style={{ background: 'hsl(var(--background))', border: '1px solid rgba(249,115,22,0.22)' }}>
                  {['L','I','T','H','I','U','M'].map((ch, i) => (
                    <span key={i} className="font-black text-primary font-mono" style={{ fontSize: '8px', lineHeight: '1.5', letterSpacing: '0.05em' }}>{ch}</span>
                  ))}
                </div>
              </div>

              {/* DeFi — light */}
              <div className="p-8 md:p-10 flex flex-col bg-background">
                <span className="text-[9px] font-bold font-mono tracking-[0.25em] uppercase mb-4 text-muted-foreground/40">Decentralised Finance</span>
                <h3 className="font-display font-black text-foreground mb-6" style={{ fontSize: '1.3rem', letterSpacing: '-0.02em' }}>Open. Composable. Programmable.</h3>
                <div className="flex flex-col gap-3.5 flex-1">
                  {[
                    ['Price feeds', 'Continuous, public, onchain'],
                    ['Oracle design', 'Built for liquid, not private'],
                    ['Composability', 'Any protocol reads any price'],
                    ['New categories', 'Blocked by missing primitives'],
                    ['Lithium role', 'The missing pricing primitive'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-start gap-3">
                      <span className="text-[11px] font-bold text-muted-foreground/40 flex-shrink-0 mt-0.5" style={{ width: 108 }}>{k}</span>
                      <span className="text-[12px] text-muted-foreground">{v}</span>
                    </div>
                  ))}
                </div>
                <blockquote className="mt-8 pt-5 border-t border-border">
                  <p className="text-[12px] leading-[1.7] italic text-muted-foreground/50">
                    "DeFi cannot meaningfully financialise private assets if those assets cannot be priced credibly."
                  </p>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════
            VERNACULAR REACH — script-forward
            Dark, three language blocks
        ════════════════════════════════════ */}
        <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: '#080E1A' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(249,115,22,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.02) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...fadeIn()} className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-6 bg-primary flex-shrink-0" />
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase font-mono" style={{ color: 'rgba(249,115,22,0.55)' }}>Vernacular Reach</span>
              </div>
              <h2 className="font-display font-black text-white leading-tight mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em' }}>
                The comprehension gap was as much a language problem as a jargon problem.
              </h2>
            </motion.div>

            <motion.div {...fadeIn(0.07)} className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
              <p className="text-[14.5px] leading-[1.82]" style={{ color: 'rgba(255,255,255,0.44)' }}>
                Moving into Hindi and regional formats was not a distribution tactic. It was a strategic recognition that comprehension friction is the hardest friction to fix after a product has launched. If the only people who truly understood Lithium were English-first crypto insiders, the protocol's market would stay small by design — not by accident.
              </p>
              <p className="text-[14.5px] leading-[1.82]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                The goal was a layered comprehension system — not a simplified version of the content. Someone entering through a Hindi explainer video should be able to follow the thread all the way to the whitepaper without feeling they had crossed a language wall. The depth stayed consistent. The entry points multiplied.
              </p>
            </motion.div>

            {/* Script-forward language blocks */}
            <motion.div {...fadeIn(0.12)} className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>

              {/* English */}
              <div className="px-8 md:px-12 py-8 md:py-10 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-bold font-mono tracking-[0.25em] uppercase" style={{ color: 'rgba(255,255,255,0.2)' }}>English · Primary market layer</span>
                  <div className="flex flex-wrap gap-2">
                    {['Whitepaper', 'Protocol explainers', 'Long-form', 'Technical deep-dives'].map(f => (
                      <span key={f} className="text-[9.5px] font-mono px-2 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.25)' }}>{f}</span>
                    ))}
                  </div>
                </div>
                <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)', letterSpacing: '-0.03em', lineHeight: 1.12 }}>
                  Making DeFi legible.
                </p>
              </div>

              {/* Hindi */}
              <div className="px-8 md:px-12 py-8 md:py-10 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(249,115,22,0.02)' }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-bold font-mono tracking-[0.25em] uppercase" style={{ color: 'rgba(249,115,22,0.35)' }}>हिंदी · Vernacular education layer</span>
                  <div className="flex flex-wrap gap-2">
                    {['Explainer videos', 'Shorter formats', 'Conceptual primers'].map(f => (
                      <span key={f} className="text-[9.5px] font-mono px-2 py-0.5 rounded" style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.1)', color: 'rgba(249,115,22,0.38)' }}>{f}</span>
                    ))}
                  </div>
                </div>
                <p className="font-black text-white" style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)', letterSpacing: '-0.015em', lineHeight: 1.2, fontFamily: 'system-ui, sans-serif' }}>
                  DeFi को समझने योग्य बनाना।
                </p>
              </div>

              {/* Regional */}
              <div className="px-8 md:px-12 py-8 md:py-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-bold font-mono tracking-[0.25em] uppercase" style={{ color: 'rgba(255,255,255,0.17)' }}>Regional · Multilingual access layer</span>
                  <div className="flex flex-wrap gap-2">
                    {['Regional formats', 'Comprehension-first', 'Education-led'].map(f => (
                      <span key={f} className="text-[9.5px] font-mono px-2 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.2)' }}>{f}</span>
                    ))}
                  </div>
                </div>
                <p className="font-black text-white" style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)', letterSpacing: '-0.01em', lineHeight: 1.2, fontFamily: 'system-ui, sans-serif', opacity: 0.65 }}>
                  DeFi ని అర్థమయ్యేలా చేయడం.
                </p>
                <p className="text-[10px] font-mono mt-2" style={{ color: 'rgba(255,255,255,0.16)' }}>(Telugu — representative regional script)</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════
            WHY IT WORKED — tall vertical strips
        ════════════════════════════════════ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...fadeIn()} className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-6 bg-primary flex-shrink-0" />
                <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">Why It Worked</span>
              </div>
              <h2 className="font-display font-black text-foreground leading-tight" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em' }}>
                The category demanded explanation before promotion.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
              {[
                {
                  keyword: 'Category first.',
                  strategic: 'Most DeFi content leads with the product and trusts the market to connect to the problem. Lithium could not. The category — pricing infrastructure for private and illiquid assets — did not exist as a named, understood thing. Before anyone would evaluate the mechanism, they needed to feel the structural absence it was filling. Making the gap visible was the first and most important communication act.',
                  note: 'Leading with problem definition before product description.',
                },
                {
                  keyword: 'Credibility over hype.',
                  strategic: 'Over-marketing Lithium would have backfired. The protocol\'s value came from the rigour of its mechanism design — and the market would sense immediately if the communication style was softer than the product deserved. The positioning lane was intellectual credibility: precise, grounded, defensible. Loudness would have undermined the exact trust the product needed to build before anyone would use it.',
                  note: 'Calibrating communication style to the nature of the product.',
                },
                {
                  keyword: 'Depth made portable.',
                  strategic: 'The whitepaper was the deepest layer. The vernacular explainers were the most accessible. The design principle connecting them was not simplification — it was layered entry points. Someone entering through a Hindi video should be able to follow the thread all the way to the whitepaper\'s mechanism without ever feeling they crossed into a different product story. That continuity was the design goal.',
                  note: 'Designing a comprehension system, not just content pieces.',
                },
              ].map((strip, i) => (
                <motion.div key={i} {...fadeIn(i * 0.1)} className="p-8 md:p-10 flex flex-col gap-6">
                  <div className="w-8 h-[3px] bg-primary rounded" />
                  <h3 className="font-display font-black text-primary" style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>{strip.keyword}</h3>
                  <p className="text-[13.5px] text-muted-foreground leading-[1.8] flex-1">{strip.strategic}</p>
                  <div className="rounded-lg px-4 py-3 bg-primary/5 border border-primary/10">
                    <p className="text-[10.5px] text-primary/55 font-mono leading-[1.6]">{strip.note}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            OUTCOME — dark, monospace stats
        ════════════════════════════════════ */}
        <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: '#060C16' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...fadeIn()} className="flex items-center gap-3 mb-4">
              <span className="h-px w-6 bg-primary flex-shrink-0" />
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase font-mono" style={{ color: 'rgba(249,115,22,0.55)' }}>Outcome</span>
            </motion.div>
            <motion.h2 {...fadeIn(0.06)} className="font-display font-black text-white leading-tight mb-14" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em' }}>
              A sharper explanation for one of DeFi's hardest categories.
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-16" style={{ background: 'rgba(255,255,255,0.045)' }}>
              {[
                { val: 'WP', lab: 'Whitepaper', sub: 'Co-authored · First iteration' },
                { val: '4', lab: 'Framing layers', sub: 'Problem · Mechanism · Trust · Use case' },
                { val: '3', lab: 'Languages', sub: 'Hindi · English · Regional' },
                { val: '6+', lab: 'Content pillars', sub: 'Strategy to vernacular' },
              ].map((s, i) => (
                <motion.div key={i} {...fadeIn(i * 0.07)} className="flex flex-col gap-1.5 p-7" style={{ background: '#060C16' }}>
                  <span className="font-display font-black leading-none text-primary" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.04em' }}>{s.val}</span>
                  <span className="text-[12px] font-bold mt-2" style={{ color: 'rgba(255,255,255,0.52)' }}>{s.lab}</span>
                  <span className="text-[10.5px] font-mono" style={{ color: 'rgba(255,255,255,0.18)' }}>{s.sub}</span>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeIn(0.16)} className="rounded-2xl p-8 md:p-10" style={{ background: 'rgba(249,115,22,0.04)', border: '1px solid rgba(249,115,22,0.12)' }}>
              <p className="text-[14.5px] leading-[1.85]" style={{ color: 'rgba(255,255,255,0.46)' }}>
                The communication layer made the protocol legible across four dimensions: the structural problem of illiquid asset pricing, the mechanism design of the Seeker-Expert information market, the trust model embedded in the cryptoeconomic incentive structure, and the use cases that connected the protocol to the broader private-assets-into-DeFi narrative. Extending into vernacular formats made the same depth more portable — reducing comprehension friction without reducing the intellectual rigour that the protocol's credibility depended on.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════
            KEY TAKEAWAY — full-bleed centered
        ════════════════════════════════════ */}
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
            <motion.div {...fadeIn()}>
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/55 uppercase font-mono block mb-12">Key Takeaway</span>
              <blockquote>
                <p className="font-display font-black text-foreground leading-[1.18]" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.7rem)', letterSpacing: '-0.03em' }}>
                  At Lithium, the real job was not writing about DeFi.{' '}
                  <br className="hidden md:block" />
                  It was making a highly technical oracle for illiquid assets feel{' '}
                  <span className="text-primary italic" style={{ fontStyle: 'normal' }}>coherent enough to trust</span>,{' '}
                  clear enough to repeat, and accessible enough to explain across both crypto-native and vernacular market contexts.
                </p>
              </blockquote>
            </motion.div>
          </div>
        </section>

        {/* ── Bottom nav ── */}
        <section className="py-10 border-t border-border bg-card">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
            <Link href="/case-studies/reneverse" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Reneverse
            </Link>
            <div className="flex items-center gap-2">
              {[0, 1, 2].map(i => (
                <div key={i} className="rounded-full transition-all" style={{ width: i === 2 ? 20 : 6, height: 6, background: i === 2 ? '#F97316' : 'rgba(249,115,22,0.2)' }} />
              ))}
            </div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase font-mono text-muted-foreground/28 select-none">
              Final case study
            </span>
          </div>
        </section>

      </main>
    </div>
  );
}
