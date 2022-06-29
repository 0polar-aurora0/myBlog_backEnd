/*
 * @Author: fuzhenghao
 * @Date: 2022-05-17 19:00:17
 * @LastEditTime: 2022-06-07 13:26:58
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\model\base.ts
 */
import {
  CreateDateColumn,
  UpdateDateColumn,
  // DeleteDateColumn, // 软删除需要引入
  AfterLoad,
} from 'typeorm';

/**
 * 基础的Model，对id字段默认会 转字符串处理
 *
 * 继承该Model的话，必须是有id字段的表
 *
 * 默认还会有createdAt、updatedAt
 */
export class BaseModel {
  id: string;

  @CreateDateColumn({
    name: 'create_at',
  })
  create_at: Date;

  @UpdateDateColumn({
    name: 'update_at',
  })
  update_at: Date;

  // 软删除默认需要配置的字段
  // @DeleteDateColumn({
  //   name: 'deleted_at',
  //   select: false,
  // })
  // deletedAt: Date;

  // 对字段进行预处理
  @AfterLoad()
  init() {
    this.id = String(this.id);
  }
}
