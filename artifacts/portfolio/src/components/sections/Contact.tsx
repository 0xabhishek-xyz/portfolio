import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Linkedin, Calendar } from 'lucide-react';

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  };
}

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: '#030609' }}
    >
      {/* Ghost word — backdrop */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-black whitespace-nowrap"
          style={{
            fontSize: 'clamp(12rem, 28vw, 26rem)',
            letterSpacing: '-0.06em',
            lineHeight: 1,
            color: 'rgba(249,115,22,0.028)',
          }}
        >
          TALK
        </span>
      </div>

      {/* Subtle radial glow behind CTA area */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(249,115,22,0.055) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-32">

        {/* Availability signal */}
        <motion.div {...fadeUp()} className="flex items-center gap-2.5 mb-12">
          <span className="relative flex h-2.5 w-2.5">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
              style={{ background: '#22C55E' }}
            />
            <span
              className="relative inline-flex rounded-full h-2.5 w-2.5"
              style={{ background: '#22C55E' }}
            />
          </span>
          <span
            className="font-mono text-[11.5px] tracking-[0.14em] uppercase"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            Available for new projects · Remote-first
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div {...fadeUp(0.08)} className="mb-8">
          <h2
            className="font-display font-black leading-[1.04]"
            style={{
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              letterSpacing: '-0.04em',
              color: 'rgba(255,255,255,0.92)',
            }}
          >
            You{`'`}ve read
            <br />
            <span style={{ color: '#F97316' }}>the work.</span>
          </h2>
        </motion.div>

        {/* Body copy */}
        <motion.div {...fadeUp(0.15)} className="mb-14 max-w-2xl">
          <p
            className="leading-[1.75]"
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
              color: 'rgba(255,255,255,0.42)',
            }}
          >
            If your project is hard to explain, trust is hard to earn, and
            you need someone who works at the layer that makes everything
            else land —{' '}
            <span style={{ color: 'rgba(255,255,255,0.72)' }}>
              that{`'`}s the conversation.
            </span>
          </p>
          <p
            className="mt-4 leading-[1.75]"
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
              color: 'rgba(255,255,255,0.42)',
            }}
          >
            Book 30 minutes. Let{`'`}s find out.
          </p>
        </motion.div>

        {/* Primary CTA — Calendly */}
        <motion.div {...fadeUp(0.22)} className="mb-14">
          <a
            href="https://calendly.com/abhishekkr711/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 font-display font-bold rounded-2xl transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.99]"
            style={{
              background: '#F97316',
              color: '#fff',
              padding: '1.1rem 2.2rem',
              fontSize: 'clamp(1rem, 1.6vw, 1.2rem)',
              letterSpacing: '-0.015em',
              boxShadow: '0 0 0 0 rgba(249,115,22,0)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                '0 8px 40px rgba(249,115,22,0.35)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                '0 0 0 0 rgba(249,115,22,0)';
            }}
          >
            <Calendar size={18} className="flex-shrink-0" />
            Book a 30-minute call
            <ArrowUpRight
              size={18}
              className="flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>

        {/* Secondary contact strip + signature — single compact row */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-wrap items-center gap-x-5 gap-y-3"
        >
          <a
            href="mailto:abhishekkr711@gmail.com"
            className="flex items-center gap-2 transition-colors duration-150"
            style={{ color: 'rgba(255,255,255,0.32)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(249,115,22,0.75)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.32)'; }}
          >
            <Mail size={12} />
            <span className="font-mono text-[11.5px]">abhishekkr711@gmail.com</span>
          </a>

          <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>

          <a
            href="https://www.linkedin.com/in/abhishek-akoo7/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors duration-150"
            style={{ color: 'rgba(255,255,255,0.32)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(249,115,22,0.75)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.32)'; }}
          >
            <Linkedin size={12} />
            <span className="font-mono text-[11.5px]">LinkedIn</span>
            <ArrowUpRight size={10} className="opacity-40" />
          </a>

          <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>

          <span className="font-mono text-[11.5px]" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Hyderabad, India · Remote-first
          </span>
        </motion.div>

      </div>
    </section>
  );
}
