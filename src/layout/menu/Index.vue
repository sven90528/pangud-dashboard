<template>
  <div class="menu">
    <n-menu
      mode="vertical"
      :options="menuOptions"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :collapsed="collapsed"
      :inverted="inverted"
      :expanded-keys="openKeys"
      :value="selectedKeys"
      @update:value="clickMenuItem"
      @update:expanded-keys="menuExpanded"
    />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import { useRoute, RouteLocation, RouteRecordName } from "vue-router";
import { menus } from "@/router/menus";
import { generatorMenu } from "@/utils/index";
export default class Menu extends Vue {
  @Prop({ type: Boolean, default: false })
  private inverted!: boolean;
  @Prop({ type: Boolean, default: false })
  private collapsed!: boolean;
  private currentRoute = useRoute();
  get menuOptions(): unknown[] {
    return generatorMenu(menus);
  }
  private openKeys: Array<RouteRecordName | undefined> = [];
  get selectedKeys(): string {
    return this.currentRoute.name as string;
  }
  @Watch("$route")
  routeChange(currentRoute: RouteLocation) {
    const matched = currentRoute.matched;
    const openKeys =
      matched?.length > 0 ? matched.map((item) => item.name) : [];
    this.openKeys = openKeys;
  }
  // 点击菜单
  clickMenuItem(key: string) {
    if (/http(s)?:/.test(key)) {
      window.open(key);
    } else {
      this.$router.push({ name: key });
    }
  }
  // 展开菜单
  menuExpanded(openKeys: string[]) {
    if (!openKeys) return;
    const latestOpenKey = openKeys.find(
      (key) => this.openKeys.indexOf(key) === -1
    );
    const isExistChildren = this.findChildrenLen(latestOpenKey as string);
    this.openKeys = isExistChildren
      ? latestOpenKey
        ? [latestOpenKey]
        : []
      : openKeys;
  }
  // 查找是否存在子路由
  findChildrenLen(name: string) {
    if (!name) return false;
    const subRouteChildren: string[] = [];
    for (const { children, name } of menus) {
      if (children && children.length) {
        subRouteChildren.push(name as string);
      }
    }
    return subRouteChildren.includes(name);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
