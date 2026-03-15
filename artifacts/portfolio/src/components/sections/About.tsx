import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MessageSquare, TrendingUp } from 'lucide-react';

export function About() {
  const stats = [
    { icon: <TrendingUp className="text-primary" />, value: "8+", label: "Web3 Projects" },
    { icon: <Zap className="text-primary" />, value: "300%", label: "Avg. Engagement Lift" },
    { icon: <MessageSquare className="text-primary" />, value: "28.6%", label: "Newsletter Open Rate" },
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
              <span className="font-display font-bold text-4xl text-foreground">Web3</span>
              <span className="text-primary font-medium">& Content</span>
              <p className="text-xs text-muted-foreground mt-2 leading-tight">Storytelling that drives measurable on-chain growth.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">About Me</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              A <span className="text-primary">crafty storyteller</span> and a born leader.
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground font-light">
              <p>
                I'm a web3 content marketer and strategist who has helped budding and established blockchain projects orchestrate successful IDOs and NFT drops. My signature is a laser-sharp, personalized content strategy that builds communities from scratch and keeps them engaged.
              </p>
              <p>
                From spearheading a <strong className="text-foreground font-medium">blog strategy that lifted engagement 300% in 3 months</strong> at Blockwiz, to selling out the $GMS token in <strong className="text-foreground font-medium">6 hours</strong> at Gamestar Exchange — I bring a results-obsessed mindset to every project.
              </p>
              <p>
                A big-time believer in personalized marketing and achieving it with the power of storytelling. Patient listener, avid reader, and relentless about innovation and perfection. Based in <strong className="text-foreground font-medium">Hyderabad, India</strong>.
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
