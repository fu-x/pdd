<template>
  <div class="shop-container">
    <ul class="goods-list">
      <li class="goods-item">
        <img class="goods-img" src="../../../../common/img/hot-list/hot-goods (4).jpg" alt="">
        <div class="goods-content">
          <h4 class="goods-title">【42.9元抢5000件，抢完恢复45元】【抗寒-20°】大码冲锋衣加绒加厚防风防水棉服外套男防寒登山服</h4>
          <div class="goods-bottom">
            <span class="goods-price">￥69</span>
            <span class="goods-counter">已拼5699件</span>
            <span class="goods-user">
              <img class="user1" src="../../../../common/img/hot-list/user1.jpg">
              <img class="user2" src="../../../../common/img/hot-list/user2.jpg">
            </span>
          </div>
        </div>
      </li>
      <li class="goods-item">
        <img class="goods-img" src="../../../../common/img/hot-list/hot-goods (4).jpg" alt="">
        <div class="goods-content">
          <h4 class="goods-title">【42.9元抢5000件，抢完恢复45元】【抗寒-20°】大码冲锋衣加绒加厚防风防水棉服外套男防寒登山服</h4>
          <div class="goods-bottom">
            <span class="goods-price">￥69</span>
            <span class="goods-counter">已拼5699件</span>
            <span class="goods-user">
              <img class="user1" src="../../../../common/img/hot-list/user1.jpg">
              <img class="user2" src="../../../../common/img/hot-list/user2.jpg">
            </span>
          </div>
        </div>
      </li>
      <li class="goods-item">
        <img class="goods-img" src="../../../../common/img/hot-list/hot-goods (4).jpg" alt="">
        <div class="goods-content">
          <h4 class="goods-title">【42.9元抢5000件，抢完恢复45元】【抗寒-20°】大码冲锋衣加绒加厚防风防水棉服外套男防寒登山服</h4>
          <div class="goods-bottom">
            <span class="goods-price">￥69</span>
            <span class="goods-counter">已拼5699件</span>
            <span class="goods-user">
              <img class="user1" src="../../../../common/img/hot-list/user1.jpg">
              <img class="user2" src="../../../../common/img/hot-list/user2.jpg">
            </span>
          </div>
        </div>
      </li>
      <li class="goods-item">
        <img class="goods-img" src="../../../../common/img/hot-list/hot-goods (4).jpg" alt="">
        <div class="goods-content">
          <h4 class="goods-title">【42.9元抢5000件，抢完恢复45元】【抗寒-20°】大码冲锋衣加绒加厚防风防水棉服外套男防寒登山服</h4>
          <div class="goods-bottom">
            <span class="goods-price">￥69</span>
            <span class="goods-counter">已拼5699件</span>
            <span class="goods-user">
              <img class="user1" src="../../../../common/img/hot-list/user1.jpg">
              <img class="user2" src="../../../../common/img/hot-list/user2.jpg">
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'hotShopList',
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.shop-container
  background-color #fff
  margin-bottom 50px
  .goods-list
    .goods-item
      height 168px
      padding 5px
      display flex
      justify-content space-between
      .goods-img 
        width 45%
        margin 5px
      .goods-content
        width 50%
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
            .user1
              flex none
              margin-right -8px
              width 40%
              border-radius 50%
            .user2
              margin-right 10px
              border-radius 50%
              width 40%
</style>