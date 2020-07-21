<template>
  <div class="login container">
    <br />
    <!-- The Login section shows only when a user is not logged in-->
    <div v-if="user.loggedIn !== true">
      <div class="row d-flex justify-content-center">
        <div class="col-md-4">
          <h4>Admin Login</h4>
          <hr />
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              v-model="authId"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted"
              >Hi Friend! Hacking is injurious to health. Don't try. Ok
              Bye.</small
            >
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              v-model="authPass"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              v-on:keyup.enter="Auth"
            />
          </div>
          <button class="btn btn-success" @click="Auth()">Login</button>
        </div>
      </div>
    </div>
    <!--After the user logs in-->
    <div v-else>
      <div class="row d-flex justify-content-center">
        <div class="col-md-4">
          <div class="row">
            <h4 style="color:#4ecca3;">Ecom-test Admin Panel</h4>
          </div>
          <div class="row">
            <div class="col-xs-5 m-2">
              <img :src="user.data.imgUrl" class="u-img" alt="" />
            </div>
            <div class="col-xs-7  m-2">
              <h4>{{ user.data.displayName }}</h4>
              <h6>{{ user.data.email }}</h6>
              <button @click="Logout" class="e-btn-danger">Log Out</button>
            </div>
          </div>
          <br />
          <router-link class="e-btn" to="/dash"> Dashboard</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth } from "../firebase";
import { mapGetters } from "vuex";
import router from "../router";
export default {
  name: "Login",
  computed: {
    ...mapGetters({ user: "user", cred: "authCredGet" }),
  },
  data() {
    return {
      authId: "",
      authPass: "",
    };
  },
  methods: {
    async Logout() {
      auth.signOut().then(() => {
        this.$store.dispatch("changeAuth");
      });
    },
    async Auth() {
      await auth
        .signInWithEmailAndPassword(this.authId, this.authPass)
        .then(() => {
          this.authId = "";
          this.authPass = "";
          if (this.user.data.userId === this.cred.uid) {
            router.replace({ path: "/dash" });
          } else {
            auth.signOut().then(() => {
              this.authId = "";
              this.authPass = "";
              window.alert("Bhag B*dk");
            });
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.u-img {
  width: 100px;
  border-radius: 2px;
}
</style>
