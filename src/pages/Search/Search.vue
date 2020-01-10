<template>
  <div class="search">
    <!-- 搜索框 -->
    <searchnav :showSearchPanel="showSearchPanel"></searchnav>
    <!-- 搜索界面 -->
    <searchpanel v-if="isShow" :showSearchPanel="showSearchPanel"></searchpanel>
    <!-- 商品分类 -->
    <div class="category-container">
      <div class="first-category">
        <ul>
          <li class="menu-item" 
          v-for="(goods, index) in searchgoods" 
          :key="index"
          :class="{current: index === currentIndex}"
          @click="clickLeftLi(index)"
          ref="leftList"
          >
            <span>{{goods.name}}</span>
          </li>
        </ul>
      </div>
      <div class="second-category">
        <ul ref="rightList">
          <li class="category-item" 
          v-for="(goods, index) in searchgoods" 
          :key="index"
          >
            <div class="category-title">
              <h5>{{goods.name}}</h5>
            </div>
            <ul class="goods-brands" v-if="goods.tag !==''">
              <li class="brands-item" v-for="(item, index) in goods.category" :key="index">
                <img :src="item.icon" alt=""> 
              </li>
            </ul>
            <ul class="shop-list">
              <li class="shop-item" v-for="(item, index) in goods.items" :key="index">
                <img :src="item.icon" alt="">
                <span>{{item.title}}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import searchnav from './Children/SearchNav'
import searchpanel from './Children/SearchPanel';
import BScroll from 'better-scroll';
import {
  mapState
} from 'vuex'

export default {
  name:'Search',
  data(){
    return {
      scrollY:0, // 右侧列表滑动的Y轴坐标（实时更新）
      rightLiTops: [], // 所有分类的顶部位置
      isShow: false
    }
  },
  components:{
    searchnav,
    searchpanel
  },
  mounted(){
    this.$store.dispatch('reqSearchGoods');
  },
  computed:{
    ...mapState(['searchgoods']),
    currentIndex(){  // 计算当前页面显示二级分类列表对应的索引
      return this.rightLiTops.findIndex((value, index)=>{ 
        this._leftScroll(index);
        return this.scrollY >= value && this.scrollY < this.rightLiTops[index + 1];
      })
    }
  },
  watch:{
    searchgoods(){
      this.$nextTick(()=>{
        this._initBScroll();
        this._initRightLiTops();
      })
    }
  },
  methods:{
    _initBScroll(){
      // 初始化左边一级分类列表滚动
      this.leftScroll = new BScroll('.first-category',{
          scrollY: true,
          click: true
      })
      // 初始化右边二级分类列表滚动
      this.rightScroll = new BScroll('.second-category',{
          scrollY: true,
          click: true,
          probeType: 3 
      })
      // 二级分类绑定滚动事件，获取当前y轴的位置
      this.rightScroll.on('scroll', (pos)=>{
        this.scrollY = Math.abs(Math.round(pos.y));
      })
    },
    // 获取二级分类各个板块的位置
    _initRightLiTops(){ 
      //定义临时数组
      let tempArr = [];
      //定义变量记录li高度
      let top = 0;
      tempArr.push(top);
      //获取li元素
      let allLis = this.$refs.rightList.getElementsByClassName('category-item');
      //将allLis转为数组并且遍历，获取位置
      Array.prototype.slice.call(allLis).forEach((li, index) => {
        if(index === allLis.length - 1){
          this.$refs.rightList.style.paddingBottom =`${window.innerHeight - li.clientHeight - 100}px`;
        }
        top += li.clientHeight+11;
        tempArr.push(top);
        console.log(li.clientHeight);
      });
      this.rightLiTops = tempArr;
      
    },
    // 点击左侧一级分类，实现二级分类联动
    clickLeftLi(index){
      this.scrollY = this.rightLiTops[index];
      this.rightScroll.scrollTo(0, -this.scrollY, 0);
    },
    // 实现一级分类联动
    _leftScroll(index){
      let leftLists = this.$refs.leftList;
      let el = leftLists[index];
      this.leftScroll.scrollToElement(el, 300, 0, -200)
    },
    // 显示搜索界面
    showSearchPanel(flag){
      this.isShow = flag;
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.search
  background-color #f5f5f5
  width 100%
  height 100%
  .category-container
    position absolute
    top 51px
    bottom 50px
    background-color #f5f5f5
    display flex
    overflow hidden
    .first-category
      background-color #fafafa
      color #666666
      flex 0 0 100px
      .menu-item
        height 60px
        width 100%
        display flex
        justify-content center
        align-items center
        font-size 17px
      .current
        color red
        background-color #fff
      .current::before
        content:''
        width 4px
        height 25px
        background-color red
        position absolute
        left 0
    .second-category
      width 100%
      background-color #fff
      .category-item
        .category-title
          display flex
          justify-content space-between
          align-items center
          margin 10px 30px
          h5
            color #151516
            margin-top 20px
            font-size 17px
            font-weight lighter
        .goods-brands
          width 100%
          display flex
          flex-wrap wrap
          .brands-item
            width 33.3%
            display flex
            justify-content center
            align-items center
            img 
              width 70%
              height 70%
              margin 10px 0
        .shop-list
          display flex
          flex-wrap wrap
          .shop-item
            width 33.3%
            height 83px
            padding 10px 0
            display flex
            flex-direction column
            align-items center
            img 
              width 80%
              height 70px
            span
              font-size 13px
              color #58595B
</style>