import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Global SaaS Rebrand",
    category: "Brand Identity & Strategy",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop", // Unsplash abstract architecture/design
    description: "Complete visual overhaul and repositioning for an enterprise B2B software company, resulting in a 40% increase in enterprise pipeline."
  },
  {
    title: "Q3 Performance Growth",
    category: "Digital Marketing Campaign",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Unsplash data/abstract
    description: "Omnichannel acquisition campaign utilizing Meta, Google, and LinkedIn ads that reduced CAC by 22% while scaling spend."
  },
  {
    title: "FinTech Product Launch",
    category: "Product Marketing & UI",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", // Unsplash clean minimal space
    description: "Go-to-market strategy and landing page design for a new consumer finance app that acquired 10k users in month one."
  }
];

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">Selected Work</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Featured Projects.</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 bg-secondary">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20 shadow-lg">
                  <ArrowUpRight className="w-5 h-5 text-foreground" />
                </div>
              </div>
              
              <div className="px-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
