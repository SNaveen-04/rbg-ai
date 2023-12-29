/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      extend: {},
      colors:{
        Primary:'#6D9EEB',
        Secondary:'#EFF0FF',
        Green:'#76ad5f',
        Red:'#e57171'
      },
      fontFamily:{
        Poppins:'Poppins',
        OpenSans:'Open Sans',
      }
    },
  plugins: [require('flowbite/plugin'),],
}}

