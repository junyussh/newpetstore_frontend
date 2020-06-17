<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <!-- <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
        >-->
        <b-icon class="is-bold" pack="fas" icon="cat" size="is-medium"></b-icon>
        <span>Petstore</span>
      </b-navbar-item>
    </template>
    <template slot="start">
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <nuxt-link to="/signup" class="button is-primary">
            <strong>Sign up</strong>
          </nuxt-link>
          <nuxt-link to="/login" class="button is-light">Log in</nuxt-link>
          <nuxt-link to="/explore" class="button is-light">Explore</nuxt-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
