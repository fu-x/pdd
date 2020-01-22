<template>
  <div class="me-detail">
    <div class="detail-title">
      基本信息
    </div>
    <div class="detail-content">
      <div class="detail-item avatar">
        <span class="item-title">头像</span>
        <img src="https://pinduoduoimg.yangkeduo.com/avatar/default/9.png?imageMogr2/sharpen/50/strip%7CimageView2/2/w/1300/q/80/format/webp">
      </div>
      <div class="detail-item">
        <span class="item-title">手机</span>
        <span class="item-content">{{phone}}</span>
      </div>
      <div class="detail-item">
        <span class="item-title">昵称</span>
        <input class="item-content" type="text" maxlength="15" v-model="name">
      </div>
      <div class="detail-item" @click="sheetVisible=true">
        <span class="item-title">性别</span>
        <span class="item-content">{{sex}}</span>
      </div>
      <div class="detail-item">
        <span class="item-title">常住地址</span>
        <input class="item-content" type="text" maxlength="15" v-model="address">
      </div>
      <div class="detail-item" @click="$refs.picker.open()">
        <span class="item-title">生日</span>
        <span class="item-content">{{birthday}}</span>
      </div>
      <div class="detail-item">
        <span class="item-title">个性签名</span>
        <input class="item-content" type="text" maxlength="15" v-model="signature">
      </div>
    </div>
    <div class="detail-save">
      <button @click.prevent="save">保存设置</button>
    </div>
    <div class="detail-back">
      <button @click.prevent="$router.back()">返回</button>
    </div>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
    <mt-datetime-picker
      ref="picker"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      :startDate="startDate"
      :endDate="endDate"
      @confirm="handleConfirm">
    </mt-datetime-picker>
  </div>
</template>

<script>
import moment from 'moment'
import {mapState} from 'vuex'
import {Toast} from 'mint-ui'
import {getAlterInfo} from '../../api/index'

export default {
  name: 'MeDetail',
  data(){
    return{
      // 性别
      actions: [
        {name: '男', method: this.selectSex}, 
        {name: '女', method: this.selectSex}
      ],
      sheetVisible: false,
      sex: '',
      // 生日
      startDate: new Date('1970-1-1'),
      endDate: new Date(),
      birthday: '',
      name: '',
      address: '',
      signature: '',
      phone: ''
    }
  },
  methods: {
    // 选择性别
    selectSex(props){
      console.log(props);
      this.sex = props.name;
    },
    // 选择生日
    handleConfirm(date){
      this.birthday = moment(date).format('YYYY/MM/DD')
      console.log(this.birthday );
    },
    // 保存修改信息
    async save(){
      let result = await getAlterInfo(this.userinfo.id, this.name, this.sex, this.address, this.birthday, this.signature);
      console.log(result);
      Toast(result.message);
    }
  },
  computed:{
    ...mapState(['userinfo'])
  },
  mounted(){
    this.name = this.userinfo.name || '';
    this.sex = this.userinfo.sex || '';
    this.birthday = this.userinfo.birthday || '';
    this.phone = this.userinfo.phone || '';
    this.signature = this.userinfo.signature || '';
    this.address = this.userinfo.address || '';
  },
  watch:{
    userinfo(){
      console.log(this.userinfo);
      this.$nextTick(()=>{
        this.name = this.userinfo.name || '';
        this.sex = this.userinfo.sex || '';
        this.birthday = this.userinfo.birthday || '';
        this.phone = this.userinfo.phone || '';
        this.signature = this.userinfo.signature || '';
        this.address = this.userinfo.address || '';
      })
    }
  }
}
</script>

<style lang="stylus" scoped scoped ref="stylesheet/stylus">
.me-detail
  width 100%
  height 100%
  background-color #f5f5f5
  .detail-title
    width 100%
    height 50px
    text-align center
    line-height 50px
    color #666
    font-size 18px
    font-family 'NSimSun'
  .detail-content
    width 94%
    padding 0 3%
    background-color #fff
    .detail-item
      width 100%
      height 45px
      display flex
      justify-content space-between
      align-items center
      border-bottom 1px solid #eeeeee
      .item-content 
        border none 
        outline none
        text-align right
        color #9c9c9c
        font-size 16px
    .avatar
      height 80px
      img 
        height 60%
        border-radius 50%
  .detail-save
    width 100%
    margin 0 auto
    height 50px
    margin-top 4px
    button
      width 100%
      height 100%
      background #fff
      border none
      font-size 14px
  .detail-back
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