<template>
<section>
    <div class="column">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title has-text-grey">
                    购物车
                </p>
            </header>
            <!-- <div class="card-content">
                <div class="content has-text-centered">
                    <b-table :data="data" :columns="columns"></b-table>
                </div>
            </div> -->
            <div class="card-content">
                <b-table :data="isEmpty ? [] : data">

                    <template slot-scope="props">
                        <b-table-column field="id" label="ID" width="40" numeric centered>
                            {{ props.row.id }}
                        </b-table-column>

                        <b-table-column field="Item_id" label="Item_id" centered>
                            {{ props.row.Item.id }}
                        </b-table-column>

                        <b-table-column field="商品名" label="商品名" centered>
                            {{ props.row.Item.productId }}
                        </b-table-column>

                        <b-table-column field="供货商" label="供货商" centered>
                            {{ props.row.Item.supplierId }}
                        </b-table-column>

                        <b-table-column field="商品单价" label="商品单价" centered>
                            {{ props.row.Item.supplierId }}
                        </b-table-column>

                        <b-table-column field="Minus" label="Minus" centered>
                            <b-button type="is-danger" icon-right="delete" size="is-small" @click="minus(props.id)" />
                        </b-table-column>

                        <b-table-column field="数量" label="数量" centered>
                            {{ props.row.addAmount }}
                        </b-table-column>

                        <b-table-column field="Add" label="Add" centered>
                            <b-button type="is-info" icon-right="delete" size="is-small" @click="add(props.id)" />
                        </b-table-column>

                        <b-table-column field="date" label="Date" centered>
                            <span class="tag is-success">
                                {{ new Date(props.row.date).toLocaleDateString() }}
                            </span>
                        </b-table-column>

                        <!-- <b-table-column label="Gender">
                            <span>
                                <b-icon pack="fas" :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                                </b-icon>
                                {{ props.row.addAmount }}
                            </span>
                        </b-table-column> -->
                    </template>

                    <template slot="empty">
                        <section class="section">
                            <div class="content has-text-grey has-text-centered">
                                <p>
                                    <b-icon icon="emoticon-sad" size="is-large">
                                    </b-icon>
                                </p>
                                <p>Nothing here.</p>
                            </div>
                        </section>
                    </template>
                </b-table>
            </div>
            <footer class="card-footer">
                <b-button type="is-success" @click="check">
                    提交订单
                </b-button>
            </footer>
        </div>
    </div>
    <p></p>

</section>
</template>

<script>
export default {
    data() {
        return {
            data: [{
                    "id": 1,
                    "Item": {
                        "id": "3146313",
                        "productId": "5312764",
                        "supplierId": "87654",
                        "uniprice": 50,
                        "unicost": "",
                        "quantity": "",
                        "attribute": ""
                    },
                    "addAmount": 2,
                    "date": "2016/10/15 13:43:27",
                    "gender": "Male"
                },
                {
                    "id": 2,
                    "Item": {
                        "id": "2345634",
                        "productId": "323687",
                        "supplierId": "456789",
                        "uniprice": 20,
                        "unicost": "",
                        "quantity": "",
                        "attribute": ""
                    },
                    "addAmount": 3,
                    "date": "2016/12/15 06:00:53",
                    "gender": "Male"
                },
                {
                    "id": 3,
                    "Item": {
                        "id": "42756584",
                        "productId": "42356753",
                        "supplierId": "23145642",
                        "uniprice": 15,
                        "unicost": "",
                        "quantity": "",
                        "attribute": ""
                    },
                    "addAmount": 1,
                    "date": "2016/04/26 06:26:28",
                    "gender": "Female"
                },
            ],
        }
    },
    methods: {
        check() {
            this.$buefy.dialog.prompt({
                message: `身份验证`,
                inputAttrs: {
                    placeholder: '请输入用户名以提交订单',
                    maxlength: 20
                },
                trapFocus: true,
                onConfirm: (value) => {
                    if (value == 'crf') {
                        this.$buefy.toast.open(`验证成功，订单已提交`)
                        /**
                         * 提交成功 1、处理订单 2、跳转界面 3、清楚该购物车内的data列表
                         */
                    } else {
                        this.$buefy.toast.open(`验证失败，请重新验证`)
                    }
                }
            })
        },
        minus(id) {
            console.log(id);
            // console.log(this.data[id-1].get("addAmount"));
            // this.data.indexOf(id-1).addAmount -= 1;
        },
        add(id) {
            // console.log(this.data[id-1]["addAmount"]);
            // this.data.indexOf(id-1).addAmount += 1;
        }
    }
}
</script>
