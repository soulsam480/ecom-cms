import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "./firebase";

//firebase auth fires each time the auth state is changed
Vue.config.productionTip = false;
const cred = store.getters.authCredGet.uid;
auth.onAuthStateChanged((user) => {
  if (user.uid === cred) {
    store.dispatch("fetchUser", user);
    store.dispatch("addData");
    store.dispatch("addMedia");
    store.commit("addOrders");
  } else {
    auth.signOut();
  }
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
