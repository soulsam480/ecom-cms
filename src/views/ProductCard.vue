<template>
  <div>
    <h5>Manage Existing Products</h5>
    <span class="attention"></span>
    <br />
    <Modal :isModal="isModal" v-on:no="cancel" v-on:yes="removeProduct" />
    <div class="row">
      <div class="col-sm-2 p-1" v-for="item in products" :key="item.id">
        <div class="card p-card">
          <p class="card-header">{{ item.name }}</p>
          <div class="card-body p-1">
            <div>
              <router-link
                class="e-btn"
                :to="{ name: 'Edit', params: { id: item.id } }"
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
import { db, storageref } from "../firebase";
import { mapGetters } from "vuex";
export default {
  name: "AllProducts",
  props: [],
  data() {
    return {
      delId: "",
      isModal: false,
    };
  },
  components: {
    Modal,
  },
  inject: ["showLog"],
  computed: {
    ...mapGetters({ products: "getProducts" }),
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
      await db
        .ref(`/Products/${this.delId}`)
        .remove()
        .then(async () => {
          await storageref
            .ref(`/Products/${this.delId}`)
            .listAll()
            .then((res) => {
              res.items.forEach((el) => {
                el.delete();
              });
            })
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
