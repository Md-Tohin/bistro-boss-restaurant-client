/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Example of custom sans-serif font stack
        serif: ['Georgia', 'serif'], // Example of custom serif font stack
        mono: ['Courier New', 'monospace'], // Example of custom monospace font stack
        customFont: ['"Your Custom Font"', 'sans-serif'], // Example of a named custom font family
      },
      colors: {
        yellowLight: '#D99904',
        yellowDark: '#BB8506',
        dark01: '#151515',
        dark02: '#444444',
        dark03: '#737373',
        dark06: '#E8E8E8',
        dark07: '#F3F3F3',
        dark09: '#111827',
        dark10: '#1F2937',        
        golden: '#D1A054',        
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

