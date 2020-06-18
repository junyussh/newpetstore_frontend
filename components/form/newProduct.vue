<template>
    <form action @submit.prevent>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">New supplier</p>
            </header>
            <section class="modal-card-body">
                <b-field
                    label="Name"
                    horizontal
                    required
                >
                    <b-input v-model="form.name" name="name"></b-input>
                </b-field>
                <b-field
                    label="Phone"
                    horizontal
                    required
                >
                    <b-input v-model="form.phone" name="phone"></b-input>
                </b-field>
                <b-field
                    label="Address 1"
                    horizontal
                    required
                >
                    <b-input v-model="form.address1" name="address1" expanded></b-input>
                </b-field>
                <b-field
                    label="Address 2"
                    horizontal
                    required
                >
                    <b-input v-model="form.address2" name="address2" expanded></b-input>
                </b-field>
                <b-field
                    label="State"
                    horizontal
                    required
                >
                    <b-input v-model="form.state" name="state" expanded></b-input>
                </b-field>
                <b-field
                    label="City"
                    horizontal
                    required
                >
                    <b-input v-model="form.city" name="city" expanded></b-input>
                </b-field>
                <b-field
                    label="Zip"
                    horizontal
                    required
                >
                    <b-input v-model="form.zip" name="zip" expanded></b-input>
                </b-field>
            </section>
            <footer class="modal-card-foot" style="justify-content: flex-end;">
                <button class="button" type="button" @click="$parent.close()">Cancel</button>
                <button class="button is-primary" @click="create">Create</button>
            </footer>
        </div>
    </form>
</template>
<script>
export default {
    data() {
        return {
            form: {
                address1: "",
                address2: "",
                city: "",
                name: "Test shop",
                phone: "",
                state: "",
                userid: "",
                zip: ""
            }
        }
    },
    methods: {
        clearForm() {
            Object.keys(this.form).forEach(key => {
                this.form[key] = "";
            });
        },
        create() {
            console.log("click")
            this.form.userid = this.$store.state.Login.info.id;
            console.log(this.form)
            
            this.$axios.$post("/suppliers/", this.form).then(res => {
                console.log(res)
                this.$buefy.toast.open({
                    message: 'Supplier created successfully!',
                    type: 'is-success'
                })
                this.$emit("reload")
                this.clearForm();
            }).catch(e => {
                this.$buefy.toast.open({
                    message: "something get errors",
                    type: 'is-danger'
                })
            })
            
        }
    }
}
</script>