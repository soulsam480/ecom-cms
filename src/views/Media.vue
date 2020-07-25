<template>
  <div class="content">
    <h4>Media</h4>
    <span class="attention"></span>
    <br />
    <button class="e-btn">Some Action</button>
    <hr style="background-color:#4ecca3" />
    <h5>All Collections</h5>
    <span class="attention"></span>
    <br />
    <div class="row">
      <div
        v-for="img in media"
        :key="img[img.length - 1]"
        class="collection col-sm-4"
      >
        <div>
          <img v-if="img[1]" :src="img[1]" alt="" />
          <img v-if="img[2]" :src="img[2]" alt="" />
          <img v-if="img[3]" :src="img[3]" alt="" />
        </div>
        <button class="e-btn-danger">Delete</button>

        <hr style="background-color:#4ecca3" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Media",
  computed: {
    ...mapGetters({ media: "getMedia", products: "getProducts" }),
  },
  beforeCreate() {},
  methods: {},
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
