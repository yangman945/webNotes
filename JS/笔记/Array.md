### JS数组方法

#### reduce()

**注意1：**reduce不会对空数组执行回调函数

```js
/**
* @function 累加
* @param1 temp:初始值或计算结束后的返回值
* @param2 item:遍历项
* @param3 index:索引
* @param4 arr(可选属性):传递给函数的初始值，默认为Array的第一项，那item将从第二项开始计算
* @version 0.2.0
* @example 示例代码...
*
*/
array.reduce((temp,item,index)=>{
    return ....
},arr)

```

