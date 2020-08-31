<template>
  <div class="single_product__holder">
    <topHeader pageTitle="Shop | " />

    <!-- Breadcroumb Area -->

    <div class="breadcroumb-area bread-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcroumb-title text-center">
              <h1>Shop</h1>
              <h6>
                <a href="/">Home</a> / Shop
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- shop view -->
    <div class="shop-section section-padding">
  <div class="container" v-if="products.length">
    <div class="row">

        <Product class="col-md-4"  v-for="product in products" :key="product.id" :product="product" />
    </div>
      </div>

       <div class="container" v-else>
        <div class="row">
          <div class="col-lg-12 mar-bt-30 text-center">
            <div class="section-title">
              <h2>
                Shop
                <b>Products</b>
              </h2>
              <h6>No Products available, Check back later</h6>
            </div>
          </div>
        </div>
      </div>
  
         
    </div>
    <!-- CTA Area-->

    <div class="cta-area theme-2">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-7 text-center">
            <h2>
              Lets make the world
              <br />better
              <b>together</b>
            </h2>
          </div>
          <div class="col-lg-6 col-md-5 wow fadeInUp animated" data-wow-delay=".2s">
            <a href="#" class="main-btn">Become a Volunteer</a>
          </div>
        </div>
      </div>
    </div>

    <Bottomfooter />
  </div>
</template>
 
<script>
import topHeader from "../layouts/header.vue";
import Bottomfooter from "../layouts/footer.vue";
import Product from "./widgets/_product.vue";

export default {
  mounted() {
      this.$store.dispatch('getProducts');
  },
  components: {
    topHeader,
    Bottomfooter,
    Product
  },
  data() {
  return{
  }
  },
  computed:{
    products(){
     return this.$store.state.products;
    },
    
  },
   methods: {
    
    // ProductsLoader() {
    //   axios
    //     .get("/api/sc_front/product_listings")
    //     .then(({ data }) => (this.products = data));
    // }
  },
  created() {
   
  }
};
</script>
