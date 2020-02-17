<template>
  <div class="cipher">
    <section class="code">
      <svg t="1579103641779" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11503" width="18" height="18"><path d="M916.210526 1024 107.789474 1024C78.012632 1024 53.894737 999.855158 53.894737 970.105263L53.894737 485.052632C53.894737 455.275789 78.012632 431.157895 107.789474 431.157895L188.631579 431.157895 188.631579 323.368421C188.631579 144.761263 333.419789 0 512 0 690.580211 0 835.368421 144.761263 835.368421 323.368421L835.368421 431.157895 916.210526 431.157895C945.987368 431.157895 970.105263 455.275789 970.105263 485.052632L970.105263 970.105263C970.105263 999.855158 945.987368 1024 916.210526 1024ZM781.473684 323.368421C781.473684 174.538105 660.830316 53.894737 512 53.894737 363.169684 53.894737 242.526316 174.538105 242.526316 323.368421L242.526316 431.157895 781.473684 431.157895 781.473684 323.368421ZM916.210526 485.052632 835.368421 485.052632 188.631579 485.052632 107.789474 485.052632 107.789474 970.105263 916.210526 970.105263 916.210526 485.052632ZM512 592.842105C526.874947 592.842105 538.947368 604.914526 538.947368 619.789474L538.947368 835.368421C538.947368 850.243368 526.874947 862.315789 512 862.315789 497.125053 862.315789 485.052632 850.243368 485.052632 835.368421L485.052632 619.789474C485.052632 604.914526 497.125053 592.842105 512 592.842105Z" p-id="11504" fill="#aaaaaa"></path></svg>
      <input type="text" maxlength="20" placeholder="旧密码(未设置密码可不填)" v-model="oldCipher" @input="inputFormat(0)">
    </section>
    <section class="code">
      <svg t="1579103641779" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11503" width="18" height="18"><path d="M916.210526 1024 107.789474 1024C78.012632 1024 53.894737 999.855158 53.894737 970.105263L53.894737 485.052632C53.894737 455.275789 78.012632 431.157895 107.789474 431.157895L188.631579 431.157895 188.631579 323.368421C188.631579 144.761263 333.419789 0 512 0 690.580211 0 835.368421 144.761263 835.368421 323.368421L835.368421 431.157895 916.210526 431.157895C945.987368 431.157895 970.105263 455.275789 970.105263 485.052632L970.105263 970.105263C970.105263 999.855158 945.987368 1024 916.210526 1024ZM781.473684 323.368421C781.473684 174.538105 660.830316 53.894737 512 53.894737 363.169684 53.894737 242.526316 174.538105 242.526316 323.368421L242.526316 431.157895 781.473684 431.157895 781.473684 323.368421ZM916.210526 485.052632 835.368421 485.052632 188.631579 485.052632 107.789474 485.052632 107.789474 970.105263 916.210526 970.105263 916.210526 485.052632ZM512 592.842105C526.874947 592.842105 538.947368 604.914526 538.947368 619.789474L538.947368 835.368421C538.947368 850.243368 526.874947 862.315789 512 862.315789 497.125053 862.315789 485.052632 850.243368 485.052632 835.368421L485.052632 619.789474C485.052632 604.914526 497.125053 592.842105 512 592.842105Z" p-id="11504" fill="#aaaaaa"></path></svg>
      <input type="text" maxlength="20" placeholder="新密码" v-model="newCipher" @input="inputFormat(1)">
    </section>
    <section class="code">
      <svg t="1579103641779" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11503" width="18" height="18"><path d="M916.210526 1024 107.789474 1024C78.012632 1024 53.894737 999.855158 53.894737 970.105263L53.894737 485.052632C53.894737 455.275789 78.012632 431.157895 107.789474 431.157895L188.631579 431.157895 188.631579 323.368421C188.631579 144.761263 333.419789 0 512 0 690.580211 0 835.368421 144.761263 835.368421 323.368421L835.368421 431.157895 916.210526 431.157895C945.987368 431.157895 970.105263 455.275789 970.105263 485.052632L970.105263 970.105263C970.105263 999.855158 945.987368 1024 916.210526 1024ZM781.473684 323.368421C781.473684 174.538105 660.830316 53.894737 512 53.894737 363.169684 53.894737 242.526316 174.538105 242.526316 323.368421L242.526316 431.157895 781.473684 431.157895 781.473684 323.368421ZM916.210526 485.052632 835.368421 485.052632 188.631579 485.052632 107.789474 485.052632 107.789474 970.105263 916.210526 970.105263 916.210526 485.052632ZM512 592.842105C526.874947 592.842105 538.947368 604.914526 538.947368 619.789474L538.947368 835.368421C538.947368 850.243368 526.874947 862.315789 512 862.315789 497.125053 862.315789 485.052632 850.243368 485.052632 835.368421L485.052632 619.789474C485.052632 604.914526 497.125053 592.842105 512 592.842105Z" p-id="11504" fill="#aaaaaa"></path></svg>
      <input type="text" maxlength="20" placeholder="确认密码" v-model="confirmCipher" @input="inputFormat(2)">
    </section>
    <div class="confirm-btn">
      <button@click="checkCipher">确认修改</button@click="checkCipher">
    </div>
    <div class="back-btn">
      <button @click.prevent="$router.back()">返回</button>
    </div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui';
import {getCipher} from '../../api/index'
export default {
  name: 'MeCipher',
  data() {
    return {
      oldCipher: '',
      newCipher: '',
      confirmCipher: ''
    }
  },
  methods:{
    async checkCipher(){
      if(this.newCipher === '' || this.confirmCipher === ''){
        Toast('新密码不能为空。');
      }else if(this.newCipher.length > 18 || this.newCipher.length < 6){
        Toast('输入的密码长度不能小于6且不能大于18。');
      }else if(this.newCipher !== this.confirmCipher){
        Toast('两次输入的密码不一致。');
      }else if(this.newCipher === this.oldCipher){
        Toast('新密码不能和旧密码相同。');
      }else{
        let result = await getCipher(this.oldCipher, this.newCipher);
        Toast(result.message);
      }
    },
    inputFormat(index){
      switch(index){
      case 0: 
        this.oldCipher = this.oldCipher.replace(/\s/g, '');
        break;
      case 1: 
        this.newCipher = this.newCipher.replace(/\s/g, '');
        break;
      case 2: 
        this.confirmCipher = this.confirmCipher.replace(/\s/g, '');
        break;
      }
    }
  }
}
</script>

<style lang="stylus" scoped  ref="stylesheet/stylus">
.cipher
  width 100%
  padding-top 5px
  background-color #f5f5f5
  .code 
    width 100%
    height 60px
    display flex
    align-items center
    background-color #fff
    margin-bottom 1px
    padding-left 10px
    input
      width 60%
      height 100%
      padding 0
      margin 0 10px
      border none
      outline none 
      font-size 16px
      color #666666
  .confirm-btn
    width 100%
    margin 0 auto
    height 50px
    button
      width 100%
      height 100%
      background #fff
      border none
      font-size 14px
  .back-btn
    margin 0 10px
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