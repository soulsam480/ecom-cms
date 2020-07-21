<template>
  <div class="product">
    <h5>Manage Products</h5>
    <span class="attention"></span>
    <br />
    <!--Functions-->
    <div>
      <button class="e-btn" @click="task = 'add'">Add Product</button>
      <button class="e-btn" @click="task = 'manage'">Manage Existing</button>
    </div>
    <hr style="background-color:#4ecca3" />
    <br />
    <!--implementations-->
    <div>
      <AddProduct :id="id" :products="products" v-if="task === 'add'" />
      <AllProducts :products="products" v-if="task === 'manage'" />
    </div>
  </div>
</template>

<script>
import AddProduct from "@/components/AddProduct.vue";
import AllProducts from "@/components/AllProducts.vue";
import { mapGetters } from "vuex";
export default {
  name: "Product",
  data() {
    return {
      task: "",
      id: "",
    };
  },
  computed: {
    ...mapGetters({ products: "getProducts" }),
  },
  components: {
    AddProduct,
    AllProducts,
  },
};
</script>

<style lang="scss" scoped></style>
