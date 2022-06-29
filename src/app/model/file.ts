/*
 * @Author: fuzhenghao
 * @Date: 2022-06-01 03:28:32
 * @LastEditTime: 2022-06-01 03:32:00
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\model\file.ts
 */
import { EntityModel } from '@midwayjs/orm';
import { Column, CreateDateColumn, PrimaryColumn } from 'typeorm';

@EntityModel('file')
export class File {
  //id不进行自增,在后台中使用雪花id生成
  @PrimaryColumn({
    type: 'varchar',
  })
  id: string;

  @Column()
  filePath: string;

  @Column()
  fileName: string;

  @CreateDateColumn()
  upload_at: Date;
}
