<template>
    <section class="section">
        <b-navbar>
            <template slot="end">
                <b-navbar-item tag="div">
                    <button class="button is-primary" :disabled="this.info.role === 'ADMIN'" @click="newSupplierModal">
                        <b-icon pack="fas" icon="plus"></b-icon>
                        <span>New Supplier</span>
                    </button>
                </b-navbar-item>
            </template>
        </b-navbar>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">Suppliers Management</h1>
                    <h2 class="subtitle">
                        {{ suppliers.length }} Suppliers
                    </h2>
                </div>
            </div>
        </section>
        <div class="container">
            <div v-if="info.role === 'USER'" class="content has-text-grey has-text-centered">
                <p>
                    <b-icon pack="fas" icon="archive" size="is-large"></b-icon>
                </p>
                <p>You are not a seller now, click the button on left-top to create a supplier.</p>
            </div>
            <div class="columns is-multiline" v-else>
                <SupplierCard
                    v-for="(supplier, index) in suppliers"
                    :key="index"
                    :name="supplier.name"
                    :city="supplier.city"
                    :state="supplier.state"
                    :id="supplier.id"
                    :ownerId="supplier.userid"
                    :form="supplier"
                    @reload="reloadSuppliers"
                />
            </div>
            <b-loading :is-full-page="false" :active.sync="isLoading"></b-loading>
        </div>
        <b-modal
            :active.sync="isComponentModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-modal
        >
            <newSupplier @reload="reloadSuppliers"></newSupplier>
        </b-modal>
    </section>
</template>
<script>
import { mapState } from "vuex";
import SupplierCard from "@/components/SupplierCard";
import newSupplier from "@/components/form/newSupplier";
export default {
    layout: "dashboard",
    components: {
        SupplierCard,
        newSupplier
    },
    head: {
        title: "Suppliers Manage"
    },
    data() {
        return {
            isLoading: false,
            isComponentModalActive: false,
            isProductComponentModalActive: false,
            suppliers: []
        };
    },
    computed: mapState({
        info: state => state.Login.info
    }),
    async mounted() {
        if (this.info.role === "SELLER") {
            this.suppliers = await this.getSuppliers();
        } else if (this.info.role === "ADMIN") {
            this.$buefy.notification.open({
                    message: 'You are in ADMIN mode!',
                    position: 'is-bottom-right',
                    type: 'is-warning',
                    hasIcon: true
                })
            this.suppliers = await this.getAllSuppliers();
        }
    },
    methods: {
        newSupplierModal() {
            this.isComponentModalActive = true;
            //   return this.$axios.$post("/supplier", this.form);
        },
        newProductModal() {
            this.$router.push("/addproduct");
        },
        async reloadSuppliers() {
            this.isLoading = true;
            this.suppliers = await this.getSuppliers();
            this.isLoading = false;
            this.isComponentModalActive = false;
        },
        getSuppliers() {
            let _this = this;
            return this.$axios
                .$get("/suppliers/")
                .catch(e => {
                    this.$buefy.toast.open({
                        duration: 3000,
                        message: e,
                        position: "is-bottom",
                        type: "is-danger"
                    });
                });
        },
        getAllSuppliers() {
            return this.$axios
                .$get("/suppliers/all")
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