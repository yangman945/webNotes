```js
// 防抖
export function _debounce(func, delay = 300, immediate = true) {
  let timer = null;
  return function (e) {
    clearTimeout(timer);
    // 当开启立执行并且定时器处于null时 now为true
    let now = immediate && !timer;
    timer = setTimeout(() => {
      timer = null;
      // 关闭立执行 执行这里
      !immediate ? func.apply(this, arguments) : null;
    }, delay);
    // 开启立执行 执行这里
    now ? func.apply(this, arguments) : null;
  };
}

// 节流
export function _throttle(fn, interval = 300) {
  let flag = true;
  return function (e) {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.call(this,arguments);
      flag = true;
    }, interval);
  };
}

// 深拷贝
export function _deepClone(obj) {
  if (typeof obj !== "object") return obj;
        // 定义obj拷贝时的存储方式
        let objClone = Array.isArray(obj) ? [] : {};
        // eslint-disable-next-line no-undef
        for (let key in obj) {
          // hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // 判断obj子元素是否为对象 如果是递归复制
            objClone[key] = deepClone(obj[key]);
          } else {
            objClone[key] = obj[key];
          }
        }
        return objClone;
}

// 是否为移动端
export function _isMobile() {
  return Boolean(
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  );
}

// 类型检测
export function _reportTyep(type) {
  return Object.prototype.toString.call(type).slice(8, -1);
}

/**
 * @function 数组转树形结构
 * @description 非递归方式
 * @param data {Array} 需要转换的数组
 * @return Array
 * @version 0.1.0
 * @example 示例代码...
 *
 */
export function _listToTree(data) {
  let treeAry = [];
  let map = new Map();
  data.forEach((item) => {
    if (!item.children) {
      item.children = [];
    }
    map[item.id] = item;
  });
  data.forEach((item) => {
    const parent = map[item.pid];
    if (parent) {
      parent.children.push(item);
    } else {
      treeAry.push(item);
    }
  });
  return treeAry;
}

/**
 * @function 数组转树形结构
 * @description 递归方式
 * @param1 data {Array} 需要转换的数组
 * @param2 id {String || Number || null} 父级pid
 * @return Array
 * @version 0.2.0
 * @example 示例代码...
 *
 */
export function _listToTreeR(data, id, TreeAry = []) {
  data.forEach((item) => {
    if (item.pid === id) {
      TreeAry.push(item);
    }
  });
  TreeAry.forEach((i) => {
    i.children = [];
    _listToTreeR(data, i.id, i.children);
  });
  return TreeAry;
}

/**
 * @function 树形结构转数组
 * @description reduce()方式
 * @param1 data {Array} 需要转成数组的树形结构数组
 * @return Array
 * @version 0.1.0
 * @example 示例代码...
 *
 */
export function _treeToList(data) {
  return data.reduce((temp, item) => {
    let { children, ...i } = item;
    return temp.concat(i,children && children.length ? _treeToList(children) : []);
  }, []);
}
/**
 * @function 树形结构转数组
 * @description 递归方式
 * @param1 data {Array} 需要转成数组的树形结构数组
 * @return Array
 * @version 0.2.0
 * @example 示例代码...
 *
 */
export function _treeToListR(data) {
  let newAry = [];
  data.forEach((item) => {
    let { children, ...i } = item;
    console.log(children, "children");
    if (children && children.length > 0) {
      newAry = newAry.concat(_treeToListR(children));
    }
    newAry.push(i);
  });
  return newAry;
}

```

