<template>
    <div class="home">
        <home-header :city="city"></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <recommend :list="recommendList"></recommend>
        <weekend :list="weekendList"></weekend>
    </div>
</template>

<script>
	// @ is an alias to /src
	import HomeHeader from './components/Header'
	import HomeSwiper from './components/Swiper'
	import HomeIcons from './components/Icons'
	import Recommend from './components/Recommend'
	import Weekend from './components/Weekend'
	import axios from 'axios'

	export default {
		name: 'home',
		components: {
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			Recommend,
			Weekend
		},
		data() {
			return {
				city: '',
				swiperList: [],
				iconList: [],
				recommendList: [],
				weekendList: []

			}
		},
		methods: {
			getHomeInfo() {
				axios.get('/api/index.json')
					.then(this.getHomeInfoScc)
			},
			getHomeInfoScc(res) {
				res = res.data
				if (res.ret && res.data) {
					const data = res.data
					this.city = data.city
					this.swiperList = data.swiperList
					this.iconList = data.iconList
					this.recommendList = data.recommendList
					this.weekendList = data.weekendList
				}
			}
		},
		mounted() {
			this.getHomeInfo()

		}
	}
</script>
