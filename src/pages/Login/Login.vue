<template>
  <div class="login-container">
    <div class="login-logo">
      <h1>网上购物</h1>
    </div>
    <div class="login-title">
      <span :class="{select:loginPattern}"  @click="switchPattern(true)">验证码登录</span>
      <span :class="{select:!loginPattern}" @click="switchPattern(false)">密码登录</span>
    </div>
    <div class="login-content">
      <form>
        <!-- 验证码登录 -->
        <div class="login-verification" v-show="loginPattern">
          <section class="phone">
            <svg t="1579103515045" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10607" width="22" height="22"><path d="M798.723234 174.782745c0-60.576657-49.106418-109.683075-109.683075-109.683075l-354.708628 0c-60.576657 0-109.683075 49.106418-109.683075 109.683075l0 673.980161c0 60.576657 49.106418 109.683075 109.683075 109.683075l354.708628 0c60.576657 0 109.683075-49.106418 109.683075-109.683075L798.723234 174.782745zM264.557398 237.015112l494.256894 0 0 529.049305-494.256894 0L264.557398 237.015112zM334.356091 105.008612 689.016623 105.008612c38.548968 0 69.798692 31.249725 69.798692 69.798692l0 22.298865-494.256894 0 0-22.298865C264.557398 136.25936 295.807123 105.008612 334.356091 105.008612zM689.016623 918.53704 334.356091 918.53704c-38.548968 0-69.798692-31.249725-69.798692-69.798692l0-43.788296 494.256894 0 0 43.788296C758.814292 887.287315 727.564567 918.53704 689.016623 918.53704z" p-id="10608" fill="#aaaaaa"></path><path d="M513.173732 829.943282c-16.70752 0-30.30112 13.5936-30.30112 30.30112 0 16.70752 13.5936 30.30112 30.30112 30.30112s30.299073-13.5936 30.299073-30.30112C543.472805 843.536882 529.881253 829.943282 513.173732 829.943282z" p-id="10609" fill="#aaaaaa"></path></svg>
            <input ref="phone1" type="tel" name="phone" maxlength="11" placeholder="手机号" v-model="phone">
            <button v-if="countdown === 0"  class="verification-code" :class="{isright:phoneRight}" @click.prevent="getVerifyCode()">获取验证码</button>
            <button v-else disabled="disabled" class="verification-code">已发送({{countdown}}s)</button>
          </section>
          <section class="code">
            <svg t="1579103641779" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11503" width="18" height="18"><path d="M916.210526 1024 107.789474 1024C78.012632 1024 53.894737 999.855158 53.894737 970.105263L53.894737 485.052632C53.894737 455.275789 78.012632 431.157895 107.789474 431.157895L188.631579 431.157895 188.631579 323.368421C188.631579 144.761263 333.419789 0 512 0 690.580211 0 835.368421 144.761263 835.368421 323.368421L835.368421 431.157895 916.210526 431.157895C945.987368 431.157895 970.105263 455.275789 970.105263 485.052632L970.105263 970.105263C970.105263 999.855158 945.987368 1024 916.210526 1024ZM781.473684 323.368421C781.473684 174.538105 660.830316 53.894737 512 53.894737 363.169684 53.894737 242.526316 174.538105 242.526316 323.368421L242.526316 431.157895 781.473684 431.157895 781.473684 323.368421ZM916.210526 485.052632 835.368421 485.052632 188.631579 485.052632 107.789474 485.052632 107.789474 970.105263 916.210526 970.105263 916.210526 485.052632ZM512 592.842105C526.874947 592.842105 538.947368 604.914526 538.947368 619.789474L538.947368 835.368421C538.947368 850.243368 526.874947 862.315789 512 862.315789 497.125053 862.315789 485.052632 850.243368 485.052632 835.368421L485.052632 619.789474C485.052632 604.914526 497.125053 592.842105 512 592.842105Z" p-id="11504" fill="#aaaaaa"></path></svg>
            <input type="tel" name="code" maxlength="6" placeholder="验证码">
          </section>
        </div>
        <!-- 密码登录 -->
        <div class="login-cipher" v-show="!loginPattern">
          <section class="phone">
            <svg t="1579103515045" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10607" width="22" height="22"><path d="M798.723234 174.782745c0-60.576657-49.106418-109.683075-109.683075-109.683075l-354.708628 0c-60.576657 0-109.683075 49.106418-109.683075 109.683075l0 673.980161c0 60.576657 49.106418 109.683075 109.683075 109.683075l354.708628 0c60.576657 0 109.683075-49.106418 109.683075-109.683075L798.723234 174.782745zM264.557398 237.015112l494.256894 0 0 529.049305-494.256894 0L264.557398 237.015112zM334.356091 105.008612 689.016623 105.008612c38.548968 0 69.798692 31.249725 69.798692 69.798692l0 22.298865-494.256894 0 0-22.298865C264.557398 136.25936 295.807123 105.008612 334.356091 105.008612zM689.016623 918.53704 334.356091 918.53704c-38.548968 0-69.798692-31.249725-69.798692-69.798692l0-43.788296 494.256894 0 0 43.788296C758.814292 887.287315 727.564567 918.53704 689.016623 918.53704z" p-id="10608" fill="#aaaaaa"></path><path d="M513.173732 829.943282c-16.70752 0-30.30112 13.5936-30.30112 30.30112 0 16.70752 13.5936 30.30112 30.30112 30.30112s30.299073-13.5936 30.299073-30.30112C543.472805 843.536882 529.881253 829.943282 513.173732 829.943282z" p-id="10609" fill="#aaaaaa"></path></svg>
            <input ref="phone2" type="tel" name="phone" maxlength="11" placeholder="手机号" v-model="phone">
          </section>
          <section class="code">
            <svg t="1579103641779" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11503" width="18" height="18"><path d="M916.210526 1024 107.789474 1024C78.012632 1024 53.894737 999.855158 53.894737 970.105263L53.894737 485.052632C53.894737 455.275789 78.012632 431.157895 107.789474 431.157895L188.631579 431.157895 188.631579 323.368421C188.631579 144.761263 333.419789 0 512 0 690.580211 0 835.368421 144.761263 835.368421 323.368421L835.368421 431.157895 916.210526 431.157895C945.987368 431.157895 970.105263 455.275789 970.105263 485.052632L970.105263 970.105263C970.105263 999.855158 945.987368 1024 916.210526 1024ZM781.473684 323.368421C781.473684 174.538105 660.830316 53.894737 512 53.894737 363.169684 53.894737 242.526316 174.538105 242.526316 323.368421L242.526316 431.157895 781.473684 431.157895 781.473684 323.368421ZM916.210526 485.052632 835.368421 485.052632 188.631579 485.052632 107.789474 485.052632 107.789474 970.105263 916.210526 970.105263 916.210526 485.052632ZM512 592.842105C526.874947 592.842105 538.947368 604.914526 538.947368 619.789474L538.947368 835.368421C538.947368 850.243368 526.874947 862.315789 512 862.315789 497.125053 862.315789 485.052632 850.243368 485.052632 835.368421L485.052632 619.789474C485.052632 604.914526 497.125053 592.842105 512 592.842105Z" p-id="11504" fill="#aaaaaa"></path></svg>
            <input type="tel" name="code" maxlength="20" placeholder="密码">
            <img class="isshow" src="./images/show.png" alt="">
            <img src="./images/hide.png" alt="">
          </section>
        </div>
        <button class="submit-btn">登录</button>
      </form>
    </div>
    <button class="back-btn">返回</button>
  </div>
