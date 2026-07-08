import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Send } from 'lucide-react';

import SEO from '../components/SEO.jsx';
import ParticleBackground from '../components/ParticleBackground.jsx';
import ScrollIndicator from '../components/ScrollIndicator.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import StatCounter from '../components/StatCounter.jsx';

import { business } from '../data/business.js';
import { services } from '../data/services.js';
import { galleryImages } from '../data/gallery.js';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  // Hero content appears right after the splash finishes (~3s play + 0.6s fade).
  const baseDelay = 3.6;

  return (
    <main>
      <SEO
        title="Doorstep Car Care in Hyderabad"
        description={business.shortDescription}
      />

      {/* ───────────── HERO ───────────── */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
        <ParticleBackground dense />

        <div className="container-page relative">
          <motion.p
            className="eyebrow mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: baseDelay, duration: 0.6 }}
          >
            {business.experienceYears} Years of Trusted Service in {business.location.city}
          </motion.p>

          <motion.h1
            className="max-w-3xl font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] text-white"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: baseDelay + 0.15, duration: 0.7 }}
          >
            Your Trusted Automotive Partner for{' '}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Doorstep Car Care
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base md:text-lg text-ash/70 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: baseDelay + 0.3, duration: 0.7 }}
          >
            {business.shortDescription}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: baseDelay + 0.45, duration: 0.7 }}
          >
            <Link to="/contact" className="btn-primary">
              Book Service <ArrowRight size={18} />
            </Link>
            <a href={`tel:${business.contact.phoneRaw}`} className="btn-secondary">
              <Phone size={18} /> Call Now
            </a>
          </motion.div>
        </div>

        <ScrollIndicator delay={baseDelay + 0.3} />
      </section>

      {/* ───────────── SERVICES PREVIEW ───────────── */}
      <section className="relative py-24 md:py-32">
        <div className="container-page">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-2xl"
          >
            <p className="eyebrow mb-3">What We Do</p>
            <h2 className="section-heading">Complete car care, delivered to your door</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── ABOUT ───────────── */}
      <section className="relative py-24 md:py-32 border-t border-white/5">
        <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow mb-3">Who We Are</p>
            <h2 className="section-heading mb-6">
              Built on reliability. Driven by your convenience.
            </h2>
            <p className="text-ash/70 leading-relaxed mb-5">{business.shortDescription}</p>
            <div className="space-y-4">
              <div>
                <h4 className="font-display text-sm font-semibold text-white mb-1">Our Mission</h4>
                <p className="text-sm text-ash/60">{business.mission}</p>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-white mb-1">Our Vision</h4>
                <p className="text-sm text-ash/60">{business.vision}</p>
              </div>
            </div>
            <Link to="/about" className="btn-secondary mt-8 inline-flex">
              More About Us <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-secondary/40 p-8"
          >
            {business.stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────────── WHY CHOOSE US ───────────── */}
      <section className="relative py-24 md:py-32 border-t border-white/5">
        <div className="container-page">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-2xl"
          >
            <p className="eyebrow mb-3">Why Choose Us</p>
            <h2 className="section-heading">Care that meets you where you are</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {business.whyChooseUs.map((feature, i) => (
              <FeatureCard key={feature.title} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── CALL TO ACTION ───────────── */}
      <section className="relative py-24 md:py-28 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-radial-red -z-10" />
        <div className="container-page text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-heading mb-5"
          >
            Ready for car care that comes to you?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-ash/70 max-w-xl mx-auto mb-9"
          >
            Book a doorstep visit in {business.location.city} and let our technicians handle the rest.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/contact" className="btn-primary">
              Book Service <ArrowRight size={18} />
            </Link>
            <a href={`tel:${business.contact.phoneRaw}`} className="btn-secondary">
              <Phone size={18} /> Call Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* ───────────── GALLERY PREVIEW ───────────── */}
      <section className="relative py-24 md:py-28 border-t border-white/5">
        <div className="container-page">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex flex-wrap items-end justify-between gap-4"
          >
            <div>
              <p className="eyebrow mb-3">Our Work</p>
              <h2 className="section-heading">A look at real jobs, done right</h2>
            </div>
            <Link to="/gallery" className="btn-secondary text-sm">
              View Gallery <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.slice(0, 4).map((img, i) => (
              <motion.div
                key={img.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group aspect-square overflow-hidden rounded-2xl border border-white/10"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── CONTACT PREVIEW ───────────── */}
      <section className="relative py-24 md:py-28 border-t border-white/5">
        <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow mb-3">Get In Touch</p>
            <h2 className="section-heading mb-6">Book your doorstep visit</h2>
            <p className="text-ash/70 leading-relaxed mb-6 max-w-md">
              Reach out over phone, WhatsApp, or email — or send a quick message and our team will
              confirm a time that works for you.
            </p>
            <ul className="space-y-3 text-sm text-ash/70">
              <li>Phone: <a href={`tel:${business.contact.phoneRaw}`} className="text-primary hover:underline">{business.contact.phone}</a></li>
              <li>Email: <a href={`mailto:${business.contact.email}`} className="text-primary hover:underline">{business.contact.email}</a></li>
              <li>Location: {business.location.city}, {business.location.country}</li>
            </ul>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-secondary/40 p-7 space-y-4"
          >
            <div>
              <label htmlFor="home-name" className="mb-1.5 block text-xs font-medium text-ash/60">Full Name</label>
              <input
                id="home-name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-white/10 bg-base/60 px-4 py-3 text-sm text-white placeholder:text-ash/30 focus:border-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="home-phone" className="mb-1.5 block text-xs font-medium text-ash/60">Phone Number</label>
              <input
                id="home-phone"
                type="tel"
                required
                placeholder="10-digit mobile number"
                className="w-full rounded-lg border border-white/10 bg-base/60 px-4 py-3 text-sm text-white placeholder:text-ash/30 focus:border-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="home-message" className="mb-1.5 block text-xs font-medium text-ash/60">What do you need?</label>
              <textarea
                id="home-message"
                rows={3}
                placeholder="Tell us about your car and preferred time"
                className="w-full resize-none rounded-lg border border-white/10 bg-base/60 px-4 py-3 text-sm text-white placeholder:text-ash/30 focus:border-primary outline-none transition-colors"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Request <Send size={16} />
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
