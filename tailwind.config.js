/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { 
    fontFamily : {
      poppins: ['Poppins'],
      lora: ['Lora'],
    },
    colors: {
      
      background1 :'#F1F8FF',
      white: '#FFFFFF',
      button: '#1d764a',
      button2: '#DBEEFE',
      font1: '#FFF',
      font2: '#222222',
    },
    extend: {},
  },
  plugins: [],
};
