<template>
<section class="section">
    <section class="hero">
        <div class="hero-body">
            <div class="container">
                {{item.productId}}
                {{item.quantity}}
                <!-- <h1 class="title">{{ this.product }}</h1>
                <h2 class="subtitle">{{ product.description }} {{ product.description ? ", "+product.id : product.id}}</h2> -->
            </div>
        </div>
    </section>
    <div class="columns">
        <div class="column">
            <div class="columns"></div>
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

    },
    data() {
        return {
            item: {}
        };
    },
    async mounted() {
        if (this.error) {
            this.$buefy.toast.open({
                message: "something get errors",
                type: "is-danger"
            });
        } else {
            this.item = await this.$axios.$get("/items/", {
                param: {
                    itemId: this.$route.params.id
                }
            });

        }
        this.item = await this.$axios.$get("/items/", {
            params: {
                itemId: this.$route.params.id
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
