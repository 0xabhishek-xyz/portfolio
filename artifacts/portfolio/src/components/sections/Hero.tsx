import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ROLES = [
  "Content Strategist",
  "Web3 Marketer",
  "Community Builder",
  "Storyteller",
  "IDO Specialist",
];

function TypewriterRole() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="text-primary">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function NftAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { damping: 22, stiffness: 140, mass: 0.6 };
  const x = useSpring(mouseX, springCfg);
  const y = useSpring(mouseY, springCfg);

  const cardRotateX = useTransform(y, [-1, 1], [8, -8]);
  const cardRotateY = useTransform(x, [-1, 1], [-8, 8]);
  const headX = useTransform(x, [-1, 1], [-10, 10]);
  const headY = useTransform(y, [-1, 1], [-7, 7]);
  const hairX = useTransform(x, [-1, 1], [-16, 16]);
  const hairY = useTransform(y, [-1, 1], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left - rect.width / 2) / (rect.width / 2));
    mouseY.set((e.clientY - rect.top - rect.height / 2) / (rect.height / 2));
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  const traits = [
    { key: "ROLE", val: "Web3 Marketer" },
    { key: "SKILL", val: "Storytelling" },
    { key: "BASE", val: "Hyderabad" },
    { key: "EDITION", val: "#001" },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center"
      style={{ perspective: 900 }}
    >
      <motion.div
        style={{ rotateX: cardRotateX, rotateY: cardRotateY }}
        className="relative w-[320px] rounded-3xl overflow-hidden shadow-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* Card background */}
        <div className="absolute inset-0 bg-[#0E0E16]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'linear-gradient(rgba(249,115,22,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.6) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Orange glow top */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-32 bg-primary/30 rounded-full blur-3xl" />
        {/* Border glow */}
        <div className="absolute inset-0 rounded-3xl ring-1 ring-primary/40 ring-inset" />

        {/* Card header */}
        <div className="relative z-10 flex items-center justify-between px-5 pt-5 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-bold text-xs tracking-[0.15em] uppercase">Abhishek.eth</span>
          </div>
          <span className="text-[10px] font-bold tracking-widest text-white/30 uppercase">NFT · #001</span>
        </div>

        {/* Illustration area */}
        <div className="relative z-10 h-[310px] flex items-end justify-center overflow-hidden">

          {/* T-shirt / body */}
          <motion.div style={{ x, y }} className="absolute bottom-0 w-full flex justify-center">
            <svg width="280" height="180" viewBox="0 0 280 180" fill="none">
              {/* T-shirt body */}
              <path d="M60 60 L30 80 L20 160 L260 160 L250 80 L220 60 C200 70 170 80 140 80 C110 80 80 70 60 60Z"
                fill="#1E293B" />
              {/* T-shirt collar */}
              <path d="M60 60 C80 90 110 100 140 100 C170 100 200 90 220 60" fill="none" stroke="#334155" strokeWidth="2"/>
              {/* Orange stripe on shirt */}
              <rect x="20" y="110" width="240" height="4" rx="2" fill="#F97316" opacity="0.7"/>
              {/* Sleeve left */}
              <path d="M60 60 L20 50 L18 80 L30 80Z" fill="#1E293B"/>
              {/* Sleeve right */}
              <path d="M220 60 L260 50 L262 80 L250 80Z" fill="#1E293B"/>
              {/* Shirt outline */}
              <path d="M60 60 L30 80 L20 160 L260 160 L250 80 L220 60 C200 70 170 80 140 80 C110 80 80 70 60 60Z"
                stroke="#334155" strokeWidth="1.5" fill="none"/>
              {/* Pocket detail */}
              <rect x="155" y="88" width="26" height="22" rx="3" stroke="#F97316" strokeWidth="1" fill="none" opacity="0.5"/>
            </svg>
          </motion.div>

          {/* Head */}
          <motion.div style={{ x: headX, y: headY, bottom: 130 }} className="absolute">
            <svg width="180" height="200" viewBox="0 0 180 200" fill="none">
              {/* Neck */}
              <path d="M72 148 L72 170 Q90 175 108 170 L108 148Z" fill="#E8B89A"/>
              {/* Face */}
              <ellipse cx="90" cy="110" rx="56" ry="66" fill="#F5C5A3"/>
              {/* Face shadow sides */}
              <ellipse cx="90" cy="112" rx="56" ry="66" fill="none" stroke="#D4956A" strokeWidth="1.5"/>
              {/* Cheek flush left */}
              <ellipse cx="50" cy="118" rx="12" ry="8" fill="#E8A080" opacity="0.35"/>
              {/* Cheek flush right */}
              <ellipse cx="130" cy="118" rx="12" ry="8" fill="#E8A080" opacity="0.35"/>

              {/* Left eye white */}
              <ellipse cx="68" cy="104" rx="13" ry="10" fill="white"/>
              {/* Right eye white */}
              <ellipse cx="112" cy="104" rx="13" ry="10" fill="white"/>
              {/* Left iris */}
              <circle cx="70" cy="104" r="7" fill="#1A1A2E"/>
              {/* Right iris */}
              <circle cx="114" cy="104" r="7" fill="#1A1A2E"/>
              {/* Left pupil */}
              <circle cx="71" cy="104" r="4" fill="#0D0D0D"/>
              {/* Right pupil */}
              <circle cx="115" cy="104" r="4" fill="#0D0D0D"/>
              {/* Eye glints */}
              <circle cx="73" cy="101" r="2" fill="white"/>
              <circle cx="117" cy="101" r="2" fill="white"/>
              {/* Left eyebrow */}
              <path d="M54 90 C60 84 76 83 82 87" stroke="#4A2C0A" strokeWidth="3" strokeLinecap="round" fill="none"/>
              {/* Right eyebrow */}
              <path d="M98 87 C104 83 120 84 126 90" stroke="#4A2C0A" strokeWidth="3" strokeLinecap="round" fill="none"/>

              {/* Nose */}
              <path d="M85 115 C83 122 80 126 78 128 C82 131 98 131 102 128 C100 126 97 122 95 115Z"
                fill="none" stroke="#C4875A" strokeWidth="1.5" strokeLinecap="round"/>

              {/* Mouth / smile */}
              <path d="M74 142 C80 150 100 150 106 142" stroke="#C4614A" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <path d="M74 142 C72 138 74 136 76 138" stroke="#C4614A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <path d="M106 142 C108 138 106 136 104 138" stroke="#C4614A" strokeWidth="1.5" strokeLinecap="round" fill="none"/>

              {/* Ear left */}
              <path d="M34 104 C28 110 28 122 36 126 C40 128 44 124 44 118" fill="#F5C5A3" stroke="#D4956A" strokeWidth="1.5"/>
              {/* Ear right */}
              <path d="M146 104 C152 110 152 122 144 126 C140 128 136 124 136 118" fill="#F5C5A3" stroke="#D4956A" strokeWidth="1.5"/>

              {/* Face outline */}
              <ellipse cx="90" cy="110" rx="56" ry="66" fill="none" stroke="#C4875A" strokeWidth="1.5"/>
            </svg>
          </motion.div>

          {/* Hair — top layer, moves most */}
          <motion.div style={{ x: hairX, y: hairY, bottom: 200 }} className="absolute">
            <svg width="200" height="130" viewBox="0 0 200 130" fill="none">
              {/* Main hair mass */}
              <path d="M28 80 C20 50 28 18 60 8 C76 3 100 0 120 4 C148 10 168 30 172 58 L168 80 C152 58 140 45 130 42 C118 38 108 44 100 50 C92 44 82 38 70 42 C60 45 46 58 28 80Z"
                fill="#2D1B00"/>
              {/* Hair shine */}
              <path d="M68 12 C80 6 104 4 118 10 C130 15 142 28 148 44"
                fill="none" stroke="#5C3510" strokeWidth="4" strokeLinecap="round" opacity="0.5"/>
              {/* Side hair left */}
              <path d="M28 80 C22 90 20 105 24 118 C26 125 32 128 36 124 C38 112 36 96 40 84"
                fill="#2D1B00" stroke="#2D1B00" strokeWidth="1"/>
              {/* Side hair right */}
              <path d="M172 80 C178 90 180 105 176 118 C174 125 168 128 164 124 C162 112 164 96 160 84"
                fill="#2D1B00" stroke="#2D1B00" strokeWidth="1"/>
              {/* Hair strands for texture */}
              <path d="M72 8 C68 20 62 36 58 52" stroke="#4A2C00" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
              <path d="M90 4 C88 18 86 32 84 48" stroke="#4A2C00" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
              <path d="M108 4 C110 18 112 32 116 46" stroke="#4A2C00" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
              <path d="M126 8 C130 22 136 38 140 52" stroke="#4A2C00" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
              {/* Hair outline */}
              <path d="M28 80 C20 50 28 18 60 8 C76 3 100 0 120 4 C148 10 168 30 172 58 L168 80"
                fill="none" stroke="#1A0F00" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </motion.div>

        </div>

        {/* Traits strip */}
        <div className="relative z-10 bg-[#0A0A12] border-t border-primary/20 px-5 py-4">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {traits.map((t) => (
              <div key={t.key} className="flex flex-col">
                <span className="text-[9px] font-bold tracking-[0.15em] text-primary/50 uppercase">{t.key}</span>
                <span className="text-xs font-semibold text-white/80">{t.val}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Outer glow */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ boxShadow: '0 0 60px 10px rgba(249,115,22,0.08)' }} />
    </div>
  );
}

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center pt-20 overflow-hidden bg-background">
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(#111827 1px, transparent 1px), linear-gradient(90deg, #111827 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* LEFT — text */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-[1px] w-8 bg-primary" />
              <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">Abhishek Kumar</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-[1.05] text-foreground mb-4"
            >
              Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Stories</span>{' '}
              <br className="hidden sm:block"/>Drive Growth.
            </motion.h1>

            {/* Typewriter subheading */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-xl md:text-2xl font-light text-muted-foreground mb-3 h-8"
            >
              <TypewriterRole />
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="text-base text-muted-foreground mb-10 max-w-md leading-relaxed"
            >
              Turning blockchain noise into signal. Building communities from scratch, launching tokens, and crafting the narratives that move markets.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Button size="lg" variant="primary" className="rounded-full group" onClick={() => scrollTo('#work')}>
                See My Impact
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-transparent" onClick={() => scrollTo('#contact')}>
                Let's Collaborate
              </Button>
            </motion.div>

            {/* Brand pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <span className="text-[10px] font-bold tracking-widest text-muted-foreground/50 uppercase mr-1 self-center">Worked with</span>
              {["Blockwiz", "KuCoin", "Glimpse", "Reneverse", "Gamestar"].map((brand) => (
                <span key={brand} className="text-xs font-semibold text-muted-foreground/60 border border-border px-3 py-1.5 rounded-full hover:border-primary/40 hover:text-foreground transition-colors">
                  {brand}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — NFT avatar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex items-center justify-center py-8 lg:py-0"
          >
            <NftAvatar />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo('#about')}
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
          <ChevronDown className="w-4 h-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
