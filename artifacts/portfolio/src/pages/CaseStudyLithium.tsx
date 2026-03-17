import { useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Database, Lock, Users, FileText,
  Globe, TrendingUp, Award, Layers, Shield,
  ChevronRight, BookOpen, Zap,
} from 'lucide-react';

function scrollFade(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.55, delay },
  };
}

const MANDATE_LAYERS = [
  { icon: FileText, num: '01', label: 'Whitepaper Co-authorship', sub: 'First iteration of the protocol document' },
  { icon: Database, num: '02', label: 'Protocol Explanation', sub: 'Mechanism → market-legible narrative' },
  { icon: Layers, num: '03', label: 'Narrative Framing', sub: 'Category definition before promotion' },
  { icon: BookOpen, num: '04', label: 'Educational Translation', sub: 'Complexity compressed without distortion' },
  { icon: Shield, num: '05', label: 'Market-Facing Positioning', sub: 'Trust-first, not hype-first' },
  { icon: Globe, num: '06', label: 'Vernacular Explainers', sub: 'Hindi, English, regional formats' },
];

const FRICTION_CARDS = [
  {
    heading: 'Opaque underlying markets',
    body: "The protocol's pricing inputs came from participants with insight into assets that weren't transparently traded — hidden, fragmented, and socially guarded by nature.",
    icon: Lock,
  },
  {
    heading: 'No obvious mental shortcut',
    body: "People had a working model for liquid-asset oracles. A collective-intelligence oracle for illiquid assets was an unfamiliar category — the content had to explain and define at the same time.",
    icon: Database,
  },
  {
    heading: 'Two-sided ecosystem to convince',
    body: 'Seekers needed to trust the output. Experts needed to trust the mechanism. Both sides had to be convinced simultaneously, with completely different messages.',
    icon: Users,
  },
  {
    heading: 'Privacy was part of the product story',
    body: 'Because submissions involved price-sensitive information, confidentiality was not a side feature — it was a core trust mechanism that had to be woven into the narrative.',
    icon: Shield,
  },
];

const WHY_WORKED = [
  {
    label: 'Category first',
    body: 'The content defined the problem before promoting the product — making the gap Lithium filled feel real before asking anyone to believe in the solution.',
  },
  {
    label: 'Mechanism clarity',
    body: 'The whitepaper and explainer layer made the protocol design legible without dumbing it down — readers could follow the logic, not just the pitch.',
  },
  {
    label: 'Bridge credibility',
    body: "The narrative made the move from TradFi opacity to DeFi composability feel strategically inevitable — not experimental, not speculative.",
  },
];

