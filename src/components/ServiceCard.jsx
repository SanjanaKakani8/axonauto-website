import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wrench, BatteryCharging, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

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
      whileHover={{ y: -6 }}
      className="group relative card-surface p-7"
    >
      <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:rotate-6 group-hover:bg-primary/20">
        <Icon size={26} />
      </div>
      <h3 className="font-display text-lg font-semibold text-white mb-2">{service.title}</h3>
      <p className="text-sm text-ash/70 leading-relaxed mb-5">{service.shortDescription}</p>
      <Link
        to="/services"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5"
      >
        Learn more <ArrowRight size={15} />
      </Link>
    </motion.div>
  );
}
