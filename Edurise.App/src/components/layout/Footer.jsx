import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold tracking-tight">EduRise</span>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed max-w-xs">
              Empowering students and professionals to navigate their educational journey with confidence and clarity.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/40">Services</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><Link to="/services" className="hover:text-background transition-colors">Career Guidance</Link></li>
              <li><Link to="/services" className="hover:text-background transition-colors">Interview Coaching</Link></li>
              <li><Link to="/services" className="hover:text-background transition-colors">Culture Shock Support</Link></li>
              <li><Link to="/services" className="hover:text-background transition-colors">Financial Planning</Link></li>
              <li><Link to="/services" className="hover:text-background transition-colors">School Culture</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/40">Company</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><Link to="/about" className="hover:text-background transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/40">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                Edurise21@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                South Africa, ZA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/40">
          © {new Date().getFullYear()} EduRise Consultancy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}