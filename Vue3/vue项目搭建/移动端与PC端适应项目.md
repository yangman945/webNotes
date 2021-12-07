### 移动端与PC端适应项目

#### 项目选型

1. 维护一套模板代码，通过媒体查询或是设备判断加载不同css代码（适合简单页面）
2. 维护两套模板代码，通过设备判断后再路由出口加载（适合复杂页面）

因为项目页面比较简单，但样式还是比较多的，所以采用了第一种方案，一套模板代码+两套css代码进行开发

#### 项目结构

```js
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有 AJAx 请求
│   ├── assets                 # 静态资源
│   │   ├── mobile             # 移动端引用图片
│   │   ├── pc                 # PC端引用图片
│   ├── components             # 全局公用组件
│   ├── router                 # 路由
│   │   ├── index.js           # 路由入口
│   ├── styles                 # 样式
│   │   ├── mobile             # 移动端样式文件
│   │   ├── pc                 # PC端样式文件
│   │   ├── common.scss        # 公共样式
│   │   ├── normalize.css      # 样式重置文文件
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置项
├── .babel.confi.js            # babel-loader 配置
├── vue.config.default.js      # vue-cli 
└── package.json               # package.json
```



#### 载入不同css的方法

通过判断设备的方法

```js
// utils/isMobile.js
export default function(){
    return 		Boolean(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))
}

```

```js
// demo.vue
<script>
    import isMobile from "@/utils/isMobile.js"
	export default {
    	data(){
        	return {
            	isMobile:isMobile()
        	}
    	}
	}
</script>
```

通过媒体查询的方法

```html
<style lang="scss" scoped>
/* 移动端  */
@media all and (max-width: 768px) {
  @import "@/styles/mobile/home.scss";
}
/* PC端 */
@media all and (min-width: 769px) {
  @import "@/styles/pc/home.scss";
}
</style>
```

#### 移动端适配

移动端适配单位的种种区别我们就不赘述了，这里我主要会采用rem，但又不想自己去根据设计稿去换算rem，所以采用了px转rem的方法，直接按照UI的设计稿编写就好 *（ps：这里唠叨两句，移动端适配单位要控制着使用，很多时候别人在更大的设备上是为了看到更多的内容，而不是看更大的内容，所以字体、边距之类的我还是会用px固定单位）*

通过js检测屏幕宽度改变html里面的font-szie的，从而来达到自适应的视觉效果 

`yarn add amfe-flexible -s`  	

自动将px转化为rem（可改变px的大小写避免转化）

`yarn add postcss-pxtorem -s`

`yarn add postcss-px2rem -s`

```js
// main.js
import 'amfe-flexible'
```

```js
// config.vue.js
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  outputDir: "dist",
  productionSourceMap: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 37.5,
            propList: ['*'],
            // 忽略 pc文件夹下的单位换算 否则会影响pc端的css
            exclude: /pc/
          })
        ]
      }
    }
  }
}
```

