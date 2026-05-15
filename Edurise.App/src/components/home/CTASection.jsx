import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-primary overflow-hidden px-8 py-16 lg:px-16 lg:py-24 text-center"
        >
          <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary/80" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-primary-foreground leading-tight">
              Ready to Transform Your Future?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
              Book a free 30-minute consultation and discover how we can help you achieve your educational and career goals.
            </p>
            <div className="mt-10">
              <Link to="/contact">
                <Button size="lg" className="rounded-full px-8 h-14 text-base font-medium bg-accent text-accent-foreground hover:bg-accent/90 gap-2 group">
                  Get Started Today
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}