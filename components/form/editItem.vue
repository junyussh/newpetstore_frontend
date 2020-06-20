<template>
    <form action @submit.prevent>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Edit product</p>
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
                    Save
                </button>
            </footer>
        </div>
    </form>
</template>
<script>
import { mapState } from 'vuex';
export default {
    props: ["newForm"],
    data() {
        return {
            form: {}
        };
    },
    computed: mapState({
        userid: state => state.Login.info.id
    }),
    beforeMount() {
        this.form = Object.assign({}, this.newForm);
    },
    methods: {
        clearForm() {
            Object.keys(this.form).forEach(key => {
                this.form[key] = "";
            });
        },
        save() {
            this.$axios
                .$put("/items/"+this.form.id, this.form)
                .then(res => {
                    if (res.id) {
                        this.$buefy.toast.open({
                            message: "Item updated successfully!",
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