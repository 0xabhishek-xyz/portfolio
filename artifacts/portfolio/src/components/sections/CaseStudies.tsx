import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

const CASES = [
  {
    num: '01',
    slug: 'encapsulate',
    project: 'Encapsulate.xyz',
    descriptor: 'Cosmos Validator',
    category: 'Validator Ecosystem · Content Strategy',
    teaser: 'How turning operational trust into visible, public narrative helped grow delegated stake — in a market where credibility, not attention, drives delegation decisions.',
    metrics: ['+26% AUM', '~10K stakers', '15 chains', '6 months'],
    tags: ['Validator', 'Cosmos', 'Content'],
    accent: '#F97316',
    Watermark: () => (
      <svg
        className="absolute bottom-0 right-0 pointer-events-none select-none"
        width="220" height="200" viewBox="0 0 220 200"
        fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.045 }}
      >
        {[0,1,2,3,4].map(row =>
          [0,1,2,3].map(col => {
            const cx = 20 + col * 52 + (row % 2) * 26;
            const cy = 20 + row * 42;
            return (
              <g key={`${row}-${col}`}>
                <circle cx={cx} cy={cy} r="3" fill="#F97316" />
                {col < 3 && <line x1={cx} y1={cy} x2={cx + 52} y2={cy} stroke="#F97316" strokeWidth="1" />}
                {row < 4 && <line x1={cx} y1={cy} x2={cx + 26} y2={cy + 42} stroke="#F97316" strokeWidth="1" />}
              </g>
            );
          })
        )}
      </svg>
    ),
  },
  {
    num: '02',
    slug: 'reneverse',
    project: 'Reneverse',
    descriptor: 'Web3 Gaming Protocol',
    category: 'Launch Narrative · World-Building',
    teaser: 'Building the genesis-drop content system — from lore and faction identities to influencer outreach, PR, and X-first social — for a Web3 gaming universe from the ground up.',
    metrics: ['Genesis drop', '6+ channels', 'Full lore built'],
    tags: ['Launch', 'NFT', 'Narrative'],
    accent: '#F97316',
    Watermark: () => (
      <svg
        className="absolute bottom-0 right-0 pointer-events-none select-none"
        width="200" height="200" viewBox="0 0 200 200"
        fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.04 }}
      >
        {[0,1,2,3,4,5].map(row =>
          [0,1,2,3,4,5].map(col => {
            const x = col * 36;
            const y = row * 36;
            return col + row < 9 ? (
              <polygon
                key={`${row}-${col}`}
                points={`${x + 18},${y} ${x + 36},${y + 36} ${x},${y + 36}`}
                stroke="#F97316" strokeWidth="1" fill="none"
              />
            ) : null;
          })
        )}
      </svg>
    ),
  },
  {
    num: '03',
    slug: 'lithium',
    project: 'Lithium Finance',
    descriptor: 'DeFi Pricing Oracle',
    category: 'Whitepaper · Protocol Narrative',
    teaser: 'Co-authoring the v1 whitepaper and translating mathematically dense DeFi pricing mechanics into a community-legible narrative — closing the gap between technical depth and delegator comprehension.',
    metrics: ['v1 whitepaper', 'Protocol simplified', 'DeFi education'],
    tags: ['Whitepaper', 'DeFi', 'Education'],
    accent: '#F97316',
    Watermark: () => (
      <svg
        className="absolute bottom-0 right-0 pointer-events-none select-none"
        width="200" height="200" viewBox="0 0 200 200"
        fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.045 }}
      >
        {[40, 70, 100, 130, 160].map((r, i) => (
          <circle key={i} cx="200" cy="200" r={r} stroke="#F97316" strokeWidth="1" fill="none" />
        ))}
        <line x1="200" y1="40" x2="200" y2="200" stroke="#F97316" strokeWidth="1" />
        <line x1="40" y1="200" x2="200" y2="200" stroke="#F97316" strokeWidth="1" />
        <line x1="75" y1="75" x2="200" y2="200" stroke="#F97316" strokeWidth="1" />
      </svg>
    ),
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(156,163,175,0.38) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 60% at 50% 100%, hsl(var(--background)) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="h-px w-6 bg-primary flex-shrink-0" />
          <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">
            Case Studies
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="font-display font-black text-foreground leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
          >
            Work that moved the needle.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="text-[14px] text-muted-foreground max-w-xs md:text-right leading-relaxed"
          >
            Three projects. Three distinct problems. Measured outcomes.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {CASES.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="h-full"
            >
              <Link href={`/case-studies/${c.slug}`} className="h-full block">
                <div
                  className="group relative rounded-2xl overflow-hidden flex flex-col cursor-pointer h-full"
                  style={{
                    background: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
                    transition: 'all 0.32s cubic-bezier(0.22,1,0.36,1)',
                    minHeight: 380,
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = 'translateY(-5px)';
                    el.style.boxShadow = '0 28px 80px rgba(249,115,22,0.07), 0 8px 28px rgba(0,0,0,0.07)';
                    el.style.borderColor = 'rgba(249,115,22,0.25)';
                    el.style.background = '#fff';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = '0 2px 10px rgba(0,0,0,0.04)';
                    el.style.borderColor = 'hsl(var(--border))';
                    el.style.background = 'hsl(var(--card))';
                  }}
                >
                  {/* Watermark */}
                  <c.Watermark />

                  {/* Orange top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{
                      background: 'linear-gradient(90deg, #F97316 0%, rgba(249,115,22,0.1) 100%)',
                    }}
                  />

                  <div className="relative z-10 flex flex-col flex-1 p-7">
                    {/* Number + Category */}
                    <div className="flex items-start justify-between mb-6">
                      <span
                        className="font-mono font-black"
                        style={{ fontSize: '2.2rem', color: 'rgba(249,115,22,0.12)', letterSpacing: '-0.04em', lineHeight: 1 }}
                      >
                        {c.num}
                      </span>
                      <span
                        className="text-[9px] font-bold tracking-[0.18em] uppercase font-mono px-2.5 py-1 rounded-full"
                        style={{
                          color: 'rgba(249,115,22,0.6)',
                          background: 'rgba(249,115,22,0.07)',
                          border: '1px solid rgba(249,115,22,0.15)',
                        }}
                      >
                        {c.num} / 03
                      </span>
                    </div>

                    {/* Project name + descriptor */}
                    <div className="mb-4">
                      <h3
                        className="font-display font-black text-foreground leading-none"
                        style={{ fontSize: 'clamp(1.3rem, 2vw, 1.6rem)', letterSpacing: '-0.025em' }}
                      >
                        {c.project}
                      </h3>
                      <p
                        className="font-mono font-bold uppercase tracking-[0.14em] mt-1.5"
                        style={{ fontSize: '0.62rem', color: 'rgba(249,115,22,0.5)' }}
                      >
                        {c.descriptor}
                      </p>
                    </div>

                    {/* Category */}
                    <p
                      className="text-[10px] font-bold tracking-[0.15em] uppercase font-mono mb-4"
                      style={{ color: 'rgba(0,0,0,0.3)' }}
                    >
                      {c.category}
                    </p>

                    {/* Teaser */}
                    <p className="text-[13px] text-muted-foreground leading-[1.7] flex-1 mb-6">
                      {c.teaser}
                    </p>

                    {/* Metrics pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {c.metrics.map(m => (
                        <span
                          key={m}
                          className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded font-mono"
                          style={{
                            color: '#F97316',
                            background: 'rgba(249,115,22,0.07)',
                            border: '1px solid rgba(249,115,22,0.18)',
                          }}
                        >
                          {m}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div
                      className="flex items-center justify-between pt-5"
                      style={{ borderTop: '1px solid hsl(var(--border))' }}
                    >
                      <span className="text-[12px] font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        Read case study
                      </span>
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white"
                        style={{
                          background: 'rgba(249,115,22,0.08)',
                          color: '#F97316',
                        }}
                      >
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
