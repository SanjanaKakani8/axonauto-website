import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logoGear from '../assets/logo-gear.png';
import logoText from '../assets/logo-text.png';

/**
 * AxonAuto wordmark for the navbar/footer — built from the real logo
 * artwork split into two transparent layers (gear + text), so only the
 * actual gear spins on hover/idle, never a redrawn stand-in.
 */
export default function Logo({ size = 'md', interactive = true, className = '' }) {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 900);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const heights = { sm: 30, md: 40, lg: 76 };
  const h = heights[size] || heights.md;

  return (
    <motion.div
      className={`relative inline-flex items-center gap-2 select-none ${className}`}
      style={{ height: h }}
      whileHover={interactive ? 'hover' : undefined}
      initial="rest"
      animate={pulse ? 'pulse' : 'rest'}
    >
      {/* Ambient red glow behind the gear */}
      <motion.span
        aria-hidden
        className="absolute left-0 -z-10 rounded-full bg-primary/40 blur-xl"
        style={{ height: h * 1.3, width: h * 1.3 }}
        variants={{
          rest: { opacity: 0.3, scale: 1 },
          pulse: { opacity: 0.7, scale: 1.15 },
          hover: { opacity: 0.75, scale: 1.2 },
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />

      {/* The actual gear artwork — only element that rotates */}
      <motion.img
        src={logoGear}
        alt=""
        aria-hidden
        draggable={false}
        style={{ height: h, width: h }}
        className="relative"
        variants={{
          rest: { rotate: 0 },
          pulse: { rotate: 0 },
          hover: { rotate: 55 },
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 16 }}
      />

      {/* The actual wordmark artwork — never redrawn */}
      <motion.img
        src={logoText}
        alt="AxonAuto"
        draggable={false}
        style={{ height: h * 0.62 }}
        variants={{
          rest: { opacity: 1 },
        }}
      />
    </motion.div>
  );
}
