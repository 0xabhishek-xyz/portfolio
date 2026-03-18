import { motion } from 'framer-motion';

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  };
}

const CATEGORIES = [
  'Cosmos validator ecosystem',
  'DeFi protocols',
  'Exchange editorial',
  'IDO campaigns',
  'Genesis NFT drops',
  'Multilingual education systems',
];

const QUALITIES = [
  { label: 'Coherent enough to trust', sub: 'Dense concepts made legible without losing depth' },
  { label: 'Sharp enough to remember', sub: 'Narrative that sticks because it has a point of view' },
  { label: 'Culturally legible enough to rally around', sub: 'Community language, not corporate language' },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ background: '#060C16' }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(249,115,22,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">

        {/* Eyebrow */}
        <motion.div {...fadeUp()} className="flex items-center gap-3 mb-16">
          <span className="h-px w-6 bg-primary flex-shrink-0" />
          <span
            className="text-[11px] font-bold tracking-[0.22em] uppercase font-mono"
            style={{ color: 'rgba(249,115,22,0.55)' }}
          >
            About
          </span>
        </motion.div>

        {/* ── Zone 1: Opening Statement ── */}
        <motion.div {...fadeUp(0.08)} className="mb-16">
          <h2
            className="font-display font-black leading-[1.08]"
            style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)',
              letterSpacing: '-0.035em',
              color: 'rgba(255,255,255,0.88)',
            }}
          >
            I do not work on the loudest part
            <br />
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>
              of Web3 marketing.
            </span>
          </h2>

          <h2
            className="font-display font-black leading-[1.08] mt-3"
            style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)',
              letterSpacing: '-0.035em',
            }}
          >
            <span style={{ color: '#F97316' }}>
              I work on the part that makes
              <br />
              the loudest part actually land.
            </span>
          </h2>
        </motion.div>

        {/* Divider */}
        <motion.div
          {...fadeUp(0.14)}
          className="flex items-center gap-6 mb-16"
        >
          <div className="h-px flex-1 max-w-xs" style={{ background: 'rgba(249,115,22,0.18)' }} />
          <span
            className="text-[11px] font-mono tracking-[0.18em] uppercase"
            style={{ color: 'rgba(255,255,255,0.2)' }}
          >
            That is the layer I work in.
          </span>
          <div className="h-px flex-1 max-w-xs" style={{ background: 'rgba(249,115,22,0.18)' }} />
        </motion.div>

        {/* ── Zone 2: Two-column substance ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 mb-16">

          {/* Left: Categories */}
          <motion.div {...fadeUp(0.18)}>
            <p
              className="font-mono text-[11px] tracking-[0.2em] uppercase mb-6"
              style={{ color: 'rgba(249,115,22,0.45)' }}
            >
              Categories worked in
            </p>
            <ul className="space-y-3">
              {CATEGORIES.map((cat) => (
                <li
                  key={cat}
                  className="flex items-center gap-3 font-mono text-[13.5px]"
                  style={{ color: 'rgba(255,255,255,0.38)' }}
                >
                  <span className="w-4 h-[1.5px] flex-shrink-0" style={{ background: '#F97316', opacity: 0.5 }} />
                  {cat}
                </li>
              ))}
            </ul>
            <p
              className="font-mono text-[11px] mt-8 leading-[1.7]"
              style={{ color: 'rgba(255,255,255,0.2)' }}
            >
              Usually in categories where the product is hard to
              explain, trust is hard to earn, and the market needs
              more than surface-level promotion.
            </p>
          </motion.div>

          {/* Right: Core value prop */}
          <motion.div {...fadeUp(0.22)} className="flex flex-col gap-8">
            <div>
              <p
                className="font-display font-semibold leading-[1.55]"
                style={{
                  fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
                  color: 'rgba(255,255,255,0.7)',
                  letterSpacing: '-0.01em',
                }}
              >
                What ties it all together is simple:
              </p>
              <p
                className="font-display font-black leading-[1.45] mt-2"
                style={{
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
                  color: 'rgba(255,255,255,0.92)',
                  letterSpacing: '-0.02em',
                }}
              >
                I make technically dense projects feel coherent
                enough to trust, sharp enough to remember, and
                culturally legible enough to rally around.
              </p>
            </div>

            {/* Three qualities strip */}
            <div className="space-y-px">
              {QUALITIES.map((q, i) => (
                <motion.div
                  key={q.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.28 + i * 0.07 }}
                  className="flex items-start gap-4 py-4 border-b"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <div
                    className="w-1 flex-shrink-0 rounded-full mt-1"
                    style={{ height: 36, background: '#F97316', opacity: 0.6 + i * 0.12 }}
                  />
                  <div>
                    <p
                      className="font-display font-bold text-white"
                      style={{ fontSize: '0.95rem', letterSpacing: '-0.01em' }}
                    >
                      {q.label}
                    </p>
                    <p
                      className="font-mono text-[11.5px] mt-0.5 leading-[1.6]"
                      style={{ color: 'rgba(255,255,255,0.28)' }}
                    >
                      {q.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Bottom: Location & availability ── */}
        <motion.div
          {...fadeUp(0.35)}
          className="flex items-center gap-6 pt-8 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: '#22C55E' }}
            />
            <span
              className="font-mono text-[11.5px]"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              Open to new projects
            </span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
          <span
            className="font-mono text-[11.5px]"
            style={{ color: 'rgba(255,255,255,0.22)' }}
          >
            Hyderabad, India
          </span>
          <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
          <span
            className="font-mono text-[11.5px]"
            style={{ color: 'rgba(255,255,255,0.22)' }}
          >
            Remote roles · Strategic consulting · Selective collaborations
          </span>
        </motion.div>

      </div>
    </section>
  );
}
