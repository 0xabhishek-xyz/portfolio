import { useState } from 'react';
import { motion } from 'framer-motion';

const FEATURED = [
  {
    project: 'Encapsulate.xyz',
    type: 'Validator Growth · Ecosystem Content',
    metric: '10K',
    metricLabel: 'stakers reached',
    stats: [
      { value: '+26%', label: 'AUM growth' },
      { value: '15', label: 'chains onboarded' },
      { value: '6mo', label: 'timeline' },
    ],
    body: 'Led content and social for a Cosmos validator with a trust-first growth strategy — helping drive staker growth from 6,700 to ~10,000, a 26% increase in staked assets under management, and onboarding across 15 new chains in six months.',
    tags: ['Validator', 'Cosmos', 'Community', 'Growth'],
  },
  {
    project: 'Reneverse',
    type: 'Launch Narrative · World-Building · Distribution',
    metric: 'G-1',
    metricLabel: 'genesis drop',
    stats: [
      { value: 'Full', label: 'content system' },
      { value: '6+', label: 'channels owned' },
      { value: 'Lore', label: 'world-built' },
    ],
    body: 'Built the genesis-drop content strategy across teasers, X threads, influencer outreach, newsletter partnerships, PR, FAQs, and SEO while also shaping the lore, faction identities, and narrative world-building behind the Reneverse universe.',
    tags: ['Launch', 'World-Building', 'NFT', 'Content Systems'],
  },
  {
    project: 'Lithium Finance',
    type: 'Whitepaper · Protocol Narrative · Education',
    metric: 'WP',
    metricLabel: 'v1 whitepaper',
    stats: [
      { value: 'v1', label: 'whitepaper authored' },
      { value: 'DeFi', label: 'protocol translated' },
      { value: 'Clear', label: 'community narrative' },
    ],
    body: 'Co-wrote the first iteration of the project whitepaper and translated mathematically dense protocol concepts into clearer narrative and educational content, reducing the gap between technical depth and community comprehension.',
    tags: ['Whitepaper', 'DeFi', 'Education', 'Narrative'],
  },
];

const SUPPORTING = [
  {
    project: 'Blockwiz',
    metric: '300%',
    metricSub: 'engagement lift',
    body: 'Reworked blog and newsletter strategy into sharper narrative arcs, search-led content clusters, and cleaner project messaging — lifting engagement by nearly 300% in 3 months.',
    tags: ['Content', 'SEO', 'Newsletter'],
  },
  {
    project: 'Gamestar Exchange',
    metric: '6 hrs',
    metricSub: '$GMS IDO sellout',
    body: 'Helped engineer the content spine around the $GMS IDO — from hype-building social cadence to sharper sell-through messaging — contributing to a full sellout in under 6 hours.',
    tags: ['IDO', 'Social', 'Launch'],
  },
  {
    project: 'KuCoin',
    metric: '22%',
    metricSub: 'newsletter open rate',
    body: 'Owned weekly newsletter and editorial planning with exchange-native timing, stronger content packaging, and better click intent — delivering a 22% open rate and 12+ trending articles inside the KuCoin app.',
    tags: ['Newsletter', 'Editorial', 'Exchange'],
  },
];

