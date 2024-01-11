/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        jiggle: {
          '0%, 30%,100%': { transform: 'rotate(0deg) scale(1)' },
          '40%, 60%, 80%': { transform: 'rotate(-6deg) scale(1.1)' },
          '50%, 70%, 90%': { transform: 'rotate(6deg) scale(1.1)' },
        },
        jiggleCus: {
          '0%, 30%,100%': { transform: 'translateY(-50%) rotate(0deg) scale(1)' },
          '40%, 60%, 80%': { transform: 'translateY(-50%) rotate(-6deg) scale(1.1)' },
          '50%, 70%, 90%': { transform: 'translateY(-50%) rotate(6deg) scale(1.1)' },
        },
        bounceR: {
          "0%, 100%": {
            transform: "translateX(50%)"
          },
          "50%": {
            transform: "translateX(0)"
          }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        jiggle: 'jiggle 1s ease-in-out infinite',
        jiggleCus: 'jiggleCus 1s ease-in-out infinite',
        "ping-slow": "ping 1.5s linear infinite",
        bounceR: "bounceR 1.5s linear infinite"
      },
      colors: {
        Cblue: "#002447",
        Csblue: '#53D3D1',
        Ccream: '#FBECEB',
        Corange: "#FEB249",
        Cblack: {

          50: "rgba(0, 0, 0, 0.05)",
          100: "rgba(0, 0, 0, 0.1)",
          200: "rgba(0, 0, 0, 0.2)",
          300: "rgba(0, 0, 0, 0.3)",
          400: "rgba(0, 0, 0, 0.4)",
          500: "rgba(0, 0, 0, 0.5)",
          600: "rgba(0, 0, 0, 0.6)",
          700: "rgba(0, 0, 0, 0.7)",
          800: "rgba(0, 0, 0, 0.8)",
          900: "rgba(0, 0, 0, 1)",
        }
      }
    },
  },
  plugins: [],
}
