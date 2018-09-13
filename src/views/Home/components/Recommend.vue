<template>
    <div>
        <div class="title">
            热销推荐
        </div>
        <ul>
            <li class="item border-bottom"
            v-for="item of recommendList"
            :key="item.id">
                <img class="item-img"
                     :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-btn">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: "Recommend",
		data() {
			return {
				recommendList:[
                    {
						id: '001',
						imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/14/637beee93f571bd208bd20610c848e64.jpg_150x150_e80b0d91.jpg',
						title: '应县木塔(AAAA景区)',
						desc: '应县 木塔与 巴黎 埃菲尔铁塔和 比萨斜塔并称为世界三大奇塔。'
                    },
					{
						id: '002',
						imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/14/637beee93f571bd208bd20610c848e64.jpg_150x150_e80b0d91.jpg',
						title: '应县木塔(AAAA景区)',
						desc: '应县 木塔与 巴黎 埃菲尔铁塔和 比萨斜塔并称为世界三大奇塔。'
					},
					{
						id: '003',
						imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/14/637beee93f571bd208bd20610c848e64.jpg_150x150_e80b0d91.jpg',
						title: '应县木塔(AAAA景区)',
						desc: '应县 木塔与 巴黎 埃菲尔铁塔和 比萨斜塔并称为世界三大奇塔。'
					},
					{
						id: '004',
						imgUrl: 'http://img1.qunarzz.com/sight/p0/201403/14/637beee93f571bd208bd20610c848e64.jpg_150x150_e80b0d91.jpg',
						title: '应县木塔(AAAA景区)',
						desc: '应县 木塔与 巴黎 埃菲尔铁塔和 比萨斜塔并称为世界三大奇塔。'
					},
				]
		}
		}
	}
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    .title
        margin-top: .2rem
        line-height: .7rem
        background: #eee
        text-indent .2rem
        text-align left
        font-size .32rem
        font-weight 500

    .item
        overflow: hidden
        display: flex
        height: 1.9rem
        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem
        .item-info
            flex: 1
            padding: .1rem
            min-width: 0
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
            .item-btn
                line-height: .44rem
                background #ff9300
                padding: 0 .2rem
                border-radius .06rem
                color: #ffffff
                margin-top .16rem
                font-size: small


</style>
