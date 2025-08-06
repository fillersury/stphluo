/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s step-start infinite",
      },
      keyframes: {
        blink: {
          "50%": { opacity: "0" },
        },
      },
      transformOrigin: {
        'center': 'center',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.perspective': {
          perspective: '1000px',
        },
        '.transform-style-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      });
    },
  ],
}
