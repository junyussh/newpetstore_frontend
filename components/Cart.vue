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
          <b-table :data="cart">
            <template slot-scope="props">
              <b-table-column field="#" label="#" width="40" numeric centered>{{ props.index+1 }}</b-table-column>

              <b-table-column field="Product" label="Product" centered>{{ props.row.productName }}</b-table-column>

              <b-table-column field="Attribute" label="Attribute" centered>{{ props.row.attribute }}</b-table-column>

              <b-table-column
                field="Supplier"
                label="Supplier"
                centered
              >{{ props.row.supplierName }}</b-table-column>

              <b-table-column field="Price" label="Price" centered>{{ props.row.price }}</b-table-column>

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
              <b-table-column field="Remove" label="Remove" centered>
                <b-button
                  type="is-info"
                  pack="fas"
                  icon-right="trash-alt"
                  size="is-small"
                  @click="remove(props.index)"
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
      </div>
    </div>
    <p></p>
  </section>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      item: [
        {
          itemId: "3146313",
          attribute: "黑的",
          productId: "5312764",
          productName: "神獸柚子",
          stock: 3,
          amount: 1,
          price: 10000,
          supplierName: "Test Shop",
          supplierId: "15509524"
        }
      ]
    };
  },
  mounted: async function() {
    console.log("this.cart is:")
    console.log(this.cart)
  },
  computed: mapState({
    cart: state => state.Cart.Cart
  }),
  methods: {
    ...mapMutations({
      minusItem: "Cart/minusItem",
      plusItem: "Cart/plusItem",
      removeitem: "Cart/removeItem"
    }),
    ...mapGetters({
      getSum: "Cart/getTotalPrice"
    }),
    minus(index) {
      if (this.cart[index].amount - 1 > 0) {
        this.minusItem(index);
      }
    },
    add(index) {
      if (this.cart[index].amount + 1 <= this.cart[index].stock) {
        this.plusItem(index);
      } else {
        this.$buefy.toast.open({
          message: "Your can't add more than stock quantity!",
          type: "is-danger"
        });
      }
    },
    remove(index) {
      this.removeitem(index);
    }
  }
};
</script>
