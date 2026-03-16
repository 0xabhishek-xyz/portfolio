import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ITEMS = [
  {
    num: '01',
    title: 'Launch Narratives',
    body: 'Shape pre-TGE, IDO, listing, and milestone narratives that give projects a cleaner story for the community to latch onto.',
    tags: ['TGE', 'IDO', 'Listing'],
  },
  {
    num: '02',
    title: 'From Hype to Hold',
    body: 'Build messaging that carries projects past announcement spikes and into stronger community belief, recurrence, and stickier participation loops.',
    tags: ['Retention', 'Belief Loops'],
  },
  {
    num: '03',
    title: 'X-First Distribution',
    body: "Develop thread-led, event-led, and meme-aware social cadence that fits crypto attention spans without flattening the project's core narrative.",
    tags: ['Threads', 'Social Cadence'],
  },
  {
    num: '04',
    title: 'Community-Led Growth',
    body: 'Support quests, activations, and campaign rituals that give the community reasons to show up, engage, and keep showing up.',
    tags: ['Quests', 'Campaigns'],
  },
  {
    num: '05',
    title: 'Content Systems',
    body: 'Create repeatable editorial and social systems across X, blogs, newsletters, and community touchpoints so the narrative stays coherent across the lifecycle.',
    tags: ['Editorial', 'Newsletter'],
  },
];

export function NarrativeImpactCards() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragScrollStart = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragScrollStart.current = trackRef.current?.scrollLeft ?? 0;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    trackRef.current.scrollLeft = dragScrollStart.current - (e.clientX - dragStartX.current);
  };
  const onMouseUp = () => setIsDragging(false);

  return (
    <section
      id="narrative-cards"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: '#0A0A14' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.035) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #0A0A14 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-14">
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

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="font-display font-black leading-tight text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
          >
            Narrative Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="text-[14px] text-white/35 max-w-xs text-right leading-relaxed"
          >
            Five areas where strategic storytelling moves the needle for Web3 projects.
          </motion.p>
        </div>
      </div>

      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        className="relative z-10 flex gap-5 overflow-x-auto"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingLeft: '6rem',
          paddingRight: '6rem',
          paddingBottom: '4px',
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
        }}
      >
        {ITEMS.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="flex-none flex flex-col rounded-2xl transition-all duration-300"
            style={{
              width: 270,
              padding: '30px 26px 26px',
              background: active === i ? '#111125' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${active === i ? 'rgba(249,115,22,0.4)' : 'rgba(255,255,255,0.07)'}`,
              boxShadow: active === i
                ? '0 0 50px rgba(249,115,22,0.1), 0 20px 60px rgba(0,0,0,0.5)'
                : '0 8px 32px rgba(0,0,0,0.3)',
              transform: active === i ? 'translateY(-5px)' : 'translateY(0)',
            }}
          >
            <div
              className="w-full h-[2px] rounded-full mb-8"
              style={{
                background: active === i
                  ? 'linear-gradient(90deg, #F97316 0%, rgba(249,115,22,0.15) 100%)'
                  : 'rgba(249,115,22,0.22)',
                boxShadow: active === i ? '0 0 14px rgba(249,115,22,0.5)' : 'none',
                transition: 'all 0.3s',
              }}
            />

            <span
              className="text-[11px] font-bold tracking-[0.2em] uppercase mb-5 block font-mono"
              style={{ color: 'rgba(249,115,22,0.55)' }}
            >
              {item.num}
            </span>

            <h3
              className="font-display font-bold text-white leading-snug mb-4"
              style={{ fontSize: '1.15rem', letterSpacing: '-0.01em' }}
            >
              {item.title}
            </h3>

            <p
              className="text-[13px] leading-relaxed flex-1"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              {item.body}
            </p>

            <div
              className="flex flex-wrap gap-1.5 mt-7 pt-5"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              {item.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded font-mono"
                  style={{
                    color: 'rgba(249,115,22,0.55)',
                    background: 'rgba(249,115,22,0.06)',
                    border: '1px solid rgba(249,115,22,0.15)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mt-8 flex items-center gap-2">
        {ITEMS.map((_, i) => (
          <div
            key={i}
            className="h-[2px] rounded-full transition-all duration-300"
            style={{
              width: active === i ? 28 : 10,
              background: active === i ? '#F97316' : 'rgba(249,115,22,0.18)',
            }}
          />
        ))}
        <span className="text-[10px] text-white/25 font-mono ml-3 tracking-widest uppercase">
          drag to explore
        </span>
      </div>
    </section>
  );
}
