import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck } from 'lucide-react';

import SEO from '../components/SEO.jsx';
import ParticleBackground from '../components/ParticleBackground.jsx';
import StatCounter from '../components/StatCounter.jsx';
import { business } from '../data/business.js';
import { galleryImages } from '../data/gallery.js';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO
        title="About Us"
        description={`Learn about ${business.fullName} — ${business.experienceYears} years of doorstep automotive care in ${business.location.city}.`}
      />

      {/* Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <ParticleBackground />
        <div className="container-page">
          <motion.p variants={fadeUp} initial="hidden" animate="show" className="eyebrow mb-3">
            About AxonAuto
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="section-heading max-w-2xl text-white"
          >
            {business.experienceYears} years of showing up, on time, at your doorstep.
          </motion.h1>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-12  border-t border-GRAY-200">
        <div className="container-page grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 overflow-hidden rounded-2xl border border-gray-200 min-h-[420px]"
          >
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 rounded-2xl border border-gray-200 bg-white shadow-sm p-8"
          >
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <Target size={22} />
            </div>
            <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">{business.mission}</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1 rounded-2xl border border-gray-200 bg-white shadow-sm p-8"
          >
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <Eye size={22} />
            </div>
            <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">{business.vision}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12  border-t border-gray-700 overflow-hidden relative bg-gray-900">
        <div className="absolute inset-0 bg-radial-red -z-10" />
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8">
          {business.stats.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 border-t border-white/5">
        <div className="container-page">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="mb-14 max-w-2xl"
          >
            <p className="eyebrow mb-3">What Guides Us</p>
            <h2 className="section-heading">Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {business.values.map((value, i) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 hover:border-primary transition-all duration-300"
              >
                <ShieldCheck size={20} className="text-primary mb-3" />
                <h4 className="font-display text-base font-semibold text-gray-900 mb-1.5">{value.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
