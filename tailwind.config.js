module.exports = {
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
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          dark: '#0d0c22', // bg
          soft: '#2d2b42', // bgSoft
        },
        white: {
          soft: 'white', // text
          soft: '#e5e5e5', // textSoft
        },
        btn: '#3673fd',
      },
    },
  },
  plugins: [],
}
