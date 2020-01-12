<template>
  <div class="recommend-container" v-if="recommendgoods.length > 0">
    <ul class="recommend">
      <shoplist v-for="(item, index) in recommendgoods" :key="index" :item="item" flag="true"/>
    </ul>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'
import shoplist from '../../components/ShopList/ShopList'
import BScroll from 'better-scroll';
import { Indicator } from 'mint-ui';

export default {
  name:'Recommend',
  data(){
    return{
      page: 1,
      count: 20
    }
  },
  computed:{
    ...mapState(['recommendgoods'])
  },
  mounted(){
    Indicator.open('加载中...');
    this.$store.dispatch('reqRecommendGoods', {page: this.page, count: this.count, callback: ()=>{
      Indicator.close();
    }});
  },
  components:{
    shoplist
  },
  watch:{
    recommendgoods(){
      this.$nextTick(()=>{
        this.page++;
        if(this.page === 2)
          this._initBScroll();
        else
          this.listScroll.refresh();
      })
    }
  },
  methods:{
    _initBScroll(){
      this.listScroll = new BScroll('.recommend-container',{
        scrollY: true,
        click: true,
        probeType: 3
      }),
      this.listScroll.on('touchEnd', (pos)=>{
        if(pos.y > 50){
          console.log('下拉刷新');
        }
        if( pos.y - this.listScroll.maxScrollY < -20){
          console.log('上拉加载');
          let msg = '加载中...';
          if(this.page > 5){
            msg = '暂无更多数据'
          }
          Indicator.open(msg);
          this.$store.dispatch('reqRecommendGoods', {page: this.page, count: this.count, callback:()=>{
            Indicator.close();
          }});
          this.listScroll.refresh();
        }
      }),
      this.listScroll.on('scrollEnd', ()=>{
        this.listScroll.refresh();
      })
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.recommend-container
  background-color #f5f5f5
  width 100%
  height 100%
  overflow hidden
  .recommend
    padding-bottom 48px
    display flex
    flex-wrap wrap
    background-color #f5f5f5
    justify-content space-between
    
</style>