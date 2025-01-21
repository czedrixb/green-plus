// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['vuetify/styles', '@/assets/styles/style.css', '@mdi/font/css/materialdesignicons.css'],

  build: {
    transpile: ['vuetify'],
  },
  plugins: ['~/plugins/vuetify', '~/plugins/i18n'],
    app: {
    head: {
      titleTemplate: 'Human Green Plus',
      meta: [
        { name: 'description', content: 'Discover Human Green Plus Co., Ltd., a leader in comprehensive building management services, specializing in security, cleaning, parking, and facility management. Partnered with SK Shieldus, we deliver cutting-edge security consulting, advanced technologies, and tailored solutions for apartments, universities, and corporations.' },
        {
          name: 'keywords',
          content: 'Comprehensive building management, Security consulting services',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Human Green Plus' },
      ],
    },
  },
});