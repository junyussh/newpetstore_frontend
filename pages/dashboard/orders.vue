<template>
<section class="section">
    <div class="columns is-mobile">
        <b-table :data="orders">
            <template slot-scope="props">
                <b-table-column field="#" label="#" width="40" numeric centered>
                    {{ props.index+1 }}
                </b-table-column>


                <b-table-column field="id" label="id" centered>
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column field="productName" label="productName" centered>
                    {{ props.row.productName }}
                </b-table-column>

                <b-table-column field="supplierName" label="supplierName" centered>
                    {{ props.row.supplierName }}
                </b-table-column>

                <b-table-column field="itemAttribute" label="itemAttribute" centered>
                    {{ props.row.itemAttribute }}
                </b-table-column>

                <b-table-column field="quantity" label="quantity" centered>
                    {{ props.row.quantity }}
                </b-table-column>

                <b-table-column field="total" label="total" centered>
                    {{ props.row.total }}
                </b-table-column>

                <b-table-column field="status" label="status" centered>
                    {{ props.row.status }}
                </b-table-column>

                <b-table-column field="created" label="created" centered>
                    {{ props.row.created }}
                </b-table-column>

                <!-- <b-table-column field="edit" label="edit" centered>
                    <b-button type="is-info" pack="fas" icon-right="plus" size="is-small" @click="edit(props.row.id)">edit</b-button>
                </b-table-column> -->

                <b-table-column field="delete" label="delete" centered>
                    <b-button type="is-danger" pack="fas" icon-right="minus" size="is-small" @click="remove(props.row.id)">delete</b-button>
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
import {
    mapState
} from "vuex";
export default {
    layout: "dashboard",
    data() {
        return {
            orders: []
        };
    },
    computed: mapState({
        info: state => state.Login.info
    }),
    async mounted() {
        if (this.error) {
            this.$buefy.toast.open({
                message: "something get errors",
                type: "is-danger"
            });
        } else {
            if (this.info.role === "USER") {
                this.orders = await this.$axios.$get("/orders/");
            } else if (this.info.role === "SELLER"){
                // 获取SELLER的所有商铺
                let suppliers = await this.$axios.$get("/suppliers/");
                for(let supplier of suppliers){
                    let tempOrders = await this.$axios.$get("/orders/all/",{
                        params:{
                            supplierId: supplier.id
                        }
                    });
                    for(let order of tempOrders){
                        this.orders.push(order)
                    }
                }
            }
        }
    },
    methods:{
        remove(id){
            // this.$axios.$delete("/orders")
        }
    }
}
</script>
