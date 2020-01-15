<template>
  <div class="me">
    <selectlogin></selectlogin>
  </div>
</template>

<script>
import selectlogin from '../Login/SelectLogin'

export default {
  name:'Me',
  components:{
    selectlogin
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.me
  background-color #f5f5f5
  width 100%
  height 100%
</style>