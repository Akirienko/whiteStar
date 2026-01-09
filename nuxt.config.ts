// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-12-22',
  devtools: { enabled: false },
  ssr: true, // SSR/SSG mode
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  css: ['~/assets/style/main.css'],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'ua',
        name: 'Українська',
        file: 'ua.json'
      }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'locales',
    bundle: {
      optimizeTranslationDirective: false
    }
  },
  vite: {
    build: {
      minify: 'esbuild',
      sourcemap: false,
    },

  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: {
    "dirs": [
      { "path": "~/components/", "global": true, pathPrefix: false, },
    ],
  },
})
