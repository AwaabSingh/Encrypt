/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			colors: {
				primaryBlue: '#047aed',
				secondaryBlue: '#1c3fa8',
				darkBlue: '#002240',
				lightColor: '#f4f4f4',
				lightBlue: '#0047AB',
				lighterBlue: '#6495ED',
			},
		},
	},
	plugins: [],
};
