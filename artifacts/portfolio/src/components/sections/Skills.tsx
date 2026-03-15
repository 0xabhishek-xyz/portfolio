import React from 'react';
import { motion } from 'framer-motion';
import { PenLine, BarChart3, Users, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: "Content & Strategy",
    icon: <PenLine className="w-6 h-6 text-primary" />,
    skills: ["Content Strategy", "Copywriting", "Long-form Writing", "UI/UX Writing", "Creating Proper Tonality", "Writing Calls-to-Action", "Apt Narration", "Proof Reading"],
  },
  {
    title: "Growth & Marketing",
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    skills: ["SEO Skills", "Newsletter Marketing", "SM Campaigns", "Influencer Outreach", "IDO / Token Marketing", "PR & Proposals", "Target Readership Analysis", "Data Analysis"],
  },
  {
    title: "Community & Relationships",
    icon: <Users className="w-6 h-6 text-primary" />,
    skills: ["Community Building", "Client Relationship Management", "Team Building & Leadership", "Twitter / X Growth", "Medium Growth", "Discord Management"],
  },
  {
    title: "Traits & Soft Skills",
    icon: <Brain className="w-6 h-6 text-primary" />,
    skills: ["Analytical", "Adaptability", "Originality", "Clarity", "Humor", "Fluency", "Data Visualization", "Technical Outlook", "Perceptiveness", "Meeting Deadlines"],
  },
];

const softSkillCloud = [
  { label: "Blockchain Enthusiast", size: "text-lg font-bold" },
  { label: "Storyteller", size: "text-2xl font-extrabold" },
  { label: "Analytical", size: "text-xl font-bold" },
  { label: "Adaptable", size: "text-2xl font-extrabold" },
  { label: "Data Visualization", size: "text-base font-semibold" },
  { label: "Humor", size: "text-xl font-bold" },
  { label: "Passionate", size: "text-lg font-bold" },
  { label: "Clarity", size: "text-base font-semibold" },
  { label: "Writing CTAs", size: "text-xl font-bold" },
  { label: "Perceptiveness", size: "text-base font-semibold" },
  { label: "Technical Outlook", size: "text-base font-semibold" },
  { label: "Fluency", size: "text-lg font-bold" },
  { label: "Proof Reading", size: "text-sm font-semibold" },
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
              Built across 8+ Web3 projects — from IDO launches to community building to editorial excellence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                  <li key={i} className="flex items-center text-muted-foreground font-medium text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-border mr-3 shrink-0 group-hover:bg-primary/50 transition-colors"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Soft skill word cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background border border-border rounded-2xl p-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Personality & Soft Skills</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 items-baseline">
            {softSkillCloud.map((item, i) => (
              <span
                key={i}
                className={`${item.size} text-foreground/80 hover:text-primary transition-colors cursor-default`}
              >
                {item.label}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
