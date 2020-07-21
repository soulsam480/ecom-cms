<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "./styles/default.scss";
export default {
  beforeCreate() {
    this.$store.dispatch("addData");
  },
  components: {},
};
</script>

<style lang="scss"></style>
