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

    <div class="hero-body">
      <div class="container has-text-centered">
        <span
          style="margin:0 auto;margin-top:7%; font: 700 100px Comic Sans MS;color: white;text-shadow: 0 0 20px #fdec84,10px -10px 30px #ffae35,20px -20px 40px #ec760c,-20px -60px 50px #cd4607,0px -80px 60px #973717,10px -40px 70px #451b0e;"
        >Welcome To JPetstore</span> <br>
        
        <span
          style="margin:0 auto;margin-top:7%; font: 700 20px Comic Sans MS;color: white;text-shadow: 0 0 20px #fdec84,10px -10px 30px #ffae35,20px -20px 40px #ec760c,-20px -60px 50px #cd4607,0px -80px 60px #973717,10px -40px 70px #451b0e;"
        >
          <nuxt-link to="/user">User Management</nuxt-link>
        </span> <br>

        <span
          style="margin:0 auto;margin-top:7%; font: 700 20px Comic Sans MS;color: white;text-shadow: 0 0 20px #fdec84,10px -10px 30px #ffae35,20px -20px 40px #ec760c,-20px -60px 50px #cd4607,0px -80px 60px #973717,10px -40px 70px #451b0e;"
        >
          <nuxt-link to="/commodity">Commodity Management</nuxt-link>
        </span> <br>

        <span
          style="margin:0 auto;margin-top:7%; font: 700 20px Comic Sans MS;color: white;text-shadow: 0 0 20px #fdec84,10px -10px 30px #ffae35,20px -20px 40px #ec760c,-20px -60px 50px #cd4607,0px -80px 60px #973717,10px -40px 70px #451b0e;"
        >
          <nuxt-link to="/order">Order Management</nuxt-link>
        </span> 
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-info">
              <p class="title">cat</p>
              <p class="subtitle">Top tile</p>
            </article>
            <article class="tile is-child notification is-warning">
              <p class="title">...tiles</p>
              <p class="subtitle">Bottom tile</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-primary">
              <p class="title">Bird</p>
              <!-- <p class="subtitle">With an image</p> -->
              <figure class="image is-4by3">
                <img
                  src="http://c.hiphotos.baidu.com/baike/c0%3dbaike150%2c5%2c5%2c150%2c50/sign=274da2402a34349b600b66d7a8837eab/2fdda3cc7cd98d1003894f6b233fb80e7bec900e.jpg"
                />
              </figure>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <p class="title">Cat</p>
            <p class="subtitle">Aligned with the right tile</p>
            <div class="content">
              <!-- Content -->
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-info">
          <div class="content">
            <p class="title">Dog</p>
            <!-- <p class="subtitle">With even more content</p> -->
            <figure class="image is-4by4">
              <img
                src="http://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/242dd42a2834349b64b0bea1c1ea15ce36d3be64.jpg"
              />
            </figure>
            <figure class="image is-4by3">
              <img src="http://pic1.win4000.com/pic/2/4e/c4d61299582.jpg" />
            </figure>
            <div class="content">
              <!-- Content -->
            </div>
          </div>
        </article>
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