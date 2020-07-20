<template>
  <div class="col-sm-2">
    <div class="sidebar">
      <a
        class="resnav"
        :class="{ act: sideBar === 'product' }"
        @click="changeSide('product')"
      >
        <router-link to="/product">Product</router-link>
      </a>
      <a
        class="resnav"
        :class="{ act: sideBar === 'categories' }"
        @click="changeSide('categories')"
        >Categories</a
      >
      <a
        class="resnav"
        :class="{ act: sideBar === 'media' }"
        @click="changeSide('media')"
        >Media</a
      >
    </div>
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

<style scoped>
@media only screen and (max-width: 768px) {
  .sidebar {
    flex-direction: row;
  }
}
.sidebar {
  position: sticky !important;
  top: 80px !important;
  height: auto;
  background-color: #ffebee;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sidebar a {
  cursor: pointer;
  width: 100%;
  padding: 10px 16px;
  text-decoration: none;
  font-size: 20px;
}
.sidebar a a {
  cursor: pointer;
  width: 100%;
  padding: 10px 16px;
  text-decoration: none;
  font-size: 20px;
}
.sidebar a:hover {
  background-color: #fddde2;
}
.sidebar a.act {
  background-color: #fddde2;
}
</style>
