<template>
  <div class="modal-wrap" :class="{ modAct: isModal }">
    <div class="v-modal">
      <div class="modal-img">
        <img src="../assets/alert.svg" alt="" />
      </div>
      <hr style="background-color:#4ecca3;" />
      <h5>Are you Sure ?</h5>
      <button class="e-btn" @click="$emit('no')">No</button>
      <button class="e-btn-danger" @click="$emit('yes')">Yes</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["isModal"],
  methods: {},
};
</script>

<style scoped></style>
