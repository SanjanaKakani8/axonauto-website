import { motion } from 'framer-motion';
import logoGear from '../assets/logo-gear.png';
import logoText from '../assets/logo-text.png';

/**
 * Premium splash screen built from the real logo artwork, split into two
 * transparent layers (gear + wordmark) so only the gear can spin — no
 * generic shapes, no redrawing.
 *
 * The gear and wordmark carry `layoutId`s that exactly match the hero
 * logo rendered on the Home page (see Home.jsx). Home is mounted eagerly
 * alongside this splash screen, so when this component exits, Framer
 * Motion's shared layout engine smoothly animates the SAME logo elements
 * from their splash position/size into their resting spot below the
 * navbar — no fade-out, no second logo, one continuous motion.
 *
 * Sequence (~3s total):
 * 1. Matte black screen, soft red glow blooms behind the gear
 * 2. The actual red gear accelerates, spins, then decelerates to a stop
 * 3. A metallic shine sweeps across the gear
 * 4. The silver AXONAUTO wordmark fades in
 * 5. A metallic light sweep passes across the text
 * 6. Brief hold, then the backdrop dissolves while the logo glides up
 *    into its homepage position
 */
export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#060606] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
    >
      <div className="relative flex items-center gap-5">
        {/* Soft red glow behind the gear */}
        <motion.div
          aria-hidden
          className="absolute left-0 top-1/2 -translate-y-1/2 -z-10 h-40 w-40 rounded-full bg-primary/35 blur-3xl"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: [0, 0.9, 0.6], scale: [0.6, 1.25, 1.05] }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          transition={{ duration: 1.6, times: [0, 0.6, 1], ease: 'easeOut' }}
        />

        {/* Real gear artwork — accelerates in, then decelerates to a stop */}
        <div className="relative">
          <motion.img
            layoutId="axon-logo-gear"
            src={logoGear}
            alt=""
            aria-hidden
            draggable={false}
            className="relative h-24 w-24 md:h-28 md:w-28 select-none"
            initial={{ rotate: 0, opacity: 0, scale: 0.85 }}
            animate={{ rotate: 360, opacity: 1, scale: 1 }}
            transition={{
              opacity: { duration: 0.35 },
              scale: { duration: 0.5 },
              rotate: { duration: 1.7, ease: 'easeInOut' }, // smooth accelerate → decelerate to a full stop
            }}
          />

          {/* Metallic shine sweeping across the gear */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/50 to-transparent"
            style={{ mixBlendMode: 'overlay' }}
            initial={{ x: '-120%', opacity: 0 }}
            animate={{ x: '120%', opacity: [0, 1, 0] }}
            transition={{ duration: 0.7, delay: 1.75, ease: 'easeInOut' }}
          />
        </div>

        {/* Wordmark: fades in after the gear stops, then a light sweep */}
        <div className="relative overflow-hidden">
          <motion.img
            layoutId="axon-logo-text"
            src={logoText}
            alt="AXONAUTO"
            draggable={false}
            className="relative h-10 md:h-12 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.85, duration: 0.5, ease: 'easeOut' }}
          />

          {/* Metallic light sweep across the wordmark */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-[-15deg]"
            initial={{ x: '-120%', opacity: 0 }}
            animate={{ x: '320%', opacity: [0, 1, 0] }}
            transition={{ duration: 0.75, delay: 2.3, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
