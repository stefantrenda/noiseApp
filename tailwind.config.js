/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#D9D9D9',
        limeGreen: '#B3D457',
        darkBlue: '#373463',
      },
      screens: {
        'mobile': '375px',
        'tablet': '834px',
        'desktop-sm': '1440px',
        'desktop-lg': '1920px',
      },
      backgroundImage: {
        'gradient-bg': 'linear-gradient(60deg, #18162A 0%, #18162A 100%)',
      },
    },
  },
  plugins: [],
}
