/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 11:48:29
 * @LastEditTime: 2021-10-18 11:03:55
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\config\config.default.ts
 *
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

const orm = {
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "0guduzhilv0",
  database: 'myblog',
  synchronize: false, // 如果第一次使用，不存在表，有同步的需求可以写 true
  logging: true,
};
export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1632628109610_3589";

  // add your config here
  config.orm = orm;
  config.middleware = [];

  config.midwayFeature = {
    // true 代表使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: true,
  };

  // config.security = {
  //   csrf: false,
  // };

  /**
   * 单数据库实例
   */

  return config;
};
