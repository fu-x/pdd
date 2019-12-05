<template>
  <div class="main">
    <router-view class="contain"></router-view>
    <tabbar class="footer"></tabbar>
  </div>
</template>

<script>
import tabbar from './components/Tabbar/Tabbar'
export default {
  name:'App',
  components:{
    tabbar
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .main
    width 100%
    height 100%
    .contain
      flex none
</style>