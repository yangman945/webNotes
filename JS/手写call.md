#### call

```js
function person() {
      console.log(this.name,'name');
    }
    let egg = {
      name: "蛋蛋",
    };
    Function.prototype.myCall = function () {
      console.log(this); // 1、 person.myCall() this指向person
      let args = [...arguments]
      let obj = args.shift() || window  // 2、获取参数首位 并防止该参数为nullnull
      obj.p = this; //  3、obj.p = person 将person引用为obj的属性
      let result = obj.p(...args); // 4、传入参数 执行p(),p为person，this指向调用它的对象，获取函数返回结果
      delete obj.p; // 5、删除 p obj不需要该属性
      return result; // 6、返回函数返回结果
    };
    person.myCall(egg, 1, 2, 4);
```

#### apply

```html
function person(a, b, c) {
      return {
        naem: this.name,
        a: a,
        b: b,
        c: c,
      };
    }
    let egg = {
      name: "蛋蛋",
    };
    Function.prototype.myApply = function (obj,args) {
      let newObj = obj || window;
      obj.p = this;
      let result
      if(!Array.isArray(args)){
        result = newObj.p()
      }else{
        result = newObj.p(...args)
      }
      delete newObj.p;
      return result; 
    };
    const res = person.myApply(egg, [1, 2, 3]);
    console.log(res, "res");
```