export default function CaseStudyLithium() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">

      {/* ── Sticky nav ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b border-border"
        style={{ height: 56, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(16px)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to work
          </Link>
          <Link
            href="/"
            className="font-display font-bold text-base tracking-tight text-foreground flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Abhishek.
          </Link>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-mono text-primary/55 hidden md:block">
            Case Study · 03 / 03
          </span>
        </div>
      </header>

      <main style={{ paddingTop: 56 }}>

        {/* ══════════════════════════════════
             HERO — white, analytical, data-grid
        ══════════════════════════════════ */}
        <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden bg-background">
          {/* Graph-paper grid texture */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          {/* Faint large text watermark */}
          <span className="absolute right-0 top-8 font-black select-none pointer-events-none font-mono text-foreground/[0.022] leading-none" style={{ fontSize: 'clamp(6rem, 18vw, 15rem)', letterSpacing: '-0.06em' }}>
            ORACLE
          </span>
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--background)))' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade(0)} className="flex items-center gap-3 mb-8">
              <span className="h-px w-6 bg-primary flex-shrink-0" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">
                Case Study · DeFi Pricing Oracle
              </span>
            </motion.div>

            <motion.h1
              {...scrollFade(0.06)}
              className="font-display font-black text-foreground leading-[1.02]"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)', letterSpacing: '-0.032em', maxWidth: 860 }}
            >
              Making one of DeFi's hardest ideas{' '}
              <span className="text-primary">legible.</span>
            </motion.h1>

            <motion.p
              {...scrollFade(0.12)}
              className="mt-6 text-[1.05rem] leading-relaxed text-muted-foreground max-w-2xl"
            >
              A collective-intelligence pricing oracle for private and illiquid assets — the kind of DeFi product where communication isn't a wrapper around the tech, it's the bridge that makes the tech trustworthy.
            </motion.p>

            {/* Stat cards */}
            <motion.div {...scrollFade(0.18)} className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
              {[
                { value: 'WP', label: 'Whitepaper co-authored', sub: 'First protocol iteration' },
                { value: '6', label: 'Mandate layers', sub: 'Strategy to vernacular' },
                { value: '3', label: 'Languages', sub: 'Hindi · English · Regional' },
                { value: '7', label: 'Content pillars', sub: 'Mechanism to use case' },
              ].map((o, i) => (
                <div key={i} className="rounded-xl px-5 py-4 flex flex-col gap-1 border border-border bg-card">
                  <span className="font-display font-black leading-none text-primary" style={{ fontSize: '1.9rem', letterSpacing: '-0.03em' }}>{o.value}</span>
                  <span className="text-[12px] font-bold text-foreground/70">{o.label}</span>
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
              className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-10 pb-10 border-b border-border"
            >
              {[
                { label: 'Role', value: 'Content & Whitepaper Lead' },
                { label: 'Protocol Type', value: 'Pricing Oracle' },
                { label: 'Category', value: 'DeFi · Private Markets' },
                { label: 'Scope', value: 'Whitepaper · Content · Education' },
              ].map(m => (
                <div key={m.label} className="flex flex-col gap-0.5">
                  <span className="text-[9.5px] font-bold tracking-[0.2em] uppercase font-mono text-muted-foreground/50">{m.label}</span>
                  <span className="text-[13.5px] font-semibold text-foreground">{m.value}</span>
                </div>
              ))}
              <div className="ml-auto text-[10px] font-bold tracking-widest uppercase font-mono px-3 py-1.5 rounded-full text-primary border border-primary/20 bg-primary/5">
                Featured Impact
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <motion.div {...scrollFade()}>
                <h2 className="font-display font-black text-foreground mb-4 leading-tight" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', letterSpacing: '-0.02em' }}>
                  Project Snapshot
                </h2>
                <p className="text-[15px] text-muted-foreground leading-[1.75] mb-4">
                  Lithium Finance was building a{' '}
                  <strong className="text-foreground font-semibold">collective-intelligence pricing oracle</strong>{' '}
                  for private and illiquid assets — the kind without clean, continuous, public price feeds. Pre-IPO stocks, private equity, hard-to-value instruments. The protocol combined machine learning, cryptoeconomic incentives, and expert market input to price what traditional oracle design couldn't handle.
                </p>
                <p className="text-[15px] text-muted-foreground leading-[1.75]">
                  My role was to build the communication layer around that complexity — starting with co-authoring the first whitepaper iteration and extending into narrative, education, and vernacular explainers.
                </p>
              </motion.div>

              {/* Protocol actors */}
              <motion.div {...scrollFade(0.1)}>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase font-mono text-muted-foreground/50 mb-5">Protocol actors</p>
                <div className="flex flex-col gap-3">
                  {[
                    { label: 'Price Seekers', desc: 'Protocols and institutions requesting asset valuations', icon: Database },
                    { label: 'Wisdom Nodes', desc: 'Expert contributors with market intelligence on illiquid assets', icon: Users },
                    { label: '$LITH + Reputation Points', desc: 'Dual-incentive system shaping honest participation', icon: Zap },
                    { label: 'Privacy Layer', desc: 'Protected submission logic for price-sensitive inputs', icon: Lock },
                  ].map((actor, i) => {
                    const Icon = actor.icon;
                    return (
                      <div key={i} className="flex items-start gap-3 rounded-xl p-4 border border-border bg-background">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/8 border border-primary/14">
                          <Icon size={13} className="text-primary" />
                        </div>
                        <div>
                          <span className="text-[13px] font-bold text-foreground block">{actor.label}</span>
                          <span className="text-[12px] text-muted-foreground">{actor.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
             THE STRATEGIC PROBLEM — 3 cards
        ══════════════════════════════════ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade()} className="flex items-center gap-3 mb-4">
              <Database size={16} className="text-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">The Strategic Problem</span>
            </motion.div>
            <motion.h2 {...scrollFade(0.06)} className="font-display font-black text-foreground leading-tight mb-10" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em', maxWidth: 680 }}>
              Selling a concept that was difficult on three levels at once.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  num: '01',
                  heading: 'The market problem was abstract',
                  body: "Most DeFi users understand liquid-asset price feeds intuitively. Far fewer grasp why private and illiquid assets are a structurally different category — data is scarce, appraisal is expensive, and existing oracle infrastructure simply isn't built for it.",
                  icon: Database,
                },
                {
                  num: '02',
                  heading: 'The product was mechanism-heavy',
                  body: 'Price Seekers, Wisdom Nodes, $LITH, Reputation Points, Reputation Clearing Mechanism, two-way pricing, privacy-preserving submission logic — that is a lot of conceptual surface area to compress without losing the logic of the system.',
                  icon: Layers,
                },
                {
                  num: '03',
                  heading: 'The protocol had a cold-start trust problem',
                  body: 'Lithium was asking the market to believe that incentivized expert intelligence could produce usable price discovery for opaque assets — requiring explanation, credibility, and a narrative bridging TradFi opacity, DeFi composability, and market psychology.',
                  icon: Shield,
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={i} {...scrollFade(i * 0.09)} className="rounded-2xl p-7 relative overflow-hidden bg-card border border-border">
                    <span className="absolute top-5 right-5 font-black font-mono select-none text-primary/[0.07]" style={{ fontSize: '4rem', letterSpacing: '-0.05em', lineHeight: 1 }}>{item.num}</span>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-5 bg-primary/8 border border-primary/15">
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
             WHAT MADE THIS ESPECIALLY HARD
        ══════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade()} className="flex items-center gap-3 mb-4">
              <Lock size={16} className="text-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">Layers of Friction</span>
            </motion.div>
            <motion.h2 {...scrollFade(0.06)} className="font-display font-black text-foreground leading-tight mb-10" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em', maxWidth: 680 }}>
              This wasn't "how do we get attention?" It was "how do we stop this from sounding implausible?"
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {FRICTION_CARDS.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div key={i} {...scrollFade(i * 0.08)} className="rounded-2xl p-7 flex gap-5 bg-background border border-border">
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center bg-primary/8 border border-primary/15 mt-0.5">
                      <Icon size={14} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground mb-2 text-[0.95rem]" style={{ letterSpacing: '-0.01em' }}>{f.heading}</h3>
                      <p className="text-[13px] text-muted-foreground leading-[1.7]">{f.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
             THE MANDATE — 6 layers
        ══════════════════════════════════ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade()} className="flex items-center gap-3 mb-4">
              <FileText size={16} className="text-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">The Mandate</span>
            </motion.div>
            <motion.h2 {...scrollFade(0.06)} className="font-display font-black text-foreground leading-tight mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em' }}>
              Build the communication layer around the complexity. Don't flatten it.
            </motion.h2>
            <motion.p {...scrollFade(0.1)} className="text-[14px] text-muted-foreground mb-12 max-w-xl leading-relaxed">
              The real job was not writing "content." It was reducing the gap between what Lithium actually did and what the market could understand quickly enough to care about.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {MANDATE_LAYERS.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div key={i} {...scrollFade(i * 0.07)} className="rounded-2xl p-6 border border-border bg-card flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary/8 border border-primary/14">
                        <Icon size={13} className="text-primary" />
                      </div>
                      <span className="text-[9px] font-black tracking-[0.22em] uppercase font-mono text-primary/40">{m.num}</span>
                    </div>
                    <div>
                      <span className="font-display font-bold text-foreground text-[0.9rem] block leading-snug" style={{ letterSpacing: '-0.01em' }}>{m.label}</span>
                      <span className="text-[12px] text-muted-foreground mt-1 block">{m.sub}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
             THE MECHANISM — signature section
             Dark navy-slate, Seeker ↔ Expert
        ══════════════════════════════════ */}
        <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: '#080E1A' }}>
          {/* Grid texture */}
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
          {/* Orange bloom */}
          <div className="absolute top-0 right-1/3 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'rgba(249,115,22,0.05)', filter: 'blur(80px)' }} />
          {/* Blue bloom */}
          <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'rgba(59,130,246,0.05)', filter: 'blur(80px)' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade()} className="flex items-center gap-3 mb-6">
              <Database size={16} className="text-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] font-mono uppercase" style={{ color: 'rgba(249,115,22,0.6)' }}>The Mechanism</span>
            </motion.div>
            <motion.h2 {...scrollFade(0.06)} className="font-display font-black text-white leading-tight mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em' }}>
              Seeker meets Expert. Protocol bridges both.
            </motion.h2>
            <motion.p {...scrollFade(0.1)} className="text-[14px] leading-[1.75] mb-14 max-w-2xl" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Lithium's structural idea — a two-sided information market — was powerful only if both roles were easy to understand. The communication work had to make each side legible, and then show why the protocol made trust between them possible.
            </motion.p>

            {/* Mechanism diagram */}
            <motion.div {...scrollFade(0.12)} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">

              {/* Left — Seeker */}
              <div className="rounded-2xl flex flex-col p-6" style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.2)' }}>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.25)' }}>
                    <Database size={12} className="text-primary" />
                  </div>
                  <span className="text-[9.5px] font-black tracking-[0.22em] uppercase font-mono text-primary/60">Price Seeker</span>
                </div>
                <h3 className="font-display font-bold text-white text-[1rem] mb-3" style={{ letterSpacing: '-0.015em' }}>Requests valuation</h3>
                <div className="flex flex-col gap-2 mb-6">
                  {['Submits asset for pricing', 'Pays in $LITH', 'Receives aggregated estimate', 'Gets confidence-weighted output'].map(l => (
                    <div key={l} className="flex items-start gap-2">
                      <ChevronRight size={10} className="text-primary mt-0.5 flex-shrink-0" style={{ opacity: 0.6 }} />
                      <span className="text-[12.5px]" style={{ color: 'rgba(255,255,255,0.5)' }}>{l}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto rounded-xl px-3 py-2.5" style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.15)' }}>
                  <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    <span className="text-primary font-bold">Use cases:</span> Pre-IPO stocks · Private equity · Illiquid instruments
                  </p>
                </div>
              </div>

              {/* Center — Protocol Core */}
              <div className="rounded-2xl flex flex-col p-6 relative" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-center mb-5">
                  <span className="text-[9.5px] font-black tracking-[0.22em] uppercase font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>Protocol Core</span>
                </div>
                {/* Mechanism components as stacked data rows */}
                <div className="flex flex-col gap-2 flex-1">
                  {[
                    { label: '$LITH', desc: 'Incentive token' },
                    { label: 'Reputation Points', desc: 'Performance weight' },
                    { label: 'DMI Aggregation', desc: 'Truth discovery mechanism' },
                    { label: 'Privacy Layer', desc: 'Protected submission logic' },
                    { label: 'Slashing / Rewards', desc: 'Honest participation logic' },
                  ].map((c, ci) => (
                    <div key={ci} className="flex items-center justify-between rounded-lg px-3 py-2" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <span className="text-[11.5px] font-bold text-white/70">{c.label}</span>
                      <span className="text-[10px] text-white/30 font-mono">{c.desc}</span>
                    </div>
                  ))}
                </div>
                {/* Output arrow */}
                <div className="mt-5 rounded-xl px-3 py-2.5 text-center" style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.2)' }}>
                  <span className="text-[10px] font-bold text-primary/70 font-mono uppercase tracking-widest">Price output → DeFi</span>
                </div>
              </div>

              {/* Right — Wisdom Node */}
              <div className="rounded-2xl flex flex-col p-6" style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)' }}>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)' }}>
                    <Users size={12} style={{ color: '#3B82F6' }} />
                  </div>
                  <span className="text-[9.5px] font-black tracking-[0.22em] uppercase font-mono" style={{ color: 'rgba(59,130,246,0.65)' }}>Wisdom Node</span>
                </div>
                <h3 className="font-display font-bold text-white text-[1rem] mb-3" style={{ letterSpacing: '-0.015em' }}>Contributes expertise</h3>
                <div className="flex flex-col gap-2 mb-6">
                  {['Has pricing insight on illiquid assets', 'Submits privately (protected)', 'Earns $LITH + Reputation Points', 'Slashed for dishonest estimates'].map(l => (
                    <div key={l} className="flex items-start gap-2">
                      <ChevronRight size={10} style={{ color: '#3B82F6', opacity: 0.6 }} className="mt-0.5 flex-shrink-0" />
                      <span className="text-[12.5px]" style={{ color: 'rgba(255,255,255,0.5)' }}>{l}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto rounded-xl px-3 py-2.5" style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)' }}>
                  <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    <span className="font-bold" style={{ color: '#3B82F6' }}>Profile:</span> Private equity insiders · TradFi analysts · Market specialists
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Insight callout */}
            <motion.div {...scrollFade(0.2)} className="mt-8 rounded-2xl p-7" style={{ background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.15)' }}>
              <p className="text-[13.5px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Without clear role comprehension, the protocol looked complicated. With it, it started to look like a functioning{' '}
                <span className="text-white/75 font-medium">information market</span> — one where Seekers paid for insight and Experts were{' '}
                <span className="text-primary font-medium">cryptoeconomically incentivised to be honest</span>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════
             THE BRIDGE: TradFi → DeFi
        ══════════════════════════════════ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade()} className="flex items-center gap-3 mb-4">
              <Layers size={16} className="text-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">The Bridge</span>
            </motion.div>
            <motion.h2 {...scrollFade(0.06)} className="font-display font-black text-foreground leading-tight mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em' }}>
              Lithium sat between two very different worlds.
            </motion.h2>
            <motion.p {...scrollFade(0.1)} className="text-[14px] text-muted-foreground mb-12 max-w-xl leading-relaxed">
              The narrative had to make the move from private-market opacity to DeFi composability feel strategically inevitable — not experimental, not speculative.
            </motion.p>

            <motion.div {...scrollFade(0.12)} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
              {/* TradFi */}
              <div className="rounded-2xl p-7 border border-border bg-card">
                <p className="text-[9.5px] font-black tracking-[0.22em] uppercase font-mono text-muted-foreground/50 mb-4">Traditional Finance</p>
                <h3 className="font-display font-bold text-foreground text-[1.05rem] mb-4 leading-snug" style={{ letterSpacing: '-0.015em' }}>Gated. Relationship-driven. Opaque.</h3>
                <div className="flex flex-col gap-2">
                  {['Information is privileged', 'Pricing requires expensive appraisals', 'No public, continuous price feeds', 'Access is relationship-dependent'].map(l => (
                    <div key={l} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-muted-foreground/40 flex-shrink-0 mt-1.5" />
                      <span className="text-[12.5px] text-muted-foreground">{l}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Center — Lithium */}
              <div className="rounded-2xl p-7 flex flex-col items-center justify-center text-center relative overflow-hidden" style={{ background: 'hsl(var(--background))', border: '2px solid hsl(var(--primary) / 0.3)' }}>
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.05) 0%, transparent 70%)' }} />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center mx-auto mb-4">
                    <Database size={18} className="text-primary" />
                  </div>
                  <h3 className="font-display font-black text-primary text-[1.1rem] mb-2" style={{ letterSpacing: '-0.02em' }}>Lithium Finance</h3>
                  <p className="text-[12px] text-muted-foreground leading-[1.6]">Collective-intelligence oracle bridging expert knowledge and onchain price discovery</p>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <div className="h-px w-8 bg-primary/30" />
                    <span className="text-[9px] font-bold tracking-widest text-primary/50 font-mono uppercase">The Bridge</span>
                    <div className="h-px w-8 bg-primary/30" />
                  </div>
                </div>
              </div>

              {/* DeFi */}
              <div className="rounded-2xl p-7 border border-border bg-card">
                <p className="text-[9.5px] font-black tracking-[0.22em] uppercase font-mono text-muted-foreground/50 mb-4">Decentralised Finance</p>
                <h3 className="font-display font-bold text-foreground text-[1.05rem] mb-4 leading-snug" style={{ letterSpacing: '-0.015em' }}>Open. Composable. Programmable.</h3>
                <div className="flex flex-col gap-2">
                  {['Needs usable onchain price feeds', 'Composability requires trusted primitives', 'Private assets cannot flow in without pricing', 'Credible oracles unlock new DeFi categories'].map(l => (
                    <div key={l} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0 mt-1.5" />
                      <span className="text-[12.5px] text-muted-foreground">{l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════
             VERNACULAR REACH
        ══════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade()} className="flex items-center gap-3 mb-4">
              <Globe size={16} className="text-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">Vernacular Reach</span>
            </motion.div>
            <motion.h2 {...scrollFade(0.06)} className="font-display font-black text-foreground leading-tight mb-3" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em' }}>
              The comprehension gap was as much a language problem as a jargon problem.
            </motion.h2>
            <motion.p {...scrollFade(0.1)} className="text-[14px] text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              Lithium was already difficult to explain to English-speaking crypto users. Broader market comprehension required a different approach — lighter formats, regional languages, and education-first content that reduced friction without stripping depth.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  lang: 'English',
                  script: 'EN',
                  type: 'Primary market layer',
                  formats: ['Whitepaper', 'Protocol explainers', 'Long-form content', 'Technical deep-dives'],
                  note: 'The core narrative and whitepaper layer — mechanism-level depth for crypto-native readers.',
                },
                {
                  lang: 'Hindi',
                  script: 'हि',
                  type: 'Vernacular education layer',
                  formats: ['Explainer videos', 'Shorter format content', 'Accessibility-first framing', 'Conceptual primers'],
                  note: 'Light-format video and text to make the protocol idea accessible to a broader South Asian Web3 market.',
                },
                {
                  lang: 'Regional',
                  script: 'Rg',
                  type: 'Multilingual access layer',
                  formats: ['Regional language formats', 'Market-specific framing', 'Education-led approach', 'Comprehension-first content'],
                  note: 'Extended market coverage across language contexts — reducing the comprehension barrier at the entry level.',
                },
              ].map((l, i) => (
                <motion.div key={i} {...scrollFade(i * 0.09)} className="rounded-2xl overflow-hidden border border-border bg-background">
                  <div className="px-6 py-4 flex items-center gap-3 border-b border-border" style={{ background: 'rgba(249,115,22,0.04)' }}>
                    <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-black text-primary" style={{ fontSize: '0.75rem', fontFamily: 'monospace' }}>{l.script}</span>
                    </div>
                    <div>
                      <span className="font-display font-bold text-foreground text-[0.9rem] block" style={{ letterSpacing: '-0.01em' }}>{l.lang}</span>
                      <span className="text-[10px] text-primary/60 font-mono font-bold uppercase tracking-widest">{l.type}</span>
                    </div>
                  </div>
                  <div className="px-6 py-5 flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      {l.formats.map(f => (
                        <div key={f} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                          <span className="text-[12.5px] text-muted-foreground">{f}</span>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl px-4 py-3 bg-primary/5 border border-primary/10">
                      <p className="text-[12px] text-muted-foreground leading-[1.6]">{l.note}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
             WHY IT WORKED — 3 criteria
        ══════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade()} className="flex items-center gap-3 mb-4">
              <Zap size={16} className="text-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">Why It Worked</span>
            </motion.div>
            <motion.h2 {...scrollFade(0.06)} className="font-display font-black text-foreground leading-tight mb-12" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em' }}>
              The category demanded explanation before promotion.
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {WHY_WORKED.map((w, i) => (
                <motion.div key={i} {...scrollFade(i * 0.09)} className="rounded-2xl p-7 border border-border bg-card">
                  <div className="w-8 h-[3px] bg-primary rounded mb-5" />
                  <h3 className="font-display font-black text-primary mb-3" style={{ fontSize: '1.05rem', letterSpacing: '-0.015em' }}>{w.label}</h3>
                  <p className="text-[13px] text-muted-foreground leading-[1.7]">{w.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
             OUTCOME — dark section
        ══════════════════════════════════ */}
        <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: '#080E1A' }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(249,115,22,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #080E1A 100%)' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <motion.div {...scrollFade()} className="flex items-center gap-3 mb-4">
              <TrendingUp size={16} className="text-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] font-mono uppercase" style={{ color: 'rgba(249,115,22,0.6)' }}>Outcome</span>
            </motion.div>
            <motion.h2 {...scrollFade(0.06)} className="font-display font-black text-white leading-tight mb-14" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', letterSpacing: '-0.025em' }}>
              A sharper first-layer explanation for one of DeFi's hardest categories.
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { value: 'WP', label: 'Whitepaper', sub: 'Co-authored, first iteration' },
                { value: '4', label: 'Framing layers', sub: 'Problem · Mechanism · Trust · Use case' },
                { value: '3', label: 'Languages', sub: 'Hindi · English · Regional' },
                { value: '6+', label: 'Content pillars', sub: 'Strategy to vernacular' },
              ].map((s, i) => (
                <motion.div key={i} {...scrollFade(i * 0.08)} className="rounded-2xl p-6 flex flex-col gap-1" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <span className="font-display font-black leading-none text-primary" style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', letterSpacing: '-0.035em' }}>{s.value}</span>
                  <span className="text-[12px] font-bold mt-1" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.label}</span>
                  <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.28)' }}>{s.sub}</span>
                </motion.div>
              ))}
            </div>

            <motion.div {...scrollFade(0.16)} className="rounded-2xl p-8" style={{ background: 'rgba(249,115,22,0.05)', border: '1px solid rgba(249,115,22,0.15)' }}>
              <p className="text-[14.5px] leading-[1.8]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                The content and whitepaper layer helped make the protocol more legible across problem framing, mechanism framing, trust framing, and use-case framing. The communication layer became more inclusive and more portable through vernacular explainers and multilingual video formats — extending the protocol narrative beyond English-first crypto readers and into a more{' '}
                <strong className="text-white/80 font-semibold">education-led market approach</strong>.
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
              <span className="text-[11px] font-bold tracking-[0.22em] text-primary/60 uppercase font-mono">Key Takeaway</span>
            </motion.div>
            <motion.blockquote {...scrollFade(0.08)} className="relative pl-10 py-2" style={{ borderLeft: '4px solid #F97316' }}>
              <p className="font-display font-black text-foreground leading-[1.25]" style={{ fontSize: 'clamp(1.25rem, 2.8vw, 1.9rem)', letterSpacing: '-0.02em', maxWidth: 900 }}>
                At Lithium, the real job was not writing about DeFi. It was making a highly technical oracle for illiquid assets feel{' '}
                <span className="text-primary italic">coherent enough to trust</span>,{' '}
                clear enough to repeat, and accessible enough to explain across both crypto-native and vernacular market contexts.
              </p>
              <footer className="mt-6 flex items-center gap-4">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase font-mono text-muted-foreground/50">
                  Lithium Finance · Content & Whitepaper Lead
                </span>
                <span className="h-px flex-1 bg-border max-w-xs" />
              </footer>
            </motion.blockquote>
          </div>
        </section>

        {/* ══════════════════════════════════
             BOTTOM NAVIGATION
        ══════════════════════════════════ */}
        <section className="py-12 border-t border-border bg-card">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
            <Link
              href="/case-studies/reneverse"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
              Reneverse
            </Link>

            <div className="flex items-center gap-2">
              {[0, 1, 2].map(i => (
                <div key={i} className="rounded-full transition-all" style={{ width: i === 2 ? 20 : 6, height: 6, background: i === 2 ? '#F97316' : 'rgba(249,115,22,0.2)' }} />
              ))}
            </div>

            <span className="text-[11px] font-bold tracking-[0.2em] uppercase font-mono text-muted-foreground/30 select-none">
              Final case study
            </span>
          </div>
        </section>

      </main>
    </div>
  );
}
