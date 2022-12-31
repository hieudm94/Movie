/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    container: {
      center: true
    },
    backgroundImage: {
      'hero-pattern': "url('https://www.cgv.vn/skin/frontend/cgv/default/images/bg_c_bricks.png')",
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
