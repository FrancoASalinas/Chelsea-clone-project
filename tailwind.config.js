/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000074',
        details: '#001094',
        light: '#2020af',
      },
      fontFamily: {
        chiselled: 'Chelsea Chiselled',
        chelsea: 'Chelsea Basis Beta',
      },
    },
  },
  plugins: [],
};
