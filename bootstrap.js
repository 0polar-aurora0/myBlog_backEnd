/*
 * @Author: fuzhenghao
 * @Date: 2021-10-15 02:39:14
 * @LastEditTime: 2022-05-20 22:18:54
 * @LastEditors: fuzhenghao
 * @Description: 
 * @FilePath: \myBlog_backEnd\bootstrap.js
 */
const WebFramework = require('@midwayjs/web').Framework;
const web = new WebFramework().configure({
  port: 7003,
});

const { Bootstrap } = require('@midwayjs/bootstrap');
Bootstrap.load(web).run();
