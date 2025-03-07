/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60a5fa', // Light blue
          DEFAULT: '#3b82f6',
          dark: '#1d4ed8',
        },
        accent: {
          light: '#f472b6', // Dark pink
          DEFAULT: '#ec4899',
          dark: '#be185d',
        },
      },
      animation: {
        'text-slide': 'text-slide 12s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'text-slide': {
          '0%, 16%': {
            transform: 'translateY(0%)',
          },
          '20%, 36%': {
            transform: 'translateY(-16.66%)',
          },
          '40%, 56%': {
            transform: 'translateY(-33.33%)',
          },
          '60%, 76%': {
            transform: 'translateY(-50%)',
          },
          '80%, 96%': {
            transform: 'translateY(-66.66%)',
          },
          '100%': {
            transform: 'translateY(-83.33%)',
          },
        },
        'glow': {
          '0%': {
            boxShadow: '0 0 5px #60a5fa, 0 0 10px #60a5fa, 0 0 15px #60a5fa',
          },
          '100%': {
            boxShadow: '0 0 20px #f472b6, 0 0 35px #f472b6, 0 0 50px #f472b6',
          },
        },
      },
    },
  },
  plugins: [],
};