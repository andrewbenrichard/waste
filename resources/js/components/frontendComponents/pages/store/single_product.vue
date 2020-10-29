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
              
            <img :src="'/products/'+product.product_main_img" alt=""/>
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
             <button class="single_add_cart" @click="orderModal"> Order</button>
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

<div v-if="!user"
      class="modal fade"
      id="orderModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"> order {{product.product_name}} for ₦{{product.product_price}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
           <div class="modal-body">
              <div class="shiping-box">
               <div class="calculate-shiping">
                    <h4>Shipping</h4>
                    <div class="row">
                     
                            <div class="form-group col-md-6">
                            <label for="fullname">
                                Fullname
                                <span class="required_mark">*</span>
                              </label>
                            <input v-model="form.full_name" type="text" name="full_name" required class="form-control" id="fullname"  placeholder="Fullname Name">
                          </div>



                            <div class="form-group col-md-6">
                            <label for="number">Phone Number<span class="required_mark">*</span></label>
                            <input type="text" required v-model="form.number" name="number" class="form-control" id="number"  placeholder="Phone Number">
                          </div>
                          <div class="form-group col-md-6">
                            <label for="address">Address <span class="required_mark">*</span></label>
                            <input type="text" required v-model="form.address"  name="address" class="form-control" id="address" aria-describedby="addressHelp" placeholder="Enter address">
                            <small id="addressHelp" class="form-text text-muted">Enter your address where the item would be delivered.</small>
                          </div>                           
                            
                            <div class="form-group col-md-6">
                            <label for="email">Email <span class="required_mark">*</span></label>
                            <input type="text" v-model="form.email" name="email" required class="form-control" id="email"  placeholder="Email">
                          </div>
                  
                     

                    <div class="outline-select col-md-12">
                       <div class="causes-details-btn">
                      <paystack
                          class="btn btn-green"
                          :amount="
                                                            product.product_price + '00'
                                                        "
                          :email="form.email"
                          :paystackkey="
                                                            paystackkey
                                                        "
                          :reference="reference"
                          :callback="callback"
                          :close="close"
                          :embed="false"
                        >
                          <i class="fas fa-money-bill-alt"></i>
                         Order Product
                          <span></span>
                        </paystack>
                    </div>
                    </div>
                   

                    </div>
                   
                  
                    
                  </div>
            </div>

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
.modal-content {
    width: 650px;
}
button.payButton.btn.btn-green {
    background: #2a9da2;
    color: #fff;
    padding: 11px 27px;
    margin: 25px 0;
    letter-spacing: 1px;
}
 </style>
<script>
import { mapGetters, mapActions } from "vuex";
import topHeader from "../layouts/header.vue";
import Bottomfooter from "../layouts/footer.vue";
import RelatedProduct from "./widgets/_product.vue";
import paystack from "vue-paystack";

export default {
  mounted() {
     this.$route.params;
    this.$store.dispatch("getProduct", this.$route.params.slug);
   
  },
  components: {
    topHeader,
    Bottomfooter,
    RelatedProduct,
    paystack
  },
  data() {
    return {
      productData: {},
       paystackkey: "pk_test_9cf8f7877b460aa72b3521126e2a5e20dbdbe7e2", //paystack public key
      form: new Form({
        full_name: "",
        address: "",
        email: "",
        number: "",
        amount: "",
        product_id: ""
      }),
      savingBtn: false
    }
  },
   computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      
    }),
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
  },
    methods:{
       ...mapActions({
      signIn: "auth/signIn"
    }),
    callback: function(response) {
      console.log(response);
      this.saveOrder();
    },
    close: function() {
      console.log("Payment closed");
    },
   
    saveOrder() {
      console.log("form payment entered");
      this.form
        .post("/api/sc_front/post/order")
        .then(() => {
          window.location.href = "/myorders/"+this.form.email;
        })
        .catch(() => {});
    },
    orderModal() {
      $("#orderModal").modal("show");
    },
    },
  computed: {
    product(){
    return this.$store.state.product;
    },
    products(){
    return this.$store.state.products;
    },
    user(){
    return this.$store.state.auth.user;
    },
     
     dataproduct:function(){
            this.form.product_id = this.$store.state.product.id;
            this.form.amount = this.$store.state.product.product_price;

    },
  },
 

};
</script>

