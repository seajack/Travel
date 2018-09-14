<template>

    <div class="header-city">
        城市选择
        <router-link to="/">
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
	export default {
		name: "HeaderCity"
	}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .header-city
        position: relative;
        overflow: hidden
        line-height: $headerHeight
        height: $headerHeight
        background: $bgColor
        text-align: center
        color: #ffffff
        font-size: .32rem
        .back-icon
            position: absolute;
            top: 0
            left: 0
            width: .64rem
            text-align: center
            font-size: .4rem
            color white

</style>
