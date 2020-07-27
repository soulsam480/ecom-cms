<template>
  <div>
    <h5>Editing {{ product.name }}</h5>
    <span class="attention"></span>
    <br />
    <form>
      <div class="form-group">
        <label for>
          <b>Product Name</b>
        </label>
        <input
          v-model="product.name"
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
          v-model="product.shortDes"
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
          v-model="product.price"
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
              v-model="product.sizes"
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
              v-model="product.sizes"
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
              v-model="product.sizes"
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
              v-model="product.sizes"
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
              v-model="product.sizes"
            />

            <span class="check"></span>
            <label class="form-check-label" for="inlineCheckbox15">XXL</label>
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
              v-model="product.colors"
            />

            <span class="check"></span>
            <label class="form-check-label" for="inlineCheckbox5">Black</label>
          </div>
        </div>
        <div class="form-check form-check-inline">
          <div class="box">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox6"
              value="white"
              v-model="product.colors"
            />

            <span class="check"></span>
            <label class="form-check-label" for="inlineCheckbox6">White</label>
          </div>
        </div>
        <div class="form-check form-check-inline">
          <div class="box">
            <input
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox7"
              value="yellow"
              v-model="product.colors"
            />

            <span class="check"></span>
            <label class="form-check-label" for="inlineCheckbox7">Yellow</label>
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
            v-model="product.cats"
          />
          <label class="form-check-label" for="inlineCheckbox8">Men</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox9"
            value="Women"
            v-model="product.cats"
          />
          <label class="form-check-label" for="inlineCheckbox9">Women</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="inlineCheckbox10"
            value="uncat"
            v-model="product.cats"
          />
          <label class="form-check-label" for="inlineCheckbox10">uncat</label>
        </div>
      </div>

      <br />
      <div class="form-group">
        <label for="Image">
          <b>Product Image</b> (
          <small aria-describedby="Image">Upload 3 Product Images at once</small
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
      :initialValue="product.desc"
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
        v-model="product.tags"
        type="text"
        class="form-control"
        id="Tags"
        placeholder="Tags"
      />
    </div>
    <br />
    <button class="e-btn" @click="updateProduct()">
      Commit Product
    </button>
  </div>
</template>

<script>
import { db, storageref } from "../firebase";
import { mapGetters } from "vuex";
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/vue-editor";
export default {
  name: "Edit",
  components: {
    editor: Editor,
  },
  data() {
    return {
      imageData: [],
      uploadValue: 0,
      editorOptions: {
        hideModeSwitch: true,
      },
    };
  },
  inject: ["showLog"],
  computed: {
    ...mapGetters({ products: "getProducts" }),
    product() {
      return this.products.find((el) => el.id === this.$route.params.id);
    },
  },
  methods: {
    updateProduct() {
      this.postBody = this.$refs.toastuiEditor.invoke("getHtml");
      if (typeof this.product.tags === "string") {
        var tags = this.product.tags.split(",");
      } else {
        tags = this.product.tags;
      }
      db.ref(`/Products/${this.$route.params.id}`)
        .update({
          name: this.product.name,
          price: this.product.price,
          sizes: this.product.sizes,
          colors: this.product.colors,
          cats: this.product.cats,
          imgUrls: this.product.imgUrls,
          desc: this.product.desc,
          shortDes: this.product.shortDes,
          tags: tags,
        })
        .then(() => {
          this.showLog({
            type: "suc",
            message: "Updated Successfully!",
            title: "Success",
          });
        })
        .catch((err) => {
          this.showLog({
            type: "err",
            message: err.message,
            title: "Error",
          });
        });
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      var files = event.target.files;
      files.forEach((el) => {
        this.imageData.push(el);
      });
    },

    onUpload() {
      this.product.imgUrls = [];
      var a = 0;
      this.imageData.forEach((el) => {
        a = a + 1;
        const storageRef = storageref
          .ref(`/Products/${this.$route.params.id}/${a}`)
          .put(el);
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
              this.product.imgUrls.push(url);
            });
          }
        );
      });
    },
  },
};
</script>

<style scoped>
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
