module.exports = {
  content: ["./views/**/*.ejs", "./views/includes/**/*.ejs", "./public/assets/js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-scrollbar')
  ],
}
