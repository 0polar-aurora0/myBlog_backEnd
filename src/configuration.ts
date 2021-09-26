/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 11:48:29
 * @LastEditTime: 2021-09-26 13:55:41
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\configuration.ts
 *
 */
/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 11:48:29
 * @LastEditTime: 2021-09-26 13:55:35
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\configuration.ts
 *
 */
import { App, Configuration } from "@midwayjs/decorator";
import { ILifeCycle } from "@midwayjs/core";
import * as orm from "@midwayjs/orm";
import { Application } from "egg";
import { join } from "path";

@Configuration({
  imports: [
    orm, // 加载 orm 组件
  ],
  importConfigs: [join(__dirname, "./config")],
  conflictCheck: true,
})
export class ContainerLifeCycle implements ILifeCycle {
  @App()
  app: Application;

  async onReady() {}
}
