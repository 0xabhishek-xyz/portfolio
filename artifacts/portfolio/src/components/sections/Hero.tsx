import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

// ─── Typewriter ───────────────────────────────────────────────────────────────
const ROLES = ['Content Strategist', 'Web3 Marketer', 'Community Builder', 'IDO Specialist', 'Storyteller'];

function TypewriterRole() {
  const [idx, setIdx] = useState(0);
  const [chars, setChars] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[idx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && chars.length < word.length) {
      t = setTimeout(() => setChars(word.slice(0, chars.length + 1)), 65);
    } else if (!deleting && chars.length === word.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && chars.length > 0) {
      t = setTimeout(() => setChars(chars.slice(0, -1)), 38);
    } else {
      setDeleting(false);
      setIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [chars, deleting, idx]);

  return (
    <span className="text-primary font-medium">
      {chars}<span className="animate-pulse opacity-60">|</span>
    </span>
  );
}

// ─── Scanner skill data ───────────────────────────────────────────────────────
// CARD dimensions: 280px wide, image area 360px tall, starts below header (~44px)
// yPct is % of IMAGE area (360px) where the skill should pop out
const SCAN_DURATION = 3000;

const SKILLS = [
  { id: 0, label: 'Content Strategy', side: 'left'  as const, yPct: 14, delay: Math.round(0.14 * SCAN_DURATION) },
  { id: 1, label: 'Web3 Marketing',   side: 'right' as const, yPct: 28, delay: Math.round(0.28 * SCAN_DURATION) },
  { id: 2, label: 'IDO Launches',     side: 'left'  as const, yPct: 46, delay: Math.round(0.46 * SCAN_DURATION) },
  { id: 3, label: 'Community Build',  side: 'right' as const, yPct: 61, delay: Math.round(0.61 * SCAN_DURATION) },
  { id: 4, label: 'SEO & Copy',       side: 'left'  as const, yPct: 75, delay: Math.round(0.75 * SCAN_DURATION) },
  { id: 5, label: 'Storytelling',     side: 'right' as const, yPct: 87, delay: Math.round(0.87 * SCAN_DURATION) },
];

// ─── Skill Badge ──────────────────────────────────────────────────────────────
function SkillBadge({ skill, visible }: { skill: typeof SKILLS[0]; visible: boolean }) {
  const isLeft = skill.side === 'left';
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -12 : 12 }}
      animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -12 : 12 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className="absolute flex items-center"
      style={{
        top: `calc(44px + ${skill.yPct}% * 360px / 100)`, // header(44px) + yPct of image
        [isLeft ? 'right' : 'left']: '100%',
        transform: 'translateY(-50%)',
        flexDirection: isLeft ? 'row' : 'row-reverse',
      }}
    >
      {/* Badge */}
      <div
        className="text-primary text-[9px] font-bold tracking-wider uppercase px-2.5 py-1.5 rounded-lg whitespace-nowrap"
        style={{ background: 'rgba(13,13,26,0.95)', border: '1px solid rgba(249,115,22,0.45)', boxShadow: '0 0 10px rgba(249,115,22,0.15)' }}
      >
        {skill.label}
      </div>
      {/* Dashed connector */}
      <div
        className="w-7 h-px mx-1"
        style={{ backgroundImage: 'repeating-linear-gradient(90deg,rgba(249,115,22,0.55) 0,rgba(249,115,22,0.55) 3px,transparent 3px,transparent 6px)' }}
      />
      {/* Dot */}
      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" style={{ boxShadow: '0 0 5px rgba(249,115,22,0.7)' }} />
    </motion.div>
  );
}

// ─── NFT Scanner Card ─────────────────────────────────────────────────────────
const CARD_W = 280;
const IMG_H  = 360;
const HEADER_H = 44;
const TRAITS_H = 56;
const CARD_H = HEADER_H + IMG_H + TRAITS_H;

