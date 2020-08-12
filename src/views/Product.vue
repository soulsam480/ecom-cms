<template>
  <div class="product">
    <h4>Products</h4>
    <span class="attention"></span>
    <br />
    <!--Functions-->
    <div>
      <button
        class="e-btn"
        @click="does = 'manage'"
        :class="{ btn_act: does === 'manage' }"
      >
        <router-link :to="{ name: 'All' }">Manage Existing</router-link>
      </button>
      <button
        class="e-btn"
        @click="does = 'add'"
        :class="{ btn_act: does === 'add' }"
      >
        <router-link :to="{ name: 'Add' }">Add Product</router-link>
      </button>
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
      does: "manage",
    };
  },
  methods: {
    editPost(id) {
      this.id = id;
      this.task = "add";
    },
  },
  computed: {
    ...mapGetters({ products: "getProducts" }),
  },
  components: {},
};
</script>

<style lang="scss" scoped>
a {
  color: unset;
}
</style>
