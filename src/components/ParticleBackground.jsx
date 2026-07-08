import { useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * Subtle ambient background: animated mesh-gradient blobs, a soft red
 * radial glow, drifting particles, moving light streaks, and faint
 * automotive-inspired circuit lines. Pure CSS/SVG — no canvas — to stay
 * cheap on lower-end mobile devices.
 */
export default function ParticleBackground({ dense = false }) {
  const particles = useMemo(() => {
    const count = dense ? 26 : 16;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 1.5 + Math.random() * 2.5,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
    }));
  }, [dense]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-base" />

      {/* Animated mesh-gradient blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-[100px]"
        animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-primary/[0.07] blur-[100px]"
        animate={{ x: [0, -30, 20, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-0 bg-radial-red" />

      {/* Faint circuit-line motif */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.05]"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,120 H180 L210,150 H420 L450,120 H900"
          stroke="#E53935"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M0,420 H260 L290,390 H520 L555,420 H1200"
          stroke="#E53935"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="180" cy="120" r="3" fill="#E53935" />
        <circle cx="450" cy="120" r="3" fill="#E53935" />
        <circle cx="260" cy="420" r="3" fill="#E53935" />
        <circle cx="555" cy="420" r="3" fill="#E53935" />
      </svg>

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Moving light streaks */}
      <motion.span
        aria-hidden
        className="absolute top-1/4 left-0 h-px w-1/3 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        animate={{ x: ['-20%', '140%'] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.span
        aria-hidden
        className="absolute top-2/3 left-0 h-px w-1/4 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: ['-20%', '150%'] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Drifting particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-primary/60 animate-driftParticle"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