</template>

<script>
export default {
  name:'Login',
  data(){
    return {
      loginPattern: true, // true代表验证码登录 false代表密码登录
      phone: '',
      countdown: 0
    }
  },
  methods:{
    switchPattern(flag){
      this.loginPattern = flag;
      if(flag){
        this.$nextTick(()=>{
          this.$refs.phone1.focus();
        })
      }
      else{
        this.$nextTick(()=>{
          this.$refs.phone2.focus();
        })
      }
    },
    getVerifyCode(){
      this.countdown = 10;
      let interval = setInterval(() => {
        this.countdown--;
        if(this.countdown === 0){
          clearInterval(interval);
        }
      }, 1000);
    }
  },
  computed:{
    phoneRight(){
      return /^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone);
    }
  },
  mounted(){
    this.$refs.phone1.focus();
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.login-container
  width 100%
  height 100%
  background-color #f5f5f5
  display flex
  flex-direction column
  align-items center
  position fixed
  .login-logo
    font-family 'STHupo'
    color #FF0000
    font-size 45px
    margin 85px 0
  .login-title
    font-size 16px
    color #666666
    font-family 'Microsoft Yahei'
    width 60%
    display flex
    justify-content space-between
    .select
      color #ff5000
      height 25px
      border-bottom 2px solid #ff5000
  .login-content
    margin-top 30px
    width 100%
    .login-verification,.login-cipher
      width 100%
      .phone,.code
        width 100%
        height 60px
        display flex
        align-items center
        background-color #fff
        margin-bottom 1px
        padding-left 10px
        img
          display none
        .isshow
          display inline
        input
          width 60%
          height 100%
          padding 0
          margin 0 10px
          border none
          outline none 
          font-size 16px
          color #666666
        .verification-code
          width 90px
          height 30px
          color #FFE0B2
          background-color transparent
          border 1px solid #FFE0B2
          margin-right 10px
          border-radius 5px
          pointer-events none
        .isright
          border 1px solid #FF9800
          color #FF9800
          pointer-events auto
    .submit-btn
      width 90%
      display block
      margin 15px auto
      height 40px
      border none 
      background-color #ffbb00
      border-radius 5px
  .back-btn
    width 90%
    display block
    margin 0 auto
    height 40px
    border 1px solid #ffbb00 
    background-color #fff
    border-radius 5px
</style>