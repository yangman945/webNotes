### vite2工程创建

### 主要变化总结

### 项目基础架构搭建

- #### 路由

- #### 状态管理

- #### 样式组织

  - sass应用

  `npm i sass -D`

  

- #### UI库

- #### 基础布局

- #### 动态导航

- #### 数据服务

  - mock使用

  `npm i mockjs -s`

  `npm i vite-plugin-mock cross-env -D`

  **配置**

  ```tsx
  // vite.config.ts
  // {supportTs:false 不使用ts的话}
  export default defineConfig({
    plugins: [vue(),viteMockServe()]
  })
  ```

  ```json
  // package.json
  "scripts":{
      "dev":"cross-env NODE_ENV=development vite"
  }
  ```

  

- #### 复杂业务处理

- #### 项目打包

- #### 部署