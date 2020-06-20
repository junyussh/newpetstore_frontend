<template>
  <section class="section">
    <div class="md-card">
      <div class="md-card-media">
        <div class="md-card-image">
          <img v-if="image" :src="image" alt="Placeholder image" />
          <img v-else src="~/assets/placeholder.png" alt="Placeholder image" />
        </div>
        <div class="md-card-media-covered">
          <div class="md-card-primary">
            <div class="md-card-title">{{ title }}</div>
            <div class="md-card-subtitle">{{ supplier }}</div>
            <a class="button md-button md-menu md-icon-button show-detail">
              <i class="mdi mdi-chevron-down"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="md-card-content">
        <div class="content">一本簡單的筆記本</div>
      </div>
      <div class="md-card-actions">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <b-button class="button md-button">
                <b-icon pack="fas" icon="cart-plus" size="is-small"></b-icon>
                 <nuxt-link :to="{ path: '/product/'+ productId}">
                   <span>View Details</span>
                </nuxt-link>
                 <!-- <el-button @click="addShoppingCart">Add to cart</el-button> -->
              </b-button>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <p class="is-info">
                <time datetime="2016-1-1">2019/2/3</time>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "Undefined"
    },
    supplier: {
      type: String,
      required: true,
      default: "Unknown"
    },
    image: {
      type: String,
      default: "https://source.unsplash.com/l1meQCttaqs/1280x960"
    },
    productId: {
      type: String,
      required: true,
      default: "Undefined"
    },
  }
};
</script>

<style>
.button .mdi {
  margin-right: 3px;
}
.md-icon-button .mdi {
  margin: 0;
  transition: all 0.3s ease-in-out;
}
.md-card {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background-color: #fff;
  border-radius: 2px;
  box-sizing: border-box;
}

.md-card-media {
  position: relative;
}

.md-card-media img {
  display: block;
  width: 100%;
}

.md-card-media-covered {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.2);
}

.md-card-media-covered .md-card-subtitle {
  opacity: 0.7;
}

.md-card-primary {
  position: relative;
  padding: 24px 16px 16px 16px;
}

.md-card-title {
  display: block;
  font-size: 24px;
  line-height: 36px;
}

.md-card-subtitle {
  display: block;
  font-size: 14px;
  line-height: 24px;
  opacity: 0.54;
}

.md-button {
  height: 36px;
  border: 0;
  padding: 0;
  background: transparent;
  padding: 0 16px;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
}

.md-icon-button {
  border-radius: 50%;
  width: 36px;
  padding: 0;
}

.md-button:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.md-button:active {
  background-color: rgba(0, 0, 0, 0.165);
}

.md-menu {
  position: absolute;
  bottom: 28px;
  right: 16px;
  color: #fff;
}

.md-menu:hover {
  color: #fff;
}

.md-menu:active {
  color: #fff;
}

.md-card-content {
  position: relative;
  font-size: 14px;
  line-height: 24px;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  max-height: 0px;
  padding: 0 16px;
  display: block;
  opacity: 0;
}
.md-card-actions {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 8px;
}
.active {
  padding: 16px;
  max-height: 100%;
  height: 150%;
  opacity: 1;
}
</style>