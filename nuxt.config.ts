// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/google-fonts'],

  runtimeConfig: {
    public: {
      publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    },
  },

  googleFonts: {
    families: {
      Inter: true,
    },
    subsets: 'latin',
  },

  compatibilityDate: '2024-07-02',
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
