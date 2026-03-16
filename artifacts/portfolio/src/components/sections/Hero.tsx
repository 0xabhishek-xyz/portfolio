import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';
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

// ─── Skill data — two passes of 5 ────────────────────────────────────────────
// connX/connY: where the line touches the avatar (0–1 of image area)
// side: which side the badge floats on
// yPct: % of image height when the scanner triggers this badge

const SCAN_DURATION = 3200;

const PASS1: {
  id: number; label: string; side: 'left' | 'right';
  connX: number; connY: number; yPct: number;
}[] = [
  { id: 0, label: 'Narrative Architecture', side: 'left',  connX: 0.30, connY: 0.13, yPct: 13 },
  { id: 1, label: 'Protocol Positioning',   side: 'right', connX: 0.68, connY: 0.22, yPct: 22 },
  { id: 2, label: 'Community Activation',   side: 'left',  connX: 0.28, connY: 0.54, yPct: 54 },
  { id: 3, label: 'Launch Comms',           side: 'right', connX: 0.60, connY: 0.43, yPct: 43 },
  { id: 4, label: 'Token Storytelling',     side: 'left',  connX: 0.25, connY: 0.74, yPct: 74 },
];

const PASS2: {
  id: number; label: string; side: 'left' | 'right';
  connX: number; connY: number; yPct: number;
}[] = [
  { id: 5, label: 'Onchain Education',   side: 'right', connX: 0.65, connY: 0.16, yPct: 16 },
  { id: 6, label: 'X-First Content',     side: 'left',  connX: 0.32, connY: 0.37, yPct: 37 },
  { id: 7, label: 'Ecosystem Growth',    side: 'right', connX: 0.70, connY: 0.58, yPct: 58 },
  { id: 8, label: 'KOL Strategy',        side: 'left',  connX: 0.20, connY: 0.66, yPct: 66 },
  { id: 9, label: 'Listing Momentum',    side: 'right', connX: 0.72, connY: 0.82, yPct: 82 },
];

// Card layout constants
const CARD_W   = 280;
const HEADER_H = 44;
const IMG_H    = 360;
const TRAITS_H = 56;
const CARD_H   = HEADER_H + IMG_H + TRAITS_H;
const SIDE_PAD = 148; // px each side for badges
const CTR_W    = CARD_W + SIDE_PAD * 2;

