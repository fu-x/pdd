<template>
  <div class="me">
    <selectlogin v-if="!this.userinfo.id"></selectlogin>
    <div v-else>
      Me
    </div>
  </div>
</template>

<script>
import selectlogin from '../Login/SelectLogin'
import {mapState} from 'vuex'

export default {
  name:'Me',
  components:{
    selectlogin
  },
  computed:{
    ...mapState(['userinfo'])
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.me
  background-color #f5f5f5
  width 100%
  height 100%
</style>