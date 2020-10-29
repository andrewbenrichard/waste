<template>
    <div class="footer">
        <!-- Footer Area -->

        <footer class="footer-area">
            <div class="container">
                <div class="footer-up">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <div class="logo">
                                <a class="navbar-brand" href="#"
                                    ><img src="assets/img/logo-white.png" alt=""
                                /></a>
                            </div>
                            <p>
                                SAWI is a Non-Governmental and not for profit
                                organization with specific focus on Sustainable
                                Management of WASTE in Africa.
                            </p>

                            <div class="contact-info">
                                <h5>Contact Us</h5>
                                <p>
                                    Hatlab Place, Suite 6, 2nd floor,<br />
                                    Plot 1952, Sokode Crescent, <br />
                                    Wuse Zone 5, Abuja.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 com-sm-12">
                            <h5>Useful Links</h5>
                            <ul>
                                <li>
                                    <router-link to="#">Home</router-link>
                                    <router-link to="#">About Us</router-link>
                                    <router-link to="#">Our Events</router-link>
                                    <router-link to="/track-orders">Track orders</router-link>
                                    <router-link to="/vendors">Vendors</router-link>
                                    <router-link to="#">Contact</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12"></div>
                        <div class="col-lg-3 col-md-6">
                            <div class="subscribe-form">
                                <h5>Subscribe</h5>
                                <p>
                                    Get updated on how we are changing the waste
                                    Management sector in Nigeria
                                </p>
                                <form action="#">
                                    <input type="email" placeholder="Email" />
                                    <button>
                                        <i class="fa fa-paper-plane"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <p class="copyright-line">
                                © 2020 SAWI . All rights reserved.
                            </p>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <p class="privacy">
                                Privacy Policy | Terms &amp; Conditions
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <!-- Scroll Top Area -->
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("footer mounted.");
    },
    data() {
        return {
            articles: {}
        };
    },
    methods: {
        // loadArticle() {
        //     axios
        //         .get("/api/sc_admin/articles")
        //         .then(({ data }) => (this.articles = data));
        // }
    },
    created() {
        // this.loadArticle();
        // this.$route.params;
    }
};
</script>
