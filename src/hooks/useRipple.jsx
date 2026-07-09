import { useState, useCallback } from 'react';

/**
 * Adds a Material-style ripple burst on click. Returns a click handler to
 * spread onto any relatively-positioned, overflow-hidden element, plus the
 * JSX for the ripple spans themselves to render inside it.
 *
 * Usage:
 *   const { onClick, ripples } = useRipple();
 *   <button className="relative overflow-hidden" onClick={onClick}>
 *     Book Service
 *     {ripples}
 *   </button>
 */
export default function useRipple() {
  const [items, setItems] = useState([]);

  const onClick = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = Date.now() + Math.random();

    setItems((prev) => [...prev, { id, x, y, size }]);
    setTimeout(() => {
      setItems((prev) => prev.filter((r) => r.id !== id));
    }, 650);
  }, []);

  const ripples = items.map((r) => (
    <span
      key={r.id}
      aria-hidden
      className="pointer-events-none absolute rounded-full bg-white/40 animate-[rippleburst_0.65s_ease-out]"
      style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
    />
  ));

  return { onClick, ripples };
}
