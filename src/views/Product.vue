<template>
  <div class="product">
    <h4>Products</h4>
    <span class="attention"></span>
    <br />
    <!--Functions-->
    <div>
      <router-link class="e-btn" :to="{ name: 'Add' }">Add Product</router-link>
      <router-link class="e-btn" :to="{ name: 'All' }"
        >Manage Existing</router-link
      >
    </div>
    <hr style="background-color:#4ecca3" />
    <!--implementations-->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Product",
  data() {
    return {
      task: "",
      id: "",
    };
  },
  methods: {
    editPost(id) {
      this.id = id;
      this.task = "add";
      console.log("yoyo");
    },
  },
  computed: {
    ...mapGetters({ products: "getProducts" }),
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
