/*
 * @Author: fuzhenghao
 * @Date: 2021-10-14 17:50:05
 * @LastEditTime: 2021-10-14 17:55:02
 * @LastEditors: fuzhenghao
 * @Description: 
 * @FilePath: \myBlog_backEnd\src\app\controller\articleCard.ts
 * 
 */
/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 16:22:14
 * @LastEditTime: 2021-10-14 17:34:18
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\controller\articleCard.ts
 *
 */
import { Provide } from "@midwayjs/decorator";

import { Context, controller, inject, provide, plugin } from 'midway';

@Provide()
@controller('/auth')
export class ArticleCardController {

  @plugin()
  mysql;
}
