<template>
<section  class="hero is-black">
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
    <br>
    <br>
    <div class="columns" style="width:50%; margin:auto;">
      <div class="column">
        <div class="columns is-mobile">
          <div class="column">
            <ItemCard title="測試商品" supplier="寵物商店" image="https://source.unsplash.com/WLUHO9A_xik/1600x900" />
          </div>
          <div class="column">
            <ItemCard title="測試商品" supplier="寵物商店" image="https://source.unsplash.com/WLUHO9A_xik/1600x900" />
          </div>
          <div class="column">
            <ItemCard title="測試商品" supplier="寵物商店" image="https://source.unsplash.com/WLUHO9A_xik/1600x900" />
          </div>
        </div>
      </div>
    </div>
    <div class="columns"> <span  style="font: 700 20px Comic Sans MS;color: white;text-shadow: 0 0 20px #fdec84,10px -10px 30px #ffae35,20px -20px 40px #ec760c,-20px -60px 50px #cd4607,0px -80px 60px #973717,10px -40px 70px #451b0e;margin-left:10%">One sky, one home.</span> </div>
    <br>
    <div class="columns" style="width:50%; margin:auto">
      <div class="column">
        <div class="columns is-mobile">
          <div class="column">
            <div></div>
            <!-- <img src="..\static\mao1.gif" width="100%" height="80%"> -->
          </div>
          <div class="column">
            <ItemCard title="測試商品" supplier="寵物商店" image="https://source.unsplash.com/WLUHO9A_xik/1600x900" />
          </div>
          <div class="column">
            <ItemCard title="測試商品" supplier="寵物商店" image="https://source.unsplash.com/WLUHO9A_xik/1600x900" />
          </div>
        </div>
      </div>
    </div>
    <div class="columns"> <span  style="margin-left:10%; width:30%">The song of birds is the most beautiful sound of nature, so that the voice will always reverberate in our ears.</span> </div>
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
            <ItemCard title="測試商品" supplier="寵物商店" image="https://source.unsplash.com/WLUHO9A_xik/1600x900" />
          </div>
        </div>
      </div>
    </div>
    <br>
  </div>
</section>
</template>



<script>
import ItemCard from "@/components/ItemCard";
export default {
  components: {
    ItemCard
  },
  methods: {
    getImgUrl(value) {
      return `https://picsum.photos/id/43${value}/1230/500`;
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