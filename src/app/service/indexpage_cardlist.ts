/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 16:04:55
 * @LastEditTime: 2021-11-02 17:36:50
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\service\indexpage_cardlist.ts
 *
 */
import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Indexpage_cardlist } from '../model/indexpage_cardlist';
import { Repository } from 'typeorm';
var fs = require('fs');
var path = require('path');

import { ShowDTO } from '../dto/indexpage_cardlist';
@Provide()
export class Indexpage_cardlistService {
  @InjectEntityModel(Indexpage_cardlist)
  indexpage_cardlistModel: Repository<Indexpage_cardlist>;

  async query_indexpage_cardlist(params: ShowDTO) {
    // find All
    let allIndexpage_cardlists = await this.indexpage_cardlistModel.find();
    console.log('数据库中所有首页标签信息: ', allIndexpage_cardlists);
    allIndexpage_cardlists.map(cardlist => {
      let path_img = fs.readFileSync(
        path.join(
          __dirname,
          `../public/images/${cardlist.card_backgroud_image}`
        )
      );
      cardlist.card_backgroud_image = path_img;
    });
    return allIndexpage_cardlists;
  }
}
