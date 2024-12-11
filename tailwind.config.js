/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': "#3238f2",
        'ujjwal': "01ee91",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'serif'],
      },
    },
    screens: {
      sm: '510px', // Change the sm breakpoint to 540px
      md: '768px', // Default md breakpoint (unchanged)
      lg: '1024px', // Default lg breakpoint (unchanged)
      xl: '1280px', // Default xl breakpoint (unchanged)
    },
  },
  plugins: [],
}