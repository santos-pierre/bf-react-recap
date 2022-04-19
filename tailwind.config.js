const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'silent-gray': '#817E8F',
				'light-gray': '#32303E',
				'dark-gray': '#201E29',
				'darken-gray': '#15141A',
			},
		},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
