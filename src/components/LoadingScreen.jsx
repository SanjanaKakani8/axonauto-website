import { motion } from 'framer-motion';
import logoGear from '../assets/logo-gear.png';
import logoText from '../assets/logo-text.png';

/**
 * Premium splash screen built from the real logo artwork, split into two
 * transparent layers (gear + wordmark) so only the gear can spin — no
 * generic shapes, no redrawing.
 *
 * Sequence (~3s total):
 * 1. Matte black screen, soft red glow blooms behind the gear
 * 2. The actual red gear spins, decelerating smoothly to a stop
 * 3. The silver AXONAUTO wordmark slides in and fades in
 * 4. A metallic light sweep passes across the text
 * 5. Brief hold, then the whole screen fades into the homepage
 */
export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#060606] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <div className="relative flex items-center gap-5">
        {/* Soft red glow behind the gear */}
        <motion.div
          aria-hidden
          className="absolute left-0 top-1/2 -translate-y-1/2 -z-10 h-40 w-40 rounded-full bg-primary/35 blur-3xl"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0, 0.9, 0.6], scale: [0.6, 1.25, 1.05] }}
          transition={{ duration: 1.6, times: [0, 0.6, 1], ease: 'easeOut' }}
        />

        {/* Real gear artwork — the only element that rotates */}
        <motion.img
          src={logoGear}
          alt=""
          aria-hidden
          draggable={false}
          className="relative h-24 w-24 md:h-28 md:w-28 select-none"
          initial={{ rotate: 0, opacity: 0, scale: 0.85 }}
          animate={{ rotate: 720, opacity: 1, scale: 1 }}
          transition={{
            opacity: { duration: 0.35 },
            scale: { duration: 0.5 },
            rotate: { duration: 1.5, ease: [0.16, 0.85, 0.32, 1] }, // fast start, smooth deceleration to a stop
          }}
        />

        {/* Wordmark: slide + fade in after the gear stops, then a light sweep */}
        <div className="relative overflow-hidden">
          <motion.img
            src={logoText}
            alt="AXONAUTO"
            draggable={false}
            className="relative h-10 md:h-12 select-none"
            initial={{ x: 28, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.55, duration: 0.55, ease: 'easeOut' }}
          />

          {/* Metallic light sweep across the wordmark */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-[-15deg]"
            initial={{ x: '-120%', opacity: 0 }}
            animate={{ x: '320%', opacity: [0, 1, 0] }}
            transition={{ duration: 0.75, delay: 2.15, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
