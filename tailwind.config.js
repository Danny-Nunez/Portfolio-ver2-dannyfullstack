/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        libre: ['Libre Franklin', 'sans-serif'], // Add Libre Franklin as a custom font
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // Define the blink effect keyframes
        'blink': {
          '0%': { opacity: '1' },    // Fully visible at the start
          '50%': { opacity: '0' },   // Invisible at the middle
          '100%': { opacity: '1' },  // Fully visible at the end
        },
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out',
        'blink': 'blink 1s steps(1, start) infinite', // Blink every 1 second
      },
    },
  },
  plugins: [],
};
