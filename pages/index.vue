<template>
  <div>
    <div class="d-none d-lg-block d-md-block">
      <v-parallax>
        <v-container class="pb-0 pt-16" max-width="1400">
          <v-row align="center" class="py-10">
            <v-col
              cols="12"
              class="overflow-hidden py-md-10 py-lg-2"
              md="8"
              lg="7"
            >
              <div>
                <v-row>
                  <v-col cols="12" md="12">
                    <div
                      class="text-43 font-weight-bold text-blue-darken-4 text-center line-break-0 mb-5"
                    >
                      {{ t("hero-big") }}
                    </div>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="10">
                    <div class="sub-text mb-5 line-break-0">
                      {{ t("hero-small") }}
                    </div>
                  </v-col>
                </v-row>

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
            <v-col
              class="pb-xl-16 d-flex justify-center"
              cols="12"
              md="4"
              lg="5"
            >
              <img
                src="/images/ai/homepage/hero-image-1b.png"
                class="overflow-visible img-hero"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </div>

    <div class="d-block d-md-none d-lg-none">
      <v-container class="pb-3 pt-16" max-width="1400">
        <v-row align="center" class="pt-10 pb-0">
          <v-col cols="12" class="py-16 pb-5 pb-md-0" lg="6">
            <div>
              <div
                class="text-43 font-weight-bold text-blue-darken-4 text-center line-break-0 mb-5"
              >
                {{ t("hero-big") }}
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
          <v-col class="pe-lg-5 pt-8 pt-sm-0 overflow-hidden" cols="12" lg="6">
            <v-img
              src="/images/ai/homepage/hero-image-1b.png"
              class="overflow-visible img-hero"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container
      fluid
      class="bg-blue-accent-4 accent-container text-white py-16"
    >
      <v-container max-width="1100">
        <v-row align="center">
          <v-col cols="12" sm="6" md="6" lg="6">
            <v-row>
              <v-col cols="12" lg="11">
                <div class="mb-5 text-h4 line-break-0">
                  {{ t("why-1") }} <b>{{ t("why-human") }}</b> {{ t("why-2") }}
                </div>

                <p class="text-h6 font-weight-regular mb-5 line-break-0 mb-5">
                  {{ t("in-human") }}
                </p>

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
          <v-col cols="12" sm="6" md="6" lg="6">
            <div>
              <!-- <v-img
                src="/images/homepage/green-plus.png"
                cover
                max-width="100%"
                height="450"
                rounded="lg"
              ></v-img> -->
              <v-img
                src="/images/ai/homepage/green-plus.png"
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
        <div
          class="text-h4 font-weight-bold text-blue-darken-4 text-center line-break-0 mb-2"
        >
          {{ t("is-committed") }}
        </div>
        <div
          class="text-h4 font-weight-bold text-blue-darken-4 text-center line-break-0 mb-15"
        >
          {{ t("is-committed-2") }}
        </div>

        <v-row>
          <v-col class="pa-lg-5" cols="12" sm="6" md="6" lg="6">
            <div>
              <v-img
                src="/images/ai/homepage/professional-security.png"
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
          <v-col class="pa-lg-5" cols="12" sm="6" md="6" lg="6">
            <div>
              <v-img
                src="/images/ai/homepage/deploy-skilled.png"
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
          <v-col class="pa-lg-5" cols="12" sm="6" md="6" lg="6">
            <div>
              <v-img
                src="/images/ai/homepage/efficient-facilities.png"
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
          <v-col class="pa-lg-5" cols="12" sm="6" md="6" lg="6">
            <div>
              <v-img
                src="/images/ai/homepage/innovation-system.png"
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
          <v-col cols="12" sm="6" md="6" lg="6">
            <v-img
              src="/images/ai/homepage/our-vision.png"
              cover
              max-width="95%"
              rounded="lg"
            ></v-img>
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="6">
            <div
              class="text-36 text-blue-darken-4 font-weight-bold mb-3 line-break-0"
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
          <v-col cols="12" sm="6" md="6" lg="6" class="order-2 order-lg-1">
            <div
              class="text-36 text-blue-darken-4 font-weight-bold mb-3 line-break-0"
            >
              {{ t("our-mission") }}
            </div>

            <p class="text-h6 font-weight-regular line-break-0">
              {{ t("our-mission-text") }}
            </p>
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="6" class="order-1 order-lg-2">
            <v-img
              src="/images/ai/homepage/our-mission.png"
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
    { property: "og:image", content: "/images/thumbnail.jpg" },
  ],
});
</script>