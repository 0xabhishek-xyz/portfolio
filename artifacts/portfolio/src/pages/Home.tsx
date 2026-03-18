import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { NarrativeImpactGrid } from '@/components/sections/NarrativeImpactGrid';
import { SelectedImpact } from '@/components/sections/SelectedImpact';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Writing } from '@/components/sections/Writing';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <NarrativeImpactGrid />
        <SelectedImpact />
        <CaseStudies />
        <Writing />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
