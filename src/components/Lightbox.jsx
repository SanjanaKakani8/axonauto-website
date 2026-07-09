import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Fullscreen image lightbox.
 * - Fade + zoom transition in/out
 * - Previous / Next navigation (arrows + keyboard)
 * - Escape to close, click backdrop to close
 * - Lazy-loads only the active image at full size
 */
export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const isOpen = index !== null && index >= 0;

  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  if (!images?.length) return null;
  const current = isOpen ? images[index] : null;

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-colors hover:border-primary/50 hover:bg-white/10"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous image"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-colors hover:border-primary/50 hover:bg-white/10"
          >
            <ChevronLeft size={22} />
          </button>

          <motion.div
            key={current.id}
            className="relative max-h-[85vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            />
            {current.caption && (
              <p className="mt-3 text-center text-sm text-ash/70">{current.caption}</p>
            )}
          </motion.div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next image"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-colors hover:border-primary/50 hover:bg-white/10"
          >
            <ChevronRight size={22} />
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-ash/50">
            {index + 1} / {images.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
