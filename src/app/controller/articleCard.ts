/*
 * @Author: fuzhenghao
 * @Date: 2021-10-14 17:50:05
 * @LastEditTime: 2021-10-19 17:34:44
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\controller\articleCard.ts
 *
 */

import {
  Provide,
  Controller,
  Inject,
  Get,
  Post,
  ALL,
  Query,
  Body,
} from "@midwayjs/decorator";
import { Context } from "egg";

import { QueryDTO, ShowDTO } from "../dto/articleCard";

import { ArticleCardService } from "../service/articleCard";

@Provide()
@Controller("/article")
export class ArticleCardController {
  @Inject()
  userService: ArticleCardService;

  @Post("/create")
  // @Validate()
  async create(ctx: Context, @Query(ALL) query: QueryDTO) {
    const result = await this.userService.saveArticleCard(query);
    ctx.helper.success(result);
    return ctx;
  }

  @Get("/query")
  // @Validate()
  async query(ctx: Context, @Body(ALL) query: ShowDTO) {
    const result = await this.userService.queryArticleCard(query);
    console.log({ result });
    let ctx_data = ctx.helper.success(result);
    // console.log({ controller_ctx: ctx });
    console.log({ ctx_data });

    return ctx_data;
  }
}