// ─── Anatomy SVG overlay (X-ray effect) ──────────────────────────────────────
function AnatomySvg({ svgRef }: { svgRef: React.Ref<SVGSVGElement> }) {
  return (
    <svg
      ref={svgRef}
      width={CARD_W}
      height={IMG_H}
      viewBox={`0 0 ${CARD_W} ${IMG_H}`}
      className="absolute inset-0 pointer-events-none z-10"
      style={{ clipPath: 'inset(0px 0px 360px 0px)' }} // hidden by default
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="glow-strong">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── Brain region (head ~y 0–130) ── */}
      {/* Skull outline */}
      <ellipse cx="140" cy="62" rx="58" ry="50" fill="none" stroke="#F97316" strokeWidth="1.2" opacity="0.75" filter="url(#glow)"/>
      {/* Hemisphere split */}
      <path d="M 140 12 Q 137 42 140 62 Q 143 82 140 112" stroke="#F97316" strokeWidth="0.9" fill="none" opacity="0.65"/>
      {/* Left hemisphere folds */}
      <path d="M 90 55 Q 105 44 118 58" stroke="#F97316" strokeWidth="0.9" fill="none" opacity="0.55"/>
      <path d="M 87 72 Q 104 62 115 76" stroke="#F97316" strokeWidth="0.9" fill="none" opacity="0.45"/>
      <path d="M 92 88 Q 108 80 116 94" stroke="#F97316" strokeWidth="0.9" fill="none" opacity="0.4"/>
      {/* Right hemisphere folds */}
      <path d="M 190 55 Q 175 44 162 58" stroke="#F97316" strokeWidth="0.9" fill="none" opacity="0.55"/>
      <path d="M 193 72 Q 176 62 165 76" stroke="#F97316" strokeWidth="0.9" fill="none" opacity="0.45"/>
      <path d="M 188 88 Q 172 80 164 94" stroke="#F97316" strokeWidth="0.9" fill="none" opacity="0.4"/>
      {/* Circuit nodes on brain */}
      <circle cx="108" cy="52" r="3.5" fill="#F97316" opacity="0.9" filter="url(#glow)"/>
      <circle cx="172" cy="52" r="3.5" fill="#F97316" opacity="0.9" filter="url(#glow)"/>
      <circle cx="140" cy="38" r="3"   fill="#F97316" opacity="0.95" filter="url(#glow-strong)"/>
      <circle cx="120" cy="80" r="2.5" fill="#F97316" opacity="0.7"/>
      <circle cx="160" cy="80" r="2.5" fill="#F97316" opacity="0.7"/>
      <circle cx="140" cy="100" r="2"  fill="#F97316" opacity="0.6"/>
      {/* Connecting circuit lines */}
      <path d="M 108 52 L 140 38 L 172 52" stroke="#F97316" strokeWidth="0.7" fill="none" opacity="0.5" strokeDasharray="3 2"/>
      <path d="M 120 80 L 140 100 L 160 80" stroke="#F97316" strokeWidth="0.7" fill="none" opacity="0.4" strokeDasharray="3 2"/>

      {/* ── Eye level (y ~110–145) ── */}
      {/* Eye socket glows */}
      <ellipse cx="103" cy="124" rx="18" ry="10" fill="none" stroke="#F97316" strokeWidth="0.8" opacity="0.5"/>
      <ellipse cx="177" cy="124" rx="18" ry="10" fill="none" stroke="#F97316" strokeWidth="0.8" opacity="0.5"/>
      <circle cx="103" cy="124" r="5" fill="#F97316" opacity="0.4" filter="url(#glow)"/>
      <circle cx="177" cy="124" r="5" fill="#F97316" opacity="0.4" filter="url(#glow)"/>
      {/* Scan lines through eye region */}
      <path d="M 60 128 L 220 128" stroke="#F97316" strokeWidth="0.5" opacity="0.25" strokeDasharray="6 4"/>

      {/* ── Spine / neck (y ~150–210) ── */}
      <path d="M 140 135 L 140 210" stroke="#F97316" strokeWidth="1" opacity="0.45" strokeDasharray="4 3"/>
      {/* Neck vertebrae */}
      {[150, 163, 176, 189, 202].map((y, i) => (
        <rect key={i} x="133" y={y - 4} width="14" height="7" rx="2" fill="none" stroke="#F97316" strokeWidth="0.8" opacity="0.4"/>
      ))}

      {/* ── Heart (chest ~y 215–265) ── */}
      {/* Rib cage */}
      <path d="M 120 218 Q 78 228 76 248" stroke="#F97316" strokeWidth="0.9" fill="none" opacity="0.38"/>
      <path d="M 115 238 Q 74 250 72 270" stroke="#F97316" strokeWidth="0.9" fill="none" opacity="0.32"/>
      <path d="M 113 258 Q 72 272 71 292" stroke="#F97316" strokeWidth="0.9" fill="none" opacity="0.25"/>
      <path d="M 160 218 Q 202 228 204 248" stroke="#F97316" strokeWidth="0.9" fill="none" opacity="0.38"/>
      <path d="M 165 238 Q 206 250 208 270" stroke="#F97316" strokeWidth="0.9" fill="none" opacity="0.32"/>
      <path d="M 167 258 Q 208 272 209 292" stroke="#F97316" strokeWidth="0.9" fill="none" opacity="0.25"/>
      {/* Sternum */}
      <path d="M 140 215 L 140 300" stroke="#F97316" strokeWidth="0.9" opacity="0.4" strokeDasharray="5 3"/>
      {/* Heart shape */}
      <path d="M 140 250 C 140 250 112 232 112 218 C 112 207 124 204 132 212 C 135 215 138 218 140 221 C 142 218 145 215 148 212 C 156 204 168 207 168 218 C 168 232 140 250 140 250 Z"
        fill="none" stroke="#F97316" strokeWidth="1.4" opacity="0.82" filter="url(#glow)"/>
      {/* Heart circuit lines */}
      <path d="M 112 218 L 82 208 M 168 218 L 198 208" stroke="#F97316" strokeWidth="0.7" opacity="0.45" strokeDasharray="3 3"/>
      <circle cx="82" cy="208" r="2.5" fill="#F97316" opacity="0.7"/>
      <circle cx="198" cy="208" r="2.5" fill="#F97316" opacity="0.7"/>
      <circle cx="140" cy="236" r="3" fill="#F97316" opacity="0.8" filter="url(#glow)"/>

      {/* ── Network nodes (lower body ~y 290–360) ── */}
      {[
        [90, 310], [110, 295], [140, 315], [170, 295], [190, 310],
        [80, 340], [130, 335], [150, 345], [200, 338],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.5" fill="#F97316" opacity="0.45"/>
      ))}
      <path d="M 90 310 L 110 295 L 140 315 L 170 295 L 190 310" stroke="#F97316" strokeWidth="0.6" fill="none" opacity="0.3" strokeDasharray="3 3"/>
      <path d="M 80 340 L 130 335 L 150 345 L 200 338" stroke="#F97316" strokeWidth="0.6" fill="none" opacity="0.28" strokeDasharray="3 3"/>
      <path d="M 90 310 L 80 340 M 140 315 L 130 335 L 150 345 M 190 310 L 200 338" stroke="#F97316" strokeWidth="0.5" fill="none" opacity="0.25"/>

      {/* Overall scan tint */}
      <rect x="0" y="0" width={CARD_W} height={IMG_H} fill="rgba(249,115,22,0.04)" />
    </svg>
  );
}

