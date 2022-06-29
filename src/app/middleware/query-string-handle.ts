/*
 * @Author: fuzhenghao
 * @Date: 2022-05-24 13:15:08
 * @LastEditTime: 2022-06-01 02:14:00
 * @LastEditors: fuzhenghao
 * @Description: 将querystring中的参数current,pageSize取出放入params中
 * @FilePath: \myBlog_backEnd\src\app\middleware\query-string-handle.ts
 */

import { Middleware } from '@midwayjs/decorator';
import { NextFunction, Context } from '@midwayjs/web';
import { IMiddleware } from '@midwayjs/core';

@Middleware()
export class QueryStringHandleMiddleware
  implements IMiddleware<Context, NextFunction>
{
  resolve() {
    return queryStringHandleMiddleware;
  }
}

async function queryStringHandleMiddleware(
  ctx: Context,
  next: NextFunction
): Promise<void> {
  await next();
}
