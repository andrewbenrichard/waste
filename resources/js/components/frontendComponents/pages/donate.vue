<template>
  <div>
    <topHeader pageTitle="Donate |" />

    <!-- Breadcroumb Area -->

    <div class="breadcroumb-area bread-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcroumb-title text-center">
              <h1>Donate</h1>
              <h6>
                <a href="/">Home</a> / Donate
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Single Cause Area  -->

    <div class="causes-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h6>Donate today</h6>
              <h2>
                Make a positive
                <b>impact</b>
              </h2>
            </div>
          </div>
          <div class="col-lg-8 col-md-12">
            <div class="cause-details">
              <div class="case-2-img">
                <a href="#">
                  <img src="assets/front/img/cause-img-1.jpg" alt />
                </a>
              </div>
              <div class="case-2-texts bg-light-white">
                <div class="contact-form">
                  <div class="row">
                    <div class="col-lg-12" v-show="hiddenForm">
                      <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          id="first-name"
                          v-model="
                                                            form.first_name
                                                        "
                          class="form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>

                    <div class="col-lg-12" v-show="hiddenForm">
                      <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          v-model="form.last_name"
                          class="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <input type="checkbox" @click="hiddenToggle" id="togglelable" />
                        <label for="togglelable">Make an anonymous donation</label>
                        <br />
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="form-group">
                        <input
                          type="text"
                          name="email"
                          class="form-control"
                          v-model="form.email"
                          placeholder="Email"
                          required
                        />
                        <span v-show="!hiddenForm">We won't store your email</span>
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="form-group">
                        <input
                          type="text"
                          name="text"
                          v-show="hiddenForm"
                          class="form-control"
                          v-model="form.number"
                          placeholder="Phone"
                        />
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="form-group">
                        <input
                          type="text"
                          name="amount"
                          id="msg_subject"
                          v-model="form.amount"
                          class="form-control"
                          placeholder="₦10,000.00"
                          required
                        />
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="causes-details-btn">
                        <paystack
                          class="btn btn-green"
                          :amount="
                                                            form.amount + '00'
                                                        "
                          :email="form.email"
                          :paystackkey="
                                                            paystackkey
                                                        "
                          :reference="reference"
                          :callback="callback"
                          :close="close"
                          :embed="false"
                        >
                          <i class="fas fa-money-bill-alt"></i>
                          Donate Now
                          <span></span>
                        </paystack>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="about-content">
              <div class="section-title">
                <h6>A Little Bit About Us</h6>
              </div>

              <p>SAWI is a Non-Governmental and not for profit organization with specific focus on Sustainable Management of WASTE in Africa. Waste is a global phenomenal which requires scientific approach with effective government policy to be able to efficiently harness its opportunity and avoid its threat. Efficient handling of waste helps in combating global warming, pollution, and improper sanitation, promote healthy living and balanced ecosystem.</p>
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
          <div class="col-lg-6 col-md-5">
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
import paystack from "vue-paystack";

export default {
  mounted() {
    console.log("Donate mounted.");
  },
  components: {
    topHeader,
    Bottomfooter,
    paystack
  },
  data() {
    return {
      paystackkey: "pk_test_9cf8f7877b460aa72b3521126e2a5e20dbdbe7e2", //paystack public key
      form: new Form({
        first_name: "",
        last_name: "",
        email: "",
        number: "",
        amount: "",
        message: ""
      }),
      hiddenForm: true
    };
  },
  computed: {
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
  },
  methods: {
    callback: function(response) {
      console.log(response);
      this.saveDonation();
    },
    close: function() {
      console.log("Payment closed");
    },
    hiddenToggle() {
      console.log("demo clicked false");
      if (this.hiddenForm == true) {
        console.log("demo clicked false");
        this.hiddenForm = false;
      } else if (this.hiddenForm == false) {
        console.log("demo clicked true");
        this.hiddenForm = true;
      }
    },
    saveDonation() {
      console.log("form donation clicked");
      this.form
        .post("/api/sc_admin/post/donation")
        .then(() => {
          this.$router.replace({
            name: "thanks"
          });
        })
        .catch(() => {});
    }
  },
  created() {}
};
</script>