// ─── Connector Lines SVG ──────────────────────────────────────────────────────
function ConnectorLines({ visiblePass1, visiblePass2 }: { visiblePass1: Set<number>; visiblePass2: Set<number> }) {
  const allSkills = [...PASS1, ...PASS2];
  const visible = new Set([...visiblePass1, ...visiblePass2]);

  return (
    <svg
      width={CTR_W}
      height={CARD_H}
      viewBox={`0 0 ${CTR_W} ${CARD_H}`}
      className="absolute inset-0 pointer-events-none"
      style={{ left: -SIDE_PAD, top: 0, zIndex: 20, overflow: 'visible' }}
    >
      {allSkills.map((skill) => {
        if (!visible.has(skill.id)) return null;
        const connPx  = SIDE_PAD + skill.connX * CARD_W;
        const connPy  = HEADER_H + skill.connY * IMG_H;
        const badgeCy = HEADER_H + skill.connY * IMG_H;
        const badgeCx = skill.side === 'left' ? SIDE_PAD - 8 : SIDE_PAD + CARD_W + 8;

        return (
          <motion.g key={skill.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}>
            {/* Dashed line from badge to connection point */}
            <line
              x1={badgeCx} y1={badgeCy}
              x2={connPx}  y2={connPy}
              stroke="rgba(249,115,22,0.45)"
              strokeWidth="1"
              strokeDasharray="4 3"
            />
            {/* Connection dot on avatar */}
            <circle cx={connPx} cy={connPy} r="3.5" fill="#F97316" opacity="0.9"/>
            <circle cx={connPx} cy={connPy} r="6"   fill="transparent" stroke="#F97316" strokeWidth="0.8" opacity="0.5"/>
          </motion.g>
        );
      })}
    </svg>
  );
}

