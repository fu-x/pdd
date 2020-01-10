<template>
  <div class="hot-nav">
    <!-- 滚动区域 -->
    <div class="hot-nav-content">
      <ul class="nav-content-inner" v-show="homenav.length > 0">
        <li class="inner-item" v-for="(item, index) in homenav" :key="index" :style="navItemStyle">
          <img :src="item.iconurl">
          <span>{{item.icontitle}}</span>
        </li>
      </ul>
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
import BScroll from 'better-scroll';

export default {
  name:'hotNav',
  data(){
    return {
      // 屏幕的宽度
      screenW: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      // 滚动内容的宽度
      scrollContentW: 750,
      // 滚动条背景长度
      bgBarW: 80,
      // 滚动条长度
      barInnerW: 0,
      // 记录滚动条移动距离
      barMoveLength: 0,
      // 记录X轴滚动距离左侧位置
      scrollX: 0,
      // navItem的宽度
      navItemW: 0
    }
  },
  computed:{
    innerBarStyle(){
      return {
        width:`${this.barInnerW}px`,
        left:`${this.barMoveLength}px`
        }
    },
    navItemStyle(){
      return {
        width:`${this.navItemW}px`,
      }
    },
    ...mapState(['homenav'])
  },
  methods:{
    getBottomBarW(){  // 获取滚动条宽度
      this.barInnerW = this.bgBarW * (this.screenW / this.scrollContentW);  
      if(this.barInnerW > this.bgBarW) this.barInnerW = this.bgBarW;
    },
    getBarMoveLength(){ // 获取滚动条需要移动的距离
      this.barMoveLength = (this.bgBarW / this.scrollContentW) * this.scrollX;
    },
    getNavItemW(){ // 获取navItem的宽度（屏幕的5分之1）
      console.log(111);
      this.navItemW = this.screenW * 0.2;
    }
  },
  mounted(){
    this.getBottomBarW();
    this.getNavItemW();
  },
  watch:{
    homenav(){
      // 初始化nav滚动
      this.navScroll = new BScroll('.hot-nav-content',{
          probeType: 3,
          scrollX: true,
          eventPassthrough: true,
          bounce: false
        });
      // 绑定滚动事件，获取当前X轴的位置
      this.navScroll.on('scroll', (pos)=>{
        this.scrollX = Math.abs(Math.round(pos.x));
        console.log(this.scrollX);
        
      })
    },
    scrollX(){
      this.getBarMoveLength();
    }
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
    overflow hidden
    .nav-content-inner
      width 750px
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
    height 1px
    background-color #ccc
    border 1px solid #ccc
    border-radius 5px
    position absolute
    left 50%
    margin-left -40px
    bottom 8px
    .hot-nav-bottom-inner
      position absolute
      width 0
      height 30%
      top 0
      left 0
      background-color orangered
      border-bottom 1px solid orangered
      border-top 1px solid orangered
      border-radius 5px
</style>