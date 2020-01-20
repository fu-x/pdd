<template>
  <div class="me-order">
    <div class="order-title">
      <h5>我的订单</h5>
      <h6>查看全部订单></h6>
    </div>
    <div class="order-content">
      <div class="order-item">
        <i class="icon-user_02"></i>
        <span>待付款</span>
      </div>
      <div class="order-item">
        <i class="icon-user_03"></i>
        <span>待发货</span>
      </div>
      <div class="order-item">
        <i class="icon-user_04"></i>
        <span>待收货</span>
      </div>
      <div class="order-item">
        <i class="icon-user_05"></i>
        <span>待评价</span>
      </div>
      <div class="order-item">
        <i class="icon-user_06"></i>
        <span>退款/售后</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeOrder'
}
</script>

<style lang="stylus" scoped ref="stylesheet/stylus">
.me-order
  width 88%
  margin 10px 3%
  background-color #fff
  border-radius 10px
  padding 3%
  .order-title
    width 100%
    height 30px
    display flex
    justify-content space-between
    align-items center
    border-bottom 1px solid #eeeeee
    h5
      font-size 14px
    h6
      font-size 12px
      color #bbbbbb
  .order-content
    margin-top 20px
    display flex
    width 100%
    height 60px
    .order-item
      width 20%
      display flex
      flex-direction column
      justify-content center
      align-items center
      span 
        color #58595b
        font-size 12px
        margin-top 5px


</style>