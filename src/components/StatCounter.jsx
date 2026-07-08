import useCountUp from '../hooks/useCountUp.js';

export default function StatCounter({ value, suffix = '', label }) {
  const { ref, value: current } = useCountUp(value);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl md:text-5xl font-bold text-white">
        {current}
        <span className="text-primary">{suffix}</span>
      </p>
      <p className="mt-2 text-xs md:text-sm uppercase tracking-wider text-ash/60">{label}</p>
    </div>
  );
}
