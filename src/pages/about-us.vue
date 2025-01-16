<template>
  <div>
    <SectionHeader title="About Us" />

    <v-container max-width="1200" class="py-15">
      <v-row justify="space-between" align="center">
        <v-col cols="12" lg="6" class="order-2 order-lg-1">
          <div>
            <div class="text-h3 font-weight-medium text-blue-darken-4 mb-5">
              {{ t("ceo-message") }}
            </div>

            <div class="sub-text">
              <p class="font-weight-bold">1. {{ t("providing-heartfelt") }}</p>
              <p>
                {{ t("human-green-plus") }}
                <span class="font-weight-bold">{{
                  t("providing-heartfelt-bold")
                }}</span>
                {{ t("providing-heartfelt-text") }}
              </p>
            </div>
            <div class="sub-text">
              <p class="font-weight-bold">
                2. {{ t("professionalism-pursuit") }}
              </p>
              <p>
                {{ t("human-green-plus") }}
                <span class="font-weight-bold">{{
                  t("professionalism-pursuit-bold")
                }}</span>
                {{ t("professionalism-pursuit-text") }}
              </p>
            </div>
            <div class="sub-text">
              <p class="font-weight-medium">3. {{ t("company-grows") }}</p>
              <p>
                {{ t("human-green-plus") }}
                <span class="font-weight-bold">{{
                  t("company-grows-bold")
                }}</span>
                {{ t("company-grows-text") }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col class="px-lg-5 order-1 order-lg-2" cols="12" lg="6">
          <v-img
            src="@/assets/images/about-us/ceo-message.png"
            cover
            max-width="100%"
            height="410"
            rounded="lg"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container max-width="1200" class="mb-10">
      <div class="text-h4 font-weight-bold text-blue-darken-4 mb-5">
        {{ t("business-philosophy") }}
      </div>

      <div class="sub-text mb-8">
        <p>
          {{ t("business-philosophy-text") }}
        </p>
        <p>{{ t("i-believe") }}.</p>
      </div>

      <v-row>
        <v-col cols="12" lg="4">
          <v-card
            class="px-5 py-8"
            rounded="lg"
            elevation="0"
            color="blue-accent-4"
          >
            <v-card-title class="text-center font-weight-bold">
              <div class="text-h5">{{ t("passion-energy") }}</div>
            </v-card-title>
            <v-card-text class="text-center">
              <p class="sub-text font-weight-regular">
                {{ t("passion-energy-text") }}
              </p>
              <p class="sub-text font-weight-regular">{{ t("approach") }}</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="4">
          <v-card
            class="px-5 py-8"
            rounded="lg"
            elevation="0"
            color="blue-accent-4"
          >
            <v-card-title class="text-center font-weight-bold">
              <div class="text-h5">{{ t("adaptability") }}</div>
            </v-card-title>
            <v-card-text class="text-center">
              <p class="sub-text font-weight-regular">
                {{ t("adaptability-text") }}
              </p>
              <p class="sub-text font-weight-regular">
                {{ t("maintain-innovation") }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="4">
          <v-card
            class="px-5 py-8"
            rounded="lg"
            elevation="0"
            color="blue-accent-4"
          >
            <v-card-title class="text-center font-weight-bold">
              <div class="text-h5">{{ t("joy-happiness") }}</div>
            </v-card-title>
            <v-card-text class="text-center">
              <p class="sub-text font-weight-regular">
                {{ t("joy-happiness-text") }}
              </p>
              <p class="sub-text font-weight-regular">{{ t("try-cycle") }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="mb-10" max-width="1200">
      <div class="text-h4 font-weight-bold text-blue-darken-4 text-center mb-3">
        {{ t("major-milestone") }}
      </div>

      <p class="sub-text text-center mb-8">
        {{ t("major-milestone-text") }}
      </p>

      <v-row justify="center">
        <v-col
          v-for="milestone in milestones"
          :key="milestone.date"
          cols="12"
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
                    class="text-h6 text-blue-darken-3 font-weight-medium text-center text-lg-start"
                  >
                    {{ t(milestone.date) }}
                  </div>
                </v-col>
                <v-col cols="12" lg="9" class="py-1">
                  <div
                    class="sub-text text-center font-weight-medium text-lg-start"
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

    <v-container class="mb-10" max-width="1200">
      <div class="text-h3 font-weight-bold text-center text-blue-darken-4 mb-5">
        {{ t("passionate-team") }}
      </div>

      <v-row justify="center" class="mb-8">
        <v-col cols="12" lg="7" class="text-center">
          <p class="sub-text">
            {{ t("passionate-team-text") }}
          </p>
        </v-col>
      </v-row>

      <v-row class="px-lg-10" justify="center">
        <v-col
          v-for="team in teams"
          :key="team.name"
          cols="12"
          lg="4"
          class="px-lg-10"
        >
          <v-card elevation="0" rounded="lg" variant="outlined">
            <v-card-text>
              <div
                class="rounded-lg bg-grey-lighten-3 img-placeholder mb-4"
              ></div>

              <div class="mb-4">
                <p class="text-h6 text-blue-darken-3 font-weight-medium">
                  {{ team.name }}
                </p>
                <p class="text-body-1">{{ t(team.position) }}</p>
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
import reviews from "@/reviews";
import faqs from "@/faqs";
import milestones from "@/milestones";
import teams from "@/team";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style scoped>
.v-card--variant-outlined {
  border: thin solid rgb(196 196 196 / 87%);
}

.img-placeholder {
  height: 13rem;
}
</style>