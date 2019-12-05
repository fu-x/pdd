<template>
  <div class="hot">
    <!-- 轮播图 -->
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide><img src="../../../../common/img/home-swiper/s1.png"></swiper-slide>
      <swiper-slide><img src="../../../../common/img/home-swiper/s2.png"></swiper-slide>
      <swiper-slide><img src="../../../../common/img/home-swiper/s3.png"></swiper-slide>
      <swiper-slide><img src="../../../../common/img/home-swiper/s4.png"></swiper-slide>
      <swiper-slide><img src="../../../../common/img/home-swiper/s5.png"></swiper-slide>
      <swiper-slide><img src="../../../../common/img/home-swiper/s6.png"></swiper-slide>
      <swiper-slide><img src="../../../../common/img/home-swiper/s7.png"></swiper-slide>
      <swiper-slide><img src="../../../../common/img/home-swiper/s8.png"></swiper-slide>
      <swiper-slide><img src="../../../../common/img/home-swiper/s9.png"></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <!-- 中间导航 -->
    <hotNav></hotNav>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import hotNav from './hotNav'
export default {
  name: "hot",
  data () {
    return {
      swiperOption:{
        slidesPerView: 'auto',
        centeredSlides:true,
        spaceBetween: 10,
        loop:true,
        speed:600,
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
        },
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  components: {
    swiper,
    swiperSlide,
    hotNav
  },
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.hot 
  width: 100%;
  height: 100%;
  padding-top: 46px;
  background-color: #F5F5F5;
  img 
    width 100%
</style>