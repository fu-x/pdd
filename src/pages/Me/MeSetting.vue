<template>
  <div class="me-setting">
    <div v-if="userinfo.id" class="setting-user">
      <metop></metop>
    </div>
    <div class="setting-top">
      <commoncell v-for="(cell, index) in topLayout" :key="index" :cellLayout="cell" @click.native="toUrl(index)"></commoncell>
    </div>
    <div class="setting-mid">
      <commoncell v-for="(cell, index) in middleLayout" :key="index" :cellLayout="cell"></commoncell>
    </div>
    <div class="setting-bottom">
      <commoncell v-for="(cell, index) in bottomLayout" :key="index" :cellLayout="cell"></commoncell>
    </div>
    <div class="setting-logout">
      <button @click.prevent="logout">退出登陆</button>
    </div>
    <div class="setting-back">
      <button @click.prevent="$router.back()">返回</button>
    </div>
  </div>
</template>

<script>
import commoncell from '../../components/CommonCell';
import metop from './MeTop'
import {MessageBox} from 'mint-ui'
import {mapActions, mapState} from 'vuex'

export default {
  name: 'MeSetting',
  data(){
    return{
      topLayout:[
        {leftTitle: '修改密码', leftIcon: 'icon_setting_03', rightTitle: '', rightIcon: 'icon_setting_10'},
        {leftTitle: '免密支付设置', leftIcon: 'icon_setting_01', rightTitle: '', rightIcon: 'icon_setting_10'},
        {leftTitle: '音效与通知', leftIcon: 'icon_setting_02', rightTitle: '', rightIcon: 'icon_setting_10'},
        {leftTitle: '通用', leftIcon: 'icon_setting_04', rightTitle: '', rightIcon: 'icon_setting_10'},
        {leftTitle: '隐私', leftIcon: 'icon_setting_05', rightTitle: '', rightIcon: 'icon_setting_10'}
      ],
      middleLayout:[
        {leftTitle: '常见问题', leftIcon: 'icon_setting_06', rightTitle: '', rightIcon: 'icon_setting_10'},
        {leftTitle: '意见反馈', leftIcon: 'icon_setting_07', rightTitle: '', rightIcon: 'icon_setting_10'}
      ],
      bottomLayout:[
        {leftTitle: '关于网上购物', leftIcon: 'icon_setting_09', rightTitle: '', rightIcon: 'icon_setting_10'}
      ]
    }
  },
  components:{
    commoncell,
    metop
  },
  methods:{
    ...mapActions(['reqLogout']),
    logout(){
      MessageBox.confirm('确定退出登陆吗?').then(action => {
        console.log(action);
        if('confirm' === action){
          this.reqLogout();
          this.$router.replace('/me')
        }
      });
    },
    toUrl(index){ // 跳转至某个页面
      console.log(111);
      switch(index){
        case 0:
          this.$router.replace('/cipher');
          break;
      }
    }
  },
  computed:{
    ...mapState(['userinfo'])
  }
}
</script>

<style lang="stylus" scoped ref="stylesheet/stylus">
.me-setting
  width 100%
  height 100%
  background-color #f5f5f5
  .setting-user
    background-color #ffffff
    width 100%
    margin-bottom  10px
  .setting-top
    margin-bottom  10px
  .setting-mid
    margin-bottom  10px
  .setting-bottom
    margin-bottom  10px
  .setting-logout
    width 100%
    margin 0 auto
    height 50px
    button
      width 100%
      height 100%
      background #fff
      border none
      font-size 14px
  .setting-back
    margin-bottom  10px
    width 100%
    margin 5px auto
    height 50px
    button
      color red
      width 100%
      height 100%
      background #fff
      border none
      font-size 14px
</style>