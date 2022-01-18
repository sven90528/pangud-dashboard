<template>
  <n-layout class="layout" has-sider>
    <n-layout-sider
      show-trigger="bar"
      :inverted="true"
      collapse-mode="width"
      :collapsed="collapsed"
      :collapsed-width="64"
      :native-scrollbar="false"
      @collapse="collapsed = true"
      @expand="collapsed = false"
      :width="200"
      class="layout-sider"
    >
      <Logo :collapsed="collapsed" />
      <Menu v-model:collapsed="collapsed" :inverted="true" />
    </n-layout-sider>
    <n-layout>
      <n-layout-header position="absolute">
        <Header v-model:collapsed="collapsed" />
      </n-layout-header>
      <n-layout-content class="layout-content">
        <div class="layout-content-main">
          <router-view />
        </div>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import Menu from "./menu/Index.vue";
import Logo from "./logo/Index.vue";
import Header from "./header/Index.vue";
@Options({
  components: {
    Menu,
    Logo,
    Header,
  },
})
export default class Layout extends Vue {
  @Prop({ type: Boolean, default: false })
  public inverted!: boolean;
  private collapsed = false;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: row;
  flex: auto;

  &-default-background {
    background: #f5f7f9;
  }

  .layout-sider {
    min-height: 100vh;
    box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
    position: relative;
    z-index: 13;
    transition: all 0.2s ease-in-out;
  }

  .layout-sider-fix {
    position: fixed;
    top: 0;
    left: 0;
  }

  .ant-layout {
    overflow: hidden;
  }

  .layout-right-fix {
    overflow-x: hidden;
    padding-left: 200px;
    min-height: 100vh;
    transition: all 0.2s ease-in-out;
  }

  .layout-content {
    flex: auto;
    min-height: 100vh;
  }

  .n-layout-header.n-layout-header--absolute-positioned {
    z-index: 11;
  }

  .n-layout-footer {
    background: none;
  }
}

.layout-content-main {
  margin: 0 10px 10px;
  position: relative;
  padding-top: 64px;
}

.layout-content-main-fix {
  padding-top: 64px;
}

.fluid-header {
  padding-top: 0px;
}

.main-view-fix {
  padding-top: 44px;
}

.noMultiTabs {
  padding-top: 0;
}
</style>
