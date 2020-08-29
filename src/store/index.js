import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations, firebaseAction } from "vuexfire";
import { db, storageref } from "../firebase";
import { createIndex } from "../plugins/indexGen";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    media: [],
    user: {
      loggedIn: false,
      data: null,
    },
    authCred: {
      uid: "9D8Wj4RaPEZvaoHb04U4RtGokqY2",
    },
    orders: [],
  },
  mutations: {
    ...vuexfireMutations,
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
                el.getDownloadURL().then((url) => {
                  let urlFound = state.media.find((a) => a.includes(url));
                  if (!urlFound) {
                    main.push(url);
                  }
                });
              });
              if (main.length > 0) {
                state.media.push(main);
              }
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addOrders: (state) => {
      const orderRef = db.ref("/Orders");
      orderRef.on("value", (res) => {
        const data = res.val();
        state.orders = createIndex(data);
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
    authCredGet(state) {
      return state.authCred;
    },
    user(state) {
      return state.user;
    },
    getMedia: (state) => {
      return state.media;
    },
    getOrders: (state) => {
      return state.orders;
    },
  },
  modules: {},
});
