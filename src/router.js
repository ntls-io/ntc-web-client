import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: "no-nav" },
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    meta: { layout: "no-nav" },
    component: () => import("@/views/Register.vue")
  },
  {
    path: "/home",
    name: "home",
    meta: { layout: "dashboard" },
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/analysis",
    name: "analysis",
    meta: { layout: "dashboard" },
    component: () => import("@/views/Analysis-data.vue")
  },
  {
    path: "/digital-tokens",
    name: "digital-tokens",
    meta: { layout: "dashboard" },
    component: () => import("@/views/Digital-tokens.vue")
  },
  {
    path: "/contributor-tokens",
    name: "contributor-tokens",
    meta: { layout: "dashboard" },
    component: () => import("@/views/Contributor-tokens.vue")
  },
  {
    path: "/manage-packages",
    name: "manage-packages",
    meta: { layout: "dashboard" },
    component: () => import("@/views/Manage-packages.vue")
  },
  {
    path: "/manage-pools",
    name: "manage-pools",
    meta: { layout: "dashboard" },
    component: () => import("@/views/Manage-pools.vue")
  },
  {
    path: "/manage-tokens",
    name: "manage-tokens",
    meta: { layout: "dashboard" },
    component: () => import("@/views/Manage-tokens.vue")
  },
  {
    path: "/purchase-tokens",
    name: "purchase-tokens",
    meta: { layout: "dashboard" },
    component: () => import("@/views/Purchase-tokens.vue")
  },
  {
    path: "/create-drt",
    name: "create-drt",
    meta: { layout: "dashboard" },
    component: () => import("@/views/Create-drt.vue")
  },
  {
    path: "/create-pool",
    name: "create-pool",
    meta: { layout: "dashboard" },
    component: () => import("@/views/Create-pool.vue")
  },
  {
    path: "/join-pool",
    name: "join-pool",
    meta: { layout: "dashboard" },
    component: () => import("@/views/Join-pool.vue")
  },
  {
    path: "/upload-data",
    name: "upload-data",
    meta: { layout: "dashboard" },
    component: () => import("@/views/Upload-data.vue")
  }
];

Vue.router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default Vue.router;
