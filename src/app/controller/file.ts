/*
 * @Author: fuzhenghao
 * @Date: 2022-06-01 03:23:11
 * @LastEditTime: 2022-06-02 18:49:43
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\controller\file.ts
 */
import {
  ALL,
  Body,
  Controller,
  //   Fields,
  Files,
  Inject,
  Post,
  Provide,
} from '@midwayjs/decorator';
import { Context } from '@midwayjs/web';
import { FileService } from '../service/fileService';
import QueryStringHandle from '../util/query-string-params';

@Provide()
@Controller('/file', {
  tagName: '文件功能',
  description: '包含文件上传,删除,清理',
})
export class FileController {
  @Inject()
  ctx: Context;

  @Inject()
  fileService: FileService;

  //   @Inject()

  @Post('/upload')
  async upload(@Files() files) {
    /*
    files = [
      {
        filename: 'test.pdf',        // 文件原名
        data: '/var/tmp/xxx.pdf',    // mode 为 file 时为服务器临时文件地址
        fieldname: 'test1',          // 表单 field 名
        mimeType: 'application/pdf', // mime
      },
      {
        filename: 'test.pdf',        // 文件原名
        data: ReadStream,    // mode 为 stream 时为服务器临时文件地址
        fieldname: 'test2',          // 表单 field 名
        mimeType: 'application/pdf', // mime
      },
      // ...file 下支持同时上传多个文件
    ]
    */
    let fileIds = await this.fileService.fileSave(files);
    return {
      fileIds,
    };
  }

  @Post('/query')
  async query(@Body(ALL) query: any) {
    let queryAndParams = QueryStringHandle(this.ctx, query);
    // console.log({ queryAndParams });

    /*
    files = [
      {
        filename: 'test.pdf',        // 文件原名
        data: '/var/tmp/xxx.pdf',    // mode 为 file 时为服务器临时文件地址
        fieldname: 'test1',          // 表单 field 名
        mimeType: 'application/pdf', // mime
      },
      {
        filename: 'test.pdf',        // 文件原名
        data: ReadStream,    // mode 为 stream 时为服务器临时文件地址
        fieldname: 'test2',          // 表单 field 名
        mimeType: 'application/pdf', // mime
      },
      // ...file 下支持同时上传多个文件
    ]
    */
    let file = await this.fileService.fileQuery(queryAndParams.id);
    // return file;
    this.ctx.helper.success(file);
  }
}
