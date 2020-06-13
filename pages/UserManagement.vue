<template>
  <section class="hero is-black is-large">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroB">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroB" class="navbar-menu">
            <div class="navbar-end">
                <a class="button is-primary is-inverted is-medium">
                  User Management
                </a>

              <!-- <a class="navbar-item is-active">Sign Up</a> -->
              <!-- <nuxt-link to="/signup" class="navbar-item is-active">Sign Up</nuxt-link> -->
              <span class="navbar-item">
                <a class="button is-primary is-inverted is-medium">
                  <nuxt-link to="/home">Home</nuxt-link>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <!-- <span
      style="margin:0 auto;margin-top:7%; font: 700 100px Comic Sans MS;color: white;text-shadow: 0 0 20px #fdec84,10px -10px 30px #ffae35,20px -20px 40px #ec760c,-20px -60px 50px #cd4607,0px -80px 60px #973717,10px -40px 70px #451b0e;"
    >Loging Now</span> -->
    <div class="hero-body" style="width:40%; margin:0 auto; margin-top:-10%;">
      <div class="container">

        <!-- <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="text" v-model="credentials.username" placeholder="Username" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div> -->

        <!-- <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" v-model="credentials.password" placeholder="Password" />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>

        <div class="field">
          <p class="control">
            <button class="button is-success" style="margin-left:43%;" @click="handleLoginButton">Login</button>
          </p>
        </div>

        <span
          style="margin:0 auto;margin-top:7%; font: 700 20px Comic Sans MS;color: white;text-shadow: 0 0 20px #fdec84,10px -10px 30px #ffae35,20px -20px 40px #ec760c,-20px -60px 50px #cd4607,0px -80px 60px #973717,10px -40px 70px #451b0e;"
        >
          Don't have a account? Click here to
          <nuxt-link to="/log">Sign Up!</nuxt-link>
        </span> -->

      </div>
    </div>
    <div class="hero-foot"></div>
  </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
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
                    position: 'is-bottom',
                    type: 'is-success'
                })
    },
    danger(message) {
      this.$buefy.toast.open({
                    duration: 3000,
                    message: message,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
    },
    handleLoginButton() {
      console.log("print credenticals");
      console.log(this.credentials);
      this.success("Welcome back");
      // this.$store.dispatch("Login/signin", this.credentials);
      // this.signin(this.credentials).then(res => {
      //   console.log("login success")
      //   this.success("Welcome back");
      // }).catch(err => {
      //   console.log("login error")
      //   this.danger(err);
      // })
    }
  }
}
</script>