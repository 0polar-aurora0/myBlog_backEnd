## 前端面试(1)-web端汇总

## HTML

## css

###  1.  元素水平居中

- #### 行内元素
> text-align: center
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .style1 {
            display: inline;
            background-color: red;
            height: 50px;
            text-align: center;
        }
        
    </style>
</head>
<body>
    <div class="style1">
       垂直居中   
    </div>
</body>
</html>
```

- #### 块级元素
> 确定宽度，使用margin: 0 auto
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .parents {
            background-color: blue;
            width: 700px;
        }
        .children {
            margin: 0 auto;
            background-color: red;
            width: 100px;
            text-align: center;
        }
        
    </style>
</head>
<body>
    <div class="parents">
        <div class="children">
           垂直居中   
        </div>
    </div>
</body>
</html>
```
> 父元素绝对定位position: absolute，子元素margin-left: -width/2

```

```

## JavaScript(web端)

1. #### 数据类型

   - 原始数据类型
     1. [null]()
     2. [boolean]()
     3. [undifined]()
     4. [string]()
     5. [symbol]()
     6. [bigint]()
   - 引用数据类型(object)
     1. object
     2. array
     3. function
     4. date
     5. regExp
     6. Maath

2. #### 深拷贝和浅拷贝

3. #### 防抖和节流

   > 实现要点：定时器

   - 防抖功能

      > 实现思路: 设置定时器, 定时器时间内触发则重新计时。
      
      ```
      
      ```
      
      
      
- 节流功能
  
   > 实现思路：设置定时器, 定时器内再次触发无反应，定时器结束后重置事件/重置定时器


## Webpack

## React



## Umi

`	

