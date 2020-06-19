<template>
  <div>
    <Navbar />
    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          General
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>
      
      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  middleware: 'auth',
  components: {
    Navbar
  },
  data () {
    return {
      userinfo: '',
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { path: '/dashboard/' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { path: '/dashboard/inspire' }
        },
        {
          title: 'Supplier',
          icon: 'store',
          to: { path: '/dashboard/supplier' }
        },
        {
          title: 'Setting',
          icon: 'cogs',
          to: { path: '/dashboard/updateinfo'}
        }
      ]
    }
  },
  mounted: function() {
    // var userinfo = localStorage.getItem('userinfo'),
    this.userinfo = this.$store.state.Login.info,
    console.log('test in dashboard ' + this.$data.userinfo)
  }
}
</script>

