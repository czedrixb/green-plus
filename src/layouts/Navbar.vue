<template>
  <div>
    <v-app-bar :elevation="0" app color="white" dark>
      <v-container class="ps-lg-0" max-width="1200">
        <div class="d-flex align-center">
          <v-app-bar-nav-icon @click="toggleDrawer" class="d-md-none" />

          <router-link to="/">
            <v-img
              width="236"
              height="27"
              src="@/assets/images/humangreenlogo.svg"
            ></v-img>
          </router-link>

          <v-spacer />

          <div class="d-none d-md-flex align-center">
            <router-link
              class="nav-link mx-2"
              :class="{
                'text-decoration-none': route.path !== link.to,
                'text-black': true,
              }"
              v-for="link in navLinks"
              :key="link.title"
              :to="link.to"
              >{{ t(link.title) }}</router-link
            >
            <v-menu>
              <template #activator="{ props }">
                <v-btn
                  v-bind="props"
                  elevation="0"
                  color="blue-accent-4"
                  class="text-capitalize font-weight-regular mx-2 px-0"
                >
                  <v-icon>mdi-translate</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="changeLanguage('en')">
                  <v-list-item-title>English</v-list-item-title>
                </v-list-item>
                <v-list-item @click="changeLanguage('ko')">
                  <v-list-item-title>Korean</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary class="d-md-none">
      <v-list>
        <v-list-item
          v-for="link in navLinks"
          :key="link.title"
          :to="link.to"
          @click="closeDrawer"
        >
          <v-list-item-title>{{ t(link.title) }}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-menu>
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                elevation="0"
                color="blue-accent-4"
                class="text-capitalize font-weight-regular px-0"
              >
                <v-icon>mdi-translate</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="changeLanguage('en')">
                <v-list-item-title>English</v-list-item-title>
              </v-list-item>
              <v-list-item @click="changeLanguage('ko')">
                <v-list-item-title>Korean</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import navLinks from "@/navigation";
import { useI18n } from "vue-i18n";

const route = useRoute();
const { t, locale } = useI18n();

const changeLanguage = (lang) => {
  locale.value = lang;
};

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

const closeDrawer = () => {
  drawer.value = false;
};
</script>