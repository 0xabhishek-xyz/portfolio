import React from 'react';

export function Footer() {
  return (
    <footer className="bg-foreground border-t border-background/10 py-8 text-center text-background/60">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-display font-bold text-lg text-background tracking-tight flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
          Abhishek.
        </span>
        <p className="text-sm">
          © {new Date().getFullYear()} Abhishek Kumar. All rights reserved.
        </p>
        <p className="text-sm">
          Designed with <span className="text-primary">♥</span> & Strategy.
        </p>
      </div>
    </footer>
  );
}
