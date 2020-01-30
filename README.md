# pdd移动端商城项目开发

> 本项目是基于Vue.js+express+MySql的移动端全栈项目

> [后端服务器项目地址](https://github.com/fu-x/pdd-server)

> [项目演示地址](http://coolxiang.top/pdd)
> 本项目为移动端项目，pc端演示请在开发者模式中调至移动设备模式
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 项目搭建
1. **使用vue-cli脚手架**
2. **CSS编译器选择——stylus的安装和配置**
   * 安装
      ```shell
      npm install stylus stylus-loader --save-dev
      ```
   * 使用
      ```html
      <style scoped lang="stylus" ref="stylesheet/stylus"></style>
      ```
3. **移动端项目配置**
   * 视口`viewport`
      ```html
      <meta id="viewport" name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; minimum-scale=1.0; user-scalable=no;">
      ```
   * 点击响应延迟300毫秒
     + 原因：这是为了检查用户是否再做双击。为了能够立即响应用户的点击事件，才有了FastClick。
     + 使用：引入fastclick.js文件，并配置。
      ```javascript
      if ('addEventListener' in document) {
        document.addEventListener('DOMContentLoaded', function() {
          FastClick.attach(document.body);
        }, false);
      }
      ```
4. **运行**
   ```shell
   npm run dev #自动编译打包
   ```
   默认运行端口：8080
## 配置路由
1. - home
     * hot
     * dress
     * box
     * mbaby
     * general
     * food
     * shirt
     * man
     * ele
   - recommend
   - search
   - chat
   - me
   - login
   - mesetting
   - medetail
2. 引入路由
   * 安装`vue-router`
   * `main.js`中使用 
    ```html
    import router from './router/index'
    ```
3. 底部Tabbar实现路由跳转
   
## 数据请求axios和管理vuex
1. 引入`axios`模块
2. 封装通用的基于`Promise`的`get`和`post`请求函数
3. 解决跨域问题
4. 引入`vuex`模块
5. 配置vuex支持全局数据

## home主页面
1. 首页头部选项
   + 借助第三方库`ly-lab`
   + 创建配置二级路由以及子组件
   + 实现路由切换
2. 首页轮播图
   + 借助第三方库`swiper`
   + 配置轮播图
3. 自定义首页nav导航
   + 界面实现
   + 借助第三方库`better-scroll`实现滚动效果
   + 逻辑实现，完成自定义滚动条
4. 完成商品列表界面搭建
   
## recommend推荐页面
1. 完成页面布局
2. 实现动态数据渲染
3. 分页请求数据，实现上拉加载更多
4. 实现点击添加商品到购物车功能
   
## search搜索页面
1. 完成搜索框以及搜索页面搭建
2. 完成一级分类和二级分类页面布局
3. 实现动态数据渲染
4. 通过滚动公式计算，完成一级分类和二级分类左右联动效果
   
## login登录页面
1. 完成登录页面搭建
2. 实现两种方式登录切换——手机验证码登录和账号密码登录
3. 判断用户所输入的信息是否合法
4. 获取手机验证码计时
5. 点击重新获取图形验证码
6. 登陆完成跳转至个人中心页面
7. 验证用户是否已经登录，请求用户信息

## me个人中心页面
1. 完成个人中心页面搭建
2. 实现个人中心页面数据动态渲染
3. 完成设置界面搭建
4. 实现退出功能
5. 完成个人信息界面搭建
6. 实现修改个人信息功能
  
## cart购物车页面
1. 完成购物车页面搭建
2. 判断是否登录
3. 实现购物车页面数据动态渲染
4. 实现单选和全选功能，以及二者之间的联动效果
5. 实现购物车商品数量加减，以及手动修改input时的输入限制
6. 实现总价格的计算
7. 实现删除功能

## 性能优化
1. 图片懒加载
2. 路由懒加载
3. `keep-alive`组件缓存

## 打包部署至服务器