### 交叉类型



### 联合类型

**定义：**表示取值可以为多种类型中的一种

**语法：**使用 | 操作符分隔每个类型

```tsx
let mySon : string | number;
// 以下赋值为指定类型的操作都能够编译成功
mySon = 'you'
mySon = 123
```

**注意：**由于ts不能确定联合类型的变量是哪个类型的时候，我们只能访问联合类型中的共有属性或方法

```tsx
function getLength(something: string | number): number {
    return something.length;
}
// 由于 number类型并没有length属性，将导致报错

function getString(something: string | number): string {
    return something.toString();
}
// toString()属于共有属性，可以成功通过编译
```



### 条件类型

- 条件类型是有条件表达式所决定的类型
- 条件类型具有不唯一性，增加了语言的灵活性

#### RetureType



