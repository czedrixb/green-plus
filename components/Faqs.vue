<template>
  <v-container fluid class="bg-white py-16">
    <v-container max-width="1100">
      <div class="text-center text-h3 font-weight-medium mb-8">
        {{ t("faqs") }}
      </div>

      <v-expansion-panels rounded="lg" elevation="0" bg-color="grey-lighten-3">
        <v-expansion-panel v-for="faq in faqs" :key="faq.question">
          <v-expansion-panel-title class="font-weight-medium text-body-1">
            <template v-slot:actions="{ expanded }">
              <v-icon
                class="icon"
                :icon="expanded ? 'mdi-minus' : 'mdi-plus'"
              ></v-icon>
            </template>
            <div class="header">
              {{ t(faq.question) }}
            </div>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            {{ t(faq.answer) }}
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </v-container>
</template>

<script setup>
import faqs from "@/faqs";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style scoped>
.icon {
  order: 0;
}

.header {
  order: 1;
}

.v-expansion-panel-title {
  justify-content: start;
}

::v-deep(.v-expansion-panel-title__icon) {
  margin-inline-start: 0;
  margin-inline-end: 20px;
}
</style>