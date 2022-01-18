import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "@/views/login/Index.vue";
import NotFoundPage from "@/views/error/404.vue";
import { menus } from "./menus";
function createRoutes(menus: RouteRecordRaw[]): Array<RouteRecordRaw> {
  const routes = menus.map((menu: RouteRecordRaw) => {
    return {
      ...menu,
    };
  });
  return routes;
}
const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/:path(.*)*",
    name: "404",
    component: NotFoundPage,
    meta: {
      hidden: true,
    },
  },
];
const routes = createRoutes(menus).concat(constantRoutes);
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
