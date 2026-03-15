import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Megaphone, LineChart, Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: "Brand & Design",
    icon: <PenTool className="w-6 h-6 text-primary" />,
    skills: ["Brand Identity", "UI/UX Design", "Typography", "Visual Hierarchy", "Wireframing"]
  },
  {
    title: "Digital Marketing",
    icon: <Megaphone className="w-6 h-6 text-primary" />,
    skills: ["Meta Ads", "Google Ads", "SEO & SEM", "Email Automation", "Content Strategy"]
  },
  {
    title: "Strategy & Analytics",
    icon: <LineChart className="w-6 h-6 text-primary" />,
    skills: ["Market Research", "Consumer Insights", "Google Analytics", "A/B Testing", "Conversion Optimization"]
  },
  {
    title: "Tools & Tech",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: ["Figma", "Adobe Creative Suite", "Webflow", "HubSpot", "Salesforce"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">Expertise</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">A versatile skill set.</h2>
            <p className="text-lg text-muted-foreground">
              Mastery of industry-standard tools combined with strategic frameworks to deliver comprehensive marketing and design solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-muted-foreground font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-border mr-3 group-hover:bg-primary/50 transition-colors"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
