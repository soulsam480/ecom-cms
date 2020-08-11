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

      <hr style="background-color:#4ecca3" />

      <div class="row ">
        <div class="col-sm-5">
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
        :class="{ act: statType === 'Pending' }"
        @click="statType = 'Pending'"
      >
        Pending
        <span v-if="statType === 'Pending'">/ {{ oCount }} </span>
      </button>
      <button
        class="e-btn"
        :class="{ act: statType === 'Processing' }"
        @click="statType = 'Processing'"
      >
        Processing <span v-if="statType === 'Processing'">/ {{ oCount }} </span>
      </button>
      <button
        class="e-btn"
        :class="{ act: statType === 'Shipped' }"
        @click="statType = 'Shipped'"
      >
        Shipped <span v-if="statType === 'Shipped'">/ {{ oCount }} </span>
      </button>
      <button
        class="e-btn"
        :class="{ act: statType === 'Completed' }"
        @click="statType = 'Completed'"
      >
        Completed <span v-if="statType === 'Completed'">/ {{ oCount }} </span>
      </button>
      <button
        class="e-btn"
        :class="{ act: statType === 'Cancelled' }"
        @click="statType = 'Cancelled'"
      >
        Cancelled <span v-if="statType === 'Cancelled'">/ {{ oCount }} </span>
      </button>
      <button
        class="e-btn"
        :class="{ act: statType === 'Failed' }"
        @click="statType = 'Failed'"
      >
        Failed <span v-if="statType === 'Failed'">/ {{ oCount }}</span>
      </button>
      <hr style="background-color:#4ecca3" />
      <!-- status based nav starts here -->
      <div class="row">
        <div class="col-sm-3 p-1" v-for="order in orders" :key="order.orderId">
          <router-link
            :to="{ path: '/dash/order/', query: { order_id: order.orderId } }"
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

export default {
  name: "Order",
  inject: ["showLog"],
  components: {
    Modal,
  },
  computed: {
    ...mapGetters({ raw: "getOrders" }),
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
    changeStatus() {},
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
.act::after {
  content: " ";
  position: absolute;
  display: block;
  text-align: center;
  background-color: #4ecca3;
  height: 30px;
  width: 1px;
  margin-left: -24px;
  margin-top: -24px;
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
