<template>
  <div>
    <topHeader pageTitle="Events | " />

    <!-- Breadcroumb Area -->

    <div class="breadcroumb-area bread-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcroumb-title text-center">
              <h1>{{event.event_name}}</h1>
              <h6>
                <a href="/">Home</a>
                / {{event.event_name}}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="event-area section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-md-12">
            <div class="event-details">
              <img src="assets/img/event-bg-3.jpg" alt />
              <p class="event-date">
                <i class="las la-calendar-check"></i>
                {{event.event_date}}
              </p>
              <h6>Theme: {{event.event_theme}}</h6>
              <p class="event-meta">
                <i class="las la-clock"></i>
                <span>
                  {{event.event_time}} |
                  <i class="las la-map-marker"></i>
                </span>
                <span>{{event.event_location}}</span>
              </p>
              <div v-html="event.event_des" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4" v-for="(item, index) in galleries" :key="index">
            <img :src="'/uploads/'+item.gallery_name" />
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
  data() {
    return {
      event: {},
      galleries: {}
    };
  },
  components: {
    topHeader,
    Bottomfooter
  },
  props: ["events"],
  methods: {
    loadEvent() {
      axios
        .get("/api/sc_front/single/event/" + this.$route.params.slug)
        .then(({ data }) => (this.event = data));
    },
    loadEventGallery() {
      axios
        .get("/api/sc_front/events/gallery/" + this.$route.params.slug)
        .then(({ data }) => (this.galleries = data));
    }
  },
  created() {
    this.loadEvent();
    this.loadEventGallery();
  }
};
</script>