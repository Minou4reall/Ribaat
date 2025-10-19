/** @type {import('tailwindcss').Config} */

import flowbitePlugin from "flowbite/plugin";
import flowbiteReact from "flowbite-react/plugin/tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.js",
    ".flowbite-react\\class-list.json",
  ],
  theme: {
    extend: {
      fontFamily: {
         tajawal: ['Tajawal', 'sans-serif'],
        cairo: ["Cairo", "sans-serif"],
        kufi: ['"Noto Kufi Arabic"', "sans-serif"],
      },
    },
  },
  plugins: [flowbitePlugin, flowbiteReact],
};
