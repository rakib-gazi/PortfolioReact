const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        rowdies: ["Rowdies", 'serif'],
      },
      colors: {
        "body": "#08233b",
        "nav": "#21384d",
        "active": "#3dcfb6",
        "html": "#e65100",
        "css": "#039be5",
        "js": "#ffd600",
        "tailwind": "#00acc1",
        "bootstrap": "#6C19FF",
        "react": "#01d8ff",
        "vue": "#41b883",
        "laravel": "#f72c1f",
        "mongo": "#00ed64",
        "firebase": "#ffc401",
        "whatsapp": "#44c654",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

