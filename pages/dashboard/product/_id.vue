<template>
<section class="section">
    <b-navbar>
        <template slot="start">
            <b-navbar-item tag="div">
                <b-button tag="router-link" :to="{ path: '/dashboard/supplier/'+this.product.supplierId }" type="is-primary" outlined>
                    <b-icon pack="fas" icon="chevron-left"></b-icon>
                    <span>Go back</span>
                </b-button>
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <button class="button is-primary" @click="newItemModal">
                    <b-icon pack="fas" icon="plus"></b-icon>
                    <span>New Item</span>
                </button>
            </b-navbar-item>
        </template>
    </b-navbar>
    <section class="hero">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">{{ this.product.id }}</h1>
                <h2 class="subtitle">{{ this.product.description }} {{ this.product.description ? ", "+product.id : product.id}}</h2>
            </div>
        </div>
    </section>
    <div class="columns">
        <div class="column">
            <div class="columns">
                <SellerItemCard v-for="(item, index) in items" :key="index" :id="item.id" :attribute="product.attribute" :productId="product.productId" :supplierId="product.supplierId" />
            </div>
        </div>
        <b-modal :active.sync="isComponentModalActive" has-modal-card trap-focus :destroy-on-hide="false" aria-role="dialog" aria-modal>
            <newItem :product=product @reload="reloadItems"></newItem>
        </b-modal>
    </div>
</section>
</template>

<script>
import ItemCard from "@/components/ItemCard";
import SellerItemCard from "@/components/SellerItemCard";
import newItem from "@/components/form/newItem"
export default {
    layout: "dashboard",
    components: {
        ItemCard,
        SellerItemCard,
        newItem
    },
    data() {
        return {
            product: {},
            error: null,
            items: [],
            isComponentModalActive: false,
            isLoading: false,
        };
    },
    async mounted() {
        if (this.error) {
            this.$buefy.toast.open({
                message: "something get errors",
                type: "is-danger"
            });
        } else {
            this.items = await this.getItems();
            this.product = await this.getproduct();
        }
    },
    async asyncData({
        route,
        params,
        $axios
    }) {
        console.log(route.params.id);
        return $axios
            .$get("/products/" + route.params.id)
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
        newItemModal() {
            this.isComponentModalActive = true;
        },
        async reloadItems() {
            this.isLoading = true;
            this.items = await this.getItems();
            this.isLoading = false;
            this.isComponentModalActive = false;
        },
        getItems() {
            return this.$axios.$get("/items/all", {
                params: {
                    productId: this.$route.params.id
                }
            });
        },
        getproduct() {
            return this.$axios.$get("/products/" + this.$route.params.id)
        }
    }
};
</script>
