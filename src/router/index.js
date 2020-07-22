import Vue from "vue";
import VueRouter from "vue-router";
import Dash from "../views/Dash.vue";
import Login from "../views/Login.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/dash",
    name: "Dash",
    component: Dash,
    children: [
      {
        path: "product",
        name: "Product",
        component: () => import("../views/Product.vue"),
        children: [
          {
            path: "add",
            name: "Add",
            component: () => import("../views/AddProduct.vue"),
          },
          {
            path: "edit/:id",
            name: "Edit",
            component: () => import("../views/Edit.vue"),
          },
          {
            path: "/",
            name: "All",
            component: () => import("../views/ProductCard.vue"),
            props: true,
          },
        ],
      },
    ],
    beforeEnter(to, from, next) {
      if (store.state.user.loggedIn === true) {
        next();
      } else {
        next({ path: "/" });
      }
    },
  },
  {
    path: "*",
    component: () => import("../views/404.vue"),
    name: "Fof",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
