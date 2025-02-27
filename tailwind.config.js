/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

        colors: {
          primary:  '#212121', // Header, Footer
          secondary: '#1E90FF', // Buttons, Highlights
          accent: '#FFC107', //Amber-400
          background: '#FAFAFA', // Light Gray
          card: '#FFFFFF', // White for cards/forms
          textPrimary: '#F9FAFB',
          textSecondary: '#616161', 
            tealPrimary: '#0A97B0',
            tealHover: '#33B7CB', // A lighter version of #0A97B0
        
        },

        fontFamily: {
          dropkicker: ["Lora", "serif"], 
          montserrat: ["Montserrat", "sans-serif"],
        },
      },
  },
  plugins: [],
}