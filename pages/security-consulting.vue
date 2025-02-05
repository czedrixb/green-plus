<template>
  <div>
    <SectionHeader title="Security consulting" />

    <v-container fluid class="grey-section py-16 mb-8">
      <v-container max-width="1100">
        <v-row>
          <v-col cols="12" md="6" lg="6">
            <v-row>
              <v-col cols="12" lg="10">
                <div
                  class="text-36 deep-blue text-sm-center font-weight-bold line-break-0"
                >
                  {{ t("our-mission") }}
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6" lg="6" class="sub-text">
            <div class="mb-5">
              <p class="line-break-0">
                <span class="font-weight-bold"
                  >{{ t("ensuring-corporate-bold") }}:</span
                >
                {{ t("ensuring-corporate-text") }}
              </p>
              <p class="line-break-0">{{ t("protect") }}</p>
            </div>

            <p class="line-break-0">
              <span class="font-weight-bold"
                >{{ t("maintaining-business-bold") }}:</span
              >
              {{ t("maintaining-business-text") }}
            </p>
            <p class="line-break-0">{{ t("protect-operations") }}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <v-container class="px-sm-8 px-md-10 py-15" max-width="1100">
      <div class="text-36 deep-blue font-weight-bold mb-8 line-break-0">
        {{ t("core-management") }}
      </div>

      <v-row>
        <v-col cols="12" md="6" lg="6">
          <div class="mb-8">
            <v-row class="mb-1">
              <v-col cols="2" sm="1" md="2" lg="1" class="pe-0 pe-lg-3">
                <v-sheet
                  rounded="circle"
                  class="text-h6 font-weight-medium d-flex justify-center align-center"
                  color="blue-darken-4"
                  height="32"
                  width="32"
                >
                  1
                </v-sheet>
              </v-col>
              <v-col cols="10" sm="11" md="10" lg="11" class="ps-0 ps-lg-3">
                <div class="deep-blue text-25 font-weight-bold line-break-0">
                  {{ t("threat-identity") }}
                </div>
              </v-col>
            </v-row>

            <div class="sub-text">
              <p class="mb-3 line-break-0">
                {{ t("threat-identity-text") }}
              </p>

              <p class="mb-3 line-break-0">
                <b>{{ t("internal-bold") }}:</b> {{ t("threat-point-1") }}
              </p>

              <p class="mb-3 line-break-0">
                <b>{{ t("exernal-bold") }}:</b> {{ t("threat-point-2") }}
              </p>
            </div>
          </div>

          <div class="mb-8">
            <v-row class="mb-1">
              <v-col cols="2" sm="1" md="2" lg="1" class="pe-0 pe-lg-3">
                <v-sheet
                  rounded="circle"
                  class="text-h6 font-weight-medium d-flex justify-center align-center"
                  color="blue-darken-4"
                  height="32"
                  width="32"
                >
                  2
                </v-sheet>
              </v-col>
              <v-col cols="10" sm="11" md="10" lg="11" class="ps-0 ps-lg-3">
                <div class="deep-blue text-25 font-weight-bold line-break-0">
                  {{ t("facility-information") }}
                </div>
              </v-col>
            </v-row>

            <div class="sub-text">
              <p class="mb-3 line-break-0">
                {{ t("facility-information-text") }}
              </p>

              <ul class="ps-5 line-break-0">
                <li>{{ t("facility-point-1") }}</li>
                <li>{{ t("facility-point-2") }}</li>
                <li>{{ t("facility-point-3") }}</li>
              </ul>
            </div>
          </div>

          <div class="mb-8">
            <v-row class="mb-1">
              <v-col cols="2" sm="1" md="2" lg="1" class="pe-0 pe-lg-3">
                <v-sheet
                  rounded="circle"
                  class="text-h6 font-weight-medium d-flex justify-center align-center"
                  color="blue-darken-4"
                  height="32"
                  width="32"
                >
                  3
                </v-sheet>
              </v-col>
              <v-col cols="10" sm="11" md="10" lg="11" class="ps-0 ps-lg-3">
                <div class="deep-blue text-25 font-weight-bold line-break-0">
                  {{ t("asset-safety") }}
                </div>
              </v-col>
            </v-row>

            <div class="sub-text">
              <p class="mb-3 line-break-0">
                {{ t("asset-safety-text") }}
              </p>

              <ul class="ps-5 line-break-0">
                <li>{{ t("asset-point-1") }}</li>
                <li>{{ t("asset-point-2") }}</li>
                <li>{{ t("asset-point-3") }}</li>
              </ul>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="6">
          <div class="mb-8">
            <v-row class="mb-1">
              <v-col cols="2" sm="1" md="2" lg="1" class="pe-0 pe-lg-3">
                <v-sheet
                  rounded="circle"
                  class="text-h6 font-weight-medium d-flex justify-center align-center"
                  color="blue-darken-4"
                  height="32"
                  width="32"
                >
                  4
                </v-sheet>
              </v-col>
              <v-col cols="10" sm="11" md="10" lg="11" class="ps-0 ps-lg-3">
                <div class="deep-blue text-25 font-weight-bold line-break-0">
                  {{ t("analysis-improvement") }}
                </div>
              </v-col>
            </v-row>

            <div class="sub-text">
              <p class="mb-3 line-break-0">
                {{ t("analysis-improvement-text") }}
              </p>

              <ul class="ps-5 line-break-0">
                <li>{{ t("analysis-point-1") }}</li>
                <li>
                  {{ t("analysis-point-2") }}
                </li>
              </ul>
            </div>
          </div>

          <div class="mb-8">
            <v-row class="mb-1">
              <v-col cols="2" sm="1" md="2" lg="1" class="pe-0 pe-lg-3">
                <v-sheet
                  rounded="circle"
                  class="text-h6 font-weight-medium d-flex justify-center align-center"
                  color="blue-darken-4"
                  height="32"
                  width="32"
                >
                  5
                </v-sheet>
              </v-col>
              <v-col cols="10" sm="11" md="10" lg="11" class="ps-0 ps-lg-3">
                <div class="deep-blue text-25 font-weight-bold line-break-0">
                  {{ t("risk-based") }}
                </div>
              </v-col>
            </v-row>

            <div class="sub-text">
              <p class="mb-3 line-break-0">
                {{ t("risk-based-text") }}
              </p>

              <ul class="ps-5 line-break-0 mb-3">
                <li>
                  {{ t("risk-point-1") }}
                </li>
                <li>
                  {{ t("risk-point-2") }}
                </li>
              </ul>

              <p class="mb-3 line-break-0">
                {{ t("risk-based-end") }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="grey-section py-16">
      <v-container max-width="1100">
        <v-row>
          <v-col cols="12" md="6" lg="6">
            <v-row>
              <v-col cols="12" lg="10">
                <div
                  class="text-36 deep-blue text-sm-center font-weight-bold line-break-0"
                >
                  {{ t("service-goals") }}
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6" lg="6" class="sub-text">
            <p class="font-weight-bold mb-5 line-break-0">
              {{ t("service-goals-bold") }}
            </p>

            <p class="mb-5 line-break-0">
              <span class="font-weight-bold"
                >{{ t("service-goals-bold-2") }}:</span
              >
              {{ t("service-goals-text") }}
            </p>

            <p class="line-break-0">
              <span class="font-weight-bold"
                >{{ t("service-goals-bold-3") }}:</span
              >
              {{ t("service-goals-text-2") }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <v-container fluid class="bg-blue-accent-4 py-15">
      <v-container max-width="1100" class="text-white text-center">
        <div class="text-h4 mb-5 font-weight-medium line-break-0">
          {{ t("cooperate-us") }}
        </div>

        <p class="text-h6 font-weight-regular mb-5 line-break-0">
          {{ t("cooperate-text") }}
        </p>

        <v-btn
          to="/contact-us"
          elevation="0"
          color="white"
          size="x-large"
          class="text-blue-accent-4 text-none font-weight-bold"
          rounded="lg"
        >
          {{ t("consultation-request") }}
        </v-btn>
      </v-container>
    </v-container>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const staticMetaTitle = t("seo-security");
const staticMetaDescription = t("seo-description");
const staticMetaKeywords = [
  t("seo-key-1"),
  t("seo-key-2"),
  t("seo-key-3"),
  t("seo-key-4"),
  t("seo-key-5"),
  t("seo-key-6"),
  t("seo-key-7"),
  t("seo-key-8"),
  t("seo-key-9"),
  t("seo-key-10"),
  t("seo-key-11"),
  t("seo-key-12"),
  t("seo-key-13"),
].join(", ");

useHead({
  title: staticMetaTitle,
  meta: [
    { name: "description", content: staticMetaDescription },
    { name: "keywords", content: staticMetaKeywords },
    { property: "og:title", content: staticMetaTitle },
    { property: "og:description", content: staticMetaDescription },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/images/thumbnail.jpg" },
  ],
});
</script>