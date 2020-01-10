<template>
  <div class="search-container">
    <a class="search-icon" @click='showSearchPanel(true)'>
      <img src="../images/search.png">
      <span>笔记本电脑</span>
    </a>
  </div>
</template>

<script>
export default {
  name:'SearchNav',
  props:['showSearchPanel']
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.search-container
  width 100%
  height 50px
  border-bottom 1px solid #ededed
  background-color #fff
  display flex
  justify-content center
  align-items center
  position fixed
  z-index 999
  .search-icon
    width 92%
    height 70%
    background-color #eee
    border-radius 10px
    display flex
    justify-content center
    align-items center
    img 
      height 70%
      margin-right 5px
    span
      color #9c9c9c
</style>