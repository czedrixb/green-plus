<template>
  <v-container fluid class="px-0 py-0">
    <div class="bg-image pt-15 pb-lg-10">
      <div class="banner-title font-weight-bold text-white text-center py-16">
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
