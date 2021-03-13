## 类型断言



**定义：**`ts中的类型断言简单来说就是先做好一个假设，使得编译通过,类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查`

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



### 常用情景

**情景1：**将一个联合类型断言成其中的一个类型

**注意：**

```tsx
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

// 由于Cat没有swim() 将会报错
function isFish(animal: Cat | Fish) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}

// 我们将animal断言为Fish
function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}

//上面的例子编译时不会报错，但在运行时会报错 原因是 (animal as Fish).swim() 这段代码隐藏了 animal 可能为 Cat 的情况，将 animal 直接断言为 Fish 了，而 TypeScript 编译器信任了我们的断言，故在调用 swim() 时没有编译错误。可是 swim 函数接受的参数是 Cat | Fish，一旦传入的参数是 Cat 类型的变量，由于 Cat 上没有 swim 方法，就会导致运行时错误了。总之，使用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误
```



**情景2：**将一个父类断言为更加具体的子类

