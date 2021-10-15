/*
 * @Author: fuzhenghao
 * @Date: 2021-10-14 17:50:05
 * @LastEditTime: 2021-10-15 16:44:31
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
  Validate,
  ALL,
  Query,
} from "@midwayjs/decorator";
import { Context } from "egg";

import { QueryDTO } from "../dto/articleCard";

import { ArticleCardService } from "../service/articleCard";

@Provide()
@Controller("/article")
export class ArticleCardController {
  @Inject()
  userService: ArticleCardService;

  @Get("/query")
  // @Validate()
  async query(ctx: Context, @Query(ALL) query: QueryDTO) {
    // const result = await this.userService.saveArticleCard(query);
    // ctx.helper.success(result);
    // return ctx
    return 'Hello Midwayjs!';
  }
}
