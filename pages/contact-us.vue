  <template>
  <v-container max-width="1200" class="mt-5 pt-16 px-sm-5 px-md-10 py-lg-16">
    <v-row align="center" class="mb-16 mt-md-16">
      <v-col cols="12" sm="6" md="6" lg="6" class="pt-10">
        <div class="text-h3 font-weight-bold mb-5 line-break-0">
          {{ t("Contact an expert") }}
        </div>

        <div class="sub-text mb-8">
          <p class="mb-5 line-break-0">{{ t("hear-you") }}</p>
          <p class="line-break-0">
            {{ t("any-questions") }}
          </p>
        </div>

        <v-row align="center">
          <v-col cols="2">
            <v-sheet
              rounded="circle"
              class="text-h6 font-weight-medium d-flex justify-center align-center"
              color="blue-accent-4"
              height="35"
              width="35"
            >
              <v-icon size="x-small" icon="mdi-phone-outgoing"></v-icon>
            </v-sheet>
          </v-col>
          <v-col cols="10">
            <div class="sub-text font-weight-medium">070-8233-4338~9</div>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col cols="2">
            <v-sheet
              rounded="circle"
              class="text-h6 font-weight-medium d-flex justify-center align-center"
              color="blue-accent-4"
              height="35"
              width="35"
            >
              <v-icon size="x-small" class="send-icon" icon="mdi-send"></v-icon>
            </v-sheet>
          </v-col>
          <v-col cols="10">
            <div class="sub-text font-weight-medium">jinnee73@hanmail.net</div>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col cols="2">
            <v-sheet
              rounded="circle"
              class="text-h6 font-weight-medium d-flex justify-center align-center"
              color="blue-accent-4"
              height="35"
              width="35"
            >
              <v-icon size="x-small" icon="mdi-map-marker"></v-icon>
            </v-sheet>
          </v-col>
          <v-col cols="10">
            <p class="sub-text font-weight-medium line-break-0">
              {{ t("address") }}
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="bg-grey-lighten-5 pa-lg-5" sm="6" md="6" lg="6">
        <div class="text-36 font-weight-medium mb-5 line-break-0">
          {{ t("need-help") }}
        </div>

        <p class="sub-text mb-5 line-break-0">
          {{ t("help-text") }}
        </p>
        <v-form v-model="valid">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                :label="$t('Name')"
                density="compact"
                variant="outlined"
                color="blue-accent-4"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                type="email"
                v-model="email"
                :rules="emailRules"
                :label="$t('Email')"
                density="compact"
                variant="outlined"
                color="blue-accent-4"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-textarea
                :label="$t('Message')"
                v-model="message"
                :rules="messageRules"
                density="compact"
                variant="outlined"
                color="blue-accent-4"
              ></v-textarea>
            </v-col>

            <v-col cols="12">
              <v-btn
                class="text-none"
                block
                elevation="1"
                color="blue-accent-4"
                rounded="lg"
                size="large"
                @click="handleSubmit"
                >{{ t("Submit") }}</v-btn
              >
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>

    <div class="overflow-hidden mb-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.8855181863396!2d127.02556567641425!3d37.274141740839625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b430a20764611%3A0xbd0835f3e94eaa53!2s72FH%2BM72%2C%20Suwon%2C%20Gyeonggi-do%2C%20South%20Korea!5e0!3m2!1sen!2sph!4v1736904098847!5m2!1sen!2sph"
        width="1200"
        height="600"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <Snackbar />

    <Faqs />
  </v-container>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";
import {
  valid,
  name,
  email,
  message,
  nameRules,
  emailRules,
  messageRules,
  handleSubmit,
} from "@/composables/contactUs";

const { t } = useI18n();

const staticMetaTitle = t("seo-contact");
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