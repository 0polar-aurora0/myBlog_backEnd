/*
 * @Author: fuzhenghao
 * @Date: 2022-03-14 12:01:22
 * @LastEditTime: 2022-06-05 01:46:42
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\controller\articleSeries.ts
 */
// import * as assert from 'assert';
// import MyError from '../util/my-error';
import {
  Provide,
  Controller,
  Inject,
  Get,
  Post,
  ALL,
  Body,
  Files,
} from '@midwayjs/decorator';

import { Validate } from '@midwayjs/validate';
// import { Context } from 'egg';
import { Context } from '@midwayjs/web';

import {
  QueryDTO,
  UpdateDTO,
  SaveDTO,
  RemoveDTO,
  QueryDetailDTO,
  // ImportDTO,
} from '../dto/articleSeries';
import { ApiResponse } from '@midwayjs/swagger';

import { ArticleSeriesService } from '../service/articleSeriesService';
import QueryStringHandle from '../util/query-string-params';
import { KoidComponent } from '@mw-components/koid';
import { FileService } from '../service/fileService';

@Provide()
@Controller('/articleSeries', {
  tagName: '文章系列管理',
  description: '包含文章系列的增、删、改、查、排序',
})
export class ArticleSeriesController {
  @Inject()
  ctx: Context;

  @Inject()
  articleSeriesService: ArticleSeriesService;

  @Inject()
  koid: KoidComponent;

  @Inject()
  fileService: FileService;

  // @ApiExcludeController()
  //   .summary('管理员登录')
  //   .description(
  //     '使用帐号密码登录，拿到 token 后，前端需要将 token 放入 header 中，格式 token: Bearer ${token}'
  //   )
  //   .respond(200, 'success', 'json', {
  //     example: {
  //       token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9xxxx',
  //       currentAuthority: 'admin',
  //       status: 'ok',
  //       type: 'account',
  //     },
  //   })
  //   .build()
  @ApiResponse({ status: 200, description: '创建成功' })
  // @ApiResponseProperty({
  //   example: {
  //     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9xxxx',
  //     currentAuthority: 'admin',
  //     status: 'ok',
  //     type: 'account',
  //   },
  // })
  @Post('/create', {
    routerName: '创建系列',
    description: '会校验对应文章系列是否存在',
  })
  @Validate()
  async create(ctx: Context, @Body(ALL) params: SaveDTO) {
    const result = await this.articleSeriesService.saveArticleSeries(params);
    ctx.helper.success(result);
    // return ctx;
  }

  @Post('/import', {
    // middleware: [FileService],
    routerName: '批量创建系列',
    description: '会校验对应文章系列是否存在',
  })
  // @Validate()
  async importArticleSeries(@Files() files) {
    const result = await this.articleSeriesService.importArticleSeries(files);
    this.ctx.helper.success(result);
    // return ctx;
  }

  @Get('/query', {
    // middleware: [QueryStringHandle],
    summary: '查询系列',
    description: '系列分页条件查询接口',
  })
  @Validate()
  async query(@Body(ALL) query: QueryDTO) {
    let queryAndParams = QueryStringHandle(this.ctx, query);
    const result = await this.articleSeriesService.queryArticleSeries(
      queryAndParams
    );
    this.ctx.helper.success(result);
  }

  @Post('/update', {
    summary: '修改系列',
    description: '文章系列修改',
  })
  @Validate()
  async update(ctx: Context, @Body(ALL) params: UpdateDTO) {
    const result = await this.articleSeriesService.updateArticleSeries(params);

    ctx.helper.success(result);
  }

  @Get('/queryDetail', {
    // middleware: [QueryStringHandle],
    summary: '详细查询系列',
    description: '系列详细查询接口',
  })
  @Validate()
  async queryDetil(@Body(ALL) query: QueryDetailDTO) {
    let queryAndParams = QueryStringHandle(this.ctx, query);

    const result = await this.articleSeriesService.queryArticleSeriesDetails(
      queryAndParams
    );

    this.ctx.helper.success(result);
  }

  @Post('/remove', {
    summary: '删除系列',
    description: '关联关系表不会删除其中的内容，可以同时删除多个菜单',
  })
  // @Validate()
  async remove(ctx: Context, @Body(ALL) params: RemoveDTO) {
    // 检查系列是否存在

    await this.articleSeriesService.checkArticleSeriesExists(params.ids);
    await this.articleSeriesService.removeArticleSeriesByIds(params.ids);

    // assert.ok(total, new MyError('删除失败，请检查', 400));

    ctx.helper.success(null, null, 200);
  }
}
