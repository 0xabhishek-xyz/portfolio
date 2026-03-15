import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Zap } from 'lucide-react';

export function About() {
  const stats = [
    { icon: <Target className="text-primary" />, value: "8+", label: "Years Experience" },
    { icon: <Zap className="text-primary" />, value: "50+", label: "Campaigns Launched" },
    { icon: <Award className="text-primary" />, value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-secondary relative">
              <img 
                src={`${import.meta.env.BASE_URL}images/about-sculpture.png`}
                alt="Abstract sculpture representing design" 
                className="w-full h-full object-cover mix-blend-darken opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-background border border-border rounded-2xl p-6 shadow-xl flex flex-col justify-center">
              <span className="font-display font-bold text-4xl text-foreground">Design</span>
              <span className="text-primary font-medium">& Marketing</span>
              <p className="text-xs text-muted-foreground mt-2 leading-tight">Bridging the gap between aesthetics and conversion.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              A blend of <span className="text-primary">creative vision</span> and analytical rigor.
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground font-light">
              <p>
                I believe that the best marketing doesn't feel like marketing. It feels like a solution, a story, or a piece of art that perfectly intersects with a user's need.
              </p>
              <p>
                With a dual background in brand strategy and digital performance, I help companies not just look premium, but operate efficiently. From orchestrating multi-channel advertising campaigns to refining visual identities, my approach is always holistic.
              </p>
              <p>
                Whether it's scaling user acquisition through Meta & Google Ads, or crafting a compelling brand narrative using the Adobe Creative Suite and Figma, I bring ideas to life and measure their impact.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    {stat.icon}
                  </div>
                  <span className="text-3xl font-display font-bold text-foreground">{stat.value}</span>
                  <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
