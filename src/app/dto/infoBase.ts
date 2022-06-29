import { ApiProperty } from '@midwayjs/swagger';
import { Rule, RuleType } from '@midwayjs/validate';

/*
 * @Author: fuzhenghao
 * @Date: 2022-06-16 12:02:46
 * @LastEditTime: 2022-06-16 12:05:24
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\dto\infoBase.ts
 */
export class infoBase {
  @ApiProperty({ example: ['react', 'umi'], description: '标签' })
  @Rule(RuleType.array().default([]).optional())
  labels?: Array<string>;

  @ApiProperty({ example: '1999-09-12', description: '创建时间' })
  @Rule(RuleType.date())
  create_at?: Date;

  @ApiProperty({ example: '1999-09-12', description: '更新时间' })
  @Rule(RuleType.date())
  update_at?: Date;

  @ApiProperty({ example: '1', description: '展示状态' })
  //默认公开状态
  @Rule(RuleType.string().default(1).optional())
  showState?: string;

  @ApiProperty({ example: '介绍', description: '介绍' })
  @Rule(RuleType.string().min(1).max(100000).default('暂无介绍').optional())
  introduce?: string;
}
