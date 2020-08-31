<template>
  <div class="header___sk_shop">
    <!-- Header Top Area -->
    <title>{{pageTitle}} Sustainable Africa Waste Initiative</title>
    <div class="header-top-area absolate-header">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <ul>
              <li>
                <a href="tel://+2348117088281">
                  <i class="fa fa-map-marker"></i> Call us
                  +234 811 708 8281.
                </a>
              </li>
              <li>
                <a href="mailto:info@sawi-env.org">
                  <i class="fa fa-envelope"></i>
                  info@sawi-env.org
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 text-right">
            <div class="social-icon">
              <a href="#">
                <i class="lab la-facebook-f"></i>
              </a>

              <a href="#">
                <i class="lab la-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Header Area -->

    <div class="header-area absolate-header theme-3">
      <div class="sticky-area">
        <div class="container">
          <div class="navigation">
            <div class="row">
              <div class="col-lg-2">
                <div class="logo">
                  <router-link class="navbar-brand" to="/">
                    <img src="public/assets/front/img/main-logo.png" alt />
                  </router-link>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="main-menu">
                  <nav class="navbar navbar-expand-lg">
                    <button
                      class="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span class="navbar-toggler-icon"></span>
                      <span class="navbar-toggler-icon"></span>
                      <span class="navbar-toggler-icon"></span>
                    </button>

                    <div
                      class="collapse navbar-collapse justify-content-center"
                      id="navbarSupportedContent"
                    >
                      <ul class="navbar-nav m-auto">
                        <li class="nav-item active">
                          <router-link class="nav-link active" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" index="0" to="/about-us">About us +</router-link>
                          <ul class="sub-menu">
                            <li>
                              <router-link to="blog">News/Media</router-link>
                            </li>
                            <li>
                              <router-link to="/infographics">Infographics</router-link>
                            </li>
                          </ul>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="/gallery">Gallery</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/events" class="nav-link">Events</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/actions" class="nav-link" >Actions</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/shop" class="nav-link" >Shop</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="/contact">Contact</router-link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div class="col-lg-2 text-right">
                <div class="header-right-content">
                  <router-link to="/donate" class="main-btn">Donate Now</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Hero Area -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    pageTitle: {
      type: String
    }
  },
  mounted() {
    console.log("header mounted.");
  },
  data: () => ({
    activeItem: 0
  }),
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user"
    })
  },
  methods: {
    ...mapActions({
      signOutAction: "auth/signOut"
    }),
    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: "home"
        });
      });
    }
  }
};
</script>
