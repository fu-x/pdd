<template>
  <div class="search-panel">
    <div class="search-top">
      <svg t="1578640420118" @click="showSearchPanel(false)" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1108" width="200" height="200"><path d="M305.519192 557.640404c-11.636364 0-23.40202-4.39596-32.323232-13.317172-17.842424-17.842424-17.842424-46.674747 0-64.517171L683.830303 69.30101c17.842424-17.842424 46.674747-17.842424 64.517172 0 17.842424 17.842424 17.842424 46.674747 0 64.517172L337.713131 544.323232c-8.921212 8.921212-20.557576 13.317172-32.193939 13.317172z m0 0" fill="#8a8a8a" p-id="1109"></path><path d="M715.894949 968.145455c-11.636364 0-23.40202-4.39596-32.323232-13.317172L273.19596 544.323232c-17.842424-17.842424-17.842424-46.674747 0-64.517171 17.842424-17.842424 46.674747-17.842424 64.517171 0l410.505051 410.50505c17.842424 17.842424 17.842424 46.674747 0 64.517172-8.921212 8.921212-20.557576 13.317172-32.323233 13.317172z m0 0" fill="#8a8a8a" p-id="1110"></path></svg>
      <div class="search-input">
        <img src="../images/search.png" alt="">
        <input type="search" placeholder="步步高点读机">
      </div>
      <button class="search-btn">搜索</button>
    </div>
    <div class="search-container">
      <div class="search-hot">
        <img src="../images/hot.png" alt="">
        <span>热门搜索</span>
      </div>
      <ul class="hot-item">
        <li>抽纸批发</li>
        <li>浴巾可穿</li>
        <li>石榴水果</li>
        <li>富豪卷纸</li>
        <li>冰箱收纳盒</li>
        <li>毛巾衣服</li>
        <li>小白鞋增高透气</li>
        <li>连衣裙</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'SearchPanel',
  props:['showSearchPanel']
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.search-panel
  top 0
  position fixed
  z-index 1000
  background-color #fff 
  width 100%
  height 100%
  .search-top
    background-color #fff 
    height 50px
    width 100%
    display flex
    justify-content space-between
    align-items center
    svg
      height 40%
      width 10%
    .search-input
      background-color #eee
      height 70%
      width 75%
      display flex
      align-items center
      border-radius 10px
      img
        height 70%
        margin 0 10px
      input
        border none
        background-color transparent
    .search-btn
      border none
      background-color transparent
      color #9c9c9c
      font-size 16px
      margin-right 10px
  .search-container
    margin 0 10px
    .search-hot
      height 50px
      display flex
      align-items center
      color #9c9c9c
      img 
        height 40%
        margin-right 5px
    .hot-item
      display flex
      flex-wrap wrap
      li
        height 20px
        background-color #f4f4f4
        display flex
        align-items center
        justify-content center
        margin 5px 5px
        padding 5px 10px
        border-radius 20px
        color #58595b
        font-size 14px
</style>