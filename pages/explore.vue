<template>
  <section>
    <div>
      <div>
        <b-carousel :indicator-inside="false" class style="margin:auto;width: 50%">
          <b-carousel-item v-for="(item, i) in 6" :key="i">
            <span class="image">
              <img :src="getImgUrl(i)" />
            </span>
          </b-carousel-item>
          <template slot="indicators" slot-scope="props">
            <span class="al image">
              <img :src="getImgUrl(props.i)" :title="props.i" />
            </span>
          </template>
        </b-carousel>
      </div>
      <br />
      <br />
        <div class="wrapper" style="width:50%; margin:auto;">   
          <div  class="wrapper-content" v-for="product in Product" :key="product">
            <ItemCard
              :title="product.name"
              :supplier="product.supplierId"
              :image="product.image"
              :productId="product.id"
            />
          </div>
        </div>  

      <div class="columns">
        <span style="margin-left:10%;">One sky, one home.</span>
      </div>
      <br />
      <div class="columns" style="width:50%; margin:auto">
        <div class="column">
          <div class="columns is-mobile">
            <div class="column">
              <div>
                <button @click="addShoppingCart">Add to cart</button>
                <button @click="toCart">To see cart</button>
              </div>
              <!-- <img src="..\static\mao1.gif" width="100%" height="80%"> -->
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <span
          style="margin-left:10%; width:30%"
        >The song of birds is the most beautiful sound of nature, so that the voice will always reverberate in our ears.</span>
      </div>
      <br />
    </div>
  </section>
</template>



<script>
import { mapActions } from "vuex";
import ItemCard from "@/components/ItemCard";
export default {
  data() {
    return {
      addProductHidden: false,
      userrole: "",
      userid: "",
      Product: [
        {
          id: "",
          supplierId: "",
          categoryId: "",
          name: "",
          description: "",
          image: ""
        }
      ],
      Category: [
        {
          id: "",
          name: "",
          description: ""
        }
      ],
      form: {
        id: 4,
        supplierId: "",
        categoryId: "",
        name: "",
        description: "",
        image: ""
      },
      Supplier: [
        {
          id: "",
          userId: "",
          name: "",
          address1: "",
          address2: "",
          city: "",
          state: "",
          zip: "",
          phone: ""
        }
      ],
      Cart : {
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
  components: {
    ItemCard
  },
  mounted: async function() {
    (this.userid = this.$store.state.Login.info.id),
      (this.userrole = this.$store.state.Login.info.role),
      console.log(this.$data.userrole);
    // this.form.supplierId = this.$store.state.Login.info.id;
    console.log("products");
    this.Product = await this.getAllProducts();
    console.log(this.Product);
    this.getAllCategory();
    this.getAllSupplier();
    this.isHidden();
  },
  methods: {
    ...mapActions({ 
      unshiftCart: "Cart/unshiftCart",
      addCart: "Cart/addCart"
    }),
    getImgUrl(value) {
      return `https://source.unsplash.com/1300x732/?animal?cute${value}`;
    },
    getAllProducts() {
      console.log("into getAllProducts");
      return this.$store.dispatch("Product/allproduct");
      // console.log('this is Product' + Product)
    },
    async getAllCategory() {
      console.log("into getAllCategory");
      this.Category = await this.$store.dispatch("Category/allcategory");
    },
    async isHidden() {
      if (this.userrole == "SELLER") this.addProductHidden = false;
    },
    clearForm() {
      Object.keys(this.form).forEach(key => {
        this.form[key] = "";
      });
    },
    addProduct() {
      console.log(this.form);
      this.$axios
        .$post("/products/", this.form)
        .then(res => {
          if (res.id) {
            this.clearForm();
            this.success("Add Successful! redirecting to explore page");
            this.$router.push("/explore");
          }
        })
        .catch(e => {
          this.danger(e);
        });
    },
    getAllSupplier() {
      let _this = this;
      console.log("into getAllSupplier");
      console.log("this.userid is " + this.$store.state.Login.info.id);
      this.$axios
        .get("suppliers/all", {
          params: { userId: this.$store.state.Login.info.id }
        })
        .then(function(res) {
          console.log(res);
          _this.Supplier = res.data;
          console.log(this.Supplier);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    addShoppingCart() {
      console.log("into addShoppingCart")
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
    },
    toCart() {
      this.$router.push("/dashboard");
      console.log("this is cart infomation:")
      console.log(this.$store.state.Cart.Cart)
    }
  }
};
</script>

<style>
.is-active .al img {
  filter: grayscale(0%);
}
.al img {
  filter: grayscale(100%);
}
.wrapper{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.wrapper-content{
  width: 33%;
}

</style>