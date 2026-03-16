import { useState } from 'react';
import { motion } from 'framer-motion';

const FEATURED = [
  {
    project: 'Encapsulate.xyz',
    descriptor: 'Cosmos Validator',
    metric: '10K',
    stats: [
      { value: '+26%', label: 'AUM growth' },
      { value: '15', label: 'chains onboarded' },
      { value: '6 mo', label: 'timeline' },
    ],
    body: 'Led content and social for a Cosmos validator with a trust-first growth strategy — driving staker growth from 6,700 to ~10,000, a 26% increase in assets under management, and onboarding across 15 new chains in six months.',
    tags: ['Validator', 'Cosmos', 'Community Growth', 'Content'],
  },
  {
    project: 'Reneverse',
    descriptor: 'Web3 Gaming Protocol',
    metric: 'Genesis',
    stats: [
      { value: '6+', label: 'channels owned' },
      { value: 'Full', label: 'lore & factions' },
      { value: 'End-to-end', label: 'content system' },
    ],
    body: 'Built the genesis-drop content strategy across teasers, X threads, influencer outreach, newsletter partnerships, PR, FAQs, and SEO — while shaping lore, faction identities, and the entire Reneverse narrative universe.',
    tags: ['Launch Narrative', 'NFT', 'World-Building', 'Distribution'],
  },
  {
    project: 'Lithium Finance',
    descriptor: 'DeFi Pricing Oracle',
    metric: 'WP v1',
    stats: [
      { value: 'v1', label: 'whitepaper authored' },
      { value: 'DeFi', label: 'protocol simplified' },
      { value: 'Clear', label: 'community narrative' },
    ],
    body: 'Co-wrote the v1 whitepaper and translated mathematically dense protocol mechanics into clear narrative and educational content — closing the gap between technical depth and community comprehension.',
    tags: ['Whitepaper', 'DeFi', 'Protocol Narrative', 'Education'],
  },
];

const SUPPORTING = [
  {
    project: 'Blockwiz',
    descriptor: 'Web3 Growth Agency',
    metric: '300%',
    metricSub: 'engagement lift',
    body: 'Reworked blog and newsletter strategy into sharper narrative arcs, search-led content clusters, and cleaner project messaging — lifting engagement by nearly 300% in 3 months.',
    tags: ['Content Strategy', 'SEO', 'Newsletter'],
  },
  {
    project: 'Gamestar Exchange',
    descriptor: 'P2P Crypto Exchange',
    metric: '6 hrs',
    metricSub: '$GMS IDO sellout',
    body: 'Engineered the content spine around the $GMS IDO — from hype-building social cadence to sharper sell-through messaging — contributing to a full sellout in under 6 hours.',
    tags: ['IDO', 'Launch Narrative', 'Social'],
  },
  {
    project: 'KuCoin',
    descriptor: 'Global Crypto Exchange',
    metric: '22%',
    metricSub: 'newsletter open rate',
    body: 'Owned weekly newsletter and editorial planning with exchange-native timing, stronger content packaging, and better click intent — delivering a 22% open rate and 12+ trending articles in-app.',
    tags: ['Newsletter', 'Editorial', 'Exchange Content'],
  },
];

