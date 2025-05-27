<template>
  <div>
    <SectionHeader title="Organizational Structure" class="mb-md-8" />

    <v-container max-width="1300" class="px-md-10 pt-10 pb-16">
      <div
        class="text-h4 font-weight-bold text-blue-darken-4 text-center line-break-0 mb-15"
      >
        {{ t("company-organization") }}
      </div>

      <div class="d-flex justify-center">
        <div style="width: 100%; max-width: 671px">
          <v-img
            src="/images/version2/organizational-structure/company-organization.png"
            cover
            width="100%"
            aspect-ratio="671/343"
            alt="company-organization"
          />
        </div>
      </div>
    </v-container>

    <v-container max-width="1300" class="px-md-10 py-16">
      <v-table class="bordered-table">
        <thead>
          <tr>
            <th class="text-center font-weight-bold">{{ t("title") }}</th>
            <th class="text-center font-weight-bold">{{ t("Name") }}</th>
            <th class="text-center font-weight-bold">{{ t("education") }}</th>
            <th class="text-center font-weight-bold">{{ t("experience") }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableItems" :key="item.name">
            <td class="text-center py-4">{{ t(item.title) }}</td>
            <td class="text-center py-4">{{ t(item.name) }}</td>
            <td class="text-center py-4">
              <div v-for="(edu, index) in item.education" :key="index">
                {{ t(edu) }}
              </div>
            </td>
            <td class="text-center py-4">
              <div v-for="(exp, index) in item.experience" :key="index">
                {{ t(exp) }}
              </div>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-container>

    <v-container max-width="1300" class="px-md-10 py-16">
      <div
        class="text-h4 font-weight-bold text-blue-darken-4 text-center line-break-0 mb-15"
      >
        {{ t("technical-personnel") }}
      </div>

      <v-row>
        <v-col cols="12" lg="4">
          <div class="d-flex justify-center">
            <div>
              <v-img
                class="mb-5"
                src="/images/version2/organizational-structure/security-supervisor.png"
                cover
                width="303"
                height="222"
                alt="security-supervisor"
              ></v-img>
            </div>
          </div>

          <div
            class="text-h5 font-weight-bold text-blue-darken-4 text-center line-break-0 mb-5"
          >
            {{ t("security-supervisor") }}
          </div>

          <div class="text-center">
            <p class="line-break-0">
              {{ t("security-1") }}
            </p>
            <p class="line-break-0">
              {{ t("security-2") }}
            </p>
          </div>
        </v-col>
        <v-col cols="12" lg="8">
          <v-row>
            <v-col
              v-for="equip in equipmentItems"
              :key="equip.name"
              cols="6"
              lg="3"
            >
              <div class="d-flex justify-center">
                <div style="width: 100%; max-width: 202px">
                  <v-img
                    class="mb-3"
                    :src="equip.image"
                    cover
                    width="100%"
                    aspect-ratio="202/134"
                    :alt="equip.alt"
                  ></v-img>
                </div>
              </div>
              <div class="text-center">
                <p class="line-break-0">{{ t(equip.name) }}</p>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container max-width="1300" class="px-md-10 py-16">
      <div
        class="text-h4 font-weight-bold text-blue-darken-4 text-center line-break-0 mb-15"
      >
        {{ t("Key achievements") }}
      </div>

      <v-row>
        <v-col
          v-for="achievement in achievementItems"
          :key="achievement.name"
          cols="12"
          lg="3"
          class="px-8"
        >
          <div class="d-flex justify-center">
            <div>
              <v-img
                class="mb-5"
                :src="achievement.image"
                cover
                width="280"
                height="222"
                rounded="lg"
                :alt="achievement.name"
              ></v-img>
            </div>
          </div>

          <div
            class="text-h5 font-weight-bold text-blue-darken-4 text-center line-break-0 mb-5"
          >
            {{ t(achievement.name) }}
          </div>

          <div class="text-center">
            <p class="line-break-0">
              {{ t(achievement.text) }}
            </p>
          </div>
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

const tableItems = [
  {
    title: "education-adviser",
    name: "choi-name",
    education: ["doctor-science"],
    experience: ["choi-exp1", "choi-exp2"],
  },
  {
    title: "legal-advisor",
    name: "kim-name",
    education: ["graduated-from"],
    experience: ["kim-exp1"],
  },
];

const equipmentItems = [
  {
    image: "/images/version2/organizational-structure/radios.png",
    name: "radios",
    alt: "radios",
  },
  {
    image: "/images/version2/organizational-structure/stab-proof-vests.png",
    name: "stab-proof",
    alt: "stab-proof-vests",
  },
  {
    image: "/images/version2/organizational-structure/gas-sprayers.png",
    name: "gas-sprayers",
    alt: "gas-sprayers",
  },
  {
    image: "/images/version2/organizational-structure/patrol-watches.png",
    name: "patrol-watches",
    alt: "patrol-watches",
  },
  {
    image: "/images/version2/organizational-structure/electronic-patrol.png",
    name: "electronic-patrol",
    alt: "electronic-patrol",
  },
  {
    image:
      "/images/version2/organizational-structure/patrol-vehicles-motor.png",
    name: "patrol-vehicles-motor",
    alt: "patrol-vehicles-motor",
  },
  {
    image: "/images/version2/organizational-structure/security-batons.png",
    name: "security-batons",
    alt: "security-batons",
  },
  {
    image: "/images/version2/organizational-structure/guiding-poles.png",
    name: "guiding-poles",
    alt: "guiding-poles",
  },
  {
    image: "/images/version2/organizational-structure/whistles.png",
    name: "whistles",
    alt: "whistles",
  },
  {
    image: "/images/version2/organizational-structure/truncheons.png",
    name: "truncheon",
    alt: "truncheons",
  },
  {
    image: "/images/version2/organizational-structure/flashlights.png",
    name: "flashlights",
    alt: "flashlights",
  },
  {
    image: "/images/version2/organizational-structure/patrol-vehicles-car.png",
    name: "patrol-vehicles-car",
    alt: "patrol-vehicles-car",
  },
];

const achievementItems = [
  {
    image: "/images/version2/organizational-structure/university-security.png",
    name: "university-security",
    text: "university-security-text",
  },
  {
    image: "/images/version2/organizational-structure/apartment-security.png",
    name: "apartment-security",
    text: "apartment-security-text",
  },
  {
    image: "/images/version2/organizational-structure/corporate-security.png",
    name: "corporate-security",
    text: "corporate-security-text",
  },
  {
    image:
      "/images/version2/organizational-structure/public-facility-security.png",
    name: "public-security",
    text: "public-security-text",
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