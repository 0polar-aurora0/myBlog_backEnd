/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 11:48:29
 * @LastEditTime: 2021-11-02 10:43:00
 * @LastEditors: fuzhenghao
 * @Description: 
 * @FilePath: \myBlog_backEnd\src\config\plugin.ts
 */
import { EggPlugin } from 'egg';
export default {
  logrotator: false, // disable when use @midwayjs/logger
  static: true,
} as EggPlugin;
