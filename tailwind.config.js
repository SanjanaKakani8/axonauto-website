/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#090909',
        primary: {
          DEFAULT: '#E53935',
          dark: '#B4231F',
          light: '#FF5A50',
        },
        secondary: '#111111',
        ash: '#E5E5E5',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(229, 57, 53, 0.35)',
        'glow-md': '0 0 40px rgba(229, 57, 53, 0.45)',
        'glow-lg': '0 0 80px rgba(229, 57, 53, 0.5)',
      },
      backgroundImage: {
        'radial-red': 'radial-gradient(circle at 50% 0%, rgba(229,57,53,0.18), transparent 60%)',
        'grid-fade': 'linear-gradient(180deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: 0.55, filter: 'blur(18px)' },
          '50%': { opacity: 1, filter: 'blur(26px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        driftParticle: {
          '0%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(12px,-18px)' },
          '100%': { transform: 'translate(0,0)' },
        },
        sweep: {
          '0%': { transform: 'translateX(-150%) skewX(-15deg)' },
          '100%': { transform: 'translateX(250%) skewX(-15deg)' },
        },
        rippleburst: {
          '0%': { transform: 'scale(0)', opacity: 0.5 },
          '100%': { transform: 'scale(1)', opacity: 0 },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 5s ease-in-out infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        driftParticle: 'driftParticle 8s ease-in-out infinite',
        sweep: 'sweep 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
