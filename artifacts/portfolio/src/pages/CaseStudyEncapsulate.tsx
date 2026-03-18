import { useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Shield, Eye, BookOpen, Globe,
  Users, Mic, ChevronRight, TrendingUp, Link2, Award,
} from 'lucide-react';

function scrollFade(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.55, delay },
  };
}

const STRATEGY_PILLARS = [
  {
    icon: Shield,
    num: '01',
    title: 'Turned trust into a content category',
    body: 'Instead of treating trust as a vague brand idea, I treated it as a set of visible, validator-market signals — uptime, slashing safety, governance reasoning, chain support, community contribution, and staking education — each becoming a consistent content pillar.',
  },
  {
    icon: Eye,
    num: '02',
    title: 'Made governance visible and legible',
    body: 'Governance participation is one of the strongest trust levers in PoS. I posted around important proposals, explained voting logic publicly, and used governance behavior as proof of skin in the game — something the community could actively follow, not passively assume.',
  },
  {
    icon: BookOpen,
    num: '03',
    title: 'Built a staking-education layer',
    body: 'Validator growth is constrained by community uncertainty. I strengthened the blog pipeline, supported guest posting, and created content around staking topics that most validators treat cautiously — why slashing matters, how to choose a validator, why smaller validators aid decentralization.',
  },
  {
    icon: Globe,
    num: '04',
    title: 'Used chain support as social proof',
    body: 'New chain support is not just an ops milestone — it is a market signal. Every network onboarded reinforces technical capability, ecosystem trust, and operator momentum. I made chain listings and validator expansion visible proof loops, not hidden backend facts.',
  },
  {
    icon: Users,
    num: '05',
    title: 'Built ecosystem visibility through collaboration',
    body: 'Validator reputation is social as much as technical. I worked on creative collaborations with protocols and fellow validators to increase visibility, strengthen association with credible ecosystem players, and build a more networked social presence.',
  },
  {
    icon: Mic,
    num: '06',
    title: 'Shifted social from announcement feed to operator voice',
    body: 'Most validator accounts feel transactional. The goal was to create an opinionated, trust-bearing voice — with regular posts on validator logic, visible positions on proposals, thought leadership on staking issues, and stronger educational framing.',
  },
];

const OUTCOMES = [
  { value: '~10K', label: 'Stakers reached', sub: 'Up from 6,700', icon: TrendingUp },
  { value: '+26%', label: 'AUM growth', sub: '$521,048,664 staked', icon: TrendingUp },
  { value: '15+', label: 'New chains onboarded', sub: 'In 6 months', icon: Link2 },
  { value: '6 mo', label: 'Timeline', sub: 'Content & Social Lead', icon: Award },
];

