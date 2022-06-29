/*
 * @Author: fuzhenghao
 * @Date: 2022-03-14 13:17:40
 * @LastEditTime: 2022-06-16 12:05:35
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\dto\articleSeries.ts
 */
import { Rule, RuleType } from '@midwayjs/validate';
import { ApiProperty } from '@midwayjs/swagger';
import { infoBase } from './infoBase';

class BaseDTO_saveAndUpdate extends infoBase {
  @ApiProperty({
    example: ['6934490331056959488', '6934490331056959489'],
    description: '包含的文章',
  })
  @Rule(RuleType.array().default([]).optional())
  articles?: String[];

  @ApiProperty({ example: 'es6语法解读', description: '系列标题' })
  @Rule(RuleType.string().min(1).max(100000).default(1).optional())
  title?: string;
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
  @ApiProperty({ example: '6934490331056959488', description: '文章系列id' })
  @Rule(RuleType.string().trim().max(100).required())
  id: string;
}

export class UpdateDTO extends BaseDTO_saveAndUpdate {
  @ApiProperty({ example: '6934490331056959488', description: '文章系列id' })
  @Rule(RuleType.string().min(1).max(100).optional())
  id?: string;
}

export class SaveDTO extends BaseDTO_saveAndUpdate {
  @ApiProperty({ example: '6934490331056959488', description: '文章系列id' })
  @Rule(RuleType.string().min(1).max(100).optional())
  id?: string;
}

// export class ImportDTO {
//   @ApiProperty({ example: '6934490331056959488', description: '文章系列id' })
//   // @Rule(RuleType.string().min(1).max(100).optional())
//   fileList?: Array<File>;
// }

export class RemoveDTO {
  @ApiProperty({ example: 'Kitty', description: '批量删除ids' })
  @Rule(RuleType.number().min(1).max(100000).default(1).optional())
  ids?: Array<string>;
}
