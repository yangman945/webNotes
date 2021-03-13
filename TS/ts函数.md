## 函数

### **函数声明、函数表达式**

```tsx
// 函数声明
function sum(x: number, y: number): number {
    return x + y;
}

let mySum = function (x: number, y: number): number {
    return x + y;
};
```



### 接口定义函数的形状

**语法：**interface seachFunc { ( 参数 : 类型,  参数 : 类型...) : 返回值类型 }

```TSX
// 使用接口定义一个符合函数需要的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}

// 使用
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

// 个人观点 -- 这样写更简洁
interface calcFunc {
    (minNum : number, maxNum : number) : string
}

let calc : calcFunc = function(minNum, maxNum){
    return   (minNum+maxNum).toString()
}

console.log(calc(10,20))
```



### 可选参数

**定义：**与接口的可选属性类似，函数中使用 ? 操作符表示该参数是可选的

**注意：**传参时，可选参数必须在必选参数后面，意味着可选参数后面不能存在必选参数

```tsx
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```



### 参数默认值

**定义：**ts会将添加了默认值的参数识别为可选参数，但此时将不会受到 可选参数必须接在必须参赛后面的限制了

**语法：** function( name : string = '小明' ){ ... }

```tsx
function buildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Dog');
let tom = buildName('Tom');
```



### 剩余参数

**定义：**由于默认参数和可选参数均只能表示一个参数，当我们不能确定会有多少个参数传递进来时，可以使用 ...rest 剩余参数来接收

**语法：**function ( ...剩余参数名: 数组类型 )

**注意：**rest只能是最后一个参数，需要放在最后面

```tsx
// 在函数体内 我们可以对传进去的剩余参数 的数组进行操作
function buildName(...myNum:Array<number>):void {
   console.log(myNum)
}
buildName(1,23,5,8)
```



### 函数重载

**定义：**通过为同一个函数提供多个函数类型定义来实现多种功能的目的

```tsx
//下面的两行函数声明，指明getInfo函数接收的参数s可为string或number类型
function getInfo(name:string):string;
function getInfo(age:number):string;
 
//下面是getInfo函数的实现
function getInfo(s:any):any{
    if(typeof s==='string'){
        return '我叫:'+s;
    }else{
        return '我的年龄是'+s;
    }
}
 
 console.log(getInfo('张三'));   //正确
 console.log(getInfo(20));   //正确
```

