import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ROLES = ['Content Strategist', 'Web3 Marketer', 'Community Builder', 'IDO Specialist', 'Storyteller'];

function TypewriterRole() {
  const [idx, setIdx] = useState(0);
  const [chars, setChars] = useState('');
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = ROLES[idx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && chars.length < word.length) t = setTimeout(() => setChars(word.slice(0, chars.length + 1)), 65);
    else if (!deleting && chars.length === word.length) t = setTimeout(() => setDeleting(true), 2200);
    else if (deleting && chars.length > 0) t = setTimeout(() => setChars(chars.slice(0, -1)), 38);
    else { setDeleting(false); setIdx(i => (i + 1) % ROLES.length); }
    return () => clearTimeout(t!);
  }, [chars, deleting, idx]);
  return <span className="text-primary font-medium">{chars}<span className="animate-pulse opacity-60">|</span></span>;
}

// ─── Layout constants ─────────────────────────────────────────────────────────
const CARD_W   = 280;
const HEADER_H = 42;
const IMG_H    = 370;
const TRAITS_H = 52;
const CARD_H   = HEADER_H + IMG_H + TRAITS_H;
const SIDE_PAD = 155;
const CTR_W    = CARD_W + SIDE_PAD * 2;
const SCAN_DURATION = 3400;

// ─── Skill data ───────────────────────────────────────────────────────────────
type Skill = { id: number; label: string; side: 'left'|'right'; connX: number; connY: number };

const PASS1: Skill[] = [
  { id: 0, label: 'Narrative Architecture', side: 'left',  connX: 0.42, connY: 0.11 },
  { id: 1, label: 'Protocol Positioning',   side: 'right', connX: 0.62, connY: 0.20 },
  { id: 2, label: 'Community Activation',   side: 'left',  connX: 0.35, connY: 0.52 },
  { id: 3, label: 'Launch Comms',           side: 'right', connX: 0.58, connY: 0.40 },
  { id: 4, label: 'Token Storytelling',     side: 'left',  connX: 0.30, connY: 0.72 },
];

const PASS2: Skill[] = [
  { id: 5, label: 'Onchain Education',   side: 'right', connX: 0.55, connY: 0.14 },
  { id: 6, label: 'X-First Content',     side: 'left',  connX: 0.38, connY: 0.32 },
  { id: 7, label: 'Ecosystem Growth',    side: 'right', connX: 0.65, connY: 0.58 },
  { id: 8, label: 'KOL Strategy',        side: 'left',  connX: 0.28, connY: 0.46 },
  { id: 9, label: 'Listing Momentum',    side: 'right', connX: 0.68, connY: 0.78 },
];

