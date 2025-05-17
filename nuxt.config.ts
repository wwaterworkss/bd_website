import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-01-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      Radley: true,
      Sora: true,
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ["@nuxtjs/google-fonts"],
});