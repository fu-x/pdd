<template>
  <div class="me-top">
    <router-link to="/detail" class="top-userinfo" tag="div">
      <img src="https://pinduoduoimg.yangkeduo.com/avatar/default/9.png?imageMogr2/sharpen/50/strip%7CimageView2/2/w/1300/q/80/format/webp">
      <h3 v-if="userinfo">{{userinfo.phone | phoneFormat}}</h3>
      <i class="icon_user_01"></i>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'MeTop',
  computed:{
    ...mapState(['userinfo'])
  },
  filters:{
    phoneFormat(phone){
      console.log(phone);
      let str = [...phone];
      let phoneStr = '';
      str.forEach((value, index)=>{
        if(index>2 && index<7) phoneStr += '*';
        else phoneStr += value;
      })
      return phoneStr;
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.me-top
  width 100%
  height 100px
  .top-userinfo
    display flex
    align-items center
    padding 20px 25px
    img
      height 60px
      border-radius 50%
      border 1px solid #fafafa
    h3
      font-size 19px
      color #151516
      margin-left 10px
</style>