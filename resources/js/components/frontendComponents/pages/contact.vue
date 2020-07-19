<template>
  <div class="home__holder">
    <topHeader pageTitle="Contact Us " />

    <div class="breadcroumb-area bread-bg-7">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcroumb-title text-center">
              <h1>Contact Us</h1>
              <h6>
                <a href="index.html">Home</a> / Contact
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Area -->

    <div class="contact-section section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="section-title">
              <h6>Contact Us</h6>
              <h2>Find Us Easy Way</h2>
            </div>
            <div>
              <h5>Nigeria Office</h5>
              <div class="contact-detail">
                <p>
                  <i class="las la-mobile"></i>
                  <b>Phone</b>
                  <span>
                    <a href="tel:+2348117088281">+234 811 708 8281</a>
                  </span>
                  <span>
                    <a href="tel:+2348143115711">+234 814 311 5711</a>
                  </span>
                </p>
              </div>

              <div class="contact-detail">
                <p>
                  <i class="las la-map-marker"></i>
                  <b>Address</b>
                  <span>Hatlab Place, Suite 6, 2nd floor, Plot 1952, Sokode Crescent,</span>
                  <span>Wuse Zone 5, Abuja.</span>
                </p>
              </div>

              <div class="contact-detail">
                <p>
                  <i class="las la-envelope"></i>
                  <b>Email</b>
                  <span>
                    <a href="mailto:info@sawi-env.org">info@sawi-env.org</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="contact-form">
              <h3>Get in Touch</h3>
              <form name="contact-form" id="contactForm" action="#" method="POST">
                <label for="name">Full name</label>
                <input type="text" name="name" id="name" required placeholder="User Name" />
                <label for="enail">Email</label>
                <input type="email" name="email" id="email" required placeholder="Your E-mail" />
                <label for="subject">Subject</label>
                <input type="text" name="subject" id="subject" placeholder="Subject" />
                <label for="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  required
                  placeholder="How can we help you?"
                ></textarea>
                <button type="submit" name="submit">Send Message</button>
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
  mounted() {
    console.log("Component mounted.");
  },
  components: {
    topHeader,
    Bottomfooter
  }
};
</script>
