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
                image="http://i1.bagong.cn/73/53/1469f9a368322a8d4745b6822be8_200x200_1.jpg"
              />
            </div>
            <div class="column">
              <ItemCard
                :title="Product[0].id"
                supplier="寵物商店"
                image="https://drive.google.com/drive/folders/1ZFzN08PUQC9P2SZywuJpcJDxiN7eex-H/gou.JPG"
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
              <div></div>
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
    <button class="button is-success" style="margin-left:43%;" @click="getAllProducts">Test</button>
  </section>
</template>



<script>
import ItemCard from "@/components/ItemCard";
export default {
  data() {
        return {
          loading: "false",
          Product: [{ }]
        }
    },
  components: {
    ItemCard
  },
  methods: {
    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/1230/500`;
    },
    async getAllProducts() {
       Product = await this.$store.dispatch("Product/allproduct");
       console.log(await this.$store.dispatch("Product/allproduct"))
       console.log(Product[0])
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