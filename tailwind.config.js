/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            DEFAULT: '#0095D8',
            dark: '#0073BC',
          },
          green: '#43B649',
          yellow: '#FFD24C',
          teal: '#00B9B0',
          gray: '#6D6E71',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};
