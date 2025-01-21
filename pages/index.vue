<template>
  <div>
    <v-parallax>
      <v-container class="pb-0 pt-16" max-width="1200">
        <v-row align="center" class="py-10">
          <v-col cols="12" class="py-16" lg="6">
            <div>
              <div
                class="text-43 font-weight-bold text-blue-darken-4 text-center line-break-0"
              >
                {{ t("hero-big-1") }}
              </div>
              <div
                class="text-43 font-weight-bold text-blue-darken-4 text-center mb-5 line-break-0"
              >
                {{ t("hero-big-2") }}
              </div>

              <div class="sub-text mb-5 line-break-0">
                {{ t("hero-small") }}
              </div>

              <v-btn
                to="/contact-us"
                elevation="0"
                color="blue-accent-4"
                size="x-large"
                rounded="lg"
                class="text-none font-weight-regular"
              >
                {{ t("hero-btn") }}
              </v-btn>
            </div>
          </v-col>
          <v-col class="pb-0 pe-lg-5" cols="12" lg="6">
            <v-img
              src="/images/homepage/hero-image-1b.png"
              class="overflow-visible move-image-left"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>

    <v-container fluid class="bg-blue-accent-4 text-white py-16">
      <v-container max-width="1100">
        <v-row align="center">
          <v-col cols="12" lg="6">
            <v-row>
              <v-col cols="12" lg="10">
                <div class="mb-5 font-weight-bold text-h4 line-break-0">
                  {{ t("why-human") }}
                </div>

                <div class="text-h6 font-weight-regular mb-5 line-break-0">
                  {{ t("in-human") }}
                </div>

                <div class="text-h6 font-weight-regular mb-5 line-break-0">
                  {{ t("trusted-business") }}
                </div>

                <v-btn
                  to="/about-us"
                  elevation="0"
                  color="white"
                  size="x-large"
                  class="text-blue-accent-4 text-none font-weight-regular"
                  rounded="lg"
                >
                  {{ t("getting-started") }}
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" lg="6">
            <div>
              <v-img
                src="/images/homepage/green-plus.png"
                cover
                max-width="100%"
                height="450"
                rounded="lg"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <v-container fluid class="bg-grey-lighten-2">
      <v-container max-width="1100" class="py-16">
        <v-row justify="center" class="mb-14">
          <v-col cols="12" lg="9">
            <div
              class="text-h4 font-weight-bold text-blue-darken-4 text-center line-break-0"
            >
              {{ t("is-committed-1") }}
            </div>
            <div
              class="text-h4 font-weight-bold text-blue-darken-4 text-center line-break-0"
            >
              {{ t("is-committed-2") }}
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="pa-lg-5" cols="12" lg="6">
            <div>
              <v-img
                src="/images/homepage/professional-security.png"
                rounded="lg"
                cover
                max-width="100%"
                height="230"
                class="mb-8"
              ></v-img>
            </div>

            <div class="text-center">
              <div
                class="text-h5 text-blue-darken-4 font-weight-bold mb-3 line-break-0"
              >
                {{ t("profession-security") }}
              </div>
              <div class="text-h6 font-weight-regular line-break-0">
                {{ t("profession-security-text") }}
              </div>
            </div>
          </v-col>
          <v-col class="pa-lg-5" cols="12" lg="6">
            <div>
              <v-img
                src="/images/homepage/deploy-skilled.png"
                rounded="lg"
                cover
                max-width="100%"
                height="230"
                class="mb-8"
              ></v-img>
            </div>

            <div class="text-center">
              <div
                class="text-h5 text-blue-darken-4 font-weight-bold mb-3 line-break-0"
              >
                {{ t("deploy-skilled") }}
              </div>
              <div class="text-h6 font-weight-regular line-break-0">
                {{ t("deploy-skilled-text") }}
              </div>
            </div>
          </v-col>
          <v-col class="pa-lg-5" cols="12" lg="6">
            <div>
              <v-img
                src="/images/homepage/efficient-facilities.png"
                rounded="lg"
                cover
                max-width="100%"
                height="230"
                class="mb-8"
              ></v-img>
            </div>

            <div class="text-center">
              <div
                class="text-h5 text-blue-darken-4 font-weight-bold mb-3 line-break-0"
              >
                {{ t("efficient-facilities") }}
              </div>
              <div class="text-h6 font-weight-regular line-break-0">
                {{ t("efficient-facilities-text") }}
              </div>
            </div>
          </v-col>
          <v-col class="pa-lg-5" cols="12" lg="6">
            <div>
              <v-img
                src="/images/homepage/innovation-system.png"
                rounded="lg"
                cover
                max-width="100%"
                height="230"
                class="mb-8"
              ></v-img>
            </div>
            <div class="text-center">
              <div
                class="text-h5 text-blue-darken-4 font-weight-bold mb-3 line-break-0"
              >
                {{ t("innovation-system") }}
              </div>
              <div class="text-h6 font-weight-regular line-break-0">
                {{ t("innovation-system-text") }}
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <v-container fluid class="bg-white py-16">
      <v-container max-width="1100">
        <v-row class="mb-8" align="center">
          <v-col cols="12" lg="6">
            <v-img
              src="/images/homepage/our-vision.png"
              cover
              max-width="95%"
              rounded="lg"
            ></v-img>
          </v-col>
          <v-col cols="12" lg="6">
            <div
              class="text-36 text-blue-darken-4 font-weight-medium mb-3 line-break-0"
            >
              {{ t("our-vision") }}
            </div>

            <div>
              <p class="text-h6 font-weight-regular line-break-0">
                {{ t("our-vision-text") }}
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12" lg="6">
            <div
              class="text-36 text-blue-darken-4 font-weight-medium mb-3 line-break-0"
            >
              {{ t("our-mission") }}
            </div>

            <p class="text-h6 font-weight-regular line-break-0">
              {{ t("our-mission-text") }}
            </p>
          </v-col>
          <v-col cols="12" lg="6">
            <v-img
              src="/images/homepage/our-mission.png"
              cover
              max-width="95%"
              height="405"
              rounded="lg"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <CustomerReviews />

    <Faqs />
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const staticMetaTitle = t("seo-home");
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

