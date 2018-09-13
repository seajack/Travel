<template>
    <div>
        <div class="title">
            周末去哪儿
        </div>
        <ul>
            <li class="item border-bottom"
                v-for="item of weekendList"
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
		data() {
			return {
				weekendList: [
					{
						id: '001',
						imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
						title: '上海必游TOP10',
						desc: '中西合璧，现代和传统各有各的精彩'
					},
					{
						id: '002',
						imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b7/2f4621a3a4e12c.jpg_r_640x214_d55c10ba.jpg',
						title: '学生最爱TOP10',
						desc: '学习之余最爱玩耍，爱玩的你不可错过'
					},
					{
						id: '003',
						imgUrl: 'http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg',
						title: '亲子时光TOP10',
						desc: '走进自然或玩转乐园，感知大千世界'
					}
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
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 34%
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
