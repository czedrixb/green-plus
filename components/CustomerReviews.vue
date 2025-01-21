<template>
  <v-container fluid class="bg-blue-accent-4 text-white py-16">
    <v-container max-width="1200">
      <div class="text-center mb-10">
        <div class="mb-5 font-weight-medium text-h4">
          {{ t("customer-review") }}
        </div>

        <div class="text-h6 font-weight-regular">
          {{ t("customer-review-text") }}
        </div>
      </div>

      <v-row justify="center">
        <v-col
          v-for="review in reviews"
          :key="review.customer"
          cols="12"
          lg="4"
        >
          <div class="bg-white py-3 px-2 rounded-lg">
            <div class="d-flex justify-center gx-2 my-3">
              <div class="font-weight-bold text-h6">
                {{ t(review.customer) }}
              </div>
            </div>

            <div
              class="font-weight-regular text-subtitle-1 px-lg-5 text-center text-grey-darken-1"
            >
              {{ t(review.message) }}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import reviews from "@/reviews";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>