<template>
  <div class="cart">
    <div class="cart-title">
      <h3>购物车</h3>
      <button>管理</button>
    </div>
    <div class="cart-safe">
      <h5>
        您正在安全购物环境中，请放心购物
      </h5>
    </div>
    <div class="cart-goods">
      <div class="goods-item">
        <div class="item-select item-selected">✓</div>
        <img src="https://pinduoduoimg.yangkeduo.com/avatar/default/9.png?imageMogr2/sharpen/50/strip%7CimageView2/2/w/1300/q/80/format/webp" alt="">
        <div class="item-content">
          <div class="item-title">
            【新年价】华为旗下HONOR/荣耀20S 3200万人像超级夜景 夜美人更美
          </div>
          <div class="item-type">4G全网通；蝶羽蓝；官方标配</div>
          <div class="item-bottom">
            <h3>
              ￥1499
            </h3>
            <div class="number">
              <span>-</span>
              <input type="number" value="1" maxlength="3">
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="goods-item">
        <div class="item-select item-selected">✓</div>
        <img src="https://pinduoduoimg.yangkeduo.com/avatar/default/9.png?imageMogr2/sharpen/50/strip%7CimageView2/2/w/1300/q/80/format/webp" alt="">
        <div class="item-content">
          <div class="item-title">
            【新年价】华为旗下HONOR/荣耀20S 3200万人像超级夜景 夜美人更美
          </div>
          <div class="item-type">4G全网通；蝶羽蓝；官方标配</div>
          <div class="item-bottom">
            <h3>
              ￥1499
            </h3>
            <div class="number">
              <span>-</span>
              <input type="number" value="1" maxlength="3">
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="goods-item">
        <div class="item-select item-selected">✓</div>
        <img src="https://pinduoduoimg.yangkeduo.com/avatar/default/9.png?imageMogr2/sharpen/50/strip%7CimageView2/2/w/1300/q/80/format/webp" alt="">
        <div class="item-content">
          <div class="item-title">
            【新年价】华为旗下HONOR/荣耀20S 3200万人像超级夜景 夜美人更美
          </div>
          <div class="item-type">4G全网通；蝶羽蓝；官方标配</div>
          <div class="item-bottom">
            <h3>
              ￥1499
            </h3>
            <div class="number">
              <span>-</span>
              <input type="number" value="1" maxlength="3">
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="goods-item">
        <div class="item-select item-selected">✓</div>
        <img src="https://pinduoduoimg.yangkeduo.com/avatar/default/9.png?imageMogr2/sharpen/50/strip%7CimageView2/2/w/1300/q/80/format/webp" alt="">
        <div class="item-content">
          <div class="item-title">
            【新年价】华为旗下HONOR/荣耀20S 3200万人像超级夜景 夜美人更美
          </div>
          <div class="item-type">4G全网通；蝶羽蓝；官方标配</div>
          <div class="item-bottom">
            <h3>
              ￥1499
            </h3>
            <div class="number">
              <span>-</span>
              <input type="number" value="1" maxlength="3">
              <span>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-bottom">
      <div class="bottom-select">
        <div class="all-select item-selected">✓</div>
        <span>全选</span>
      </div>
      <div class="bottom-pay">
        <div>合计:<span>￥0</span></div>
        <button>结 算</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'cart'
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.cart
  background-color #f5f5f5 
  width 100%
  height 100%
  .cart-title
    height 50px
    width 94%
    padding 0 3%
    display flex
    justify-content space-between
    align-items center
    h3
      font-size 19px
    button
      border none 
      background-color transparent
      font-size 15px
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