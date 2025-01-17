/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// SEO
import { createHead } from "@vueuse/head";

// Lang
import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import ko from "./locales/ko.json";

// Composables
import { createApp } from "vue";

import "@/styles/style.scss";

const i18n = createI18n({
  locale: "ko",
  fallbackLocale: "ko",
  messages: {
    en,
    ko,
  },
});

const app = createApp(App);

app.use(createHead());

registerPlugins(app);

// Use i18n plugin
app.use(i18n);

app.mount("#app");
