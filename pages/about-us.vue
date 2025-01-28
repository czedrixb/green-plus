<template>
  <div>
    <SectionHeader title="About Us" class="mb-md-8" />

    <v-container max-width="1200" class="px-md-10 py-10">
      <v-row justify="space-between" align="center">
        <v-col cols="12" sm="6" md="6" lg="6" class="order-2 order-lg-1">
          <div>
            <div
              class="text-h3 font-weight-bold text-blue-darken-4 mb-5 line-break-0"
            >
              {{ t("ceo-message") }}
            </div>

            <div class="sub-text mb-6">
              <p class="font-weight-bold line-break-0">
                1. {{ t("providing-heartfelt") }}
              </p>
              <p class="line-break-0">
                {{ t("providing-heartfelt-text") }}
              </p>
            </div>
            <div class="sub-text mb-6">
              <p class="font-weight-bold line-break-0">
                2. {{ t("professionalism-pursuit") }}
              </p>
              <p class="line-break-0">
                {{ t("professionalism-pursuit-text") }}
              </p>
            </div>
            <div class="sub-text">
              <p class="font-weight-bold line-break-0">
                3. {{ t("company-grows") }}
              </p>
              <p class="line-break-0">
                {{ t("company-grows-text") }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col
          class="px-lg-5 order-1 order-lg-2"
          cols="12"
          sm="6"
          md="6"
          lg="6"
        >
          <v-img
            src="/images/about-us/ceo-message.png"
            cover
            max-width="100%"
            height="410"
            rounded="lg"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container max-width="1200" class="px-md-10 py-13">
      <div
        class="text-h4 font-weight-bold text-blue-darken-4 mb-5 line-break-0"
      >
        {{ t("business-philosophy") }}
      </div>

      <div class="sub-text mb-8">
        <p class="line-break-0">{{ t("management-philosophy") }}</p>
      </div>

      <v-row>
        <v-col cols="12" md="4" lg="4">
          <v-card
            class="px-4 py-3"
            rounded="lg"
            elevation="0"
            color="blue-accent-4"
          >
            <v-card-title class="text-center font-weight-bold">
              <div class="text-h5 line-break-0">1. {{ t("adaptation") }}</div>
            </v-card-title>
            <v-card-text class="text-center">
              <p class="sub-text font-weight-regular line-break-0">
                {{ t("adaptation-text") }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" lg="4">
          <v-card
            class="px-5 py-6"
            rounded="lg"
            elevation="0"
            color="blue-accent-4"
          >
            <v-card-title class="text-center font-weight-bold">
              <div class="text-h5 line-break-0">2. {{ t("stability") }}</div>
            </v-card-title>
            <v-card-text class="text-center">
              <p class="sub-text font-weight-regular line-break-0">
                {{ t("stability-text") }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" lg="4">
          <v-card
            class="px-5 py-6"
            rounded="lg"
            elevation="0"
            color="blue-accent-4"
          >
            <v-card-title class="text-center font-weight-bold">
              <div class="text-h5 line-break-0">
                3. {{ t("sustainability") }}
              </div>
            </v-card-title>
            <v-card-text class="text-center">
              <p class="sub-text font-weight-regular line-break-0">
                {{ t("sustainability-text") }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="py-10" max-width="1200">
      <div
        class="text-h4 font-weight-bold text-blue-darken-4 text-center mb-3 line-break-0"
      >
        {{ t("major-milestone") }}
      </div>

      <p class="sub-text text-center mb-8 line-break-0">
        {{ t("major-milestone-text") }}
      </p>

      <v-row justify="center">
        <v-col
          v-for="milestone in milestones"
          :key="milestone.date"
          cols="12"
          md="9"
          lg="9"
          class="pt-0"
        >
          <v-card
            max-width="l00%"
            elevation="0"
            rounded="lg"
            color="blue-grey-lighten-5"
            class="px-5 py-0"
          >
            <v-card-text>
              <v-row align="center">
                <v-col cols="12" lg="3" class="py-1">
                  <div
                    class="text-h6 text-blue-darken-3 font-weight-medium text-center text-lg-start line-break-0"
                  >
                    {{ t(milestone.date) }}
                  </div>
                </v-col>
                <v-col cols="12" lg="9" class="py-1">
                  <div
                    class="sub-text text-center font-weight-medium text-lg-start line-break-0"
                  >
                    {{ t(milestone.text) }}
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="px-md-10 py-13" max-width="1200">
      <div
        class="text-h3 font-weight-bold text-center text-blue-darken-4 mb-5 line-break-0"
      >
        {{ t("passionate-team") }}
      </div>

      <v-row justify="center" class="mb-8">
        <v-col cols="12" lg="7" class="text-center">
          <p class="sub-text line-break-0">
            {{ t("passionate-team-text") }}
          </p>
        </v-col>
      </v-row>

      <v-row class="px-lg-10" justify="center">
        <v-col
          v-for="team in teams"
          :key="team.name"
          cols="12"
          md="4"
          lg="4"
          class="px-lg-10"
        >
          <v-card elevation="0" rounded="lg" variant="outlined">
            <v-card-text>
              <div
                class="rounded-lg bg-grey-lighten-3 img-placeholder mb-4"
              ></div>

              <div class="mb-4">
                <p
                  class="text-h6 text-blue-darken-3 font-weight-medium line-break-0"
                >
                  {{ team.name }}
                </p>
                <p class="text-body-1 line-break-0">{{ t(team.position) }}</p>
              </div>

              <div class="d-flex ga-1">
                <a :href="team.facebook" target="_blank" rel="noopener">
                  <v-icon color="grey-darken-1" size="large"
                    >mdi-facebook</v-icon
                  >
                </a>

                <a :href="team.linkedin" target="_blank" rel="noopener">
                  <v-icon color="grey-darken-1" size="large"
                    >mdi-linkedin</v-icon
                  >
                </a>

                <a :href="team.instagram" target="_blank" rel="noopener">
                  <v-icon color="grey-darken-1" size="large"
                    >mdi-instagram</v-icon
                  >
                </a>
              </div>
            </v-card-text>
          </v-card>
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
    { property: "og:image", content: "/images/thumbnail.png" },
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