function FeaturedCard({
  item,
  index,
}: {
  item: (typeof FEATURED)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden transition-all duration-350"
      style={{
        background: hovered ? '#ffffff' : 'hsl(var(--background))',
        border: `1px solid ${hovered ? 'rgba(249,115,22,0.25)' : 'hsl(var(--border))'}`,
        boxShadow: hovered
          ? '0 24px 70px rgba(249,115,22,0.07), 0 8px 24px rgba(0,0,0,0.06)'
          : '0 2px 8px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl transition-all duration-350"
        style={{
          background: hovered
            ? 'linear-gradient(180deg, #F97316 0%, rgba(249,115,22,0.3) 100%)'
            : 'linear-gradient(180deg, rgba(249,115,22,0.55) 0%, rgba(249,115,22,0.1) 100%)',
          boxShadow: hovered ? '2px 0 18px rgba(249,115,22,0.3)' : 'none',
        }}
      />

      <span
        className="absolute top-6 right-7 font-black select-none pointer-events-none font-mono leading-none"
        style={{
          fontSize: '6.5rem',
          color: hovered ? 'rgba(249,115,22,0.07)' : 'rgba(0,0,0,0.04)',
          letterSpacing: '-0.04em',
          transition: 'color 0.35s',
          lineHeight: 1,
        }}
      >
        {item.metric}
      </span>

      <div className="pl-8 pr-8 pt-8 pb-0">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span
              className="text-[10px] font-bold tracking-[0.2em] uppercase font-mono mb-3 block"
              style={{ color: 'rgba(249,115,22,0.55)' }}
            >
              {item.type}
            </span>
            <h3
              className="font-display font-black text-foreground leading-tight"
              style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.65rem)', letterSpacing: '-0.025em' }}
            >
              {item.project}
            </h3>
          </div>
          <span
            className="flex-none text-[9px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full font-mono mt-1"
            style={{
              color: '#F97316',
              background: 'rgba(249,115,22,0.08)',
              border: '1px solid rgba(249,115,22,0.2)',
              whiteSpace: 'nowrap',
            }}
          >
            Featured Impact
          </span>
        </div>

        <div className="grid grid-cols-3 gap-px mt-7 rounded-xl overflow-hidden"
          style={{ border: '1px solid hsl(var(--border))' }}
        >
          {item.stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center py-3 px-2 text-center"
              style={{ background: 'hsl(var(--card))' }}
            >
              <span
                className="font-display font-black text-foreground"
                style={{ fontSize: '1.2rem', letterSpacing: '-0.02em' }}
              >
                {s.value}
              </span>
              <span className="text-[10px] text-muted-foreground font-medium mt-0.5 leading-tight">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-[13.5px] text-muted-foreground leading-relaxed mt-6">
          {item.body}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-5 pb-7">
          {item.tags.map(tag => (
            <span
              key={tag}
              className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded font-mono"
              style={{
                color: 'rgba(249,115,22,0.6)',
                background: 'rgba(249,115,22,0.06)',
                border: '1px solid rgba(249,115,22,0.14)',
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

function SupportingCard({
  item,
  index,
}: {
  item: (typeof SUPPORTING)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.48, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 overflow-hidden"
      style={{
        background: hovered ? '#ffffff' : 'hsl(var(--card))',
        border: `1px solid ${hovered ? 'rgba(249,115,22,0.2)' : 'hsl(var(--border))'}`,
        boxShadow: hovered
          ? '0 16px 50px rgba(249,115,22,0.06), 0 6px 18px rgba(0,0,0,0.05)'
          : '0 1px 4px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      }}
    >
      <span
        className="absolute -bottom-2 -right-1 font-black select-none pointer-events-none font-mono leading-none"
        style={{
          fontSize: '5rem',
          color: hovered ? 'rgba(249,115,22,0.07)' : 'rgba(0,0,0,0.04)',
          letterSpacing: '-0.04em',
          transition: 'color 0.35s',
        }}
      >
        {item.metric.replace('%', '').replace(' ', '')}
      </span>

      <div>
        <span
          className="font-display font-black block"
          style={{
            fontSize: '2rem',
            color: '#F97316',
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          {item.metric}
        </span>
        <span
          className="text-[11px] font-bold tracking-[0.15em] uppercase font-mono mt-1 block"
          style={{ color: 'rgba(249,115,22,0.45)' }}
        >
          {item.metricSub}
        </span>
      </div>

      <div
        className="h-px w-full"
        style={{ background: 'hsl(var(--border))' }}
      />

      <div>
        <h4
          className="font-display font-bold text-foreground mb-2"
          style={{ fontSize: '0.95rem', letterSpacing: '-0.01em' }}
        >
          {item.project}
        </h4>
        <p className="text-[12.5px] text-muted-foreground leading-relaxed">
          {item.body}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
        {item.tags.map(tag => (
          <span
            key={tag}
            className="text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded font-mono"
            style={{
              color: 'rgba(0,0,0,0.3)',
              background: 'rgba(0,0,0,0.04)',
              border: '1px solid rgba(0,0,0,0.07)',
            }}
          >
            {tag}
          </span>
        ))}
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
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(156,163,175,0.4) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 70% at 50% 0%, hsl(var(--card)) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
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

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14">
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
            className="text-[14px] text-muted-foreground max-w-sm md:text-right leading-relaxed"
          >
            Across validator trust-building, launch narratives, ecosystem content,
            editorial systems, and community growth.
          </motion.p>
        </div>

        <div className="flex items-center gap-2 mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-primary/50 uppercase font-mono">
            Featured
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {FEATURED.map((item, i) => (
            <FeaturedCard key={item.project} item={item} index={i} />
          ))}
        </div>

        <div className="flex items-center gap-2 mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground/50 uppercase font-mono">
            Supporting
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SUPPORTING.map((item, i) => (
            <SupportingCard key={item.project} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
