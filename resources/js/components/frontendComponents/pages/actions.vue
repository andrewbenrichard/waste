<template>
  <div class="about__holder">
    <topHeader pageTitle="Actions | " />

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

    <div class="portfolio-area section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h6>Become a volunteer</h6>
              <h2>
                Join us reduce
                <b>waste</b>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="contact-form">
              <form name="contact-form" id="contactForm" action="#" method="POST">
                <input
                  type="text"
                  name="name"
                  v-model="full_name"
                  :placeholder="[[name]]"
                  id="name"
                  required
                />
                <input type="email" name="email" id="email" required placeholder="Your E-mail" />
                <input type="text" name="subject" id="subject" placeholder="Subject" />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  required
                  placeholder="How can help you?"
                ></textarea>
                <button type="submit" name="submit">Send Message</button>
              </form>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <img src="/public//public/assets/front/img/gallery1.jpg" alt />
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
import topHeader from "./layouts/header.vue";
import Bottomfooter from "./layouts/footer.vue";

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
