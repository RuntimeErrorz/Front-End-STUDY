import { createApp } from "vue";
import App from "./App.vue";
import "element-plus/dist/index.css";
import router from "./router/index.js";
import store from "./store/index.js";
import "@/router/permission.js";
import "@/styles/index.scss";
import * as ELIcons from "@element-plus/icons-vue";
import i18n from "./i18n";
import filters from "./utils/filters";

const app = createApp(App);

for (const iconName in ELIcons) {
  app.component(iconName, ELIcons[iconName]);
}
filters(app);
app.use(store).use(router).use(i18n).mount("#app");