// ─── NFT Scanner Card ─────────────────────────────────────────────────────────
function NftScannerCard() {
  const outerRef    = useRef<HTMLDivElement>(null);
  const scanLineEl  = useRef<HTMLDivElement>(null);
  const anatomyRef  = useRef<SVGSVGElement>(null);
  const rafRef      = useRef<number>(0);
  const [visibleP1, setVisibleP1] = useState<Set<number>>(new Set());
  const [visibleP2, setVisibleP2] = useState<Set<number>>(new Set());

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

  // Scanner + anatomy reveal engine
  useEffect(() => {
    const allT: ReturnType<typeof setTimeout>[] = [];
    const WINDOW = 80; // anatomy reveal window half-height in px

    function setClip(yPx: number) {
      if (!anatomyRef.current) return;
      const top    = Math.max(0, yPx - WINDOW);
      const bottom = Math.max(0, IMG_H - yPx - WINDOW);
      anatomyRef.current.style.clipPath = `inset(${top}px 0px ${bottom}px 0px)`;
    }

    function runPass(pass: 1 | 2, onDone: () => void) {
      const skills = pass === 1 ? PASS1 : PASS2;
      const setVisible = pass === 1 ? setVisibleP1 : setVisibleP2;

      // Reset visible for this pass
      setVisible(new Set());

      // Animate scan line top from 0 to IMG_H
      const el = scanLineEl.current;
      if (el) {
        el.style.transition = 'none';
        el.style.top = '0px';
        el.style.opacity = '1';
      }

      let startTime: number | null = null;
      function animFrame(now: number) {
        if (!startTime) startTime = now;
        const elapsed  = now - startTime;
        const progress = Math.min(elapsed / SCAN_DURATION, 1);
        const yPx      = progress * IMG_H;

        // Move scan line
        if (el) el.style.top = `${yPx}px`;

        // Reveal anatomy
        setClip(yPx);

        rafRef.current = requestAnimationFrame(animFrame);

        if (progress >= 1) {
          cancelAnimationFrame(rafRef.current);
          if (el) el.style.opacity = '0';
          setClip(-WINDOW); // hide anatomy
          onDone();
        }
      }

      // Schedule skill reveals based on yPct thresholds
      skills.forEach((skill) => {
        const delay = Math.round((skill.yPct / 100) * SCAN_DURATION);
        const t = setTimeout(() => {
          setVisible((prev) => {
            const next = new Set(prev);
            next.add(skill.id);
            return next;
          });
        }, delay + 160);
        allT.push(t);
      });

      rafRef.current = requestAnimationFrame(animFrame);
    }

    function startCycle() {
      // Pass 1
      runPass(1, () => {
        // Brief pause, then Pass 2
        const t = setTimeout(() => {
          runPass(2, () => {
            // Long pause, then reset & repeat
            const t2 = setTimeout(() => {
              setVisibleP1(new Set());
              setVisibleP2(new Set());
              const t3 = setTimeout(startCycle, 400);
              allT.push(t3);
            }, 2800);
            allT.push(t2);
          });
        }, 600);
        allT.push(t);
      });
    }

    const initT = setTimeout(startCycle, 900);
    allT.push(initT);

    return () => {
      allT.forEach(clearTimeout);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={outerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative"
      style={{ width: CTR_W, height: CARD_H }}
    >
      {/* Connector lines SVG spans full container */}
      <div style={{ position: 'absolute', left: 0, top: 0, width: CTR_W, height: CARD_H }}>
        <ConnectorLines visiblePass1={visibleP1} visiblePass2={visibleP2} />
      </div>

      {/* Skill badges — Pass 1 */}
      {PASS1.map((skill) => {
        const isLeft  = skill.side === 'left';
        const topPx   = HEADER_H + skill.connY * IMG_H;
        return (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, x: isLeft ? -10 : 10 }}
            animate={visibleP1.has(skill.id) ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -10 : 10 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="absolute flex items-center"
            style={{
              top: topPx,
              [isLeft ? 'left' : 'right']: 0,
              transform: 'translateY(-50%)',
              flexDirection: isLeft ? 'row' : 'row-reverse',
              zIndex: 30,
            }}
          >
            <div
              className="text-primary text-[9px] font-bold tracking-wider uppercase px-2 py-1.5 rounded-md whitespace-nowrap"
              style={{
                background: 'rgba(10,10,20,0.96)',
                border: '1px solid rgba(249,115,22,0.5)',
                boxShadow: '0 0 10px rgba(249,115,22,0.2)',
              }}
            >
              {skill.label}
            </div>
          </motion.div>
        );
      })}

      {/* Skill badges — Pass 2 */}
      {PASS2.map((skill) => {
        const isLeft  = skill.side === 'left';
        const topPx   = HEADER_H + skill.connY * IMG_H;
        return (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, x: isLeft ? -10 : 10 }}
            animate={visibleP2.has(skill.id) ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -10 : 10 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="absolute flex items-center"
            style={{
              top: topPx,
              [isLeft ? 'left' : 'right']: 0,
              transform: 'translateY(-50%)',
              flexDirection: isLeft ? 'row' : 'row-reverse',
              zIndex: 30,
            }}
          >
            <div
              className="text-primary text-[9px] font-bold tracking-wider uppercase px-2 py-1.5 rounded-md whitespace-nowrap"
              style={{
                background: 'rgba(10,10,20,0.96)',
                border: '1px solid rgba(249,115,22,0.5)',
                boxShadow: '0 0 10px rgba(249,115,22,0.2)',
              }}
            >
              {skill.label}
            </div>
          </motion.div>
        );
      })}

      {/* Card — centered within CTR_W container */}
      <motion.div
        style={{
          rotateX: rx, rotateY: ry,
          width: CARD_W, height: CARD_H,
          position: 'absolute',
          left: SIDE_PAD, top: 0,
        }}
        className="overflow-visible rounded-2xl"
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* Card interior (clips inside) */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ boxShadow: '0 24px 70px rgba(0,0,0,0.5), 0 0 0 1px rgba(249,115,22,0.28)' }}
        >
          {/* Dark bg */}
          <div className="absolute inset-0 bg-[#0D0D1A]" />

          {/* Header bar */}
          <div
            className="relative z-10 flex items-center justify-between px-4"
            style={{ height: HEADER_H }}
          >
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
              <span className="text-primary font-bold tracking-[0.18em] uppercase" style={{ fontSize: 9 }}>Abhishek.eth</span>
            </div>
            <span className="font-bold tracking-widest text-white/25 uppercase" style={{ fontSize: 8 }}>NFT · #001</span>
          </div>

          {/* Avatar + anatomy reveal */}
          <div className="relative overflow-hidden" style={{ height: IMG_H }}>
            {/* Avatar image */}
            <img
              src={`${import.meta.env.BASE_URL}images/nft-avatar.png`}
              alt="Abhishek Kumar"
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{ zIndex: 1 }}
            />

            {/* Anatomy SVG — clipped to reveal window */}
            <AnatomySvg svgRef={anatomyRef} />

            {/* Scanner line — travels via direct DOM update */}
            <div
              ref={scanLineEl}
              className="absolute inset-x-0 pointer-events-none"
              style={{ top: 0, height: 56, opacity: 0, zIndex: 15 }}
            >
              <div className="absolute inset-x-0 bottom-1/2 h-10"
                style={{ background: 'linear-gradient(to top, rgba(249,115,22,0.22), transparent)' }} />
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2"
                style={{ height: 2, background: 'linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.8) 25%, white 50%, rgba(249,115,22,0.8) 75%, transparent 100%)', boxShadow: '0 0 16px 3px rgba(249,115,22,0.65)' }} />
              <div className="absolute inset-x-0 top-1/2 h-10"
                style={{ background: 'linear-gradient(to bottom, rgba(249,115,22,0.22), transparent)' }} />
            </div>
          </div>

          {/* Traits strip */}
          <div
            className="relative z-10 flex items-center px-4 gap-4"
            style={{ height: TRAITS_H, background: 'rgba(8,8,16,0.97)', borderTop: '1px solid rgba(249,115,22,0.15)' }}
          >
            {[
              { k: 'ROLE', v: 'Web3 Marketer' },
              { k: 'BASE', v: 'Hyderabad' },
              { k: 'EDITION', v: '#001' },
            ].map((t) => (
              <div key={t.k} className="flex flex-col">
                <span className="font-bold tracking-widest text-primary/40 uppercase" style={{ fontSize: 7 }}>{t.k}</span>
                <span className="font-semibold text-white/75" style={{ fontSize: 10 }}>{t.v}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none rounded-3xl"
        style={{
          inset: 0,
          left: SIDE_PAD - 20,
          right: SIDE_PAD - 20,
          boxShadow: '0 0 100px 15px rgba(249,115,22,0.07)',
        }}
      />
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export function Hero() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center pt-20 overflow-hidden bg-background">

      {/* Dot background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(156,163,175,0.55) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      {/* Vignette to fade dots at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 35%, hsl(var(--background)) 100%)' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4 min-h-[84vh] py-12 lg:py-0">

          {/* ── LEFT: Text ── */}
          <div className="flex-1 max-w-[520px] w-full">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-px w-7 bg-primary flex-shrink-0" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
                Content, Narrative &amp; Growth | Web3
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-display font-black leading-[1.06] text-foreground mb-5"
              style={{ fontSize: 'clamp(2.1rem, 4vw, 3.5rem)' }}
            >
              I turn protocol complexity into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                narratives
              </span>{' '}
              communities can rally around.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="text-[15px] text-muted-foreground leading-relaxed mb-9 max-w-[440px]"
            >
              From launch messaging and X-first content to ecosystem education and community activation, I help Web3 projects earn attention, build trust, and convert hype into sustained participation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="flex flex-wrap items-center gap-3 mb-9"
            >
              <Button
                size="lg"
                variant="primary"
                className="rounded-full group"
                onClick={() => scrollTo('#work')}
              >
                View Case Studies
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 text-sm font-semibold border border-border px-5 py-2.5 rounded-full hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>

            {/* Brand pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-2 items-center"
            >
              <span className="text-[9px] font-bold tracking-widest text-muted-foreground/40 uppercase mr-1">Worked with</span>
              {['Blockwiz', 'KuCoin', 'Glimpse', 'Reneverse', 'Gamestar'].map((b) => (
                <span key={b} className="text-[10px] font-semibold text-muted-foreground/50 border border-border px-2.5 py-1 rounded-full hover:border-primary/40 hover:text-foreground transition-colors cursor-default">
                  {b}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: NFT Scanner Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <NftScannerCard />
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
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
