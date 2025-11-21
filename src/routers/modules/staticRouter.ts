import { RouteRecordRaw } from "vue-router";
import { HOME_URL, LOGIN_URL } from "@/config";

/**
 * staticRouter (静态路由)
 */
export const staticRouter: RouteRecordRaw[] = [
  {
    path: "/",
    name: "welcome",
    component: () => import("@/views/home/Welcome.vue"),
    props: { showAll: true },
    children: []
  },
  {
    path: "/aboutus",
    name: "aboutus",
    component: () => import("@/views/home/Welcome.vue"),
    props: { showAll: false, section: "aboutus" },
    children: []
  },
  {
    path: "/services",
    name: "services",
    component: () => import("@/views/home/Welcome.vue"),
    props: { showAll: false, section: "services" },
    children: []
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/home/Welcome.vue"),
    props: { showAll: false, section: "contact" },
    children: []
  },
  {
    path: "/pdf-merge",
    name: "merge",
    component: () => import("@/views/pdf/PdfMerge.vue")
  },
  {
    path: LOGIN_URL,
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录"
    }
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("@/layouts/index.vue"),
    // component: () => import("@/layouts/indexAsync.vue"),
    redirect: HOME_URL,
    children: []
  }
];

/**
 * errorRouter (错误页面路由)
 */
export const errorRouter = [
  {
    path: "/403",
    name: "403",
    component: () => import("@/components/ErrorMessage/403.vue"),
    meta: {
      title: "403页面"
    }
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/components/ErrorMessage/404.vue"),
    meta: {
      title: "404页面"
    }
  },
  {
    path: "/500",
    name: "500",
    component: () => import("@/components/ErrorMessage/500.vue"),
    meta: {
      title: "500页面"
    }
  },
  // Resolve refresh page, route warnings
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/components/ErrorMessage/404.vue")
  }
];
