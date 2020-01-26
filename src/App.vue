<template>
  <div class="main">
    <keep-alive>
      <router-view class="contain" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <tabbar v-if="$route.meta.showBottomTabBar"></tabbar>
  </div>
</template>

<script>
import tabbar from './components/Tabbar/Tabbar'
export default {
  name:'App',
  components:{
    tabbar
  },
  created(){
    this.$store.dispatch('reqIsLogin');
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .main
    width 100%
    height 100%
    position relative
    background-color #f5f5f5
    .contain
      flex none
</style>