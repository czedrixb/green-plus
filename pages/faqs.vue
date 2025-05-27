<template>
  <div>
    <SectionHeader title="Frequently Asked Questions" class="mb-md-8" />

    <Faqs class="mb-10" />

    <PartnerContact />
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
    services: ["security-service-1", "security-service-2"],
  },
  {
    image: "/images/version2/business-areas/facility-management.png",
    name: "facility-manage",
    services: ["facility-manage-1", "facility-manage-2"],
  },
  {
    image: "/images/version2/business-areas/parking-management.png",
    name: "parking-manage",
    services: ["parking-manage-1", "parking-manage-2"],
  },
  {
    image: "/images/version2/business-areas/cleaning-management.png",
    name: "cleaning-manage",
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