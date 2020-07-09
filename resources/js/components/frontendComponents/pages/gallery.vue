<template>
  <div class="about__holder">
    <topHeader pageTitle="Gallery | " />

    <!-- Breadcroumb Area -->

    <div class="breadcroumb-area bread-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcroumb-title text-center">
              <h1>Gallery</h1>
              <h6>
                <a to="/">Home</a> / Gallery
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Portfolio Area-->

    <div class="portfolio-area section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h6>Our Great Work</h6>
              <h2>
                We do
                <b>social</b> work
                <br />By reducing waste
              </h2>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
            <div class="portfolio-list">
              <div
                class="single-portfolio-item large design illustration"
                style="background-image: url(assets/front/img/IMG_4922.jpg);"
              >
                <div class="details">
                  <div class="info">
                    <h5>
                      <a href="#">Waste Management Event</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div
                class="single-portfolio-item port-bg-2 illustration brand"
                style="background-image: url(assets/front/img/gallery1.jpg);"
              >
                <div class="details">
                  <div class="info">
                    <h5>
                      <a href="#">Social Waste Removal</a>
                    </h5>
                    <a target="_blank" href="assets/img/port-bg-1.jpg">
                      <i class="las la-search-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="single-portfolio-item port-bg-3 design print"
                style="background-image: url(assets/front/img/gallery2.jpg);"
              >
                <div class="details">
                  <div class="info">
                    <h5>
                      <a href="#">Social Waste Removal</a>
                    </h5>
                    <a target="_blank" href="assets/img/port-bg-3.jpg">
                      <i class="las la-search-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="single-portfolio-item wide port-bg-4 illustration print brand"
                style="background-image: url(assets/front/img/gallery3.jpg);"
              >
                <div class="details">
                  <div class="info">
                    <h5>
                      <a href="#">Social Waste Removal</a>
                    </h5>
                    <a target="_blank" href="assets/img/port-bg-4.jpg">
                      <i class="las la-search-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="single-portfolio-item wide port-bg-5 design brand"
                style="background-image: url(assets/front/img/gallery4.jpg);"
              >
                <div class="details">
                  <div class="info">
                    <h5>
                      <a href="#">Social Waste Removal</a>
                    </h5>
                    <a target="_blank" href="assets/img/port-bg-5.jpg">
                      <i class="las la-search-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="single-portfolio-item port-bg-6 print"
                style="background-image: url(assets/front/img/gallery5.jpg);"
              >
                <div class="details">
                  <div class="info">
                    <h5>
                      <a href="#">Social Waste Removal</a>
                    </h5>
                    <a target="_blank" href="assets/img/port-bg-6.jpg">
                      <i class="las la-search-plus"></i>
                    </a>
                  </div>
                </div>
              </div>
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
