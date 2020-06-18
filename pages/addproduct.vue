<template>
  <section class="hero is-green">
    <h1 class="title" style="margin:auto">Add Product</h1>
    <div style="width:45%; margin:auto">
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
        <b-button style="width:20%; margin:auto" class="is-success" @click="addProduct" expanded rounded>Submit</b-button>
      </div>
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
      let _this = this;
      console.log(this.form);
      this.$axios
        .$post("/products/", this.form)
        .then(res => {
          if (res) {
            this.clearForm();
            _this.$buefy.toast.open({
                    duration: 3000,
                    message: "Add Successful!",
                    position: 'is-bottom',
                    type: 'is-success'
                })
            _this.$router.push("/dashboard/supplier");
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