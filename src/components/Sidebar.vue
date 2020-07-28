<template>
  <div class="col-sm-2">
    <span class="ham" @click="openNav"> ☰</span>

    <ul class="sidebar" ref="mNav" @click="openNav">
      <li>
        <a>
          <h5>Admin: {{ user.data.displayName.split(" ")[0] }}</h5>
          <div>
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
        <router-link to="/dash/product">Products</router-link>
      </li>
      <li :class="{ act: sideBar === 'media' }" @click="changeSide('media')">
        <router-link to="/dash/media">Media</router-link>
      </li>
      <li
        :class="{ act: sideBar === 'categories' }"
        @click="changeSide('categories')"
      >
        <a>Categories</a>
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
    openNav() {
      this.$refs.mNav.classList.toggle("act-nav");
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
    right: 0 !important;
    position: fixed !important;
    z-index: 1000;
    height: 100vh !important;
    width: 0 !important;
    transition: width 0.3s linear;
  }
  .ham {
    display: block !important;
  }
  .act-nav {
  width: 80% !important;
}
}

.ham {
  display: none;
  top: 0px;
  right: 0px;
  position: fixed;
  z-index: 10000;
  font-size: 30px;
  cursor: pointer;
  padding: 0 10px 5px 10px;
  background-color: #484d55;
}
.sidebar {
  position: sticky;
  top: 0px;
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
    white-space: nowrap;
    a {
      cursor: pointer;
      padding: 10px 16px;
      display: block;
      color: white;
    }
  }
  li a:hover {
    background-color: #484d55;
  }
  .act {
    background-color: #484d55;
  }
}
</style>
