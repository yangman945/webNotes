# pc-mall

## src

### styles

- normalize.css   默认标签样式重置文件
- global.scss   全局样式引入文件及常用标签重置
- theme.scss   主题样式文件
- common.css   公共样式文件
- mixin.scss   样式函数文件
- element-variables  elementUI主题色切换文件

**vue配置sass全局样式**

`npm install sass-resources-loader -S`

```js
module.exports = {
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // 全局变量文件路径，只有一个时可将数组省去
                    resources: ['./src/styles/theme.scss', './src/styles/mixin.scss']
                })
                .end()
        })
    },

}
// vue.config.js
```



### views

- home   	主页面



### components

- common	全局公共组件
- elementPlus/index.ts     负责elementUI组件的按需引入
- globalPlus/index.js  全局组件的引入



### api

- request.js	接口处理文件
- index.js    接口模块的集中引入和导出
- modules    接口模块存放文件夹



### assets

- images    负责存放图片的 文件