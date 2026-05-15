import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Students at a modern campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex -space-x-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-background/70 font-medium">Trusted by 2,000+ students worldwide</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-background leading-tight">
              Your Future,{' '}
              <span className="text-accent">Guided</span>{' '}
              with Purpose
            </h1>

            <p className="mt-6 text-lg text-background/70 leading-relaxed max-w-lg">
              Expert education consultancy that transforms uncertainty into clarity. From career guidance to cultural adaptation — we're with you at every step.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="rounded-full px-8 text-base font-medium h-14 gap-2 group">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="rounded-full px-8 text-base font-medium h-14 bg-transparent text-background border-background/30 hover:bg-background/10 hover:text-background">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}