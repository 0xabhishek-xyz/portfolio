import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CARD_W = 280;
const HEADER_H = 42;
const IMG_H = 370;
const TRAITS_H = 52;
const CARD_H = HEADER_H + IMG_H + TRAITS_H;
const SIDE_PAD = 155;
const CTR_W = CARD_W + SIDE_PAD * 2;
const SCAN_MS = 3200;

type Skill = { id: number; label: string; side: 'left' | 'right'; connX: number; connY: number };

const PASS1: Skill[] = [
  { id: 0, label: 'Narrative Architecture', side: 'left', connX: 0.42, connY: 0.12 },
  { id: 1, label: 'Protocol Positioning', side: 'right', connX: 0.62, connY: 0.22 },
  { id: 2, label: 'Community Activation', side: 'left', connX: 0.35, connY: 0.50 },
  { id: 3, label: 'Launch Comms', side: 'right', connX: 0.58, connY: 0.40 },
  { id: 4, label: 'Token Storytelling', side: 'left', connX: 0.30, connY: 0.72 },
];

const PASS2: Skill[] = [
  { id: 5, label: 'Onchain Education', side: 'right', connX: 0.55, connY: 0.14 },
  { id: 6, label: 'X-First Content', side: 'left', connX: 0.38, connY: 0.32 },
  { id: 7, label: 'Ecosystem Growth', side: 'right', connX: 0.65, connY: 0.56 },
  { id: 8, label: 'KOL Strategy', side: 'left', connX: 0.28, connY: 0.46 },
  { id: 9, label: 'Listing Momentum', side: 'right', connX: 0.68, connY: 0.76 },
];

