/*
 * @Author: fuzhenghao
 * @Date: 2022-06-15 23:19:50
 * @LastEditTime: 2022-06-15 23:38:34
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\model\infoBase.ts
 */

import { Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { BaseModel } from './base';
import { AdminUserModel } from './admin-user';

/**
 *
 * 文章和文章系列信息的基础类型
 *
 */
export class infoBaseModel extends BaseModel {
  //id不进行自增,在后台中使用雪花id生成
  //这里使用varchar
  @PrimaryColumn({
    type: 'varchar',
    length: '100',
  })
  id: string;

  @Column()
  title: string;

  @Column()
  labels: string;

  @Column()
  showState: string;

  @Column()
  visits: number;

  @Column()
  introduce: string;

  @ManyToOne(type => AdminUserModel, author => author.id)
  createBy: AdminUserModel;
}
