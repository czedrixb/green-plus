import { ref, computed } from "vue";
import emailjs from "emailjs-com";

export const valid = ref(false);
export const name = ref("");
export const email = ref("");
export const message = ref("");

export const snackbar = ref({
  show: false,
  message: "",
  color: "success",
});

export const nameRules = computed(() => [
  (value) => {
    if (value) return true;
    return "Name is required.";
  },
  (value) => {
    if (value?.length <= 10) return true;
    return "Name must be less than 10 characters.";
  },
]);

export const emailRules = computed(() => [
  (value) => {
    if (value) return true;
    return "E-mail is required.";
  },
  (value) => {
    if (/.+@.+\..+/.test(value)) return true;
    return "E-mail must be valid.";
  },
]);

export const messageRules = computed(() => [
  (value) => {
    if (value) return true;
    return "Message is required.";
  },
]);

export const handleSubmit = async () => {
  if (valid.value) {
    const templateParams = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      console.log("Email sent successfully:", response);
      snackbar.value = {
        show: true,
        message: "Your message has been sent successfully!",
        color: "success",
      };
    } catch (error) {
      console.error("Failed to send email:", error);
      snackbar.value = {
        show: true,
        message: "Failed to send your message. Please try again later.",
        color: "error",
      };
    }
  }
};
