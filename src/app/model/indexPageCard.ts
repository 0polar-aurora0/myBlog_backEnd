/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 13:59:10
 * @LastEditTime: 2021-09-26 15:58:46
 * @LastEditors: fuzhenghao
 * @Description: 首页进入时卡片数据
 * @FilePath: \myBlog_backEnd\src\app\model\mainPageCard.ts
 *
 */
import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn } from "typeorm";

@EntityModel("card")
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  views: number;

  @Column()
  isStarted: boolean;
}
