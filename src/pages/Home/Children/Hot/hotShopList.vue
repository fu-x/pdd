<template>
  <div class="shop-container">
    <ul class="goods-list" v-if="homeshoplist && homeshoplist.length > 0">
      <li class="goods-item" v-for="(item, index) in homeshoplist" :key="index">
        <img class="goods-img" v-lazy="item.thumb_url" alt="">
        <div class="goods-content">
          <h4 class="goods-title">{{item.goods_name}}</h4>
          <div class="goods-type">
            <span class="type">极速退换</span>
            <span class="type">退换包运费</span>
          </div>
          <div class="goods-bottom">
            <span class="goods-price">￥{{item.normal_price/100}}</span>
            <span class="goods-counter">{{item.sales_tip}}</span>
            <span class="goods-user">
              <img class="user" v-lazy="user.avatar" v-for="(user, index) in item.bubble" :key="index">
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  name:'hotShopList',
  computed: {
    ...mapState(['homeshoplist'])
  },
  mounted(){
    console.log(this.homeshoplist);
    
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.shop-container
  background-color #fff
  margin-bottom 50px
  .goods-list
    .goods-item
      height 168px
      padding 2px
      display flex
      justify-content space-between
      .goods-img 
        width 42%
        margin 5px
      .goods-content
        width 55%
        display flex
        flex-direction column
        justify-content space-between
        border-bottom 1px solid #eee
        .goods-title
          line-height 20px
          height 60px
          width 94%
          margin-left 3%
          font-size 14px
          overflow hidden
        .goods-type
          font-size 11px
          color red
          padding-top 50px
          .type
            background-color rgba(255, 87, 6, 0.08)
        .goods-bottom
          margin-bottom 5px
          display flex
          flex-direction row
          justify-content space-between
          align-items center
          .goods-price
            color red
            font-size 18px
            font-weight 700
          .goods-counter
            color #aaa
            font-size 12px
            flex none
          .goods-user
            width 50px
            .user
              flex none
              margin-right -8px
              width 22px
              border-radius 50%
</style>