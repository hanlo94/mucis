<template>
  <div id="banner" :style="bannerStyle">
    <div id="img-list">
      <img v-for="(src,index) in bannerImgSrc" :src="src" alt="" :key="index"></div>
  </div>
</template>
<script>
export default {
  name: "banner",
  data () {
    return {
      bannerStyle: {
        height: 0
      }
    }
  },
  computed: {
    bannerImgSrc() {
      return this.$store.state.bannerImgSrc;
    }
  },
  //设置异步加载出现盒子塌陷
  beforeMount() {
    let radio = 336 / 730;
    let bannerImgWidth = window.innerWidth - 30;
    let bannerImgHeight = bannerImgWidth * radio + 15 + "px";
    this.bannerStyle.height = bannerImgHeight
  },
  mounted() {
    this.$store.dispatch("getBannerData");
  }
}
</script>
<style lang="stylus" scoped>
#banner 
  width 100%
  background-image linear-gradient(to bottom, rgb(212,60,51) 75%, white 70%)
  overflow-x scroll 
  overflow-y hidden
#img-list
  width 800%
#img-list>img
  width 10rem
  padding 0 15px 15px
  margin-left 15px
  box-sizing border-box
  border-radius 30px 30px 30px 30px / 15px 15px 30px 30px
</style>



