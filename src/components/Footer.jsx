import { Link } from 'react-router-dom';
import { Phone, ChevronDown, Mail, MapPin, } from 'lucide-react';

import Logo from './Logo.jsx';
import { business } from '../data/business.js';
import { services } from '../data/services.js';
import React, { useState } from 'react';


export default function Footer() {
  const [showLocations, setShowLocations] = useState(false);
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
          <ul className="space-y-3 max-h-48 text-sm text-ash/70 overflow-y-auto pr-2 custom-scrollbar">
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
          
      <li>
              <div className="mt-4">
  <button
    onClick={() => setShowLocations(!showLocations)}
    className="w-full flex items-center justify-between w-full text-left"
  >
    <span className="flex items-center gap-2 text-ash/80">
      <MapPin className="text-primary" size={18} />
      <span> Service Locations</span>
      </span>
    <ChevronDown
      size={18}
      className={`transition-transform duration-300 ${
        showLocations ? "rotate-180" : ""
      }`}
    />
  </button>

  {showLocations && (
    <div className="mt-3 ml-6 max-h-48 overflow-y-auto pr-2 space-y-2 text-sm text-ash/70 scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">

        <p>📍 L.B. Nagar</p>
        <p>📍 Rajendranagar</p>
        <p>📍 TGPA, Bandlaguda Jagir</p>
        <p>📍 Mehdipatnam</p>
        <p>📍 Tolichowki</p>
        <p>📍 Manikonda</p>
        <p>📍 Narsingi</p>
        <p>📍 Nanakramguda</p>
        <p>📍 Tellapur</p>
        <p>📍 Nallagandla</p>
        <p>📍 Serilingampalle</p>
        <p>📍 Ramachandrapuram</p>
        <p>📍 Gachibowli</p>
        <p>📍 Kondapur</p>
        <p>📍 Banjara Hills</p>
        <p>📍 Ameerpet</p>
        <p>📍 Madhapur</p>
        <p>📍 Kukatpally</p>
        <p>📍 Miyapur</p>
        <p>📍 Bachupally</p>
        <p>📍 Balanagar</p>
        <p>📍 Gandi Maisamma</p>
        <p>📍 Kompally</p>
        <p>📍 Tirumalagiri</p>
        <p>📍 Ghatkesar</p>

      </div>
  
  )}
</div>
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
