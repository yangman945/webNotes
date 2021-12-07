### BFC概念

[引用文章1，这里做温习记录](https://zhuanlan.zhihu.com/p/25321647)

[引用文章2](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

Block Formatting Contexts（块级格式化上下文）

BFC具有普通容器所没有的一些特征，具有BFC特征的元素可以看做是隔离的独立容器，容器内部的元素不论如何布局都不会影响到外面的元素

#### 触发BFC规则的行为

- 根元素 html
- 浮动元素 float ( 除none以外的值)
- 绝对定位元素position（为absolute、fixed的值）
- display（为 inline-block、table-cells、flex的值）
- overflow（为hidden、auto、scroll的值）
- ......

#### BFC特征的应用

-  解决相邻盒子外边距塌陷的问题
- 清浮动overflow:hidden（不过我们一般不会用这种方法）
- 阻止元素内容被浮动元素覆盖，实现两列自定义布局（不理解看文章1去）

**BFC清浮动的缺点：**内容增多的时候容易造成不会自动换行导致内容被隐藏掉，无法显示要溢出的元素（元素直接被挤出BFC元素盒子） 

推荐伪元素清浮动

```css
.clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
        content: "";
        display: block;
        height: 0;
        clear:both;
        visibility: hidden;
    }
    .clearfix{
        *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
    }
```



