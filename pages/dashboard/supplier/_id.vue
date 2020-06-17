<template>
    <section class="section">
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">{{ this.supplier.name }}</h1>
                    <h2
                        class="subtitle"
                    >{{ supplier.city }} {{ supplier.city ? ", "+supplier.state : supplier.state}}</h2>
                </div>
            </div>
        </section>
        <div class="columns">
            <div class="column"></div>
            <div class="column"></div>
        </div>
    </section>
</template>
<script>
export default {
    layout: "dashboard",
    data() {
        return {
            supplier: {},
            error: null,
            products: []
        };
    },
    async mounted() {
        if (this.error) {
            this.$buefy.toast.open({
                message: "something get errors",
                type: "is-danger"
            });
        } else {
            this.products = await this.$axios.$get("/products/all", {
                params: {
                    supplier: this.$route.params.id
                }
            });
        }
    },
    async asyncData({ route, params, $axios }) {
        console.log(route.params.id);
        return $axios
            .$get("/suppliers/" + route.params.id)
            .then(res => {
                console.log(res);
                return { supplier: res };
            })
            .catch(e => {
                console.log(e);
                return { error: e };
            });
    }
};
</script>