// ─── Anatomy SVG ──────────────────────────────────────────────────────────────
function AnatomySvg({ svgRef }: { svgRef: React.Ref<SVGSVGElement> }) {
  return (
    <svg ref={svgRef} width={CARD_W} height={IMG_H} viewBox={`0 0 ${CARD_W} ${IMG_H}`}
      className="absolute inset-0 pointer-events-none" style={{ zIndex: 12, clipPath: 'inset(0 0 100% 0)' }}>
      <defs>
        <filter id="g1"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="g2"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="g3"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>

      <rect x="0" y="0" width={CARD_W} height={IMG_H} fill="rgba(3,3,12,0.78)"/>

      <rect x="6" y="6" width={CARD_W - 12} height={IMG_H - 12} rx="4" fill="none" stroke="rgba(249,115,22,0.15)" strokeWidth="0.5"/>
      <text x="14" y="20" fill="#F97316" opacity="0.4" style={{ fontSize: 7, fontFamily: 'monospace' }}>SCAN::ACTIVE</text>
      <text x={CARD_W - 14} y="20" fill="#F97316" opacity="0.35" style={{ fontSize: 7, fontFamily: 'monospace', textAnchor: 'end' }}>0xAB12...7F</text>
      <text x="14" y={IMG_H - 10} fill="#F97316" opacity="0.3" style={{ fontSize: 6, fontFamily: 'monospace' }}>NEURAL_MAP v2.1</text>

      {Array.from({ length: 12 }).map((_, i) => (
        <line key={`hg${i}`} x1="0" y1={i * 32} x2={CARD_W} y2={i * 32} stroke="#F97316" strokeWidth="0.3" opacity="0.08"/>
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`vg${i}`} x1={i * 32 + 12} y1="0" x2={i * 32 + 12} y2={IMG_H} stroke="#F97316" strokeWidth="0.3" opacity="0.08"/>
      ))}

      <ellipse cx="140" cy="60" rx="56" ry="48" fill="none" stroke="#F97316" strokeWidth="1.2" opacity="0.6" filter="url(#g1)"/>
      <ellipse cx="140" cy="60" rx="56" ry="48" fill="none" stroke="#F97316" strokeWidth="0.5" opacity="0.3" strokeDasharray="3 5"/>
      <path d="M140 12 C138 35 140 55 140 60 C140 65 142 85 140 108" stroke="#F97316" strokeWidth="1" fill="none" opacity="0.55"/>
      <path d="M92 48 Q108 38 122 52 Q115 60 98 56" stroke="#F97316" strokeWidth="0.8" fill="none" opacity="0.45" filter="url(#g1)"/>
      <path d="M88 68 Q106 56 118 72 Q110 78 94 73" stroke="#F97316" strokeWidth="0.8" fill="none" opacity="0.38"/>
      <path d="M92 86 Q110 76 120 90 Q112 96 97 92" stroke="#F97316" strokeWidth="0.7" fill="none" opacity="0.3"/>
      <path d="M188 48 Q172 38 158 52 Q165 60 182 56" stroke="#F97316" strokeWidth="0.8" fill="none" opacity="0.45" filter="url(#g1)"/>
      <path d="M192 68 Q174 56 162 72 Q170 78 186 73" stroke="#F97316" strokeWidth="0.8" fill="none" opacity="0.38"/>
      <path d="M188 86 Q170 76 160 90 Q168 96 183 92" stroke="#F97316" strokeWidth="0.7" fill="none" opacity="0.3"/>

      <circle cx="110" cy="48" r="4" fill="#F97316" opacity="0.85" filter="url(#g2)"/>
      <circle cx="170" cy="48" r="4" fill="#F97316" opacity="0.85" filter="url(#g2)"/>
      <circle cx="140" cy="32" r="3.5" fill="white" opacity="0.7" filter="url(#g3)"/>
      <circle cx="122" cy="74" r="2.5" fill="#F97316" opacity="0.6"/>
      <circle cx="158" cy="74" r="2.5" fill="#F97316" opacity="0.6"/>
      <circle cx="140" cy="96" r="2" fill="#F97316" opacity="0.5"/>
      <path d="M110 48 L140 32 L170 48" stroke="#F97316" strokeWidth="0.8" fill="none" opacity="0.5" strokeDasharray="4 3"/>
      <path d="M122 74 L140 96 L158 74" stroke="#F97316" strokeWidth="0.6" fill="none" opacity="0.35" strokeDasharray="3 3"/>
      <text x="140" y="108" fill="#F97316" opacity="0.3" style={{ fontSize: 6, fontFamily: 'monospace', textAnchor: 'middle' }}>CORTEX</text>

      <ellipse cx="106" cy="120" rx="16" ry="9" fill="none" stroke="#F97316" strokeWidth="0.8" opacity="0.45"/>
      <ellipse cx="174" cy="120" rx="16" ry="9" fill="none" stroke="#F97316" strokeWidth="0.8" opacity="0.45"/>
      <circle cx="106" cy="120" r="4" fill="#F97316" opacity="0.35" filter="url(#g1)"/>
      <circle cx="174" cy="120" r="4" fill="#F97316" opacity="0.35" filter="url(#g1)"/>
      <line x1="86" y1="120" x2="68" y2="120" stroke="#F97316" strokeWidth="0.5" opacity="0.3"/>
      <line x1="194" y1="120" x2="212" y2="120" stroke="#F97316" strokeWidth="0.5" opacity="0.3"/>

      <path d="M140 130 L140 205" stroke="#F97316" strokeWidth="0.8" opacity="0.4" strokeDasharray="4 3"/>
      {[142, 154, 166, 178, 190].map((y, i) => (
        <rect key={i} x="134" y={y - 3} width="12" height="6" rx="1.5" fill="none" stroke="#F97316" strokeWidth="0.7" opacity={0.45 - i * 0.04}/>
      ))}

      {[
        [124, 215, 82, 226, 78, 245],
        [120, 235, 76, 248, 74, 268],
        [118, 252, 74, 267, 72, 287],
        [116, 270, 72, 285, 71, 306],
      ].map((d, i) => (
        <path key={`lr${i}`} d={`M${d[0]} ${d[1]} Q${d[2]} ${d[3]} ${d[4]} ${d[5]}`} stroke="#F97316" strokeWidth="0.8" fill="none" opacity={0.38 - i * 0.06}/>
      ))}
      {[
        [156, 215, 198, 226, 202, 245],
        [160, 235, 204, 248, 206, 268],
        [162, 252, 206, 267, 208, 287],
        [164, 270, 208, 285, 209, 306],
      ].map((d, i) => (
        <path key={`rr${i}`} d={`M${d[0]} ${d[1]} Q${d[2]} ${d[3]} ${d[4]} ${d[5]}`} stroke="#F97316" strokeWidth="0.8" fill="none" opacity={0.38 - i * 0.06}/>
      ))}
      <path d="M140 210 L140 310" stroke="#F97316" strokeWidth="0.7" opacity="0.35" strokeDasharray="5 3"/>

      <path d="M140 248 C140 248 116 233 116 220 C116 210 125 207 132 214 C135 217 138 220 140 222 C142 220 145 217 148 214 C155 207 164 210 164 220 C164 233 140 248 140 248Z"
        fill="rgba(249,115,22,0.1)" stroke="#F97316" strokeWidth="1.4" opacity="0.8" filter="url(#g2)"/>
      <path d="M116 220 L88 210" stroke="#F97316" strokeWidth="0.6" opacity="0.4" strokeDasharray="3 3"/>
      <path d="M164 220 L192 210" stroke="#F97316" strokeWidth="0.6" opacity="0.4" strokeDasharray="3 3"/>
      <circle cx="88" cy="210" r="2.5" fill="#F97316" opacity="0.6" filter="url(#g1)"/>
      <circle cx="192" cy="210" r="2.5" fill="#F97316" opacity="0.6" filter="url(#g1)"/>
      <circle cx="140" cy="234" r="3" fill="white" opacity="0.55" filter="url(#g3)"/>
      <text x="140" y="260" fill="#F97316" opacity="0.3" style={{ fontSize: 6, fontFamily: 'monospace', textAnchor: 'middle' }}>CARDIAC</text>

      {[
        [95, 310], [115, 296], [140, 318], [165, 296], [185, 310],
        [82, 340], [120, 336], [140, 348], [160, 336], [198, 340],
      ].map(([cx, cy], i) => (
        <circle key={`n${i}`} cx={cx} cy={cy} r={2 + (i % 3) * 0.5} fill="#F97316" opacity={0.5 - i * 0.02} filter="url(#g1)"/>
      ))}
      <path d="M95 310 L115 296 L140 318 L165 296 L185 310" stroke="#F97316" strokeWidth="0.6" fill="none" opacity="0.3" strokeDasharray="3 3"/>
      <path d="M82 340 L120 336 L140 348 L160 336 L198 340" stroke="#F97316" strokeWidth="0.5" fill="none" opacity="0.25" strokeDasharray="3 3"/>
      <path d="M95 310 L82 340 M115 296 L120 336 M140 318 L140 348 M165 296 L160 336 M185 310 L198 340" stroke="#F97316" strokeWidth="0.4" fill="none" opacity="0.2"/>
    </svg>
  );
}

