<template>
  <div class="search">
    <!-- 搜索框 -->
    <searchnav></searchnav>

    <!-- 商品分类 -->
    <div class="category-container">
      <div class="first-category">
        <ul>
          <li class="menu-item" v-for="(goods, index) in searchgoods" :key="index">
            <span>{{goods.name}}</span>
          </li>
        </ul>
      </div>
      <div class="second-category">
        <ul>
          <li class="category-item" v-for="(goods, index1) in searchgoods" :key="index1">
            <div class="category-title">
              <h5>{{goods.name}}</h5>
            </div>
            <ul class="shop-list">
              <li class="shop-item" v-for="(item, index2) in goods.items" :key="index2">
                <img :src="item.icon" alt="">
                <span>{{item.title}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import searchnav from './Children/SearchNav'
import BScroll from 'better-scroll';
import {
  mapState
} from 'vuex'

export default {
  name:'Search',
  components:{
    searchnav
  },
  mounted(){
    this.$store.dispatch('reqSearchGoods');
  },
  computed:{
    ...mapState(['searchgoods'])
  },
  watch:{
    searchgoods(){
      this.$nextTick(()=>{
        this._initBScroll();
      })
    }
  },
  methods:{
    _initBScroll(){
      let leftScroll = new BScroll('.first-category',{
          scrollY: true,
          click: true
      })
      let rightScroll = new BScroll('.second-category',{
          scrollY: true,
          click: true
      })
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.search
  background-color #f5f5f5
  width 100%
  height 100%
  .category-container
    position absolute
    top 51px
    bottom 50px
    background-color #f5f5f5
    display flex
    overflow hidden
    .first-category
      background-color #fafafa
      color #666666
      flex 0 0 100px
      .menu-item
        height 60px
        width 100%
        display flex
        justify-content center
        align-items center
        font-size 17px
      .current
        color red
        background-color #fff
      .current::before
        content:''
        width 4px
        height 25px
        background-color red
        position absolute
        left 0
    .second-category
      width 100%
      background-color #fff
      .category-item
        .category-title
          display flex
          justify-content space-between
          align-items center
          margin 10px 30px
          h5
            color #151516
            margin-top 20px
            font-size 17px
            font-weight lighter
        .shop-list
          display flex
          flex-wrap wrap
          .shop-item
            width 25%
            padding 10px 4%
            img 
              width 100%
            span
              font-size 14px
              display flex
              justify-content center
              color #58595B
</style>