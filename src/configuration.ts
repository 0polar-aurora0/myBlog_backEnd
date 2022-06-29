/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 11:48:29
 * @LastEditTime: 2022-06-29 19:46:00
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\configuration.ts
 *
 */
import { App, Configuration, Logger } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import * as swagger from '@midwayjs/swagger';
import * as orm from '@midwayjs/orm';
import * as jaeger from '@mw-components/jaeger';
// import * as jwt from '@mw-components/jwt';
import * as koid from '@mw-components/koid';
import * as upload from '@midwayjs/upload';
import * as web from '@midwayjs/web';
import { join } from 'path';
import { customLogger } from './app/util/custom-logger';
import { IMidwayLogger } from '@midwayjs/logger';
import * as validate from '@midwayjs/validate';
import { NpmPkg } from '@/interface';
import { Application } from '@midwayjs/web';

import { ErrorHandlerMiddleware } from './app/middleware/error-handler';
import { RequestIdMiddleware } from './app/middleware/request-id';
// import { Context } from 'vm';

@Configuration({
  imports: [
    web,
    swagger,
    orm, // 加载 orm 组件
    jaeger,
    validate,
    koid,
    // jwt,
    {
      component: swagger,
      enabledEnvironment: ['local'],
    },
    upload,
  ],
  importConfigs: [join(__dirname, './config')],

  // conflictCheck: true,
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  @Logger()
  readonly logger: IMidwayLogger;

  start;

  async onReady(): Promise<void> {
    this.app.config.pkgJson = this.app.config.pkg as NpmPkg;
    this.start = Date.now();

    // 定制化日志
    customLogger(this.logger, this.app);
    // 增加全局错误处理中间件（确保在最前）
    this.app.getMiddleware().insertFirst(ErrorHandlerMiddleware);
    // 增加全局x-request-id处理中间件
    // 雪花id添加
    this.app.useMiddleware(RequestIdMiddleware);

    // 需要显式在 app 启动时用 getAsync() 的方式进行触发，否则该类只有在首次被业务逻辑调用的时候才能初始化
    // await this.app.getApplicationContext().getAsync('rabbitmqService');
    const { pkgJson } = this.app.config;

    const info = {
      pkgName: pkgJson?.name || '暂无',
      pkgVersion: pkgJson.version,
    };
    // eslint-disable-next-line no-console
    this.logger.info('启动耗时 %d ms', Date.now() - this.start);
    console.log('✅ Your APP launched', info);
  }

  // 可以在这里做些停止后处理
  // async onStop(): Promise<void> {}
}
