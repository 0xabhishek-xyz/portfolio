import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

function fadeIn(delay = 0) {
  return {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.52, delay },
  };
}

const PIECES = [
  {
    id: 'symbiotic',
    type: 'Mechanism Deep-Dive',
    category: 'DeFi Infrastructure · Shared Security',
    headline: 'Symbiotic Finance: The Backbone of a New Shared Security Layer',
    thesis: 'Every DeFi protocol building its own isolated security is reinventing the same expensive wheel — locking capital for a problem that could be solved once, together. Symbiotic makes shared security the default, and the economics of the whole ecosystem change when it does.',
    url: 'https://encapsulate.xyz/blog/symbiotic',
    readTime: '12 min read',
    ghost: 'SHARED',
    accent: '#F97316',
  },
  {
    id: 'berachain',
    type: 'Economic Research',
    category: 'Blockchain Research · Consensus Mechanisms',
    headline: "How Berachain's Proof-of-Liquidity is Changing Blockchain Economics",
    thesis: "Proof-of-Stake locks capital to secure the network. Proof-of-Liquidity puts that same capital to work inside the ecosystem — making liquidity provision and network security the same act, not competing choices.",
    url: 'https://encapsulate.xyz/blog/berachain-research',
    readTime: '10 min read',
    ghost: 'LIQUIDITY',
    accent: '#F97316',
  },
  {
    id: 'story',
    type: 'Educational Explainer',
    category: 'IP Rights · Web3 · Creator Economy',
    headline: 'Story Protocol: Making IP Rights Programmable',
    thesis: "The legal system for creative IP was built for the physical world. AI-generated content is breaking it at a rate lawyers can't match. Story Protocol turns IP into code — making attribution, licensing, and remixing verifiable without legal intermediaries.",
    url: 'https://encapsulate.xyz/blog/story-protocol',
    readTime: '8 min read',
    ghost: 'PROTOCOL',
    accent: '#F97316',
  },
];

