<template>
    <form action @submit.prevent>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Edit product</p>
            </header>
            <section class="modal-card-body">
                <b-field label="Category">
                    <b-select
                        placeholder="Select a category"
                        v-model="form.categoryId"
                        required
                    >
                        <option
                            :value="category.id"
                            v-for="category in Category"
                            :key="category.id"
                            >{{ category.name }}</option
                        >
                    </b-select>
                </b-field>
                <b-field label="Name">
                    <b-input
                        v-model="form.name"
                        placeholder="Product name"
                    ></b-input>
                </b-field>
                <b-field label="Image URL">
                    <b-input
                        v-model="form.image"
                        type="url"
                        placeholder="Product Image URL"
                    ></b-input>
                </b-field>
                <b-field label="Description">
                    <b-input
                        v-model="form.description"
                        placeholder="Product description"
                        maxlength="200"
                        type="textarea"
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
        this.Category = await this.getAllCategory();
    },
    methods: {
        async getAllCategory() {
            return this.$axios.$get("/categories/");
        },
        clearForm() {
            Object.keys(this.form).forEach(key => {
                this.form[key] = "";
            });
        },
        save() {
            this.$axios
                .$put("/products/"+this.form.id, this.form)
                .then(res => {
                    if (res.id) {
                        // this.clearForm();
                        this.$buefy.toast.open({
                            message: "Product updated successfully!",
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