<template>
<section class="section">
    <section class="hero">
        <div class="hero-body">
            ItemList
            <!-- <div class="container">
                <h1 class="title">{{ this.Product.name }}</h1>
                <h2 class="subtitle">{{ Product.city }} {{ Product.city ? ", "+Product.state : Product.state}}</h2>
            </div> -->
        </div>
    </section>
    <div class="columns">
        <div class="column">
            <div class="columns">
                item
                <!-- {{products[0].name}}
                {{products[0].description}} -->
                <!-- <ProductCard v-for="(product, index) in products"
                    :key="index"
                    :name="product.name"
                    :description="product.description"
                    :Product="product.ProductId"
                    :id="product.id"
                /> -->
                <!-- <ProductCard
                    :key="index"
                    :name="product.name"
                    :city="product.description"
                    :id="product.id"
                /> -->
                <!-- <ItemCard v-bind:title="product.name" v-bind:Product="product.description" image="https://source.unsplash.com/WLUHO9A_xik/1600x900"></ItemCard> -->
            </div>
            
        </div>
        <div class="column"></div>
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
            product: {},
            error: null,
            items: []
        };
    },
    async mounted() {
        // if (this.error) {
        //     this.$buefy.toast.open({
        //         message: "something get errors",
        //         type: "is-danger"
        //     });
        // } else {
        //     this.items = await this.$axios.$get("/items/all", {
        //         params: {
        //             product: this.$route.params.id
        //         }
        //     });
        //     console.log("already complete");
        //     console.log(this.items)
        // }
        // console.log("output");
    },
    async asyncData({
        route,
        params,
        $axios
    }) {
        console.log(route.params.id);
        return $axios
            .$get("/items/" + route.params.id)
            .then(res => {
                console.log(res);
                return {
                    product: res
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
        ontest(){
            console.log(this.items)
        }
    }
};
</script>
