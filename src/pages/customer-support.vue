<template>
  <div>
    <SectionHeader title="Customer support" />

    <v-container max-width="1200" class="pt-10">
      <v-row justify="center" class="mb-8">
        <v-col cols="12" lg="10">
          <p class="sub-text text-center">
            {{ t("customer-support-text") }}
          </p>
        </v-col>
      </v-row>

      <v-row justify="center" class="d-flex align-stetch" no-gutters>
        <v-col cols="12" lg="6" class="pa-1">
          <v-card class="bg-support-card pa-5" elevation="0" rounded="lg">
            <v-card-text class="text-white">
              <p
                class="text-body-1 text-blue-lighten-3 font-weight-medium mb-2"
              >
                {{ t("service-launch") }}:
              </p>
              <p class="text-h6 font-weight-bold mb-2">
                {{ t("advanced-facility") }}
              </p>

              <div class="sub-text">
                <p>
                  {{ t("plus-advanced") }}
                </p>

                <ul class="ps-5">
                  <li>{{ t("simplified-maintenance") }}</li>
                  <li>{{ t("safety-improvement") }}</li>
                  <li>{{ t("reduce-operating") }}</li>
                </ul>
                <p>{{ t("curious-about") }}</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6" class="d-flex pa-1">
          <v-card class="bg-support-card pa-5" elevation="0" rounded="lg">
            <v-card-text class="text-white">
              <p
                class="text-body-1 text-blue-lighten-3 font-weight-medium mb-2"
              >
                {{ t("holiday-business") }}:
              </p>
              <p class="text-h6 font-weight-medium mb-2">
                {{ t("upcoming-holiday") }}:
              </p>

              <div class="sub-text">
                <ul class="ps-5 font-weight-regular">
                  <li>
                    <span class="font-weight-medium"
                      >{{ t("schedule-date-1") }}:</span
                    >
                    {{ t("schedule-date-2") }}
                  </li>
                  <li>
                    <span class="font-weight-medium">{{
                      t("schedule-date-2")
                    }}</span>
                    {{ t("schedule-time-2") }}
                  </li>
                  <li>
                    <span class="font-weight-medium">{{
                      t("schedule-date-3")
                    }}</span>
                    {{ t("schedule-time-3") }}
                  </li>
                  <li>
                    <span class="font-weight-medium">{{
                      t("schedule-date-4")
                    }}</span>
                    {{ t("schedule-time-1") }}
                  </li>
                </ul>
                <p>
                  {{ t("normal-work") }}
                  <span class="font-weight-bold">{{ t("jan-2") }}</span>
                  {{ t("boot-resumes") }}
                </p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6" class="pa-1">
          <v-card class="bg-support-card pa-5" elevation="0" rounded="lg">
            <v-card-text class="text-white">
              <p
                class="text-body-1 text-blue-lighten-3 font-weight-medium mb-2"
              >
                {{ t("upcoming-webinar") }}:
              </p>
              <p class="text-h6 font-weight-medium mb-2">
                2024 {{ t("workplace-safety") }}
              </p>

              <div class="sub-text">
                <p>
                  {{ t("invite-you") }}
                </p>
                <p>
                  {{ t("practical-tips") }}
                </p>

                <ul class="ps-5">
                  <li>
                    <span class="font-weight-bold">{{
                      t("webinar-date")
                    }}</span>
                    {{ t("webinar-jan") }}
                  </li>
                  <li>
                    <span class="font-weight-bold">{{
                      t("webinar-time")
                    }}</span>
                    {{ t("webinar-3") }}
                  </li>
                </ul>
                <p>
                  {{ t("register-text") }}
                </p>
                <p>[{{ t("register-webinar") }}]</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="6" class="d-flex pa-1">
          <v-card class="bg-support-card pa-5" elevation="0" rounded="lg">
            <v-card-text class="text-white">
              <p
                class="text-body-1 text-blue-lighten-3 font-weight-medium mb-2"
              >
                {{ t("notice") }}:
              </p>
              <p class="text-h6 font-weight-medium mb-2">
                {{ t("program-released") }}
              </p>

              <div class="sub-text">
                <p>
                  {{ t("provide-better") }}
                </p>
                <p>
                  {{ t("feedback-program") }}
                </p>
                <p>
                  {{ t("who-participated") }}
                </p>
                <p>{{ t("share-thoughts") }}</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <Faqs />

    <CustomerReviews />

    <v-container fluid>
      <v-container max-width="1100" class="py-15">
        <v-row align="center">
          <v-col cols="12" lg="6" class="pt-10">
            <div class="text-h3 font-weight-bold">{{ t("do-today") }}</div>
            <div class="text-h3 font-weight-bold mb-5">
              {{ t("lmk") }}
            </div>

            <div class="sub-text">
              <p>{{ t("value-customers") }}</p>
              <p>{{ t("committed-providing") }}</p>
            </div>
          </v-col>
          <v-col cols="12" lg="6">
            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="name"
                      :rules="nameRules"
                      :label="t('Name')"
                      density="compact"
                      variant="outlined"
                      color="blue-accent-4"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                      type="email"
                      v-model="email"
                      :rules="emailRules"
                      :label="t('Email')"
                      density="compact"
                      variant="outlined"
                      color="blue-accent-4"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-textarea
                      :label="t('Message')"
                      v-model="message"
                      :rules="messageRules"
                      density="compact"
                      variant="outlined"
                      color="blue-accent-4"
                    ></v-textarea>
                  </v-col>

                  <v-col cols="12">
                    <v-btn
                      class="text-none"
                      block
                      elevation="0"
                      color="blue-accent-4"
                      rounded="lg"
                      size="large"
                      @click="handleSubmit"
                      >{{ t("Submit") }}</v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useHead } from "@vueuse/head";
import {
  valid,
  name,
  email,
  message,
  nameRules,
  emailRules,
  messageRules,
  handleSubmit,
} from "@/composables/contactUs";

const { t } = useI18n();

useHead({
  title: t("seo-customer"),
  meta: [
    {
      name: "description",
      content: t("seo-description"),
    },
    {
      name: "keywords",
      content: [
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
      ].join(", "),
    },
    {
      property: "og:title",
      content: t("seo-customer"),
    },
    {
      property: "og:description",
      content: t("seo-description"),
    },
    // {
    //   property: "og:image",
    //   content: "@/assets/images/homepage/hero-image-1b.png",
    // },
    {
      property: "og:type",
      content: "website",
    },
  ],
});
</script>



<style scoped>
.bg-support-card {
  background-color: rgb(5, 24, 67);
}
</style>