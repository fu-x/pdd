<template>
  <div class="cart">
    <selectlogin v-if="!userinfo.id"></selectlogin>
    <div v-else>
      <div class="cart-title">
        <h3>购物车</h3>
        <button @click="isManage = !isManage">{{isManage?'完成':'管理'}}</button>
      </div>
      <div class="cart-container">
        <div class="cart-safe">
          <h5>
            您正在安全购物环境中，请放心购物
          </h5>
        </div>
        <div class="cart-goods">
          <div class="goods-item" v-for="(item, index) in cartgoods" :key="item.goods_id">
            <div class="item-select" :class="{'item-selected': item.isSellect || false}" @click="isSellectOne(index)">✓</div>
            <img :src="item.thumb_url" alt="">
            <div class="item-content">
              <div class="item-title">
                {{item.goods_name}}
              </div>
              <!-- <div class="item-type">4G全网通；蝶羽蓝；官方标配</div> -->
              <div class="item-bottom">
                <h3>
                  ￥{{item.price/100}}
                </h3>
                <div class="number">
                  <span @click="alertNumber(index, false)">-</span>
                  <input type="tel" v-model="numberArr[index]" @input="handleInput(index)" @blur="updateNumber(index)">
                  <span @click="alertNumber(index, true)">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-bottom">
        <div class="bottom-select">
          <div class="all-select" :class="{'item-selected':isSellectAll}" @click="selectAll()">✓</div>
          <span>全选</span>
        </div>
        <div class="bottom-pay">
          <div>合计:<span>￥{{totalPrice}}</span></div>
          <button v-show="!isManage">结 算</button>
          <button v-show="isManage" @click="delGoods">删 除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import selectlogin from '../Login/SelectLogin'
import {mapState} from 'vuex'
import {Toast, MessageBox} from 'mint-ui'

