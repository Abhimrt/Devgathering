/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     
      colors: {
        Cblue:"#002447",
        Csblue:'#53D3D1',
        Ccream:'#FBECEB',
        Corange:"#FEB249",
        Cblack:{

          50:"rgba(0, 0, 0, 0.05)",
          100:"rgba(0, 0, 0, 0.1)",
          200:"rgba(0, 0, 0, 0.2)",
          300:"rgba(0, 0, 0, 0.3)",
          400:"rgba(0, 0, 0, 0.4)",
          500:"rgba(0, 0, 0, 0.5)",
          600:"rgba(0, 0, 0, 0.6)",
          700:"rgba(0, 0, 0, 0.7)",
          800:"rgba(0, 0, 0, 0.8)",
          900:"rgba(0, 0, 0, 1)",
        }
      }
    },
  },
  plugins: [],
}
