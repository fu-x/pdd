<template>
  <div class="main">
    <router-view class="contain"></router-view>
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
    .contain
      flex none
</style>