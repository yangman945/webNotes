#### 配置@指定为src目录

```tsx
import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@': path.resolve(__dirname, 'src'),
    }
  }
})
```

**问题**

<img src="..\image\error1.png" style="zoom: 80%;" />

**解决**

```tsx
// tsconfig.json
{
 "compilerOptions": {
  ...
  "types": [
    "node"
  ]
  ...
  }
}
```

安装@types/node `npm install @types/node --save-dev`

