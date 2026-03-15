import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const experiences = [
  {
    role: "Content Marketing Associate",
    company: "Blockwiz.com",
    tag: "Blockchain Marketing Agency",
    period: "Recent",
    description: "Provided content strategy to one of the leading Blockchain marketing agencies, executing content marketing for more than a dozen crypto projects alongside internal Blockwiz marketing.",
    highlights: [
      "Created a comprehensive blog strategy that pumped engagement by nearly 300% within 3 months",
      "SM Strategy that ensured rapid onboarding and community building — most done from scratch",
      "Formulated a newsletter plan with an average open rate of 28.6% across client accounts",
    ],
  },
  {
    role: "Content Strategy Consultant",
    company: "Lithium Finance",
    tag: "DeFi Pricing Oracle",
    period: "Consulting",
    description: "Joined this DeFi pricing oracle for illiquid assets as a consultant for editorial needs, streamlining operations from ideation to final execution.",
    highlights: [
      "Streamlined editorial operations from conceptualization to final execution",
      "Planned and created an effective blog strategy calendar to build an online presence on Medium",
      "Helped in building a thriving community on social media, especially Twitter",
    ],
  },
  {
    role: "Content Strategist",
    company: "SugarBounce",
    tag: "Web3 · IDO Campaign",
    period: "IDO Launch",
    description: "Led content strategy for the IDO of the $TIP token, a one-of-a-kind Web3 project. Built massive traction on Medium, Twitter and Instagram before the drop.",
    highlights: [
      "Strategized the pre-IDO content campaign, strengthening awareness of the Sugar verticals for both audience and creators",
      "Coordinated product development with the product team based on community response across all digital media",
      "Optimized website UI/UX writing — resulted in a massive drop in bounce rate and increase in conversion",
    ],
  },
  {
    role: "Contributing Editor",
    company: "KuCoin Exchange",
    tag: "Top-Tier Crypto Exchange",
    period: "Editorial",
    description: "Crafted long-form content and the weekly newsletter content calendar for one of the world's largest crypto exchanges.",
    highlights: [
      "Wrote 24+ long-form, well-researched blogs on token analysis, Weekly Market movements, and new listings — over half secured top trending spots on KuCoin website and mobile apps",
      "Conceived content and the calendar for KuCoin's weekly newsletter — reported open rate of 22%",
    ],
  },
  {
    role: "Content Manager",
    company: "Gamestar Exchange",
    tag: "Crypto Gaming · IDO",
    period: "Growth",
    description: "Tasked with building a content marketing team from scratch leading to the eventual IDO launch on various launchpads.",
    highlights: [
      "Achieved 400% growth on Medium, Twitter grew 3x, Instagram 2x — regular beta-version visitors also grew by massive margins",
      "IDO marketing campaign was a massive success — $GMS token sold out in just 6 hours",
      "Content strategy plan giving personalized guidelines to influencer collaborators was also a flagship success",
    ],
  },
  {
    role: "Content Lead",
    company: "Glimpse",
    tag: "Decentralized Social Media · NFTs",
    period: "Lead",
    description: "Led content creation and delivery for a decentralized social media platform enabling creators and influencers to connect with their fan base using NFTs.",
    highlights: [
      "Optimized the website with best-in-class copywriting and SEO practices to drive conversion",
      "Developed a comprehensive content strategy spanning blogs, SM posts, videos, and how-to content to build presence across all spaces",
      "Measured steps reflected in nearly 2x jump in follower counts across social and digital media platforms",
    ],
  },
  {
    role: "Marketing Consultant",
    company: "Easy Energy Finance",
    tag: "US-Listed · DeFi",
    period: "Consulting",
    description: "Sister company and finance wing of US-based public listed company $DUTV. Helped set up a robust marketing plan for their tokenized model pivot.",
    highlights: [
      "Built a novel digital media presence that led to high interest in the token — a sustainable and appealing marketing approach contrary to standard practice in the space",
      "At the helm of strategies for newsletters, outreach, blogs, SM campaigns, PRs and drafting proposals",
    ],
  },
  {
    role: "Editorial Executive",
    company: "Reneverse.io",
    tag: "Web3 Gaming Protocol",
    period: "Founding Team",
    description: "Was closely involved with the founding members of this Web3 gaming protocol for developers and gamers during its nascent phase, helping define its brand and marketing from the ground up.",
    highlights: [
      "Closely associated with key aspects of the protocol including finalizing tokenomics and brand identity brainstorming",
      "Conceptualized the overall marketing strategy for all viable digital media with a personalized approach for both developers and gamers",
      "For the Reneverse Genesis NFT Drop: conceived the detailed background story, use cases for holders, design traits, entire marketing campaign, and UI writing for the drop page",
    ],
  },
];

export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 md:py-32 bg-background relative">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">Career Journey</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Professional Experience</h2>
        </div>

        <div className="relative border-l-2 border-secondary/50 pl-8 md:pl-12 ml-4 md:ml-0 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 rounded-full bg-primary -left-[42px] md:-left-[58px] top-3 ring-4 ring-background"></div>
              
              <button
                className="w-full text-left"
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1 gap-2">
                  <h3 className="text-xl font-display font-bold text-foreground">{exp.role}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                    {exp.tag}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold text-muted-foreground">{exp.company}</h4>
                  <ChevronDown 
                    className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${expanded === index ? 'rotate-180' : ''}`} 
                  />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {expanded === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
