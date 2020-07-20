import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firebaseAction } from "vuexfire";
import { db } from "../firebase";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    user: {
      loggedIn: false,
      data: null,
    },
    auth: false,
    authCred: {
      uid: "lSC134A31NZqjxaEtGvaKfG0PTA3",
    },
  },
  mutations: {
    ...vuexfireMutations,
    cAuth(state) {
      state.auth = !state.auth;
    },
    setLogIn(state, value) {
      state.user.loggedIn = value;
    },
    setUser(state, data) {
      state.user.data = data;
    },
  },
  actions: {
    addData: firebaseAction(({ bindFirebaseRef }) => {
      return bindFirebaseRef("products", db.ref("/Products"));
    }),
    changeAuth(context) {
      context.commit("cAuth");
    },
    fetchUser({ commit }, user) {
      commit("setLogIn", user !== null);
      if (user) {
        commit("setUser", {
          displayName: user.displayName,
          email: user.email,
          imgUrl: user.photoURL,
          userId: user.uid,
          pNum: user.phoneNumber,
          emailVerified: user.emailVerified,
        });
      } else {
        commit("setUser", null);
      }
    },
  },
  getters: {
    getProducts: (state) => {
      return state.products;
    },
    getAuth(state) {
      return state.auth;
    },
    authCredGet(state) {
      return state.authCred;
    },
    user(state) {
      return state.user;
    },
  },
  modules: {},
});
