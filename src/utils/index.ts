import { NIcon } from "naive-ui";
import { h } from "vue";
import { isObject } from "./is/index";
import { PageEnum } from "@/enums/pageEnum";
/**
 * 图标生成函数
 */
export function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
/**
 * 递归组装菜单格式
 */
export function generatorMenu(routerMap: Array<any>): any {
  return filterRouter(routerMap).map((item: any) => {
    const isRoot = isRootRouter(item);
    const info = isRoot ? item.children[0] : item;
    const currentMenu = {
      ...info,
      ...info.meta,
      label: info.meta?.title,
      key: info.name,
      icon: isRoot ? item.meta?.icon : info.meta?.icon,
    };
    // 是否有子菜单，并递归处理
    if (info.children && info.children.length > 0) {
      // Recursion
      currentMenu.children = generatorMenu(info.children);
    }
    return currentMenu;
  });
}

/**
 * 排除Router
 * */
export function filterRouter(routerMap: Array<any>): any {
  return routerMap.filter((item) => {
    return (
      (item.meta?.hidden || false) != true &&
      !["/:path(.*)*", "/", PageEnum.REDIRECT, PageEnum.BASE_LOGIN].includes(
        item.path
      )
    );
  });
}

/**
 * 判断根路由 Router
 * */
export function isRootRouter(item: any): any {
  return item.meta?.alwaysShow != true && item.children?.length === 1;
}

/**
 * Sums the passed percentage to the R, G or B of a HEX color
 * @param {string} color The color to change
 * @param {number} amount The amount to change the color by
 * @returns {string} The processed part of the color
 */
function addLight(color: string, amount: number) {
  const cc = parseInt(color, 16) + amount;
  const c = cc > 255 ? 255 : cc;
  return c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`;
}

/**
 * Lightens a 6 char HEX color according to the passed percentage
 * @param {string} color The color to change
 * @param {number} amount The amount to change the color by
 * @returns {string} The processed color represented as HEX
 */
export function lighten(color: string, amount: number): string {
  color = color.indexOf("#") >= 0 ? color.substring(1, color.length) : color;
  amount = Math.trunc((255 * amount) / 100);
  return `#${addLight(color.substring(0, 2), amount)}${addLight(
    color.substring(2, 4),
    amount
  )}${addLight(color.substring(4, 6), amount)}`;
}

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key])
      ? deepMerge(src[key], target[key])
      : (src[key] = target[key]);
  }
  return src;
}

/**
 * 判断是否 url
 * */
export function isUrl(url: string) {
  return /(^http|https:\/\/)/g.test(url);
}
