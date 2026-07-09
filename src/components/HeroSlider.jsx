import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { heroSlides } from '../data/heroSlides.js';

const INTERVAL = 5000;

/**
 * Full-screen automatic hero image slider.
 * - Crossfades between slides (no hard cuts)
 * - Slow Ken Burns zoom + pan on the active slide
 * - 60% dark gradient overlay for text legibility
 * - Autoplay every 5s, infinite loop, pauses on hover
 * - Arrows, dot navigation, and a per-slide progress bar
 */
export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, INTERVAL);
    return () => clearTimeout(timerRef.current);
  }, [index, paused, next]);

  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden bg-base"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="sync">
        {heroSlides.map((slide, i) =>
          i === index ? (
            <motion.div
              key={slide.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
            >
              {/* Ken Burns: slow zoom + gentle pan, restarts each time this slide becomes active */}
              <motion.img
                src={slide.src}
                alt={slide.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className="h-full w-full object-cover"
                initial={{ scale: 1, x: 0, y: 0 }}
                animate={{ scale: 1.12, x: i % 2 === 0 ? -14 : 14, y: -10 }}
                transition={{ duration: INTERVAL / 1000 + 1.1, ease: 'linear' }}
              />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Dark gradient overlay ~60% for text legibility + premium lighting feel */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-base via-base/40 to-base/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-base/70 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-radial-red" />

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="group absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-all hover:border-primary/50 hover:bg-white/10"
      >
        <ChevronLeft size={20} className="transition-transform group-hover:-translate-x-0.5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="group absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-all hover:border-primary/50 hover:bg-white/10"
      >
        <ChevronRight size={20} className="transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Dots + progress bar */}
      <div className="absolute bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative h-1.5 overflow-hidden rounded-full bg-white/20 transition-all duration-300"
            style={{ width: i === index ? 32 : 8 }}
          >
            {i === index && (
              <motion.span
                key={`${slide.id}-${index}-progress`}
                className="absolute inset-y-0 left-0 bg-primary"
                initial={{ width: '0%' }}
                animate={{ width: paused ? undefined : '100%' }}
                transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