function HudOverlay({ svgRef }: { svgRef: React.Ref<SVGSVGElement> }) {
  return (
    <svg ref={svgRef} width={CARD_W} height={IMG_H} viewBox={`0 0 ${CARD_W} ${IMG_H}`}
      className="absolute inset-0 pointer-events-none" style={{ zIndex: 14, opacity: 0 }}>
      <defs>
        <filter id="glow"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="glowSoft"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>

      {Array.from({ length: 15 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 26} x2={CARD_W} y2={i * 26} stroke="#F97316" strokeWidth="0.3" opacity="0.06"/>
      ))}
      {Array.from({ length: 11 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 28} y1="0" x2={i * 28} y2={IMG_H} stroke="#F97316" strokeWidth="0.3" opacity="0.06"/>
      ))}

      <rect x="8" y="8" width={CARD_W - 16} height={IMG_H - 16} rx="3" fill="none" stroke="rgba(249,115,22,0.12)" strokeWidth="0.5"/>
      <line x1="8" y1="8" x2="28" y2="8" stroke="#F97316" strokeWidth="1.2" opacity="0.5"/>
      <line x1="8" y1="8" x2="8" y2="28" stroke="#F97316" strokeWidth="1.2" opacity="0.5"/>
      <line x1={CARD_W - 8} y1="8" x2={CARD_W - 28} y2="8" stroke="#F97316" strokeWidth="1.2" opacity="0.5"/>
      <line x1={CARD_W - 8} y1="8" x2={CARD_W - 8} y2="28" stroke="#F97316" strokeWidth="1.2" opacity="0.5"/>
      <line x1="8" y1={IMG_H - 8} x2="28" y2={IMG_H - 8} stroke="#F97316" strokeWidth="1.2" opacity="0.5"/>
      <line x1="8" y1={IMG_H - 8} x2="8" y2={IMG_H - 28} stroke="#F97316" strokeWidth="1.2" opacity="0.5"/>
      <line x1={CARD_W - 8} y1={IMG_H - 8} x2={CARD_W - 28} y2={IMG_H - 8} stroke="#F97316" strokeWidth="1.2" opacity="0.5"/>
      <line x1={CARD_W - 8} y1={IMG_H - 8} x2={CARD_W - 8} y2={IMG_H - 28} stroke="#F97316" strokeWidth="1.2" opacity="0.5"/>

      <text x="14" y="22" fill="#F97316" opacity="0.5" style={{ fontSize: 7, fontFamily: 'monospace' }}>SCAN::ACTIVE</text>
      <text x={CARD_W - 14} y="22" fill="#F97316" opacity="0.4" textAnchor="end" style={{ fontSize: 7, fontFamily: 'monospace' }}>0xAB12…7F</text>
      <text x="14" y={IMG_H - 14} fill="#F97316" opacity="0.35" style={{ fontSize: 6, fontFamily: 'monospace' }}>DEPTH_MAP v3.1</text>
      <text x={CARD_W - 14} y={IMG_H - 14} fill="#F97316" opacity="0.3" textAnchor="end" style={{ fontSize: 6, fontFamily: 'monospace' }}>RES: 512×640</text>

      <ellipse cx="140" cy="80" rx="65" ry="72" fill="none" stroke="#F97316" strokeWidth="0.8" opacity="0.3" strokeDasharray="6 4" filter="url(#glow)"/>
      <ellipse cx="140" cy="80" rx="52" ry="58" fill="none" stroke="#F97316" strokeWidth="0.5" opacity="0.2" strokeDasharray="3 5"/>

      <rect x="94" y="52" rx="1" width="18" height="12" fill="none" stroke="#F97316" strokeWidth="0.8" opacity="0.5"/>
      <line x1="103" y1="50" x2="103" y2="52" stroke="#F97316" strokeWidth="0.5" opacity="0.4"/>
      <line x1="103" y1="64" x2="103" y2="66" stroke="#F97316" strokeWidth="0.5" opacity="0.4"/>
      <line x1="92" y1="58" x2="94" y2="58" stroke="#F97316" strokeWidth="0.5" opacity="0.4"/>
      <line x1="112" y1="58" x2="114" y2="58" stroke="#F97316" strokeWidth="0.5" opacity="0.4"/>

      <rect x="168" y="52" rx="1" width="18" height="12" fill="none" stroke="#F97316" strokeWidth="0.8" opacity="0.5"/>
      <line x1="177" y1="50" x2="177" y2="52" stroke="#F97316" strokeWidth="0.5" opacity="0.4"/>
      <line x1="177" y1="64" x2="177" y2="66" stroke="#F97316" strokeWidth="0.5" opacity="0.4"/>
      <line x1="166" y1="58" x2="168" y2="58" stroke="#F97316" strokeWidth="0.5" opacity="0.4"/>
      <line x1="186" y1="58" x2="188" y2="58" stroke="#F97316" strokeWidth="0.5" opacity="0.4"/>

      <circle cx="140" cy="40" r="3" fill="none" stroke="#F97316" strokeWidth="0.6" opacity="0.3">
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.3;0.15;0.3" dur="2s" repeatCount="indefinite"/>
      </circle>
      <line x1="140" y1="6" x2="140" y2="36" stroke="#F97316" strokeWidth="0.4" opacity="0.15" strokeDasharray="2 3"/>

      <path d="M88 130 Q100 125 112 130" stroke="#F97316" strokeWidth="0.6" fill="none" opacity="0.3"/>
      <path d="M168 130 Q180 125 192 130" stroke="#F97316" strokeWidth="0.6" fill="none" opacity="0.3"/>

      <line x1="140" y1="150" x2="140" y2="250" stroke="#F97316" strokeWidth="0.5" opacity="0.15" strokeDasharray="3 4"/>
      <path d="M140 170 L100 200 L80 320" stroke="#F97316" strokeWidth="0.4" fill="none" opacity="0.12" strokeDasharray="4 4"/>
      <path d="M140 170 L180 200 L200 320" stroke="#F97316" strokeWidth="0.4" fill="none" opacity="0.12" strokeDasharray="4 4"/>

      {[[75, 90], [205, 90], [60, 200], [220, 200], [80, 310], [200, 310], [140, 280]].map(([cx, cy], i) => (
        <g key={`dp${i}`}>
          <circle cx={cx} cy={cy} r="2" fill="#F97316" opacity={0.35 - i * 0.03} filter="url(#glow)"/>
          <text x={cx + 5} y={cy - 4} fill="#F97316" opacity={0.25} style={{ fontSize: 5, fontFamily: 'monospace' }}>{`${(cx / CARD_W * 100).toFixed(0)},${(cy / IMG_H * 100).toFixed(0)}`}</text>
        </g>
      ))}

      <text x="140" y="165" fill="#F97316" opacity="0.25" textAnchor="middle" style={{ fontSize: 5, fontFamily: 'monospace' }}>TORSO_AXIS</text>
      <text x="103" y="48" fill="#F97316" opacity="0.3" textAnchor="middle" style={{ fontSize: 5, fontFamily: 'monospace' }}>L_OPTICAL</text>
      <text x="177" y="48" fill="#F97316" opacity="0.3" textAnchor="middle" style={{ fontSize: 5, fontFamily: 'monospace' }}>R_OPTICAL</text>
    </svg>
  );
}

