<template>
  <v-container fluid class="bg-blue-accent-4 py-15">
    <v-container max-width="1100" class="text-white text-center">
      <div class="text-h4 mb-5 font-weight-bold line-break-0">
        {{ t("partners-safe") }}
      </div>

      <p class="text-h6 font-weight-regular mb-5 line-break-0">
        {{ t("partners-safe-text") }}
      </p>

      <v-btn
        to="/contact-us"
        elevation="0"
        color="white"
        size="x-large"
        class="text-blue-accent-4 text-none font-weight-bold line-break-0"
        rounded="lg"
      >
        {{ t("contact") }}
      </v-btn>
    </v-container>
  </v-container>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>