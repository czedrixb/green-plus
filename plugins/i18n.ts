import { defineNuxtPlugin } from '#app'
import { createI18n } from 'vue-i18n'

// Dynamically import language files
const loadLocaleMessages = async () => {
  const en = await import('@/locales/en.json')
  const ko = await import('@/locales/ko.json')

  return {
    en: en.default,
    ko: ko.default,
  }
}

export default defineNuxtPlugin(async (nuxtApp) => {
  const messages = await loadLocaleMessages()

  const i18n = createI18n({
    legacy: false,
    locale: 'ko',
    messages,
  })

  // Use app.use() with the i18n instance
  nuxtApp.vueApp.use(i18n)
})
