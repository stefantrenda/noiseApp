/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#D9D9D9",
        limeGreen: "#B3D457",
        darkBlue: "#373463",
        deepPurple: "#18162A",
        veryDeepPurple: "#100F1C",
      },
      screens: {
        mobile: "375px",
        tablet: "834px",
        "desktop-sm": "1440px",
        "desktop-lg": "1920px",
      },
      backgroundImage: {
        "gradient-bg": "linear-gradient(60deg, #18162A 0%, #18162A 100%)",
      },
      padding: {
        '5p': '5%',    // p-5p will apply 5% padding
        '10p': '10%',  // p-10p will apply 10% padding
        '15p': '15%',  // p-15p will apply 15% padding
      }
    },
  },
  plugins: [],
};
