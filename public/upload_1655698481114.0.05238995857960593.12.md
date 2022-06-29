<!--
 * @Author: fuzhenghao
 * @Date: 2022-06-14 17:30:36
 * @LastEditTime: 2022-06-20 10:49:56
 * @LastEditors: fuzhenghao
 * @Description: 
 * @FilePath: \myBlog_frontEnd\src\assets\mackdown\react系列\react-hooks.md
-->
## react-hooks

[react-hooks官网](https://react.docschina.org/docs/hooks-intro.html)

1. ### useState

   

2. ### useEffect

   > *Effect Hook* 可以让你在函数组件中执行副作用操作
   
   useEffect接收两个参数，第一个接收一个函数对象执行具体的操作逻辑,第二个接受数组作为dependence。在每次DOM执行完effect操作后都会和dependence进行浅比较是否相同
   
   
   ```
   useEffect(() => {
   	//操作逻辑
   }, [])
   ```
   
   

   ```javascript
   import React, { useState, useEffect } from 'react';
   
   function Example() {
     const [count, setCount] = useState(0);
   
     // Similar to componentDidMount and componentDidUpdate:
     useEffect(() => {
       // Update the document title using the browser API
       document.title = `You clicked ${count} times`;
     }, []);
   
     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>
           Click me
         </button>
       </div>
     );
   }
   ```

   这一段是官网代码上的例子。