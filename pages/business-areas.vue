<template>
  <div>
    <SectionHeader title="Business Areas" class="mb-md-8" />

    <v-container max-width="1300" class="px-md-5 pt-10 pb-16 mt-8">
      <v-row justify="center">
        <v-col v-for="item in businessItems" :key="item.name" cols="12" lg="6">
          <NuxtLink :to="item.to" class="text-decoration-none text-black">
            <div class="business-card px-5 pt-10 pb-15">
              <div class="d-flex justify-center mb-10">
                <div style="width: 100%; max-width: 119px">
                  <v-img
                    :src="item.image"
                    cover
                    width="100%"
                    aspect-ratio="119/111"
                    :alt="t(item.name)"
                  />
                </div>
              </div>

              <div class="text-center mt-5">
                <h1
                  class="text-25 font-weight-medium text-blue-darken-4 mb-8 line-break-0"
                >
                  {{ t(item.name) }}
                </h1>

                <div
                  v-for="(service, index) in item.services"
                  :key="index"
                  class="sub-text d-flex ga-1"
                >
                  <v-icon>mdi-circle-small</v-icon>
                  <p class="line-break-0 mb-0">
                    {{ t(service) }}
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import milestones from "@/milestones";
import teams from "@/team";
import { useI18n } from "vue-i18n";

const businessItems = [
  {
    image: "/images/version2/business-areas/security-services.png",
    name: "security-service",
    to: "security-services",
    services: ["security-service-1", "security-service-2"],
  },
  {
    image: "/images/version2/business-areas/facility-management.png",
    name: "facility-manage",
    to: "facility-management",
    services: ["facility-manage-1", "facility-manage-2"],
  },
  {
    image: "/images/version2/business-areas/parking-management.png",
    name: "parking-manage",
    to: "parking-management",
    services: ["parking-manage-1", "parking-manage-2"],
  },
  {
    image: "/images/version2/business-areas/cleaning-management.png",
    name: "cleaning-manage",
    to: "cleaning-management",
    services: ["cleaning-manage-1", "cleaning-manage-2"],
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
</style>