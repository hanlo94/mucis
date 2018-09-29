<template>
  <div id="index-recommend">
    <div id="recommend">
      <Banner></Banner>
      <NavButton></NavButton>
      <showPanel :title="'推荐歌单'"></showPanel> 
    </div>
  </div>
</template>
<script>
import Banner from "../../components/Banner.vue";
import NavButton from "../../components/NavButton";
import showPanel from "../../components/showPanel";
export default {
  name: "index-recommend",
  components : {
    Banner,
    NavButton,
    showPanel
  }
}
</script>

<style lang="stylus" scoped>
#index-recommend
  position absolute 
  top 172px
  left -15px
  right -15px
  bottom 0
  background-color blue
  paddimg 0 15px
  overflow-y scroll 
  overflow-x hidden
</style>


