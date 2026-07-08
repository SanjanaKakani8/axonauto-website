import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

import SEO from '../components/SEO.jsx';
import ParticleBackground from '../components/ParticleBackground.jsx';
import { business } from '../data/business.js';
import { galleryImages } from '../data/gallery.js';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI-only form per brief — no backend wired up.
    setSubmitted(true);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO
        title="Contact Us"
        description={`Get in touch with ${business.fullName} to book a doorstep car service in ${business.location.city}.`}
      />

      <section className="relative pt-40 pb-16 overflow-hidden">
        <ParticleBackground />
        <div className="container-page">
          <motion.p variants={fadeUp} initial="hidden" animate="show" className="eyebrow mb-3">
            Get In Touch
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="section-heading max-w-2xl"
          >
            Let's get your car sorted.
          </motion.h1>
        </div>
      </section>

      <section className="pb-24 border-t border-white/5 pt-16">
        <div className="container-page grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact details */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href={`tel:${business.contact.phoneRaw}`}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-secondary/40 p-6 hover:border-primary/40 transition-colors"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-ash/50 mb-1">Call Us</p>
                <p className="font-display text-white font-medium">{business.contact.phone}</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${business.contact.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-secondary/40 p-6 hover:border-primary/40 transition-colors"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-ash/50 mb-1">WhatsApp</p>
                <p className="font-display text-white font-medium">{business.contact.whatsapp}</p>
              </div>
            </a>

            <a
              href={`mailto:${business.contact.email}`}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-secondary/40 p-6 hover:border-primary/40 transition-colors"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-ash/50 mb-1">Email</p>
                <p className="font-display text-white font-medium">{business.contact.email}</p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-secondary/40 p-6">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-ash/50 mb-1">Service Area</p>
                <p className="font-display text-white font-medium">
                  {business.location.city}, {business.location.region}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-secondary/40 p-6">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-ash/50 mb-1.5">Business Hours</p>
                {business.businessHours.map((h) => (
                  <p key={h.day} className="text-sm text-ash/70">
                    <span className="text-white/80">{h.day}:</span> {h.hours}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form + Map */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 space-y-8"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-secondary/40 p-7 md:p-8 space-y-5"
            >
              <h2 className="font-display text-xl font-semibold text-white">Request a Service</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ash/60">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-white/10 bg-base/60 px-4 py-3 text-sm text-white placeholder:text-ash/30 focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-ash/60">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    className="w-full rounded-lg border border-white/10 bg-base/60 px-4 py-3 text-sm text-white placeholder:text-ash/30 focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="mb-1.5 block text-xs font-medium text-ash/60">
                  Service Needed
                </label>
                <select
                  id="service"
                  className="w-full rounded-lg border border-white/10 bg-base/60 px-4 py-3 text-sm text-white outline-none focus:border-primary transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled>Select a service</option>
                  <option>Periodic Car Service</option>
                  <option>Battery Replacement</option>
                  <option>Roadside Assistance</option>
                  <option>Jump Start</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ash/60">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Car model, location, and preferred time"
                  className="w-full resize-none rounded-lg border border-white/10 bg-base/60 px-4 py-3 text-sm text-white placeholder:text-ash/30 focus:border-primary outline-none transition-colors"
                />
              </div>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Request <Send size={16} />
              </button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-primary"
                >
                  Thanks — we've received your request and will confirm shortly.
                </motion.p>
              )}
            </form>

            {/* Real service photo + Google Maps placeholder */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-secondary/40 grid place-items-center">
                <div className="text-center px-4">
                  <MapPin className="mx-auto mb-3 text-primary" size={28} />
                  <p className="text-sm text-ash/50">Google Maps embed placeholder</p>
                  <p className="text-xs text-ash/30 mt-1">Serving {business.location.city} and surrounding areas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
