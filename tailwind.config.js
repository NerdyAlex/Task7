/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redload: '#ED1D24',
        textgray: '#4E4E4E',
        gray: '#636363',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        plex: ["IBM Plex Sans", "sans-serif"]
      }
      ,
      keyframes: {
        spin: {
          "from": {
            "transform": "rotate(0deg)"
          },
          "to": {
            "transform": "rotate(360deg)"
          }
        },
        slide: {
          "from": {
            'transform': 'translateX(-50%) rotate(-45deg)',


          },

          "to": {
            'transform': 'translateX(60%) rotate(-45deg)',
            'display': 'none'
          }
        },
        img: {
          '0%': {
            'top': '66.666667%',
            "opacity": '1'


          },
          '10%': {
            'top': '66.666667%',
            "opacity": '0'
          },
          '55%': {
            "opacity": '0',
            'top': '20%'


          },
          '100%': {
            'top': '20%',
            "opacity": '1'
          }
        }

      },
      animation: {
        slide: 'slide 3s linear',
        img: 'img 3s linear 2s',
        spin: 'spin 1s linear infinite',

      }

    },
  },
  plugins: [],
}

