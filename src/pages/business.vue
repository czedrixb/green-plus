<template>
  <div>
    <SectionHeader title="Business area" />

    <v-container max-width="1100" class="py-10 mb-10">
      <v-row justify="center" class="mb-8">
        <v-col cols="12" lg="10">
          <p class="sub-text text-center">
            {{ t("business-area-text") }}
          </p>
        </v-col>
      </v-row>

      <v-row class="mb-5" align="center">
        <v-col cols="12" lg="6" class="order-2 order-lg-1">
          <p class="text-h4 font-weight-bold text-blue-darken-4 mb-5">
            {{ t("security-protection") }}
          </p>

          <div class="sub-text">
            <p>{{ t("provision-services") }}:</p>
            <ul class="mb-5 ps-6">
              <li>{{ t("personal-security") }}</li>
              <li>{{ t("event-security") }}</li>
              <li>{{ t("vip-escort") }}</li>
              <li>{{ t("executive-driver") }}</li>
            </ul>

            <p>
              {{ t("security-protection-text") }}
            </p>
          </div>
        </v-col>
        <v-col
          class="d-flex justify-center justify-lg-end order-1 order-lg-2"
          cols="12"
          lg="6"
        >
          <v-img
            src="@/assets/images/business-areas/security-services.png"
            cover
            rounded="lg"
            height="350"
            class="img-responsive-80"
          ></v-img>
        </v-col>
      </v-row>

      <v-row class="mb-5" align="center">
        <v-col cols="12" lg="6">
          <v-img
            src="@/assets/images/business-areas/security-management.png"
            cover
            rounded="lg"
            height="350"
            class="img-responsive-80"
          ></v-img>
        </v-col>
        <v-col cols="12" lg="6">
          <p class="text-h4 font-weight-bold text-blue-darken-4 mb-5">
            {{ t("security-management") }}
          </p>

          <div class="sub-text">
            <p>{{ t("provision-services") }}:</p>
            <ul class="mb-5 ps-6">
              <li>{{ t("access-control") }}</li>
              <li>{{ t("theft-accident") }}</li>
              <li>{{ t("systematic-security") }}</li>
            </ul>

            <p>
              {{ t("security-management-text") }}
            </p>
          </div>
        </v-col>
      </v-row>

      <v-row class="mb-5" align="center">
        <v-col cols="12" lg="6" class="order-2 order-lg-1">
          <p class="text-h4 font-weight-bold text-blue-darken-4 mb-5">
            {{ t("facility-management") }}
          </p>

          <div class="sub-text">
            <p>{{ t("provision-services") }}:</p>
            <ul class="mb-5 ps-6">
              <li>{{ t("central-system") }}</li>
              <li>{{ t("machine-equipment") }}</li>
              <li>{{ t("disaster-prevention") }}</li>
              <li>{{ t("electrical-installation") }}</li>
              <li>{{ t("comprehensive-maintenance") }}</li>
            </ul>

            <p>
              {{ t("facility-management-text") }}
            </p>
          </div>
        </v-col>
        <v-col
          class="d-flex justify-lg-end order-1 order-lg-2"
          cols="12"
          lg="6"
        >
          <v-img
            src="@/assets/images/business-areas/facility-management.png"
            cover
            rounded="lg"
            height="350"
            class="img-responsive-80"
          ></v-img>
        </v-col>
      </v-row>

      <v-row class="mb-5" align="center">
        <v-col cols="12" lg="6">
          <v-img
            src="@/assets/images/business-areas/parking-management.png"
            cover
            rounded="lg"
            height="350"
            class="img-responsive-80"
          ></v-img>
        </v-col>
        <v-col cols="12" lg="6">
          <p class="text-h4 font-weight-bold text-blue-darken-4 mb-5">
            {{ t("security-services") }}
          </p>

          <div class="sub-text">
            <p>{{ t("provision-services") }}:</p>
            <ul class="mb-5 ps-6">
              <li>{{ t("prevention-vehicle") }}</li>
              <li>{{ t("prevent-safety") }}</li>
              <li>{{ t("parking-instruction") }}</li>
              <li>{{ t("parking-settlement") }}</li>
              <li>
                {{ t("illegal-parking") }}
              </li>
            </ul>

            <p>
              {{ t("security-services-text") }}
            </p>
          </div>
        </v-col>
      </v-row>

      <v-row class="mb-5" align="center">
        <v-col cols="12" lg="6" class="order-2 order-lg-1">
          <p class="text-h4 font-weight-bold text-blue-darken-4 mb-5">
            {{ t("cleaning-services") }}
          </p>

          <div class="sub-text">
            <p>{{ t("provision-services") }}:</p>
            <ul class="mb-5 ps-6">
              <li>{{ t("daily-weekly") }}</li>
              <li>{{ t("intesive-cleaning") }}</li>
              <li>{{ t("maintain-pleasant") }}</li>
              <li>{{ t("provide-regular") }}</li>
              <li>{{ t("friendly-attentive") }}</li>
            </ul>

            <p>
              {{ t("cleaning-services-text") }}
            </p>
          </div>
        </v-col>
        <v-col
          class="d-flex justify-lg-end order-1 order-lg-2"
          cols="12"
          lg="6"
        >
          <v-img
            src="@/assets/images/business-areas/cleaning-service.png"
            cover
            rounded="lg"
            height="350"
            class="img-responsive-80"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="bg-blue-accent-4 py-15">
      <v-container max-width="1100" class="text-white text-center">
        <div class="text-h4 mb-5 font-weight-bold">
          {{ t("partners-safe") }}
        </div>

        <p class="text-h6 font-weight-regular mb-5">
          {{ t("partners-safe-text") }}.
        </p>

        <v-btn
          to="/contact-us"
          elevation="0"
          color="white"
          size="x-large"
          class="text-blue-accent-4 text-none font-weight-bold"
          rounded="lg"
        >
          {{ t("contact") }}
        </v-btn>
      </v-container>
    </v-container>
  </div>
</template>

<script setup>
import reviews from "@/reviews";
import faqs from "@/faqs";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>