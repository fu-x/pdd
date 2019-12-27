import ajax from './ajax'

// 基础路径
const BASE_URL='http://127.0.0.1:1688'

// 请求首页轮播图
export const getHomeCasual = ()=> ajax(BASE_URL + '/api/homecasual');
// 请求首页导航
export const getHomeNav = ()=> ajax(BASE_URL + '/api/homenav');
// 请求首页商品列表
export const getHomeShopList = ()=> ajax(BASE_URL + '/api/homeshoplist');
// 请求商品分类
export const getSearchGoods = ()=> ajax(BASE_URL + '/api/searchgoods');
