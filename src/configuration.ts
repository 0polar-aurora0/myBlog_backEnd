/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 11:48:29
 * @LastEditTime: 2021-11-02 15:53:50
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\configuration.ts
 *
 */
import { App, Configuration } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import * as orm from '@midwayjs/orm';
import * as swagger from '@midwayjs/swagger';
import { Application } from 'egg';
import { join } from 'path';
import * as staticCache from 'koa-static-cache';
import path = require('path');

@Configuration({
  imports: [
    orm, // 加载 orm 组件
    swagger,
  ],
  importConfigs: [join(__dirname, './config')],
  conflictCheck: true,
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady() {
    this.app.use(
      staticCache({
        prefix: '/public/',
        dir: path.join(this.app.getAppDir(), 'public/app/public'),
      })
    );
  }
}
