/*
 * @Author: fuzhenghao
 * @Date: 2021-10-15 15:52:15
 * @LastEditTime: 2022-06-16 12:05:18
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\dto\article.ts
 *
 */
import { ApiProperty } from '@midwayjs/swagger';
import { Rule, RuleType } from '@midwayjs/validate';
import { infoBase } from './infoBase';

class BaseDTO_saveAndUpdate extends infoBase {
  @ApiProperty({ example: 'Kitty', description: '标题' })
  @Rule(RuleType.string().trim().max(100).required())
  title: string;

  @ApiProperty({
    example: ['6934490331056959488', '6934490331056959489'],
    description: '被以下系列收录',
  })
  @Rule(RuleType.array())
  articleSeries?: Array<string>;

  @ApiProperty({
    // example: `${new File(['文件内容'], '上传的的文件')}`,
    description: '文件',
  })
  file?: string;
}

export class QueryDTO {
  @ApiProperty({ example: '1', description: '当前页' })
  @Rule(RuleType.number().min(1).max(100000))
  current?: number;

  @ApiProperty({ example: '10', description: '每页数量' })
  @Rule(RuleType.number().min(1).max(100000))
  pageSize?: number;

  @ApiProperty({
    example: '6934490331056959488',
    description: '根据id进行查找',
  })
  @Rule(RuleType.string().min(1).max(100))
  id?: string;

  @ApiProperty({
    example: '1999-09-12',
    description: '时间查询开始时间',
  })
  @Rule(RuleType.date())
  startTime?: Date;

  @ApiProperty({
    example: '1999-09-12',
    description: '时间查询结束时间',
  })
  @Rule(RuleType.date())
  endTime?: Date;
}

export class QueryDetailDTO {
  @ApiProperty({
    example: '6934490331056959488',
    description: '根据id进行查找',
  })
  @Rule(RuleType.string().min(1).max(100))
  id: string;
}

export class ShowDTO {
  @ApiProperty({ example: 'Kitty', description: '文章信息' })
  @Rule(RuleType.string().trim().max(10).required())
  id: string;
}

export class CreateDTO extends BaseDTO_saveAndUpdate {
  @ApiProperty({ example: '6934490331056959488', description: '文章id' })
  @Rule(RuleType.string().min(1).max(100))
  id?: string;

  @ApiProperty({
    // example: `${new File(['文件内容'], '上传的的文件')}`,
    description: '文件',
  })
  file?: any;
}

export class UpdateDTO extends BaseDTO_saveAndUpdate {
  @ApiProperty({ example: '6934490331056959488', description: '文章id' })
  @Rule(RuleType.string().min(1).max(100))
  id: string;
}

export class RemoveDTO {
  @ApiProperty({
    example: '["6934490331056959488", "6934490331056959489"]',
    description: '删除ids',
  })
  @Rule(RuleType.string().trim().max(10).required())
  ids: Array<string>;
}
