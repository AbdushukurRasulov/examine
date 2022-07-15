/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: require('./tailwind/colors'),
      spacing: require('./tailwind/spacings'),
      screens: {
        xxl: '1440px',
        wide: '2000px',
      },
      maxWidth: {
        base: '950px',
        center: '1085px',
        // "3xl": "1920px",
        fixed: '108rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      fontSize: require('./tailwind/font-sizes'),
      backgroundImage: {
        grid: 'linear-gradient(270deg, #BBBBBB 0%, rgba(246, 248, 250, 0) 2.29%)',
        'home-guide': 'linear-gradient(270.22deg, #FFFFFF 7.09%, rgba(255, 255, 255, 0) 49.96%)',
        'guide-top': 'linear-gradient(0, rgba(247, 248, 250, 0) 0%, #F7F8FA 71.87%)',
      },
      boxShadow: require('./tailwind/shadows'),
      dropShadow: require('./tailwind/dropshadow'),
      borderRadius: {
        30: '30px',
      },
      letterSpacing: require('./tailwind/letter-spacing'),
      zIndex: {
        '-1': '-1',
        1000: '1000',
        1001: '1001',
      },
      strokeWidth: {
        4: '4px',
      },
      listStyleType: {
        circle: 'circle',
      },
      gridTemplateColumns: {
        base: '18% 1fr 26%',
        'sd-container': '1fr 232px 300px 1fr',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
