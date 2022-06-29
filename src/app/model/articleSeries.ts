/*
 * @Author: fuzhenghao
 * @Date: 2022-03-14 11:55:09
 * @LastEditTime: 2022-06-15 23:39:11
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\model\articleSeries.ts
 */
import { EntityModel } from '@midwayjs/orm';
import { JoinTable, ManyToMany } from 'typeorm';
import { Article } from './article';
import { infoBaseModel } from './infoBase';

@EntityModel('articleSeries')
export class ArticleSeries extends infoBaseModel {
  
  @ManyToMany(type => Article, article => article.articleSeries, {
    onDelete: 'CASCADE',
  })
  @JoinTable({
    name: 'article_articleseries',
    // joinColumns: [{ name: 'articlSeries_id' }],
    // inverseJoinColumns: [{ name: 'article_id' }],
  })
  articles: Article[] | any[];
}
