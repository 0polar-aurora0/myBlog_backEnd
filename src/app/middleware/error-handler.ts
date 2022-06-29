/*
 * @Author: fuzhenghao
 * @Date: 2022-05-15 14:22:43
 * @LastEditTime: 2022-05-23 20:44:48
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\middleware\error-handler.ts
 */
import { Middleware } from '@midwayjs/decorator';
import { NextFunction, Context } from '@midwayjs/web';
import { IMiddleware } from '@midwayjs/core';

import MyError from '../util/my-error';

@Middleware()
export class ErrorHandlerMiddleware
  implements IMiddleware<Context, NextFunction>
{
  resolve() {
    return errHandleMiddleware;
  }
}

async function errHandleMiddleware(ctx, next): Promise<void> {
  try {
    await next();
    if (ctx.status === 404) {
      ctx.body = { code: 404, message: 'Not Found-------' };
    }
  } catch (err) {
    // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
    ctx.app.emit('error', err, ctx);

    const myerr = err as MyError;

    // 兼容运行ci的时候，assert抛出的错误为AssertionError没有status
    const [message, messageStatus] = myerr.message?.split(' &>');
    // const [message, messageStatus] = myerr.message;

  
    

    let status = myerr.status || parseInt(messageStatus) || 500;
    if (myerr.name === 'ValidationError' || message === 'ValidationError') {
      status = 422;
    }

    ctx._internalError = myerr;

    // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
    const error =
      status === 500 && ctx.app.config.env === 'prod'
        ? 'Internal Server Error'
        : message;

    // 从 error 对象上读出各个属性，设置到响应中
    ctx.body = { code: status, message: error };
    if (status === 422) {
      ctx.body.data = myerr.errors || myerr.details; // 兼容 midway 参数校验
    }
    ctx.status = status;
  }
}

// import { Middleware } from '@midwayjs/decorator';
// import { NextFunction, Context } from '@midwayjs/web';

// import { FunctionMiddleware, IMiddleware } from '@midwayjs/core';

// import MyError from '../util/my-error';

// @Middleware()
// export class ErrorHandlerMiddleware
//   implements IMiddleware<Context, NextFunction>
// {
//   resolve(): FunctionMiddleware<Context, NextFunction> {
//     return async () => {

//     };
//   }
// }

// async function errHandleMiddleware(
//   ctx: Context<any>,
//   next: NextFunction
// ): Promise<void> {}
