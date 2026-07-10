import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wrench, BatteryCharging, ShieldCheck, Zap, Phone, ArrowRight } from 'lucide-react';
import RippleLink from './RippleLink.jsx';
import { business } from '../data/business.js';

const ICONS = {
  wrench: Wrench,
  battery: BatteryCharging,
  shield: ShieldCheck,
  zap: Zap,
};

export default function ServiceCard({ service, index = 0 }) {
  const Icon = ICONS[service.icon] || Wrench;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-secondary/60 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_20px_60px_-15px_rgba(229,57,53,0.4)]"
    >
      {/* Service image */}
      {service.image && (
        <div className="relative h-44 w-full overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />
        </div>
      )}

      <div className="relative p-7">
        <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:rotate-6 group-hover:bg-primary/20 group-hover:shadow-[0_0_24px_rgba(229,57,53,0.5)]">
          <Icon size={26} />
        </div>
        <h3 className="font-display text-lg font-semibold text-white mb-2">{service.title}</h3>
        <p className="text-sm text-ash/70 leading-relaxed mb-5">{service.shortDescription}</p>
      <div className="mt-auto flex items-center gap-3">
        <RippleLink to="/contact" className="btn-primary !py-2.5 flex-1 text-sm">
        BookNow
        </RippleLink>
        <a
          href={`tel:${business.contact.phoneRaw}`}
          className="btn-secondary !py-2.5 flex-1 text-sm"
        >
          <Phone size={16} /> Call
        </a>
      </div>  
      </div>
    </motion.div>
  );
}
