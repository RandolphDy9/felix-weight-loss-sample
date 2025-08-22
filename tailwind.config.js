/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tobias': ['var(--font-tobias)'],
        'matter': ['var(--font-matter)'],
      },
    },
  },
  plugins: [],
}; 