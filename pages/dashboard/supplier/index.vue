<template>
    <section class="section">
        <b-navbar>
            <template slot="end">
                <b-navbar-item tag="div">
                    <button class="button is-primary" @click="newSupplierModal">
                        <b-icon pack="fas" icon="plus"></b-icon>
                        <span>New Supplier</span>
                    </button>
                </b-navbar-item>
                <b-navbar-item tag="div">
                    <button class="button is-primary" @click="newProductModal">
                        <b-icon pack="fas" icon="plus"></b-icon>
                        <span>New Product</span>
                    </button>
                </b-navbar-item>
            </template>
        </b-navbar>
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
            await this.getSuppliers();
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
            await this.getSuppliers();
            this.isLoading = false;
            this.isComponentModalActive = false;
        },
        getSuppliers() {
            let _this = this;
            return this.$axios
                .$get("/suppliers/")
                .then(res => {
                    _this.suppliers = res;
                    console.log(res)
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