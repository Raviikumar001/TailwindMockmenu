/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontSize: {
        mammoth: "8rem",},
        colors: {
          my_color: '#4dcb7a',
          primary: '#FF6363',
          secondary: {
            100: '#E2E2D5',
            200: '#888883'
          },
          
        },

    },

   

    fontFamily: {
      body: ['Roboto Slab']
    }
  },
  plugins: [],
}
