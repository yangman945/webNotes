## 接口 interface

**作用：**在TS中，使用接口来定义对象的类型

**定义：**接口是对行为的抽象，具体如何行动由类去实现，除了可以用于对类的一部分行为进行抽象以外，也常用于对对象的形状进行描述

**用法：**`interface 接口名称 { 属性: 属性指定的类型 }`

```tsx
// 定义接口
interface Person {
    name: string;
    age:number;
}

// 定义变量 变量tom已经被约束，赋值时形状必须和接口Person一致（顺序不用对应）
let tom :Person = {
    age:123,
    name: '123'
}
```



**可选属性：**当我们希望不要完全匹配一个接口形状时，可以使用 ? 操作符来表示该变量允许不存在

```js
// 定义接口
interface Person {
    name?: string;
    age:number;
}

let tom :Person = {
    age:123
}
```



**任意属性：**允许一个接口定义一个任意属性，使用[propName :string] 定义了任意属性取string类型的值，一旦定义了任意属性，那么确定属性和可选属性都必须是它的类型的子集

```tsx
interface Person {
    name: string;
    age?: number;
    [propName: string]: string;
}
// 错误示例 age属性的取值是number 但任意属性定义的类型是只有 string
let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

// 使用联合类型 或是 any解决接口有多个类型的属性问题
interface Person {
    name: string;
    age?: number;
    [propName: string]: string | number;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
```



**只读属性：**使用 readonly 定义只读属性，使该字段只能在对象刚创建时被赋值（且创建时该字段必须被赋值）

```tsx
interface Person = {
    readonly id: number;
	name: string
}

let tom: Person = {
    id: 123,
    name: '123'
}
```



**可索引类型：**ts支持两种索引签名，string和number



### 使用接口表示函数类型



```tsx
interface searchFunc(){
    （source:string,substring:string）：Boolean
}
// 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配，只需在对应的位置参数类型兼容即可
let mySearch: SearchFunc;
mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}
```





### interface和type的关系

**注意：**一般来说，能用interface实现就用interface

**不同点**

