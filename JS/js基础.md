



### js基础笔记

#### 闭包

`能够读取其他函数内部变量的函数`

闭包经典问题

```js
for(var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// 请问这段代码输出什么？
```

使用闭包保护数据案例

```js
export default {
  name: 'App',
  data(){
    return {
      // 用户数据
      user:{
        name:"yangman",
        age:'30'
      }
    }
  },
  methods: {
    // 通过闭包的形式隐藏用户数据防止篡改 直接定义在data中会被修改
    userFunc(){
      let user = {
        name:"yangman",
        age:"30"
      }
      // 提供写入和读取的API 
      return {
        set(key,val){
          user[key] = val
        },
        get(key){
          return user[key]
        }
      }
    }
  }

  
}
</script>
```



#### 浅拷贝深拷贝

[引用文章1，这里做温习记录](https://juejin.cn/post/6844903798696067080#heading-29)

[引用文章2](https://mp.weixin.qq.com/s/DDvsfWiyMsJFwN2JOp3_JA)

`浅拷贝：对对象的第一层进行拷贝，如果属性值为基础数据类型是互不影响，若是复杂数据类型时，指针已然会指向同一内存地址`

实现浅拷贝1：Object.assign(拷贝新目标, 拷贝对象源)

```js
let user = { name: "leo", skill: { JavaScript: 90, CSS: 80}};
let leo = Object.assign({}, user);
leo.name = "leo1";
leo.skill.CSS = 90;
console.log(leo.name);      // "leo1" ⚠️差异！
console.log(user.name);     // "leo"  ⚠️差异！
console.log(leo.skill.CSS); // 90
console.log(user.skill.CSS);// 90
```

实现浅拷贝2：拓展运算符 ...

```js
let user = { name: "leo", skill: { JavaScript: 90, CSS: 80}};
let leo = {...user};
leo.name = "leo1";
leo.skill.CSS = 90;
console.log(leo.name);      // "leo1" ⚠️ 差异！
console.log(user.name);     // "leo"  ⚠️ 差异！
console.log(leo.skill.CSS); // 90
console.log(user.skill.CSS);// 90
```

`深拷贝：将对象完整的拷贝成一个互不影响的新对象`

实现深拷贝1：JSON.parse(JSON.stringify(对象))

实现深拷贝2

```js
export function _deepClone(obj) {
  // 定义obj拷贝时的存储方式
  let objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === "object") {
    // eslint-disable-next-line no-undef
    for (let key in obj) {
      // hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        // 判断obj子元素是否为对象 如果是递归复制
        objClone[key] = _deepClone(obj[key]);
      } else {
        objClone[key] = obj[key];
      }
    }
  }
  // 非obj类型直接返回
  return objClone;
}
```



#### 原型与原型链

[实例文章](https://zhuanlan.zhihu.com/p/35790971)

`prototype(原型、原型对象)：实例对象都可以访问的公告容器`

`_proto_：实例对象的_proto_指向constructor(构造函数)的prototype，从而实现继承`

`constructor(构造函数)：通过new 函数名()，来实例化对象的函数`

![](https://pic4.zhimg.com/v2-1ae63b09f2f38aee29efc79f1400b8d3_r.jpg)

```js

let Person = function(name,age,sex){
            this.name = name;
            this.age = age;
            this.sex = sex;
}
  Person.prototype.sayName = function(){
    console.log('我的名字叫'+this.name)
  }
  let tong = new Person('Tong',18,'man')
  let jenny = new Person('Jenny',38,'woman')
  console.log(tong.__proto__ === jenny.__proto__) // ture 两者的_proto_共用Person的原型
  console.log(tong.prototype === jenny.prototype) // ture 两者共用Person的原型
  console.log(tong.__proto__  === Person.prototype) // ture
  console.log(Person.prototype.constructor  === Person) // ture Person的原型的实例对象指回自身
```

`原型链：对象查找属性或方法的过程，通过obj._proto_从prototype中寻找是否有自己需要的，找到则返回，未找到则prototype会继续往自己的_proto_上查找，若找到终点没有则返回null`

![](https://s4.ax1x.com/2021/12/14/ojAoxf.png)



#### JS继承

#### JS数据类型检测

`typeof：检测数据为哪种类型，但只能对部分类型做出正确的检测`

**正确结果**

```js
    console.log(typeof '字符串')
    console.log(typeof 123)
    console.log(typeof false)
    console.log(typeof undefined)
    console.log(typeof function(){})
    console.log(typeof {})
    console.log(typeof Symbol())
```

**错误结果**

```js
	console.log(typeof ['数组']) // 返回 object
    console.log(typeof null) // 返回 object
    console.log(typeof new Date()) // 返回 object
    console.log(typeof RegExp()) // 返回 object
```

`instanceof：检测A是否为为B的实例，返回true&false，但不能确定检测数据具体为哪种类型`

```js
    console.log(['数组'] instanceof String) // 返回 false
    console.log(['数组'] instanceof Array) // 返回 true
    console.log(['数组'] instanceof Object) // 返回 true
```



`constructor：判断B是否为A的构造函数，返回true&false，`

```js
'福组成'.constructor === String // 返回 false
['1','2'].constructor === Array // 返回 true
['1','2'].constructor === Object // 返回 false
```

`toString`

```js
Object.prototype.toString.call(123).slice(8,-1)  // Number
```





#### 函数柯里化

把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数。

```js
function currying() {
      // 第一次执行时，定义一个数组专门用来存储所有的参数
      let args = Array.prototype.slice.call(arguments);
      // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
      let inner = function () {
        args.push(...arguments);
        // 递归调用内部返回函数
        return inner;
      };
      // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
      inner.toString = function () {
        return args.reduce((perv, cur) => {
          return perv + cur;
        }, 0);
      };
      return inner;
    }
    //  若内部函数调用toString改写函数返回值无效 需要以下这种方法调用
    let result = currying(1)(2)(3).toString();
    console.log(result);
```

 