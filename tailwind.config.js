/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '778px',
      // => @media (min-width: 768px) { ... }

      'lg': '868px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1020px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1636px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        redish:"#F5385D",
        bluish:"#000031"
      },
    },
  },
  plugins: [],
}

