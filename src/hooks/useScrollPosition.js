import { useEffect, useState } from 'react';

/**
 * Tracks whether the page has scrolled past a threshold.
 * Used by the Navbar to switch from transparent to solid.
 */
export default function useScrollPosition(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
