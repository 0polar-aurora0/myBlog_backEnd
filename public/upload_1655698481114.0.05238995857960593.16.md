### 基础类型string的操作方法

[MDN官网参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

> 注: 这里只讨论string.prototype原型链上且未废弃的常用方法

1. [@@iterator] ()

   > 注:	[iterator对象]()	[symbol类型]()	[for...of循环详解]()
   
2. #### charAt(index: number): string

   从字符串中获取单个字符(两种方式)

- ```javascript
  let str = "string字符串操作";

  ```
  
- ```
  let str = "string字符串操作";

  ```

2. #### concat()

   字符串拼接

-  ```javascript
   let str1 = "string字符串";
   let str2 = "操作";
   let str3 = ["c", "o", "n", "c", "a", "t", "拼", "接"];
   


   
   ```

-  ```
   //mdn强烈建议使用 + 和 += 替换concat使用

   ```

   

3. ####  endsWith(searchString: string, length: number): boolean

   判断字符串结尾是否以指定字符串结尾(方法大小写敏感)

   ```javascript
   let str = "字符串是以问号结尾吗?";


   ```

4. #### includes(searchString: string, position): boolean

   判断字符串再某个position起是否包含某一串字符串

   ```javascript
   let str = "这个str字符串中是否有匹配的str?";
   let match_str = "否有匹";


   ```

5. ### indexOf(searchValue: string, fromIndex: number): number

   返回string字符串中第一次出现指定元素的位置， 没有返回-1

   ```javascript
   let str = "这是一个字符串str";
   let result1 = str.indexOf("字符串");  //4
   let result2 = str.indexOf("字符串", 6);   //4


   ```

6. ### lastIndexOf(searchValue, fromIndex)

   返回string字符串中最后一次出现指定元素的位置，没有返回-1

   ```javascript
   let str = "这是一个字符串一个字符串";
   let result = str.lastIndexOf("一个");

   ```

7. ### match(regExp): Array

   返回字符串匹配正则表达式的结果

   ```javascript
   
   ```

8. ### matchAll(regExp): Array

   ```javascript
   
   ```

9. ### normalize()

   将字符串转换为指定编码格式的字符串

   ```javascript
   
   ```

10. ### padEnd(): string

    ```javascript
    let str = "给这个string添加字符串";
    let result = str.padEnd(25, "{}");

    ```

11. ### padStart(): string

    ```javascript
    
    ```

12. ### repeat(count: number): string

    ```javascript
    let str = "重复这个字符串";
    let result = str.repeat(10);

    ```

13. ### replace()

    ```javascript
      let str = "替换掉dog, dog去吃骨头了";
      let result = str.replace("dog", "cat");

    ```

14. ### split(): Array

    ```javascript
      let str = "{132}{123}";
      let result = str.split("{");

    ```

15. ### trim()

    去掉字符串两头的空字符串并返回空字符串

    ```javascript
      let str = "  我准备  去掉空 字 符串了  ";
      let result = str.trim();

    ```

    
