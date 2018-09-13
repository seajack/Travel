<template>
    <div class="home">
        <home-header/>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <recommend></recommend>
        <weekend></weekend>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import Recommend from './components/Recommend'
    import Weekend from './components/Weekend'


    export default {
        name: 'home',
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            Recommend,
            Weekend

        }
    }
</script>