function FeaturedCard({ item, index }: { item: (typeof FEATURED)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: hovered ? '#fff' : 'hsl(var(--background))',
        border: `1px solid ${hovered ? 'rgba(249,115,22,0.22)' : 'hsl(var(--border))'}`,
        boxShadow: hovered
          ? '0 28px 80px rgba(249,115,22,0.06), 0 8px 28px rgba(0,0,0,0.07)'
          : '0 2px 10px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.32s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {/* Orange left rail */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{
          background: hovered
            ? 'linear-gradient(180deg, #F97316 0%, rgba(249,115,22,0.2) 100%)'
            : 'linear-gradient(180deg, rgba(249,115,22,0.5) 0%, rgba(249,115,22,0.08) 100%)',
          boxShadow: hovered ? '2px 0 20px rgba(249,115,22,0.28)' : 'none',
          transition: 'all 0.32s',
          borderRadius: '2px 0 0 2px',
        }}
      />

      {/* Featured pill — absolutely top-right, never interferes with name */}
      <span
        className="absolute top-5 right-5 text-[9px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full font-mono"
        style={{
          color: '#F97316',
          background: 'rgba(249,115,22,0.08)',
          border: '1px solid rgba(249,115,22,0.18)',
          whiteSpace: 'nowrap',
        }}
      >
        Featured
      </span>

      {/* Card body */}
      <div className="flex flex-col flex-1 pl-8 pr-7 pt-7 pb-7">

        {/* ── Header block — fixed height so all names align ── */}
        <div className="mb-6" style={{ minHeight: 64 }}>
          <h3
            className="font-display font-black text-foreground leading-none"
            style={{ fontSize: 'clamp(1.25rem, 2vw, 1.55rem)', letterSpacing: '-0.028em' }}
          >
            {item.project}
          </h3>
          <p
            className="mt-1.5 font-mono font-bold uppercase tracking-[0.14em]"
            style={{ fontSize: '0.68rem', color: 'rgba(249,115,22,0.5)' }}
          >
            {item.descriptor}
          </p>
        </div>

        {/* ── Stats strip ── */}
        <div
          className="flex items-stretch rounded-xl overflow-hidden mb-6"
          style={{ border: '1px solid hsl(var(--border))' }}
        >
          {item.stats.map((s, i) => (
            <div
              key={i}
              className="flex-1 flex flex-col items-center justify-center py-3 px-2 text-center"
              style={{
                background: hovered ? 'rgba(249,115,22,0.03)' : 'hsl(var(--card))',
                borderRight: i < item.stats.length - 1 ? '1px solid hsl(var(--border))' : 'none',
                transition: 'background 0.32s',
              }}
            >
              <span
                className="font-display font-black text-foreground leading-none"
                style={{ fontSize: '1.1rem', letterSpacing: '-0.02em' }}
              >
                {s.value}
              </span>
              <span
                className="text-[9.5px] text-muted-foreground font-medium mt-1 leading-tight"
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Body copy ── */}
        <p className="text-[13px] text-muted-foreground leading-[1.7] flex-1">
          {item.body}
        </p>

        {/* ── Tags ── */}
        <div
          className="flex flex-wrap gap-1.5 mt-6 pt-5"
          style={{ borderTop: '1px solid hsl(var(--border))' }}
        >
          {item.tags.map(tag => (
            <span
              key={tag}
              className="text-[9.5px] font-bold tracking-widest uppercase px-2.5 py-1 rounded font-mono"
              style={{
                color: 'rgba(249,115,22,0.55)',
                background: 'rgba(249,115,22,0.05)',
                border: '1px solid rgba(249,115,22,0.12)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SupportingCard({ item, index }: { item: (typeof SUPPORTING)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.48, delay: index * 0.09 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: hovered ? '#fff' : 'hsl(var(--card))',
        border: `1px solid ${hovered ? 'rgba(249,115,22,0.18)' : 'hsl(var(--border))'}`,
        boxShadow: hovered
          ? '0 18px 55px rgba(249,115,22,0.05), 0 6px 20px rgba(0,0,0,0.06)'
          : '0 1px 4px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.32s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {/* Faint ghost metric — decorative background */}
      <span
        className="absolute bottom-0 right-3 font-black select-none pointer-events-none font-mono leading-none"
        style={{
          fontSize: '4.5rem',
          color: hovered ? 'rgba(249,115,22,0.07)' : 'rgba(0,0,0,0.035)',
          letterSpacing: '-0.05em',
          transition: 'color 0.32s',
          lineHeight: 1,
        }}
      >
        {item.metric.replace('%', '').replace(' ', '')}
      </span>

      <div className="flex flex-col flex-1 p-6">
        {/* Metric */}
        <div className="mb-5">
          <span
            className="font-display font-black leading-none block"
            style={{
              fontSize: '2.1rem',
              color: '#F97316',
              letterSpacing: '-0.035em',
            }}
          >
            {item.metric}
          </span>
          <span
            className="text-[10px] font-bold tracking-[0.16em] uppercase font-mono mt-1 block"
            style={{ color: 'rgba(249,115,22,0.4)' }}
          >
            {item.metricSub}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px w-full mb-5" style={{ background: 'hsl(var(--border))' }} />

        {/* Project name + descriptor */}
        <div className="mb-3">
          <h4
            className="font-display font-bold text-foreground leading-none"
            style={{ fontSize: '0.92rem', letterSpacing: '-0.015em' }}
          >
            {item.project}
          </h4>
          <p
            className="font-mono font-bold uppercase tracking-[0.13em] mt-1"
            style={{ fontSize: '0.62rem', color: 'rgba(0,0,0,0.3)' }}
          >
            {item.descriptor}
          </p>
        </div>

        {/* Body */}
        <p className="text-[12.5px] text-muted-foreground leading-[1.7] flex-1">
          {item.body}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-5 pt-4" style={{ borderTop: '1px solid hsl(var(--border))' }}>
          {item.tags.map(tag => (
            <span
              key={tag}
              className="text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded font-mono"
              style={{
                color: 'rgba(0,0,0,0.28)',
                background: 'rgba(0,0,0,0.04)',
                border: '1px solid rgba(0,0,0,0.07)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function SelectedImpact() {
  return (
    <section
      id="selected-impact"
      className="relative py-24 md:py-32 bg-card overflow-hidden"
    >
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(156,163,175,0.38) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      {/* Fade vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 60% at 50% 0%, hsl(var(--card)) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="h-px w-6 bg-primary flex-shrink-0" />
          <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">
            Selected Impact
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="font-display font-black text-foreground leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
          >
            Operator-led outcomes.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="text-[13.5px] text-muted-foreground max-w-xs md:text-right leading-relaxed"
          >
            Across validator trust-building, launch narratives, ecosystem content,
            editorial systems, and community growth.
          </motion.p>
        </div>

        {/* Featured tier label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-6"
        >
          <span
            className="text-[9px] font-bold tracking-[0.26em] uppercase font-mono"
            style={{ color: 'rgba(249,115,22,0.55)' }}
          >
            Featured Impact
          </span>
          <span className="h-px flex-1" style={{ background: 'rgba(249,115,22,0.15)' }} />
          <span
            className="text-[9px] font-bold tracking-[0.2em] uppercase font-mono"
            style={{ color: 'rgba(249,115,22,0.35)' }}
          >
            03 projects
          </span>
        </motion.div>

        {/* Featured grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {FEATURED.map((item, i) => (
            <FeaturedCard key={item.project} item={item} index={i} />
          ))}
        </div>

        {/* Supporting tier label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-6"
        >
          <span
            className="text-[9px] font-bold tracking-[0.26em] uppercase font-mono text-muted-foreground/50"
          >
            Supporting Impact
          </span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase font-mono text-muted-foreground/35">
            03 projects
          </span>
        </motion.div>

        {/* Supporting grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SUPPORTING.map((item, i) => (
            <SupportingCard key={item.project} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
