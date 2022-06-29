# lodash源码解读

## 数组

### _.chunk

#### 函数介绍：

>  将数组（array）拆分成多个 `size` 长度的区块，并将这些区块组成一个新数组。 如果`array` 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。

#### 传入参数

1. ```array```*(Array)*:	需要处理的数组
2. ```[size=1]```*(number)*:   每个数组区块的长度, 默认为1

#### 返回值

1. ```result```(*Array*):	 返回一个包含拆分区块的新数组（注：相当于一个二维数组）

#### 源代码
```javascript
import slice from './slice.js'
import toInteger from './toInteger.js'

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size = 1) {
  size = Math.max(toInteger(size), 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}

export default chunk
```

#### 代码分析
1. ``` javascript
   size = Math.max(toInteger(size), 0)
   const length = array == null ? 0 : array.length
   if (!length || size < 1) {
      return []
   }
   ```
   传入参数处理

   将size进行取整处理，如果传入处理的数组长度为0则函数执行结束，返回空数组
   
   
   
2. ``` javascript
   const result = new Array(Math.ceil(length / size))
   ```
   根据需要划分的长度确定处理完毕的数组长度(这里使用Math.ceil进行向上取整)
   
   
   
3. ``` javascipt
   while (index < length) {
   	result[resIndex++] = slice(array, index, (index += size))
   }
   ```
   
   进行while循环

#### 图表流程分析

```flow
flow
st=>start: Start
op=>operation: Your Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
```

#### 注意点





