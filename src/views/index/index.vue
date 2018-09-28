<template>
 <div id="index">
  <div id="index-navbar">
    <div id="index-nav">
      <span>推荐</span>
      <span>朋友</span>
      <span>电台</span>
    </div>
    <router-view></router-view>
  </div>
 </div>
</template>
<style lang="stylus" scoped>
#index-navbar
  width 100%
  height 72px
  background-color rgb(212,60,51)
  font-size 24px
  color rgb(255,255,255)
#index-nav
  position absolute
  
</style>
