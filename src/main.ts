import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  // create naive ui
  create,
  // component
  NConfigProvider,
  NLayout,
  NLayoutSider,
  NLayoutHeader,
  NLayoutContent,
  NButton,
  NCollapse,
  NCollapseItem,
  NAlert,
  NMenu,
  NSwitch,
  NIcon,
  NDropdown,
  NAvatar,
  NForm,
  NFormItem,
  NInput,
  NCheckbox,
} from "naive-ui";

const naive = create({
  components: [
    NConfigProvider,
    NLayout,
    NLayoutSider,
    NLayoutHeader,
    NLayoutContent,
    NButton,
    NCollapse,
    NCollapseItem,
    NAlert,
    NMenu,
    NSwitch,
    NIcon,
    NDropdown,
    NAvatar,
    NForm,
    NFormItem,
    NInput,
    NCheckbox,
  ],
});

const app = createApp(App);

app.use(naive);

app.use(store).use(router).mount("#app");
