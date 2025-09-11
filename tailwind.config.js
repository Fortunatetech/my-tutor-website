/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable class-based dark mode
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: { 900: '#0B2545', 700: '#123056', 500: '#0FB5A6' },
        accent: { 500: '#FF8A5B' },
        neutral: { 900: '#111827', 600: '#6B7280', 50: '#F7FBFC' },
      },
      borderRadius: { lg: '12px' },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(60% 60% at 10% 10%, rgba(15,181,166,0.12), transparent), linear-gradient(180deg, rgba(11,37,69,0.92), rgba(11,37,69,0.86))',
      },
    },
  },
  plugins: [],
};
