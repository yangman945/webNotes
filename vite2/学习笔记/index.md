### 使用技巧

#### 将值推断为类型

```tsx
// 示例
const initStatus = {
    hobby:[] as string[]
}

type newStatus = typeof initStatus;
```

#### 类型拓展

```tsx
// router 示例
import {createRouter,RouteRecordRaw} from 'vue-router'
export type newRouteRecordRaw = RouteRecordRaw & {
    hidden?:boolean
}

export default createRouter({
    ....
    router:[...] as newRouteRecordRaw[]
})
```

