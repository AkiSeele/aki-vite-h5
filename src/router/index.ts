import { createRouter, createWebHistory } from "vue-router";
import { MeasurRouter } from "./MeasurRouter/measur";
const routes: any = [
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
    },
    redirect: "/home",
    component: () => import("@/layout/layout.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        meta: {
          title: "首页",
        },
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/search",
        name: "Search",
        meta: {
          title: "搜索",
        },
        component: () => import("@/views/Search.vue"),
      },
      {
        path: "/collect",
        name: "Collect",
        meta: {
          title: "收藏",
        },
        component: () => import("@/views/Collect.vue"),
      },
      {
        path: "/personal",
        name: "Personal",
        meta: {
          title: "个人",
        },
        component: () => import("@/views/Personal.vue"),
      },
    ],
  },
  MeasurRouter,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/**
 * 全局前置路由守卫，每一次路由跳转前都进入这个 beforeEach 函数
 */
router.beforeEach((to, from, next) => {
  let userData = null;
  try {
    userData = JSON.parse(localStorage.getItem("user")!).name;
  } catch {
    userData = null;
    console.log(from);
  }
  if (!userData && to.path == "/login") {
    next();
  } else if (!userData && to.path !== "/login") {
    return next({ name: "Login" });
  } else if (userData && to.path !== "/login") {
    if (to.meta.role) {
      next("/404");
    } else {
      next();
    }
  } else if (userData && to.path === "/login") {
    return next("/");
  }
});

export default router;
