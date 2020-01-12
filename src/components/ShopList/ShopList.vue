<template>
  <div class="recommend-item">
    <img class="item-img" :src="item.image_url" />
    <div class="item-content">
      <h5 class="item-title">{{item.short_name}}</h5>
      <div class="goods-type">
        <span class="type">极速退换</span>
        <span class="type">退换包运费</span>
      </div>
      <div class="item-bottom">
        <span class="item-price">￥{{item.normal_price/100}}</span>
        <span class="item-sales">{{item.sales_tip}}</span>
        <button class="item-btn" v-if="flag">找相关></button>
        <span class="item-user" v-else>
          <img class="user" v-lazy="user.avatar" v-for="(user, index) in item.bubble" :key="index">
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopList",
  props:['item','flag']
};
</script>

<style lang="stylus" scoped ref="stylesheet/stylus">
    .recommend-item
      width 49.7%
      background-color #fff
      margin-bottom 2px
      .item-img
        width 100%
      .item-content
        display flex
        justify-content space-between
        flex-direction column
        margin 5px 0
        height 80px
        .item-title
          line-height 20px
          height 20px
          font-size 13px
          margin 0 5px
          overflow hidden
        .goods-type
          font-size 11px
          color red
          margin 0 5px
          .type
            background-color rgba(255, 87, 6, 0.08)
        .item-bottom
          display flex
          justify-content space-between
          align-items center
          margin-bottom 5px
          margin-left 5px 
          .item-price
            font-size 17px
            font-weight bold
            color red
          .item-sales
            font-size 3px
            color #9c9c9c
          .item-btn
            border 1px solid #cccccc
            border-right none
            color #58595b
            background-color #fff 
            font-size 10px
            border-radius 15px 0 0 15px
            height 25px
          .item-user
            width 50px
            img
              flex none
              margin-right -8px
              width 22px
              border-radius 50%
</style>