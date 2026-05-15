import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Mic, Globe, PiggyBank, BookOpen } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: 'Career Guidance',
    description: 'Personalized career mapping and strategic planning to help you find your true professional calling.',
  },
  {
    icon: Mic,
    title: 'Interview Coaching',
    description: 'Master the art of interviews with mock sessions, feedback, and confidence-building techniques.',
  },
  {
    icon: Globe,
    title: 'Culture Shock Support',
    description: 'Navigate cultural transitions smoothly with our proven adaptation strategies and mentorship.',
  },
  {
    icon: PiggyBank,
    title: 'Financial Planning',
    description: 'Smart financial strategies for budget planning and expense management.',
  },
  {
    icon: BookOpen,
    title: 'School Culture',
    description: 'Understand and thrive in diverse academic environments with our expert cultural guidance.',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
            Comprehensive Support for Your Educational Journey
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From choosing the right career path to adapting to a new culture, we provide end-to-end guidance tailored to your unique needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link to="/services" className="group block h-full">
                <div className="h-full p-8 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}