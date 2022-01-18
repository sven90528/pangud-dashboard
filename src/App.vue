<template>
  <n-config-provider :theme="theme" :theme-overrides="getThemeOverrides">
    <div id="app">
      <!-- <Layout :inverted="inverted" /> -->
      <router-view />
    </div>
  </n-config-provider>
</template>
<script lang="ts">
import { Vue, Options } from "vue-class-component";

import Layout from "@/layout/Index.vue";
import { lighten } from "@/utils/index";
@Options({
  components: {
    Layout,
  },
})
export default class App extends Vue {
  private theme = null; // 默认应用主题
  private inverted = false; // 是否反转主题颜色
  private appTheme = "#0960bd"; // 自定义应用主题
  get getThemeOverrides(): unknown {
    const lightenStr = lighten(this.appTheme, 6);
    return {
      common: {
        primaryColor: this.appTheme,
        primaryColorHover: lightenStr,
        primaryColorPressed: lightenStr,
      },
    };
  }
}
</script>

<style lang="scss">
@import "./styles/index.scss";
</style>
