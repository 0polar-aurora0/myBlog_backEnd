/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 16:04:55
 * @LastEditTime: 2022-06-20 12:16:37
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\service\articleSeriesService.ts
 *
 */
import * as assert from 'assert';

import { Inject, Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { ArticleSeries } from '../model/articleSeries';
import { Repository, In, Like, FindManyOptions, Between } from 'typeorm';
import MyError from '../util/my-error';

import { QueryDetailDTO, QueryDTO, SaveDTO } from '../dto/articleSeries';
import { KoidComponent } from '@mw-components/koid';
import { detailQuery, filType, pageQuery } from './interface';

import { FileService } from './fileService';
import { ArticleService } from './article';
import { AdminUserService } from '../service/admin/user';
import { userSetting } from '../../config/userSetting';

@Provide()
export class ArticleSeriesService {
  @InjectEntityModel(ArticleSeries)
  articleSeriesModel: Repository<ArticleSeries>;

  @Inject()
  koid: KoidComponent;

  @Inject()
  fileService: FileService;

  @Inject()
  articleService: ArticleService;

  @Inject('adminUserService')
  adminUserService: AdminUserService;

  /**
   * @method: saveArticleSeries
   * @description: 文章系列列表数据存储
   * @param {QueryDTO} params
   * @return {*}
   * @example:
   */
  async saveArticleSeries(params: SaveDTO): Promise<any> {
    let { title, labels, showState, articles, introduce } = params;
    let articleSeries = new ArticleSeries();
    let snowflakeID = this.koid.idGenerator.toString();
    articleSeries.introduce = introduce;
    articleSeries.create_at = new Date();
    articleSeries.update_at = new Date();
    articleSeries.id = snowflakeID;
    articleSeries.visits = 0;
    articleSeries.title = title;
    articleSeries.labels = labels.join('-');
    articleSeries.showState = showState;
    articleSeries.articles = articles.map(item => {
      return { id: item };
    });

    //保存文章系列表
    await this.articleSeriesModel.save(articleSeries);

    return { articleSeries };
  }

  /**
   * @method: importArticleSeries
   * @description: 文章系列列表数据导入
   * @param {QueryDTO} params
   * @return {*}
   * @example:
   */
  async importArticleSeries(files: any[]): Promise<void> {
    let _this = this;
    files.map(file => {
      let localFilePath = file.filename.split('/');

      file.localFilePath = localFilePath;
    });

    let fileTree = await treeDepthTranselate(files);

    //查询当前登陆账户
    let adminUserService_result: any =
      await this.adminUserService.getAdminUserById(userSetting.user_id);
    console.log({ adminUserService_result });

    adminUserService_result.articleSeries =
      adminUserService_result.articleSeries || [];
    adminUserService_result.articles = adminUserService_result.articles || [];

    function treeDepthTranselate(fileFolders) {
      let newFileFoders = [];
      let newFileFoders_key = [];
      fileFolders.map(file => {
        let title = file.localFilePath.shift();
        let position = newFileFoders_key.indexOf(title);
        if (position < 0) {
          newFileFoders.push({
            title,
            files: [],
            fileFolders: [],
          });
          newFileFoders_key.push(title);
          position = newFileFoders_key.length - 1;
        }
        if (file.localFilePath.length === 1) {
          //文件
          newFileFoders[position].files.push(file);
        } else {
          //文件夹
          newFileFoders[position].fileFolders.push(file);
        }
      });
      let newFileFodersAfter = [];
      newFileFoders.map(item => {
        item.fileFolders = treeDepthTranselate(item.fileFolders);
        newFileFodersAfter.push(item);
      });

      return newFileFodersAfter;
    }

    treeSave(fileTree);
    //更新用户信息
    await this.adminUserService.updateAdminUser(adminUserService_result);

    function treeSave(fileTree) {
      fileTree.map(async localTreeNode => {
        //当前文章系列存储
        let articleSeries: SaveDTO = {
          title: localTreeNode.title,
          introduce: '暂无介绍',
          labels: [],
          showState: '1',
          articles: [],
        };
        //保存文章系列
        let saveArticleSeries_result = await _this.saveArticleSeries(
          articleSeries
        );

        adminUserService_result.articleSeries.push(saveArticleSeries_result);

        localTreeNode.files.map(async (file, index) => {
          let { data } = file;
          let snowflakeID = _this.koid.idGenerator.toString();
          let file_name = file.localFilePath[0];
          let file_title = file_name.split('.').shift();
          let file_type = file_name.split('.').pop();
          if (file_type === 'md') {
            let file_info: filType = {
              id: snowflakeID,
              filePath: data,
              fileName: file_name,
              upload_at: new Date(),
            };
            //拆解文件名
            let article_info = {
              title: file_title,
              labels: [],
              showState: '1',
              introduce: '',
              articleSeries: [],
              file: file_info,
            };
            //保存文件
            await _this.fileService.fileSingleSave({ propFileInfo: file_info });
            //保存文章
            let saveArticle_result = await _this.articleService.saveArticle(
              article_info
            );
            adminUserService_result.articles.push(saveArticle_result);
          }
        });

        treeSave(localTreeNode.fileFolders);
      });
    }
  }

  /**
   * @method: updateArticleSeries
   * @description: 文章系列列表数据更新
   * @param {QueryDTO} params
   * @return {*}
   * @example:
   */
  async updateArticleSeries(params: SaveDTO): Promise<void> {
    let { title, labels, showState, articles, create_at, id } = params;
    let articleSeries = new ArticleSeries();
    articleSeries.create_at = create_at || new Date();
    articleSeries.update_at = new Date();
    articleSeries.id = id;
    articleSeries.title = title;
    articleSeries.labels = labels.join('-');
    articleSeries.showState = showState;
    articleSeries.articles = articles.map(item => {
      return { id: item };
    });

    //保存文章系列表
    await this.articleSeriesModel.save(articleSeries);
  }

  /**
   * @description: 分页查询文章系列列表(包含条件查询)
   * @param {QueryDTO} params
   * @return {*}
   */
  async queryArticleSeries(params: QueryDTO): Promise<pageQuery> {
    const { current, pageSize, startTime, endTime, ...keyWords } = params;

    //sql查询语句
    let sql: FindManyOptions<ArticleSeries> = {};
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
    const [data, total] = await this.articleSeriesModel.findAndCount(sql);
    return {
      page: current,
      success: true,
      total,
      data,
    };
  }

  /**
   * @description: 详细查找文章系列列表,包含的文章
   * @param {QueryDetailDTO} params
   * @return {*}
   */
  async queryArticleSeriesDetails(
    params: QueryDetailDTO
  ): Promise<detailQuery> {
    const { id } = params;

    let data = await this.articleSeriesModel.findOne({
      where: { id: id },
      relations: ['articles'],
    });

    return {
      data,
    };
  }

  /**
   * @description: 检查文章系列是否存在于数据库，自动抛错
   * @param {string} ids 菜单id
   * @return {*}
   */
  async checkArticleSeriesExists(ids: string[]): Promise<void> {
    const count = await this.articleSeriesModel.count({
      where: {
        id: In(ids),
      },
    });

    assert.deepStrictEqual(
      count,
      ids.length,
      new MyError('id不存在, 请检查', 400)
    );
  }

  /**
   * @description: 删除多条菜单数据(忽略关联表的数据)
   * @param {string} ids 菜单id
   * @return {*}
   */
  async removeArticleSeriesByIds(ids: Array<string>): Promise<void> {
    this.articleSeriesModel
      .createQueryBuilder()
      .delete()
      .where({
        id: In(ids),
      })
      .execute();
  }
}
