<template>
  <div class="hot-nav">
    <!-- 滚动区域 -->
    <div class="hot-nav-content">
      <div class="nav-content-inner">
        <a class="inner-item">
          <img src="../../../../common/img/home-hotNav/nav_icon01.png">
          <span>现时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../../../common/img/home-hotNav/nav_icon01.png">
          <span>现时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../../../common/img/home-hotNav/nav_icon01.png">
          <span>现时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../../../common/img/home-hotNav/nav_icon01.png">
          <span>现时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../../../common/img/home-hotNav/nav_icon01.png">
          <span>现时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../../../common/img/home-hotNav/nav_icon01.png">
          <span>现时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../../../common/img/home-hotNav/nav_icon01.png">
          <span>现时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../../../common/img/home-hotNav/nav_icon01.png">
          <span>现时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../../../common/img/home-hotNav/nav_icon01.png">
          <span>现时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../../../common/img/home-hotNav/nav_icon01.png">
          <span>现时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../../../common/img/home-hotNav/nav_icon01.png">
          <span>现时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../../../common/img/home-hotNav/nav_icon01.png">
          <span>现时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../../../common/img/home-hotNav/nav_icon01.png">
          <span>现时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../../../common/img/home-hotNav/nav_icon01.png">
          <span>现时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../../../common/img/home-hotNav/nav_icon01.png">
          <span>现时秒杀</span>
        </a>
        <a class="inner-item">
          <img src="../../../../common/img/home-hotNav/nav_icon01.png">
          <span>现时秒杀</span>
        </a>
      </div>
    </div>
    <!-- 滚动条 -->
    <div class="hot-nav-bottom">
      <div class="hot-nav-bottom-inner" :style="innerBarStyle">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'hotNav',
  data(){
    return {
      // 屏幕的宽度
      screenW: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      // 滚动内容的宽度
      scrollContentW: 720,
      // 滚动条背景长度
      bgBarW: 80,
      // 滚动条长度
      barInnerW: 0,
      // 记录起点
      startPoint: 0,
      // 记录终点
      endPoint: 0,
      // 记录滚动条移动距离
      barMoveLength: 0,
    }
  },
  computed:{
    innerBarStyle(){
      return {
        width:`${this.barInnerW}px`,
        left:`${this.barMoveLength}px`
        }
    }
  },
  methods:{
    getBottomBarW(){
      this.barInnerW = this.bgBarW * (this.screenW / this.scrollContentW);
      if(this.barInnerW > this.bgBarW) this.barInnerW = this.bgBarW;
    },
    bindEvent(){
      this.$el.addEventListener('touchstart', this.handleTouchStart, false);
      this.$el.addEventListener('touchmove', this.handleTouchMove, false);
      this.$el.addEventListener('touchend', this.handleTouchEnd, false);
      this.$el.addEventListener('scroll',this.handleScrollMove,false);
    },
    handleScrollMove(event){
      console.log(event);
      
    }
    ,
    handleTouchStart(event){
      this.startPoint = event.changedTouches[0].pageX;
    },
    handleTouchMove(event){
      var contentMoveLength = event.changedTouches[0].pageX - this.startPoint;
      this.barMoveLength = -contentMoveLength * (this.bgBarW / this.scrollContentW) + this.endPoint;
      if(this.barMoveLength < 0){
        this.barMoveLength = 0;
      }else if(this.barMoveLength >= (this.bgBarW - this.barInnerW)){
        this.barMoveLength = this.bgBarW - this.barInnerW;
      }
    },
    handleTouchEnd(event){
      this.endPoint = this.barMoveLength;
    }
  },
  mounted(){
    this.getBottomBarW();
    this.bindEvent();
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.hot-nav
  width 100%
  height 180px
  background-color #fff
  position relative
  padding-bottom 10px
  .hot-nav-content
    width 100%
    overflow-x scroll
    .nav-content-inner
      width 720px
      height 180px
      display flex
      flex-wrap wrap
      .inner-item
        width 12.5%
        height 50%
        display flex
        flex-direction column
        justify-content center
        align-items  center
        color #666666
        font-size 14px
        img 
          width 50%
          margin-bottom 10px
  .hot-nav-content::-webkit-scrollbar
    display none
  .hot-nav-bottom
    width 80px
    height 2px
    background-color #ccc
    position absolute
    left 50%
    margin-left -40px
    bottom 8px
    border:1px solid #ccc;
    border-radius:25px;
    .hot-nav-bottom-inner
      position absolute
      width 0
      height 50%
      left 0
      background-color orangered
      border 1px solid orangered
      border-radius 50px
</style>