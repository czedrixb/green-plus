<template>
  <div>
    <SectionHeader title="Greetings" class="mb-md-8" />

    <v-container max-width="1300" class="px-md-5 py-10">
      <v-row justify="center">
        <v-col class="mb-5" cols="12" md="6" lg="4">
          <div>
            <div class="d-flex justify-center">
              <div class="position-relative">
                <v-img
                  src="/images/version2/greetings/trust-expertise.png"
                  cover
                  width="369px"
                  height="233px"
                  rounded="lg"
                  alt="trust-expertise"
                ></v-img>

                <div
                  class="position-absolute bg-number-1 card-number text-center py-3 px-4"
                >
                  <span class="text-h5 text-white">01</span>
                </div>
              </div>
            </div>

            <div class="text-center mt-5">
              <p
                class="text-h5 font-weight-semibold text-blue-darken-4 mb-5 line-break-0"
              >
                {{ t("trust-expertise") }}
              </p>

              <p class="line-break-0">
                {{ t("sk-shieldus") }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col class="mb-5" cols="12" md="6" lg="4">
          <div>
            <div class="d-flex justify-center">
              <div class="position-relative">
                <v-img
                  src="/images/version2/greetings/comprehensive-management.png"
                  cover
                  width="369px"
                  height="233px"
                  rounded="lg"
                  alt="comprehensive-management"
                ></v-img>

                <div
                  class="position-absolute bg-number-2 card-number text-center py-3 px-4"
                >
                  <span class="text-h5 text-white">02</span>
                </div>
              </div>
            </div>

            <div class="text-center mt-5">
              <p
                class="text-h5 font-weight-semibold text-blue-darken-4 mb-5 line-break-0"
              >
                {{ t("comprehensive-management") }}
              </p>

              <p class="line-break-0">
                {{ t("integrated-building") }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col class="mb-5" cols="12" md="6" lg="4">
          <div>
            <div class="d-flex justify-center">
              <div class="position-relative">
                <v-img
                  src="/images/version2/greetings/future-oriented.png"
                  cover
                  width="369px"
                  height="233px"
                  rounded="lg"
                  alt="future-oriented"
                ></v-img>

                <div
                  class="position-absolute bg-number-3 card-number text-center py-3 px-4"
                >
                  <span class="text-h5 text-white">03</span>
                </div>
              </div>
            </div>

            <div class="text-center mt-5">
              <p
                class="text-h5 font-weight-semibold text-blue-darken-4 mb-5 line-break-0"
              >
                {{ t("future-oriented") }}
              </p>

              <p class="line-break-0">
                {{ t("sincerity-sharing") }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container max-width="1300" class="px-md-5 pb-16 mt-8">
      <p
        class="text-h4 font-weight-bold text-blue-darken-4 mb-5 line-break-0 text-center mb-15"
      >
        {{ t("management-policy") }}
      </p>

      <v-row justify="center">
        <v-col cols="12" md="4" lg="3">
          <div class="px-3 py- policy-card">
            <div class="d-flex justify-center">
              <div>
                <v-img
                  src="/images/version2/greetings/customer-oriented.png"
                  cover
                  width="238px"
                  height="124px"
                  rounded="lg"
                  alt="customer-oriented"
                ></v-img>
              </div>
            </div>

            <div class="text-center mt-5">
              <p
                class="text-h5 font-weight-semibold text-blue-darken-4 mb-5 line-break-0"
              >
                {{ t("customer-centered") }}
              </p>

              <p class="line-break-0">
                {{ t("prioritizing-customer") }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="4" lg="3">
          <div class="px-3 py-5 policy-card">
            <div class="d-flex justify-center">
              <div>
                <v-img
                  src="/images/version2/greetings/innovation.png"
                  cover
                  width="238px"
                  height="124px"
                  rounded="lg"
                  alt="innovation"
                ></v-img>
              </div>
            </div>

            <div class="text-center mt-5">
              <p
                class="text-h5 font-weight-semibold text-blue-darken-4 mb-5 line-break-0"
              >
                {{ t("innovation") }}
              </p>

              <p class="line-break-0">
                {{ t("continuously-improving") }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="4" lg="3">
          <div class="px-3 py-5 policy-card">
            <div class="d-flex justify-center">
              <div>
                <v-img
                  src="/images/version2/greetings/expertise.png"
                  cover
                  width="238px"
                  height="124px"
                  rounded="lg"
                  alt="expertise"
                ></v-img>
              </div>
            </div>

            <div class="text-center mt-5">
              <p
                class="text-h5 font-weight-semibold text-blue-darken-4 mb-5 line-break-0"
              >
                {{ t("expertise") }}
              </p>

              <p class="line-break-0">
                {{ t("training-maintaining") }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="4" lg="3">
          <div class="px-3 py-5 policy-card">
            <div class="d-flex justify-center">
              <div>
                <v-img
                  src="/images/version2/greetings/ethical-management.png"
                  cover
                  width="238px"
                  height="124px"
                  rounded="lg"
                  alt="management"
                ></v-img>
              </div>
            </div>

            <div class="text-center mt-5">
              <p
                class="text-h5 font-weight-semibold text-blue-darken-4 mb-5 line-break-0"
              >
                {{ t("ethical-management") }}
              </p>

              <p class="line-break-0">
                {{ t("operating-transparently") }}
              </p>
            </div>
          </div>
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
    { property: "og:image", content: "/images/thumbnail.jpg" },
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