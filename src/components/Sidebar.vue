<template>
  <div class="col-sm-2">
    <ul class="sidebar">
      <li>
        <a>
          <h5 class="d-inline">
            Admin: {{ user.data.displayName.split(" ")[0] }}
          </h5>
          <div class="d-inline">
            <button @click="logOut" class="e-btn-danger">Logout</button>
          </div>
          <hr style="background-color:#4ecca3" />
        </a>
      </li>
      <li :class="{ act: sideBar === 'home' }" @click="changeSide('home')">
        <router-link to="/dash">Home</router-link>
      </li>
      <li
        :class="{ act: sideBar === 'product' }"
        @click="changeSide('product')"
      >
        <router-link to="/dash/product">Product</router-link>
      </li>
      <li
        :class="{ act: sideBar === 'categories' }"
        @click="changeSide('categories')"
      >
        <a>Categories</a>
      </li>
      <li :class="{ act: sideBar === 'media' }" @click="changeSide('media')">
        <a> Media</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { auth } from "../firebase";
import router from "../router";
export default {
  name: "Sidebar",
  data() {
    return {
      sideBar: "",
    };
  },
  computed: {
    ...mapGetters({ user: "user" }),
  },
  methods: {
    changeSide(data) {
      this.sideBar = data;
    },
    async logOut() {
      await auth.signOut().then(() => {
        router.replace({ path: "/" });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.col-sm-2 {
  padding-left: 0 !important;
  padding-right: 0 !important ;
}
@media only screen and (max-width: 768px) {
  .sidebar {
    display: none !important ;
  }
}

.sidebar {
  position: sticky !important;
  top: 0px !important;
  height: auto;
  background-color: #393e46;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  padding-inline-start: 0;
  margin-bottom: 0;
  li {
    width: 100%;

    text-decoration: none;
    font-size: 17px;
    a {
      cursor: pointer;
      padding: 10px 16px;
      display: block;
      color: white;
    }
  }
  li:hover {
    background-color: #484d55;
  }
  .act {
    background-color: #484d55;
  }
}
</style>
