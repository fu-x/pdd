# pdd移动端商城项目开发

> 本项目是基于Vue.js+express+MongoDB的全栈项目

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

## 第一天
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
## 第二天
1. **配置一级路由**
   * Home
   * Recommend
   * Search
   * Chat
   * Me
2. **构建Tabbar实现一级路由切换**
3. **实现首页顶部滚动栏二级路由**
   * 借助第三方库实现——Ly-Tab
4. **配置二级路由**

## 第三天
1. **实现首页轮播图**
   * 借助第三方库——swiper
2. **实现首页Nav导航以及Nav底部自制scroll**
3. **完成商品列表布局**

## 第四天
1. **封装axios**
2. **配置Vuex**

## 第五天
1. **从后端服务器获取轮播图、首页导航、商品列表数据并保存至`vuex.state`**
2. **将数据渲染到`html`上**
3. **安装配置`vue-lazyload`实现懒加载**

## 第六天
1. **完成推荐页面布局**
2. **抽离推荐商品列表**

## 第七天
1. **搭建搜索界面**
2. **获取数据并渲染到页面上**
3. **使用第三方插件`better-scroll`实现页面滚动**

## 第八天
**实现一级分类列表和二级分类列表联动效果**
1. 一级列表current(选中效果类)跟随二级列表滚动动态改变；
2. 点击一级列表二级列表滚动到该版块；
3. 以及列表跟随二级列表滚动。
## 后续持续更新