### 引用类型array的操作方法

> 注: [MDN官网参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)

1. ### Array.from()

对以下对象创建一个新的,浅拷贝数组实例

- 伪数组对象(拥有length属性)
- 可迭代对象(可获取对象中的元素，Map或Set)

```

```

2. ###  Array.concat()：Array

   合并两个或多个数组

   ```javascript
   let array1 = ["合", "并"];
   let array2 = ["数", "组"];
   let array3 = ["的", "方", "法"];
   let array4 = array1.concat(array2, array3);


   ```

   

3. ###  Array.at(index: number): any

   返回数组中索引值位置的项目(接收正数或负数)

   ```
   
   ```

4. ### Array.copyWithin(): Array

   复制数组中的元素到同数组中的的另一个位置(浅复制)

   ```
   
   ```

5. ### flat(depth: number)

   深度遍历数组(数组扁平化)

   ```

   ```

1. ### join(): String

   将数组中元素以指定分隔符拼接成一个字符串