<template>
  <div>
    <SectionHeader title="Security Management" class="mb-md-8" />

    <v-container max-width="1300" class="px-md-5 pt-10 pb-16 mt-8">
      <v-row justify="center">
        <v-col cols="12" lg="5">
          <div style="width: 100%; max-width: 453px">
            <v-img
              src="/images/version2/security-management/security-management.png"
              cover
              width="453"
              height="348"
              rounded="lg"
              alt="security-management"
            ></v-img>
          </div>
        </v-col>
        <v-col cols="12" lg="6">
          <div class="sub-text d-flex mb-1 ga-1">
            <v-icon>mdi-circle-small</v-icon>
            <p class="line-break-0 mb-0">
              {{ t("we-detect") }}
            </p>
          </div>
          <div class="sub-text d-flex ga-1">
            <v-icon>mdi-circle-small</v-icon>
            <p class="line-break-0 mb-0">
              {{ t("we-responsible") }}
            </p>
          </div>

          <div class="mt-8 purple-card pa-5">
            <div class="text-h4 text-blue-darken-4 line-break-0 mb-5">
              {{ t("key-responsibilities") }}
            </div>

            <div class="sub-text d-flex mb-1 ga-1">
              <v-icon>mdi-circle-small</v-icon>
              <p class="line-break-0 mb-0">
                {{ t("key-1") }}
              </p>
            </div>
            <div class="sub-text mb-1 d-flex ga-1">
              <v-icon>mdi-circle-small</v-icon>
              <p class="line-break-0 mb-0">
                {{ t("key-2") }}
              </p>
            </div>
            <div class="sub-text d-flex ga-1">
              <v-icon>mdi-circle-small</v-icon>
              <p class="line-break-0 mb-0">
                {{ t("key-3") }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>

      <div class="mt-16">
        <div class="text-h4 text-blue-darken-4 text-center line-break-0 mb-6">
          {{ t("aiming-customer") }}
        </div>

        <v-row justify="center">
          <v-col cols="12" lg="6">
            <div class="sub-text d-flex mb-1 ga-1">
              <v-icon>mdi-circle-small</v-icon>
              <p class="line-break-0 mb-0">
                {{ t("aim-1") }}
              </p>
            </div>
            <div class="sub-text mb-1 d-flex ga-1">
              <v-icon>mdi-circle-small</v-icon>
              <p class="line-break-0 mb-0">
                {{ t("aim-2") }}
              </p>
            </div>
            <div class="sub-text mb-1 d-flex ga-1">
              <v-icon>mdi-circle-small</v-icon>
              <p class="line-break-0 mb-0">
                {{ t("aim-3") }}
              </p>
            </div>
            <div class="sub-text d-flex ga-1">
              <v-icon>mdi-circle-small</v-icon>
              <p class="line-break-0 mb-0">
                {{ t("aim-4") }}
              </p>
            </div>
          </v-col>
          <v-col cols="12" lg="6">
            <div class="sub-text d-flex mb-1 ga-1">
              <v-icon>mdi-circle-small</v-icon>
              <p class="line-break-0 mb-0">
                {{ t("aim-5") }}
              </p>
            </div>
            <div class="sub-text d-flex ga-1">
              <v-icon>mdi-circle-small</v-icon>
              <p class="line-break-0 mb-0">
                {{ t("aim-6") }}
              </p>
            </div>
          </v-col>
        </v-row>
      </div>

      <div class="mt-16">
        <div class="mt-8 purple-card px-5 py-16">
          <v-row justify="center">
            <v-col
              v-for="item in items"
              :key="item.name"
              class="px-lg-5 mb-5"
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
                      :alt="t(item.name)"
                    ></v-img>

                    <div
                      class="position-absolute bg-number-1 card-number text-center py-3 px-4"
                    >
                      <span class="text-h5 text-white">{{ item.number }}</span>
                    </div>
                  </div>
                </div>

                <div class="text-center mt-5">
                  <v-row class="mb-2" justify="center">
                    <v-col cols="12" lg="10">
                      <p
                        class="text-h5 font-weight-semibold text-blue-darken-4 line-break-0"
                      >
                        {{ t(item.name) }}
                      </p>
                    </v-col>
                  </v-row>

                  <div
                    v-for="(content, index) in item.contents"
                    :key="index"
                    class="sub-text mb-1 d-flex ga-1"
                  >
                    <v-icon>mdi-circle-small</v-icon>
                    <p class="line-break-0 text-left mb-0">
                      {{ t(content) }}
                    </p>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import milestones from "@/milestones";
import teams from "@/team";
import { useI18n } from "vue-i18n";

const items = [
  {
    number: 1,
    image: "/images/version2/security-management/systematic-security.png",
    name: "system-security",
    contents: ["system-security-1", "system-security-2"],
  },
  {
    number: 2,
    image: "/images/version2/security-management/security-consulting.png",
    name: "security-consult",
    contents: ["security-consult-1", "security-consult-2"],
  },
  {
    number: 3,
    image: "/images/version2/security-management/strengthening-expertise.png",
    name: "strgengtheing-expertise",
    contents: [
      "strgengtheing-expertise-1",
      "strgengtheing-expertise-2",
      "strgengtheing-expertise-3",
    ],
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