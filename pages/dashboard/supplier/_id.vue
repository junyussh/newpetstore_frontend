<template>
    <section class="section">
        <b-navbar>
            <template slot="start">
                <b-navbar-item tag="div">
                    <b-button
                        tag="router-link"
                        :to="{ path: '/dashboard/supplier' }"
                        type="is-primary"
                        outlined
                    >
                        <b-icon pack="fas" icon="chevron-left"></b-icon>
                        <span>Go back</span>
                    </b-button>
                </b-navbar-item>
            </template>
            <template slot="end">
                <b-navbar-item tag="div">
                    <button class="button is-primary" @click="newProductModal">
                        <b-icon pack="fas" icon="plus"></b-icon>
                        <span>New Product</span>
                    </button>
                </b-navbar-item>
            </template>
        </b-navbar>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">{{ this.supplier.name }}</h1>
                    <h2 class="subtitle">
                        {{ supplier.city }}
                        {{
                            supplier.city
                                ? ", " + supplier.state
                                : supplier.state
                        }}
                        <br />
                        {{ products.length }} Products
                    </h2>
                </div>
            </div>
        </section>
        <div class="container">
            <div v-if="products.length > 0" class="columns is-multiline">
                <ProductCard
                    v-for="(product, index) in products"
                    :key="index"
                    :name="product.name"
                    :description="product.description"
                    :id="product.id"
                    :product="product"
                    @reload="reloadProducts"
                />
            </div>
            <div
                v-else
                class="content has-text-grey has-text-centered"
            >
                <p>
                    <b-icon pack="fas" icon="archive" size="is-large"></b-icon>
                </p>
                <p>
                    You don't have any products in this supplier, click the
                    button on left-top to add product.
                </p>
            </div>
            <b-loading
                :is-full-page="false"
                :active.sync="isLoading"
            ></b-loading>
        </div>
        <b-modal
            :active.sync="isComponentModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-modal
        >
            <newProduct
                :supplier="supplier"
                @reload="reloadProducts"
            ></newProduct>
        </b-modal>
    </section>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import newProduct from "@/components/form/newProduct";
export default {
    layout: "dashboard",
    components: {
        ProductCard,
        newProduct
    },
    head: {
        title: "Supplier Manage"
    },
    data() {
        return {
            isComponentModalActive: false,
            isLoading: false,
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
            this.products = await this.getProducts();
        }
    },
    async asyncData({ route, params, $axios }) {
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
        async reloadProducts() {
            this.isLoading = true;
            this.products = await this.getProducts();
            this.isLoading = false;
            this.isComponentModalActive = false;
        },
        newProductModal() {
            this.isComponentModalActive = true;
        },
        getProducts() {
            return this.$axios.$get("/products/all", {
                params: {
                    supplierId: this.$route.params.id
                }
            });
        }
    }
};
</script>
<style lang="scss">
.hero-body {
.title {
    font-size: 3rem;
}
}
.button {
    .icon {
        position: relative;
        top: 1px;
    }
}
</style>