<template>
  <div class="me">
    <selectlogin v-if="!userinfo.id"></selectlogin>
    <div v-else>
      <metop></metop>
      <meorder></meorder>
      <metools></metools>
    </div>
  </div>
</template>

<script>
import selectlogin from '../Login/SelectLogin'
import metop from './MeTop'
import meorder from './MeOrder'
import metools from './MeTools'
import {mapState} from 'vuex'

export default {
  name:'Me',
  components:{
    selectlogin,
    metop,
    meorder,
    metools
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