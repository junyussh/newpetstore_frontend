<template>
  <div>
    <div id="details">
      <!-- 头部 -->
      <div class="page-header">
        <div class="title">
          <p>The ProductID is: {{ Product.id }}</p>
        </div>
      </div>
      <!-- 头部END -->

      <!-- 主要内容 -->
      <div class="container">
        <div class="main">
          <div class="block">
            <img style="height:541px;" :src="Product.image" />
          </div>
          <div class="content">
            <!-- 右侧内容区 -->
            <h1 class="name">商品名称：{{ Product.name }}</h1>
            <p class="intro">商品简介：{{ Product.description }}</p>
            <div class="price">
              <span>{{ Item[0].unitprice }}元</span>
            </div>
            <div class="pro-list">
              <b-select placeholder="select item" v-model="Cart.attribute">
                <option
                  :value="item.attribute"
                  v-for="item in Item"
                  :key="item"
                >{{ item.attribute }}</option>
              </b-select>
              <span class="pro-name">{{ Product.name }}</span>
              <p class="price-sum">总计 : {{ Item[0].unitprice }}元</p>
            </div>
            <b-button
              style="width:20%; margin:auto"
              class="is-info"
              expanded
              @click="addShoppingCart"
            >加入购物车</b-button>
            <!-- </div> -->
          </div>
          <!-- 右侧内容区END -->
        </div>
        <!-- 主要内容END -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
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
    this.getProduct();
    this.getItemByProductId();
  },
  methods: {
    ...mapActions({
      unshiftCart: "Cart/unshiftCart",
      addCart: "Cart/addCart"
    }),
    async getProduct() {
      let _this = this;
      console.log("productid is " + this.$route.params.id);
      this.$axios
        .get("products/" + this.$route.params.id)
        .then(function(res) {
          console.log(res);
          _this.Product = res.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    async getItemByProductId() {
      let _this = this;
      this.$axios
        .get("items/all", {
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
      console.log("into addShoppingCart");
      // 判断是否登录
      if (!this.$store.state.Login.info) {
        this.$buefy.toast.open({
          duration: 3000,
          message: "Please Login First.",
          position: "is-bottom",
          type: "is-success"
        });
        this.$router.push("/login");
        return;
      }
      // 新加入购物车成功
      this.addCart(this.Cart);
      this.$buefy.toast.open({
        duration: 3000,
        message: "Add success.",
        position: "is-bottom",
        type: "is-success"
      });
    }
  }
};
</script>
<style>
/* 头部CSS */
#details .page-header {
  height: 64px;
  margin-top: -20px;
  z-index: 4;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  -webkit-box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);
}
#details .page-header .title {
  width: 1225px;
  height: 64px;
  line-height: 64px;
  font-size: 18px;
  font-weight: 400;
  color: #212121;
  margin: 0 auto;
}
#details .page-header .title p {
  float: left;
}
#details .page-header .title .list {
  height: 64px;
  float: right;
}
#details .page-header .title .list li {
  float: left;
  margin-left: 20px;
}
#details .page-header .title .list li a {
  font-size: 14px;
  color: #616161;
}
#details .page-header .title .list li a:hover {
  font-size: 14px;
  color: #ff6700;
}
/* 头部CSS END */
/* 主要内容CSS */
#details .main {
  width: 1225px;
  height: 560px;
  padding-top: 30px;
  margin: 0 auto;
}
#details .main .block {
  float: left;
  width: 541px;
  height: 541px;
}
#details .el-carousel .el-carousel__indicator .el-carousel__button {
  background-color: rgba(163, 163, 163, 0.8);
}
#details .main .content {
  float: left;
  margin-left: 25px;
  width: 640px;
}
#details .main .content .name {
  height: 30px;
  line-height: 30px;
  font-size: 24px;
  font-weight: normal;
  color: #212121;
}
#details .main .content .intro {
  color: #b0b0b0;
  padding-top: 10px;
}
#details .main .content .store {
  color: #ff6700;
  padding-top: 10px;
}
#details .main .content .price {
  display: block;
  font-size: 18px;
  color: #ff6700;
  border-bottom: 1px solid #e0e0e0;
  padding: 25px 0 25px;
}
#details .main .content .price .del {
  font-size: 14px;
  margin-left: 10px;
  color: #b0b0b0;
  text-decoration: line-through;
}
#details .main .content .pro-list {
  background: #f9f9fa;
  padding: 30px 60px;
  margin: 50px 0 50px;
}
#details .main .content .pro-list span {
  line-height: 30px;
  color: #616161;
}
#details .main .content .pro-list .pro-price {
  float: right;
}
#details .main .content .pro-list .pro-price .pro-del {
  margin-left: 10px;
  text-decoration: line-through;
}
#details .main .content .pro-list .price-sum {
  color: #ff6700;
  font-size: 24px;
  padding-top: 20px;
}
#details .main .content .button {
  height: 55px;
  margin: 10px 0 20px 0;
}
#details .main .content .button .el-button {
  float: left;
  height: 55px;
  font-size: 16px;
  color: #fff;
  border: none;
  text-align: center;
}
#details .main .content .button .shop-cart {
  width: 340px;
  background-color: #ff6700;
}
#details .main .content .button .shop-cart:hover {
  background-color: #f25807;
}
#details .main .content .button .like {
  width: 260px;
  margin-left: 40px;
  background-color: #b0b0b0;
}
#details .main .content .button .like:hover {
  background-color: #757575;
}
#details .main .content .pro-policy li {
  float: left;
  margin-right: 20px;
  color: #b0b0b0;
}
/* 主要内容CSS END */
</style>