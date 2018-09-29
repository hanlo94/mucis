<template>
    <div id="nav-button">
        <div id="btn-item" v-for="(item,key) in items" :key="key">
            <div>
                <img :src="item.imgUrl" alt="">
            </div>
            <span>{{item.title}}</span>
        </div> 
        <div class="clear-fix"></div>
    </div>
    
</template>
<script>
export default {
    name: "nav-button",
    data () {
        return {
            items: [
                {
                    imgUrl: require("../assets/imge/t_dragonball_icn_fm.png"),
                    title: "私人FM"
                },
                {
                    imgUrl: require("../assets/imge/t_dragonball_icn_daily.png"),
                    title: "每日推荐"
                },
                 {
                    imgUrl: require("../assets/imge/t_dragonball_icn_playlist.png"),
                    title: "歌单"
                },
                 {
                    imgUrl: require("../assets/imge/t_dragonball_icn_rank.png"),
                    title: "排行榜"
                },
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
#nav-button
    padding-bottom 30px
    border-bottom 1px solid rgba(0,0,0,0.4)
#btn-item
    width 25vw
    float left
    margin-left 5px
    font-size 24px 
    text-align center
#btn-item>div
    background-color rgb(212,60,51)
    width 12.5
    border-radius 50%
    margin 3vw 6.25vw 10px
    img 
        width 100%
        display block
</style>


