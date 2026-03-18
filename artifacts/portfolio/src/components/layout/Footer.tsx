import React from 'react';

export function Footer() {
  return (
    <footer
      className="border-t flex items-center justify-between flex-wrap gap-3 px-6 md:px-12 py-5"
      style={{
        background: '#030609',
        borderColor: 'rgba(255,255,255,0.05)',
      }}
    >
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" style={{ opacity: 0.5 }} />
        <span
          className="font-display font-bold"
          style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '-0.01em' }}
        >
          Abhishek Kumar
        </span>
      </div>
      <span
        className="font-mono text-[10px]"
        style={{ color: 'rgba(255,255,255,0.14)' }}
      >
        © {new Date().getFullYear()} · Content Strategist &amp; Web3 Marketer
      </span>
    </footer>
  );
}
