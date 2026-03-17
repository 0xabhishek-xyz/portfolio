import { useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Layers, Map, Crosshair,
  Gamepad2, Code2, Zap, TrendingUp, Award, Users,
} from 'lucide-react';

function scrollFade(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.55, delay },
  };
}

const FACTIONS = [
  {
    name: 'Darkrage',
    archetype: 'Aggression · Resistance · War',
    description: 'The combative faction — those who choose to fight the incursion with force. Darkrage holders occupy the most battle-hardened, high-stakes position in the Reneverse universe.',
    traits: ['Aggression', 'Resistance', 'Combat'],
    color: '#EF4444',
    glow: 'rgba(239,68,68,0.15)',
    border: 'rgba(239,68,68,0.35)',
  },
  {
    name: 'Frostshield',
    archetype: 'Diplomacy · Peace · Balance',
    description: 'The peacekeeper faction — those who seek negotiated coexistence over conflict. Frostshield holders represent the bridge between factions and ecosystems.',
    traits: ['Diplomacy', 'Balance', 'Alliance'],
    color: '#06B6D4',
    glow: 'rgba(6,182,212,0.15)',
    border: 'rgba(6,182,212,0.35)',
  },
  {
    name: 'The Noble',
    archetype: 'Magic · Hope · Majority path',
    description: 'The largest and most aspirational faction — those who carry the mythological and spiritual weight of the Reneverse world. The Noble represents possibility.',
    traits: ['Magic', 'Hope', 'Legacy'],
    color: '#A855F7',
    glow: 'rgba(168,85,247,0.15)',
    border: 'rgba(168,85,247,0.35)',
  },
];

const MANDATE_LAYERS = [
  { icon: Map, num: '01', label: 'Genesis-Drop Strategy', sub: 'End-to-end launch architecture' },
  { icon: Layers, num: '02', label: 'World-Building & Factions', sub: 'Lore, universe, faction design' },
  { icon: Zap, num: '03', label: 'Utility & Positioning', sub: 'Value communication for holders' },
  { icon: Crosshair, num: '04', label: 'Launch Copy & Distribution', sub: 'Social, editorial, minting experience' },
];

const ATTRACT_TACTICS = ['Teaser videos', 'Twitter threads', 'Giveaways', 'Intent ads', 'AMAs'];
const NURTURE_TACTICS = ['NFT newsletters', 'PR placements', 'Studio outreach', 'Influencer collab', 'FAQ knowledge base'];
const RETAIN_TACTICS = ['Community rituals', 'Utility content', 'Long-tail SEO', 'Faction engagement', 'Ecosystem updates'];

const WHY_WORKED = [
  { word: 'Meaning', line: 'Through lore — the drop existed inside a living universe, not in a vacuum.' },
  { word: 'Identity', line: 'Through factions — holders had an archetype, not just an asset.' },
  { word: 'Conversion', line: 'Through segmented content — gamers and developers got different reasons to care.' },
  { word: 'Clarity', line: 'Through FAQs, utility framing, and educational content — the drop was easy to understand.' },
  { word: 'Momentum', line: 'Through social, influencer, PR, and newsletter distribution — attention compounded.' },
];

