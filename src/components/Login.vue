<template>
  <div class="login container">
    <br />
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
    async Auth() {
      await auth
        .signInWithEmailAndPassword(this.authId, this.authPass)
        .then(() => {
          this.authId = "";
          this.authPass = "";
          if (this.user.data.userId === this.cred.uid) {
            this.$store.dispatch("changeAuth");
            router.replace({ name: "Dash" });
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

<style lang="sass" scoped></style>
