<template>
    <div class="header">
        <div class="header-right">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="city">
            <div class="header-right">{{this.city}}
                <span class="iconfont arrow-icon">&#xe668;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
	export default {
		props:{
			city: String
        },
		name: "HomeHeader"
	}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "~styles/varibles.styl"
    .header
        display: flex
        line-height: $headerHeight
        background: $bgColor
        color: #ffffff
        .header-left
            width: 1.65rem
            float: left
            color: #ffffff
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            height: .66rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .2rem
            background: #fff
            border-radius: .1rem
            color: #ccc
        .header-right
            width: 1.24rem
            float: right
            text-align: center
            .arrow-icon
                margin-left: -.06rem
                font-size: .2rem


</style>
