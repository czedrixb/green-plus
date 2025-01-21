<template>
  <v-snackbar
    v-model="snackbar.show"
    :color="snackbar.color"
    :timeout="3000"
    :multi-line="true"
    location="top right"
  >
    {{ snackbar.message }}
  </v-snackbar>
</template>

<script setup>
import { snackbar } from "@/composables/contactUs";
</script>