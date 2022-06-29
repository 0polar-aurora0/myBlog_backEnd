/*
 * @Author: fuzhenghao
 * @Date: 2022-05-24 21:24:12
 * @LastEditTime: 2022-06-02 00:20:11
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\util\query-string-params.ts
 */
import { Context } from '@midwayjs/web';

export default function queryStringParams<T>(ctx: Context, params: T) {
  //获取Query string parameters进行空值判断后放入params进行操作
  return {
    ...ctx.query,
    ...params,
  };
}