export default function CaseStudyReneverse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#0A0A14' }}>

      {/* ── Sticky nav ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ height: 56, background: 'rgba(10,10,20,0.85)', backdropFilter: 'blur(16px)', borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium transition-colors group"
            style={{ color: 'rgba(255,255,255,0.45)' }}
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to work
          </Link>
          <Link
            href="/"
            className="font-display font-bold text-base tracking-tight text-white flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Abhishek.
          </Link>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-mono hidden md:block" style={{ color: 'rgba(249,115,22,0.55)' }}>
            Case Study · 02 / 03
          </span>
        </div>
      </header>

      <main style={{ paddingTop: 56 }}>

        {/* ══════════════════════════════════
             HERO — dark, gaming-native
        ══════════════════════════════════ */}
        <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
          {/* Hex mesh background */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }} />
          {/* Ghost "2150" behind hero */}
          <span className="absolute -right-8 top-4 font-black select-none pointer-events-none font-mono text-white/[0.025] leading-none" style={{ fontSize: 'clamp(8rem, 20vw, 18rem)', letterSpacing: '-0.05em' }}>
            2150
          </span>
          {/* Bottom vignette */}
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #0A0A14)' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade(0)} className="flex items-center gap-3 mb-8">
              <span className="h-px w-6 bg-primary flex-shrink-0" />
              <span className="text-[11px] font-bold tracking-[0.22em] font-mono uppercase" style={{ color: 'rgba(249,115,22,0.6)' }}>
                Case Study · Web3 Gaming Protocol
              </span>
            </motion.div>

            <motion.h1
              {...scrollFade(0.06)}
              className="font-display font-black text-white leading-[1.02]"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)', letterSpacing: '-0.032em', maxWidth: 820 }}
            >
              Turning a Genesis NFT Drop into a{' '}
              <span className="text-primary">narrative world</span>{' '}
              the community could actually enter.
            </motion.h1>

            <motion.p
              {...scrollFade(0.12)}
              className="mt-6 text-[1.05rem] leading-relaxed max-w-2xl"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              Rarity mechanics and surface hype weren't enough. The drop needed a world, factions with emotional identity, and a launch system that could speak to two completely different communities — gamers and developers — at the same time.
            </motion.p>

            {/* Stat cards */}
            <motion.div {...scrollFade(0.18)} className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
              {[
                { value: '3', label: 'Factions designed', sub: 'Darkrage · Frostshield · Noble' },
                { value: '3.5K+', label: 'Developers onboarded', sub: 'Into the ecosystem' },
                { value: '6+', label: 'Channels owned', sub: 'Social, PR, newsletter, SEO' },
                { value: 'Genesis', label: 'Drop executed', sub: 'End-to-end strategy' },
              ].map((o, i) => (
                <div key={i} className="rounded-xl px-5 py-4 flex flex-col gap-1" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <span className="font-display font-black leading-none" style={{ fontSize: '1.9rem', color: '#F97316', letterSpacing: '-0.03em' }}>{o.value}</span>
                  <span className="text-[12px] font-bold text-white/60">{o.label}</span>
                  <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.28)' }}>{o.sub}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════
             PROJECT SNAPSHOT
        ══════════════════════════════════ */}
        <section className="py-16 md:py-20 border-y" style={{ background: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Metadata strip */}
            <motion.div
              {...scrollFade()}
              className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-10 pb-10"
              style={{ borderBottom: '1px solid hsl(var(--border))' }}
            >
              {[
                { label: 'Role', value: 'Content & Strategy Lead' },
                { label: 'Focus', value: 'Genesis NFT Drop' },
                { label: 'Category', value: 'Web3 Gaming · NFT' },
                { label: 'Scope', value: 'Strategy · Lore · Launch' },
              ].map(m => (
                <div key={m.label} className="flex flex-col gap-0.5">
                  <span className="text-[9.5px] font-bold tracking-[0.2em] uppercase font-mono text-muted-foreground/50">{m.label}</span>
                  <span className="text-[13.5px] font-semibold text-foreground">{m.value}</span>
                </div>
              ))}
              <div className="ml-auto text-[10px] font-bold tracking-widest uppercase font-mono px-3 py-1.5 rounded-full" style={{ color: '#F97316', background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.18)' }}>
                Featured Impact
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <motion.div {...scrollFade()}>
                <h2 className="font-display font-black text-foreground mb-4 leading-tight" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', letterSpacing: '-0.02em' }}>
                  Project Snapshot
                </h2>
                <p className="text-[15px] text-muted-foreground leading-[1.75] mb-4">
                  Reneverse was a Web3 gaming project building toward a <strong className="text-foreground font-semibold">Genesis NFT Drop</strong> backed by utility, community access, and a broader ecosystem vision. My role went beyond content execution — spanning genesis-drop strategy, world-building, faction design, utility framing, and launch communication architecture.
                </p>
                <p className="text-[15px] text-muted-foreground leading-[1.75]">
                  The challenge was not just to market a collection. It was to make the drop feel like it deserved to exist — and give the community a world they could actually enter, understand, and rally around.
                </p>
              </motion.div>

              {/* Contribution layers */}
              <motion.div {...scrollFade(0.1)}>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase font-mono text-muted-foreground/50 mb-4">Contribution layers</p>
                <div className="grid grid-cols-2 gap-3">
                  {MANDATE_LAYERS.map((m, i) => {
                    const Icon = m.icon;
                    return (
                      <div key={i} className="rounded-xl p-4 flex flex-col gap-2" style={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}>
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.14)' }}>
                          <Icon size={14} className="text-primary" />
                        </div>
                        <span className="font-display font-bold text-foreground text-[0.85rem] leading-tight">{m.label}</span>
                        <span className="text-[11px] text-muted-foreground">{m.sub}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
             THE CHALLENGE — 3 cards
        ══════════════════════════════════ */}
        <section className="py-16 md:py-24" style={{ background: 'hsl(var(--card))' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade()} className="flex items-center gap-3 mb-4">
              <Crosshair size={16} className="text-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">The Strategic Problem</span>
            </motion.div>
            <motion.h2 {...scrollFade(0.06)} className="font-display font-black text-foreground leading-tight mb-10" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em', maxWidth: 680 }}>
              Three parallel problems that had to be solved at once.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  num: '01',
                  heading: 'The drop needed a stronger reason to matter',
                  body: 'Rarity mechanics and surface hype weren\'t enough. The collection needed a clear world, stronger utility framing, and a convincing relationship between the art, the ecosystem, and the holder\'s identity.',
                  icon: Layers,
                },
                {
                  num: '02',
                  heading: 'Two very different cohorts had to be converted',
                  body: 'The strategy wasn\'t aimed at one generic audience. Gamers needed emotional pull and identity. Developers needed ecosystem thesis and utility. The same drop had to deliver two completely different reasons to care.',
                  icon: Users,
                },
                {
                  num: '03',
                  heading: 'The world needed story gravity',
                  body: 'A lasting NFT drop in gaming needed more than a whitelist and social cadence. It needed a universe, factions, conflict, and expansion potential — so the community had something richer to discuss than supply and price.',
                  icon: Map,
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={i} {...scrollFade(i * 0.09)} className="rounded-2xl p-7 relative overflow-hidden" style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}>
                    <span className="absolute top-5 right-5 font-black font-mono select-none" style={{ fontSize: '4rem', color: 'rgba(249,115,22,0.07)', letterSpacing: '-0.05em', lineHeight: 1 }}>{item.num}</span>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.15)' }}>
                      <Icon size={15} className="text-primary" />
                    </div>
                    <div className="w-5 h-[2px] bg-primary rounded mb-4" />
                    <h3 className="font-display font-bold text-foreground leading-snug mb-3 text-[0.95rem]" style={{ letterSpacing: '-0.01em' }}>{item.heading}</h3>
                    <p className="text-[13px] text-muted-foreground leading-[1.7]">{item.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
             LORE & FACTIONS — signature section
        ══════════════════════════════════ */}
        <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: '#070710' }}>
          {/* Subtle grid */}
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          {/* Ghost "2150" */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black select-none pointer-events-none font-mono text-white/[0.025] leading-none whitespace-nowrap" style={{ fontSize: 'clamp(7rem, 22vw, 20rem)', letterSpacing: '-0.06em' }}>
            2150
          </span>
          {/* Color bloom accents */}
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'rgba(239,68,68,0.05)', filter: 'blur(80px)' }} />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'rgba(168,85,247,0.05)', filter: 'blur(80px)' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade()} className="flex items-center gap-3 mb-6">
              <Map size={16} className="text-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] font-mono uppercase" style={{ color: 'rgba(249,115,22,0.6)' }}>World-Building</span>
            </motion.div>

            <motion.div {...scrollFade(0.06)} className="mb-4">
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase font-mono mb-3" style={{ color: 'rgba(255,255,255,0.25)' }}>
                Year 2150 · Virtual Land · Three factions · One universe
              </p>
              <h2 className="font-display font-black text-white leading-[1.05]" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.03em', maxWidth: 700 }}>
                Building a world before trying to sell a drop.
              </h2>
            </motion.div>

            <motion.p {...scrollFade(0.1)} className="text-[14.5px] leading-[1.75] mb-14 max-w-2xl" style={{ color: 'rgba(255,255,255,0.45)' }}>
              The strongest NFT launches don't just market images — they market <em className="text-white/65">belonging, myth, and future participation</em>. So the first move was to make the drop feel like an entry point into a living universe. The Reneverse story established a 2150 setting, a technologically dominant human race, one coveted virtual land under threat — and three distinct ways to respond to that threat.
            </motion.p>

            {/* Faction cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {FACTIONS.map((faction, i) => (
                <motion.div
                  key={faction.name}
                  {...scrollFade(i * 0.1)}
                  className="rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: `1px solid ${faction.border}`,
                    boxShadow: `0 0 40px ${faction.glow}`,
                  }}
                >
                  {/* Ghost faction name */}
                  <span className="absolute -bottom-2 -right-2 font-black select-none pointer-events-none font-display leading-none" style={{ fontSize: '5.5rem', color: faction.color, opacity: 0.06, letterSpacing: '-0.04em' }}>
                    {faction.name.split(' ')[0]}
                  </span>

                  {/* Color dot */}
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: faction.color, boxShadow: `0 0 8px ${faction.color}` }} />
                    <span className="text-[9.5px] font-bold tracking-[0.22em] uppercase font-mono" style={{ color: faction.color, opacity: 0.7 }}>
                      {faction.archetype}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-white leading-none" style={{ fontSize: '1.5rem', letterSpacing: '-0.025em' }}>
                    {faction.name}
                  </h3>

                  <p className="text-[13px] leading-[1.7]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {faction.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-4" style={{ borderTop: `1px solid ${faction.border}` }}>
                    {faction.traits.map(t => (
                      <span key={t} className="text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded font-mono" style={{ color: faction.color, background: `${faction.color}10`, border: `1px solid ${faction.color}30` }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Insight callout */}
            <motion.div {...scrollFade(0.2)} className="mt-10 rounded-2xl p-7 flex flex-col md:flex-row gap-5 items-start" style={{ background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.15)' }}>
              <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.2)' }}>
                <Zap size={14} className="text-primary" />
              </div>
              <div>
                <p className="text-[13px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Factions weren't just lore flavor. They created <span className="text-white/75 font-medium">emotional segmentation</span> inside the collection — stronger trait meaning, more memorable set differentiation, cleaner brand language around identity, and better material for story-led ads and faction-based engagement. Instead of "different sets," the collection felt like <span className="text-primary font-medium">distinct ideological camps inside one universe</span>.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════
             CAMPAIGN ARCHITECTURE
        ══════════════════════════════════ */}
        <section className="py-16 md:py-24" style={{ background: 'hsl(var(--background))' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade()} className="flex items-center gap-3 mb-4">
              <Crosshair size={16} className="text-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">Campaign Architecture</span>
            </motion.div>
            <motion.h2 {...scrollFade(0.06)} className="font-display font-black text-foreground leading-tight mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em' }}>
              One coordinated narrative machine.
            </motion.h2>
            <motion.p {...scrollFade(0.1)} className="text-[14px] text-muted-foreground mb-12 max-w-xl leading-relaxed">
              The launch system was framed around the user journey — preventing the campaign from becoming disconnected content output.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { stage: 'Attract', sub: 'Awareness & intrigue', tactics: ATTRACT_TACTICS, color: '#F97316', num: '01' },
                { stage: 'Nurture', sub: 'Education & trust-building', tactics: NURTURE_TACTICS, color: '#A855F7', num: '02' },
                { stage: 'Retain', sub: 'Community & expansion', tactics: RETAIN_TACTICS, color: '#06B6D4', num: '03' },
              ].map((phase, i) => (
                <motion.div key={i} {...scrollFade(i * 0.09)}>
                  {/* Stage header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase font-mono text-muted-foreground/40">{phase.num}</span>
                    <div className="h-px flex-1" style={{ background: phase.color, opacity: 0.3 }} />
                    {i < 2 && (
                      <div className="flex-shrink-0">
                        <ArrowRight size={12} style={{ color: phase.color, opacity: 0.5 }} />
                      </div>
                    )}
                  </div>
                  <div className="rounded-2xl p-6" style={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}>
                    <div className="mb-1">
                      <h3 className="font-display font-black text-foreground text-[1.1rem]" style={{ letterSpacing: '-0.02em', color: phase.color }}>{phase.stage}</h3>
                      <p className="text-[11px] text-muted-foreground font-medium">{phase.sub}</p>
                    </div>
                    <div className="h-px my-4" style={{ background: 'hsl(var(--border))' }} />
                    <div className="flex flex-col gap-2">
                      {phase.tactics.map(t => (
                        <div key={t} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: phase.color, opacity: 0.6 }} />
                          <span className="text-[12.5px] text-muted-foreground">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
             AUDIENCE SEGMENTATION
        ══════════════════════════════════ */}
        <section className="py-16 md:py-20 border-y" style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade()} className="flex items-center gap-3 mb-4">
              <Users size={16} className="text-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">Audience Segmentation</span>
            </motion.div>
            <motion.h2 {...scrollFade(0.06)} className="font-display font-black text-foreground leading-tight mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em' }}>
              Two audiences. One drop. Two different reasons to care.
            </motion.h2>
            <motion.p {...scrollFade(0.1)} className="text-[14px] text-muted-foreground mb-12 max-w-xl leading-relaxed">
              The strategy wasn't built for one generic market. It was explicitly split — with distinct teaser themes, ad variants, and messaging logic for each cohort.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  icon: Gamepad2,
                  label: 'Gamers',
                  color: '#F97316',
                  hook: 'Emotional pull, faction identity, story belonging',
                  signals: ['Faction-based teasers', 'Story-driven ads', 'NFT art reveals', 'Discord culture fit', 'Faction choice as identity'],
                  note: 'Gamers needed to feel like the drop was a cultural moment — an entry into a world, not a transaction.',
                },
                {
                  icon: Code2,
                  label: 'Developers',
                  color: '#06B6D4',
                  hook: 'Ecosystem thesis, utility access, integration potential',
                  signals: ['Partner perks', 'SDK & game access', 'Developer outreach', 'Whitelist utility', 'Ecosystem roadmap'],
                  note: 'Developers needed to see real ecosystem intent — that the drop was backed by infrastructure, not just narrative.',
                },
              ].map((seg, i) => {
                const Icon = seg.icon;
                return (
                  <motion.div key={i} {...scrollFade(i * 0.1)} className="rounded-2xl p-7" style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${seg.color}14`, border: `1px solid ${seg.color}28` }}>
                        <Icon size={16} style={{ color: seg.color }} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-foreground text-[1rem]" style={{ letterSpacing: '-0.01em' }}>{seg.label}</h3>
                        <p className="text-[11px] font-medium" style={{ color: seg.color, opacity: 0.7 }}>{seg.hook}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mb-5">
                      {seg.signals.map(s => (
                        <div key={s} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: seg.color, opacity: 0.5 }} />
                          <span className="text-[13px] text-muted-foreground">{s}</span>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl px-4 py-3" style={{ background: `${seg.color}08`, border: `1px solid ${seg.color}18` }}>
                      <p className="text-[12.5px] leading-[1.65]" style={{ color: 'rgba(0,0,0,0.5)' }}>{seg.note}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
             WHY IT WORKED
        ══════════════════════════════════ */}
        <section className="py-16 md:py-20" style={{ background: 'hsl(var(--background))' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade()} className="flex items-center gap-3 mb-4">
              <Zap size={16} className="text-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">Why It Worked</span>
            </motion.div>
            <motion.h2 {...scrollFade(0.06)} className="font-display font-black text-foreground leading-tight mb-12" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em' }}>
              Most NFT campaigns fail because they create urgency before creating meaning.
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {WHY_WORKED.map((w, i) => (
                <motion.div key={i} {...scrollFade(i * 0.07)} className="rounded-xl p-5 flex flex-col gap-3" style={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}>
                  <span className="font-display font-black text-primary" style={{ fontSize: '1.1rem', letterSpacing: '-0.02em' }}>{w.word}</span>
                  <p className="text-[12px] text-muted-foreground leading-[1.6]">{w.line}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
             OUTCOME — dark section
        ══════════════════════════════════ */}
        <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: '#070710' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #070710 100%)' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade()} className="flex items-center gap-3 mb-4">
              <TrendingUp size={16} className="text-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] font-mono uppercase" style={{ color: 'rgba(249,115,22,0.6)' }}>Outcome</span>
            </motion.div>
            <motion.h2 {...scrollFade(0.06)} className="font-display font-black text-white leading-tight mb-14" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em' }}>
              A Genesis Drop that felt like a world, not a mint.
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { value: '3', label: 'Factions built', sub: 'Darkrage · Frostshield · Noble' },
                { value: '3,500+', label: 'Developers onboarded', sub: 'Into the ecosystem' },
                { value: '500+', label: 'Organizations', sub: 'Onboarded in the year' },
                { value: '220+', label: 'Games integrated', sub: 'Across the ecosystem' },
              ].map((s, i) => (
                <motion.div key={i} {...scrollFade(i * 0.08)} className="rounded-2xl p-6 flex flex-col gap-1" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <span className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', color: '#F97316', letterSpacing: '-0.035em' }}>{s.value}</span>
                  <span className="text-[12px] font-bold mt-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.label}</span>
                  <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.28)' }}>{s.sub}</span>
                </motion.div>
              ))}
            </div>

            <motion.div {...scrollFade(0.16)} className="rounded-2xl p-8" style={{ background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.15)' }}>
              <p className="text-[14.5px] leading-[1.8]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                The work helped turn the Genesis Drop into something more complete: a lore-backed NFT collection with three defined factions, a structured launch system across teaser content, social, PR, newsletters, influencer strategy, and SEO — and a more coherent relationship between the art, the drop mechanics, and the larger Reneverse ecosystem vision. The NFT was no longer just useful. It was <strong className="text-white/80 font-semibold">narratively situated</strong>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════
             KEY TAKEAWAY
        ══════════════════════════════════ */}
        <section className="py-16 md:py-24" style={{ background: 'hsl(var(--background))' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade()} className="flex items-center gap-3 mb-10">
              <Award size={16} className="text-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">Key Takeaway</span>
            </motion.div>
            <motion.blockquote {...scrollFade(0.08)} className="relative pl-10 py-2" style={{ borderLeft: '4px solid #F97316' }}>
              <p className="font-display font-black text-foreground leading-[1.25]" style={{ fontSize: 'clamp(1.25rem, 2.8vw, 1.9rem)', letterSpacing: '-0.02em', maxWidth: 860 }}>
                At Reneverse, the job was not just to market a Genesis Drop. It was to give the drop a world, a logic, and a reason for the community to care{' '}
                <span className="text-primary italic">beyond the mint window.</span>
              </p>
              <footer className="mt-6 flex items-center gap-4">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase font-mono text-muted-foreground/50">
                  Reneverse · Content & Strategy Lead
                </span>
                <span className="h-px flex-1 bg-border max-w-xs" />
              </footer>
            </motion.blockquote>
          </div>
        </section>

        {/* ══════════════════════════════════
             BOTTOM NAVIGATION
        ══════════════════════════════════ */}
        <section className="py-12 border-t" style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
            <Link
              href="/case-studies/encapsulate"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Encapsulate
            </Link>

            <div className="flex items-center gap-2">
              {[0, 1, 2].map(i => (
                <div key={i} className="rounded-full transition-all" style={{ width: i === 1 ? 20 : 6, height: 6, background: i === 1 ? '#F97316' : 'rgba(249,115,22,0.2)' }} />
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm font-medium cursor-not-allowed" style={{ color: 'rgba(0,0,0,0.2)' }} title="Coming soon">
              Lithium Finance
              <ArrowRight size={14} />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
