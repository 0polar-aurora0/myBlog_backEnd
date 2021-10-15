/*
 * @Author: fuzhenghao
 * @Date: 2021-10-15 15:52:15
 * @LastEditTime: 2021-10-15 16:12:19
 * @LastEditors: fuzhenghao
 * @Description: 
 * @FilePath: \myBlog_backEnd\src\app\dto\articleCard.ts
 * 
 */
import { Rule, RuleType } from '@midwayjs/decorator';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

export class QueryDTO {
    @CreateApiPropertyDoc('当前页')
    @Rule(RuleType.number().min(1).max(100000).default(1).optional())
  current?: number;
}