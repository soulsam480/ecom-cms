<template>
  <div>
    <h5>Manage Existing Products</h5>
    <span class="attention"></span>
    <br />
    <div class="row">
      <div class="col-sm-2 p-1" v-for="item in products" :key="item.id">
        <div class="card">
          <p class="card-header">{{ item.name }}</p>
          <div class="card-body p-1">
            <div>
              <router-link
                class="e-btn"
                :to="{ name: 'Edit', params: { id: item.id } }"
              >
                Edit
              </router-link>
              <button class="e-btn" @click="removeProduct(item.id)">
                Remove
              </button>
            </div>
            <!-- <button
                  class="btn btn-success btn-sm"
                  @click="updateProduct(item.id)"
                >
                  Save
                </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db, storageref } from "../firebase";
import { mapGetters } from "vuex";
export default {
  name: "AllProducts",
  props: [],
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ products: "getProducts" }),
  },
  methods: {
    removeProduct(id) {
      db.ref(`/Products/${id}`)
        .remove()
        .then(() => {
          storageref
            .ref(`/Products/${id}`)
            .delete()
            .then(() => {
              this.$store.dispatch("addData");
              window.alert("Product deleted successfully!");
            });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  padding: 0 15px 0 15px;
}
</style>
