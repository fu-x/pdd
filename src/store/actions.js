import {
  getHomeCasual,
  getHomeNav,
  getHomeShopList
} from '../api/index'

import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOPLIST
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
}