<template>
    <div>
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <nav class="level">
                        <div class="level-left">
                            <div class="level-item">
                                <b-button size="is-medium" @click="$router.go(-1)">
                                    <b-icon
                                        pack="fas"
                                        icon="chevron-left"
                                    ></b-icon>
                                    <span> Back</span>
                                </b-button>
                            </div>
                        </div>
                    </nav>
                    <div class="columns">
                        <div class="column is-two-fifths">
                            <figure class="image is-1by1">
                                <img
                                    v-if="Product.image"
                                    :src="Product.image"
                                />
                                <img
                                    v-else
                                    src="~/assets/placeholder.png"
                                />
                            </figure>
                        </div>
                        <div class="column">
                            <div class="info">
                                <h1 class="title" style="font-size: 3rem">
                                    {{ Product.name }}
                                </h1>
                                <p class="subtitle">
                                    {{ Product.description }}
                                    <br />
                                    <i>{{ Product.id }}</i>
                                    <br>
                                    <i v-if="selected"
                                        >Available:
                                        {{ Item[selected.index].quantity }}</i
                                    >
                                </p>
                                <p class="title">
                                    <b-icon
                                        pack="fas"
                                        icon="dollar-sign"
                                        size="is-medium"
                                    ></b-icon>
                                    {{ selected ? selected.price : "NaN" }}
                                </p>
                                <section style="width: 30%">
                                    <b-field label="Select Item">
                                        <b-select
                                            placeholder="Chose your setting"
                                            v-model="selected"
                                            @onChange="onChange"
                                            expanded
                                        >
                                            <option
                                                :value="{
                                                    id: item.id,
                                                    index: index,
                                                    price: item.unitprice
                                                }"
                                                v-for="(item, index) in Item"
                                                :key="item.id"
                                                >{{ item.attribute }}</option
                                            >
                                        </b-select>
                                    </b-field>
                                    <b-field
                                        ><!-- Label left empty for spacing -->
                                        <p class="control">
                                            <button
                                                class="button is-info is-fullwidth"
                                                @click="addShoppingCart"
                                            >
                                                <b-icon
                                                    pack="fas"
                                                    icon="cart-plus"
                                                ></b-icon>
                                                <span>Add to cart</span>
                                            </button>
                                        </p>
                                    </b-field>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            selected: null,
            Supplier: {},
            Product: {
                id: "",
                supplierId: "",
                categoryId: "",
                name: "",
                description: "",
                image: ""
            },
            Item: [
                {
                    id: "",
                    productId: "",
                    supplierId: "",
                    unitprice: "",
                    unitcost: "",
                    quantity: "",
                    attribute: ""
                }
            ],
            Cart: {
                id: "2", // #
                productID: "345", // 商品id
                productName: "测试", // 商品名称
                attribute: "cute",
                supplierName: "2456", //供货商,
                supplierId: "12387",
                price: "12300", // 商品价格
                amount: "3", // 商品数量
                stock: "6", // 商品限购数量
                check: true // 是否勾选
            }
        };
    },
    async asyncData({ route, params, $axios }) {
        console.log(route.params.id);
    },
    mounted: async function() {
        await this.getProduct();
        this.Supplier = await this.getSupplier();
        await this.getItemByProductId();
    },
    methods: {
        ...mapActions({
            unshiftCart: "Cart/unshiftCart",
            addCart: "Cart/addCart"
        }),
        onChange(e) {
            console.log(e.target.key);
        },
        getSupplier() {
            return this.$axios.$get("/suppliers/" + this.Product.supplierId);
        },
        getProduct() {
            let _this = this;
            return this.$axios
                .get("/products/" + this.$route.params.id)
                .then(function(res) {
                    console.log(res);
                    _this.Product = res.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        getItemByProductId() {
            let _this = this;
            return this.$axios
                .get("/items/all", {
                    params: { productId: this.$route.params.id }
                })
                .then(function(res) {
                    console.log(res);
                    _this.Item = res.data;
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        addShoppingCart() {
            if (this.selected) {
                this.Cart = {
                    itemId: this.Item[this.selected.index].id,
                    productID: this.Product.id,
                    productName: this.Product.name,
                    attribute: this.Item[this.selected.index].attribute,
                    supplierName: this.Supplier.name,
                    supplierId: this.Supplier.id,
                    price: this.selected.price,
                    amount: 1,
                    stock: this.Item[this.selected.index].quantity,
                    check: true
                };
                // 判断是否登录
                if (!this.$store.state.Login.signed) {
                    this.$buefy.notification.open({
                        duration: 3000,
                        message: `Please login first.`,
                        position: "is-bottom-right",
                        type: "is-danger",
                        hasIcon: true
                    });

                    this.$router.push("/login");
                    return;
                } else {
                    this.addCart(this.Cart);
                    console.log(this.$store.state.Cart.Cart)
                    this.$buefy.notification.open({
                        duration: 3000,
                        message: `Add success`,
                        position: "is-bottom-right",
                        type: "is-success",
                        hasIcon: true
                    });
                }
            } else {
                this.$buefy.notification.open({
                    duration: 3000,
                    message: `Please select a item to add to cart`,
                    position: "is-bottom-right",
                    type: "is-danger",
                    hasIcon: true
                });
            }
        }
    }
};
</script>
