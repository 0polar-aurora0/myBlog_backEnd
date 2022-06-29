/*
 * @Author: fuzhenghao
 * @Date: 2021-10-14 17:50:05
 * @LastEditTime: 2022-06-08 00:13:16
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\controller\article.ts
 *
 */

import {
  Provide,
  Controller,
  Inject,
  Get,
  Post,
  ALL,
  // Query,
  Body,
} from '@midwayjs/decorator';

import { Validate } from '@midwayjs/validate';

import { Context } from 'egg';

import {
  CreateDTO,
  RemoveDTO,
  QueryDetailDTO,
  UpdateDTO,
  QueryDTO,
} from '../dto/article';

import { ArticleService } from '../service/article';

@Provide()
@Controller('/article', {
  tagName: '文章管理',
  description: '包含文章的增、删、改、查、排序',
})
export class ArticleController {
  @Inject()
  articleService: ArticleService;

  @Inject()
  ctx: Context;

  @Post('/create')
  // @Validate()
  async create(ctx: Context, @Body(ALL) params: CreateDTO) {
    const result = await this.articleService.saveArticle(params);
    ctx.helper.success(result);
  }

  @Post('/update', {
    summary: '修改系列',
    description: '文章系列修改',
  })
  // @Validate()
  async update(ctx: Context, @Body(ALL) params: UpdateDTO) {
    const result = await this.articleService.updateArticle(params);

    ctx.helper.success(result);
  }

  @Get('/query', {
    summary: '查询文章',
    description: '文章查询',
  })
  // @Validate()
  async query(ctx: Context, @Body(ALL) query: QueryDTO) {
    const result = await this.articleService.queryArticle(query);
    ctx.helper.success(result);
  }

  @Get('/queryDetail', {
    // middleware: [QueryStringHandle],
    summary: '详细查询系列',
    description: '系列详细查询接口',
  })
  @Validate()
  async queryDetil(@Body(ALL) query: QueryDetailDTO) {
    const result = await this.articleService.queryArticleDetails(query);

    this.ctx.helper.success(result);
  }

  @Post('/remove', {
    summary: '删除系列',
    description: '关联关系表不会删除其中的内容，可以同时删除多个菜单',
  })
  // @Validate()
  async remove(ctx: Context, @Body(ALL) params: RemoveDTO) {
    await this.articleService.removeArticleByIds(params.ids);

    // assert.ok(total, new MyError('删除失败，请检查', 400));

    ctx.helper.success(null, null, 200);
  }
}
