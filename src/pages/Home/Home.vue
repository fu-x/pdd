<template>
  <div class="home">
    <!-- 搜索栏 -->
    <searchnav :showSearchPanel='showSearchPanel'></searchnav>
    <!-- 搜索界面 -->
    <searchpanel v-show="isShow" :showSearchPanel='showSearchPanel'></searchpanel>
    <!-- 首页导航 -->
    <ly-tab
      v-model="selectedId"
      :items="items"
      :options="options"
      @change="handleChange"
      class="fix"
    />
    <router-view></router-view>
  </div>
</template>

<script>
import searchnav from '../Search/Children/SearchNav';
import searchpanel from '../Search/Children/SearchPanel';

export default {
  name:'Home',
  data(){
    return {
      selectedId: 0,
      items: [
        {label:'热门'},
        {label:'服饰'},
        {label:'鞋包'},
        {label:'母婴'},
        {label:'百货'},
        {label:'食品'},
        {label:'内衣'},
        {label:'男装'},
        {label:'电器'}
      ],
      isShow: false,
      options: {
        activeColor: '#e9232c' //设置选中tab的颜色
      },
      subRouteUrl:['/home/hot','/home/dress','/home/box','/home/mbaby','/home/genernal','/home/food','/home/shirt','/home/man','/home/ele']  
    }
  },
  methods: {
    handleChange(item, index){
      this.$router.replace(this.subRouteUrl[index])
    },
    // 显示搜索界面
    showSearchPanel(flag){
      this.isShow = flag;
    }
  },
  components:{
    searchnav,
    searchpanel
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.home
  width 100%
  height 100%
  .fix
    position absolute
    top 50px
    left 0
    z-index 900
    width 100%
</style>