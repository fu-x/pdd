import Vue from 'vue'
import App from './App'
import router from './router'
import LyTab from 'ly-tab'
import store from './store/index'
// 引入字体图标样式
import '../static/css/style.css'
// 引入并配置图片懒加载
import VueLazyload from 'vue-lazyload'
// 引入Mint-ui组件
import { Loadmore, Actionsheet, DatetimePicker } from 'mint-ui';

Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Actionsheet.name, Actionsheet);
Vue.component(Loadmore.name, Loadmore);

Vue.use(VueLazyload, {
  loading: require('./common/img/loading.jpg'),//加载中图片，一定要有，不然会一直重复加载占位图
});
Vue.use(LyTab)

new Vue({
  el:'#app',
  router,
  store,
  render:h=>h(App)
})
