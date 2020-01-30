import ajax from './ajax'

// 基础路径
const BASE_URL='/api';

// 请求首页轮播图
export const getHomeCasual = ()=> ajax(BASE_URL + '/api/homecasual');
// 请求首页导航
export const getHomeNav = ()=> ajax(BASE_URL + '/api/homenav');
// 请求首页商品列表
export const getHomeShopList = ()=> ajax(BASE_URL + '/api/homeshoplist');
// 请求商品分类
export const getSearchGoods = ()=> ajax(BASE_URL + '/api/searchgoods');
// 请求推荐页面商品列表
export const getRecommendGoods = (params)=> ajax(BASE_URL + '/api/recommendshoplist', params);
// 请求手机验证码
export const getPhoneCode = (phone)=> ajax(BASE_URL + '/api/usercode', {phone});
// 手机验证码登录
export const verifyCodeLogin = (phone, code)=> ajax(BASE_URL + '/api/logincode', {phone, code}, 'POST');
// 账号密码登录
export const pwdLogin = (username, password, captcha)=> ajax(BASE_URL + '/api/loginpwd', {username, password, captcha}, 'POST');
// 检验是否已经登录
export const getIsLogin = ()=> ajax(BASE_URL + '/api/islogin');
// 退出登陆
export const getLogout = ()=> ajax(BASE_URL + '/api/logout');
// 修改个人信息
export const getAlterInfo = (id, name, sex, address, birthday, signature)=> ajax(BASE_URL + '/api/alterinfo', {id, name, sex, address, birthday, signature}, 'POST');
// 添加购物车
export const getAddCart = (goods_id, goods_name, thumb_url, price, number=1)=> ajax(BASE_URL + '/api/addcart', {goods_id, goods_name, thumb_url, price, number}, 'POST');
// 请求购物车商品
export const getCart = ()=> ajax(BASE_URL + '/api/cart');
// 修改购物车商品
export const getAlertCart = (cartgoods)=> ajax(BASE_URL + '/api/alertcart', {cartgoods}, 'POST');