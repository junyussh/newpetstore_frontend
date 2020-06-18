<template>
<section class="section">
    <section class="hero">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">{{ this.supplier.name }}</h1>
                <h2 class="subtitle">{{ supplier.city }} {{ supplier.city ? ", "+supplier.state : supplier.state}}</h2>
            </div>
        </div>
    </section>
    <div class="columns">
        <div class="column">
            <div class="columns">
                <!-- {{products[0].name}}
                {{products[0].description}} -->
                <ProductCard v-for="(product, index) in products" :key="index" :name="product.name" :description="product.description" :supplier="product.supplierId" :id="product.id" />
                <!-- <SupplierCard
                    :key="index"
                    :name="product.name"
                    :city="product.description"
                    :id="product.id"
                /> -->
                <!-- <ItemCard v-bind:title="product.name" v-bind:supplier="product.description" image="https://source.unsplash.com/WLUHO9A_xik/1600x900"></ItemCard> -->
            </div>
            <button @click="ontest">test</button>
        </div>
    </div>
</section>
</template>

<script>
import ProductCard from "@/components/ProductCard";
export default {
    layout: "dashboard",
    components: {
        ProductCard,
    },
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
                    supplierId: this.$route.params.id
                }
            });
            // console.log("already complete");
            // console.log(this.products)
        }
    },
    async asyncData({
        route,
        params,
        $axios
    }) {
        console.log(route.params.id);
        return $axios
            .$get("/suppliers/" + route.params.id)
            .then(res => {
                console.log(res);
                return {
                    supplier: res
                };
            })
            .catch(e => {
                console.log(e);
                return {
                    error: e
                };
            });
    },
    methods: {
        ontest() {
            console.log(this.products)
        }
    }
};
</script>
