<template>
  <div class="bottom-tab">
    <span class="tab-item">
      <img :src="$route.path.includes('/home')?imgPathArr[0].selected:imgPathArr[0].normal" @click="switchTo('/home')" alt="">
      <label :class="{'on': $route.path.includes('/home')}">首页</label>
    </span>
    <span class="tab-item">
      <img :src="$route.path.includes('/recommend')?imgPathArr[1].selected:imgPathArr[1].normal" @click="switchTo('/recommend')" alt="">
      <label :class="{'on': $route.path.includes('/recommend')}">推荐</label>
    </span>
    <span class="tab-item">
      <img :src="$route.path.includes('/search')?imgPathArr[2].selected:imgPathArr[2].normal" @click="switchTo('/search')" alt="">
      <label :class="{'on': $route.path.includes('/search')}">搜索</label>
    </span>
    <span class="tab-item">
      <img :src="$route.path.includes('/chat')?imgPathArr[3].selected:imgPathArr[3].normal" @click="switchTo('/chat')" alt="">
      <label :class="{'on': $route.path.includes('/chat')}">聊天</label>
    </span>
    <span class="tab-item">
      <img :src="$route.path.includes('/me')?imgPathArr[4].selected:imgPathArr[4].normal" @click="switchTo('/me')" alt="">
      <label :class="{'on': $route.path.includes('/me')}">个人中心</label>
    </span>
  </div>
</template>

<script>
export default {
  name:'Tabbar',
  data(){
    return{
      imgPathArr:[
        {normal:require('../../common/img/icon_home.png'), selected:require('../../common/img/icon_home_selected.png')},
        {normal:require('../../common/img/icon_intro.png'), selected:require('../../common/img/icon_intro_selected.png')},
        {normal:require('../../common/img/icon_search.png'), selected:require('../../common/img/icon_search_selected.png')},
        {normal:require('../../common/img/icon_chat.png'), selected:require('../../common/img/icon_chat_selected.png')},
        {normal:require('../../common/img/icon_mine.png'), selected:require('../../common/img/icon_mine_selected.png')}
      ]
    }
  },
  methods:{
    switchTo(path){
      this.$router.replace(path);
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .bottom-tab
    width 100%
    height 50px
    background-color #fff
    position fixed
    left 0
    bottom 0
    display flex
    z-index 999
    .tab-item
      display flex
      flex 1
      flex-direction column
      color #999
      font-size 13px
      align-items center
      justify-content center
      img
        width 35%
        margin-bottom 5px
      .on
        color red
</style>