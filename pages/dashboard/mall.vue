<template>
<section class="section">
    <div class="columns is-mobile">
         <div class="column">
            <div class="columns">
                <ItemCard v-for="(item, index) in items" 
                :key="index" 
                :title="item.attribute" 
                :supplier="item.supplierId" 
                :productId="item.productId" />
            </div>
        </div>
    </div>
</section>
</template>

<script>
import Card from '~/components/Card';
import Cart from '~/components/Cart';
import ItemCard from "@/components/ItemCard";
export default {
    name: 'HomePage',
    layout: "dashboard",
    data() {
        return {
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
            this.items = await this.$axios.$get("/items/all");
        }
        this.items = await this.$axios.$get("/items/all");
    },

    components: {
        Card,
        Cart,
        ItemCard
    },
    methods: {
        ontest() {
            console.log("is testing");
            console.log(this.$store.state.Login.info);
        }
    }
}
</script>
