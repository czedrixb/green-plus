import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light',
    },
    icons: {
        defaultSet: 'mdi', // Vuetify automatically uses the MDI icon set
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
