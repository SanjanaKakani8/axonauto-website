import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, } from 'lucide-react';

import Logo from './Logo.jsx';
import { business } from '../data/business.js';
import { services } from '../data/services.js';


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-secondary/60">
      <div className="container-page py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div>
          <Logo size="sm" interactive={false} />
          <p className="mt-4 text-sm text-ash/70 leading-relaxed max-w-xs">
            {business.shortDescription}
          </p>
          
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm text-ash/70">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white mb-4">
            Services
          </h4>
          <ul className="space-y-3 text-sm text-ash/70">
            {services.map((s) => (
              <li key={s.id}>
                <Link to="/services" className="hover:text-primary transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-ash/70">
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-primary shrink-0" />
              <a href={`tel:${business.contact.phoneRaw}`} className="hover:text-primary transition-colors">
                {business.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-primary shrink-0" />
              <a href={`mailto:${business.contact.email}`} className="hover:text-primary transition-colors">
                {business.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} className="text-primary shrink-0" />
              {business.location.city}, {business.location.country}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <p className="container-page text-center text-xs text-ash/50">
          © {year} {business.fullName}. All rights reserved.Owned and operated by A. Venkat Adithya.
        </p>
      </div>
    </footer>
  );
}
