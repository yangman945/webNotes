### CSS常用开发技巧

#### 水平垂直居中方法整理

这里只列举在无法确定子元素宽高情况下的方法

```html
<div class="box">
      <div class="box-item">我是需要垂直居中的元素</div>
</div>
```

```scss
// 这里给元素加宽高只是为了更直观的表现
// 方法一 
.box{
  width: 500px;
  height: 500px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
    .box-item{
    	max-width: 200px;
    	min-height: 200px;
    }
}

// 方法2
.box{
  width: 500px;
  height: 500px;
  background-color: #ccc;
  .box-item{
    max-width: 200px;
    min-height: 200px;
    background-color: red;
    margin:0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
}

// 方法3
.box{
  width: 500px;
  height: 500px;
  background-color: #ccc;
  .box-item{
    max-width: 200px;
    min-height: 200px;
    background-color: red;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
}
```

