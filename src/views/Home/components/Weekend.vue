<template>
    <div>
        <div class="title">
            周末去哪儿
        </div>
        <ul>
            <li class="item border-bottom"
                v-for="item of list"
                :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img"
                         :src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: "Weekend",
        props:{
			list: Array
        }
	}
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    .title
        line-height: .7rem
        background: #eee
        text-indent .2rem
        text-align left
        font-size .32rem
        font-weight 500
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 37.09%
        .item-img
            width: 100%
    .item-info
        padding: .1rem
        text-align left
        .item-title
            line-height: .54rem
            font-size: .3rem
            font-weight 300
            ellipse()
        .item-desc
            line-height: .32rem
            color: #9e9e9e
            ellipse()


</style>
