<template>
  <div class="site-wrapper">
    <topHeader pageTitle="Home | " />

    <!-- Hero Area -->

    <div class="homepage-slides owl-carousel">
      <div class="single-slide-item">
        <div class="hero-area-content">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12 text-center wow fadeInUp animated" data-wow-delay=".2s">
                <div class="section-title">
                  <h1>
                    A cleaner Africa is a
                    <b>Sustainable Africa</b>
                  </h1>
                  <router-link to="about-us" class="main-btn">Learn More</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="single-slide-item hero-area-bg-2">
        <div class="hero-area-content">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12 text-center">
                <div class="section-title">
                  <h1>
                    Reduce - Reuse -
                    <b>Recycle</b>
                  </h1>
                  <router-link to="about-us" class="main-btn">Learn More</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About Area-->

    <div class="about-area section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="about-left">
              <img class="lazy-image loaded" src="assets/front/img/recycle_home.gif" alt />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-content">
              <div class="section-title">
                <h6>A little Bit More</h6>
                <h2>
                  Sustainable Africa Waste
                  <b>Initiative</b>
                </h2>
              </div>

              <p>
                SAWI is a Non-Governmental and not for profit
                organization with specific focus on Sustainable
                Management of WASTE in Africa. Waste is a global
                phenomenal which requires scientific approach
                with effective government policy to be able to
                efficiently harness its opportunity and avoid
                its threat. Efficient handling of waste helps in
                combating global warming, pollution, and
                improper sanitation, promote healthy living and
                balanced ecosystem.
              </p>

              <a href="#" class="main-btn">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About Area-->

    <div class="service-area theme-3 section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="section-title">
              <h6>What we do</h6>
            </div>
            <div class="about-us-bg">
              <div class="pop-up-video"></div>
            </div>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-6 col-md-12">
            <div class="about-us-content-area">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="single-service-item">
                    <i class="flaticon-charity"></i>
                    <h5>Our Vision</h5>
                    <p>
                      We envisioned SAWI to be the go-to
                      organization for capacity building,
                      data exploration and policy guides
                      for waste management and allied
                      fields in Africa … LEARN MORE
                    </p>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="single-service-item">
                    <i class="flaticon-donation-1"></i>
                    <h5>Our Objectives</h5>
                    <p>
                      Develop capacity for Municipal Waste
                      Management in Nigeria through
                      regular Environmental Education and
                      Awareness Programs …
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Events Area -->

    <div class="event-area section-padding">
      <div class="container">
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

    <div class="cta-area theme-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-6 text-center">
            <h2>
              How can you
              <b>help</b>?
            </h2>
            <p>
              Your donation will We Encourage and drive the birth
              OF VIABLE waste industry in Nigeria
            </p>
            <a href="#" class="main-btn">Become a Donor</a>
            <a href="#" class="main-btn btn-2">Become a Volunteer</a>
          </div>
          <div class="col-lg-3"></div>
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
  },
  data() {
    return {
      meals: {},
      testimonials: {},
      articles: {},
      chef: {
        id: "",
        chef_name: "",
        chef_des: "",
        chef_location: "",
        chef_img: ""
      },
      top_article: {
        id: "",
        article_title: "",
        article_body: "",
        article_date: "",
        article_img: ""
      }
    };
  },
  methods: {
    loadMeals() {
      axios.get("/api/sc_front/meals").then(({ data }) => (this.meals = data));
    },
    loadChef() {
      axios.get("/api/sc_front/chef").then(({ data }) => (this.chef = data));
    },
    loadTestimonials() {
      axios
        .get("/api/sc_front/testimonials")
        .then(({ data }) => (this.testimonials = data));
    },
    loadTopArticle() {
      axios
        .get("/api/sc_front/top_article")
        .then(({ data }) => (this.top_article = data));
    },
    loadArticles() {
      axios
        .get("/api/sc_front/articles_mini")
        .then(({ data }) => (this.articles = data));
    }
  },
  created() {
    this.loadMeals();
    this.loadChef();
    this.loadTestimonials();
    this.loadTopArticle();
    this.loadArticles();
    this.$route.params;
  }
};
</script>
