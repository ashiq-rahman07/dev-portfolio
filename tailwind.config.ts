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
        primary: '#00DF9A', // You can define custom colors
        secondary: '#0070f3',
        darkBg: '#111827',   // Dark background color
        lightBg: '#ffffff',  // Light background color
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
