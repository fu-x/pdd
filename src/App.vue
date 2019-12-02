<template>
  <div class="main">
    <router-view></router-view>
    <tabbar></tabbar>
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

</style>