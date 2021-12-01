## 数组的增删改查迭代方法



### 增

#### push()

```js
/**
* @method push() 往数组后面添加新的参数
* @params {item} 接收任意数量参数
* @return {number} 返回数组的最新长度
*/
let aryA = [1,2,3]
let aryB = arrA.push(4,5,6)
console.log(aryA) // [1,2,3,4,5,6]
console.log(aryB) // 6
```



#### unshift()

```js
/**
* @method unshift() 往数组前面添加新的参数
* @params {item} 接收任意数量参数
* @return {number} 返回数组的最新长度
*/
let aryA = [1,2,3]
let aryB = arrA.push(4,5,6)
console.log(aryA) // [4,5,6,1,2,3]
console.log(aryB) // 6
```

#### slice()

```js
/**
* @method slice() 往数组中截取指定元素，不会改变原数组
* @params1 {start:必填 规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置}
* @params2 {end:非必填 规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。} 
* @return {array} 返回截取的数组
*/
let colors = ["red", "green", "blue", "yellow", "purple"];
let colors2 = colors.slice(1);
let colors3 = colors.slice(1, 4);
concole.log(colors2); // green,blue,yellow,purple
concole.log(colors3); // green,blue,yellow
```



#### splice()

```js
/**
* @method splice() 往数组指定未知添加参数
* @params1 {index:必填 规定添加/删除项目的位置，使用负数可从数组结尾处规定位置}
* @params2 {howmany:必填 要删除的项目数量,如果设置为 0，则不会删除数组元素} 
* @params3 {item:非必填 接收任意数量参数}
* @return {array} 返回被删除的数组，howmany为0时返回[]
*/
let colors = ["red", "green", "blue"];
let removed = colors.splice(1, 0, "yellow", "orange")
console.log(colors) // red,yellow,orange,green,blue
console.log(removed) // []

```



### 删

#### pop()

```js
/**
* @method pop() 删除数组的最后一项
* @return {item} 返回被删除的一项
*/
let colors = ["red", "green", "blue"];
let removed = colors.pop()
console.log(colors) // [red,blue]
console.log(removed) // green
```



#### shift()

```js
/**
* @method shift() 删除数组的第一项
* @return {item} 返回被删除的一项
*/
let colors = ["red", "green", "blue"];
let removed = colors.shift()
console.log(colors) // [green,blue]
console.log(removed) // red
```



#### splice()

```js
// 同上
```



### 改

#### splice()

```js
// 同上上
```



### 查

#### indexOf()

```js
/**
*@method indexOf() 查找指定元素位置
*@return {number} 返回查找元素指定的索引 没有返回-1
*/
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
numbers.indexOf(4) // 3
```



#### includes()

```js
/**
*@method includes() 判断指定元素是否存在
*@return {Boolean} 返回查找元素的结果 存在返回 true 不存在 false
*/
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
numbers.includes(4) // true
```



#### find()

```js
/**
*@method find() 查到指定元素
*@return {item} 返回符合条件的第一个元素，没有符合返回undefined
*/
let people = [
    {
        name: "Matt",
        age: 27
    },
    {
        name: "Nicholas",
        age: 29
    }
];
people.find((item, index, array) => item.age < 28) // // {name: "Matt", age: 27}
```



### 迭代

#### some()

```js
/**
*@method some() 遍历数组是否有符合条件的元素
*@return {Boolean} 返回查找条件的结果 有一项存在返回 true 不存在 false
*/
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let someResult = numbers.every((item, index, array) => item > 2);
console.log(someResult) // true
```



#### eveny()

```js
/**
*@method some() 遍历数组元素是否全部符合条件
*@return {Boolean} 返回查找条件的结果 全部符合返回 true 不存在 false
*/
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let everyResult = numbers.every((item, index, array) => item > 2);
console.log(everyResult) // false
```



#### filter()

```js
/**
*@method some() 遍历数组返回符合条件的元素
*@return {array} 返回符合条件的新数组
*/
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let filterResult = numbers.filter((item, index, array) => item > 2);
console.log(filterResult); // [3,4,5,4,3]
// filter return true 是return自身item
```



#### map()

```js
/**
*@method map() 遍历数组返回原数组的映射数组
*@return {array} 返回等同原数组长度的新数组
*/
let numbers = [1, 2, 3, 4];
let filterResult = numbers.map((item, index, array) => if(item > 2){return item *2});
let filterResult = numbers.map((item, index, array) => {
     if(item > 2){
         return item *2
     }
    return item
});
console.log(filterResult); // [undefined,undefined,4,6]
// map return true 是return turn 
```

