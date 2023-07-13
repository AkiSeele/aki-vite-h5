import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import '@/style/main.min.css'
import App from "./App.vue";
import router from "@/router";

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router).use(pinia)
app.mount("#app");
