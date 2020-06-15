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
            <chunyuCard></chunyuCard>
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
import chunyuCard from "@/components/chunyuCard";
export default {
  components: {
    chunyuCard
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