<template>
  <div class="bg-footer text-white">
    <v-container class="py-10" max-width="1200">
      <v-row>
        <v-col cols="12" lg="3">
          <v-img
            width="292px"
            height="34px"
            src="@/assets/images/humangreenlogo-white.svg"
          ></v-img>
        </v-col>
        <v-col
          cols="12"
          lg="3"
          class="text-subtitle-2 d-flex justify-lg-center"
        >
          <div>
            <div class="pt-2 mb-lg-8">{{ t("menu") }}</div>

            <div class="d-flex ga-4 flex-column">
              <router-link
                v-for="link in navLinks"
                :key="link.title"
                :to="link.to"
                class="footer-link"
                >{{ t(link.title) }}</router-link
              >
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="3" class="text-subtitle-2">
          <div class="pt-2 mb-lg-8">{{ t("useful-links") }}</div>

          <div class="d-flex ga-4 flex-column">
            <div>{{ t("privacy-policy") }}</div>
            <div>{{ t("cookie-policy") }}</div>
            <div>{{ t("license") }}</div>
          </div>
        </v-col>
        <v-col cols="12" lg="3" class="text-subtitle-2">
          <div class="pt-2 mb-lg-8">{{ t("contact") }}</div>

          <div class="mb-8">
            {{ t("address") }}
          </div>

          <div class="d-flex ga-4 flex-column font-weight-regular">
            <a class="footer-link" href="mailto:jinnee73@hanmail.net"
              >jinnee73@hanmail.net</a
            >
            <div>070-8233-4338~9</div>
          </div>
        </v-col>
      </v-row>
      <v-divider class="my-8" color="white"></v-divider>

      <v-row class="px-3">
        <v-col class="text-center text-lg-start pa-0" cols="12" lg="6">
          <div class="text-caption font-weight-regular">
            © Copyright 2024. All rights reserved.
          </div>
        </v-col>
        <v-col class="text-center text-lg-end pa-0" cols="12" lg="6">
          <div class="text-caption font-weight-regular">Human Green Plus</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import navLinks from "@/navigation";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>