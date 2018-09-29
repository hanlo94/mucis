<template>
    <div id="show-panel">
        <div id="panel-title">{{title}}</div>
        <div id="show-item" v-for="(item,key) in personalized" :key="key">
            <img :src="item.picUrl" alt="">
            <p>{{item.name}}</p>
        </div>
        <div class="clear-fix"></div>
    </div>
</template>
<script>
export default {
    name: "showPanel",
    props: ["title"],
    computed: {
        personalized () {
            return this.$store.state.personalized
        }
    },
    mounted() {
        return this.$store.dispatch("getPersonalized")
    }
}
</script>
<style lang="stylus" scoped>
#show-panel
    padding 32px 24px 0 24px

#panel-title
    font-size 32px
    font-weight 600
    padding 0 4px 20px 
#show-item
    width 33.333%
    float left
    font-size 24px 
    img 
        width 100%
        padding 4px
        box-sizing border-box
        border-radius 15px
#show-item>p
    width 100%
    padding 0 10px
    margin 10px 0 28px 0
    box-sizing border-box
    height 63px
    overflow hidden
    text-overflow: ellipsis
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
</style>