function NftScannerCard() {
  const outerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<SVGSVGElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const rafRef = useRef(0);
  const [activeSkills, setActiveSkills] = useState<Skill[]>([]);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; ty: number; s: number; d: number }[]>([]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sp = { damping: 20, stiffness: 120, mass: 0.6 };
  const rx = useSpring(useTransform(mouseY, [-1, 1], [8, -8]), sp);
  const ry = useSpring(useTransform(mouseX, [-1, 1], [-8, 8]), sp);

  const scanTiltX = useMotionValue(0);
  const scanTiltXSpring = useSpring(scanTiltX, { damping: 30, stiffness: 200 });
  const combinedRx = useTransform([rx, scanTiltXSpring], ([a, b]: number[]) => (a || 0) + (b || 0));

  const onMouseMove = (e: React.MouseEvent) => {
    const r = outerRef.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set((e.clientX - r.left - r.width / 2) / (r.width / 2));
    mouseY.set((e.clientY - r.top - r.height / 2) / (r.height / 2));
  };
  const onMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  const spawnParticles = useCallback((yPx: number) => {
    const batch = Array.from({ length: 3 }).map(() => {
      const y = yPx + (Math.random() - 0.5) * 40;
      return {
        id: Math.random(),
        x: Math.random() * CARD_W,
        y,
        ty: y - 20 - Math.random() * 30,
        s: 1 + Math.random() * 2,
        d: 800 + Math.random() * 1200,
      };
    });
    setParticles(prev => [...prev.slice(-12), ...batch]);
  }, []);

  useEffect(() => {
    let passTimeout: ReturnType<typeof setTimeout> | null = null;
    let cycleTimeout: ReturnType<typeof setTimeout> | null = null;
    const mountedRef = { current: true };

    function scan(skills: Skill[], onDone: () => void) {
      setActiveSkills([]);
      const gl = glowRef.current;
      const hud = hudRef.current;
      const sl = scanLineRef.current;
      const img = imgRef.current;

      if (sl) { sl.style.transition = 'none'; sl.style.top = '0px'; sl.style.opacity = '1'; }
      if (gl) { gl.style.transition = 'none'; gl.style.opacity = '1'; }
      if (hud) { hud.style.transition = 'opacity 0.4s'; hud.style.opacity = '1'; }

      let start: number | null = null;
      const revealed = new Set<number>();
      let lastParticle = 0;

      function frame(now: number) {
        if (!mountedRef.current) return;
        if (!start) start = now;
        const p = Math.min((now - start) / SCAN_MS, 1);
        const yPx = p * IMG_H;

        if (sl) sl.style.top = `${yPx}px`;
        if (gl) gl.style.top = `${yPx - 80}px`;

        const tilt = Math.sin(p * Math.PI) * 3;
        scanTiltX.set(tilt);

        if (img) {
          const brightness = 1 + Math.sin(p * Math.PI) * 0.15;
          const contrast = 1 + Math.sin(p * Math.PI) * 0.08;
          img.style.filter = `brightness(${brightness}) contrast(${contrast})`;
        }

        if (now - lastParticle > 180) {
          spawnParticles(yPx);
          lastParticle = now;
        }

        skills.forEach(s => {
          if (!revealed.has(s.id) && p >= s.connY - 0.03) {
            revealed.add(s.id);
            if (mountedRef.current) setActiveSkills(prev => [...prev, s]);
          }
        });

        if (p < 1) { rafRef.current = requestAnimationFrame(frame); }
        else {
          if (sl) { sl.style.transition = 'opacity 0.5s'; sl.style.opacity = '0'; }
          if (gl) { gl.style.transition = 'opacity 0.6s'; gl.style.opacity = '0'; }
          if (hud) { hud.style.transition = 'opacity 0.8s'; hud.style.opacity = '0'; }
          if (img) { img.style.transition = 'filter 0.6s'; img.style.filter = 'brightness(1) contrast(1)'; }
          scanTiltX.set(0);
          if (mountedRef.current) setParticles([]);
          onDone();
        }
      }
      rafRef.current = requestAnimationFrame(frame);
    }

    function cycle() {
      scan(PASS1, () => {
        if (passTimeout) clearTimeout(passTimeout);
        passTimeout = setTimeout(() => {
          scan(PASS2, () => {
            if (cycleTimeout) clearTimeout(cycleTimeout);
            cycleTimeout = setTimeout(cycle, 2400);
          });
        }, 1400);
      });
    }

    passTimeout = setTimeout(cycle, 1200);
    return () => {
      mountedRef.current = false;
      if (passTimeout) clearTimeout(passTimeout);
      if (cycleTimeout) clearTimeout(cycleTimeout);
      cancelAnimationFrame(rafRef.current);
    };
  }, [scanTiltX, spawnParticles]);

  return (
    <div
      ref={outerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative select-none"
      style={{ width: CTR_W, height: CARD_H, perspective: 900 }}
    >
      <motion.div
        style={{
          rotateX: combinedRx, rotateY: ry,
          position: 'absolute', left: SIDE_PAD, top: 0,
          width: CARD_W, height: CARD_H,
          transformStyle: 'preserve-3d',
        }}
        className="rounded-2xl"
      >
        <div className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(249,115,22,0.25)' }}>
          <div className="absolute inset-0 bg-[#0D0D1A]"/>

          <div className="relative z-10 flex items-center justify-between px-4" style={{ height: HEADER_H }}>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"/>
              <span className="text-primary font-bold tracking-[0.18em] uppercase" style={{ fontSize: 9 }}>iamabhishek.crypto</span>
            </div>
            <span className="font-bold tracking-widest text-white/25 uppercase" style={{ fontSize: 8 }}>NFT · #001</span>
          </div>

          <div className="relative overflow-hidden" style={{ height: IMG_H }}>
            <img
              ref={imgRef}
              src={`${import.meta.env.BASE_URL}images/nft-avatar.png`}
              alt="Abhishek Kumar"
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{ zIndex: 1, transition: 'filter 0.15s' }}
            />

            <div ref={glowRef} className="absolute inset-x-0 pointer-events-none"
              style={{
                top: 0, height: 160, opacity: 0, zIndex: 10,
                background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(249,115,22,0.22) 0%, rgba(249,115,22,0.08) 40%, transparent 70%)',
                mixBlendMode: 'screen',
              }}/>

            <HudOverlay svgRef={hudRef}/>

            <div ref={scanLineRef} className="absolute inset-x-0 pointer-events-none"
              style={{ top: 0, height: 3, opacity: 0, zIndex: 16 }}>
              <div className="absolute inset-x-0 -top-[40px] h-[40px]"
                style={{ background: 'linear-gradient(to top, rgba(249,115,22,0.18), transparent)' }}/>
              <div className="absolute inset-x-0 top-0"
                style={{
                  height: 2,
                  background: 'linear-gradient(90deg, transparent 5%, rgba(249,115,22,0.7) 20%, rgba(255,255,255,0.9) 50%, rgba(249,115,22,0.7) 80%, transparent 95%)',
                  boxShadow: '0 0 20px 6px rgba(249,115,22,0.5), 0 0 60px 12px rgba(249,115,22,0.15)',
                }}/>
              <div className="absolute inset-x-0 top-[2px] h-[40px]"
                style={{ background: 'linear-gradient(to bottom, rgba(249,115,22,0.18), transparent)' }}/>
            </div>

            {particles.map(pt => (
              <motion.div
                key={pt.id}
                className="absolute rounded-full pointer-events-none"
                initial={{ opacity: 0.8, scale: 1, x: pt.x, y: pt.y }}
                animate={{ opacity: 0, scale: 0, y: pt.ty }}
                transition={{ duration: pt.d / 1000, ease: 'easeOut' }}
                style={{
                  width: pt.s, height: pt.s, zIndex: 17,
                  background: '#F97316',
                  boxShadow: `0 0 ${pt.s * 2}px ${pt.s}px rgba(249,115,22,0.6)`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex items-center px-4 gap-4"
            style={{ height: TRAITS_H, background: 'rgba(6,6,14,0.97)', borderTop: '1px solid rgba(249,115,22,0.15)' }}>
            {[{ k: 'ROLE', v: 'Web3 Narrative Strategist' }, { k: 'BASE', v: 'Hyderabad' }, { k: 'EDITION', v: '#001' }].map(t => (
              <div key={t.k} className="flex flex-col">
                <span className="font-bold tracking-widest text-primary/40 uppercase" style={{ fontSize: 7 }}>{t.k}</span>
                <span className="font-semibold text-white/75" style={{ fontSize: 10 }}>{t.v}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <svg width={CTR_W} height={CARD_H} className="absolute inset-0 pointer-events-none" style={{ zIndex: 25, overflow: 'visible' }}>
        <defs>
          <filter id="connGlow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        {activeSkills.map(s => {
          const tx = SIDE_PAD + s.connX * CARD_W;
          const ty = HEADER_H + s.connY * IMG_H;
          const edgeX = s.side === 'left' ? SIDE_PAD : SIDE_PAD + CARD_W;
          const badgeX = s.side === 'left' ? SIDE_PAD - 10 : SIDE_PAD + CARD_W + 10;

          return (
            <g key={s.id} className="skill-line">
              <line x1={badgeX} y1={ty} x2={edgeX} y2={ty} stroke="rgba(249,115,22,0.4)" strokeWidth="1" strokeDasharray="4 3"/>
              <line x1={edgeX} y1={ty} x2={tx} y2={ty} stroke="rgba(249,115,22,0.55)" strokeWidth="1" strokeDasharray="3 2"/>
              <circle cx={tx} cy={ty} r="4" fill="none" stroke="#F97316" strokeWidth="0.8" opacity="0.4">
                <animate attributeName="r" values="4;7;4" dur="1.6s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.4;0.15;0.4" dur="1.6s" repeatCount="indefinite"/>
              </circle>
              <circle cx={tx} cy={ty} r="2.5" fill="#F97316" opacity="0.85" filter="url(#connGlow)"/>
            </g>
          );
        })}
      </svg>

      {activeSkills.map(s => {
        const ty = HEADER_H + s.connY * IMG_H;
        const isLeft = s.side === 'left';
        return (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, x: isLeft ? -16 : 16, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute"
            style={{ top: ty, [isLeft ? 'left' : 'right']: 0, transform: 'translateY(-50%)', zIndex: 30 }}
          >
            <div
              className="text-[9px] font-bold tracking-wider uppercase px-2.5 py-1.5 rounded-md whitespace-nowrap"
              style={{
                color: '#F97316',
                background: 'rgba(8,8,18,0.95)',
                border: '1px solid rgba(249,115,22,0.45)',
                boxShadow: '0 0 14px rgba(249,115,22,0.2), inset 0 0 6px rgba(249,115,22,0.06)',
              }}
            >
              {s.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

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
              <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Abhishek_Kumar_Resume.pdf"
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
        .skill-line { opacity: 0; animation: fadeIn 0.35s ease-out forwards; }
      `}</style>
    </section>
  );
}
