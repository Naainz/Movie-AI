// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,astro}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable class-based dark mode
}
