<template>
  <div class="me-top">
    <div class="top-userinfo">
      <img src="https://pinduoduoimg.yangkeduo.com/avatar/default/9.png?imageMogr2/sharpen/50/strip%7CimageView2/2/w/1300/q/80/format/webp">
      <h3>{{userinfo.phone | phoneFormat}}</h3>
      <i class="icon-user_01"></i>
    </div>
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
      let str = [...phone];
      console.log(str);
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
    padding 20px 40px
    img
      height 60px
      border-radius 50%
      border 1px solid #fafafa
    h3
      font-size 19px
      color #151516
      margin-left 10px
</style>