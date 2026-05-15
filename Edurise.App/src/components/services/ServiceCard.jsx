import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function ServiceCard({ service, index, isReversed }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}
    >
      <div className={`${isReversed ? 'lg:order-2' : ''}`}>
        <div className="overflow-hidden rounded-2xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-72 lg:h-96 object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      <div className={`space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <service.icon className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">
            {service.tag}
          </span>
        </div>

        <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground">
          {service.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          {service.description}
        </p>

        <ul className="space-y-3">
          {service.features.map(feature => (
            <li key={feature} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="text-sm text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}