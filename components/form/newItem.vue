<template>
    <form action @submit.prevent>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Create new Item</p>
            </header>
            <section class="modal-card-body">
                <b-field label="Attribute">
                    <b-input
                        v-model="form.attribute"
                        placeholder="Attribute"
                        maxlength="30"
                        required
                    ></b-input>
                </b-field>
                <b-field label="Price">
                    <b-input
                        v-model="form.unitprice"
                        placeholder="Price"
                        type="number"
                        step="0.01"
                        required
                    ></b-input>
                </b-field>
                <b-field label="Cost">
                    <b-input
                        v-model="form.unitcost"
                        placeholder="Cost"
                        type="number"
                        step="0.01"
                        required
                    ></b-input>
                </b-field>
                <b-field label="Quantity">
                    <b-input
                        v-model="form.quantity"
                        placeholder="Quantity"
                        type="number"
                        required
                    ></b-input>
                </b-field>                
            </section>
            <footer class="modal-card-foot" style="justify-content: flex-end;">
                <button class="button" type="button" @click="close">
                    Cancel
                </button>
                <button class="button is-primary" @click="save">
                    Add
                </button>
            </footer>
        </div>
    </form>
</template>
<script>
import { mapState } from 'vuex';
export default {
    props: ["product"],
    data() {
        return {
            Category: [],
            form: {}
        };
    },
    computed: mapState({
        userid: state => state.Login.info.id
    }),
    beforeMount() {
        this.form = Object.assign({}, this.newForm);
    },
    async mounted() {
        console.log("check is here");
        console.log(this.product)
        // this.Category = await this.getAllCategory();
    },
    methods: {
        clearForm() {
            Object.keys(this.form).forEach(key => {
                this.form[key] = "";
            });
        },
        save() {
            this.form.id = 6767;
            this.form.supplierId = this.product.supplierId;
            this.form.productId = this.product.id;
            console.log(this.form);
            this.$axios
                .$post("/items/", this.form)
                .then(res => {
                    if (res.id) {
                        // this.clearForm();
                        this.$buefy.toast.open({
                            message: "Item created successfully!",
                            type: "is-success"
                        });
                        this.$emit("reload")
                    }
                })
                .catch(e => {
                    this.$buefy.toast.open({
                        message: "Something got error!",
                        type: "is-danger"
                    });
                });
        },
        close() {
            this.form = Object.assign({}, this.newForm);
            this.$parent.close()
        }
    }
};
</script>