export default function CaseStudyEncapsulate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen">

      {/* ── Sticky nav ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
        style={{ height: 56 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Back to work
            </a>
          </Link>
          <Link href="/">
            <a className="font-display font-bold text-base tracking-tight text-foreground flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Abhishek.
            </a>
          </Link>
          <span
            className="text-[10px] font-bold tracking-[0.2em] uppercase font-mono hidden md:block"
            style={{ color: 'rgba(249,115,22,0.55)' }}
          >
            Case Study · 01 / 03
          </span>
        </div>
      </header>

      <main style={{ paddingTop: 56 }}>

        {/* ══════════════════════════════════
             HERO
        ══════════════════════════════════ */}
        <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
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
              background: 'radial-gradient(ellipse 80% 70% at 50% 0%, hsl(var(--background)) 0%, transparent 80%)',
            }}
          />

          {/* Network node watermark */}
          <svg
            className="absolute right-0 top-0 pointer-events-none select-none opacity-[0.04]"
            width="480" height="480" viewBox="0 0 480 480" fill="none"
          >
            {[0,1,2,3,4,5].map(row =>
              [0,1,2,3,4,5].map(col => {
                const cx = 40 + col * 80 + (row % 2) * 40;
                const cy = 40 + row * 70;
                return (
                  <g key={`${row}-${col}`}>
                    <circle cx={cx} cy={cy} r="5" fill="#F97316" />
                    {col < 5 && <line x1={cx} y1={cy} x2={cx + 80} y2={cy} stroke="#F97316" strokeWidth="1.5" />}
                    {row < 5 && <line x1={cx} y1={cy} x2={cx + 40} y2={cy + 70} stroke="#F97316" strokeWidth="1.5" />}
                  </g>
                );
              })
            )}
          </svg>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            {/* Eyebrow */}
            <motion.div {...scrollFade(0)} className="flex items-center gap-3 mb-8">
              <span className="h-px w-6 bg-primary flex-shrink-0" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">
                Case Study · Cosmos Validator Ecosystem
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              {...scrollFade(0.06)}
              className="font-display font-black text-foreground leading-[1.02]"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', letterSpacing: '-0.032em', maxWidth: 820 }}
            >
              Building trust-led growth for a{' '}
              <span className="text-primary">Cosmos validator.</span>
            </motion.h1>

            <motion.p
              {...scrollFade(0.12)}
              className="mt-6 text-[1.05rem] text-muted-foreground leading-relaxed max-w-2xl"
            >
              Making operational credibility visible enough that delegators stake, protocols shortlist the validator, and the wider Cosmos ecosystem sees Encapsulate as an active, trusted operator — not just infrastructure.
            </motion.p>

            {/* Outcome strip */}
            <motion.div
              {...scrollFade(0.18)}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12"
            >
              {OUTCOMES.map((o, i) => (
                <div
                  key={i}
                  className="rounded-xl px-5 py-4 flex flex-col gap-1"
                  style={{
                    background: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                  }}
                >
                  <span
                    className="font-display font-black leading-none"
                    style={{ fontSize: '1.9rem', color: '#F97316', letterSpacing: '-0.03em' }}
                  >
                    {o.value}
                  </span>
                  <span className="text-[12px] font-bold text-foreground">{o.label}</span>
                  <span className="text-[11px] text-muted-foreground">{o.sub}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════
             PROJECT SNAPSHOT
        ══════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Metadata strip */}
            <motion.div
              {...scrollFade()}
              className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-10 pb-10"
              style={{ borderBottom: '1px solid hsl(var(--border))' }}
            >
              {[
                { label: 'Role', value: 'Content & Social Lead' },
                { label: 'Timeline', value: '6 months' },
                { label: 'Category', value: 'Validator Ecosystem' },
                { label: 'Network', value: 'Cosmos / PoS' },
              ].map(m => (
                <div key={m.label} className="flex flex-col gap-0.5">
                  <span className="text-[9.5px] font-bold tracking-[0.2em] uppercase font-mono text-muted-foreground/50">
                    {m.label}
                  </span>
                  <span className="text-[13.5px] font-semibold text-foreground">{m.value}</span>
                </div>
              ))}
              <div
                className="ml-auto text-[10px] font-bold tracking-widest uppercase font-mono px-3 py-1.5 rounded-full"
                style={{
                  color: '#F97316',
                  background: 'rgba(249,115,22,0.08)',
                  border: '1px solid rgba(249,115,22,0.18)',
                }}
              >
                Featured Impact
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <motion.div {...scrollFade()}>
                <h2
                  className="font-display font-black text-foreground mb-4 leading-tight"
                  style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', letterSpacing: '-0.02em' }}
                >
                  Project Snapshot
                </h2>
                <p className="text-[15px] text-muted-foreground leading-[1.75]">
                  Encapsulate is a multi-network Cosmos validator active since early 2020, with public trust signals centered around uptime, slashing protection, governance participation, and community contribution. As <strong className="text-foreground font-semibold">Content & Social Media Lead</strong>, the challenge was not just to "grow social." It was to make Encapsulate feel like a validator serious delegators could trust and serious protocols would want in their active set.
                </p>
              </motion.div>

              <motion.div {...scrollFade(0.1)} className="grid grid-cols-2 gap-3">
                {[
                  { stat: '99.96%', label: 'Uptime maintained' },
                  { stat: 'Zero', label: 'Slashing events' },
                  { stat: '40+', label: 'Networks supported' },
                  { stat: '100%', label: 'Soft slash protection' },
                ].map(s => (
                  <div
                    key={s.stat}
                    className="rounded-xl p-5 flex flex-col gap-2"
                    style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
                  >
                    <span className="font-display font-black text-foreground" style={{ fontSize: '1.5rem', letterSpacing: '-0.025em' }}>
                      {s.stat}
                    </span>
                    <span className="text-[11px] text-muted-foreground font-medium leading-tight">{s.label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
             THE STRATEGIC PROBLEM
        ══════════════════════════════════ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade()} className="flex items-center gap-3 mb-4">
              <Shield size={16} className="text-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">
                The Strategic Problem
              </span>
            </motion.div>

            <motion.h2
              {...scrollFade(0.06)}
              className="font-display font-black text-foreground leading-tight mb-8"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em', maxWidth: 700 }}
            >
              The credibility trap every mid-sized validator faces.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <motion.div {...scrollFade(0.08)}>
                <p className="text-[14.5px] text-muted-foreground leading-[1.75] mb-6">
                  In the PoS validator ecosystem, delegators are told to do due diligence. They look at track record, governance participation, uptime, commission behavior, self-bond, and whether a validator contributes meaningfully to the community.
                </p>
                <p className="text-[14.5px] text-muted-foreground leading-[1.75]">
                  At the same time, smaller and mid-sized validators face a brutal credibility trap: larger stake already signals trust, so new delegations tend to flow toward validators who already <em>look</em> socially and operationally safe.
                </p>
              </motion.div>

              {/* Callout box */}
              <motion.div
                {...scrollFade(0.12)}
                className="rounded-2xl p-7"
                style={{
                  background: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderLeft: '3px solid #F97316',
                }}
              >
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase font-mono mb-5" style={{ color: 'rgba(249,115,22,0.55)' }}>
                  The four-part problem
                </p>
                {[
                  'Operational excellence alone is not enough if the market cannot see it',
                  'Governance participation matters, but most validators under-communicate it',
                  'Staking is sticky — trust must be earned before the delegation decision',
                  '"We are secure" is weak positioning unless repeatedly evidenced through content',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3 mb-4 last:mb-0">
                    <ChevronRight size={14} className="text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-[13.5px] text-muted-foreground leading-[1.65]">{point}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Pull quote */}
            <motion.blockquote
              {...scrollFade(0.16)}
              className="mt-14 pl-7 relative"
              style={{ borderLeft: '3px solid #F97316' }}
            >
              <p
                className="font-display font-bold text-foreground leading-snug"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', letterSpacing: '-0.015em' }}
              >
                "Operational excellence alone is not enough if the market cannot{' '}
                <span className="text-primary italic">see</span> it."
              </p>
              <footer className="mt-3 text-[11px] font-bold tracking-[0.2em] uppercase font-mono text-muted-foreground/50">
                The core insight — Encapsulate case study
              </footer>
            </motion.blockquote>
          </div>
        </section>

        {/* ══════════════════════════════════
             WHAT NEEDED TO CHANGE
        ══════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade()} className="flex items-center gap-3 mb-4">
              <TrendingUp size={16} className="text-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">
                The Mandate
              </span>
            </motion.div>

            <motion.h2
              {...scrollFade(0.06)}
              className="font-display font-black text-foreground leading-tight mb-10"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em' }}
            >
              Three things the content system had to do simultaneously.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  num: '01',
                  heading: 'Make delegators comfortable staking',
                  body: 'Close the trust gap between operational proof points and the delegators decision to stake. Uptime and zero-slash records had to become public conviction, not just spec-sheet facts.',
                },
                {
                  num: '02',
                  heading: 'Make protocols see Encapsulate as ecosystem-aligned',
                  body: 'Help Encapsulate graduate from "validator account" to "credible ecosystem operator" — with views, accountability, governance presence, and long-term commitment visible to protocols and fellow validators.',
                },
                {
                  num: '03',
                  heading: 'Make governance and growth compound over time',
                  body: 'Turn governance participation, new chain onboarding, and community collaboration into a compounding visibility loop — where each signal reinforces the last, and the cumulative narrative becomes harder to ignore.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  {...scrollFade(i * 0.08)}
                  className="rounded-2xl p-7 relative overflow-hidden"
                  style={{ background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
                >
                  <span
                    className="absolute top-5 right-5 font-black font-mono select-none"
                    style={{ fontSize: '4rem', color: 'rgba(249,115,22,0.07)', letterSpacing: '-0.05em', lineHeight: 1 }}
                  >
                    {item.num}
                  </span>
                  <div className="w-6 h-[2px] bg-primary rounded mb-5" />
                  <h3
                    className="font-display font-bold text-foreground leading-snug mb-3"
                    style={{ fontSize: '1rem', letterSpacing: '-0.01em' }}
                  >
                    {item.heading}
                  </h3>
                  <p className="text-[13px] text-muted-foreground leading-[1.7]">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
             THE STRATEGY
        ══════════════════════════════════ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade()} className="flex items-center gap-3 mb-4">
              <Globe size={16} className="text-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">
                The Strategy
              </span>
            </motion.div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <motion.h2
                {...scrollFade(0.06)}
                className="font-display font-black text-foreground leading-tight"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em' }}
              >
                Six levers. One compounding system.
              </motion.h2>
              <motion.p
                {...scrollFade(0.1)}
                className="text-[13px] text-muted-foreground max-w-xs md:text-right leading-relaxed"
              >
                Each lever reinforced the others — building a self-compounding trust narrative.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {STRATEGY_PILLARS.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={i}
                    {...scrollFade(i * 0.07)}
                    className="rounded-2xl p-7 flex gap-5"
                    style={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                  >
                    <div className="flex-shrink-0">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.15)' }}
                      >
                        <Icon size={17} className="text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className="text-[9px] font-bold tracking-[0.2em] uppercase font-mono"
                          style={{ color: 'rgba(249,115,22,0.45)' }}
                        >
                          {pillar.num}
                        </span>
                        <h3 className="font-display font-bold text-foreground text-[0.95rem] leading-tight" style={{ letterSpacing: '-0.01em' }}>
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-[13px] text-muted-foreground leading-[1.7]">{pillar.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
             OUTCOME
        ══════════════════════════════════ */}
        <section
          className="py-16 md:py-24 relative overflow-hidden"
          style={{ background: '#0A0A14' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.04) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #0A0A14 100%)',
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade()} className="flex items-center gap-3 mb-4">
              <TrendingUp size={16} className="text-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">
                Outcome
              </span>
            </motion.div>

            <motion.h2
              {...scrollFade(0.06)}
              className="font-display font-black text-white leading-tight mb-14"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em' }}
            >
              Trust-led content that moved real validator metrics.
            </motion.h2>

            {/* Big stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
              {[
                { value: '~10K', label: 'Stakers reached', sub: 'From 6,700 at start' },
                { value: '+26%', label: 'AUM growth', sub: '$521,048,664 staked' },
                { value: '15+', label: 'New chains', sub: 'Onboarded in 6 months' },
                { value: '6 mo', label: 'Duration', sub: 'Content & Social Lead' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  {...scrollFade(i * 0.08)}
                  className="rounded-2xl p-6 flex flex-col gap-1"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <span
                    className="font-display font-black leading-none"
                    style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#F97316', letterSpacing: '-0.035em' }}
                  >
                    {s.value}
                  </span>
                  <span className="text-[12px] font-bold text-white/70 mt-1">{s.label}</span>
                  <span className="text-[11px] text-white/30">{s.sub}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              {...scrollFade(0.16)}
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(249,115,22,0.05)',
                border: '1px solid rgba(249,115,22,0.15)',
              }}
            >
              <p className="text-[14.5px] text-white/60 leading-[1.8]">
                This trust-led content and social layer contributed to stronger blog and guest-posting pipeline, more visible governance participation, better recall around new chain support, voting rationale, and thought leadership. The strategy worked because it made operational quality <strong className="text-white/80 font-semibold">legible</strong> — not by amplifying noise, but by turning existing proof points into a consistent, compounding public narrative.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════
             KEY TAKEAWAY
        ══════════════════════════════════ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade()} className="flex items-center gap-3 mb-10">
              <Award size={16} className="text-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">
                Key Takeaway
              </span>
            </motion.div>

            <motion.blockquote
              {...scrollFade(0.08)}
              className="relative pl-10 py-2"
              style={{ borderLeft: '4px solid #F97316' }}
            >
              <p
                className="font-display font-black text-foreground leading-[1.25]"
                style={{ fontSize: 'clamp(1.35rem, 3vw, 2rem)', letterSpacing: '-0.02em', maxWidth: 860 }}
              >
                In PoS, trust compounds when validator operations, governance behavior, and ecosystem participation are translated into public narrative with enough consistency that delegators and protocols no longer have to{' '}
                <span className="text-primary">guess.</span>
              </p>
              <footer className="mt-6 flex items-center gap-4">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase font-mono text-muted-foreground/50">
                  Encapsulate.xyz · Content & Social Lead
                </span>
                <span className="h-px flex-1 bg-border max-w-xs" />
              </footer>
            </motion.blockquote>
          </div>
        </section>

        {/* ══════════════════════════════════
             BOTTOM NAVIGATION
        ══════════════════════════════════ */}
        <section className="py-12 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
            <Link href="/">
              <a className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
                <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                All work
              </a>
            </Link>

            <div className="flex items-center gap-2">
              {[0,1,2].map(i => (
                <div
                  key={i}
                  className="rounded-full transition-all"
                  style={{
                    width: i === 0 ? 20 : 6,
                    height: 6,
                    background: i === 0 ? '#F97316' : 'rgba(249,115,22,0.2)',
                  }}
                />
              ))}
            </div>

            <Link href="/case-studies/reneverse">
              <a className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
                Reneverse
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
