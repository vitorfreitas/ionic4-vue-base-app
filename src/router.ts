import Vue from "vue";
import Router from "vue-router";
import { AuthToLogin, AuthToMain } from "./middlewares";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
      beforeEnter: AuthToMain
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue"),
      beforeEnter: AuthToLogin
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/views/Register.vue")
    }
  ]
});
