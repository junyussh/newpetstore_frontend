<template>
<section class="section">
    <b-navbar>
        <template slot="start">
            <b-navbar-item tag="div">
                <b-button tag="router-link" :to="{ path: '/dashboard/product/'+this.item.productId }" type="is-primary" outlined>
                    <b-icon pack="fas" icon="chevron-left"></b-icon>
                    <span>Go back</span>
                </b-button>
            </b-navbar-item>
        </template>

    </b-navbar>
    <section class="hero">
        <div class="hero-body">
            <div class="container">
                <p class="title">Update Item</p>
                <p class="subtitle">{{item.id}} information update</p>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <b-field label="unitprice">
                <b-input name="unitprice" v-model="form.unitprice" :placeholder="item.unitprice"></b-input>
            </b-field>

            <b-field label="unitcost">
                <b-input name="unitcost" v-model="form.unitcost" :placeholder="item.unitcost"></b-input>
            </b-field>

            <b-field label="quantity">
                <b-input name="quantity" v-model="form.quantity" :placeholder="item.quantity"></b-input>
            </b-field>

            <b-field label="attribute">
                <b-input name="attribute" v-model="form.attribute" :placeholder="item.attribute"></b-input>
            </b-field>

            <b-field>
                <b-button @click="handleSignupBtn" expanded rounded>update Info</b-button>
            </b-field>
        </div>
    </section>
</section>
</template>

<script>
import {
    mapState
} from "vuex";
import ItemCard from "@/components/ItemCard";
import SellerItemCard from "@/components/SellerItemCard";
export default {
    layout: "dashboard",
    components: {

    },
    data() {
        return {
            item: {},
            form: {
                unitprice: "",
                unitcost: "",
                quantity: "",
                attribute: ""
            }
        };
    },
    computed: mapState({
        info: state => state.Login.info
    }),
    async mounted() {
        if (this.error) {
            this.$buefy.toast.open({
                message: "something get errors",
                type: "is-danger"
            });
        } else {
            this.item = await this.$axios.$get("/items/" + this.$route.params.id);

        }
        this.item = await this.$axios.$get("/items/" + this.$route.params.id);
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
