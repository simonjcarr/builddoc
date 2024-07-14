// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    "@nuxt/icon"
  ],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    },
  },
  primevue: {
    options: {
      ripple: true,
      theme: {
        preset: Aura,
        darkModeSelector: '.dark-mode'
      }
    }
  },

  googleFonts: {
    families: {
      Inter: true,
    },
    subsets: 'latin',
  },

  compatibilityDate: '2024-07-02',
})