function HeroCard({ piece }: { piece: typeof PIECES[0] }) {
  return (
    <motion.a
      {...fadeIn(0.1)}
      href={piece.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative rounded-2xl overflow-hidden group"
      style={{ background: '#09101C', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      {/* Node-network SVG watermark */}
      <svg
        className="absolute bottom-0 right-0 pointer-events-none select-none"
        width="320" height="260" viewBox="0 0 320 260"
        fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.045 }}
      >
        {[0,1,2,3,4].map(row =>
          [0,1,2,3,4].map(col => {
            const cx = 16 + col * 62 + (row % 2) * 31;
            const cy = 16 + row * 54;
            return (
              <g key={`${row}-${col}`}>
                <circle cx={cx} cy={cy} r="4" fill="#F97316" />
                {col < 4 && <line x1={cx} y1={cy} x2={cx + 62} y2={cy} stroke="#F97316" strokeWidth="0.8" />}
                {row < 4 && <line x1={cx} y1={cy} x2={cx + 31} y2={cy + 54} stroke="#F97316" strokeWidth="0.8" />}
              </g>
            );
          })
        )}
      </svg>

      {/* Ghost keyword */}
      <span
        className="absolute font-black font-mono select-none pointer-events-none"
        style={{
          top: '50%',
          right: '-2%',
          transform: 'translateY(-50%)',
          fontSize: 'clamp(5rem, 14vw, 10rem)',
          letterSpacing: '-0.06em',
          lineHeight: 1,
          color: 'rgba(255,255,255,0.028)',
        }}
      >{piece.ghost}</span>

      <div className="relative z-10 p-8 md:p-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-start">

        {/* Left: metadata + thesis */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className="text-[9px] font-black tracking-[0.22em] uppercase font-mono px-2.5 py-1 rounded-full"
              style={{ background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.22)', color: 'rgba(249,115,22,0.75)' }}
            >{piece.type}</span>
            <span className="text-[10px] font-mono" style={{ color: 'rgba(255,255,255,0.22)' }}>{piece.category}</span>
          </div>

          <p
            className="font-display font-black text-white leading-[1.25]"
            style={{ fontSize: 'clamp(1.45rem, 3vw, 2.1rem)', letterSpacing: '-0.025em', maxWidth: 560 }}
          >{piece.headline}</p>

          <div className="w-8 h-[2px] rounded" style={{ background: '#F97316' }} />

          <p className="text-[14px] leading-[1.78]" style={{ color: 'rgba(255,255,255,0.42)', maxWidth: 560 }}>
            {piece.thesis}
          </p>

          <div className="flex items-center gap-4 pt-1">
            <span className="text-[10.5px] font-mono font-bold" style={{ color: 'rgba(255,255,255,0.22)', letterSpacing: '0.08em' }}>
              Encapsulate.xyz
            </span>
            <span className="w-px h-3 bg-white/10" />
            <span className="text-[10.5px] font-mono" style={{ color: 'rgba(255,255,255,0.18)' }}>
              {piece.readTime}
            </span>
          </div>
        </div>

        {/* Right: CTA */}
        <div className="flex flex-col items-start md:items-end justify-between gap-6 min-w-[120px]">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.22)' }}
          >
            <ArrowUpRight size={16} className="text-primary" />
          </div>
          <span
            className="text-[11px] font-bold font-mono tracking-[0.15em] uppercase"
            style={{ color: 'rgba(249,115,22,0.5)', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >Read full piece</span>
        </div>
      </div>

      {/* Bottom bar on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300"
        style={{ background: 'linear-gradient(to right, #F97316, rgba(249,115,22,0.3))', opacity: 0, transform: 'scaleX(0.3)', transformOrigin: 'left' }}
      />
    </motion.a>
  );
}

function SecondaryCard({ piece, delay }: { piece: typeof PIECES[0]; delay: number }) {
  return (
    <motion.a
      {...fadeIn(delay)}
      href={piece.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative rounded-2xl overflow-hidden group border border-border bg-card hover:border-primary/20 transition-colors duration-300"
    >
      {/* Ghost keyword */}
      <span
        className="absolute font-black font-mono select-none pointer-events-none"
        style={{
          bottom: '-4%',
          right: '-3%',
          fontSize: 'clamp(3.5rem, 9vw, 6.5rem)',
          letterSpacing: '-0.06em',
          lineHeight: 1,
          color: 'rgba(249,115,22,0.04)',
        }}
      >{piece.ghost}</span>

      <div className="relative z-10 p-7 flex flex-col gap-5 h-full">

        {/* Type + category */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1.5">
            <span
              className="text-[9px] font-black tracking-[0.22em] uppercase font-mono px-2.5 py-1 rounded-full self-start"
              style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.18)', color: 'rgba(249,115,22,0.7)' }}
            >{piece.type}</span>
            <span className="text-[10px] text-muted-foreground/50 font-mono leading-[1.5]">{piece.category}</span>
          </div>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ background: 'rgba(249,115,22,0.07)', border: '1px solid rgba(249,115,22,0.16)' }}
          >
            <ArrowUpRight size={13} className="text-primary" />
          </div>
        </div>

        <div className="w-6 h-[2px] rounded bg-primary" />

        {/* Headline */}
        <h3
          className="font-display font-black text-foreground leading-[1.2]"
          style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)', letterSpacing: '-0.018em' }}
        >{piece.headline}</h3>

        {/* Thesis */}
        <p className="text-[13px] text-muted-foreground leading-[1.75] flex-1">
          {piece.thesis}
        </p>

        {/* Footer */}
        <div className="flex items-center gap-3 pt-2 border-t border-border">
          <span className="text-[10px] font-mono font-bold text-muted-foreground/40 tracking-[0.08em]">
            Encapsulate.xyz
          </span>
          <span className="w-px h-3 bg-border" />
          <span className="text-[10px] font-mono text-muted-foreground/35">{piece.readTime}</span>
          <span className="ml-auto text-[10px] font-bold font-mono tracking-[0.1em] uppercase text-primary/50 group-hover:text-primary/75 transition-colors">
            Read →
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export function Writing() {
  const [hero, ...secondary] = PIECES;

  return (
    <section id="writing" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <motion.div {...fadeIn()} className="flex items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-6 bg-primary flex-shrink-0" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">
                Selected Writing
              </span>
            </div>
            <h2
              className="font-display font-black text-foreground leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.03em' }}
            >
              Published proof of thinking.
            </h2>
          </div>

          <div className="hidden md:flex flex-col items-end gap-1">
            <span className="text-[11px] font-mono text-muted-foreground/40 text-right leading-[1.6]">
              3 pieces · Encapsulate.xyz
              <br />
              Deep-dives, research, explainers
            </span>
          </div>
        </motion.div>

        {/* Hero piece — full width */}
        <div className="mb-4">
          <HeroCard piece={hero} />
        </div>

        {/* Secondary pair */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {secondary.map((piece, i) => (
            <SecondaryCard key={piece.id} piece={piece} delay={0.08 + i * 0.07} />
          ))}
        </div>

        {/* Footer note */}
        <motion.div {...fadeIn(0.25)} className="mt-10 flex items-center gap-4">
          <span className="h-px flex-1 bg-border max-w-xs" />
          <p className="text-[11px] text-muted-foreground/40 font-mono">
            All pieces published on{' '}
            <a
              href="https://encapsulate.xyz/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/50 hover:text-primary/80 transition-colors underline underline-offset-2"
            >
              encapsulate.xyz
            </a>
            {' '}· Links open in new tab
          </p>
        </motion.div>

      </div>
    </section>
  );
}
