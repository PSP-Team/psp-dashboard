export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0e0a19",
          accent: "#ff4500",
          tech: "#00d0ff"
        }
      },
      animation: {
        pulseSlow: 'pulse 8s ease-in-out infinite',
        float: 'float 12s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-2%)' },
          '50%': { transform: 'translateY(2%)' }
        }
      }
    },
  },
  plugins: [],
}
