import { motion } from 'framer-motion';
import { Zap, Users, Home, Wallet, Headset } from 'lucide-react';

const ICONS = {
  'Fast Service': Zap,
  'Expert Technicians': Users,
  'Doorstep Convenience': Home,
  'Affordable Pricing': Wallet,
  'Reliable Support': Headset,
};

export default function FeatureCard({ feature, index = 0 }) {
  const Icon = ICONS[feature.title] || Zap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 text-center transition-colors duration-300 hover:border-primary/40"
    >
      <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
        <Icon size={22} />
      </div>
      <h4 className="font-display text-base font-semibold text-white mb-1.5">{feature.title}</h4>
      <p className="text-xs text-ash/60 leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}
