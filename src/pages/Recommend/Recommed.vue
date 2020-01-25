<template>
  <div class="recommend-container" v-if="recommendgoods.length > 0">
    <selectlogin v-if="!isLogin"></selectlogin>
    <ul class="recommend" v-else>
      <shoplist 
      v-for="(item, index) in recommendgoods" 
      :key="index" 
      :item="item" 
      flag="true"
      :addCart="addCart"
      />
    </ul>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'
import shoplist from '../../components/ShopList'
import BScroll from 'better-scroll';
import selectlogin from '../Login/SelectLogin'
import { Indicator, Toast } from 'mint-ui';
import { getAddCart } from '../../api/index'

export default {
  name:'Recommend',
  data(){
    return{
      page: 1,
      count: 20,
      isLogin: true
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
    shoplist,
    selectlogin
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
            Indicator.open(msg);
            setTimeout(()=>{
              Indicator.close();
            },1000)
          }
          else{
            Indicator.open(msg);
            this.$store.dispatch('reqRecommendGoods', {page: this.page, count: this.count, callback:()=>{
              Indicator.close();
            }});
            this.listScroll.refresh();
          }
        }
      }),
      this.listScroll.on('scrollEnd', ()=>{
        this.listScroll.refresh();
      })
    },
    // 添加购物车
    async addCart(isLogin, item){
      console.log(isLogin, item);
      this.isLogin = isLogin;
      if(isLogin === true){
        let result = await getAddCart(item.goods_id, item.goods_name, item.hd_thumb_url, item.price);
        console.log(result);
        Toast(result.message);
      }
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