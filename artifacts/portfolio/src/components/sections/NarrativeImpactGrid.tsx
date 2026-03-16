import { useState } from 'react';
import { motion } from 'framer-motion';

const ITEMS = [
  {
    num: '01',
    title: 'Launch Narratives',
    body: 'Shape pre-TGE, IDO, listing, and milestone narratives that give projects a cleaner story for the community to latch onto.',
  },
  {
    num: '02',
    title: 'From Hype to Hold',
    body: 'Build messaging that carries projects past announcement spikes and into stronger community belief, recurrence, and stickier participation loops.',
  },
  {
    num: '03',
    title: 'X-First Distribution',
    body: "Develop thread-led, event-led, and meme-aware social cadence that fits crypto attention spans without flattening the project's core narrative.",
  },
  {
    num: '04',
    title: 'Community-Led Growth',
    body: 'Support quests, activations, and campaign rituals that give the community reasons to show up, engage, and keep showing up.',
  },
  {
    num: '05',
    title: 'Content Systems',
    body: 'Create repeatable editorial and social systems across X, blogs, newsletters, and community touchpoints so the narrative stays coherent across the lifecycle.',
  },
];

function ImpactCard({
  item,
  delay,
}: {
  item: (typeof ITEMS)[0];
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.52, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-7 flex flex-col gap-4 cursor-default overflow-hidden transition-all duration-300"
      style={{
        background: hovered ? '#ffffff' : 'hsl(var(--background))',
        border: `1px solid ${hovered ? 'rgba(249,115,22,0.3)' : 'hsl(var(--border))'}`,
        boxShadow: hovered
          ? '0 20px 60px rgba(249,115,22,0.08), 0 8px 24px rgba(0,0,0,0.06)'
          : '0 2px 8px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
    >
      <span
        className="absolute -top-3 right-4 font-black select-none pointer-events-none font-mono leading-none"
        style={{
          fontSize: '5.5rem',
          color: hovered ? 'rgba(249,115,22,0.09)' : 'rgba(0,0,0,0.04)',
          transition: 'color 0.35s',
        }}
      >
        {item.num}
      </span>

      <div
        className="w-9 h-[3px] rounded-full"
        style={{
          background: hovered ? '#F97316' : 'rgba(249,115,22,0.28)',
          boxShadow: hovered ? '0 0 10px rgba(249,115,22,0.45)' : 'none',
          transition: 'all 0.3s',
        }}
      />

      <h3
        className="font-display font-bold text-foreground leading-snug pr-14"
        style={{ fontSize: '1.12rem', letterSpacing: '-0.01em' }}
      >
        {item.title}
      </h3>

      <p className="text-[13.5px] text-muted-foreground leading-relaxed">
        {item.body}
      </p>

      <div
        className="mt-auto pt-4 flex items-center gap-2 opacity-0 transition-opacity duration-300"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        <span className="h-px flex-1 bg-primary/20" />
        <span className="text-[10px] font-bold tracking-widest text-primary/40 uppercase font-mono">
          {item.num} / 05
        </span>
      </div>
    </motion.div>
  );
}

export function NarrativeImpactGrid() {
  return (
    <section
      id="narrative-grid"
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(156,163,175,0.45) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 30%, transparent 40%, hsl(var(--background)) 100%)',
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
            What I deliver
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
            Narrative Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="text-[14px] text-muted-foreground max-w-xs md:text-right leading-relaxed"
          >
            Five areas where strategic storytelling moves the needle for Web3 projects.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {ITEMS.slice(0, 3).map((item, i) => (
            <ImpactCard key={item.num} item={item} delay={i * 0.08} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-[calc(66.66%+8px)]">
          {ITEMS.slice(3).map((item, i) => (
            <ImpactCard key={item.num} item={item} delay={(i + 3) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
