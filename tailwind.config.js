/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3366FF',
        'custom-green': '#00CC66',
        'custom-purple': '#9900FF',
        'two': '#8E9775',
        'four': '#E28F83',
        
        // Add more custom colors as needed
      },
    },
  },

  variants: {},
  plugins: [
    require('flowbite/plugin')
  ],
}

