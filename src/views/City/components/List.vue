<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper"
                         v-for="item of hot"
                         :key="item.id"
                         @click="handleCityClick(item.name)"
                         @touchstart="handleCityClick(item.name)"

                    >
                        <div class="button">{{item.name}}</div>
                    </div>

                </div>
            </div>
            <div class="area"
                 v-for="(item, key) of cities"
                 :key="key"
                 :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom"
                         v-for="innerItem of item"
                         :key="innerItem.id"
                         @click="handleCityClick(innerItem.name)"
                         @touchstart="handleCityClick(innerItem.name)"
                    >{{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
	import Bscroll from 'better-scroll'

	export default {
		name: "CityList",
		props: {
			cities: Object,
			hot: Array,
			letter: String
		},
		methods: {
			handleCityClick(city) {
				this.$store.commit('changeCity', city);
				this.$router.push('/')
			}
		},
		mounted() {
			this.scroll = new Bscroll(this.$refs.wrapper)
		},
		watch: {
			letter() {
				if (this.letter) {
					const element = this.$refs[this.letter][0];
					this.scroll.scrollToElement(element)
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc

    .border-bottom
        &:before
            border-color: #ccc

    .border-bottom
        &:before
            border-color: #ccc

    .list
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        buttom: 0
        /*多大的坑啊，不设height 100%就不滚动*/
        height 100%
        .title
            line-height .44rem
            background: #eee
            padding-left .2rem
            color: #666
            font-size: .26rem
            text-align: left
        .button-list
            overflow hidden
            padding: .1rem .6rem .1rem .1rem
            .button-wrapper
                float: left
                width: 33.33%
                .button
                    margin: .1rem
                    padding: .1rem 0
                    text-align: center
                    border: .02rem solid aqua
                    background $bgColor
                    border-radius .1rem
                    background-color: $bgColor
                    color: #ffffff
        .item-list
            .item
                line-height: .76rem
                color: #666
                padding-left: .2rem
                text-align left
</style>
