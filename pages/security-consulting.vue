<template>
  <div>
    <SectionHeader title="Security consulting" />

    <v-container fluid class="grey-section py-16 mb-8">
      <v-container max-width="1100">
        <v-row>
          <v-col cols="12" lg="6">
            <v-row>
              <v-col cols="12" lg="10">
                <div class="text-36 deep-blue font-weight-bold line-break-0">
                  {{ t("our-mission") }}
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="6" class="sub-text">
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

    <v-container class="py-15" max-width="1100">
      <div class="text-36 deep-blue font-weight-bold mb-8 line-break-0">
        {{ t("main-focus") }}
      </div>

      <v-row>
        <v-col cols="12" lg="6">
          <div class="mb-8">
            <v-row class="mb-1">
              <v-col cols="2" lg="1" class="pe-0 pe-lg-3">
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
              <v-col cols="10" lg="11" class="ps-0 ps-lg-3">
                <div class="deep-blue text-25 font-weight-medium line-break-0">
                  {{ t("threat-identification") }}
                </div>
              </v-col>
            </v-row>

            <div class="sub-text">
              <p class="mb-3 line-break-0">
                {{ t("threat-text") }}
              </p>

              <p class="line-break-0">
                <span class="font-weight-medium"
                  >{{ t("internal-bold") }}:</span
                >
                {{ t("internal-text") }}
              </p>
              <p class="mb-3 line-break-0">{{ t("risk-raised") }}</p>

              <p class="mb-3 line-break-0">
                <span class="font-weight-medium">{{ t("exernal-bold") }}:</span>
                {{ t("exernal-text") }}
              </p>
            </div>
          </div>

          <div class="mb-8">
            <v-row class="mb-1">
              <v-col cols="2" lg="1" class="pe-0 pe-lg-3">
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
              <v-col cols="10" lg="11" class="ps-0 ps-lg-3">
                <div class="deep-blue text-25 font-weight-medium line-break-0">
                  {{ t("information-protection") }}
                </div>
              </v-col>
            </v-row>

            <div class="sub-text">
              <p class="mb-3 line-break-0">
                {{ t("information-text-1") }}
              </p>

              <ul class="ps-5 line-break-0">
                <li>{{ t("information-text-2") }}</li>
                <li>{{ t("information-text-3") }}</li>
                <li>{{ t("information-text-4") }}</li>
              </ul>
            </div>
          </div>

          <div class="mb-8">
            <v-row class="mb-1">
              <v-col cols="2" lg="1" class="pe-0 pe-lg-3">
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
              <v-col cols="10" lg="11" class="ps-0 ps-lg-3">
                <div class="deep-blue text-25 font-weight-medium line-break-0">
                  {{ t("asset-protection") }}
                </div>
              </v-col>
            </v-row>

            <div class="sub-text">
              <p class="mb-3 line-break-0">
                {{ t("asset-text-2") }}
              </p>

              <ul class="ps-5 line-break-0">
                <li>{{ t("asset-text-3") }}</li>
                <li>{{ t("asset-text-4") }}</li>
                <li>
                  {{ t("asset-text-5") }}
                </li>
              </ul>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="6">
          <div class="mb-8">
            <v-row class="mb-1">
              <v-col cols="2" lg="1" class="pe-0 pe-lg-3">
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
              <v-col cols="10" lg="11" class="ps-0 ps-lg-3">
                <div class="deep-blue text-25 font-weight-medium line-break-0">
                  {{ t("analysis") }}
                </div>
              </v-col>
            </v-row>

            <div class="sub-text">
              <ul class="ps-5 line-break-0">
                <li>{{ t("analysis-text") }}</li>
                <li>
                  {{ t("analysis-text-2") }}
                </li>
              </ul>
            </div>
          </div>

          <div class="mb-8">
            <v-row class="mb-1">
              <v-col cols="2" lg="1" class="pe-0 pe-lg-3">
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
              <v-col cols="10" lg="11" class="ps-0 ps-lg-3">
                <div class="deep-blue text-25 font-weight-medium line-break-0">
                  {{ t("risk-management") }}
                </div>
              </v-col>
            </v-row>

            <div class="sub-text">
              <ul class="ps-5 line-break-0">
                <li>
                  {{ t("risk-management-text") }}
                </li>
                <li>
                  {{ t("risk-management-2") }}
                </li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="grey-section py-16">
      <v-container max-width="1100">
        <v-row>
          <v-col cols="12" lg="6">
            <v-row>
              <v-col cols="12" lg="10">
                <div class="text-36 deep-blue font-weight-bold line-break-0">
                  {{ t("service-goals") }}
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="6" class="sub-text">
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
  ],
});
</script>