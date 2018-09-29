<template>
 <div id="index">
  <div id="index-navbar">
    <div id="index-nav">
      <span :class="{active: toggle}" @click="toRecommendRoute">推荐</span>
      <span>朋友</span>
      <span :class="{active: !toggle}" @click="toFMRoute">电台</span>
    </div>
    <transition> 
      <router-view></router-view>
    </transition> 
  </div>
 </div>
</template>
<script>
export default {
  name: "index",
  data(){
    return {
      toggle: true
    }
  },
  methods: {
    toRecommendRoute() {
      this.$router.push("/index/recommend")
    },
    toFMRoute() {
      this.$router.push("index/fm")
    }
  }
}
</script>

<style lang="stylus" scoped>
#index-navbar
  width 100%
  background-color rgb(212,60,51)
  font-size 28px
  color rgb(255,255,255)
#index-nav
  display flex
  height 72px
  width 100%
  justify-content center 
  align-items center
  text-align center
  &>span
    display inline-block
    width 33.3333%
  .active
    color rgb(255,255,255) !important 
</style>
