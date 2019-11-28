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

## 后续持续更新