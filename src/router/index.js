import Vue from 'vue'
import Router from 'vue-router'

// 一级路由
import home from '../pages/Home/Home.vue';
import search from '../pages/Search/Search.vue';
import recommend from '../pages/Recommend/Recommed.vue';
import chat from '../pages/Chat/Chat.vue';
import me from '../pages/Me/Me.vue';
import login from '../pages/Login/Login.vue'
// 二级路由
import hot from '../pages/Home/Children/Hot/hot.vue'
import man from '../pages/Home/Children/man.vue'
import box from '../pages/Home/Children/box.vue'
import dress from '../pages/Home/Children/dress.vue'
import ele from '../pages/Home/Children/ele.vue'
import food from '../pages/Home/Children/food.vue'
import genernal from '../pages/Home/Children/genernal.vue'
import mbaby from '../pages/Home/Children/mbaby.vue'
import shirt from '../pages/Home/Children/shirt.vue'

Vue.use(Router);

export default new Router({
  routes:[
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      component: home,
      children: [
        {path: '/home', redirect: '/home/hot', meta: {showBottomTabBar: true}},
        {path: 'hot', component: hot, meta: {showBottomTabBar: true}},
        {path: 'man', component: man, meta: {showBottomTabBar: true}},
        {path: 'box', component: box, meta: {showBottomTabBar: true}},
        {path: 'dress', component: dress, meta: {showBottomTabBar: true}},
        {path: 'ele', component: ele, meta: {showBottomTabBar: true}},
        {path: 'food', component: food, meta: {showBottomTabBar: true}},
        {path: 'genernal', component: genernal, meta: {showBottomTabBar: true}},
        {path: 'mbaby', component: mbaby, meta: {showBottomTabBar: true}},
        {path: 'shirt', component: shirt, meta: {showBottomTabBar: true}}
      ]
    }, {
      path: '/search',
      component: search,
      meta: {showBottomTabBar: true}
    }, {
      path: '/recommend',
      component: recommend,
      meta: {showBottomTabBar: true}
    }, {
      path: '/chat',
      component: chat,
      meta: {showBottomTabBar: true}
    }, {
      path: '/me',
      component: me,
      meta: {showBottomTabBar: true}
    }, {
      path: '/login',
      component: login
    }
  ]
})