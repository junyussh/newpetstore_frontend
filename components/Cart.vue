<template>
  <section>
    <div class="column">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title has-text-grey">Shopping Cart</p>
        </header>
        <!-- <div class="card-content">
                <div class="content has-text-centered">
                    <b-table :data="data" :columns="columns"></b-table>
                </div>
        </div>-->
        <div class="card-content">
          <b-table :data="item" v-for="cart in Cart" :key="cart">
            <template slot-scope="props">
              <b-table-column field="#" label="#" width="40" numeric centered>{{ cart.productID }}</b-table-column>

              <b-table-column field="Product" label="Product" centered>{{ cart.productName }}</b-table-column>

              <b-table-column field="Attribute" label="Attribute" centered>{{ cart.attribute }}</b-table-column>

              <b-table-column field="Supplier" label="Supplier" centered>{{ cart.Supplier }}</b-table-column>

              <b-table-column field="Price" label="Price" centered>{{ cart.price }}</b-table-column>

              <b-table-column field="Minus" label="Minus" centered>
                <b-button
                  type="is-danger"
                  pack="fas"
                  icon-right="minus"
                  size="is-small"
                  @click="minus(props.index)"
                />
              </b-table-column>

              <b-table-column field="Amount" label="Amount" centered>{{ props.row.amount }}</b-table-column>

              <b-table-column field="Add" label="Add" centered>
                <b-button
                  type="is-info"
                  pack="fas"
                  icon-right="plus"
                  size="is-small"
                  @click="add(props.index)"
                />
              </b-table-column>
            </template>

            <template slot="empty">
              <section class="section">
                <div class="content has-text-grey has-text-centered">
                  <p>
                    <b-icon pack="fas" icon="shopping-cart" size="is-large"></b-icon>
                  </p>
                  <p>Empty Cart</p>
                </div>
              </section>
            </template>
          </b-table>
        </div>
        <footer class="card-footer">
          <b-button type="is-success" @click="check">Checkout</b-button>
        </footer>
      </div>
    </div>
    <p></p>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      item: [
        {
          itemId: "Cart[0].productName",
          attribute: "黑的",
          productId: "5312764",
          productName: "this.Cart",
          stock: 3,
          amount: 1,
          price: 10000,
          supplierName: "Test Shop",
          supplierId: "15509524"
        }
      ]
    };
  },
  computed: mapState({
    Cart: state => state.Cart.Cart
  }),
  mounted: async function() {
    console.log("Cart: " + this.Cart[0].productName);
    this.ShppingCart = this.Cart;
    console.log("ShoppingCart: " + this.ShppingCart[0].productName);
  },
  methods: {
    // ...mapActions({ updateCart: "Cart/updateCart" }),
    check() {
      this.$buefy.dialog.prompt({
        message: `身份验证`,
        inputAttrs: {
          placeholder: "请输入用户名以提交订单",
          maxlength: 20
        },
        trapFocus: true,
        onConfirm: value => {
          if (value == "crf") {
            this.$buefy.toast.open(`验证成功，订单已提交`);
            /**
             * 提交成功 1、处理订单 2、跳转界面 3、清楚该购物车内的data列表
             */
          } else {
            this.$buefy.toast.open(`验证失败，请重新验证`);
          }
        }
      });
    },
    minus(index) {
      if (this.item[index].amount - 1 > 0) {
        this.item[index].amount--;
      }
    },
    add(index) {
      if (this.item[index].amount + 1 <= this.item[index].stock) {
        this.item[index].amount++;
      } else {
        this.$buefy.toast.open({
          message: "Your can't add more than stock quantity!",
          type: "is-danger"
        });
      }
    }
  }
};
</script>
