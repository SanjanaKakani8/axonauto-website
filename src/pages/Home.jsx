import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Send, Check } from 'lucide-react';

import SEO from '../components/SEO.jsx';
import HeroSlider from '../components/HeroSlider.jsx';
import ScrollIndicator from '../components/ScrollIndicator.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import StatCounter from '../components/StatCounter.jsx';

import { business } from '../data/business.js';
import { services } from '../data/services.js';
import { galleryImages } from '../data/gallery.js';
import logoGear from '../assets/logo-gear.png';
import logoText from '../assets/logo-text.png';
import useRipple from '../hooks/useRipple.jsx';
import HeroVideo from '../components/HeroVideo.jsx';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  // Hero content appears right after the splash finishes (~3s play + 0.6s fade).
  const baseDelay = 3.8;
  const bookRipple = useRipple();
  const callRipple = useRipple();
  const ctaBookRipple = useRipple();
  const ctaCallRipple = useRipple();
  const formRipple = useRipple();

  return (
    <main>
      <SEO
        title="Doorstep Car Care in Hyderabad"
        description={business.shortDescription}
      />
      {/* ───────────── HERO ───────────── */}
      <section className="relative min-h-[100dvh] overflow-hidden flex items-center pt-24 md:pt-28">
        <HeroVideo />
        <div className='relative z-10'>

        <div className="container-page relative">
          {/* This is the SAME logo element from the splash screen — Framer
              Motion's shared layoutId animates it from the splash straight
              into this resting position, no fade, no second logo. */}
          <div className="mb-8 flex items-center gap-3">
            <motion.img
              layoutId="axon-logo-gear"
              src={logoGear}
              alt=""
              aria-hidden
              draggable={false}
              className="h-16 w-16 md:h-20 md:w-20 select-none"
            />
            <motion.img
              layoutId="axon-logo-text"
              src={logoText}
              alt="AxonAuto"
              draggable={false}
              className="h-8 md:h-10 select-none"
            />
          </div>

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
            className="mt-6 max-w-xl text-base md:text-lg text-white leading-relaxed drop-shadow-md"
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
            <Link to="/contact" className="btn-primary" onClick={bookRipple.onClick}>
              Book Now <ArrowRight size={18} />
              {bookRipple.ripples}
            </Link>
            <a href={`tel:${business.contact.phoneRaw}`} className="btn-secondary" onClick={callRipple.onClick}>
              <Phone size={18} /> Call
              {callRipple.ripples}
            </a>
          </motion.div>

          {/* Glassmorphism feature badges */}
          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: baseDelay + 0.6, duration: 0.7 }}
          >
            {['Trusted Service', 'Genuine Parts', 'Expert Technicians', 'Quick Support'].map((label) => (
              <span
                key={label}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs md:text-sm font-medium text-ash/90 backdrop-blur-md"
              >
                <Check size={14} className="text-primary" />
                {label}
              </span>
            ))}
          </motion.div>
        </div>

        <ScrollIndicator delay={baseDelay + 0.3} />
        </div>
      </section>

      {/* ───────────── SERVICES PREVIEW ───────────── */}
      <section className="relative py-16 md:py-20">
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
      <section className="relative  py-16 md:py-20 border-t border-gray-200">
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
            <p className="text-gray-400 leading-relaxed mb-5">{business.shortDescription}</p>
            <div className="space-y-4">
              <div>
                <h4 className="font-display text-sm font-semibold text-primary mb-1">Our Mission</h4>
                <p className="text-sm text-gray-400">{business.mission}</p>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-primary mb-1">Our Vision</h4>
                <p className="text-sm text-gray-400">{business.vision}</p>
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
            className="grid grid-cols-2 gap-6 rounded-2xl border border-gray-700 bg-gray-900 shadow-xl p-8"
          >
            {business.stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────────── WHY CHOOSE US ───────────── */}
      <section className="relative  py-16 md:py-20 border-t border-white/5">
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
      <section className="relative  py-16 md:py-20 border-t border-gray-200">
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
            className="text-gray-500 max-w-xl mx-auto mb-9 text-lg"
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
            <Link to="/contact" className="btn-primary" onClick={ctaBookRipple.onClick}>
              Book Service <ArrowRight size={18} />
              {ctaBookRipple.ripples}
            </Link>
            <a href={`tel:${business.contact.phoneRaw}`} className="btn-secondary" onClick={ctaCallRipple.onClick}>
              <Phone size={18} /> Call Now
              {ctaCallRipple.ripples}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ───────────── GALLERY PREVIEW ───────────── */}
      <section className="relative  py-16 md:py-20 border-t border-gray-200">
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
            {galleryImages.slice(0, 8).map((img, i) => (
              <motion.div
                key={img.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group aspect-square overflow-hidden rounded-2xl border border-gray-200"
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
      <section className="relative py-16 md:py-20 border-t border-gray-200">
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
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Reach out over phone, WhatsApp, or email — or send a quick message and our team will
              confirm a time that works for you.
            </p>
            <ul className="space-y-3 text-sm text-gray-400">
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
            className="rounded-2xl border border-gray-200 bg-white p-7 space-y-4 shadow-md"
          >
            <div>
              <label htmlFor="home-name" className="mb-1.5 block text-xs font-medium text-gray-600">Full Name</label>
              <input
                id="home-name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="home-phone" className="mb-1.5 block text-xs font-medium text-gray-600">Phone Number</label>
              <input
                id="home-phone"
                type="tel"
                required
                placeholder="10-digit mobile number"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="home-message" className="mb-1.5 block text-xs font-medium text-gray-600">What do you need?</label>
              <textarea
                id="home-message"
                rows={3}
                placeholder="Tell us about your car and preferred time"
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary outline-none transition-colors"
              />
            </div>
            <button type="submit" className="btn-primary w-full" onClick={formRipple.onClick}>
              Send Request <Send size={16} />
              {formRipple.ripples}
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
