<template>
  <div class="content">
    <h4>Media</h4>
    <span class="attention"></span>
    <br />
    <hr style="background-color:#4ecca3" />

    <div v-for="img in media" :key="img[img.length - 1]" :class="{}">
      <p>{{ img[0] }}</p>
      <img v-if="img[1]" :src="img[1]" alt="" />
      <img v-if="img[2]" :src="img[2]" alt="" />
      <img v-if="img[3]" :src="img[3]" alt="" />
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
.content img {
  width: 100px;
  padding: 5px;
}
</style>