function NftScannerCard() {
  const outerRef   = useRef<HTMLDivElement>(null);
  const scanLineEl = useRef<HTMLDivElement>(null);
  const [visibleSkills, setVisibleSkills] = useState<Set<number>>(new Set());

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sp = { damping: 24, stiffness: 150, mass: 0.5 };
  const rx = useSpring(useTransform(mouseY, [-1, 1], [5, -5]), sp);
  const ry = useSpring(useTransform(mouseX, [-1, 1], [-5, 5]), sp);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = outerRef.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set((e.clientX - r.left - r.width / 2) / (r.width / 2));
    mouseY.set((e.clientY - r.top - r.height / 2) / (r.height / 2));
  };
  const onMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  // Scanner loop — fully self-contained in useEffect (no stale closures)
  useEffect(() => {
    const allT: ReturnType<typeof setTimeout>[] = [];

    function startScan() {
      setVisibleSkills(new Set());

      const el = scanLineEl.current;
      if (el) {
        el.style.transition = 'none';
        el.style.top = '0px';
        el.style.opacity = '1';
        requestAnimationFrame(() => {
          if (el) {
            el.style.transition = `top ${SCAN_DURATION}ms linear`;
            el.style.top = `${IMG_H}px`;
          }
        });
      }

      SKILLS.forEach((skill) => {
        const t = setTimeout(() => {
          setVisibleSkills((prev) => {
            const next = new Set(prev);
            next.add(skill.id);
            return next;
          });
        }, skill.delay + 180);
        allT.push(t);
      });

      const endT = setTimeout(() => {
        if (el) el.style.opacity = '0';
        const restartT = setTimeout(startScan, 2600);
        allT.push(restartT);
      }, SCAN_DURATION + 500);
      allT.push(endT);
    }

    const initT = setTimeout(startScan, 700);
    allT.push(initT);

    return () => allT.forEach(clearTimeout);
  }, []);

  return (
    <div
      ref={outerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative flex items-center justify-center"
      style={{ width: CARD_W + 220, height: CARD_H + 20, perspective: 900 }}
    >
      {/* ── Card (centered) ── */}
      <motion.div
        style={{ rotateX: rx, rotateY: ry, width: CARD_W, height: CARD_H }}
        className="relative rounded-2xl overflow-visible flex-shrink-0"
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* Skill badges — rendered relative to card, extend to sides */}
        {SKILLS.map((skill) => (
          <SkillBadge key={skill.id} skill={skill} visible={visibleSkills.has(skill.id)} />
        ))}

        {/* Card interior — clip inside */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(249,115,22,0.25)' }}>

          {/* Background */}
          <div className="absolute inset-0 bg-[#0D0D1A]" />
          {/* Subtle noise */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
            }}
          />

          {/* Header strip */}
          <div className="relative z-10 flex items-center justify-between px-4" style={{ height: HEADER_H }}>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" style={{ animation: 'pulse 2s cubic-bezier(.4,0,.6,1) infinite' }} />
              <span className="text-primary font-bold tracking-[0.18em] uppercase" style={{ fontSize: 9 }}>Abhishek.eth</span>
            </div>
            <span className="font-bold tracking-widest text-white/25 uppercase" style={{ fontSize: 8 }}>NFT · #001</span>
          </div>

          {/* Avatar image + scanner */}
          <div className="relative overflow-hidden" style={{ height: IMG_H }}>
            <img
              src={`${import.meta.env.BASE_URL}images/nft-avatar.png`}
              alt="Abhishek Kumar"
              className="w-full h-full object-cover object-top"
            />

            {/* Scanner line — positioned inside image area */}
            <div
              ref={scanLineEl}
              className="absolute inset-x-0 pointer-events-none"
              style={{ top: 0, height: 48, opacity: 0, zIndex: 10 }}
            >
              {/* glow above line */}
              <div className="absolute inset-x-0 bottom-1/2 h-8"
                style={{ background: 'linear-gradient(to top, rgba(249,115,22,0.18), transparent)' }} />
              {/* the line */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2"
                style={{ height: 1.5, background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.9) 30%, white 50%, rgba(249,115,22,0.9) 70%, transparent)', boxShadow: '0 0 14px 2px rgba(249,115,22,0.6)' }} />
              {/* glow below line */}
              <div className="absolute inset-x-0 top-1/2 h-8"
                style={{ background: 'linear-gradient(to bottom, rgba(249,115,22,0.18), transparent)' }} />
            </div>
          </div>

          {/* Traits strip */}
          <div className="relative z-10 flex items-center px-4 gap-4"
            style={{ height: TRAITS_H, background: 'rgba(8,8,16,0.95)', borderTop: '1px solid rgba(249,115,22,0.12)' }}>
            {[
              { k: 'ROLE', v: 'Web3 Marketer' },
              { k: 'BASE', v: 'Hyderabad' },
              { k: 'EDITION', v: '#001' },
            ].map(t => (
              <div key={t.k} className="flex flex-col">
                <span className="font-bold tracking-widest text-primary/40 uppercase" style={{ fontSize: 7 }}>{t.k}</span>
                <span className="font-semibold text-white/70" style={{ fontSize: 10 }}>{t.v}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: '0 0 90px 10px rgba(249,115,22,0.05)', borderRadius: '24px' }} />
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export function Hero() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center pt-20 overflow-hidden bg-background">
      {/* Dot background — subtle depth, not clunky */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(209,213,219,0.65) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Radial vignette so dots fade at edges */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, white 100%)' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6 min-h-[82vh] py-10 lg:py-0">

          {/* ── LEFT: Text ── */}
          <div className="flex-1 max-w-[520px] w-full">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-px w-7 bg-primary" />
              <span className="text-[11px] font-bold tracking-[0.22em] text-muted-foreground uppercase">Abhishek Kumar</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-display font-black leading-[1.04] text-foreground mb-4"
              style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)' }}
            >
              Where{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Stories</span>{' '}
              Drive Growth.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="text-lg text-muted-foreground mb-3 h-7"
            >
              <TypewriterRole />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="text-[15px] text-muted-foreground leading-relaxed mb-9 max-w-sm"
            >
              Turning blockchain noise into signal — building communities, launching tokens, and crafting narratives that move markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.32 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <Button size="lg" variant="primary" className="rounded-full group" onClick={() => scrollTo('#work')}>
                See My Impact
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-transparent" onClick={() => scrollTo('#contact')}>
                Let's Collaborate
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.44 }}
              className="flex flex-wrap gap-2 items-center"
            >
              <span className="text-[9px] font-bold tracking-widest text-muted-foreground/40 uppercase mr-1">Worked with</span>
              {['Blockwiz', 'KuCoin', 'Glimpse', 'Reneverse', 'Gamestar'].map((b) => (
                <span key={b} className="text-[10px] font-semibold text-muted-foreground/55 border border-border px-2.5 py-1 rounded-full hover:border-primary/40 hover:text-foreground transition-colors cursor-default">
                  {b}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: NFT Scanner Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <NftScannerCard />
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer"
        onClick={() => scrollTo('#about')}
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground/40 font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}>
          <ChevronDown className="w-4 h-4 text-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
