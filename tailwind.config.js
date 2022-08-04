const iOSHeight = require('@rvxlab/tailwind-plugin-ios-full-height')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [iOSHeight],
}
