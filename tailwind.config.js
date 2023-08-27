/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { 
      textUnderlineOffset: {
      padding: '10px',
    }
},
    fontFamily:{
      abc:["Poppins", "sans-serif"]
    }
  },
  daisyui: {
    themes: [
      {
        automarttheme: {
          primary: "#00BFFF",
          secondary: "#172554",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
     
    ],
  },
  plugins: [require("daisyui")],
}


