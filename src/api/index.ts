import { http } from "@/utils/http/axios";

/**
 * @description: 登录
 */
export function login() {
  return http.request({
    url: "/sites",
    method: "GET",
  });
}
