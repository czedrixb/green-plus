<template>
  <v-app>
    <Navbar />

    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script setup>
import Navbar from "@/layouts/Navbar.vue";
import Footer from "@/layouts/Footer.vue";
</script>
