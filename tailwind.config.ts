import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // Enable dark mode with 'class'
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: '#f9f9f9',
        darkBg: '#1a1a1a',
        primary: '#3490dc',
        secondary: '#ffed4a',
        darkText: '#d1d5db',
        lightText: '#333',  // Light background color
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // You can use any custom font
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity:" 1" },
        },
      },
    },
  },
  plugins: [],
}

export default config;
