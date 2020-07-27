<template>
  <div>
    <div id="product">
      <div class="add-prod">
        <form>
          <div class="form-group">
            <label for>
              <b>Product Name</b>
            </label>
            <input
              v-model="a"
              type="text"
              class="form-control"
              id="inputTitle"
              placeholder="Product Name"
            />
          </div>
          <div class="form-group">
            <label for>
              <b>Short Description</b>
            </label>
            <input
              v-model="shortDes"
              type="text"
              class="form-control"
              id="inputShortDesc"
              placeholder="Short Description"
            />
          </div>
          <div class="form-group">
            <label for="inputDesc">
              <b>Product Price</b>
            </label>
            <input
              v-model="c"
              type="text"
              class="form-control"
              id="inputDesc"
              placeholder="Product Price"
            />
          </div>
          <div class="form-group">
            <legend class="col-form-label pt-0">
              <b>Product Sizes</b>
            </legend>
            <div class="form-check form-check-inline">
              <div class="box">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="S"
                  v-model="checkedSizes"
                />

                <span class="check"> </span>
                <label class="form-check-label" for="inlineCheckbox1">S</label>
              </div>
            </div>
            <div class="form-check form-check-inline">
              <div class="box">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="M"
                  v-model="checkedSizes"
                />

                <span class="check"></span>
                <label class="form-check-label" for="inlineCheckbox2">M</label>
              </div>
            </div>
            <div class="form-check form-check-inline">
              <div class="box">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox3"
                  value="L"
                  v-model="checkedSizes"
                />

                <span class="check"></span>
                <label class="form-check-label" for="inlineCheckbox3">L</label>
              </div>
            </div>
            <div class="form-check form-check-inline">
              <div class="box">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox4"
                  value="XL"
                  v-model="checkedSizes"
                />

                <span class="check"></span>
                <label class="form-check-label" for="inlineCheckbox4">XL</label>
              </div>
            </div>
            <div class="form-check form-check-inline">
              <div class="box">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox15"
                  value="XXL"
                  v-model="checkedSizes"
                />

                <span class="check"></span>
                <label class="form-check-label" for="inlineCheckbox15"
                  >XXL</label
                >
              </div>
            </div>
          </div>
          <div class="form-group color-block">
            <legend class="col-form-label pt-0">
              <b>Product Colors</b>
            </legend>
            <div class="form-check form-check-inline">
              <div class="box">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox5"
                  value="black"
                  v-model="checkedColors"
                />

                <span class="check"></span>
                <label class="form-check-label" for="inlineCheckbox5"
                  >Black</label
                >
              </div>
            </div>
            <div class="form-check form-check-inline">
              <div class="box">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox6"
                  value="white"
                  v-model="checkedColors"
                />

                <span class="check"></span>
                <label class="form-check-label" for="inlineCheckbox6"
                  >White</label
                >
              </div>
            </div>
            <div class="form-check form-check-inline">
              <div class="box">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox7"
                  value="yellow"
                  v-model="checkedColors"
                />

                <span class="check"></span>
                <label class="form-check-label" for="inlineCheckbox7"
                  >Yellow</label
                >
              </div>
            </div>
          </div>
          <div class="form-group">
            <legend class="col-form-label pt-0">
              <b>Product Categories</b>
            </legend>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox8"
                value="Men"
                v-model="checkedCats"
              />
              <label class="form-check-label" for="inlineCheckbox8">Men</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox9"
                value="Women"
                v-model="checkedCats"
              />
              <label class="form-check-label" for="inlineCheckbox9"
                >Women</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox10"
                value="uncat"
                v-model="checkedCats"
              />
              <label class="form-check-label" for="inlineCheckbox10"
                >uncat</label
              >
            </div>
          </div>

          <br />
          <div class="form-group">
            <label for="Image">
              <b>Product Image</b> (
              <small aria-describedby="Image"
                >Upload 3 Product Images at once</small
              >)
            </label>

            <input
              type="file"
              class="form-control-file"
              @change="previewImage"
              accept="image/*"
              id="Image"
              multiple
            />
            <br />
            <p>
              {{ uploadValue.toFixed() + "%" }}
              <progress id="progress" :value="uploadValue" max="100"></progress>
            </p>
            <button class="e-btn" @click="onUpload()">
              <!--           :disabled="!imageData"
            -->
              Upload Image
            </button>
          </div>
        </form>
        <label for="postContent">
          <b>Product Description</b>
        </label>
        <editor
          ref="toastuiEditor"
          :initialValue="editorText"
          :options="editorOptions"
          height="500px"
          initialEditType="wysiwyg"
          previewStyle="vertical"
          id="postContent"
        ></editor>
        <br />
        <div class="form-group">
          <label for>
            <b>Tags</b>
          </label>
          <input
            v-model="tags"
            type="text"
            class="form-control"
            id="Tags"
            placeholder="Tags"
          />
        </div>
        <br />
        <button class="e-btn" @click="addData()">
          Commit Product
        </button>

        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { db, storageref } from "../firebase";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/vue-editor";
