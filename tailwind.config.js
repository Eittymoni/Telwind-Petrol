/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container:"1140px",
      },
      fontFamily: {
        'pops': ['Poppins', 'sans-serif'],
        
      },
      backgroundImage:{
        'ban': "url('./assets/banner.png')",
        'ser1':"url('./assets/service1.png')",
        'ser2':"url('./assets/service2.png')",
        'ser3':"url('./assets/service3.png')",
        'lern':"url('./assets/learn.png')",
      },
      
    },
  },
  plugins: [],
}