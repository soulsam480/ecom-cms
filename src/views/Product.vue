<template>
  <div class="product">
    <h5>Manage Products</h5>
    <span class="attention"></span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Product",
  computed: {
    ...mapGetters({ products: "getProducts" }),
  },
};
</script>

<style scoped></style>
