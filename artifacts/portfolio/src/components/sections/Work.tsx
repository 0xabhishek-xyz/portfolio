import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Zap, BookOpen, Award, Globe } from 'lucide-react';

const achievements = [
  {
    icon: <TrendingUp className="w-7 h-7 text-primary" />,
    metric: "300%",
    label: "Engagement Lift",
    company: "Blockwiz.com",
    description: "Created a comprehensive blog strategy at Blockwiz that pumped client engagement by nearly 300% within just 3 months.",
    tag: "Content Strategy",
  },
  {
    icon: <Zap className="w-7 h-7 text-primary" />,
    metric: "6 hrs",
    label: "Token Sold Out",
    company: "Gamestar Exchange",
    description: "The $GMS IDO marketing campaign generated massive noise in the crypto community — token sold out in under 6 hours.",
    tag: "IDO Marketing",
  },
  {
    icon: <Users className="w-7 h-7 text-primary" />,
    metric: "400%",
    label: "Medium Growth",
    company: "Gamestar Exchange",
    description: "Built a content team from scratch that achieved 400% growth on Medium, 3x growth on Twitter, and 2x growth on Instagram.",
    tag: "Community Growth",
  },
  {
    icon: <BookOpen className="w-7 h-7 text-primary" />,
    metric: "28.6%",
    label: "Newsletter Open Rate",
    company: "Blockwiz.com",
    description: "Formulated a crisp newsletter plan for clients that consistently achieved a 28.6% average open rate — well above industry standard.",
    tag: "Email Marketing",
  },
  {
    icon: <Globe className="w-7 h-7 text-primary" />,
    metric: "2x",
    label: "Follower Growth",
    company: "Glimpse",
    description: "Led a comprehensive content strategy spanning blogs, SM posts, videos, and how-tos — resulting in nearly 2x follower growth across all platforms.",
    tag: "Social Media",
  },
  {
    icon: <Award className="w-7 h-7 text-primary" />,
    metric: "22%",
    label: "KuCoin Open Rate",
    company: "KuCoin Exchange",
    description: "Conceived and executed the weekly newsletter content calendar for KuCoin users, achieving a 22% open rate. 12+ articles ranked top trending on the KuCoin app.",
    tag: "Editorial",
  },
];

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">Impact & Results</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Numbers That Speak.</h2>
          </div>
          <p className="text-muted-foreground max-w-xs md:text-right text-sm">
            Selected highlights from 8+ web3 projects across blockchain marketing, DeFi, NFTs, and crypto exchanges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col gap-5"
            >
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>

              <div>
                <div className="text-5xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.metric}
                </div>
                <div className="text-sm font-semibold text-muted-foreground mt-1">{item.label}</div>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <p className="text-xs font-semibold text-primary mt-3">{item.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
