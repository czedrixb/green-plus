<template>
  <div>
    <SectionHeader title="Work with us" />

    <v-container max-width="1100" class="py-16 mb-8">
      <v-row class="mb-8">
        <v-col cols="12" lg="6">
          <v-row>
            <v-col cols="12" lg="10">
              <div class="text-36 deep-blue font-weight-bold line-break-0">
                {{ t("looking-experts") }}
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" lg="6" class="sub-text">
          <p class="mb-5 line-break-0">
            {{ t("looking-experts-text") }}
          </p>
          <p class="line-break-0">
            {{ t("looking-experts-text-2") }}
          </p>
        </v-col>
      </v-row>

      <v-row align="center">
        <v-col cols="12" lg="4">
          <v-img
            src="@/assets/images/careers/careers-img1.png"
            max-width="l00%"
            rounded="lg"
            height="286"
            cover
          ></v-img>
        </v-col>
        <v-col cols="12" lg="8">
          <v-img
            src="@/assets/images/careers/careers-img2.png"
            max-width="l00%"
            rounded="lg"
            height="286"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="grey-section py-16">
      <v-container max-width="1100">
        <div class="text-36 deep-blue font-weight-bold mb-2 line-break-0">
          {{ t("job-postings") }}
        </div>
        <p class="sub-text mb-8 line-break-0">
          {{ t("latest-hiring") }}
        </p>

        <v-card
          v-for="career in careers"
          :key="career.position"
          class="mb-5"
          elevation="1"
          rounded="xl"
        >
          <v-card-text class="pa-8">
            <v-row class="mb-3" align="center">
              <v-col cols="12" lg="6">
                <div class="d-flex align-lg-center ga-5">
                  <v-icon
                    size="50"
                    icon="mdi-briefcase-variant-outline"
                  ></v-icon>
                  <div class="text-25 font-weight-medium line-break-0">
                    {{ t(career.position) }}
                  </div>
                </div>
              </v-col>
              <v-col cols="12" lg="6" class="d-none d-lg-block">
                <div class="d-flex justify-end">
                  <v-btn
                    to="/contact-us"
                    elevation="0"
                    color="blue-accent-4"
                    size="x-large"
                    rounded="lg"
                    class="text-none font-weight-regular"
                  >
                    {{ t("apply-now") }}
                  </v-btn>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" lg="8">
                <div class="d-flex flex-wrap ga-3">
                  <v-sheet
                    v-for="(flair, index) in career.flairs"
                    :key="index"
                    class="sub-text py-2 px-3 line-break-0"
                    rounded="lg"
                    color="grey-lighten-4"
                  >
                    {{ t(flair) }}
                  </v-sheet>
                </div>
              </v-col>
              <v-col cols="12 d-block d-lg-none">
                <v-btn
                  to="/contact-us"
                  elevation="0"
                  color="blue-accent-4"
                  size="x-large"
                  rounded="lg"
                  class="text-none font-weight-regular"
                >
                  {{ t("apply-now") }}
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-container>
    </v-container>
  </div>
</template>

<script setup>
import careers from "@/careers";
import { useI18n } from "vue-i18n";
import { useHead } from "@vueuse/head";

const { t } = useI18n();

useHead({
  title: t("seo-careers"),
  meta: [
    {
      name: "description",
      content: t("seo-description"),
    },
    {
      name: "keywords",
      content: [
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
      ].join(", "),
    },
    {
      property: "og:title",
      content: t("seo-careers"),
    },
    {
      property: "og:description",
      content: t("seo-description"),
    },
    // {
    //   property: "og:image",
    //   content: "@/assets/images/homepage/hero-image-1b.png",
    // },
    {
      property: "og:type",
      content: "website",
    },
  ],
});
</script>