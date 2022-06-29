/*
 * @Author: fuzhenghao
 * @Date: 2022-05-15 10:57:19
 * @LastEditTime: 2022-05-23 20:44:46
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\middleware\request-id.ts
 */
import { Provide } from '@midwayjs/decorator';
import { NextFunction, Context } from '@midwayjs/web';
import { IMiddleware } from '@midwayjs/core';
import { HeadersKey } from '@mw-components/jaeger';
import { KoidComponent } from '@mw-components/koid';

@Provide()
export class RequestIdMiddleware implements IMiddleware<Context, NextFunction> {
  resolve() {
    return requestIdMiddleware;
  }
}

async function requestIdMiddleware(
  ctx: Context,
  next: NextFunction
): Promise<void> {
  const key = HeadersKey.reqId;
  
  let reqId = ctx.get(key);

  if (reqId) {
    ctx.reqId = reqId;
  } else {
    const koid = await ctx.requestContext.getAsync(KoidComponent);
    reqId = koid.idGenerator.toString();
    ctx.reqId = reqId;
  }
 

  ctx.set(key, reqId);

  await next();
}
