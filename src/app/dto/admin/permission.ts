import { ApiProperty } from '@midwayjs/swagger';
import { Rule, RuleType } from '@midwayjs/validate';

/**
 * 查询权限列表参数
 */
export class QueryDTO {
  @ApiProperty({ example: 'Kitty', description: '当前页' })
  @Rule(RuleType.number().min(1).max(100000).default(1).optional())
  current?: number;

  @ApiProperty({ example: 'Kitty', description: '每页数量' })
  @Rule(RuleType.number().min(1).max(1000).default(10).optional())
  pageSize?: number;

  @ApiProperty({ example: 'Kitty', description: '筛选字段-id' })
  @Rule(RuleType.string().trim().max(10).optional().allow(''))
  id?: string;

  @ApiProperty({ example: 'Kitty', description: '筛选字段-名称' })
  @Rule(RuleType.string().trim().max(50).optional().allow(''))
  name?: string;

  @ApiProperty({ example: 'Kitty', description: '筛选字段-标识' })
  @Rule(RuleType.string().trim().max(50).optional().allow(''))
  slug?: string;

  @ApiProperty({ example: 'Kitty', description: '筛选字段-路径' })
  @Rule(RuleType.string().trim().max(50).optional().allow(''))
  httpPath?: string;

  @ApiProperty({ example: 'Kitty', description: '筛选字段-请求方式' })
  @Rule(RuleType.string().trim().max(50).optional().allow(''))
  httpMethod?: string;

  @ApiProperty({
    example: 'Kitty',
    description:
      '排序字段，以字段名加下划线组合，不能有特殊字符和不存在的字段。例如: name_ASC 或者 name_DESC',
  })
  @Rule(
    RuleType.string()
      .trim()
      .max(50)
      .regex(/^[a-zA-Z]*(_ascend|_descend)$/)
      .optional()
  )
  sorter?: string;
}

/**
 * 获取单条权限参数
 */
export class ShowDTO {
  @ApiProperty({ example: 'Kitty', description: '权限的id' })
  @Rule(RuleType.string().trim().max(10).required())
  id: string;
}

/**
 * 删除权限参数
 */
export class RemoveDTO {
  @ApiProperty({ example: 'Kitty', description: '权限id的数组' })
  @Rule(RuleType.array().items(RuleType.string().trim().max(10)).min(1))
  ids: string[];
}

/**
 * 创建权限参数
 */
export class CreateDTO {
  @ApiProperty({ example: 'Kitty', description: '名称' })
  @Rule(RuleType.string().trim().max(50).required())
  name: string;

  @ApiProperty({ example: 'Kitty', description: '标识' })
  @Rule(RuleType.string().trim().max(50).required())
  slug: string;

  @ApiProperty({ example: 'Kitty', description: '请求方式' })
  @Rule(
    RuleType.array()
      .items(
        RuleType.string()
          .regex(/^(GET|POST|PUT|DELETE|PATCH|OPTIONS|HEAD|ANY)$/)
          .empty()
          .label('httpMethod')
      )
      .unique()
      .required()
  )
  httpMethod: string[];

  @ApiProperty({ example: 'Kitty', description: '接口路径(后端使用的)' })
  @Rule(RuleType.string().uri({ allowRelative: true }).required())
  httpPath: string;
}

/**
 * 更新权限参数
 */
export class UpdateDTO {
  @ApiProperty({ example: 'Kitty', description: '权限的id' })
  @Rule(RuleType.string().trim().max(10).required())
  id: string;
  名称;
  @ApiProperty({ example: 'Kitty', description: '' })
  @Rule(RuleType.string().trim().max(50).optional())
  name?: string;

  @ApiProperty({ example: 'Kitty', description: '标识' })
  @Rule(RuleType.string().trim().max(50).optional())
  slug?: string;

  @ApiProperty({ example: 'Kitty', description: '请求方式' })
  @Rule(
    RuleType.array()
      .items(
        RuleType.string()
          .regex(/^(GET|POST|PUT|DELETE|PATCH|OPTIONS|HEAD|ANY)$/)
          .empty()
          .label('httpMethod')
      )
      .unique()
      .optional()
  )
  httpMethod?: string[];

  @ApiProperty({ example: 'Kitty', description: '接口路径(后端使用的)' })
  @Rule(RuleType.string().uri({ allowRelative: true }).optional())
  httpPath?: string;
}
