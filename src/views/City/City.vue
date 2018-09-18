<template>
    <div>
        <header-city></header-city>
        <city-search></city-search>
        <city-list :cities="cities" :hot="hotCities"></city-list>
        <alphabet :cities="cities"></alphabet>
    </div>
</template>

<script>
	import HeaderCity from './components/HeaderCity'
	import CitySearch from './components/Search'
	import CityList from './components/List'
	import Alphabet from './components/Alphabet'
	import axios from 'axios'

	export default {
		name: "City",
        data(){
			return{
				hotCities: [],
                cities: {}
            }

        },
		components: {
			HeaderCity,
			CitySearch,
			CityList,
			Alphabet
		},
		methods: {
			getCityInfo() {
				axios.get('/api/city.json')
					.then(this.handleGetCityInfoSucc)
			},
			handleGetCityInfoSucc(res) {
				res = res.data
                if(res.ret && res.data){
                	const data = res.data
                    this.cities = data.cities
                    this.hotCities = data.hotCities

                }

			}
		},
		mounted() {
			this.getCityInfo()
		}
	}
</script>

<style lang="stylus" scoped>

</style>
