<template>
    <section class="section">
        <div class="container">
            <nav class="level">
                <div class="level-left"></div>
                <div class="level-right">
                    <div class="level-item">
                        <b-button @click="reloadOrders" class="button is-info">
                            <b-icon pack="fas" icon="sync-alt"></b-icon>
                            <span> Refresh</span>
                        </b-button>
                    </div>
                </div>
            </nav>
            <b-table :data="orders" :columns="columns">
                <template slot-scope="props">
                    <b-table-column
                        field="#"
                        label="#"
                        width="40"
                        numeric
                        centered
                    >
                        {{ props.index + 1 }}
                    </b-table-column>

                    <b-table-column field="id" label="Order ID" centered>
                        {{ props.row.id }}
                    </b-table-column>

                    <b-table-column
                        field="productName"
                        label="Product"
                        centered
                    >
                        {{ props.row.productName }}
                    </b-table-column>

                    <b-table-column field="itemAttribute" label="Item" centered>
                        {{ props.row.itemAttribute }}
                    </b-table-column>

                    <b-table-column
                        field="supplierName"
                        label="Supplier"
                        centered
                    >
                        {{ props.row.supplierName }}
                    </b-table-column>

                    <b-table-column field="quantity" label="Amount" centered>
                        {{ props.row.quantity }}
                    </b-table-column>

                    <b-table-column field="total" label="Total" centered>
                        {{ props.row.total }}
                    </b-table-column>

                    <b-table-column field="created" label="Created" centered>
                        {{ new Date(props.row.created).toLocaleString() }}
                    </b-table-column>

                    <b-table-column field="status" label="Status" centered>
                        <span v-if="props.row.status === 'Pending'" class="tag is-info">{{ props.row.status }}</span>
                        <span v-if="props.row.status === 'Active'" class="tag is-success">{{ props.row.status }}</span>
                        <span v-if="props.row.status === 'Cancel'" class="tag is-light">{{ props.row.status }}</span>
                    </b-table-column>

                    <!-- <b-table-column field="edit" label="edit" centered>
                    <b-button type="is-info" pack="fas" icon-right="plus" size="is-small" @click="edit(props.row.id)">edit</b-button>
                </b-table-column> -->

                    <b-table-column field="action" label="Action" centered>
                        <div class="buttons">
                            <b-button
                                v-if="props.row.status === 'Pending'"
                                type="is-success"
                                @click="toActiveDialog(props.row.id)"
                                @reload="reloadOrders"
                                >Active</b-button
                            >
                            <b-button
                                v-if="props.row.status === 'Pending'"
                                type="is-danger"
                                @click="toCancelDialog(props.row.id)"
                                @reload="reloadOrders"
                                >Cancel</b-button
                            >
                        </div>
                    </b-table-column>
                </template>

                <template slot="empty">
                    <section class="section">
                        <div class="content has-text-grey has-text-centered">
                            <p>
                                <b-icon
                                    pack="fas"
                                    icon="archive"
                                    size="is-large"
                                >
                                </b-icon>
                            </p>
                            <p>No orders</p>
                        </div>
                    </section>
                </template>
            </b-table>
            <b-loading
                :is-full-page="false"
                :active.sync="isLoading"
                :can-cancel="false"
            ></b-loading>
        </div>
    </section>
</template>

<script>
import { mapState } from "vuex";
export default {
    layout: "dashboard",
    data() {
        return {
            isLoading: false,
            orders: [],
            suppliers: [],
            orderstate: "未发货"
        };
    },
    head: {
        title: "Order Management"
    },
    computed: mapState({
        info: state => state.Login.info
    }),
    async mounted() {
        this.isLoading = true;
        if (this.error) {
            this.isLoading = false;
            this.$buefy.toast.open({
                message: "Something got errors",
                type: "is-danger"
            });
        } else {
            if (this.info.role === "USER") {
                this.orders = await this.$axios.$get("/orders/");
                this.isLoading = false;
            } else if (this.info.role === "SELLER") {
                // 获取SELLER的所有商铺
                this.suppliers = await this.getSuppliers();
                this.getSellerOrders();
            }
        }
    },
    methods: {
        getSuppliers() {
            return this.$axios.$get("/suppliers/");
        },
        async getSellerOrders() {
            this.orders = [];
            for (let supplier of this.suppliers) {
                let tempOrders = await this.$axios.$get("/orders/all/", {
                    params: {
                        supplierId: supplier.id
                    }
                });
                this.orders = this.orders.concat(tempOrders);
            }
            this.isLoading = false;
        },
        getPendingOrder() {
            let orders;
            let suppliers = this.$axios.$get("/suppliers/");
            for (let supplier of this.suppliers) {
                let tempOrders = this.$axios.$get("/orders/all/", {
                    params: {
                        supplierId: supplier.id
                    }
                });
                for (let order of tempOrders) {
                    if ((order.status = "Pending")) {
                        orders.push(order);
                    }
                }
            }
            return orders;
        },
        toActiveDialog(id) {
            this.$buefy.dialog.confirm({
                    title: 'Changing Status',
                    message: 'Are you sure you want to change this order\'s status to <b>Active</b>? This action cannot be undone.',
                    confirmText: 'Change status',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () => this.toActive(id)
                })
        },
        toCancelDialog(id) {
            this.$buefy.dialog.confirm({
                    title: 'Changing Status',
                    message: 'Are you sure you want to change this order\'s status to <b>Cancel</b>? This action cannot be undone.',
                    confirmText: 'Change status',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () => this.toCancel(id)
                })
        },
        toActive(id) {
            this.isLoading = true;
            return this.$axios
                .$patch("/orders/" + id, {
                    status: "Active"
                })
                .then(res => {
                    this.$buefy.toast.open({
                        message:
                            "Order " + id + " has changed status to Active",
                        type: "is-success"
                    });
                    this.reloadOrders();
                });
        },
        toCancel(id) {
            this.isLoading = true;
            return this.$axios
                .$patch("/orders/" + id, {
                    status: "Cancel"
                })
                .then(res => {
                    this.$buefy.toast.open({
                        message:
                            "Order " + id + " has changed status to Cancel",
                        type: "is-success"
                    });
                    this.reloadOrders();
                });
        },
        async reloadOrders() {
            this.isLoading = true;
            this.getSellerOrders();
        }
    }
};
</script>
