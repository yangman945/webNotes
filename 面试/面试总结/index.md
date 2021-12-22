### 面试总结归纳

#### 数据结构转换

今日面试(2021.12.20)，题目为数组转树形结构、树形数据扁平化，结果数组转树形结构没写出来！哎，之前明明已经看过这文章的《[面试了十几个高级前端，竟然连（扁平数据结构转Tree）都写不出来](https://juejin.cn/post/6983904373508145189)》，回来赶紧总结一下压压惊。

**扁平数据结构转Tree的两种方式**

```js
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
export function _listToTreeR(data, id,TreeAry = []) {
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
```



**Tree转扁平数组的两种方式**

```js
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

