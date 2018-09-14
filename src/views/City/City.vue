<template>
    <div>
        <header-city></header-city>
        <city-search></city-search>
    </div>
</template>

<script>
	import HeaderCity from './components/HeaderCity'
	import CitySearch from './components/Search'

	export default {
		name: "City",
		components: {
			HeaderCity,
			CitySearch
		}
	}
</script>

<style scoped>

</style>
