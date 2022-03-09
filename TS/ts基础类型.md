### [TS基础类型官方详细文档](https://www.tslang.cn/docs/handbook/basic-types.html)

### [TS基础笔记文档](https://juejin.cn/post/6872111128135073806#heading-9)

### 任意类型 any

**定义：**表示允许赋值为任意类型，在any类型上访问任何属性和方法都是被允许的

**注意：**any作为类型系统的顶级类型，我们在开发中应该尽量避免滥用它



### 未知 unknown

**定义：**与any类型相识，所有类型都可以归为unknown，但无法将unknown类型的值赋值给其他类型变量

`unknown可以赋值为任意类型，但除any外，unknown无法替代任何已知类型`

```tsx
// 将value定义为unknown类型，value可以接收任意类型的值
let value: unknown;
value = true;             // OK
value = 42;               // OK
value = "Hello World";    // OK
value = [];               // OK
value = {};               // OK
value = Math.random;      // OK
value = null;             // OK
value = undefined;        // OK
value = new TypeError();  // OK

// 将类型为unknown的value赋值给any之外的类型变量均报错
let value: unknown;
let value1: unknown = value;   // OK
let value2: any = value;       // OK
let value3: boolean = value;   // Error
let value4: number = value;    // Error
let value5: string = value;    // Error
let value6: object = value;    // Error
let value7: any[] = value;     // Error
let value8: Function = value;  // Error
```





### 空值 Void

**定义：**void表示没有任何返回值的函数

**注意：**声明void类型的变量毫无意义，因为只能将它赋值为undefined和null

```tsx
function alertName(): void {
    alert('My name is Tom');
}
```



### 枚举 enum

`ts中的枚举类型和普通的js对象本质上没有区别，只是对于开发者来说，相较于直接使用值类型去做判断，枚举类型更易读，能够提升代码的可读性和易维护性`

**使用方法：**enum 名称 = {键，键 = 值}

**注意事项：**枚举中的成员只能访问，不能赋值；枚举中的成员若不赋值，默认从0开始自增，如果成员为字符串，必须给每个成员赋值

```tsx
enum num = {
    a = 1,b,c,d,e
}

// num.a = 1、num.b = 2......

enum person = {
    girl = 'beautiful',
    boy = 'shine'
}
```

**拓展：**枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字

```js
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2
```





### 类型断言

`ts中的类型断言简单来说就是先做好一个假设，使得编译通过,类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查`

**使用方式1 ：**尖括号语法 ，<推断的类型>值

```tsx
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

**使用方式2 ：**as 语法 ，值 as 推断的类型（在ts中使用 tsx 时，只有as语法断言被允许）

```tsx
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```





### 类型推论

**定义：**TS中,对没有明确指出类型的地方，类型推论会帮助提供类型，但复杂的代码程序将无法推断出具体类型，这就需要我们明确定义了