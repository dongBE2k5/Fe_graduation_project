/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",           // 👈 file gốc
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 toàn bộ file React trong src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
