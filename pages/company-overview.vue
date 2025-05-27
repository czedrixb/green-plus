<template>
  <div>
    <SectionHeader title="Company Overview" class="mb-md-8" />

    <v-container max-width="1200" class="px-md-10 pt-10 pb-16">
      <v-row justify="space-between" align="center">
        <v-col cols="12" lg="6" class="order-2 order-lg-1">
          <div>
            <div
              class="text-h4 font-weight-bold text-blue-darken-4 mb-5 line-break-0"
            >
              Human Green Plus Co., Ltd.
            </div>

            <div class="mb-5">
              <div class="sub-text d-flex align-center">
                <span class="line-break-0 font-weight-light"
                  >{{ t("ceo") }}:</span
                >
                <span class="ms-2 font-weight-bold bold-text line-break-0">{{
                  t("ceo-name")
                }}</span>
              </div>
              <div class="sub-text d-flex align-center">
                <span class="line-break-0 font-weight-light"
                  >{{ t("establishment-date") }}:</span
                >
                <span class="ms-2 font-weight-bold bold-text line-break-0">{{
                  t("establishment-date-date")
                }}</span>
              </div>
            </div>

            <div class="mb-5">
              <div class="sub-text d-flex align-center">
                <span class="line-break-0 font-weight-light"
                  >{{ t("capital") }}:</span
                >
                <span class="ms-2 font-weight-bold bold-text line-break-0">{{
                  t("krw")
                }}</span>
              </div>
              <div class="sub-text d-flex align-center">
                <span class="line-break-0 font-weight-light"
                  >{{ t("number-employees") }}:</span
                >
                <span class="ms-2 font-weight-bold bold-text line-break-0">{{
                  t("number-employees-250")
                }}</span>
              </div>
            </div>

            <div class="mb-5">
              <div class="sub-text">
                <span class="line-break-0 font-weight-light"
                  >{{ t("location") }}:</span
                >
                <p class="mb-0 font-weight-bold bold-text line-break-0">
                  {{ t("location-address") }}
                </p>
              </div>
            </div>
          </div>
        </v-col>
        <v-col
          class="px-lg-5 d-flex justify-center justify-md-end order-1 order-lg-2"
          cols="12"
          lg="6"
        >
          <div>
            <v-img
              src="/images/version2/company-overview/human-green-plus.png"
              cover
              width="536"
              height="348"
              rounded="lg"
              alt="human-green-plus"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="py-16" max-width="1200">
      <div
        class="text-h4 font-weight-bold text-blue-darken-4 text-center line-break-0 mb-15"
      >
        {{ t("key-history") }}
      </div>

      <v-row
        v-for="(item, index) in timelineItems"
        :key="index"
        justify="center"
        justify-lg="space-between"
        align="center"
        class="mb-8"
      >
        <v-col cols="12" lg="5">
          <div class="d-flex align-center">
            <div>
              <v-img
                :src="item.image"
                :alt="item.title"
                cover
                width="119"
                height="111"
              ></v-img>
            </div>

            <div class="ms-5">
              <div class="text-number mb-1 font-weight-bold text-h4">
                {{ item.number }}
              </div>

              <v-row>
                <v-col cols="12">
                  <div class="bold-text font-weight-bold text-h5 line-break-0">
                    {{ t(item.title) }}
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>

        <v-col class="d-flex justify-center justify-lg-start" cols="12" lg="7">
          <v-timeline side="end">
            <v-timeline-item
              v-for="(event, i) in item.timeline"
              :key="i"
              dot-color="#2962FF"
              fill-dot
              size="x-small"
            >
              <v-row
                class="d-flex flex-wrap align-center light-text sub-text pb-5"
                no-gutter
                style="width: 100%"
              >
                <v-col class="py-0" cols="12">
                  <span>{{ event.year }}</span>
                </v-col>
                <v-col class="py-0" cols="12">
                  <span class="line-break-0">{{ t(event.text) }}</span>
                </v-col>
              </v-row>
            </v-timeline-item>
          </v-timeline>
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

const timelineItems = [
  {
    number: "01",
    image: "/images/version2/company-overview/establishment-initial.png",
    title: "establishment-initial",
    timeline: [
      { year: "2009", text: "establishment-1" },
      { year: "2011", text: "establishment-2" },
      { year: "2013", text: "establishment-3" },
      {
        year: "2014",
        text: "establishment-4",
      },
    ],
  },
  {
    number: "02",
    image: "/images/version2/company-overview/business-expansion.png",
    title: "business-expansion",
    timeline: [
      {
        year: "2015",
        text: "business-1",
      },
      {
        year: "2016",
        text: "business-2",
      },
      {
        year: "2017",
        text: "business-3",
      },
    ],
  },
  {
    number: "03",
    image: "/images/version2/company-overview/current-future.png",
    title: "current-future",
    timeline: [
      {
        year: "2021",
        text: "current-1",
      },
      {
        year: "2024",
        text: "current-2",
      },
    ],
  },
];

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