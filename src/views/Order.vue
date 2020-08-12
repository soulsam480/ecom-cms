<template>
  <div>
    <h4>Orders</h4>
    <span class="attention"></span>
    <Modal :isModal="isModal" v-on:no="cancel" v-on:yes="changeStatus" />
    <br />
    <!-- this page contains both all orders and order details logic -->
    <div v-if="orderDetail !== undefined">
      <!-- this div changes to change in route query. The order_id query makes this div render and the other one hide -->
      <h5>
        Order Details //
        <span
          >Order ID:
          <b style="color:#4ecca3;">{{ this.$route.query.order_id }}</b></span
        >
        /
        <span
          >Status: <b style="color:#4ecca3;">{{ orderDetail.status }}</b></span
        >
        /
        <span
          >Placed On:
          <b style="color:#4ecca3;">{{ orderDetail.placedOn }}</b></span
        >
        /
        <span
          >Amount:
          <b style="color:#4ecca3;"> ₹ {{ orderDetail.amount }}</b></span
        >
      </h5>
      <div class="dropdown">
        <button
          class="e-btn dropdown-toggle"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Change Status
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" @click="changeStatus('Pending')">Pending</a>
          <a class="dropdown-item" @click="changeStatus('Processing')"
            >Processing</a
          >
          <a class="dropdown-item" @click="changeStatus('Shipped')">Shipped</a>
          <a class="dropdown-item" @click="changeStatus('Completed')"
            >Completed</a
          >
          <a class="dropdown-item" @click="changeStatus('Cancelled')"
            >Cancelled</a
          >
          <a class="dropdown-item" @click="changeStatus('Failed')">Failed</a>
        </div>
      </div>
      <button class="e-btn">Send Invoice</button>
      <button class="e-btn">Send Status</button>
      <button class="e-btn">Send Invoice</button>
      <hr style="background-color:#4ecca3" />

      <div class="row ">
        <div class="col-sm-5">
          <h5>Order Products</h5>
          <hr style="background-color:#4ecca3" />
          <div class="row a ">
            <div class="col-sm-12" v-for="p in orderDetail.cart" :key="p.id">
              <div class="row a">
                <div class="col-sm-4 lp-cart">
                  <img :src="p.imgUrls[0]" :alt="p.name" class="product-img" />
                </div>
                <div class="col-sm-8 rp-cart">
                  <h5 class="product-name">{{ p.name }}</h5>
                  <h6 v-if="p.size">Size: {{ p.size }}</h6>
                  <h6 v-if="p.color">Color: {{ p.color }}</h6>
                  <h6 v-if="p.quantity">Quantity: {{ p.quantity }}</h6>
                  <h6 v-if="p.price">Price: ₹ {{ p.price }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-7">
          <div class="row a">
            <div class="col-sm-6">
              <h5>Shipping Details</h5>
              <hr style="background-color:#4ecca3" />
              <div>
                <h5>{{ orderDetail.address.name }}</h5>
                <p>
                  {{ orderDetail.address.street }},
                  {{ orderDetail.address.city }} ,
                  <br />
                  {{ orderDetail.address.postal }},{{
                    orderDetail.address.state
                  }}
                </p>
                <h5>Phone Number</h5>
                <p>{{ orderDetail.address.phone }}</p>
              </div>
            </div>
            <div class="col-sm-6">
              <h5>Price Details</h5>
              <hr style="background-color:#4ecca3" />
              <div class="price">
                <h6 class="float-left">Total Price:</h6>
                <h6 class="float-right">₹ {{ orderDetail.amount }}</h6>
              </div>
              <div class="price">
                <h6 class="float-left">Shipping Fee:</h6>
                <h6 class="float-right">
                  <!--  ₹{{ orderDetail.amount }} -->
                  NA
                </h6>
              </div>
              <div class="price">
                <h5 class="float-left">Total Amount:</h5>
                <h5 class="float-right">₹ {{ orderDetail.amount }}</h5>
              </div>
              <div class="price">
                <h6 class="float-left">Paid Through:</h6>
                <h6 class="float-right">{{ orderDetail.pay_method }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Order Details div ends here!!! -->
    <div v-else>
      <h5>
        Filter by Status //
        <span style="color:#4ecca3;">Current: {{ statType }}</span>
      </h5>
      <button
        class="e-btn"
        :class="{ btn_act: statType === 'Pending' }"
        @click="statType = 'Pending'"
      >
        Pending
        <span v-if="statType === 'Pending'">/ {{ oCount }} </span>
      </button>
      <button
        class="e-btn"
        :class="{ btn_act: statType === 'Processing' }"
        @click="statType = 'Processing'"
      >
        Processing <span v-if="statType === 'Processing'">/ {{ oCount }} </span>
      </button>
      <button
        class="e-btn"
        :class="{ btn_act: statType === 'Shipped' }"
        @click="statType = 'Shipped'"
      >
        Shipped <span v-if="statType === 'Shipped'">/ {{ oCount }} </span>
      </button>
      <button
        class="e-btn"
        :class="{ btn_act: statType === 'Completed' }"
        @click="statType = 'Completed'"
      >
        Completed <span v-if="statType === 'Completed'">/ {{ oCount }} </span>
      </button>
      <button
        class="e-btn"
        :class="{ btn_act: statType === 'Cancelled' }"
        @click="statType = 'Cancelled'"
      >
        Cancelled <span v-if="statType === 'Cancelled'">/ {{ oCount }} </span>
      </button>
      <button
        class="e-btn"
        :class="{ btn_act: statType === 'Failed' }"
        @click="statType = 'Failed'"
      >
        Failed <span v-if="statType === 'Failed'">/ {{ oCount }}</span>
      </button>
      <hr style="background-color:#4ecca3" />
      <!-- status based nav starts here -->
      <div class="row">
        <div class="col-sm-3 p-1" v-for="order in orders" :key="order.orderId">
          <router-link
            :to="{ name: 'Order', query: { order_id: order.orderId } }"
          >
            <div class="card">
              <h6 class="card-header">
                ID: {{ order.orderId }} //
                <span class="pend"> Stat: {{ order.status }}</span>
              </h6>
              <div class="card-body">
                <p>Placed On: {{ order.placedOn }}</p>
                <p>Amount: ₹ {{ order.amount }}</p>
                <p>Payment Method: {{ order.pay_method }}</p>
                <p>Name: {{ order.user.name }}</p>
              </div>
            </div></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import { mapGetters } from "vuex";
import { db } from "../firebase/index";
import NProgress from "f:/MY CODEBASE/ecom-test/node_modules/nprogress";
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  easing: "ease",
  speed: 500,
});
import "nprogress/nprogress.css";
export default {
  name: "Order",
  inject: ["showLog"],
  components: {
    Modal,
  },
  computed: {
    ...mapGetters({ raw: "getOrders", user: "user" }),
    orders() {
      return this.raw.filter((el) => el.status === this.statType);
    },
    oCount() {
      return this.orders.length;
    },
    orderDetail() {
      if (this.$route.query.order_id) {
        return this.raw.find((el) => el.orderId === this.$route.query.order_id);
      } else {
        return undefined;
      }
    },
  },
  data() {
    return {
      isModal: false,
      statType: "Pending",
    };
  },
  methods: {
    cancel() {
      this.isModal = false;
    },
    showModal() {
      this.isModal = true;
    },
    async changeStatus(status) {
      NProgress.start();
      NProgress.set(0.1);
      NProgress.inc(0.2);
      console.log(this.user.data.userId);
      const date = this.orderDetail.placedOn.replace("th", "").split(" ");
      await db
        .ref(
          `/Orders/${date[2]}_${date[1]}_${date[0]}/${this.orderDetail.orderId}/status`
        )
        .set(status)
        .then(async () => {
          await db
            .ref(
              `Users/${this.orderDetail.user.uid}/orders/${this.orderDetail.orderId}/status`
            )
            .set(status)
            .then(() => {
              console.log("yoyo");
              setTimeout(() => NProgress.done(), 2000);
            })
            .catch((err) => console.log(err));
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.card-header {
  font-size: 18px;
}
.row {
  padding: 0 15px 0 15px;
}

a {
  color: unset;
}
.product-img {
  margin: auto;
  display: block;
  max-width: 100%;
}
.price {
  clear: both;
}
.a {
  padding: 0 0 !important;
}
@media only screen and (max-width: 768px) {
  .lp-cart {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    padding: 0 10px;
  }
  .rp-cart {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
    padding: 0 10px;
  }
}
</style>
