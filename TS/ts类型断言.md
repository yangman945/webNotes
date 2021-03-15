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

```tsx
// 例子1
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

// 例子2
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function swim(animal: Cat | Fish) {
    (animal as Fish).swim();
}

const tom: Cat = {
    name: 'Tom',
    run() { console.log('run') }
};
swim(tom); // Uncaught TypeError: animal.swim is not a function

//上面的例子编译时不会报错，但在运行时会报错 原因是 (animal as Fish).swim() 这段代码隐藏了 animal 可能为 Cat 的情况，将 animal 直接断言为 Fish 了，而 TypeScript 编译器信任了我们的断言，故在调用 swim() 时没有编译错误。可是 swim 函数接受的参数是 Cat | Fish，一旦传入的参数是 Cat 类型的变量，由于 Cat 上没有 swim 方法，就会导致运行时错误了。总之，使用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误
```



**情景2：**将一个父类断言为更加具体的子类

 ```tsx
interface ApiError extends Error {
    code: number;
}
interface HttpError extends Error {
    statusCode: number;
}

function isApiError(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}
 ```



**情景3：**将任何一个类型断言为any

```tsx
// 当引用一个在此类型上不存在的属性或方法时，将会报错
window.foo = 1;  // index.ts:1:8 - error TS2339: Property 'foo' does not exist on type 'Window & typeof globalThis'.

//此时我们可以使用 as any 临时将 window 断言为 any 类型
(window as any).foo = 1; // 在 any 类型的变量上，访问任何属性都是允许的。
```



**情景4：**将any断言为一个具体的类型

```tsx
// 上面的例子中，我们调用完 getCacheData 之后，立即将它断言为 Cat 类型。这样的话明确了 tom 的类型，后续对 tom 的访问时就有了代码补全，提高了代码的可维护性
function getCacheData(key: string): any {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom = getCacheData('tom') as Cat;
tom.run();
```





### 类型断言的限制

**定义：**当两种类型能互相兼容时 A兼容B或是B兼容A就行，他们就可以互相进行断言了

```tsx
interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

function testAnimal(animal: Animal) {
    return (animal as Cat);
}
function testCat(cat: Cat) {
    return (cat as Animal);
}
```



### 双重断言

**定义：**将一个类型断言为另一种类型

**注意：**除非迫不得已，千万别用双重断言

```tsx
interface Cat {
    run(): void;
}
interface Fish {
    swim(): void;
}

function testCat(cat: Cat) {
    return (cat as any as Fish);
}
```



### 类型断言 VS 类型转换

**注意：**类型断言只会影响ts编译时的类型，类型断言语句在编译结果中会被删除



### 类型断言 VS 类型声明

**注意：** 类型声明比类型断言更加严谨

```tsx
// 类型断言 精确any的类型
function getCacheData(key: string): any {
    return (window as any).cache[key];
}
interface Cat {
    name: string;
    run(): void;
}
const tom = getCacheData('tom') as Cat;
tom.run()

// 类型声明 精确any的类型
function getCacheData(key: string): any {
    return (window as any).cache[key];
}
interface Cat {
    name: string;
    run(): void;
}
const tom: Cat = getCacheData('tom');
tom.run();

// 两者区别
interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}
const animal: Animal = {
    name: 'tom'
};
let tom = animal as Cat; // 由于 Animal 兼容 Cat，故可以将 animal 断言为 Cat 赋值给 tom

interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}
const animal: Animal = {
    name: 'tom'
};
let tom: Cat = animal; //报错，不允许将 animal 赋值为 Cat 类型的 tom。Animal 可以看作是 Cat 的父类，当然不能将父类的实例赋值给类型为子类的变量。
```





























