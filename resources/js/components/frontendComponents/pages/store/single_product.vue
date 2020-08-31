<template>
  <div class="single_product__holder">
    <topHeader pageTitle="product_nam | " />

    <!-- Breadcroumb Area -->

    <div class="breadcroumb-area bread-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcroumb-title text-center">
              <h1>Take Action Agains Waste</h1>
              <h6>
                <a href="/">Home</a> / Actions
              </h6>
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

export default {
  mounted() {},
  components: {
    topHeader,
    Bottomfooter
  },
  data: {
    name: "Full name"
  }
};
</script>
