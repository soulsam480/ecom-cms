<template>
  <div>
    <div class="row">
      <div class="col-sm-2 p-1" v-for="item in products" :key="item.id">
        <div class="card">
          <p class="card-header">{{ item.name }}</p>
          <div class="card-body p-1">
            <div>
              <button class="e-btn" @click="editPost(item.id)">
                Edit
              </button>
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
export default {
  name: "AllProducts",
  props: ["products"],
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
    editPost(id) {
      this.addProd = true;
      this.onPostEdit = true;
      var main = this.$store.getters.getProducts.find((el) => el.id === id);
      (this.a = main.name),
        (this.c = main.price),
        (this.checkedSizes = main.sizes),
        (this.checkedColors = main.colors),
        (this.checkedCats = main.cats),
        (this.picture = main.imgUrls),
        (this.shortDes = main.shortDes);
      this.tags = main.tags.join();
      this.$refs.toastuiEditor.invoke("setHtml", `${main.desc}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  padding: 0 15px 0 15px;
}
</style>
