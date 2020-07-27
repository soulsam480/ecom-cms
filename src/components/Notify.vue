<template>
  <!--notofication component-->
  <div
    class="notification"
    :class="{ suc: type === 'suc', err: type === 'err' }"
  >
    <span class="title">{{ title }}</span>
    <span>{{ message }}</span>
  </div>
  <!--notofication component-->
</template>

<script>
export default {
  props: ["title", "message", "type"],
  name: "Notify",
  data() {
    return {};
  },
};
</script>

<style scoped></style>
