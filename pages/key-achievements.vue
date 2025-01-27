<template>
  <div>
    <SectionHeader title="Key achievements" />

    <v-container max-width="1200" class="px-md-10 py-15 mb-5">
      <v-row justify="center" class="mb-10">
        <v-col cols="12" lg="10">
          <div class="sub-text text-center">
            <p class="mb-2 line-break-0">
              {{ t("success-story") }}
            </p>
            <p class="mb-2 line-break-0">
              {{ t("key-milestone") }}
            </p>
            <p class="mb-2 line-break-0">
              {{ t("wealth-experience") }}
            </p>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" class="pb-8">
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/hanyang-university.png"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col class="d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/hanyang-label.png"
                height="50"
                class="img-label"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3" class="pb-8">
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/inha-university.png"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col cols="8" lg="10">
              <v-row align="center" justify="center" no-gutters>
                <v-col cols="2" sm="6" md="4" lg="3">
                  <v-img
                    src="/images/key-achievements/hankuk-label.png"
                    height="50"
                    max-width="100%"
                  ></v-img>
                </v-col>
                <v-col cols="10" lg="9" class="ps-2">
                  <div class="text-body-2 font-weight-bold">
                    {{ t("hankuk-university") }}
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3" class="pb-8">
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/inha-university.png"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col class="d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/inha-label.png"
                height="50"
                class="img-label"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3" class="pb-8">
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/ajou-university.png"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col class="d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/ajou-label.png"
                height="50"
                class="img-label"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3" class="pb-8">
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/green-building.png"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col class="d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/green-label.png"
                height="50"
                class="img-label"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3" class="pb-8">
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/nkg-logistics.png"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col cols="8" lg="10">
              <div class="text-body-2 text-center font-weight-bold">
                {{ t("logistics-center") }}
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3" class="pb-8">
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/alteko-korea.png"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col cols="8" lg="10">
              <div class="text-body-2 text-center font-weight-bold">
                {{ t("alteko-korea") }}
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3" class="pb-8">
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/doburiftec.png"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col cols="8" lg="10">
              <div class="text-body-2 text-center font-weight-bold">
                {{ t("doburiftec") }}
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3" class="pb-8">
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/hyundai-valley.png"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col cols="8" lg="10">
              <div class="text-body-2 text-center font-weight-bold">
                {{ t("hyundai-valley") }}
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3" class="pb-8">
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/hallasima-valley.png"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col cols="8" lg="10">
              <div class="text-body-2 text-center font-weight-bold">
                {{ t("hallasima-valley") }}
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3" class="pb-8">
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/diaiti.png"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col cols="8" lg="10">
              <div class="text-body-2 text-center font-weight-bold">
                {{ t("diaiti") }}
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3" class="pb-8">
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/outside-lactation.png"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col cols="8" lg="10">
              <div class="text-body-2 text-center font-weight-bold">
                {{ t("outside-lactation") }}
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3" class="pb-8">
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/misang-jabber.png"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col cols="8" lg="10">
              <div class="text-body-2 text-center font-weight-bold">
                {{ t("misang-jabber") }}
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3" class="pb-8">
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/ying-wai.png"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col cols="8" lg="10">
              <div class="text-body-2 text-center font-weight-bold">
                {{ t("ying-wai") }}
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3" class="pb-8">
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/lee-hyun.png"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col cols="8" lg="10">
              <div class="text-body-2 text-center font-weight-bold">
                {{ t("lee-hyun") }}
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3" class="pb-8">
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/dongdaemunjain.png"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col cols="8" lg="10">
              <div class="text-body-2 text-center font-weight-bold">
                {{ t("dongdaemunjain") }}
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3" class="pb-8">
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/natural-heel.png"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col cols="8" lg="10">
              <div class="text-body-2 text-center font-weight-bold">
                {{ t("natural-heel") }}
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3" class="pb-8">
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/ramian-mark.png"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col cols="8" lg="10">
              <div class="text-body-2 text-center font-weight-bold">
                {{ t("ramian-mark") }}
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3" class="pb-8">
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/kwon-jae.png"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col cols="8" lg="10">
              <div class="text-body-2 text-center font-weight-bold">
                {{ t("kwon-jae") }}
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="3" class="pb-8">
          <v-row justify="center" align="center">
            <v-col class="pb-0 d-flex justify-center" cols="12" lg="10">
              <v-img
                src="/images/key-achievements/whistle-room.png"
                rounded="lg"
                class="img-responsive-70"
                height="120"
                cover
              ></v-img>
            </v-col>
            <v-col cols="8" lg="10">
              <div class="text-body-2 text-center font-weight-bold">
                {{ t("whistle-room") }}
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="bg-blue-accent-4 text-white py-10">
      <v-container max-width="1100">
        <div class="text-center">
          <div class="text-h3 font-weight-bold mb-8 line-break-0">
            {{ t("our-partners") }}
          </div>
          <p class="text-h6 font-weight-regular line-break-0">
            {{ t("our-partners-text") }}
          </p>
        </div>
      </v-container>
    </v-container>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const staticMetaTitle = t("seo-key");
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