export default {
  name: "AddProduct",
  components: {
    editor: Editor,
  },
  props: [],
  inject: ["showLog"],
  data() {
    return {
      a: "",
      b: "",
      c: "",
      shortDes: "",
      checkedSizes: [],
      checkedColors: [],
      checkedCats: [],
      imageData: [],
      picture: [],
      uploadValue: 0,
      editorText: "Add post content here",
      editorOptions: {
        hideModeSwitch: true,
      },
      postBody: "",
      tags: "",
    };
  },
  computed: {},

  methods: {
    previewImage(event) {
      this.b =
        Math.random()
          .toString(36)
          .slice(2)
          .toUpperCase() +
        Math.random()
          .toString(36)
          .slice(2);
      this.uploadValue = 0;
      this.picture = null;
      var files = event.target.files;
      files.forEach((el) => {
        this.imageData.push(el);
      });
    },

    onUpload() {
      this.picture = [];
      var a = 0;
      this.imageData.forEach((el) => {
        a = a + 1;
        const storageRef = storageref.ref(`/Products/${this.b}/${a}`).put(el);
        storageRef.on(
          `state_changed`,
          (snapshot) => {
            this.uploadValue =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log(error.message);
          },
          () => {
            this.uploadValue = 100;
            storageRef.snapshot.ref.getDownloadURL().then((url) => {
              this.imageData = [];
              this.picture.push(url);
            });
          }
        );
      });
    },
    addData() {
      this.postBody = this.$refs.toastuiEditor.invoke("getHtml");
      var tags = this.tags.split(",");
      const stamp = new Date().getTime();
      var newProduct = this.b;
      db.ref(`/Products/${newProduct}`)
        .set({
          id: this.b,
          name: this.a,
          price: this.c,
          sizes: this.checkedSizes,
          colors: this.checkedColors,
          cats: this.checkedCats,
          imgUrls: this.picture,
          desc: this.postBody,
          shortDes: this.shortDes,
          tags: tags,
          time: stamp,
        })
        .then(() => {
          this.showLog({
            type: "suc",
            message: "Product Added Successfully!",
            title: "Success",
          });
          this.b = "";
          this.a = "";
          this.c = "";
          this.checkedSizes = "";
          this.checkedColors = "";
          this.checkedCats = "";
          this.picture = "";
          this.postBody = "";
          this.shortDes = "";
          this.tags = "";
        })
        .catch(err => {
          this.showLog({
            type: "err",
            message: err.message,
            title: "Error",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.color-block .form-check-inline {
  margin-right: 1.75rem;
}
.box {
  margin: 10px;
  display: flex;
  align-items: center;
  user-select: none;
}
.box label {
  position: absolute;
  z-index: 10;
  padding-left: 25px;
  cursor: pointer;
}
.box input {
  opacity: 0;
  visibility: hidden;
  position: absolute;
}
.box input:checked ~ .check {
  border-color: #4ecca3;
  box-shadow: 0px 0px 0px 17px #4ecca3 inset;
}
.box input:checked ~ .check::after {
  opacity: 1;
  transform: scale(1);
}
.box .check {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 100000px;
  border: 1.5px solid #4ecca3;
  box-shadow: 0px 0px 0px 0px #4ecca3 inset;
  transition: all 0.15s cubic-bezier(0, 1.05, 0.72, 1.07);
}
.box .check::after {
  content: "";
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 4;
  position: absolute;
  transform: scale(0);
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  transition-delay: 0.2s !important;
  transition: all 0.25s cubic-bezier(0, 1.05, 0.72, 1.07);
}
</style>
