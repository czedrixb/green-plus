<template>
  <div>
    <SectionHeader title="Security Services" class="mb-md-8" />

    <v-container max-width="1300" class="px-md-5 py-10">
      <v-row justify="center">
        <v-col
          v-for="item in securityItems"
          :key="item.title"
          class="mb-5"
          cols="12"
          md="6"
          lg="4"
        >
          <div>
            <div class="d-flex justify-center">
              <div class="position-relative">
                <v-img
                  :src="item.image"
                  cover
                  width="369px"
                  height="233px"
                  rounded="lg"
                  :alt="item.title"
                ></v-img>

                <div
                  :class="`position-absolute bg-number-${item.number} card-number text-center py-3 px-4`"
                >
                  <span class="text-h5 text-white">0{{ item.number }}</span>
                </div>
              </div>
            </div>

            <div class="text-center mt-5">
              <p
                class="text-h5 font-weight-semibold text-blue-darken-4 mb-5 line-break-0"
              >
                {{ t(item.title) }}
              </p>

              <p class="line-break-0">
                {{ t(item.content) }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid style="background: #f9fbfd">
      <v-container max-width="1300" class="px-md-5 pb-16 mt-8">
        <v-row justify="center">
          <v-col
            v-for="security in securityServices"
            :key="security.title"
            cols="12"
            lg="6"
          >
            <div class="px-3 py-5 policy-card">
              <div class="d-flex justify-center">
                <div>
                  <v-img
                    :src="security.image"
                    cover
                    width="238px"
                    height="124px"
                    rounded="lg"
                    alt="customer-oriented"
                  ></v-img>
                </div>
              </div>

              <div class="text-center mt-5">
                <p
                  class="text-h5 font-weight-semibold text-blue-darken-4 mb-5 line-break-0"
                >
                  {{ t(security.title) }}
                </p>

                <p class="line-break-0">
                  {{ t(security.content) }}
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <PartnerContact />
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import milestones from "@/milestones";
import teams from "@/team";
import { useI18n } from "vue-i18n";

const securityItems = [
  {
    number: 1,
    image: "/images/version2/security-services/personal-protection.png",
    title: "personal-protection",
    content: "preventing-stalking",
  },
  {
    number: 2,
    image: "/images/version2/security-services/event-security.png",
    title: "event-secure",
    content: "vip-celebrity",
  },
  {
    number: 3,
    image: "/images/version2/security-services/system-operations.png",
    title: "system-operations",
    content: "through-specific",
  },
];

const securityServices = [
  {
    image: "/images/version2/security-services/escort-security.png",
    title: "escort-security",
    content: "escort-security-text",
  },
  {
    image: "/images/version2/security-services/chauffeur-services.png",
    title: "chauffeur-services",
    content: "chauffeur-services-text",
  },
  {
    image: "/images/version2/security-services/special-equipment.png",
    title: "special-equipment",
    content: "special-equipment-text",
  },
  {
    image: "/images/version2/security-services/women-only.png",
    title: "women-only",
    content: "women-only-text",
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

.policy-card {
  min-height: 22rem;
}
</style>