<template>
  <div class="hot-nav">
    <!-- 滚动区域 -->
    <div class="hot-nav-content">
      <div class="nav-content-inner" v-if="homenav.length > 0">
        <a class="inner-item" v-for="(item, index) in homenav" :key="index">
          <img :src="item.iconurl">
          <span>{{item.icontitle}}</span>
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
import {
  mapState
} from 'vuex'

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
    },
    ...mapState(['homenav'])
  },
  methods:{
    getBottomBarW(){  // 获取滚动条宽度
      console.log(this.screenW);
      console.log(this.scrollContentW);
      
      this.barInnerW = this.bgBarW * (this.screenW / this.scrollContentW);  
      if(this.barInnerW > this.bgBarW) this.barInnerW = this.bgBarW;
    },
    bindEvent(){  // 绑定事件
      this.$el.addEventListener('touchstart', this.handleTouchStart, false);
      this.$el.addEventListener('touchmove', this.handleTouchMove, false);
      this.$el.addEventListener('touchend', this.handleTouchEnd, false);
    },
    handleTouchStart(event){  // 开始触摸
      this.startPoint = event.changedTouches[0].pageX;
    },
    handleTouchMove(event){ // 触摸移动
      var contentMoveLength = event.changedTouches[0].pageX - this.startPoint;
      this.barMoveLength = -contentMoveLength * (this.bgBarW / this.scrollContentW) + this.endPoint;
      if(this.barMoveLength < 0){
        this.barMoveLength = 0;
      }else if(this.barMoveLength >= (this.bgBarW - this.barInnerW)){
        this.barMoveLength = this.bgBarW - this.barInnerW;
      }
    },
    handleTouchEnd(event){  //停止触摸
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
      width 800px
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
        font-size 13px
        img 
          width 50%
          margin-bottom 10px
  .hot-nav-content::-webkit-scrollbar
    display none
  .hot-nav-bottom
    width 80px
    height 3px
    background-color #ccc
    position absolute
    left 50%
    margin-left -40px
    bottom 8px
    .hot-nav-bottom-inner
      position absolute
      width 0
      height 50%
      left 0
      background-color orangered
      border-bottom 1px solid orangered
      border-top 1px solid orangered
      border-radius 5px
</style>