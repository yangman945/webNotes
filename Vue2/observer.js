// 监听器 observer
function observer(target) {
  if (typeof target !== "object" || target === null) return target;
  if (Array.isArray(target)) {
    console.log(newArray);
    target._proto = newArray;
  }
  for (let key in target) {
    defineReactive(target, key, target[key]);
  }
}
function defineReactive(target, key, value) {
  let dep = new Dep();
  // 深度观察1 对象嵌套结构
  observer(value);
  Object.defineProperty(target, key, {
    get: function () {
      if (Dep.target) {
        dep.addSub(Dep.target);
      }
      return value;
    },
    set: function (newVal) {
      // 深度观察2 属性值被变为对象的情况
      observer(newVal);
      if (newVal !== value) {
        value = newVal;
        dep.notify();
        console.log("更新视图了");
      }
    },
  });
}
