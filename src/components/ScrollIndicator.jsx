import { motion } from 'framer-motion';

export default function ScrollIndicator({ delay = 0.5 }) {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.8 }}
    >
      <span className="text-[10px] uppercase tracking-[0.3em] text-ash/50">Scroll</span>
      <motion.div
        className="h-9 w-5 rounded-full border border-white/20 flex justify-center pt-1.5"
        aria-hidden
      >
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-primary"
          animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
}
