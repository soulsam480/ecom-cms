<template>
  <div class="content">
    <h4>Media</h4>
    <span class="attention"></span>
    <br />
    <button class="e-btn">Some Action</button>
    <hr style="background-color:#4ecca3" />
    <h5>All Products</h5>
    <span class="attention"></span>
    <br />
    <div class="row">
      <div v-for="img in media" :key="img[0]" class="collection col-sm-4">
        <div>
          <p>
            <span
              v-if="isProduct(img[0])"
              style="color: #c41515; font-weight:bold;"
              >This is a Product</span
            >
            <span v-else style="color: #4ecca3 ">This is not a Product</span>
          </p>
          <img v-if="img[1]" :src="img[1]" alt="" />
          <img v-if="img[2]" :src="img[2]" alt="" />
          <img v-if="img[3]" :src="img[3]" alt="" />
        </div>
        <button
          class="e-btn-danger"
          :disabled="isProduct(img[0])"
          @click="deleteRef(img[0])"
        >
          Delete
        </button>

        <hr style="background-color:#4ecca3" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { storageref } from "../firebase";
export default {
  name: "Media",
  computed: {
    ...mapGetters({ media: "getMedia", products: "getProducts" }),
  },
  beforeCreate() {},
  methods: {
    isProduct(id) {
      if (this.products.find((el) => el.id === id)) {
        return true;
      }
    },
    async deleteRef(id) {
      await storageref
        .ref(`/Products/${id}`)
        .listAll()
        .then((res) => {
          res.items.forEach((el) => {
            el.delete();
          });
        })
        .then(() => {
          this.$store.dispatch("addMedia");
          this.showLog({
            type: "suc",
            message: "Deleted Successfully! ",
            title: "Success",
          });
        })
        .catch((err) => {
          this.showLog({
            type: "err",
            message: err.message,
            title: "Error",
          });
        });
    },
  },
};
</script>

<style scoped>
.collection {
  margin-bottom: 10px;
}
.content img {
  width: 100px;
  padding: 5px;
}
</style>
