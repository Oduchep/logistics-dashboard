module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#010a1d',
        'pre-midnight-blue': '#081124',
        'night-blue': '#04122e',
        'evening-blue': '#222f47',
        'night-black': '#060d1c'
      },
      keyframes: {
        pulsate: {
          '100%': { 
            transform: 'scale(2.5)',
            opacity: '0' },
        },
      },
      animation: {
        'beatBefore': 'pulsate 2s ease-out infinite',
        'beatAfter': 'pulsate 2s 1s ease-out infinite',
      }
    },
  plugins: [],
  }
}
