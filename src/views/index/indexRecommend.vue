<template>
  <div id="index-recommend">
    <div id="recommend">
      <Banner></Banner>
    </div>
  </div>
</template>
<script>
import Banner from "../../components/Banner.vue"
export default {
  name: "index-recommend",
  components : {
    Banner
  }
}
</script>

<style lang="stylus" scoped>
#index-recommend
  position absolute 
  top 172px
  left 0
  right 0
  bottom 0
  background-color yellow 
</style>


