import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getSearchGoods,
  getRecommendGoods,
  getIsLogin,
  getLogout,
  getCart
} from '../api/index'

import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOPLIST,
  SEARCH_GOODS,
  RECOMMEND_GOODS,
  USER_INFO,
  IS_LOGIN,
  LOGOUT,
  CART_GOODS,
  ALERT_GOODS
} from './mutation-type'

export default {
  async reqHomeCasual({commit}){
    const result = await getHomeCasual();
    commit(HOME_CASUAL, {homecasual: result.message});
  },
  async reqHomeNav({commit}){
    const result = await getHomeNav();
    let homenav = result.message.item1.concat(result.message.item2);
    commit(HOME_NAV,{homenav: homenav});
  },
  async reqHomeShopList({commit}){
    const result = await getHomeShopList();
    commit(HOME_SHOPLIST,{homeshoplist: result.message.goods_list});
  },
  async reqSearchGoods({commit}){
    const result = await getSearchGoods();
    commit(SEARCH_GOODS,{searchgoods: result.message.data});
  },
  async reqRecommendGoods({commit}, params){
    console.log(params);
    const result = await getRecommendGoods(params);
    commit(RECOMMEND_GOODS,{recommendgoods: result.message});
    params.callback && params.callback();
  },
  syncUserInfo({commit}, userInfo){
    commit(USER_INFO, {userInfo: userInfo});
  },
  async reqIsLogin({commit}){
    const result = await getIsLogin();
    console.log(result);
    if(result.status === 200)
      commit(IS_LOGIN, {userInfo: result.message});
  },
  async reqLogout({commit}){
    const result = await getLogout();
    if(result.status === 200)
      commit(LOGOUT);
  },
  async reqCartGoods({commit}){
    const result = await getCart();
    console.log(result);
    if(result.status === 200)
      commit(CART_GOODS, {cartgoods: result.message});
  },
  alertGoods({commit}, cartgoods){
    commit(ALERT_GOODS, {cartgoods: cartgoods});
  }
}