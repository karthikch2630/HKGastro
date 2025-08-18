/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        colorCycle: {
          '0%': { backgroundColor: '#43B649' },  // green
          '25%': { backgroundColor: '#FFD24C' }, // yellow
          '50%': { backgroundColor: '#00B9B0' }, // teal
          '75%': { backgroundColor: '#6D6E71' }, // gray
          '100%': { backgroundColor: '#43B649' }, // back to green
        },
      },
      animation: {
        colorCycle: 'colorCycle 6s infinite ease-in-out',
      },
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
