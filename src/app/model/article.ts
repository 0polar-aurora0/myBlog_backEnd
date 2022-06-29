/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 13:59:10
 * @LastEditTime: 2022-06-17 13:25:28
 * @LastEditors: fuzhenghao
 * @Description: 首页进入时卡片数据
 * @FilePath: \myBlog_backEnd\src\app\model\article.ts
 *
 */
import { EntityModel } from '@midwayjs/orm';
import { JoinColumn, ManyToMany, OneToOne } from 'typeorm';
import { ArticleSeries } from './articleSeries';
import { infoBaseModel } from './infoBase';
import { File } from './file';

@EntityModel('article')
export class Article extends infoBaseModel {
  @OneToOne(type => File)
  @JoinColumn()
  file: File;

  @ManyToMany(type => ArticleSeries, articleSeries => articleSeries.articles, {
    onDelete: 'CASCADE',
  })
  articleSeries: ArticleSeries[] | any[];
}
