import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    year: "2014",
    degree: "Matriculation (ICSE Board)",
    school: "Carmel School, Madhupur",
    score: "90.4%",
  },
  {
    year: "2018",
    degree: "Intermediate",
    school: "Pentecostal Assembly School",
    score: "72%",
  },
  {
    year: "2019",
    degree: "Bachelor in Computer Application",
    school: "IMS Noida",
    score: "82%",
  },
];

export function Education() {
  return (
    <section className="py-20 bg-card border-t border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary" />
          </div>
          <div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm block">Academic Background</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Education</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border rounded-2xl p-6 flex flex-col gap-3 hover:border-primary/20 hover:shadow-md transition-all"
            >
              <span className="text-4xl font-display font-bold text-primary">{item.year}</span>
              <div>
                <h3 className="font-bold text-foreground">{item.degree}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.school}</p>
              </div>
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                Score: {item.score}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
