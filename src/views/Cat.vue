<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="catModal"
      tabindex="-1"
      aria-labelledby="catModal"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content custom-content">
          <div class="modal-header">
            <h5 class="modal-title" id="catModal">Add a Category</h5>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="categoryname">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="categoryname"
                  placeholder="Name of Category"
                  v-model="catName"
                />
              </div>
              <div class="form-group">
                <label for="children">Sub Categories</label>
                <input
                  type="text"
                  class="form-control"
                  id="children"
                  aria-describedby="emailHelp"
                  placeholder=" In the format e.g. men-jeans,men-shirts"
                  v-model="catChild"
                />
                <small id="emailHelp" class="form-text text-muted"
                  >only " <span class="text-white">-</span> " special charcter
                  allowed</small
                >
              </div>
              <div class="form-group">
                <label for="parent">Parent Category</label>
                <input
                  type="text"
                  class="form-control"
                  id="parent"
                  placeholder="If it has a parent Category, Leave Blank for none!"
                  v-model="catParent"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button class="e-btn" data-dismiss="modal">
              Close
            </button>
            <button class="e-btn" data-dismiss="modal" @click="addCat">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
    <h4>Categories</h4>
    <span class="attention"></span>
    <br />
    <h5>Action</h5>
    <button class="e-btn ">Some Action</button>
    <button class="e-btn " data-toggle="modal" data-target="#catModal">
      Add Category
    </button>
    <br />
    <h5>Categories</h5>
    <button
      class="e-btn"
      :class="{ btn_act: this.$route.params._slug === 'men-clothing' }"
    >
      <router-link :to="{ path: '/dash/cat/men-clothing' }"
        >Men Clothing</router-link
      >
    </button>

    <button
      class="e-btn "
      :class="{ btn_act: this.$route.params._slug === 'women-clothing' }"
    >
      <router-link :to="{ path: '/dash/cat/women-clothing' }"
        >Women Clothing</router-link
      >
    </button>

    <hr style="background-color:#4ecca3" />

    <!--   specific category view -->
    <router-view></router-view>
  </div>
</template>

<script>
import Category from "../models/cat";
import { db } from "../firebase/index";
export default {
  name: "Categories",
  data() {
    return {
      catName: "",
      catChild: "",
      catParent: "",
    };
  },
  methods: {
    async addCat() {
      if (this.catChild !== "") {
        var childObj = {};
        const tempArray = this.catChild.split(",");
        tempArray.forEach((el) => {
          childObj[el] = {
            name: el,
            children: {},
            parent: this.catName,
          };
        });
      } else {
        childObj = {};
      }

      if (this.catParent === "") {
        this.catParent = null;
      }

      const newcat = new Category(
        this.catName,
        { ...childObj },
        this.catParent
      );

      console.log(newcat);
      if (this.catParent) {
        await db
          .ref(
            `/Universal/Categories/${this.catParent}/children/${newcat.name}`
          )
          .set(newcat)
          .then(() => {
            console.log("yoyo for child");
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else {
        await db
          .ref(`/Universal/Categories/${this.catName}`)
          .set(newcat)
          .then(() => {
            console.log("yoyo for parent");
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
