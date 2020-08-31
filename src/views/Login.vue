<template>
  <div class="login container">
    <br />
    <h4 style="color:#4ecca3;" class="text-center">Admin Panel</h4>
    <hr style="background-color:#4ecca3" />
    <!-- The Login section shows only when a user is not logged in-->
    <div v-if="user.loggedIn === false">
      <div class="row d-flex justify-content-center">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body wow-bg">
              <h5>Login</h5>
              <span class="attention-1"></span>
              <br />
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  v-model="authId"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                  autofocus
                />
                <small class="text-muted"
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
              <button class="e-btn" @click="Auth()">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--After the user logs in-->
    <div v-else>
      <div class="row d-flex justify-content-center">
        <div class="col-md-4">
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
          <div class="text-center">
            <router-link class="e-btn" to="/dash"> Go to Dashboard</router-link>
          </div>
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
        this.$store.dispatch("fetchUser", null);
      });
    },
    async Auth() {
      await auth
        .signInWithEmailAndPassword(this.authId, this.authPass)
        .then(async (res) => {
          if (res.user.uid !== this.cred.uid) {
            await auth.signOut().then(() => {
              this.authId = "";
              this.authPass = "";
              this.$store.dispatch("fetchUser", null);
            });
            window.alert("Bhag B*dk");
          } else {
            this.authId = "";
            this.authPass = "";
            router.replace({ name: "Dash" });
          }
        })
        .catch((er) => {
          window.alert(er);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.col-md-4 h5 {
  text-align: center;
  text-transform: uppercase;
  position: relative;
  letter-spacing: 1.5px;
}
.attention-1 {
  &:before {
    content: "";
    position: absolute;
    width: 40px;
    height: 2px;
    left: 44%;
    background-color: #4ecca3;
  }
}
.card {
  border: none;
  border-radius: 30px;
  background-color: #14edaa;
}
.wow-bg {
  background-color: #141421;
  border: 1px solid #2e2e4c;
  border-radius: 10px;
  margin-top: 4px;
}
.u-img {
  width: 100px;
  border-radius: 2px;
}
</style>
