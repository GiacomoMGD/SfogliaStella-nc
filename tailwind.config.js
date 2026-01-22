/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sfoglia-cream': '#FEFCF7', // Soft cream background
        'sfoglia-pink': '#F8BBD9', // Soft rose pink
        'sfoglia-blue': '#B3E5FC', // Soft sky blue
        'sfoglia-green': '#C8E6C9', // Soft mint green
        'sfoglia-lavender': '#E1BEE7', // Soft lavender
        'sfoglia-peach': '#FFE0B2', // Soft peach
        'sfoglia-accent': '#F48FB1', // Soft coral
        'sfoglia-shadow': 'rgba(0,0,0,0.08)', // Soft shadow
        'sfoglia-yellow': '#FFF9C4', // Soft butter yellow
        'sfoglia-mint': '#B2DFDB', // Soft mint
        'sfoglia-wood': '#5D4037', // Deep wood brown
        'sfoglia-red': '#E57373', // Soft red for accents
      },
      fontFamily: {
        sans: ['"Nunito"', '"Inter"', 'sans-serif'],
        display: ['"Poppins"', '"Nunito"', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 10px 40px rgba(0, 0, 0, 0.06)',
        'soft-xl': '0 20px 60px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
