/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 16:04:55
 * @LastEditTime: 2021-10-14 17:36:04
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\service\articleCard.ts
 *
 */
import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { ArticleCard } from "../model/articleCard";
import { Repository } from "typeorm";

@Provide()
export class CardService {
  @InjectEntityModel(ArticleCard)
  articleCardModel: Repository<ArticleCard>;

  // save
  async saveArticleCard() {
    // create a entity object
    let articleCard = new ArticleCard();
    articleCard.id = 1;
    articleCard.date = "1999-09-12";
    articleCard.title = "js基础详解";
    articleCard.introduce =
      "js基础详解微软亚太文任由他为人我一会条我也会突然也很感人";

    // save entity
    const articleCardResult = await this.articleCardModel.save(articleCard);

    // save success
    console.log("articleCard id = ", articleCardResult.id);
  }
}
