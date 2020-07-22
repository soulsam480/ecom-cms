import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firebaseAction } from "vuexfire";
import { db, storageref } from "../firebase";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    media: [],
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
    getMedia(state) {
      var listRef = storageref.ref("/Products");
      listRef
        .listAll()
        .then((res) => {
          res.prefixes.forEach((el) => {
            var main = [];
            let locFound = state.media.find((snap) => snap.includes(el.name));
            if (!locFound) {
              main.push(el.name);
            }
            el.listAll().then((resp) => {
              resp.items.forEach((el) => {
                var loc = main.findIndex(
                  (obj) => obj === el.fullPath.split("/")[1]
                );
                el.getDownloadURL().then((url) => {
                  loc = loc++;
                  let urlFound = state.media.find((a) => a.includes(url));
                  if (!urlFound) {
                    main.splice(loc, 0, url);
                  }
                });
              });
              if (main[main.length - 1] !== " ") {
                state.media.push(main);
              }
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  actions: {
    addMedia: ({ commit }) => {
      commit("getMedia");
    },
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
    getMedia: (state) => {
      return state.media;
    },
  },
  modules: {},
});
