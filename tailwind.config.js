/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D5016',
        secondary: '#8B4513',
        accent: '#E8B4B8',
        surface: '#FAF6F2',
        success: '#4A7C4E',
        warning: '#D4A574',
        error: '#C85450',
        info: '#6B8CAE'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif']
      },
      borderRadius: {
        'petal': '0.5rem',
      },
      boxShadow: {
        'card': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'organic': '0 8px 32px rgba(45, 80, 22, 0.15)',
      },
      backgroundImage: {
        'gradient-organic': 'linear-gradient(135deg, #FAF6F2 0%, #E8B4B8 100%)',
        'gradient-primary': 'linear-gradient(135deg, #2D5016 0%, #4A7C4E 100%)',
      }
    },
  },
  plugins: [],
}