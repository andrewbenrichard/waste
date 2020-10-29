<template>
  <div class="vendor__holder">
    <topHeader pageTitle="Become a Vendor | " />

    <!-- Breadcroumb Area -->

    <div class="breadcroumb-area bread-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcroumb-title text-center">
              <h1>Become a Vendor </h1>
              <h6>
                <router-link to="/">Home</router-link>/ Become a Vendor 
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- vendors auth Area-->

<div class="container">
  <div class="row">
    <div class="col-md-6">
      <h4 class="header__">Login as Vendor </h4>
      <div class="form_section">
        <form action="" method="post">
            <div class="form-group">
                    <label for="email">Email address<span class="required_mark">*</span></label>
                    <input type="email" required class="form-control" id="email"  placeholder="Email address">
                  </div>
                    <div class="form-group">
                    <label for="password">Password<span class="required_mark">*</span></label>
                    <input autocomplete="new-password" type="password" required class="form-control" id="password"  placeholder="Password">
                  </div>
                  <button  type="submit" class="food-btn">
                      <span>Login to vendor</span>
                    </button>
        </form>
      </div>
    </div>
    <div class="col-md-6">
            <h4 class="header__">Create a vendor account</h4>
            <div class="form_section">
              <form action="" method="post">
                  <div class="form-group">
                    <label for="fullname">Full Name <span class="required_mark">*</span></label>
                    <input type="text" required class="form-control" id="fullname"  placeholder="Full Name">
                  </div>
                  <div class="form-group">
                    <label for="email-register">Email address<span class="required_mark">*</span></label>
                    <input type="email" required="required" class="form-control" id="email-register"  placeholder="Email address">
                  </div>
                    <div class="form-group">
                    <label for="password-register">Password<span class="required_mark">*</span></label>
                    <input autocomplete="new-password" type="password"  required="required" class="form-control" id="password-register"  placeholder="Password">
                  </div>
                  <button  type="submit" class="food-btn">
                      <span>Register as vendor</span>
                    </button>
              </form>
            </div>
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
  mounted() {},
  components: {
    topHeader,
    Bottomfooter
  }
};
</script>
<style>
  h4.header__ {
    font-weight: 900;
    margin-top: 42px;
}
</style>
