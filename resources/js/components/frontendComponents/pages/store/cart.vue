<template>
  <div class="single_product__holder">
    <topHeader pageTitle="Cart | " />

    <!-- Breadcroumb Area -->

    <div class="breadcroumb-area bread-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcroumb-title text-center">
              <h1>Cart</h1>
              <h6>
                <a href="/">Home</a> / cart
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    
      <!-- Shop Cart Page Section start here -->
    <div class="shop-cart padding-tb">
      <div class="container">
        <div class="section-wrapper row">
          <div class="col-md-6" v-if="cart_items.length">
            <div class="col-md-12">
              <h4>Cart Items</h4>
            </div>
            <table class="carts_table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Name</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cart in cart_items" :key="cart.product.id">
                  <td class="product-item">
                    <div class="p-thumb">
                      <router-link :to="'/shop/'+cart.product.product_slug">
                        <img :src="'/public/products//'+cart.product.product_main_img" />
                      </router-link>
                    </div>
                   
                  </td>
                  <td>{{cart.quantity}} X ₦{{cart.product.product_price}}</td>
                  <td>
                    <div class="p-content">
                        <router-link class="cart_product_name" :to="'/shop/'+cart.product.product_slug">{{cart.product.product_name}}
                        </router-link>
                    </div>
                  </td>
                  <td>
                    <a href="#" class="delete_item" @click.prevent="removeProductFromCart(cart.product)">
                      <i class="fa fa-trash"></i> 
                    </a>
                  </td>
                </tr>
               
              </tbody>
            </table>
          </div>
          <div class="col-md-6" v-else>
            <h4>No item in cart</h4>
            <router-link class="main-btn" to="/shop">
              Back to store
            </router-link>
          </div>
          <div class="col-md-6">
            <div class="shiping-box">
              <div class="row">
                <div class="col-md-6 col-12">
                  <div class="calculate-shiping">
                    <h4>Shipping</h4>
                   <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" aria-describedby="addressHelp" placeholder="Enter address">
                    <small id="addressHelp" class="form-text text-muted">Enter your address where the item would be delivered.</small>
                  </div>
                   <div class="form-group">
                    <label for="city">City</label>
                    <input type="text" class="form-control" id="city" placeholder="Enter city">
                  </div>
                    
                    <div class="outline-select">
                      <select>
                        <option >Select State</option>
                        <option value="saab">Abuja</option>
                        <option value="saab">Lagos</option>
                        <option value="saab">Benin</option>
                        <option value="saab">Delta State</option>
                      </select>
                      <span class="select-icon">
                        <i class="icofont-caret-down"></i>
                      </span>
                    </div>
                   
                    
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <div class="cart-overview">
                    <h4>Cart Totals</h4>
                    <ul class="cart_total">
                      <li>
                        <span class="pull-left">Cart Subtotal</span>
                        <p>₦{{cartTotalPrice}}</p>
                      </li>
                      <li>
                        <span class="pull-left">Shipping and Handling</span>
                        <p>₦1500 Shipping fee</p>
                      </li>
                      <li v-if="cartTotalPrice">
                        <span class="pull-left">Order Total</span>
                        <p class="main_total">₦{{cartTotalPrice + 1500}}</p>
                      </li>
                      <li v-else>
                        <span class="pull-left">Order Total</span>
                        <p class="main_total">₦0</p>
                      </li>

                    </ul>
                    <button type="submit" class="food-btn">
                      <span>Checkout</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Shop Cart Page Section ending here -->
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

export default {
  mounted() {},
  components: {
    topHeader,
    Bottomfooter
  },
  data: {
    name: "Full name"
  }, 
  computed: {
         cart_items(){
    return this.$store.state.cart;
    },
     cartTotalPrice(){
        return this.$store.getters.cartTotalPrice;
    }
  },
  methods:{
    removeProductFromCart(product){
      this.$store.dispatch("removeProductFromCart", product);
    }
  }
};
</script>

<style>
  .p-thumb>a>img {
    width: 85px;
}
.shop-cart.padding-tb {
    margin-top: 60px;
}
a.delete_item {
    border-radius: 3px;
    background-color: #ff304f;
    color: #fff;
    text-align: center;
    padding: 5px 14px;
}
.carts_table{
  width: 100%;
}
ul.cart_total>li>span {
    font-weight: 600;
}
ul.cart_total>li>p {
    font-weight: 900;
    color: #333333;
}
.main_total{
  color:#2a9da2;
}
a.cart_product_name {
    color: #333333;
    font-weight: 700;
}
</style>
