<template>
  <v-container fluid class="px-0 py-0">
    <div class="bg-image py-lg-5">
      <div class="banner-title font-weight-medium text-white text-center py-16">
        {{ t(title) }}
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

defineProps({
  title: {
    type: String,
  },
});
</script>
