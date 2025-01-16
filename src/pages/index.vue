<template>
  <div>
    <v-parallax>
      <v-container class="pb-0" max-width="1200">
        <v-row align="center">
          <v-col cols="12" class="py-16" lg="5">
            <div>
              <div
                class="text-43 font-weight-bold text-blue-darken-4 text-center mb-5"
              >
                {{ t("hero-big") }}
              </div>

              <div class="sub-text mb-5">
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
          <v-col class="pb-0 pe-lg-5" cols="12" lg="7">
            <v-img
              src="@/assets/images/homepage/hero-image-1b.png"
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
              <v-col cols="12" lg="9">
                <div class="mb-5 font-weight-bold text-h4">
                  {{ t("why-human") }}
                </div>

                <div class="text-h6 font-weight-regular mb-5">
                  {{ t("in-human") }}
                </div>

                <div class="text-h6 font-weight-regular mb-5">
                  {{ t("trusted-business") }}
                </div>

                <v-btn
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
                src="@/assets/images/homepage/green-plus.png"
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
              class="text-h4 font-weight-bold text-blue-darken-4 text-center"
            >
              {{ t("is-committed") }}
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="pa-lg-5" cols="12" lg="6">
            <div>
              <v-img
                src="@/assets/images/homepage/professional-security.png"
                rounded="lg"
                cover
                max-width="100%"
                height="230"
                class="mb-8"
              ></v-img>
            </div>

            <div class="text-center">
              <div class="text-h5 text-blue-darken-4 font-weight-bold mb-3">
                {{ t("profession-security") }}
              </div>
              <div class="text-h6 font-weight-regular">
                {{ t("profession-security-text") }}
              </div>
            </div>
          </v-col>
          <v-col class="pa-lg-5" cols="12" lg="6">
            <div>
              <v-img
                src="@/assets/images/homepage/deploy-skilled.png"
                rounded="lg"
                cover
                max-width="100%"
                height="230"
                class="mb-8"
              ></v-img>
            </div>

            <div class="text-center">
              <div class="text-h5 text-blue-darken-4 font-weight-bold mb-3">
                {{ t("deploy-skilled") }}
              </div>
              <div class="text-h6 font-weight-regular">
                {{ t("deploy-skilled-text") }}
              </div>
            </div>
          </v-col>
          <v-col class="pa-lg-5" cols="12" lg="6">
            <div>
              <v-img
                src="@/assets/images/homepage/efficient-facilities.png"
                rounded="lg"
                cover
                max-width="100%"
                height="230"
                class="mb-8"
              ></v-img>
            </div>

            <div class="text-center">
              <div class="text-h5 text-blue-darken-4 font-weight-bold mb-3">
                {{ t("efficient-facilities") }}
              </div>
              <div class="text-h6 font-weight-regular">
                {{ t("efficient-facilities-text") }}
              </div>
            </div>
          </v-col>
          <v-col class="pa-lg-5" cols="12" lg="6">
            <div>
              <v-img
                src="@/assets/images/homepage/innovation-system.png"
                rounded="lg"
                cover
                max-width="100%"
                height="230"
                class="mb-8"
              ></v-img>
            </div>
            <div class="text-center">
              <div class="text-h5 text-blue-darken-4 font-weight-bold mb-3">
                {{ t("innovation-system") }}
              </div>
              <div class="text-h6 font-weight-regular">
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
              src="@/assets/images/homepage/our-vision.png"
              cover
              max-width="95%"
              rounded="lg"
            ></v-img>
          </v-col>
          <v-col cols="12" lg="6">
            <div class="text-36 text-blue-darken-4 font-weight-medium mb-3">
              {{ t("our-vision") }}
            </div>

            <div>
              <p class="text-h6 font-weight-regular">
                {{ t("our-vision-text") }}
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12" lg="6">
            <div class="text-36 text-blue-darken-4 font-weight-medium mb-3">
              {{ t("our-mission") }}
            </div>

            <p class="text-h6 font-weight-regular">
              {{ t("our-mission-text") }}
            </p>
          </v-col>
          <v-col cols="12" lg="6">
            <v-img
              src="@/assets/images/homepage/our-mission.png"
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
import reviews from "@/reviews";
import faqs from "@/faqs";
import { useI18n } from "vue-i18n";
import { useHead } from "@vueuse/head";

const { t } = useI18n();

useHead({
  title: t("seo-home"),
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
      content: t("seo-home"),
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