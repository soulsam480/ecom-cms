import Vue from "vue";
import VueRouter from "vue-router";
import Dash from "../views/Dash.vue";
/* import store from "../store";
 */
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dash",
    component: Dash,
    children: [
      {
        path: "product",
        name: "Product",
        component: () => import("../views/Product.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
