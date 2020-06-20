<template>
<section class="section">
    <div style="margin:auto">
        <div><h1 class="title" style="margin:auto">SpringProject Code by Chunyu,Aczy156 and Afun.</h1></div>
        <br>
        <br>
        <div><h2 class="title" style="margin:auto">普通用户请往左<nuxt-link to="/explore">------></nuxt-link></h2></div>
        <br>
        <br>
        <div><h2 class="title" style="margin:auto"><nuxt-link to="/dashboard/supplier"><------</nuxt-link>商家用户请往右</h2></div>
    </div>    
         <!-- <div class="column">
            <div class="columns">
                <ItemCard v-for="(item, index) in items" 
                :key="index" 
                :title="item.attribute" 
                :supplier="item.supplierId" 
                :productId="item.productId" />
            </div>
        </div> -->
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
