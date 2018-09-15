<template>
    <div>
        <header-city></header-city>
        <city-search></city-search>
        <city-list></city-list>
        <alphabet></alphabet>
    </div>
</template>

<script>
	import HeaderCity from './components/HeaderCity'
	import CitySearch from './components/Search'
	import CityList from './components/List'
	import Alphabet from './components/Alphabet'

	export default {
		name: "City",
		components: {
			HeaderCity,
			CitySearch,
			CityList,
			Alphabet
		}
	}
</script>

<style lang="stylus" scoped>

</style>
