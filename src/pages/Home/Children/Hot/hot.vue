<template>
  <div class="hot">
    <!-- 轮播图 -->
    <swiper :options="swiperOption" ref="mySwiper" v-if="homecasual.length>0">
      <swiper-slide v-for="(item, index) in homecasual" :key="index"><img :src="item.imgurl"></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <!-- 中间导航 -->
    <hotNav></hotNav>
    <!-- 广告位 -->
    <div class="hot-ad">
      <img src="../../../../common/img/home-ad/center_banner.jpeg" alt="" width="100%">
    </div>
    <!-- 商品列表 -->
    <hotShopList></hotShopList>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import hotShopList from './hotShopList'

import hotNav from './hotNav'
import {
  mapState
} from 'vuex'

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
        autoplay:{
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    ...mapState(['homecasual'])
  },
  components: {
    swiper,
    swiperSlide,
    hotNav,
    hotShopList
  },
  mounted(){
    this.$store.dispatch('reqHomeCasual'); // 获取轮播图数据
    this.$store.dispatch('reqHomeNav'); // 获取导航数据
    this.$store.dispatch('reqHomeShopList'); // 获取商品列表数据
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.hot 
  position absolute
  top 51px
  width 100%
  height 100%
  padding-top 46px
  background-color #F5F5F5
  img 
    width 100%
</style>