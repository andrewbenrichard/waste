<template>
  <div class="header___sk_shop">
    <!-- Header Top Area -->

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
                  <a class="navbar-brand" href="#">
                    <img src="public/assets/front/img/main-logo.png" alt />
                  </a>
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
                          <a class="nav-link active" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">About us +</a>
                          <ul class="sub-menu">
                            <li>
                              <a href="#">News/Media</a>
                            </li>
                            <li>
                              <a href="#">Infographics</a>
                            </li>
                          </ul>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link">Gallery</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link">Events</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Volunteer</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div class="col-lg-2 text-right">
                <div class="header-right-content">
                  <a href="#" class="main-btn">Donate Now</a>
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
