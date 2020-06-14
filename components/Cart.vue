<template>
<section>
    <div class="column">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title has-text-grey">
                    购物车
                </p>
            </header>
            <div class="card-content">
                <div class="content has-text-centered">
                    <b-table :data="data" :columns="columns"></b-table>
                </div>
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
            columns: [{
                    field: 'id',
                    label: 'ID',
                    width: '40',
                    numeric: true,
                    sticky: true,
                    headerClass: 'is-sticky-column-one',
                    cellClass: "is-sticky-column-one"
                },
                {
                    field: 'Item.id',
                    label: 'Item_Id',
                    centered: true,
                    sticky: true,
                    // headerClass: "is-sticky-column-two",
                    // cellClass: "is-sticky-column-two"
                },
                {
                    field: 'Item.productId',
                    label: '商品种类'
                },
                {
                    field: 'Item.supplierId',
                    label: '供货商'
                },
                {
                    field: 'Item.uniprice',
                    label: '商品单价'
                },
                {
                    field: 'addAmount',
                    label: '购置数量'
                },
                // {
                //     field: 'Item.uniprice'*'addAmount',
                //     label: '商品金额'
                // }
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
        }
    }
}
</script>

<style>
.is-sticky-column-one {
    background: #23d160 !important;
    color: white !important;
}

/* .is-sticky-column-two {
        background: #fffffff8 !important;
        color: white !important;
    } */
</style>
