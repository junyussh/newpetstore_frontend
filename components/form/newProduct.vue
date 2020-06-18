<template>
  <form action @submit.prevent>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">New supplier</p>
      </header>
      <section class="modal-card-body">
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
      </section>
      <footer class="modal-card-foot" style="justify-content: flex-end;">
        <button class="button" type="button" @click="$parent.close()">Cancel</button>
        <button class="button is-primary" @click="create">Create</button>
      </footer>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      addProductHidden: false,
      userrole: "",
      userid: "",
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
      this.Product = await this.$store.dispatch(".../Product/allproduct");
      // console.log('this is Product' + Product)
    },
    async getAllCategory() {
      console.log("into getAllCategory");
      this.Category = await this.$store.dispatch(".../Category/allcategory");
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
      this.$axios
        .$post("/products/", this.form)
        .then(res => {
          if (res.id) {
            // this.clearForm();
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