### [TS基础类型官方详细文档](https://www.tslang.cn/docs/handbook/basic-types.html)

### [TS基础笔记文档](https://juejin.cn/post/6872111128135073806#heading-9)

### enum枚举

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

**使用方式1：**尖括号语法 <推断的类型>值

```tsx
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

**使用方式2：**as语法 值 as 推断的类型（在ts中使用jsx时，只有as语法断言被允许）

```tsx
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```





