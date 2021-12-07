### 图片懒加载





### 防抖节流

[关于防抖需要注意的要点](https://blog.csdn.net/zongmaomx/article/details/109195790)

**作为工具类使用**

```js
// utils/public.js

export function _debounce(func, wait = 300, immediate = true){
	let timer = null;
	return function(...params){
		clearTimeout(timer);
		// 当开启立执行并且定时器处于null时 now为true
		let now = immediate && !timer;
		timer = setTimeout(() => {
			timer = null;
			// 关闭立执行 执行这里
			!immediate ? func.call(this, ...params) : null;
		},wait);
		// 开启立执行 执行这里
		now ? func.call(this, ...params) : null;
	}
}

export function _throttle(fn, interval = 300) {
  let flag = true;
  return function () {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.call(this, arguments);
      flag = true;
    }, interval);
  };
}
```

**vue中应用**

```vue
<template>
  <div style="height: 2000px;">
    <el-button @click="clickMe">你好</el-button>
    <router-view />
  </div>
</template>
<script>
import {_debounce,_throttle} from './utils/public'
export default {
    methods:{
    	// 这里不知道为什么只能传入匿名函数......
    	clickMe: _debounce(function(){...},1000,false),
   		rollMe: _throttle(function(){...},1000)
    }
}
</script>
```