export default {
  name:'cart',
  data(){
    return{
      numberArr: [],  // 商品数量
      isSellectAll: false, // 全选
      isManage: false, // 管理
    }
  },
  mounted(){
    this.$store.dispatch('reqCartGoods');
  },
  computed:{
    ...mapState(['userinfo']),
    cartgoods:{
      get(){
        return this.$store.state.cartgoods;
      },
      set(val){
        this.$store.state.cartgoods = val;
      }
    },
    totalPrice(){ // 总价
      let price = 0;
      this.cartgoods.forEach((item, index)=>{
        if(item.isSellect){
          price += item.price * item.number;
        }
      })
      return price/100;
    }
  },
  components:{
    selectlogin
  },
  methods: {
    // 加减商品数量
    alertNumber(index, flag){
      let sum = this.numberArr[index];
      if(flag){
        sum++;
        console.log(this.numberArr);
        this.numberArr.splice(index, 1, sum);
        if(this.numberArr[index]>100){
          Toast('这个宝贝不能再多买了！');
          this.numberArr[index] = 100;
        }
      }else{
        sum--;
        console.log(this.numberArr);
        this.numberArr.splice(index, 1, sum);
        if(this.numberArr[index]<1){
          Toast('这个宝贝不能再减少了！');
          this.numberArr[index] = 1;
        }
      }
      this.cartgoods[index].number = this.numberArr[index];
      this.$store.dispatch('alertGoods', this.cartgoods);
    },
    // 处理input输入
    handleInput(index){
      this.numberArr[index] = this.numberArr[index].replace(/[^\d]/g,'');
      if(this.numberArr[index]> 100){
        Toast('这个宝贝不能再多买了！');
        this.numberArr[index] = 100;
      }else if(this.numberArr[index] < 1){
        Toast('这个宝贝不能再减少了！');
        this.numberArr[index] = 1;
      }else{
        // console.log(this.numberArr[index]);
        this.numberArr[index] = parseInt(this.numberArr[index]);
      }
    },
    // input失去焦点提交输入的值
    updateNumber(index){
      console.log(this.numberArr);
      this.cartgoods[index].number = this.numberArr[index];
      this.$store.dispatch('alertGoods', this.cartgoods);
    },
    // 全选
    selectAll(){
      this.isSellectAll = !this.isSellectAll;
      this.cartgoods.forEach((item, index)=>{
        this.$set(item, 'isSellect', this.isSellectAll);
      })
      this.$store.dispatch('alertGoods', this.cartgoods);
    },
    // 单选
    isSellectOne(index){
      if(!this.cartgoods[index].isSellect){
        this.$set(this.cartgoods[index], 'isSellect', true);
      }else{
        this.cartgoods[index].isSellect = !this.cartgoods[index].isSellect;
      }
      // 判断是否全部选中
      let isSellectAll = this.cartgoods.some((item, index)=>{
        return !item.isSellect;
      })
      if(!isSellectAll) this.isSellectAll = true;
      else this.isSellectAll = false;
      this.$store.dispatch('alertGoods', this.cartgoods);
    },
    // 删除商品
    delGoods(){
      // 判断是否有商品选中
      let isSellect = this.cartgoods.some((item, index)=>{
        return item.isSellect;
      })
      if(isSellect){
        MessageBox.confirm('确定执行此操作?').then(action => {
          if('confirm' === action){
            let newArr = [];
            this.cartgoods.forEach((item, index)=>{
              if(!item.isSellect){
                newArr.push(item);
              }
            })
            this.cartgoods = newArr;
            if(this.cartgoods.length === 0) this.isSellectAll = false;
            this.$store.dispatch('alertGoods', this.cartgoods);
          }
        });
      }else{
        Toast('请选择商品。');
      }
    }
  },
  watch:{
    cartgoods(){
      this.$nextTick(()=>{
        this.cartgoods.forEach((item, index)=>{
          this.numberArr.push(item.number);
        })
      })
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.cart
  background-color #f5f5f5 
  width 100%
  .cart-title
    height 50px
    width 94%
    padding 0 3%
    display flex
    justify-content space-between
    align-items center
    position fixed
    background-color #f5f5f5
    top 0
    h3
      font-size 19px
    button
      border none 
      background-color transparent
      font-size 15px
  .cart-container
    width 100%
    padding-top 50px
    .cart-safe
      width 96%
      height 40px
      background-color #fff
      margin 5px 2%
      border-radius 10px
      h5 
        text-align center
        line-height 40px
        font-size 13px
    .cart-goods
      width 100%
      padding-bottom 10px
      .goods-item:last-child
        margin-bottom 100px
      .goods-item
        height 150px
        width 96%
        margin 5px 2%
        border-radius 10px
        background-color #fff
        display flex
        align-items center
        .item-select
          width 5%
          display inline-block
          border 1px solid #aaaaaa
          border-radius 50%
          font-size 12px
          margin 0 2.5%
          height 15px
          width 15px
          line-height 15px
          text-align center
          color #fff
        img
          width 30%
          height 80%
        .item-content
          width 55%
          height 80%
          margin 10% 2.5%
          display flex
          flex-direction column
          justify-content space-between
          .item-title
            font-size 14px
            line-height 16px
            height 33px
            overflow hidden
          .item-type
            background-color #eeeeee
            font-size 13px
            color #666666
            width 180px
            line-height 25px
            border-radius 3px
            overflow hidden
          .item-bottom
            display flex
            justify-content space-between
            align-items center
            h3 
              color red
              font-weight bolder
            .number
              display flex
              justify-content center
              align-items center
              width 80px
              height 18px
              border 1px solid #cccccc
              border-radius 3px
              span 
                background-color #eeeeee
                width 25%
                height 100%
                text-align center
                border-radius 3px
              input 
                width 50%
                height 100%
                text-align center
                border none
                outline none
                padding 0
  .cart-bottom
    position fixed
    bottom 50px
    width 100%
    background-color #fff
    height 50px
    display flex
    justify-content space-between
    align-items center
    border-bottom 1px solid #eeeeee
    .bottom-select
      width 20%
      margin-left 15px
      .all-select
        width 5%
        display inline-block
        border 1px solid #aaaaaa
        border-radius 50%
        font-size 12px
        margin 0 2.5%
        height 15px
        width 15px
        line-height 15px
        text-align center
        color #fff
    .bottom-pay
      width 45%
      height 30px
      display flex
      justify-content space-between
      align-items center
      margin-right 20px
      span
        color red
      button
        background-color #FF5500
        border none 
        height 100%
        width 60px
        border-radius 20px
        color #fff
  .item-selected
    background-color #FF0000
    border 1px solid #FF0000 !important
</style>