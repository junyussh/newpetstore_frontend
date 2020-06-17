<template>
  <section class="hero is-green">
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
      <div class="columns" style="width:50%; margin:auto;">
        <div class="column">
          <div class="columns is-mobile">
            <div class="column">
              <ItemCard
                title="藏獒"
                supplier="寵物商店"
                image="https://gd.tw.workers.dev/IMG_0199(20200615-134550).JPG"
              />
            </div>
            <div class="column">
              <ItemCard
                :title="Product[0].name"
                :supplier="Product[0].supplierId"
                image="http://i1.bagong.cn/73/53/1469f9a368322a8d4745b6822be8_200x200_1.jpg"
              />
            </div>
            <div class="column">
              <ItemCard title="測試商品" supplier="寵物商店" image="https://gd.tw.workers.dev/gou.JPG" />
            </div>
          </div>
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
              <div></div>
              <!-- <img src="..\static\mao1.gif" width="100%" height="80%"> -->
            </div>
            <div class="column">
              <ItemCard
                title="測試商品"
                supplier="寵物商店"
                image="https://source.unsplash.com/WLUHO9A_xik/1600x900"
              />
            </div>
            <div class="column">
              <ItemCard
                title="測試商品"
                supplier="寵物商店"
                image="https://source.unsplash.com/WLUHO9A_xik/1600x900"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <span
          style="margin-left:10%; width:30%"
        >The song of birds is the most beautiful sound of nature, so that the voice will always reverberate in our ears.</span>
      </div>

      <div class="columns" style="width:50%; margin:auto">
        <div class="column">
          <div class="columns is-mobile">
            <div class="column">
              <div v-if="addProductHidden == false">
                <b-field label="Supplier">
                  <b-select placeholder="Select a shop" v-model="form.supplierId">
                    <option
                      :value="supplier.id"
                      v-for="supplier in Supplier"
                      :key="supplier"
                    >{{ supplier.id }}--{{ supplier.name }}</option>
                  </b-select>
                </b-field>
                <b-field label="Category">
                  <b-select placeholder="Select a name" v-model="form.categoryId">
                    <option
                      :value="category.id"
                      v-for="category in Category"
                      :key="category"
                    >{{ category.id }}--{{ category.name }}</option>
                  </b-select>
                </b-field>
                <b-field label="Name">
                  <b-input v-model="form.name" placeholder="Product name"></b-input>
                </b-field>
                <b-field label="Image URL">
                  <b-input v-model="form.image" placeholder="Product Image"></b-input>
                </b-field>
                <b-field label="Description">
                  <b-input v-model="form.description" maxlength="200" type="textarea"></b-input>
                </b-field>
                <b-button @click="addProduct" expanded rounded>Submit</b-button>
              </div>
            </div>
            <div class="column">
              <div></div>
            </div>
            <div class="column">
              <ItemCard
                title="測試商品"
                supplier="寵物商店"
                image="https://source.unsplash.com/WLUHO9A_xik/1600x900"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  </section>
</template>



<script>
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
      ]
    };
  },
  components: {
    ItemCard
  },
  mounted: function() {
    (this.userid = this.$store.state.Login.info.id),
      (this.userrole = this.$store.state.Login.info.role),
      console.log(this.$data.userrole);
    // this.form.supplierId = this.$store.state.Login.info.id;
    this.getAllProducts();
    this.getAllCategory();
    this.getAllSupplier();
    this.isHidden();
    console.log(this.$data.Product);
  },
  methods: {
    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/1230/500`;
    },
    async getAllProducts() {
      console.log("into getAllProducts");
      this.Product = await this.$store.dispatch("Product/allproduct");
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
        .then(function (res) {
          console.log(res);
          _this.Supplier = res.data;
          console.log(this.Supplier)
        })
        .catch(function (error) {
          console.log(error);
        })
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
</style>