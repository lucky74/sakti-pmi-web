/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // slate-900
        secondary: '#3b82f6', // blue-500
        accent: '#f59e0b', // amber-500
      }
    },
  },
  plugins: [],
}
