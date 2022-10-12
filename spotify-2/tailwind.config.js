/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/index.js", 
    "./components/Sidebar.js",
    "./pages/login.js",
    "./components/Center.js", 
    "./components/Song.js",
    "./compnents/Songs.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
