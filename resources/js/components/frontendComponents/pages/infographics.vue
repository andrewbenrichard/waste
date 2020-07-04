<template>
  <div class="about__holder">
    <topHeader />

    <!-- Breadcroumb Area -->

    <div class="breadcroumb-area bread-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcroumb-title text-center">
              <h1>Infographics</h1>
              <h6>
                <a to="/">Home</a> / Infographics
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Frequently Asked Question -->

    <div class="faq-section section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="section-title">
              <h6>source: UNEP</h6>
            </div>
            <div class="styled-faq">
              <img src="assets/front/img/PLASTIC_infographic_en.jpg" alt />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="question-section">
              <h6>Have any Question?</h6>
              <form action="https://capricorn-theme.net/html/charry/sendemail.php">
                <input type="text" name="name" id="name" required placeholder="Full Name" />
                <input type="email" name="email" id="email" required placeholder="Your E-mail" />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  required
                  placeholder="How can help you?"
                ></textarea>
                <button type="submit" name="submit">Your Question</button>
              </form>
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
          <div class="col-lg-6 col-md-5 wow fadeInUp animated" data-wow-delay=".3s">
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
