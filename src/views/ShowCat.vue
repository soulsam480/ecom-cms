<template>
  <div>
    <Modal :isModal="isModal" v-on:no="cancel" v-on:yes="removeProduct" />
    <div v-if="catData.length < 1">
      <p>Nothing Found!</p>
    </div>
    <div class="row" v-else>
      <div class="col-sm-2 p-1" v-for="item in catData" :key="item.id">
        <div class="card p-card">
          <p class="card-header">{{ item.name }}</p>
          <div class="card-body p-1">
            <div>
              <router-link
                class="e-btn"
                :to="{ path: `/dash/product/edit/${item.id}` }"
              >
                Edit
              </router-link>
              <button class="e-btn" @click="showModal(item.id)">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import { mapGetters } from "vuex";
import { db } from "../firebase/index";
export default {
  name: "ShowCat",
  inject: ["showLog"],
  data() {
    return {
      delId: "",
      isModal: false,
    };
  },
  computed: {
    ...mapGetters({ products: "getProducts" }),
    catData() {
      return this.products.filter((el) =>
        el.cats.includes(this.$route.params._slug)
      );
    },
  },
  components: {
    Modal,
  },
  methods: {
    cancel() {
      this.isModal = false;
      this.delId = "";
    },
    showModal(id) {
      this.delId = id;
      this.isModal = true;
    },
    async removeProduct() {
      this.isModal = false;
      const prod = this.products.find((el) => el.id === this.delId).cats;
      prod.splice(
        prod.findIndex((el) => el === "men-clothing"),
        1
      );
      db.ref(`/Products/${this.delId}/cats`)
        .set(prod)
        .then(() => {
          this.showLog({
            type: "suc",
            message: "Updated Successfully!",
            title: "Success",
          });
          this.delId = "";
          this.$store.dispatch("addData");
          this.$store.dispatch("addMedia");
        })
        .catch((err) => {
          this.delId = "";
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

<style lang="scss" scoped>
.row {
  padding: 0 15px 0 15px;
}
</style>
