### 打包优化

#### 项目分析

引入webpack 打包页面插件 进行项目的性能分析

`yarn add webpack-bundle-analyzer -s`

```js
//package.json

{
    "scripts": {
    "build": "vue-cli-service build --report",
  }
}
```

```js
// vue.config.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    configureWebpack:{
        plugins:[
           new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            // 进行以下配置 不然端口号冲突报错
            analyzerPort: 8880,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: true,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info'
           })
        ]
    }
}
```





#### 引入CDN优化

```js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    configureWebpack:{
        plugins:[
           new BundleAnalyzerPlugin()
        ],
        // 以下js文件不打包进最终的js文件
        externals:{
            'vue':'Vue',
            'vue-router':'VueRouter',
            'vuex':'Vuex',
            'element-plus':'ELEMENT',
            'axios':'axios',
        }
    }
}
```

[通过CDN网站](https://www.bootcdn.cn/)，引入项目依赖文件的链接

**注意1：**如果有官方的CDN链接以官方为准

**注意2：**留意CND引入的顺序，vue项目vue应该为最先

```html
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <!-- 注意 样式文件记得引入 --->
    <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
     <!-- 以下为引入的CDN -->
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.0.0/vue.cjs.min.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue-router/4.0.2/vue-router.cjs.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/vuex/4.0.2/vuex.cjs.min.js"></script>
    <script src="//unpkg.com/element-plus"></script>
  </body>
</html>

```

