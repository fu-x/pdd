import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList,
  getSearchGoods,
  getRecommendGoods
} from '../api/index'

import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOPLIST,
  SEARCH_GOODS,
  RECOMMEND_GOODS
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
}