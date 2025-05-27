<template>
  <div>
    <SectionHeader title="Sk Shields Agency" class="mb-md-8" />

    <v-container fluid class="px-5">
      <v-container max-width="1300" class="bg-sk px-md-10 py-16 mb-10">
        <v-row justify="center">
          <v-col
            v-for="item in items"
            :key="item.title"
            cols="12"
            sm="6"
            lg="3"
          >
            <div class="title-sk text-center py-2 mb-9">
              <p class="text-h5 font-weight-semibold line-break-0">
                {{ t(item.title) }}
              </p>
            </div>

            <v-img :src="item.image" cover :alt="item.title"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <PartnerContact />
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";

const items = [
  {
    image: "/images/version2/sk-shields/ai-cctv.png",
    title: "ai-cctv",
  },
  {
    image: "/images/version2/sk-shields/response-security.png",
    title: "response-security",
  },
  {
    image: "/images/version2/sk-shields/access-control.png",
    title: "access-security",
  },
  {
    image: "/images/version2/sk-shields/automated-parking.png",
    title: "automated-park",
  },
];

const { t } = useI18n();

const staticMetaTitle = t("seo-business");
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