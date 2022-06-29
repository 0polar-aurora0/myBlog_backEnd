/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 13:59:10
 * @LastEditTime: 2021-11-02 14:16:03
 * @LastEditors: fuzhenghao
 * @Description: 首页标签展示图片
 * @FilePath: \myBlog_backEnd\src\app\model\indexpage_cardlist.ts
 *
 */
import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@EntityModel('indexpage_cardlist')
export class Indexpage_cardlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  card_backgroud_image: string;

  @Column()
  type: string;

  @Column()
  title: string;

  @Column()
  description: number;
}
