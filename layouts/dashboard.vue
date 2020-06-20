<template>
<div>
    <Navbar />
    <section class="main-content columns">
        <aside class="column is-2 section">
            <p class="menu-label is-hidden-touch">
                General
            </p>
            <ul class="menu-list">
                <li>
                    <nuxt-link to='/dashboard/' exact-active-class="is-active">
                        <b-icon icon='home' />Home
                    </nuxt-link>
                </li>
                <li v-if="info.role == 'USER'">
                    <nuxt-link to='/dashboard/mall' exact-active-class="is-active">
                        <b-icon icon='lightbulb' />Mall
                    </nuxt-link>
                </li>
                <li v-if="info.role == 'SELLER'">
                    <nuxt-link to='/dashboard/supplier' exact-active-class="is-active">
                        <b-icon icon='store' />Supplier
                    </nuxt-link>
                </li>
                <li v-if="info.role == 'ADMIN'">
                    <nuxt-link to='/dashboard/manage' exact-active-class="is-active">
                        <b-icon icon='store' />Manage
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to='/dashboard/setting' exact-active-class="is-active">
                        <b-icon icon='cogs' />Setting
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
import {
    mapState
} from "vuex";
export default {
    middleware: 'auth',
    components: {
        Navbar
    },
    data() {
        return {
            userinfo: {},
        }
    },
    computed: mapState({
        info: state => state.Login.info
    }),
    async mounted() {
        // var userinfo = localStorage.getItem('userinfo'),
        this.userinfo = this.$store.state.Login.info,
            console.log('test in dashboard ' + this.$data.userinfo)
        console.log(this.info)
    }
}
</script>
