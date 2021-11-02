/*
 * @Author: fuzhenghao
 * @Date: 2021-10-14 17:50:05
 * @LastEditTime: 2021-11-02 15:04:35
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\controller\indexpage_cardlist.ts
 *
 */

import {
  Provide,
  Controller,
  Inject,
  Get,
  ALL,
  Body,
} from '@midwayjs/decorator';
import { Context } from 'egg';

import { ShowDTO } from '../dto/indexpage_cardlist';

import { Indexpage_cardlistService } from '../service/indexpage_cardlist';

@Provide()
@Controller('/indexpage_cardlist')
export class Indexpage_cardlistController {
  @Inject()
  userService: Indexpage_cardlistService;

  @Get('/query')
  // @Validate()
  async query(ctx: Context, @Body(ALL) query: ShowDTO) {
    const result = await this.userService.query_indexpage_cardlist(query);
    console.log({ result });
    ctx.helper.success(result);
  }
}
