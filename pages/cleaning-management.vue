<template>
  <div>
    <SectionHeader title="Cleaning Management" class="mb-md-8" />
    <v-container max-width="1300" class="px-md-5 pt-10 pb-16 mt-8">
      <v-row>
        <v-col cols="12" lg="6">
          <div class="d-flex justify-center justify-lg-start">
            <div style="width: 100%; max-width: 588px">
              <v-img
                src="/images/version2/cleaning-maangement/cleaning-management.png"
                cover
                width="100%"
                aspect-ratio="588/322"
                rounded="lg"
                alt="cleaning-management"
              ></v-img>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="6">
          <div class="text-h4 text-blue-darken-4 line-break-0 mb-6">
            {{ t("cleaning-service") }}
          </div>

          <div class="sub-text">
            <!-- <p class="line-break-0 mb-0">
              Providing a pleasant and hygienic environment to enhance customer
              work efficiency
            </p> -->

            <p class="line-break-0">{{ t("offering-clean") }}</p>
            <p class="line-break-0">
              {{ t("using-appropriate") }}
            </p>
          </div>
        </v-col>
      </v-row>

      <div class="mt-16 mb-10">
        <v-row justify="center">
          <v-col class="px-lg-5" cols="12" lg="6">
            <div class="purple-card pa-5">
              <div class="text-h4 text-blue-darken-4 line-break-0 mb-5">
                {{ t("key-responsibilities") }}
              </div>
              <div
                v-for="key in keyItems"
                :key="key.key"
                class="sub-text d-flex mb-1 ga-1"
              >
                <v-icon>mdi-circle-small</v-icon>
                <p class="line-break-0 mb-0">
                  {{ t(key.key) }}
                </p>
              </div>
            </div>
          </v-col>
          <v-col class="px-lg-5" cols="12" lg="6">
            <div class="purple-card pa-5">
              <div class="text-h4 text-blue-darken-4 line-break-0 mb-5">
                {{ t("expected-benefits") }}
              </div>
              <div
                v-for="benefit in benefitItems"
                :key="benefit.key"
                class="sub-text d-flex mb-1 ga-1"
              >
                <v-icon>mdi-circle-small</v-icon>
                <p class="line-break-0 mb-0">
                  {{ t(benefit.key) }}
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

const keyItems = [
  {
    key: "clean-key-1",
  },
  {
    key: "clean-key-2",
  },
  {
    key: "clean-key-3",
  },
];

const benefitItems = [
  {
    key: "clean-benefits-1",
  },
  {
    key: "clean-benefits-2",
  },
  {
    key: "clean-benefits-3",
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
  min-height: 23rem;
}
</style>