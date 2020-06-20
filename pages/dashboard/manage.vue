<template>
<section class="section">
    <h2 class="title is-3 has-text-grey">
        用户管理
        <b-icon icon="rocket" size="is-large" />
    </h2>
    <div class="columns is-mobile">
        <b-table :data="accountList">
            <template slot-scope="props">
                <b-table-column field="#" label="#" width="40" numeric centered>
                    {{ props.index+1 }}
                </b-table-column>

                <b-table-column field="accountId" label="accountId" centered>
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column field="username" label="username" centered>
                    {{ props.row.username }}
                </b-table-column>

                <b-table-column field="password" label="password" centered>
                    {{ props.row.password }}
                </b-table-column>

                <b-table-column field="email" label="email" centered>
                    {{ props.row.email }}
                </b-table-column>

                <b-table-column field="firstName" label="firstname" centered>
                    {{ props.row.firstName }}
                </b-table-column>

                <b-table-column field="lastName" label="lastName" centered>
                    {{ props.row.lastName }}
                </b-table-column>

                <b-table-column field="status" label="status" centered>
                    {{ props.row.status }}
                </b-table-column>

                <b-table-column field="address1" label="address1" centered>
                    {{ props.row.address1 }}
                </b-table-column>

                <b-table-column field="address2" label="address2" centered>
                    {{ props.row.address2 }}
                </b-table-column>

                <b-table-column field="city" label="city" centered>
                    {{ props.row.city }}
                </b-table-column>

                <b-table-column field="state" label="state" centered>
                    {{ props.row.state }}
                </b-table-column>

                <b-table-column field="zip" label="zip" centered>
                    {{ props.row.zip }}
                </b-table-column>

                <b-table-column field="country" label="country" centered>
                    {{ props.row.country }}
                </b-table-column>

                <b-table-column field="phone" label="phone" centered>
                    {{ props.row.phone }}
                </b-table-column>

                <b-table-column field="edit" label="edit" centered>
                    <b-button type="is-info" pack="fas" icon-right="plus" size="is-small" @click="add(props.index)">edit</b-button>
                </b-table-column>

                <b-table-column field="delete" label="delete" centered>
                    <b-button type="is-danger" pack="fas" icon-right="minus" size="is-small" @click="minus(props.index)">delete</b-button>
                </b-table-column>

            </template>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon pack="fas" icon="shopping-cart" size="is-large">
                            </b-icon>
                        </p>
                        <p>Empty Cart</p>
                    </div>
                </section>
            </template>
        </b-table>
    </div>
</section>
</template>

<script>
export default {
    layout: "dashboard",
    data() {
        return {
            accountList: [{
                id: "3146313",
                username: "test",
                password: "admin",
                email: "aczy@mail.com",
                firstName: "rf",
                lastName: "c",
                status: "status1",
                address1: "a1",
                address2: "a2",
                city: "c1",
                state: "s1",
                zip: "z1",
                country: "c2",
                phone: "123"
            }],
        };
    },
    async mounted() {
        // if (this.error) {
        //     this.$buefy.toast.open({
        //         message: "something get errors",
        //         type: "is-danger"
        //     });
        // } else {
        //     this.accountList = await this.$axios.$get("/users/all");
        // }
        // this.accountList = await this.$axios.$get("/users/all");
    },
}
</script>
