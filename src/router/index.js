import Vue from "vue";
import VueRouter from "vue-router";
import Dash from "../views/Dash.vue";
import Login from "../views/Login.vue";
import NProgress from "nprogress";
import { auth } from "../firebase";
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  easing: "ease",
  speed: 500,
});
/* import "nprogress/nprogress.css";
 */ Vue.use(VueRouter);

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
      {
        path: "media",
        name: "Media",
        component: () => import("../views/Media.vue"),
      },
      {
        path: "order",
        name: "Order",
        component: () => import("../views/Order.vue"),
      },
      {
        path: "cat",
        name: "Cat",
        component: () => import("../views/Cat.vue"),
        children: [
          {
            path: ":_slug",
            component: () => import("../views/ShowCat.vue"),
          },
        ],
      },
    ],
    async beforeEnter(to, from, next) {
      let loggedIn = await auth.currentUser;
      if (loggedIn) {
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
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});
router.beforeEach((to, from, next) => {
  NProgress.start();
  NProgress.set(0.1);
  NProgress.inc(0.2);
  next();
});
router.afterEach(() => {
  setTimeout(() => NProgress.done(), 2000);
});
export default router;
