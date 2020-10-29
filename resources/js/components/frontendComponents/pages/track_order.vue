<template>
  <div class="about__holder">
    <topHeader pageTitle="Track Order | " />

    <!-- Breadcroumb Area -->

    <div class="breadcroumb-area bread-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcroumb-title text-center">
              <h1>Track Order</h1>
              <h6>
                <router-link to="/">Home</router-link>/Track Orders
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- orders tracking view -->

    <div class="container section-padding">

      <div class="row">
        <div class="col-md-12" v-if="orders.length">
          <div class="row">
            <div class="col-md-12" v-for="order in orders" :key="order.id">

              <div class="row">
                <div class="card col-md-4">
                  <div class="card_details">
                    <p>Date: <strong>{{order.date}}</strong></p>
                    <p>Email: {{order.email}}</p>
                    <p>Number: {{order.number}}</p>
                    <p>Address: {{order.address}}</p>
                  </div>
                </div>
                <div class="card col-md-8">
                  <h4>Product name: {{order.product.product_name}} 
                    
                    <span v-if="order.status == 0" class="badge badge-warning">pending</span>
                    <span v-if="order.status == 1" class="badge badge-info">Shipped</span>
                    <span v-if="order.status == 2" class="badge badge-success">Delivered</span>
                    </h4>
                  <hr>
                  <p v-if="order.status == 0" >Item is pending and would be delivered soon</p>
                    <p v-if="order.status == 1" >Item is Shipped to {{order.address}} would be delivered soon</p>
                    <p v-if="order.status == 2" >Item has been Delivered</p>

                    <p >Amount paid: <strong>{{order.amount}}</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12" v-else>
             <h4>Enter your email address to track orders progress</h4>
             <div class="row">
               <div class="col-md-6">
                 <div class="form-group">
                   <label for="order_email" >Order Email</label>
                   <input v-model="email" type="text" id="order_email"  required class="form-control"  placeholder="Order email address">
                 </div>
                 
               </div>
             </div>
            <button @click="loadOrders" class="main-btn" >
              Get Orders
            </button>
        </div>
      </div>

    </div>
    <!-- CTA Area-->

    <div class="cta-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2>
              A very small
              <b>donation</b>
              <br />can save the world
            </h2>
            <a href="#" class="main-btn">Become a Donor</a>
          </div>
        </div>
      </div>
    </div>

    <Bottomfooter />
  </div>
</template>
 
<script>
import topHeader from "./layouts/header.vue";
import Bottomfooter from "./layouts/footer.vue";

export default {
  mounted() {
    this.$route.params;
  },
  components: {
    topHeader,
    Bottomfooter
  },
  data() {
    return {
      orders: {},
      email: this.$route.params.slug
    }
  },
   methods: {
    loadOrders() {
      axios
        .get("/api/sc_front/orders/items/" + this.email)
        .then(({ data }) => (this.orders = data));
    },

  },
  created() {
    this.loadOrders();
  }
};
</script>
