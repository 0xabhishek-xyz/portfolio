import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

function AvatarIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 120, mass: 0.8 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // Different layers move at different speeds for depth
  const bodyX = useTransform(x, [-1, 1], [-6, 6]);
  const bodyY = useTransform(y, [-1, 1], [-4, 4]);
  const headX = useTransform(x, [-1, 1], [-12, 12]);
  const headY = useTransform(y, [-1, 1], [-8, 8]);
  const bgX = useTransform(x, [-1, 1], [-3, 3]);
  const bgY = useTransform(y, [-1, 1], [-2, 2]);
  const shadowX = useTransform(x, [-1, 1], [3, -3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mouseX.set((e.clientX - cx) / (rect.width / 2));
    mouseY.set((e.clientY - cy) / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full flex items-center justify-center cursor-none select-none"
      style={{ perspective: 800 }}
    >
      {/* Background decorative circles */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg width="480" height="520" viewBox="0 0 480 520" fill="none" className="opacity-30">
          <circle cx="240" cy="260" r="200" stroke="#F97316" strokeWidth="1" strokeDasharray="6 10" />
          <circle cx="240" cy="260" r="155" stroke="#9CA3AF" strokeWidth="0.5" strokeDasharray="3 6" />
          <circle cx="240" cy="260" r="230" stroke="#E5E7EB" strokeWidth="0.5" />
        </svg>
      </motion.div>

      {/* Drop shadow layer */}
      <motion.div style={{ x: shadowX, y: 8 }} className="absolute pointer-events-none">
        <svg width="320" height="420" viewBox="0 0 320 420" fill="none" className="opacity-[0.04]">
          {/* shadow silhouette */}
          <ellipse cx="160" cy="390" rx="80" ry="16" fill="#111827" />
          <path d="M120 180 Q80 240 85 310 Q95 370 160 375 Q225 370 235 310 Q240 240 200 180Z" fill="#111827"/>
          <circle cx="160" cy="120" r="58" fill="#111827"/>
        </svg>
      </motion.div>

      {/* Body / torso layer */}
      <motion.div style={{ x: bodyX, y: bodyY }} className="absolute pointer-events-none">
        <svg width="320" height="420" viewBox="0 0 320 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shoulders and torso outline */}
          <path
            d="M100 185 C70 195 48 220 44 260 L38 360 Q38 372 50 374 L270 374 Q282 372 282 360 L276 260 C272 220 250 195 220 185"
            stroke="#1F2937"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Shirt collar V */}
          <path d="M138 185 L160 230 L182 185" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          {/* Lapel lines */}
          <path d="M138 185 C128 200 118 220 115 245" stroke="#4B5563" strokeWidth="1" strokeLinecap="round" fill="none"/>
          <path d="M182 185 C192 200 202 220 205 245" stroke="#4B5563" strokeWidth="1" strokeLinecap="round" fill="none"/>
          {/* Center button line */}
          <path d="M160 230 L160 370" stroke="#4B5563" strokeWidth="0.8" strokeDasharray="4 5" strokeLinecap="round"/>
          {/* Shirt pocket */}
          <rect x="188" y="220" width="28" height="20" rx="2" stroke="#9CA3AF" strokeWidth="0.8" fill="none"/>
          {/* Left arm */}
          <path d="M100 185 C82 210 74 250 72 300 Q72 318 82 322 Q96 326 100 308 L108 260 L120 210" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          {/* Left hand */}
          <path d="M72 300 C68 312 64 322 66 330 Q70 338 78 334" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M78 334 C76 340 74 346 76 352 Q80 356 84 350" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M84 330 C82 338 82 348 84 354 Q88 358 92 352" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          {/* Right arm */}
          <path d="M220 185 C238 210 246 250 248 300 Q248 318 238 322 Q224 326 220 308 L212 260 L200 210" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          {/* Right hand */}
          <path d="M248 300 C252 312 256 322 254 330 Q250 338 242 334" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M242 334 C244 340 246 346 244 352 Q240 356 236 350" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M236 330 C238 338 238 348 236 354 Q232 358 228 352" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          {/* Neck */}
          <path d="M138 155 C134 165 132 175 133 185 L187 185 C188 175 186 165 182 155" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          {/* Subtle fabric folds on torso */}
          <path d="M115 245 C120 265 118 290 120 320" stroke="#D1D5DB" strokeWidth="0.7" strokeLinecap="round" fill="none"/>
          <path d="M205 245 C200 265 202 290 200 320" stroke="#D1D5DB" strokeWidth="0.7" strokeLinecap="round" fill="none"/>
        </svg>
      </motion.div>

      {/* Head layer — moves more than body for depth */}
      <motion.div style={{ x: headX, y: headY }} className="absolute pointer-events-none top-0">
        <svg width="320" height="420" viewBox="0 0 320 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Head shape */}
          <path
            d="M108 118 C104 80 116 48 140 34 C156 26 172 24 188 30 C210 38 224 62 222 98 L220 128 C216 154 200 164 182 166 L138 166 C120 164 108 150 108 128 Z"
            stroke="#1F2937"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Hair — loose wavy lines on top */}
          <path d="M110 100 C106 72 116 44 140 32" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M120 86 C118 64 128 44 148 34" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
          <path d="M136 76 C136 58 144 42 160 34" stroke="#374151" strokeWidth="1" strokeLinecap="round" fill="none"/>
          <path d="M152 76 C154 58 162 42 176 36" stroke="#374151" strokeWidth="1" strokeLinecap="round" fill="none"/>
          <path d="M168 82 C172 64 180 48 192 38" stroke="#374151" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
          <path d="M182 96 C188 76 196 58 210 46" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M192 118 C200 100 210 80 222 68" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          {/* Ear left */}
          <path d="M108 118 C100 122 96 130 98 138 C100 146 108 148 112 142" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          {/* Ear right */}
          <path d="M220 118 C228 122 232 130 230 138 C228 146 220 148 216 142" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          {/* Eyes — simple almond shapes */}
          <path d="M130 108 C134 104 142 104 146 108 C142 112 134 112 130 108Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M174 108 C178 104 186 104 190 108 C186 112 178 112 174 108Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          {/* Pupils */}
          <circle cx="138" cy="108" r="2.5" fill="#1F2937"/>
          <circle cx="182" cy="108" r="2.5" fill="#1F2937"/>
          {/* Light glint */}
          <circle cx="139.5" cy="106.5" r="1" fill="white"/>
          <circle cx="183.5" cy="106.5" r="1" fill="white"/>
          {/* Eyebrows */}
          <path d="M127 100 C131 96 140 95 146 98" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M173 98 C179 95 188 96 192 100" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          {/* Nose */}
          <path d="M160 108 L155 128 C154 132 156 135 160 136 C164 135 166 132 165 128 Z" stroke="#4B5563" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M155 134 C151 136 148 133 148 130" stroke="#4B5563" strokeWidth="1" strokeLinecap="round" fill="none"/>
          <path d="M165 134 C169 136 172 133 172 130" stroke="#4B5563" strokeWidth="1" strokeLinecap="round" fill="none"/>
          {/* Mouth — slight smile */}
          <path d="M142 146 C148 152 160 154 178 146" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <path d="M142 146 C140 142 142 140 144 142" stroke="#4B5563" strokeWidth="1" strokeLinecap="round" fill="none"/>
          <path d="M178 146 C180 142 178 140 176 142" stroke="#4B5563" strokeWidth="1" strokeLinecap="round" fill="none"/>
          {/* Cheekbone definition */}
          <path d="M112 126 C114 132 118 136 122 138" stroke="#D1D5DB" strokeWidth="0.8" strokeLinecap="round" fill="none"/>
          <path d="M208 126 C206 132 202 136 198 138" stroke="#D1D5DB" strokeWidth="0.8" strokeLinecap="round" fill="none"/>
          {/* Orange accent — small dot above collar area like a pin/brooch */}
          <circle cx="165" cy="196" r="5" fill="#F97316" opacity="0.9"/>
          <circle cx="165" cy="196" r="8" stroke="#F97316" strokeWidth="1" fill="none" opacity="0.4"/>
        </svg>
      </motion.div>

      {/* Subtle glow under the illustration */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-primary/10 blur-2xl rounded-full pointer-events-none" />
    </div>
  );
}

export function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center pt-20 overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#111827 1px, transparent 1px), linear-gradient(90deg, #111827 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Ambient orange glow */}
      <div className="absolute top-1/4 -left-32 w-72 h-72 bg-primary/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* Left — text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-8 bg-primary" />
              <span className="text-primary font-medium tracking-wide uppercase text-sm">Content Strategist · Web3 Marketer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-[1.05] text-foreground mb-6"
            >
              Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Stories</span>{' '}
              Drive Growth.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
            >
              Hi, I'm <strong className="text-foreground font-semibold">Abhishek Kumar</strong>. A Content Strategist & Web3 Marketer who builds content powerhouses and orchestrates growth through the power of storytelling.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Button size="lg" variant="primary" className="rounded-full group" onClick={() => scrollTo('#work')}>
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-transparent" onClick={() => scrollTo('#about')}>
                More About Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-3"
            >
              {["Blockwiz", "KuCoin", "Glimpse", "Reneverse", "Gamestar"].map((brand) => (
                <span key={brand} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 border border-border px-3 py-1.5 rounded-full">
                  {brand}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — line-drawn avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[480px] lg:h-[520px] flex items-center justify-center"
          >
            <AvatarIllustration />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo('#about')}
      >
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
