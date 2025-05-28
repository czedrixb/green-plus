<template>
  <div>
    <v-app>
      <v-app-bar :elevation="0" app color="white" dark>
        <v-container class="ps-lg-0" max-width="1400">
          <div class="d-flex align-center">
            <v-app-bar-nav-icon @click="toggleDrawer" class="d-lg-none" />

            <NuxtLink to="/">
              <v-img
                width="236"
                height="27"
                src="/images/humangreenlogo.svg"
              ></v-img>
            </NuxtLink>

            <v-spacer />

            <div class="d-none d-lg-flex align-center">
              <template v-for="link in navLinks" :key="link.title">
                <NuxtLink
                  v-if="!link.children"
                  class="nav-link mx-2 text-black"
                  :class="{ 'text-decoration-none': route.path !== link.to }"
                  :to="link.to"
                >
                  {{ t(link.title) }}
                </NuxtLink>

                <v-menu v-else v-model="openMenus[link.title]">
                  <template v-slot:activator="{ props, on }">
                    <div class="d-flex align-center mx-2">
                      <NuxtLink
                        :to="link.to"
                        class="nav-link text-black text-capitalize"
                        style="letter-spacing: 0"
                      >
                        {{ t(link.title) }}
                      </NuxtLink>

                      <div
                        v-bind="props"
                        v-on="on || {}"
                        style="cursor: pointer"
                      >
                        <v-icon class="ml-1"> mdi-chevron-down </v-icon>
                      </div>
                    </div>
                  </template>

                  <v-list>
                    <v-list-item
                      v-for="child in link.children"
                      :key="child.title"
                      :to="child.to"
                      @click="() => closeMenu(link.title)"
                    >
                      <v-list-item-title>{{
                        t(child.title)
                      }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </div>

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
        </v-container>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" app temporary class="d-lg-none">
        <v-list>
          <template v-for="link in navLinks" :key="link.title">
            <div v-if="link.children">
              <div
                class="px-4 py-3 d-flex align-center justify-space-between text-black"
              >
                <NuxtLink
                  :to="link.to"
                  class="text-black"
                  style="text-decoration: none; flex-grow: 1"
                  @click="closeDrawer"
                >
                  {{ t(link.title) }}
                </NuxtLink>

                <v-icon
                  @click.stop="toggleGroup(link.title)"
                  style="cursor: pointer"
                >
                  {{
                    expandedGroups[link.title]
                      ? "mdi-chevron-up"
                      : "mdi-chevron-down"
                  }}
                </v-icon>
              </div>

              <v-expand-transition>
                <div v-show="expandedGroups[link.title]">
                  <v-list-item
                    v-for="child in link.children"
                    :key="child.title"
                    :to="child.to"
                    @click="closeDrawer"
                  >
                    <v-list-item-title class="pl-8">{{
                      t(child.title)
                    }}</v-list-item-title>
                  </v-list-item>
                </div>
              </v-expand-transition>
            </div>

            <v-list-item v-else :to="link.to" @click="closeDrawer">
              <v-list-item-title>{{ t(link.title) }}</v-list-item-title>
            </v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>
    </v-app>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const { t, locale } = useI18n();

const changeLanguage = (lang) => {
  locale.value = lang;
};

const route = useRoute();

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

const closeDrawer = () => {
  drawer.value = false;
};

const openMenus = ref({});

const closeMenu = (title) => {
  openMenus.value[title] = false;
};

const expandedGroups = ref({});

const toggleGroup = (title) => {
  expandedGroups.value[title] = !expandedGroups.value[title];
};

const navLinks = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "About Us",
    to: "/about-us",
    children: [
      {
        title: "Greetings",
        to: "/greetings",
      },
      {
        title: "Company Overview",
        to: "/company-overview",
      },
      {
        title: "Organizational Structure",
        to: "/organizational-structure",
      },
    ],
  },
  {
    title: "Business Areas",
    to: "/business-areas",
    children: [
      {
        title: "security-services",
        to: "/security-services",
      },
      {
        title: "facility-manage",
        to: "/facility-management",
      },
      {
        title: "parking-manage",
        to: "/parking-management",
      },
      {
        title: "cleaning-manage",
        to: "/cleaning-management",
      },
    ],
  },
  {
    title: "Customer Support",
    to: "/customer-support",
  },
  {
    title: "Key achievements",
    to: "/key-achievements",
  },
  {
    title: "Hiring",
    to: "/careers",
  },
  {
    title: "Security Consulting",
    to: "/security-consulting",
  },
  {
    title: "Contact",
    to: "/contact-us",
  },
];
</script>

<style>
.v-application__wrap {
  min-height: 0;
}

.nav-link {
  color: inherit;
  text-decoration: none;
  font-weight: 500;
}
</style>