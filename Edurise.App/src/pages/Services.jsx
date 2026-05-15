import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Mic, Globe, PiggyBank, BookOpen } from 'lucide-react';
import ServiceCard from '../components/services/ServiceCard';

const services = [
  {
    icon: Compass,
    tag: 'Career Development',
    title: 'Career Guidance',
    image: '/images/CareerGuidance.png',
    description: 'Our career guidance program is designed to help you discover your strengths, explore career paths, and create a strategic roadmap for professional success. We combine personality assessments, industry insights, and one-on-one mentoring.',
    features: [
      'Personalized career assessment and profiling',
      'Industry-specific roadmap and action plans',
      'Resume and portfolio optimization',
      'Networking strategy and professional branding',
    ],
  },
  {
    icon: Mic,
    tag: 'Professional Skills',
    title: 'Interview Coaching',
    image: '/images/InterviewCoaching.png',
    description: 'Master every interview format — from behavioral to technical, through structured mock sessions and real-time feedback.',
    features: [
      'Mock interviews with detailed video feedback',
      'Body language and communication training',
      'Industry-specific question preparation',
      'Salary negotiation and offer evaluation',
    ],
  },
  {
    icon: Globe,
    tag: 'Cultural Transition',
    title: 'Culture Shock Support',
    image: '/images/CultureShock.png',
    description: 'Moving to a new country can be overwhelming. Our cultural adaptation program provides the tools, knowledge, and emotional support you need to thrive in unfamiliar environments and turn challenges into growth opportunities.',
    features: [
      'Pre-departure orientation and preparation',
      'Cultural awareness and sensitivity training',
      'Community building and peer connections',
      'Ongoing support and check-ins post-arrival',
    ],
  },
  {
    icon: PiggyBank,
    tag: 'Financial Wellness',
    title: 'Financial Planning',
    image: '/images/FinancialPlanning.png',
    description: 'Education is an investment, and we help you make the most of it. From scholarship applications to budgeting strategies, we ensure financial concerns never stand between you and your educational goals.',
    features: [
      'Budget planning and expense management',
      'Savings plan',
      'Paper work and relocation finanicial planning ',
    ],
  },
  {
    icon: BookOpen,
    tag: 'Academic Environment',
    title: 'School Culture',
    image: '/images/SchoolCulture.png',
    description: 'Every institution has its own unique culture and expectations. We help you understand academic norms, build meaningful relationships with faculty, and develop the soft skills needed to excel in any educational setting.',
    features: [
      'Academic etiquette and classroom dynamics',
      'Student-faculty relationship building',
      'Study group and collaboration strategies',
      'Extra-curricular and leadership development',
    ],
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Our Services</p>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Everything You Need to <span className="text-primary">Succeed</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive consultancy services designed to support every stage of your educational and professional journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24 lg:space-y-32">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} isReversed={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-muted-foreground mb-8">
            Book a free consultation and we'll help you figure out the perfect plan for your goals.
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-full px-8 h-14 text-base font-medium gap-2 group">
              Book Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}