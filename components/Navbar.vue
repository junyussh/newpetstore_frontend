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
            <b-navbar-item tag="router-link" :to="{ path: '/explore' }">
                <span>Explore</span>
            </b-navbar-item>
        </template>
        <template slot="start"></template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons" v-if="!$store.state.Login.signed">
                    <nuxt-link to="/signup" class="button is-primary">
                        <strong>Sign up</strong>
                    </nuxt-link>
                    <nuxt-link to="/login" class="button is-light">Log in</nuxt-link>
                    <nuxt-link to="/explore" class="button is-light">Explore</nuxt-link>
                </div>
                <b-dropdown
                    v-else
                    v-model="navigation"
                    position="is-bottom-left"
                    append-to-body
                    aria-role="menu"
                >
                    <a class="navbar-item" slot="trigger" role="button">
                        <b-icon pack="fas" icon="user"></b-icon>
                        <span>{{ info.firstName }}</span>
                        <b-icon pack="fas" icon="sort-down"></b-icon>
                    </a>

                    <b-dropdown-item custom aria-role="menuitem">
                        Logged as
                        <b>{{ info.username }}</b>
                    </b-dropdown-item>
                    <hr class="dropdown-divider" aria-role="menuitem" />
                    <b-dropdown-item
                        class="has-link"
                        tag="router-link"
                        value="dashboard"
                        aria-role="menuitem"
                    >
                        <nuxt-link tag="div" :to="{ path: '/dashboard'}">
                            <b-icon pack="fas" icon="tachometer-alt"></b-icon> Dashboard
                        </nuxt-link>
                    </b-dropdown-item>
                    <b-dropdown-item value="supplier" aria-role="menuitem">
                        <nuxt-link tag="div" :to="{ path: '/dashboard/supplier'}">
                            <b-icon pack="fas" icon="store"></b-icon> Suppliers
                        </nuxt-link>
                    </b-dropdown-item>
                    <b-dropdown-item value="orders" aria-role="menuitem">
                        <nuxt-link tag="div" :to="{ path: '/dashboard/orders'}">
                            <b-icon pack="fas" icon="ticket-alt"></b-icon> Orders
                        </nuxt-link>
                    </b-dropdown-item>
                    <b-dropdown-item value="cart" aria-role="menuitem">
                        <b-icon pack="fas" icon="shopping-cart"></b-icon> Cart
                    </b-dropdown-item>
                    <hr class="dropdown-divider" aria-role="menuitem" />
                    <b-dropdown-item value="settings">
                        <nuxt-link tag="div" :to="{ path: '/dashboard/setting'}">
                            <b-icon pack="fas" icon="cogs"></b-icon> Settings
                        </nuxt-link>
                    </b-dropdown-item>
                    <b-dropdown-item value="logout" aria-role="menuitem" @click="logoutHandler">
                        <b-icon pack="fas" icon="sign-out-alt"></b-icon> Logout
                    </b-dropdown-item>
                </b-dropdown>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
    computed: mapState({
        info: state => state.Login.info,
        signed: state => state.Login.signed
    }),
    methods: {
        ...mapActions({
            setInfo: "Login/setInfo",
            setToken: "Login/setToken",
            logout: "Login/logout"
        }),
        logoutHandler() {
            console.log("logout");
            this.logout();
            this.$router.push("/login");
            this.$buefy.toast.open({
                duration: 2000,
                message: `You've been logout.`,
                position: "is-bottom",
                type: "is-success"
            });
        }
    }
};
</script>