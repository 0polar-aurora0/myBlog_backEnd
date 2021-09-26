/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 16:22:14
 * @LastEditTime: 2021-09-26 18:26:22
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\controller\indexPage.ts
 *
 */
import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Card } from "../model/indexPageCard";
import { Repository } from "typeorm";

@Provide()
export class PhotoService {
  @InjectEntityModel(Card)
  cardModel: Repository<Card>;

  // save
  async savePhoto() {
    // create a entity object
    let card = new Card();
    card.id = 1;
    card.name = "Me and Bears";
    card.title = "card-with-bears.jpg";
    card.description = "I am near polar bears";
    card.views = 1;
    card.isStarted = true;

    // save entity
    const cardResult = await this.cardModel.save(card);

    // save success
    console.log("card id = ", cardResult.id);
  }
}
