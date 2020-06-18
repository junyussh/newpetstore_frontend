<template>
    <section class="section">
        <b-navbar>
            <template slot="end">
                <b-navbar-item tag="div">
                    <button class="button is-primary" @click="newProductModal">
                        <b-icon pack="fas" icon="plus"></b-icon>
                        <span>New Product</span>
                    </button>
                </b-navbar-item>
            </template>
        </b-navbar>
        <div class="container">
            Product and itemList
            <!-- <div v-if="info.role === 'USER'" class="content has-text-grey has-text-centered">
                <p>
                    <b-icon pack="fas" icon="archive" size="is-large"></b-icon>
                </p>
                <p>You are not a seller now, click the button on left-top to create a Product.</p>
            </div>
            <div class="columns" v-else>
                <ProductCard
                    v-for="(Product, index) in Products"
                    :key="index"
                    :name="Product.name"
                    :city="Product.city"
                    :state="Product.state"
                    :id="Product.id"
                />
            </div> -->
        </div>
        <!-- <b-modal
            :active.sync="isComponentModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-modal
        >
            <newProduct @reload="reloadProducts"></newProduct>
        </b-modal> -->
    </section>
</template>
<script>
import { mapState } from "vuex";
import ProductCard from "@/components/ProductCard";
import newProduct from "@/components/form/newProduct";
export default {
    layout: "dashboard",
    components: {
        ProductCard,
        newProduct
    },
    data() {
        return {
            isComponentModalActive: false,
            Products: []
        };
    },
    computed: mapState({
        info: state => state.Login.info
    }),
    async mounted() {
        // if (this.info.role === "SELLER") {
        //     await this.getProducts();
        // }
    },
    methods: {
        newProductModal() {
            this.isComponentModalActive = true;
            //   return this.$axios.$post("/Product", this.form);
        },
        reloadProducts() {
            this.getProducts();
            this.isComponentModalActive = false;
        },
        getProducts() {
            let _this = this;
            this.$axios
                .$get("/Products/")
                .then(res => {
                    _this.Products = res;
                })
                .catch(e => {
                    this.$buefy.toast.open({
                        duration: 3000,
                        message: e,
                        position: "is-bottom",
                        type: "is-danger"
                    });
                });
        }
    }
};
</script>
<style lang="scss">
.card {
    box-shadow: 0 .5em 1em -.125em rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.02);
}
</style>