<template>
<section class="section">
    <section class="hero">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">{{ this.product }}</h1>
                <h2 class="subtitle">{{ product.description }} {{ product.description ? ", "+product.id : product.id}}</h2>
            </div>
        </div>
    </section>
    <div class="columns">
        <div class="column">
            <div class="columns">
                <SellerItemCard v-for="(item, index) in items" :key="index" :id="item.id" :attribute="product.attribute" :productId="product.productId" :supplierId="product.supplierId" />
            </div>
        </div>
        <div class="column"></div>
    </div>
</section>
</template>

<script>
import ItemCard from "@/components/ItemCard";
import SellerItemCard from "@/components/SellerItemCard";
export default {
    layout: "dashboard",
    components: {
        ItemCard,
        SellerItemCard
    },
    data() {
        return {
            product: {},
            error: null,
            items: []
        };
    },
    async mounted() {
        if (this.error) {
            this.$buefy.toast.open({
                message: "something get errors",
                type: "is-danger"
            });
        } else {
            this.items = await this.$axios.$get("/items/all", {
                params: {
                    productId: this.$route.params.id
                }
            });

        }
        this.items = await this.$axios.$get("/items/all", {
            params: {
                productId: this.$route.params.id
            }
        });
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
        ontest() {
            console.log(this.items)
        }
    }
};
</script>
