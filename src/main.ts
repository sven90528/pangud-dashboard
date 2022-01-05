import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  // create naive ui
  create,
  // component
  NButton,
  NCollapse,
  NCollapseItem,
} from "naive-ui";

const naive = create({
  components: [NButton, NCollapse, NCollapseItem],
});

const app = createApp(App);

app.use(naive);

app.use(store).use(router).mount("#app");
