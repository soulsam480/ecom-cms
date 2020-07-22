<template>
  <div>
    <div v-for="img in media" :key="img[img.length - 1]">
      <p>{{ img[img.length - 1] }}</p>
      <img v-if="img[0]" :src="img[0]" alt="" />
      <img v-if="img[1]" :src="img[1]" alt="" />
      <img v-if="img[2]" :src="img[2]" alt="" />
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
  beforeCreate() {
    this.$store.dispatch("addMedia");
  },
  methods: {},
};
</script>

<style scoped>
img {
  width: 200px;
  padding: 5px;
}
</style>
