<template>
  <div id="app">
    <div id="header">
      <img src="./assets/imge/rz.png" alt="toggle">
      <div id="nav-main">
        <img src="./assets/imge/t_actionbar_music_normal.png" alt="">
        <img src="./assets/imge/t_actionbar_discover_selected.png" alt="">
        <img src="./assets/imge/t_actionbar_video_normal.png" alt="">
      </div>
      <img src="./assets/imge/sj.png" alt="toggle">
    </div>
    <router-view></router-view>
  </div>
</template>
<style lang="stylus" scoped>
  #app
    position fixed 
    width 100vw
    height 100vh
  #header 
    widtn 100vw
    height 100px
    background-color rgb(212,60,51)
    position relative
    left 0
    top 0
    &>img
      height 64px
      position absolute
      top 50%
      transform translate(0,-50%)
  #header>img:nth-child(1)
    left 34px
  #header>img:nth-child(3)
    right 34px
  #nav-main
    height 100px
    width 382px
    position absolute 
    left 50%
    top 50%
    transform translate(-50%,-50%)
    &>img 
      height 100px
</style>
