<template>
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
    <div class="columns" style="width:50%; margin:auto;">
      <div class="column">
        <div class="columns is-mobile">
          <div class="column">
            <ItemCard title="測試商品" supplier="寵物商店" image="https://source.unsplash.com/WLUHO9A_xik/1600x900" />
          </div>
          <div class="column">
            <ItemCard></ItemCard>
          </div>
          <div class="column">
            <ItemCard></ItemCard>
          </div>
        </div>
      </div>
    </div>
    <div class="columns" style="width:50%; margin:auto">
      <div class="column">
        <div class="columns is-mobile">
          <div class="column">
            <div></div>
            <!-- <img src="..\static\mao1.gif" width="100%" height="80%"> -->
          </div>
          <div class="column">
            <chunyuCard></chunyuCard>
          </div>
          <div class="column">
            <chunyuCard></chunyuCard>
          </div>
        </div>
      </div>
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
            <chunyuCard></chunyuCard>
          </div>
        </div>
      </div>
    </div>
  </div>
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