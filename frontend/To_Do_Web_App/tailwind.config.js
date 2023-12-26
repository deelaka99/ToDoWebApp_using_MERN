/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'black':'#000000',
      'primaryGrey':'#E1DEDE',
      'secondGrey':'#F4F4F4',
      'textGrey':'#898787',
      'placeholderGrey':'#5F5F5F',
      'darkGrey':'#313131',
      'green':'#00A285',
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      jomhuria: ["Jomhuria", "cursive"]
    },
    screens:{
      'mobile':'375px',
      'tablet':'640px',
      'laptop':'1024px',
      'desktop':'1280px',
    },
  },
  plugins: [],
}

