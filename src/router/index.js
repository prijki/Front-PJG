import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/Full.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/plantas",
        name: "Plantas",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Plantas.vue"),
      },
      {
        path: "/produto",
        name: "/produto",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Produto.vue"),
      },
      {
        path: "/dadoscompra",
        name: "/dadoscompra",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/DadosCompra.vue"),
      },
      {
        path: "/pix",
        name: "/pix",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Pix.vue"),
      },
      {
        path: "/boleto",
        name: "/boleto",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Boleto.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/Blank"),
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("@/views/Login.vue"),
      },
      {
        path: "/cadastro",
        name: "/cadastro",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Cadastro.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
