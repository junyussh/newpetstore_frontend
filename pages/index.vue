<template>
  <section class="hero is-fullheight-with-navbar is-black">
    <div class="hero-head">
      <!-- <nav class="navbar">
        <div class="container"> -->
          <!-- <div class="navbar-brand">
            <a class="navbar-item">
              <img
                src="https://cdn.jsdelivr.net/gh/vmlite/s/bulma/images/bulma-type-white.png"
                alt="Logo"
              />
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div> -->
          <!-- <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end"> -->
              <!-- <a class="navbar-item is-active">Home</a>
              <a class="navbar-item">Documentation</a>-->
              <!-- <span class="navbar-item">
                <a class="button is-primary is-inverted is-medium">
                  <nuxt-link to="/login">Log In</nuxt-link>
                </a>
              </span> -->
              <!-- <span class="navbar-item">
                <a class="button is-primary is-inverted is-medium">
                  <nuxt-link to="/signup">Sign Up</nuxt-link>
                </a>
              </span> -->
            <!-- </div>
          </div> -->
        <!-- </div>
      </nav> -->
    </div>
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title is-size-1">
              Novel Petstore
              <br />is coming up!
            </h1>
            <p>JPetstore UI will be updated.</p>
            <div class="buttons" style="margin-top: 1em">
              <a class="button is-link is-medium">
                <nuxt-link to="/login">Get Started</nuxt-link>
              </a>
            </div>
          </div>
          <div class="column">
            <span  style="font: 700 100px Comic Sans MS;color: white;text-shadow: 0 0 20px #fdec84,10px -10px 30px #ffae35,20px -20px 40px #ec760c,-20px -60px 50px #cd4607,0px -80px 60px #973717,10px -40px 70px #451b0e;">Welcome JPetstore</span>
            <!-- <img src="~/assets/buefy.png" width="500" height="500" alt srcset /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="hero-foot"></div>
  </section>
</template>

<script>
import Card from "~/components/Card";

export default {
  name: "HomePage",

  components: {
    Card
  }
};
</script>


