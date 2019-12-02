import Vue from 'vue'
import Router from 'vue-router'

// 一级路由
import home from '../pages/Home/Home.vue';
import search from '../pages/Search/Search.vue';
import recommend from '../pages/Recommend/Recommed.vue';
import chat from '../pages/Chat/Chat.vue';
import me from '../pages/Me/Me.vue';

// 二级路由
import hot from '../pages/Home/Children/hot.vue'
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
        {path: '/home', redirect: '/home/hot'},
        {path: 'hot', component: hot},
        {path: 'man', component: man},
        {path: 'box', component: box},
        {path: 'dress', component: dress},
        {path: 'ele', component: ele},
        {path: 'food', component: food},
        {path: 'genernal', component: genernal},
        {path: 'mbaby', component: mbaby},
        {path: 'shirt', component: shirt}
      ]
    }, {
      path: '/search',
      component: search
    }, {
      path: '/recommend',
      component: recommend
    }, {
      path: '/chat',
      component: chat
    }, {
      path: '/me',
      component: me
    }
  ]
})