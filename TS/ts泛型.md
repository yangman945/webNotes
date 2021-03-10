## 泛型

`一个组件能够支持多种类型数据，使用户可以灵活的复用组件`

### 类型变量

**定义：**使返回值的类型与传入参数的类型相同，属于特殊的变量只表示类型而不是值

**语法：**function<类型变量>(参数:类型变量):类型变量 { return }

```tsx
// 定义泛型函数
function identity<T>(arg: T): T {
    return arg;
}

// 使用方式1 函数<参数类型>(传入参数)
let output = identity<string>("myString")

// 使用方式2 类型推断 由编译器帮我们确认传入T的类型
let output = identity("myString")
```



### 泛型变量

**定义：**使用泛型变量时，我们必须在函数体内正确使用这个通用的类型