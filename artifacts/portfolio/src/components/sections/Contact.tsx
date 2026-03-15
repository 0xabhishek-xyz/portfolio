import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. Abhishek will get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      
      {/* Decorative large text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-5">
        <span className="text-[15vw] font-display font-bold whitespace-nowrap leading-none">CONNECT</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Let's build something <span className="text-primary">remarkable.</span>
            </h2>
            <p className="text-xl text-background/70 mb-12 max-w-lg font-light">
              Looking to launch a token, grow a community, or build a content powerhouse? Let's talk strategy.
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:abhishekkr711@gmail.com" 
                className="flex items-center gap-4 text-background/80 hover:text-primary transition-colors group w-fit"
              >
                <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">abhishekkr711@gmail.com</span>
              </a>
              <a 
                href="tel:+918709547249" 
                className="flex items-center gap-4 text-background/80 hover:text-primary transition-colors group w-fit"
              >
                <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">+91 8709547249</span>
              </a>
              <div className="flex items-center gap-4 text-background/80 w-fit">
                <div className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">Hyderabad, India · Available Remotely</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background/5 p-8 md:p-10 rounded-3xl border border-background/10 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-background/80">Name</label>
                  <input 
                    id="name"
                    required
                    type="text" 
                    className="w-full bg-background/10 border border-background/20 rounded-xl px-4 py-3 text-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-background/80">Email</label>
                  <input 
                    id="email"
                    required
                    type="email" 
                    className="w-full bg-background/10 border border-background/20 rounded-xl px-4 py-3 text-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-background/80">Subject</label>
                <input 
                  id="subject"
                  required
                  type="text" 
                  className="w-full bg-background/10 border border-background/20 rounded-xl px-4 py-3 text-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Token launch / Content strategy / IDO..."
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-background/80">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-background/10 border border-background/20 rounded-xl px-4 py-3 text-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell me about your project and goals..."
                ></textarea>
              </div>
              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
