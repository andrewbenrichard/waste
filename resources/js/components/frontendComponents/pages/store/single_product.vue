<template>
  <div class="single_product__holder">
    <topHeader :pageTitle="product.product_name +' |' " />

    <!-- Breadcroumb Area -->

    <div class="breadcroumb-area bread-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcroumb-title text-center">
              <h1>{{product.product_name}}</h1>
              <h6>
                <a href="/">Home</a> / {{product.product_name}}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- product -->
    <div class="product_sec">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="product_img">
              
            <img :src="'/public/products//'+product.product_main_img" alt=""/>
            </div>
          </div>
          <div class="col-md-8">
            <div class="product_details">
              <div class="single_product_name">
                <h4>{{product.product_name}}</h4>
              </div>
              <div class="single_product_price">
                <p>₦{{product.product_price}}</p>
              </div>
              <div class="single_product_des">
                <h3>{{product.product_des}}</h3>
              </div>
               <button class="single_add_cart"> Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--more products -->
    <div class="more_product">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="related_header">
              <h4>Related products</h4>
            </div>
          </div>
                  <RelatedProduct class="col-md-4"  v-for="product in products" :key="product.id" :product="product" />

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
 
 <style >
   .product_sec, .more_product {
    padding: 30px;
}
.product_img>img {
    border-radius: 10px;
}
.related_header{
  text-align: center;
}
.single_product_name>h4 {
    font-size: 28px;
    color: #333333;
    font-weight: 800;
}
.product_details {
    padding: 15px;
}
.single_product_price>p {
    color: #2a9da2;
}
.single_product_price>p {
    color: #2a9da2;
    font-size: 29px;
    font-weight: 500;
}
.single_product_des>h3{
  
    text-align: left;
    font-size: 17px;
    font-weight: 600;
    margin-top: 26px;

}
button.single_add_cart {
    width: 200px;
    background-color: #ffd857;
    border: none;
    padding: 9px 30px;
    border-radius: 5px;
    font-weight: 600;
    margin-top: 26px;
}
 </style>
<script>
import topHeader from "../layouts/header.vue";
import Bottomfooter from "../layouts/footer.vue";
import RelatedProduct from "./widgets/_product.vue";

export default {
  mounted() {
     this.$route.params;
    this.$store.dispatch("getProduct", this.$route.params.slug)
  },
  components: {
    topHeader,
    Bottomfooter,
    RelatedProduct
  },
  data() {
    return {
      productData: {},
      
    }
  },
  computed: {
    product(){
    return this.$store.state.product;
    },
    products(){
    return this.$store.state.products;
    }
  },

};
</script>

