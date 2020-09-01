<template>
  <div>
    <h4>Categories</h4>
    <span class="attention"></span>
    <br />
    <h5>Action</h5>
    <button class="e-btn ">Some Action</button>
    <br />
    <h5>Categories</h5>
    <button
      class="e-btn"
      :class="{ btn_act: this.$route.params._slug === 'men-clothing' }"
    >
      <router-link :to="{ path: '/dash/cat/men-clothing' }"
        >Men Clothing</router-link
      >
    </button>

    <button
      class="e-btn "
      :class="{ btn_act: this.$route.params._slug === 'women-clothing' }"
    >
      <router-link :to="{ path: '/dash/cat/women-clothing' }"
        >Women Clothing</router-link
      >
    </button>

    <hr style="background-color:#4ecca3" />

    <!--   specific category view -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Categories",
};
</script>

<style lang="scss" scoped></style>
