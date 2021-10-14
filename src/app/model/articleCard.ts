/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 13:59:10
 * @LastEditTime: 2021-10-14 17:31:37
 * @LastEditors: fuzhenghao
 * @Description: 首页进入时卡片数据
 * @FilePath: \myBlog_backEnd\src\app\model\articleCard.ts
 *
 */
import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn } from "typeorm";

@EntityModel("articleCard")
export class ArticleCard {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  title: string;

  @Column()
  date: string;

  @Column()
  introduce: string;


}
