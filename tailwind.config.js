/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screen:{
        'widescreen':{'raw':'(min-aspect-ratio:3/2)'},
        'tallscreen':{'raw':'(min-aspect-ratio:13/20)'},
      },
      keyframes:{
        'open-menu':{
          '0%':{transform:'scaleY(0)'},
          '80%':{transform:'scaleY(1.2)'},
          '100%':{transform:'scaleY(1)'},
        },
      },
      animation:{
        'open-menu':'open-menu 0.5s ease-in-out forwards',
      },
      backgroundImage:{
        'hero-image':"url('/src/assets/images/header.jpg')",
        'about-image':"url('/src/assets/images/about.jpg')",
        'story-image':"url('/src/assets/images/story.jpg')",

      },
      fontFamily:{
        'sign':['Yellowtail','cursive']
      }

    },
  },
  plugins: [],
}

