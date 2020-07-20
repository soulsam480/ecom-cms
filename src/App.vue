<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.dispatch("addData");
  },
  components: {},
};
</script>

<style lang="scss">
a {
  color: black !important;
  text-decoration: none !important;
}
:hover {
  text-decoration: none;
}
</style>
