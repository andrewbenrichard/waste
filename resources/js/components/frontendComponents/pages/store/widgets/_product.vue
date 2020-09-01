<template>
  <div class="col-md-4">
        <router-link :to="'/shop/'+product.product_slug">
            <div class="image_holder">
              <img :src="'/public/products//' + product.product_main_img"/>
            </div>
        </router-link>
            <div class="product_des">
                <router-link :to="'/shop/'+product.product_slug">
              <div class="product_title">
                <h4>{{product.product_name}}</h4>
              </div>
              <div class="product_price">
                <p>₦{{product.product_price}}</p>
              </div>
                </router-link>
              <div class="product_cta">
                <button @click="addToCart()" class="add_cart"> Add to cart</button>
              </div>
            </div>
          </div>
        
    
</template>

<style>
 .product_des {
    text-align: center;
    color: #333333;
}
.image_holder>img {
    border-radius: 2%;
}
.product_title>h4 {
    color: #333333;
}
.product_price>p {
    font-weight: 900;
    color: #333333;
    font-size: 20px;
}
button.add_cart {
    background-color: #ffd857;
    border: none;
    padding: 9px 30px;
    border-radius: 5px;
}
button.add_cart:hover {
    border-radius: 50px;
}
.product_holder:hover {
    box-shadow: 0 2px 6px -2px #d0cece;
    padding: 14px;
}
</style>
<script>
export default {
  mounted() {},
  created() {},
  props: ["product"],
  data() {
    return {
      
    };
  },
  methods: {
     addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1
      });
    }
  }
};
</script>