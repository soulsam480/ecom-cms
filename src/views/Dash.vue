<template>
  <div class="container-fluid">
    <div v-if="user.loggedIn === true">
      <div class="row">
        <Sidebar />
        <div class="col-sm-10 view">
          <div v-if="this.$route.path === '/dash'">
            <h4>Dashboard</h4>
            <span class="attention"></span>
            <br />
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <h4>Please Log In to continue</h4>
    </div>
  </div>
</template>

<script>
import { auth } from "../firebase";
import Sidebar from "@/components/Sidebar.vue";
import { mapGetters } from "vuex";
export default {
  name: "Dash",
  computed: {
    ...mapGetters({ user: "user" }),
  },
  methods: {
    async Logout() {
      auth.signOut().then(() => {
        this.$store.dispatch("changeAuth");
      });
    },
  },
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
.col-sm-10 {
  padding-top: 15px;
}
</style>
