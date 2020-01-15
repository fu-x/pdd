<template>
  <div class="select-login">
    <div class="login-logo">
      <h1>网上购物</h1>
    </div>
    <h4>选择登录方式</h4>
    <router-link tag="button" to="/login">
      <svg t="1578997030627" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1216" width="25" height="25"><path d="M798.723234 174.782745c0-60.576657-49.106418-109.683075-109.683075-109.683075l-354.708628 0c-60.576657 0-109.683075 49.106418-109.683075 109.683075l0 673.980161c0 60.576657 49.106418 109.683075 109.683075 109.683075l354.708628 0c60.576657 0 109.683075-49.106418 109.683075-109.683075L798.723234 174.782745zM264.557398 237.015112l494.256894 0 0 529.049305-494.256894 0L264.557398 237.015112zM334.356091 105.008612 689.016623 105.008612c38.548968 0 69.798692 31.249725 69.798692 69.798692l0 22.298865-494.256894 0 0-22.298865C264.557398 136.25936 295.807123 105.008612 334.356091 105.008612zM689.016623 918.53704 334.356091 918.53704c-38.548968 0-69.798692-31.249725-69.798692-69.798692l0-43.788296 494.256894 0 0 43.788296C758.814292 887.287315 727.564567 918.53704 689.016623 918.53704z" p-id="1217" fill="#ffffff"></path><path d="M513.173732 829.943282c-16.70752 0-30.30112 13.5936-30.30112 30.30112 0 16.70752 13.5936 30.30112 30.30112 30.30112s30.299073-13.5936 30.299073-30.30112C543.472805 843.536882 529.881253 829.943282 513.173732 829.943282z" p-id="1218" fill="#ffffff"></path></svg>
      手机登录
    </router-link>
  </div>
</template>

<script>
export default {
  name:'Login'
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.select-login
  width 100%
  height 100%
  position fixed
  display flex
  flex-direction column
  align-items center
  background-color #f5f5f5
  z-index 1000
  .login-logo
    font-family 'STHupo'
    color #FF0000
    font-size 45px
    margin 150px 0 100px 0
  h4
    font-size 16px
    color #666666
    font-family 'Microsoft Yahei'
  button
    width 80%
    height 45px
    margin 20px
    border none 
    background-color #FFBB00
    border-radius 10px
    color #fff
    font-size 16px
    display flex
    justify-content center
    align-items center
</style>