import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ms. Wendell',
    role: 'MBA Graduate',
    text: 'EduRise transformed my career trajectory. Their guidance helped me secure admission to my dream business school and navigate the cultural transition seamlessly.',
    rating: 5,
  },
  {
    name: 'Mr. Van Wyk',
    role: 'Departmental Head',
    text: 'The interview coaching was incredible. I went from being nervous to confident, and landed offers from three top tech companies. Worth every penny.',
    rating: 5,
  },
  {
    name: 'Ms. Roelfse',
    role: 'English Teacher',
    text: 'Moving abroad was daunting, but EduRise culture shock support made it so much easier. They truly understand the international student experience.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
            Stories of Success
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-shadow duration-500"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-medium text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}