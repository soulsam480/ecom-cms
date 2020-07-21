<template>
  <div class="col-sm-2">
    <ul class="sidebar">
      <li
        class="resnav"
        :class="{ act: sideBar === 'home' }"
        @click="changeSide('home')"
      >
        <router-link to="/dash">Home</router-link>
      </li>
      <li
        class="resnav"
        :class="{ act: sideBar === 'product' }"
        @click="changeSide('product')"
      >
        <router-link to="/dash/product">Product</router-link>
      </li>
      <li
        class="resnav"
        :class="{ act: sideBar === 'categories' }"
        @click="changeSide('categories')"
      >
        Categories
      </li>
      <li
        class="resnav"
        :class="{ act: sideBar === 'media' }"
        @click="changeSide('media')"
      >
        Media
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      sideBar: "",
    };
  },
  methods: {
    changeSide(data) {
      this.sideBar = data;
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
  height: 100vh;
  background-color: #393e46;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  padding-inline-start: 0;
  li {
    cursor: pointer;
    width: 100%;
    padding: 10px 16px;
    text-decoration: none;
    font-size: 17px;
    a {
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
