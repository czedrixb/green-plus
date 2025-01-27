<template>
  <v-container max-width="1100" class="py-16">
    <div
      class="text-h4 text-center font-weight-bold text-blue-darken-4 mb-6 line-break-0 pt-16"
    >
      {{ t("privacy-policy") }}
    </div>

    <v-row justify="center" class="mb-3">
      <v-col cols="8">
        <v-divider></v-divider>
      </v-col>
    </v-row>

    <div class="text-center sub-text mb-10 font-italic">
      <p>{{ t("last-updated") }}: {{ t("january-23") }}</p>
    </div>

    <p class="sub-text mb-10 line-break-0">
      {{ t("privacy-text") }}
    </p>

    <div class="mb-8">
      <div
        class="text-h5 font-weight-bold text-blue-darken-4 line-break-0 mb-5"
      >
        1. {{ t("inform-collect") }}
      </div>

      <p class="line-break-0 mb-3 sub-text">{{ t("information-collect") }}:</p>

      <ul class="ps-5 sub-text">
        <li class="mb-1">
          <b>{{ t("personal-information") }}</b
          >: {{ t("personal-text") }}
        </li>
        <li class="mb-1">
          <b>{{ t("service-information") }}</b
          >: {{ t("service-text") }}
        </li>
        <li class="mb-1">
          <b>{{ t("device-technical") }}</b
          >: {{ t("device-text") }}
        </li>
        <li class="mb-1">
          <b>{{ t("cookies-tracking") }}</b
          >: {{ t("cookies-text") }}
        </li>
      </ul>
    </div>

    <div class="mb-8">
      <div
        class="text-h5 font-weight-bold text-blue-darken-4 line-break-0 mb-5"
      >
        2. {{ t("how-information") }}
      </div>

      <p class="line-break-0 mb-3 sub-text">{{ t("use-collect") }}:</p>

      <ul class="ps-5 sub-text">
        <li class="mb-1">
          {{ t("provide-manage") }}
        </li>
        <li class="mb-1">{{ t("respond-inquries") }}</li>
        <li class="mb-1">
          {{ t("conduct-marketing") }}
        </li>
        <li class="mb-1">
          {{ t("comply-legal") }}
        </li>
      </ul>
    </div>

    <div class="mb-8">
      <div
        class="text-h5 font-weight-bold text-blue-darken-4 line-break-0 mb-5"
      >
        3. {{ t("sharing-information") }}
      </div>

      <p class="line-break-0 mb-3 sub-text">{{ t("share-information") }}:</p>

      <ul class="ps-5 sub-text">
        <li class="mb-1">
          <b>{{ t("business-partners") }}</b
          >: {{ t("business-text") }}
        </li>
        <li class="mb-1">
          <b>{{ t("service-providers") }}</b
          >: {{ t("providers-text") }}
        </li>
        <li class="mb-1">
          <b>{{ t("legal-authorities") }}</b
          >: {{ t("authorities-text") }}
        </li>
      </ul>
    </div>

    <div class="mb-8">
      <div
        class="text-h5 font-weight-bold text-blue-darken-4 line-break-0 mb-5"
      >
        4. {{ t("data-security") }}
      </div>

      <p class="line-break-0 mb-3 sub-text">
        {{ t("implement-advanced") }}
      </p>
    </div>

    <div class="mb-8">
      <div
        class="text-h5 font-weight-bold text-blue-darken-4 line-break-0 mb-5"
      >
        5. {{ t("privacy-rights") }}
      </div>

      <p class="line-break-0 mb-3 sub-text">{{ t("depending-location") }}:</p>

      <ul class="ps-5 sub-text mb-3">
        <li class="mb-1">
          {{ t("access-correct") }}
        </li>
        <li class="mb-1">{{ t("opt-out") }}</li>
        <li class="mb-1">{{ t("limit-object") }}</li>
      </ul>

      <p class="line-break-0 sub-text">
        {{ t("exercise-rights") }} jinnee73@hanmail.net.
      </p>
    </div>

    <div class="mb-8">
      <div
        class="text-h5 font-weight-bold text-blue-darken-4 line-break-0 mb-5"
      >
        6. {{ t("cookies-technologies") }}
      </div>

      <p class="line-break-0 mb-3 sub-text">
        {{ t("website-cookies") }}
      </p>
    </div>

    <div class="mb-8">
      <div
        class="text-h5 font-weight-bold text-blue-darken-4 line-break-0 mb-5"
      >
        7. {{ t("third-party") }}
      </div>

      <p class="line-break-0 mb-3 sub-text">
        {{ t("website-include") }}
      </p>
    </div>

    <div class="mb-8">
      <div
        class="text-h5 font-weight-bold text-blue-darken-4 line-break-0 mb-5"
      >
        8. {{ t("updates-policy") }}
      </div>

      <p class="line-break-0 mb-3 sub-text">
        {{ t("update-this") }}
      </p>
    </div>

    <div class="mb-8">
      <div
        class="text-h5 font-weight-bold text-blue-darken-4 line-break-0 mb-5"
      >
        9. {{ t("contact-us") }}
      </div>

      <p class="line-break-0 mb-3 sub-text">{{ t("any-concerns") }}:</p>

      <ul class="ps-5 sub-text mb-3">
        <li class="mb-1">
          <b>{{ t("Email") }}</b
          >: jinnee73@hanmail.net
        </li>
        <li class="mb-1">
          <b>{{ t("phone") }}</b
          >: 070-8233-4338~9
        </li>
        <li class="mb-1">
          <b>{{ t("address-label") }}</b
          >: {{ t("address") }}
        </li>
      </ul>

      <p class="line-break-0 mt-5 sub-text">
        {{ t("by-using") }}
      </p>
    </div>

    <v-row justify="center">
      <v-col cols="8">
        <v-divider></v-divider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const staticMetaTitle = t("seo-privacy");
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