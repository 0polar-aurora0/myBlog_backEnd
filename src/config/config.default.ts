/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 11:48:29
 * @LastEditTime: 2022-06-17 12:48:29
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\config\config.default.ts
 *
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
// import { uploadWhiteList } from '@midwayjs/upload';
import * as path from 'path';
// import { tmpdir } from 'os';

const orm = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '0guduzhilv0',
  database: 'myblog',
  synchronize: false, // 如果第一次使用，不存在表，有同步的需求可以写 true
  logging: true,
};
export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1632628109610_3589';

  // config.web = {
  //   port: 7003,
  // };

  // add your config here
  config.orm = orm;
  config.middleware = [];

  config.midwayFeature = {
    // true 代表使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: true,
  };

  // swagger文档配置，默认地址 http://127.0.0.1:7003/swagger-ui/index.html
  config.swagger = {
    title: 'myblog',
    description: 'myblog项目的接口定义',
    version: '1.0.0',
    // termsOfService: 'https://github.com/fsd-nodejs/service-mw2',
    contact: {
      name: 'fuzhenghao',
      // url: 'https://github.com/tkvern',
      email: '1045612802@qq.com',
    },
    license: {
      name: 'MIT',
      // url: 'https://github.com/midwayjs/midway/blob/serverless/LICENSE',
    },
  };

  config.egg = {
    port: 7003,
  };

  config.multipart = {
    mode: 'file',
    fileSize: '10mb',
    whitelist: ['.xlsx', '.xls', '.doc', '.txt', '.md', '.png'],
  };

  config.upload = {
    // mode: UploadMode, 默认为file，即上传到服务器临时目录，可以配置为 stream
    mode: 'file',
    // fileSize: string, 最大上传文件大小，默认为 10mb
    fileSize: '10mb',
    // whitelist: string[]，文件扩展名白名单
    // whitelist: uploadWhiteList.filter(ext => ext !== '.xlsx'),
    whitelist: ['.xlsx', '.xls', '.doc', '.txt', '.md', '.pod', '.png'],
    // tmpdir: string，上传的文件临时存储路径
    tmpdir: path.join(process.cwd(), 'public'),
    // tmpdir: path.join(tmpdir(), 'midway-upload-files'),
    //上传的文件在临时目录中多久之后自动删除，默认为 5 分钟
    // 此处用于静态资源文件存储,不进行清空
    cleanTimeout: 20 * 30 * 60 * 60 * 1000,
  };

  // config.security = {
  //   csrf: false,
  // };

  /**
   * 单数据库实例
   */

  return config;
};
