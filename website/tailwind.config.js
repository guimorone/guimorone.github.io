/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import flowbite from 'flowbite-react/tailwind';

export default {
	content: [flowbite.content(), './index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: { teal: colors.teal, rose: colors.rose },
			transitionProperty: { opacity: 'opacity' },
			transitionDuration: { 300: '300ms' },
		},
	},
	plugins: [forms, typography, flowbite.plugin()],
	corePlugins: { transitionProperty: false },
};
