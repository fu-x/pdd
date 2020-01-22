<template>
  <div class="common-cell">
    <div class="cell-left">
      <i :class="cellLayout.leftIcon"></i>
      <span class="letf-title">{{cellLayout.leftTitle}}</span>
    </div>
    <div class="cell-right">
      <span class="right-title">{{cellLayout.rightTitle}}</span>
      <i :class="cellLayout.rightIcon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonCell',
  props: ['cellLayout']
}
</script>

<style lang="stylus" scoped scoped ref="stylesheet/stylus">
.common-cell
  width 96%
  height 50px
  background-color #fff
  display flex
  justify-content space-between
  align-items center
  padding 0 2%
  margin-top 1px
  .cell-left,.cell-right
    display flex
    justify-content space-between
    align-items center
    span
      margin 0 5px
  .cell-right
    color #bfbfbf
    span 
     font-size 13px
</style>