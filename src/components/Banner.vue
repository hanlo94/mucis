<template>
  <div id="banner">
    <div id="img-list">
      <img v-for="(src,index) in bannerImgSrc" :src="src" alt="" :key="index">
      mae
    </div>
  </div>
</template>
<script>
export default {
  name: "banner",
  computed: {
    bannerImgSrc() {
      return this.$store.state.bannerImgSrc;
    }
  },
  mounted() {
    this.$store.dispatch("getBannerData")
  }
}
</script>


