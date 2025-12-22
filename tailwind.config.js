module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  // corePlugins: {
  //   preflight: false,
  // },
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      tablet: '1200px',
      xl: '1280px',
      'macbook-13': '1440px',
      '2xl': '1600px',
      'screen-h-760': { raw: '(min-height: 700px)' },
      'screen-h-620': { raw: '(max-height: 620px)' },
      'small-hw-screen': {'raw': '(min-height: 700px) and (min-width: 1280px)'},
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        main: {
          blue: '#002160',
          yellow: '#FFE492',

        },
      },
    },
  },
}