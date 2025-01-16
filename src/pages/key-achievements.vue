<template>
  <div>
    <SectionHeader title="Key achievements" />

    <v-container max-width="1200" class="py-15 mb-5">
      <v-row justify="center" class="mb-10">
        <v-col cols="12" lg="10">
          <div class="sub-text text-center">
            <p class="mb-2">
              {{ t("success-story") }}
            </p>
            <p class="mb-2">
              {{ t("key-milestone") }}
            </p>
            <p class="mb-2">
              {{ t("wealth-experience") }}
            </p>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="achievement in achievements"
          :key="achievement.image"
          cols="12"
          lg="3"
          class="pb-8"
        >
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                :src="achievement.image"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col
              v-if="achievement.imgLabel"
              class="d-flex justify-center"
              cols="12"
              lg="10"
            >
              <v-img
                :src="achievement.imgLabel"
                height="50"
                class="img-label"
              ></v-img>
            </v-col>
            <v-col v-if="achievement.logo" cols="8" lg="10">
              <v-row align="center" justify="center" no-gutters>
                <v-col cols="2" lg="3">
                  <v-img
                    :src="achievement.logo"
                    height="50"
                    max-width="100%"
                  ></v-img>
                </v-col>
                <v-col cols="10" lg="9" class="ps-2">
                  <div class="text-body-2 font-weight-bold">
                    {{ t(achievement.label) }}
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col
              v-if="!achievement.imgLabel && !achievement.logo"
              cols="8"
              lg="10"
            >
              <div class="text-body-2 text-center font-weight-bold">
                {{ t(achievement.label) }}
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="bg-blue-accent-4 text-white py-10">
      <v-container max-width="1100">
        <div class="text-center">
          <div class="text-h3 font-weight-bold mb-8">
            {{ t("our-partners") }}
          </div>
          <p class="text-h6 font-weight-regular">
            {{ t("our-partners-text") }}
          </p>
        </div>
      </v-container>
    </v-container>
  </div>
</template>

<script setup>
import achievements from "@/achievements";
import { useI18n } from "vue-i18n";
import { useHead } from "@vueuse/head";

const { t } = useI18n();

useHead({
  title: t("seo-key"),
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
      content: t("seo-key"),
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