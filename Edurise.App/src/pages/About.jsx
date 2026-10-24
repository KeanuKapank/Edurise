import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Target, Users, Award } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Student-First Approach',
    description: 'Every decision we make is guided by what\'s best for our professionals. Your success is our success.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We don\'t just give advice — we deliver measurable outcomes and track your progress every step of the way.',
  },
  {
    icon: Users,
    title: 'Inclusive Community',
    description: 'We celebrate diversity and create a welcoming environment for professionals from every background and walk of life.',
  },
  {
    icon: Award,
    title: 'Excellence in Everything',
    description: 'I am an experienced consultant who brings world-class expertise and unwavering dedication to every engagement.',
  },
];



export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">About Us</p>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
              We Believe in the Power of{' '}
              <span className="text-primary">Guided Education</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Founded in 2026, EduRise has helped professionals navigate their educational journeys, We combine industry expertise with genuine care for every individual we work with.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Mission</p>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
                Making World-Class Education Accessible to Everyone
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We envision a world where every student, regardless of background or geography, has access to expert guidance that empowers them to make confident decisions about their education and career.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our holistic approach addresses not just academic planning, but the emotional, cultural, and financial dimensions that shape the educational experience. We don't just open doors — we help you walk through them with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 gap-6"
            >
              {values.map((v, i) => (
                <div key={v.title} className="p-6 rounded-2xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-chart-2 text-sm mb-2">{v.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-muted-foreground mb-8">
            Ready to take the first step? We'd love to hear from you.
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-full px-8 h-14 text-base font-medium gap-2 group">
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}