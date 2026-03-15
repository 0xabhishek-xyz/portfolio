import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Digital Marketing Manager",
    company: "TechCorp Global",
    period: "2021 — Present",
    description: "Spearheaded digital growth strategies across multiple product lines. Managed a 7-figure ad spend budget across Meta, LinkedIn, and Google Ads, improving blended ROAS by 34%. Lead a team of content creators and performance marketers.",
  },
  {
    role: "Brand Strategist",
    company: "CreativeAgency",
    period: "2018 — 2021",
    description: "Developed comprehensive brand identity systems for B2B SaaS clients. Conducted market research, defined brand positioning, and delivered design assets using Figma and Adobe CC. Increased client engagement metrics by over 50%.",
  },
  {
    role: "Content Marketing Specialist",
    company: "StartupInc",
    period: "2016 — 2018",
    description: "Built organic acquisition engine from scratch. Implemented SEO best practices, managed editorial calendar, and executed email marketing automation workflows that resulted in a 3x increase in qualified leads.",
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-background relative">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">Career Journey</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Professional Experience</h2>
        </div>

        <div className="relative border-l-2 border-secondary/50 pl-8 md:pl-12 ml-4 md:ml-0 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-[42px] md:-left-[58px] top-1.5 ring-4 ring-background"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                <h3 className="text-2xl font-display font-bold text-foreground">{exp.role}</h3>
                <span className="text-sm font-medium text-primary mt-1 md:mt-0 bg-primary/10 px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>
              
              <h4 className="text-lg font-medium text-muted-foreground mb-4">{exp.company}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
