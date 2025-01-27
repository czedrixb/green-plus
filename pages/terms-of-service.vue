<template>
  <v-container max-width="1100" class="py-16">
    <div
      class="text-h4 text-center font-weight-bold text-blue-darken-4 mb-6 line-break-0 pt-16"
    >
      {{ t("terms-service") }}
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
      {{ t("terms-text") }}
    </p>

    <div class="mb-8">
      <div
        class="text-h5 font-weight-bold text-blue-darken-4 line-break-0 mb-5"
      >
        1. {{ t("services-provided") }}
      </div>

      <p class="line-break-0 mb-3 sub-text">
        {{ t("plus-specializing") }}
      </p>

      <div class="sub-text">
        <p class="mb-1">
          1.1 <b>{{ t("security-consulting") }}</b
          >: {{ t("advanced-security") }}
        </p>
        <p class="mb-1">
          1.2 <b>{{ t("facility-maintenance") }}</b
          >: {{ t("sustainable-building") }}
        </p>
        <p class="mb-1">
          1.3 <b>{{ t("professional-cleaning") }}</b
          >: {{ t("high-quality") }}
        </p>
        <p class="mb-1">
          1.4 <b>{{ t("parking-system") }}</b
          >: {{ t("efficient-reliable") }}
        </p>
        <p class="mb-1">
          1.5 <b>{{ t("partnership-sk") }}</b
          >: {{ t("levaraging") }}
        </p>
      </div>
    </div>

    <div class="mb-8">
      <div
        class="text-h5 font-weight-bold text-blue-darken-4 line-break-0 mb-5"
      >
        2. {{ t("use-service") }}
      </div>

      <div class="sub-text">
        <p class="mb-1">
          2.1 <b>{{ t("eligibility") }}</b
          >: {{ t("using-services") }}
        </p>
        <p class="mb-1">
          2.2 <b>{{ t("prohibited") }}</b
          >: {{ t("agree-misuse") }}
        </p>
        <p class="mb-1">
          2.3 <b>{{ t("compliance") }}</b
          >: {{ t("users-comply") }}
        </p>
      </div>
    </div>

    <div class="mb-8">
      <div
        class="text-h5 font-weight-bold text-blue-darken-4 line-break-0 mb-5"
      >
        3. {{ t("intellectual") }}
      </div>

      <div class="sub-text">
        <p class="mb-1">3.1 {{ t("all-content") }}</p>
      </div>
    </div>

    <div class="mb-8">
      <div
        class="text-h5 font-weight-bold text-blue-darken-4 line-break-0 mb-5"
      >
        4. {{ t("liability") }}
      </div>

      <div class="sub-text">
        <p class="mb-1">
          4.1 <b>{{ t("service-accuracy") }}</b
          >: {{ t("while-strive") }}
        </p>
        <p class="mb-1">
          4.2 <b>{{ t("limitation") }}</b
          >: {{ t("green-partners") }}
        </p>
      </div>
    </div>

    <div class="mb-8">
      <div
        class="text-h5 font-weight-bold text-blue-darken-4 line-break-0 mb-5"
      >
        5. {{ t("privacy") }}
      </div>

      <div class="sub-text">
        <p class="mb-1">5.1 {{ t("privacy-outlines") }}</p>
      </div>
    </div>

    <div class="mb-8">
      <div
        class="text-h5 font-weight-bold text-blue-darken-4 line-break-0 mb-5"
      >
        6. {{ t("change-terms") }}
      </div>

      <div class="sub-text">
        <p class="mb-1">6.1 {{ t("reserve-right") }}</p>
      </div>
    </div>

    <div class="mb-8">
      <div
        class="text-h5 font-weight-bold text-blue-darken-4 line-break-0 mb-5"
      >
        7. {{ t("governing-law") }}
      </div>

      <div class="sub-text">
        <p class="mb-1">7.1 {{ t("governed-terms") }}</p>
      </div>
    </div>

    <div class="mb-8">
      <div
        class="text-h5 font-weight-bold text-blue-darken-4 line-break-0 mb-5"
      >
        8. {{ t("contact-us") }}
      </div>

      <p class="line-break-0 mb-3 sub-text">
        {{ t("concerns-regarding") }}
      </p>

      <div class="sub-text">
        <p class="mb-1">{{ t("human-ltd") }}</p>
        <p class="mb-1">{{ t("address-label") }}: {{ t("address") }}</p>
        <p class="mb-1">{{ t("phone") }}: 070-8233-4338~9</p>
        <p class="mb-1">{{ t("Email") }}: jinnee73@hanmail.net</p>
      </div>
    </div>

    <p class="line-break-0 sub-text mb-8">
      {{ t("look-forward") }}
    </p>

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

const staticMetaTitle = t("seo-terms");
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