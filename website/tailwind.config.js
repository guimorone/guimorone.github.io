/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import flowbite from 'flowbite/plugin';

export default {
  content: ['node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', './index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { sky: colors.sky, teal: colors.teal, rose: colors.rose },
      width: { 110: '30rem', 200: '40rem' },
      maxHeight: { 110: '30rem', 200: '40rem' },
      transitionProperty: { opacity: 'opacity' },
      transitionDuration: { 300: '300ms' },
    },
  },
  plugins: [forms, typography, flowbite],
  corePlugins: { transitionProperty: false },
};