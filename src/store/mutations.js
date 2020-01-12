import {
  HOME_CASUAL,
  HOME_NAV,
  HOME_SHOPLIST,
  SEARCH_GOODS,
  RECOMMEND_GOODS
} from './mutation-type'


export default {
  [HOME_CASUAL](state, {homecasual}){
    state.homecasual = homecasual;
  },
  [HOME_NAV](state, {homenav}){
    state.homenav = homenav;
  },
  [HOME_SHOPLIST](state, {homeshoplist}){
    state.homeshoplist= homeshoplist;
  },
  [SEARCH_GOODS](state, {searchgoods}){
    state.searchgoods= searchgoods;
  },
  [RECOMMEND_GOODS](state, {recommendgoods}){
    state.recommendgoods= state.recommendgoods.concat(recommendgoods);
  },
}