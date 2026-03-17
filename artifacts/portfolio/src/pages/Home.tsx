import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { NarrativeImpactGrid } from '@/components/sections/NarrativeImpactGrid';
import { SelectedImpact } from '@/components/sections/SelectedImpact';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Work } from '@/components/sections/Work';
import { Education } from '@/components/sections/Education';
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
        <About />
        <Experience />
        <Skills />
        <Work />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
