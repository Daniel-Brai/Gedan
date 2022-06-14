module.exports = {
  content: ["./views/**/*.ejs", "./public/assets/js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-scrollbar')
  ],
}
