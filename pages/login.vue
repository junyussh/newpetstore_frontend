<template>
  <div class="container" style="background-image: url(https://source.unsplash.com/1344x732/?animal?cute);">
  <div  style="margin:0 auto;border-style:outset;width:33%;background-color:rgba(255, 255, 255, 0.5);">
    <section class="hero is-large" style="height:540px">
      <h1 class="title" style="margin:auto">Login Now</h1>
      <div class="hero-body" style="margin:0 auto; margin-top:-22%;">
        <div class="container">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="text"
                v-model="credentials.username"
                placeholder="Username"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                type="password"
                v-model="credentials.password"
                placeholder="Password"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <div class="g-recaptcha" data-sitekey="6LezCeYUAAAAAGFHT6vloDsIiC4IgAIiTjEPIpCy"></div>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button
                class="button is-success"
                style="margin-left:43%;"
                @click="handleLoginButton"
              >Login</button>
            </p>
          </div>
          <span>
            Don't have a account? Click here to
            <nuxt-link to="/signup">Sign Up!</nuxt-link>
          </span>
        </div>
      </div>
      <div class="hero-foot"></div>
    </section>
  </div>
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      credentials: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions({ signin: "Login/signin" }),
    success(message) {
      this.$buefy.toast.open({
        duration: 3000,
        message: message,
        position: "is-bottom",
        type: "is-success"
      });
    },
    danger(message) {
      this.$buefy.toast.open({
        duration: 3000,
        message: message,
        position: "is-bottom",
        type: "is-danger"
      });
    },
    handleLoginButton() {
      console.log(this.credentials);
      this.signin(this.credentials)
        .then(res => {
          this.success("Welcome back");
          this.$router.push("/dashboard");
        })
        .catch(err => {
          this.danger(err);
        });
    }
  }
};
</script>