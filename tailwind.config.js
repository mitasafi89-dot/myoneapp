/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#43B02A',   // Safaricom green
          greenDark: '#2E7D1B',
          ink: '#0B0F0C',     // app dark background
          card: '#14201A',    // dark card
          line: '#23332B',
        },
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
};
