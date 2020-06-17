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
              <div>
                <b-field label="Simple">
                  <b-select placeholder="Select a name">
                    <option v-for="category in Category" :key=category>{{ category.name }}</option>
                  </b-select>
                </b-field>
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
    };
  },
  components: {
    ItemCard
  },
  mounted: function() {
    // var userinfo = localStorage.getItem('userinfo'),
    this.userid = this.$store.state.Login.info,
    console.log(this.$data.userid)
    this.getAllProducts();
    this.getAllCategory();
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
    isHidden() {
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