/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 16:04:55
 * @LastEditTime: 2022-06-20 11:58:09
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\service\article.ts
 *
 */
import { Inject, Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Article } from '../model/article';
import { Repository, In, Like, Between, FindManyOptions } from 'typeorm';

import { CreateDTO, QueryDetailDTO, QueryDTO, UpdateDTO } from '../dto/article';
import { KoidComponent } from '@mw-components/koid';
import { detailQuery, pageQuery } from './interface';
@Provide()
export class ArticleService {
  @InjectEntityModel(Article)
  articleModel: Repository<Article>;

  @Inject()
  koid: KoidComponent;

  /**
   * @method: saveArticle
   * @description: 文章数据存储
   * @param {CreateDTO} params
   * @return {*}
   * @example:
   */
  async saveArticle(params: CreateDTO): Promise<any> {
    let { title, labels, showState, introduce, articleSeries, file } = params;
    let article = new Article();
    let snowflakeID = this.koid.idGenerator.toString();
    article.visits = 0;
    article.labels = labels && labels.join('-');
    article.id = snowflakeID;
    article.create_at = new Date();
    article.update_at = new Date();
    article.title = title;
    article.file = file;
    article.showState = showState;
    article.introduce = introduce;
    article.articleSeries = articleSeries.map(item => {
      return { id: item };
    });
    await this.articleModel.save(article);
    return {
      article,
    };
  }

  /**
   * @method: updateArticle
   * @description: 文章数据更新
   * @param {CreateDTO} params
   * @return {*}
   * @example:
   */
  async updateArticle(params: UpdateDTO): Promise<void> {
    let { title, labels, showState, introduce, articleSeries, create_at, id } =
      params;
    let article = new Article();
    article.visits = 0;
    article.labels = labels.join('-');
    article.id = id;
    article.create_at = create_at;
    article.update_at = new Date();
    article.title = title;
    article.showState = showState;
    article.introduce = introduce;
    article.articleSeries = articleSeries.map(item => {
      return { id: item };
    });
    await this.articleModel.save(article);
  }
  /**
   * @description: 文章分页查询
   * @param {QueryDTO} params
   * @return {pageQuery}
   */
  async queryArticle(params: QueryDTO): Promise<pageQuery> {
    const { current, pageSize, startTime, endTime, ...keyWords } = params;

    //sql查询语句
    let sql: FindManyOptions<Article> = {};
    let sql_where: any = {};

    // 排序方式
    const order: any = { id: 'DESC' };
    sql.order = order;

    //时间查询
    if (startTime && endTime) {
      sql_where.create_at = Between(
        new Date(startTime).toISOString(),
        new Date(endTime).toISOString()
      );
    }

    //判断是否有条件查询
    if (Object.keys(keyWords).length > 0) {
      for (const key in keyWords) {
        //条件写入where
        if (Object.prototype.hasOwnProperty.call(keyWords, key)) {
          const element = keyWords[key];
          switch (key) {
            case 'title':
              //针对指定字段模糊查询
              sql_where[key] = Like(`%${element}%`);
              break;
            case 'showState':
              element !== '2' && (sql_where[key] = element);
              break;
            default:
              break;
          }
        }
      }
    }

    if (Object.keys(sql_where).length > 0) {
      sql.where = sql_where;
    }

    //判断是否有分页查询
    if (pageSize && current) {
      sql.take = pageSize;
      sql.skip = pageSize * (current - 1);
    }

    sql.relations = ['articleSeries', 'file'];

    const [data, total] = await this.articleModel.findAndCount(sql);

    return {
      page: current,
      success: true,
      total,
      data,
    };
  }

  /**
   * @description: 详细查找文章列表,所属的系列
   * @param {QueryDetailDTO} params
   * @return {*}
   */
  async queryArticleDetails(params: QueryDetailDTO): Promise<detailQuery> {
    const { id } = params;

    let data = await this.articleModel.findOne({
      where: { id: id },
      relations: ['articleSeries'],
    });

    console.log({ data });

    return {
      data,
    };
  }

  /**
   * @description:文章删除
   * @param ids
   * @return {*}
   */
  async removeArticleByIds(ids: Array<string | number>): Promise<any> {
    return this.articleModel
      .createQueryBuilder()
      .delete()
      .where({
        id: In(ids),
      })
      .execute();
  }
}
