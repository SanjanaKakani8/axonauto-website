import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wrench, BatteryCharging, ShieldCheck, Zap, Check, ArrowRight, Phone } from 'lucide-react';

import SEO from '../components/SEO.jsx';
import ParticleBackground from '../components/ParticleBackground.jsx';
import FAQAccordion from '../components/FAQAccordion.jsx';
import RippleLink from '../components/RippleLink.jsx';
import useRipple from '../hooks/useRipple.jsx';
import { services } from '../data/services.js';
import { faqs } from '../data/faqs.js';
import { business } from '../data/business.js';

const ICONS = {
  wrench: Wrench,
  battery: BatteryCharging,
  shield: ShieldCheck,
  zap: Zap,
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  const callRipple = useRipple();
  const contactRipple = useRipple();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO
        title="Our Services"
        description="Periodic car service, battery replacement, roadside assistance and jump start — all delivered to your doorstep in Hyderabad."
      />

      <section className="relative pt-40 pb-20 overflow-hidden">
        <ParticleBackground />
        <div className="container-page">
          <motion.p variants={fadeUp} initial="hidden" animate="show" className="eyebrow mb-3">
            Our Services
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="section-heading max-w-2xl"
          >
            Everything your car needs, without the trip to a garage.
          </motion.h1>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="container-page space-y-10">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon] || Wrench;
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55 }}
                className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center rounded-2xl border border-white/10 bg-secondary/40 p-8 md:p-10`}
              >
                <div className="flex-1">
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={26} />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-white mb-3">{service.title}</h2>
                  <p className="text-ash/70 leading-relaxed mb-6">{service.description}</p>
                  <RippleLink to="/contact" className="btn-primary text-sm">
                    Book This Service <ArrowRight size={16} />
                  </RippleLink>
                </div>

                <div className="flex-1 w-full">
                  <div className="mb-5 overflow-hidden rounded-2xl border border-white/10">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-base/40 px-4 py-3 text-sm text-ash/80"
                      >
                        <Check size={16} className="text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-white/5">
        <div className="container-page">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="mb-10 max-w-2xl"
          >
            <p className="eyebrow mb-3">Questions</p>
            <h2 className="section-heading">Frequently Asked Questions</h2>
          </motion.div>
          <div className="max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative py-20 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-radial-red -z-10" />
        <div className="container-page text-center">
          <h2 className="section-heading mb-5">Not sure what your car needs?</h2>
          <p className="text-ash/70 max-w-xl mx-auto mb-8">
            Call our team and we'll help you figure out the right service — no obligation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={`tel:${business.contact.phoneRaw}`} className="btn-primary" onClick={callRipple.onClick}>
              <Phone size={18} /> {business.contact.phone}
              {callRipple.ripples}
            </a>
            <Link to="/contact" className="btn-secondary" onClick={contactRipple.onClick}>
              Contact Us <ArrowRight size={18} />
              {contactRipple.ripples}
            </Link>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
