`promise实现要点`

1. new实例化对象接受一个函数
2. 函数可传入resolve()和reject()
3. 定义三个状态，状态一旦改变就不可逆转
4. 实现.then() 接收两个参数，一个成功回调 一个失败回调
5. 模拟异步操作 三种状态下不同函数的执行时机

[看一下](https://blog.csdn.net/willemwei023/article/details/107234208)



```js
class Commitment {
      static PENDING = "待定";
      static FULFILLED = "成功";
      static REJECTED = "拒绝";
      constructor(func) {
        this.status = Commitment.PENDING;
        this.result = null;
        this.resolveCallbacks = [];
        this.rejectCallbacks = [];
        try {
          func(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
          this.reject(error);
        }
      }
      resolve(result) {
        setTimeout(() => {
          if (this.status === Commitment.PENDING) {
            this.status = Commitment.FULFILLED;
            this.result = result;
            this.resolveCallbacks.forEach((callback) => {
              callback(result);
            });
          }
        });
      }
      reject(result) {
        setTimeout(() => {
          if (this.status === Commitment.PENDING) {
            this.status = Commitment.REJECTED;
            this.result = result;
            this.rejectCallbacks.forEach((callback) => {
              callback(result);
            });
          }
        });
      }
      // promise .then会接受两个参数作为回调函数（参数如果不是函数会被直接忽略），一个是状态成功时，一个是状态拒绝时（我们一般都只用一个）
      then(onFuleiled, onRejected) {
        return new Commitment((resolve,reject) => {
          onFuleiled = typeof onFuleiled === "function" ? onFuleiled : () => {};
          onRejected = typeof onRejected === "function" ? onRejected : () => {};
          if (this.status === Commitment.PENDING) {
            this.resolveCallbacks.push(onFuleiled);
            this.rejectCallbacks.push(onRejected);
          }
          if (this.status === Commitment.FULFILLED) {
            // setTimeout 模拟原生promise的异步执行
            setTimeout(() => {
              onFuleiled(this.result);
            });
          }
          if (this.status === Commitment.REJECTED) {
            setTimeout(() => {
              onRejected(this.result);
            });
          }
        });
      }
    }
    console.log("第一步");
    let commitment = new Commitment((resolve, reject) => {
      console.log("第二步");
      setTimeout(() => {
        resolve("手写成功");
        console.log("第四步");
      });
    });
    commitment.then(
      (res) => {
        console.log(res);
      },
      (rej) => {
        console.log(rej);
      }
    );
    console.log("第三步");
```

