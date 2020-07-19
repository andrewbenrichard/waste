<template>
  <div>
    <topHeader pageTitle="Events | " />

    <!-- Breadcroumb Area -->

    <div class="breadcroumb-area bread-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcroumb-title text-center">
              <h1>Our Events</h1>
              <h6>
                <a href="/">Home</a> / Events
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Events Area -->

    <!-- <div class="event-area section-padding">
      <div class="container">
        <div class="row">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-bg">
                <div class="section-absolute-bg absolute-bg-1"></div>
                <div class="row">
                  <div class="offset-6 col-lg-6 col-md-6">
                    <div class="single-event">
                      <p class="event-date">
                        <i class="las la-calendar-check"></i>April 28, 2020
                      </p>
                      <h6>Vitamin A Capsule Campaign</h6>
                      <p class="event-meta">
                        <i class="las la-clock"></i>
                        <span>
                          08.00 a.m. |
                          <i class="las la-map-marker"></i>
                        </span>
                        <span>Chelsea Street</span>
                      </p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quis omnis dolor</p>
                      <a href="#">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>-->

    <div class="event-area section-padding">
      <div class="container" v-if="events.length">
        <Events v-bind:events="events" />
      </div>
      <div class="container" v-else>
        <div class="row">
          <div class="col-lg-12 mar-bt-30 text-center">
            <div class="section-title">
              <h2>
                Our
                <b>Events</b>
              </h2>
              <h6>No Events</h6>
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
import topHeader from "./layouts/header.vue";
import Bottomfooter from "./layouts/footer.vue";
import Events from "./widgets/_events.vue";

export default {
  mounted() {},
  data() {
    return {
      events: {}
    };
  },
  components: {
    topHeader,
    Bottomfooter,
    Events
  },
  methods: {
    EventsLoader() {
      axios
        .get("/api/sc_front/events")
        .then(({ data }) => (this.events = data));
    }
  },
  created() {
    this.EventsLoader();
  }
};
</script>
