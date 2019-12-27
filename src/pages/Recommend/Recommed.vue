<template>
  <div class="recommend-container" v-if="homeshoplist.length > 0">
    <ul class="recommend">
      <shoplist  v-for="(item, index) in homeshoplist" :key="index" :item="item" flag="true" />
    </ul>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'
import shoplist from '../../components/ShopList/ShopList'

export default {
  name:'Recommend',
  computed:{
    ...mapState(['homeshoplist'])
  },
  mounted(){
    this.$store.dispatch('reqHomeShopList');
  },
  components:{
    shoplist
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.recommend-container
  background-color #f5f5f5
  width 100%
  height 100%
  .recommend
    margin-bottom 50px
    display flex
    flex-wrap wrap
    background-color #f5f5f5
    justify-content space-between
    
</style>