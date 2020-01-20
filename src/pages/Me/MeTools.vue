<template>
  <div class="me-tools">
    <div class="tools-title">
      <h5>实用工具</h5>
    </div>
    <div class="tools-content">
      <div class="tools-item">
        <i class="icon-user_07"></i>
        <span>收藏夹</span>
      </div>
      <div class="tools-item">
        <i class="icon-user_08"></i>
        <span>红包卡券</span>
      </div>
      <div class="tools-item">
        <i class="icon-user_09"></i>
        <span>关注店铺</span>
      </div>
      <div class="tools-item">
        <i class="icon-user_10"></i>
        <span>我的钱包</span>
      </div>
      <div class="tools-item">
        <i class="icon-user_11"></i>
        <span>客服中心</span>
      </div>
      <div class="tools-item">
        <i class="icon-user_12"></i>
        <span>会员中心</span>
      </div>
      <div class="tools-item">
        <i class="icon-user_13"></i>
        <span>我的评价</span>
      </div>
      <div class="tools-item">
        <i class="icon-user_14"></i>
        <span>红包签到</span>
      </div>
      <div class="tools-item">
        <i class="icon-user_15"></i>
        <span>收货地址</span>
      </div>
      <div class="tools-item">
        <i class="icon-user_16"></i>
        <span>新人红包</span>
      </div>
      <div class="tools-item">
        <i class="icon-user_17"></i>
        <span>设置</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeTools'
}
</script>

<style lang="stylus" scoped ref="stylesheet/stylus">
.me-tools
  width 88%
  margin 10px 3%
  background-color #fff
  border-radius 10px
  padding 3%
  .tools-title
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
  .tools-content
    margin-top 20px
    display flex
    flex-wrap wrap
    width 100%
    .tools-item
      width 20%
      display flex
      flex-direction column
      justify-content center
      align-items center
      margin-bottom 20px
      span 
        color #58595b
        font-size 12px
        margin-top 5px


</style>