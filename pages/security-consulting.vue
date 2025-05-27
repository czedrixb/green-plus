<template>
  <div>
    <SectionHeader title="Security Consulting" class="mb-md-8" />

    <v-container max-width="1300" class="px-md-5 py-10">
      <p class="sub-text line-break-0 mb-15">
        {{ t("business-partner") }}
      </p>
      <div class="position-relative">
        <v-row justify="center">
          <v-col
            v-for="item in securityItems"
            :key="item.title"
            class="px-md-15 mb-5"
            cols="12"
            sm="6"
            lg="4"
          >
            <div>
              <div class="d-flex justify-center">
                <div class="img-card">
                  <v-img
                    :src="item.image"
                    cover
                    rounded="lg"
                    :alt="item.title"
                    class="img-card"
                  ></v-img>
                </div>
              </div>

              <div class="text-center my-10">
                <p
                  class="text-h5 font-weight-semibold text-blue-darken-4 mb-5 line-break-0"
                >
                  {{ t(item.title) }}
                </p>
              </div>

              <div class="sub-text">
                <p
                  v-for="(content, index) in item.contents"
                  :key="index"
                  class="line-break-0 mb-8"
                >
                  {{ t(content) }}
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
        <div
          class="position-absolute d-none d-lg-block outline-background"
          style="max-width: 100%; width: 100%"
        >
          <v-img
            src="/images/version2/security-consulting/outline-background.png"
            cover
          ></v-img>
        </div>

        <div class="position-absolute d-none d-lg-block arrow-1">
          <v-img
            src="/images/version2/security-consulting/arrow.png"
            cover
            width="30px"
          ></v-img>
        </div>

        <div class="position-absolute d-none d-lg-block arrow-2">
          <v-img
            src="/images/version2/security-consulting/arrow.png"
            cover
            width="30px"
          ></v-img>
        </div>

        <div
          class="position-absolute d-none d-lg-block title-outline"
          style="max-width: 100%; width: 100%"
        >
          <v-img
            src="/images/version2/security-consulting/title-outline.png"
            cover
          ></v-img>
        </div>
      </div>
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
                    width="124px"
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

                <div class="sub-text">
                  <p
                    v-for="(content, index) in security.contents"
                    :key="index"
                    class="line-break-0"
                  >
                    {{ t(content) }}
                  </p>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <v-container fluid class="px-5 pt-10 pb-15">
      <div class="text-h4 text-blue-darken-4 text-center line-break-0 mb-10">
        {{ t("Sk Shields Agency") }}
      </div>
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
import milestones from "@/milestones";
import teams from "@/team";
import { useI18n } from "vue-i18n";

const securityItems = [
  {
    image: "/images/version2/security-consulting/risk-analysis.png",
    title: "risk-analysis",
    contents: ["risk-analysis-text-1", "risk-analysis-text-2"],
  },
  {
    image:
      "/images/version2/security-consulting/countermeasure-development-1.png",
    title: "contermeasure-development",
    contents: [
      "contermeasure-development-text-1",
      "contermeasure-development-text-2",
    ],
  },
  {
    image: "/images/version2/security-consulting/implementation-support.png",
    title: "implementation-support",
    contents: ["implementation-support-text-1"],
  },
];

const securityServices = [
  {
    image: "/images/version2/security-consulting/asset-protection.png",
    title: "asset-protect",
    contents: ["asset-protect-1", "asset-protect-2"],
  },
  {
    image: "/images/version2/security-consulting/effective-analysis-1.png",
    title: "effectivess-analysis",
    contents: ["effectivess-analysis-1", "effectivess-analysis-2"],
  },
  {
    image: "/images/version2/security-consulting/effective-analysis-2.png",
    title: "effectivess-analysis",
    contents: ["effectivess-analysis-3", "effectivess-analysis-4"],
  },
  {
    image:
      "/images/version2/security-consulting/countermeasure-development-2.png",
    title: "contermeasure-development",
    contents: ["countermeasure-develop-1", "countermeasure-develop-2"],
  },
];

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