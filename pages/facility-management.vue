<template>
  <div>
    <SectionHeader title="Facility Management" class="mb-md-8" />
    <v-container max-width="1300" class="px-md-5 pt-10 pb-16 mt-8">
      <v-row>
        <v-col
          class="px-lg-10"
          v-for="item in items"
          :key="item.title"
          cols="12"
          lg="6"
        >
          <div>
            <div style="width: 100%">
              <v-img
                :src="item.image"
                cover
                width="100%"
                height="180"
                rounded="lg"
                alt="facility-management-1"
              ></v-img>
            </div>
          </div>

          <div class="pe-lg-1">
            <div class="text-h5 text-blue-darken-4 line-break-0 my-4">
              {{ t(item.title) }}
            </div>

            <div class="sub-text">
              <p class="line-break-0 mb-0">
                {{ t(item.content) }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>

      <div class="mt-16 mb-10">
        <v-row justify="center">
          <v-col cols="12" lg="6">
            <div class="purple-card pa-5">
              <div class="text-h4 text-blue-darken-4 line-break-0 mb-5">
                {{ t("key-responsibilities") }}
              </div>
              <div class="sub-text">
                <p class="line-break-0 mb-0">
                  {{ t("provide-comprehensive") }}
                </p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="6">
            <div class="purple-card pa-5">
              <div class="text-h4 text-blue-darken-4 line-break-0 mb-5">
                {{ t("expected-benefits") }}
              </div>
              <div class="sub-text">
                <p class="line-break-0 mb-0">
                  {{ t("maintaining-high") }}
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <PartnerContact />
  </div>
</template>
<script setup>
import { useHead } from "@vueuse/head";
import milestones from "@/milestones";
import teams from "@/team";
import { useI18n } from "vue-i18n";

const items = [
  {
    image: "/images/version2/facility-management/facility-management-1.png",
    title: "maximizing-asset",
    content: "we-maximize",
  },
  {
    image: "/images/version2/facility-management/facility-management-2.png",
    title: "providing-safe",
    content: "we-perform",
  },
];

const { t } = useI18n();
const staticMetaTitle = t("seo-about");
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
<style scoped>
.v-card--variant-outlined {
  border: thin solid rgb(196 196 196 / 87%);
}
.img-placeholder {
  height: 13rem;
}

.purple-card {
  min-height: 18rem;
}
</style>