// ─── NFT Scanner Card ─────────────────────────────────────────────────────────
function NftScannerCard() {
  const outerRef   = useRef<HTMLDivElement>(null);
  const scanLineEl = useRef<HTMLDivElement>(null);
  const anatomyRef = useRef<SVGSVGElement>(null);
  const rafRef     = useRef(0);
  const [activeSkills, setActiveSkills] = useState<Skill[]>([]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sp = { damping: 20, stiffness: 120, mass: 0.6 };
  const rx = useSpring(useTransform(mouseY, [-1, 1], [8, -8]), sp);
  const ry = useSpring(useTransform(mouseX, [-1, 1], [-8, 8]), sp);

  const onMouseMove = (e: React.MouseEvent) => {
    const r = outerRef.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set((e.clientX - r.left - r.width / 2) / (r.width / 2));
    mouseY.set((e.clientY - r.top - r.height / 2) / (r.height / 2));
  };
  const onMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    function setClip(yPx: number) {
      if (!anatomyRef.current) return;
      const W = 85;
      const top = Math.max(0, yPx - W);
      const bottom = Math.max(0, IMG_H - yPx - W);
      anatomyRef.current.style.clipPath = `inset(${top}px 0 ${bottom}px 0)`;
    }

    function scan(skills: Skill[], onDone: () => void) {
      setActiveSkills([]);
      const el = scanLineEl.current;
      if (el) { el.style.transition = 'none'; el.style.top = '0px'; el.style.opacity = '1'; }

      let start: number | null = null;
      const revealed = new Set<number>();

      function frame(now: number) {
        if (!start) start = now;
        const p = Math.min((now - start) / SCAN_DURATION, 1);
        const yPx = p * IMG_H;
        if (el) el.style.top = `${yPx}px`;
        setClip(yPx);

        skills.forEach(s => {
          if (!revealed.has(s.id) && p >= s.connY - 0.02) {
            revealed.add(s.id);
            setActiveSkills(prev => [...prev, s]);
          }
        });

        if (p < 1) { rafRef.current = requestAnimationFrame(frame); }
        else {
          if (el) el.style.opacity = '0';
          setClip(-200);
          onDone();
        }
      }
      rafRef.current = requestAnimationFrame(frame);
    }

    function cycle() {
      scan(PASS1, () => {
        const t1 = setTimeout(() => {
          scan(PASS2, () => {
            const t2 = setTimeout(cycle, 2200);
            timers.push(t2);
          });
        }, 1200);
        timers.push(t1);
      });
    }

    const init = setTimeout(cycle, 1000);
    timers.push(init);
    return () => { timers.forEach(clearTimeout); cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <div
      ref={outerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative select-none"
      style={{ width: CTR_W, height: CARD_H, perspective: 900 }}
    >
      {/* Card with hover tilt */}
      <motion.div
        style={{
          rotateX: rx, rotateY: ry,
          position: 'absolute', left: SIDE_PAD, top: 0,
          width: CARD_W, height: CARD_H,
          transformStyle: 'preserve-3d',
        }}
        className="rounded-2xl"
      >
        <div className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(249,115,22,0.3)' }}>
          <div className="absolute inset-0 bg-[#0D0D1A]"/>
          <div className="relative z-10 flex items-center justify-between px-4" style={{ height: HEADER_H }}>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"/>
              <span className="text-primary font-bold tracking-[0.18em] uppercase" style={{ fontSize: 9 }}>Abhishek.eth</span>
            </div>
            <span className="font-bold tracking-widest text-white/25 uppercase" style={{ fontSize: 8 }}>NFT · #001</span>
          </div>

          <div className="relative overflow-hidden" style={{ height: IMG_H }}>
            <img
              src={`${import.meta.env.BASE_URL}images/nft-avatar.png`}
              alt="Abhishek Kumar"
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{ zIndex: 1 }}
            />
            <AnatomySvg svgRef={anatomyRef}/>
            <div ref={scanLineEl} className="absolute inset-x-0 pointer-events-none"
              style={{ top: 0, height: 64, opacity: 0, zIndex: 15 }}>
              <div className="absolute inset-x-0 bottom-1/2 h-12"
                style={{ background: 'linear-gradient(to top, rgba(249,115,22,0.25), transparent)' }}/>
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2"
                style={{ height: 2, background: 'linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.85) 20%, white 50%, rgba(249,115,22,0.85) 80%, transparent 100%)', boxShadow: '0 0 18px 4px rgba(249,115,22,0.7)' }}/>
              <div className="absolute inset-x-0 top-1/2 h-12"
                style={{ background: 'linear-gradient(to bottom, rgba(249,115,22,0.25), transparent)' }}/>
            </div>
          </div>

          <div className="relative z-10 flex items-center px-4 gap-4"
            style={{ height: TRAITS_H, background: 'rgba(6,6,14,0.97)', borderTop: '1px solid rgba(249,115,22,0.15)' }}>
            {[{ k: 'ROLE', v: 'Web3 Marketer' }, { k: 'BASE', v: 'Hyderabad' }, { k: 'EDITION', v: '#001' }].map(t => (
              <div key={t.k} className="flex flex-col">
                <span className="font-bold tracking-widest text-primary/40 uppercase" style={{ fontSize: 7 }}>{t.k}</span>
                <span className="font-semibold text-white/75" style={{ fontSize: 10 }}>{t.v}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Connector lines + target dots + skill badges — all in outer container coords */}
      <svg width={CTR_W} height={CARD_H} className="absolute inset-0 pointer-events-none" style={{ zIndex: 25, overflow: 'visible' }}>
        {activeSkills.map(s => {
          const tx = SIDE_PAD + s.connX * CARD_W;
          const ty = HEADER_H + s.connY * IMG_H;
          const edgeX = s.side === 'left' ? SIDE_PAD : SIDE_PAD + CARD_W;
          const badgeX = s.side === 'left' ? SIDE_PAD - 12 : SIDE_PAD + CARD_W + 12;

          return (
            <g key={s.id} className="skill-connector" style={{ animation: 'fadeIn 0.35s ease-out forwards' }}>
              <line x1={badgeX} y1={ty} x2={edgeX} y2={ty} stroke="rgba(249,115,22,0.5)" strokeWidth="1" strokeDasharray="4 3"/>
              <line x1={edgeX} y1={ty} x2={tx} y2={ty} stroke="rgba(249,115,22,0.6)" strokeWidth="1" strokeDasharray="3 2"/>
              <circle cx={tx} cy={ty} r="5" fill="none" stroke="#F97316" strokeWidth="1" opacity="0.5">
                <animate attributeName="r" values="5;8;5" dur="1.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.5;0.2;0.5" dur="1.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx={tx} cy={ty} r="3" fill="#F97316" opacity="0.9" filter="url(#g1)"/>
            </g>
          );
        })}
      </svg>

      {/* Skill badges */}
      {activeSkills.map(s => {
        const ty = HEADER_H + s.connY * IMG_H;
        const isLeft = s.side === 'left';
        return (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, x: isLeft ? -14 : 14, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute"
            style={{
              top: ty,
              [isLeft ? 'left' : 'right']: 0,
              transform: 'translateY(-50%)',
              zIndex: 30,
            }}
          >
            <div
              className="text-[9px] font-bold tracking-wider uppercase px-2.5 py-1.5 rounded-md whitespace-nowrap"
              style={{
                color: '#F97316',
                background: 'rgba(8,8,18,0.96)',
                border: '1px solid rgba(249,115,22,0.5)',
                boxShadow: '0 0 12px rgba(249,115,22,0.25), inset 0 0 8px rgba(249,115,22,0.08)',
              }}
            >
              {s.label}
            </div>
          </motion.div>
        );
      })}

      <div className="absolute pointer-events-none" style={{
        left: SIDE_PAD - 20, right: SIDE_PAD - 20, top: -10, bottom: -10,
        boxShadow: '0 0 100px 15px rgba(249,115,22,0.06)', borderRadius: 24,
      }}/>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export function Hero() {
  const scrollTo = (h: string) => document.querySelector(h)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center pt-20 overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(156,163,175,0.5) 1px, transparent 1px)', backgroundSize: '22px 22px' }}/>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, hsl(var(--background)) 100%)' }}/>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4 min-h-[84vh] py-12 lg:py-0">

          <div className="flex-1 max-w-[520px] w-full">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
              className="flex items-center gap-3 mb-5">
              <span className="h-px w-7 bg-primary flex-shrink-0"/>
              <span className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
                Content, Narrative &amp; Growth | Web3
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-display font-black leading-[1.06] text-foreground mb-5"
              style={{ fontSize: 'clamp(2.1rem, 4vw, 3.5rem)' }}>
              I turn protocol complexity into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">narratives</span>{' '}
              communities can rally around.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="text-[15px] text-muted-foreground leading-relaxed mb-9 max-w-[440px]">
              From launch messaging and X-first content to ecosystem education and community activation,
              I help Web3 projects earn attention, build trust, and convert hype into sustained participation.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="flex flex-wrap items-center gap-3 mb-9">
              <Button size="lg" variant="primary" className="rounded-full group" onClick={() => scrollTo('#work')}>
                View Case Studies <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
              </Button>
              <a href="/resume.pdf" download
                className="inline-flex items-center gap-2 text-sm font-semibold border border-border px-5 py-2.5 rounded-full hover:border-primary/50 hover:text-primary transition-colors">
                <Download className="w-4 h-4"/> Download Resume
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-2 items-center">
              <span className="text-[9px] font-bold tracking-widest text-muted-foreground/40 uppercase mr-1">Worked with</span>
              {['Blockwiz', 'KuCoin', 'Glimpse', 'Reneverse', 'Gamestar'].map(b => (
                <span key={b} className="text-[10px] font-semibold text-muted-foreground/50 border border-border px-2.5 py-1 rounded-full hover:border-primary/40 hover:text-foreground transition-colors cursor-default">
                  {b}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0">
            <NftScannerCard/>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer"
        onClick={() => scrollTo('#about')}>
        <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground/40 font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}>
          <ChevronDown className="w-4 h-4 text-primary/50"/>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        .skill-connector { opacity: 0; animation: fadeIn 0.35s ease-out forwards; }
      `}</style>
    </section>
  );
}
