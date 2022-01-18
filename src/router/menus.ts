import { RouteRecordRaw } from "vue-router";
import { renderIcon } from "@/utils/index";
import { ProjectOutlined } from "@vicons/antd";
import { HomeOutlined } from "@vicons/antd";
const Layout = import("@/layout/Index.vue");

export const menus: RouteRecordRaw[] = [
  {
    path: "/home",
    name: "home",
    redirect: "/home/index",
    component: Layout,
    meta: {
      isRoot: true,
      activeMenu: "home_index",
      icon: renderIcon(HomeOutlined),
    },
    children: [
      {
        path: "index",
        name: `home_index`,
        meta: {
          title: "首页",
          activeMenu: "home_index",
        },
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: Layout,
    meta: {
      title: "关于",
      icon: renderIcon(ProjectOutlined),
    },
    children: [
      {
        path: "about1",
        name: "about1",
        component: () => import("@/views/About.vue"),
        meta: {
          title: "关于1",
        },
      },
      {
        path: "about2",
        name: "about2",
        component: () => import("@/views/About.vue"),
        meta: {
          title: "关于2",
        },
      },
    ],
  },
];
