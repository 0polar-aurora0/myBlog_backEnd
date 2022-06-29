/*
 * @Author: fuzhenghao
 * @Date: 2022-06-02 01:00:29
 * @LastEditTime: 2022-06-17 12:40:03
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\service\fileService.ts
 */

import { Inject, Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { KoidComponent } from '@mw-components/koid';
import { Repository } from 'typeorm';
import { File } from '../model/file';
import { readFileSync } from 'fs';
import { filType } from './interface';

@Provide()
export class FileService {
  @InjectEntityModel(File)
  fileModal: Repository<File>;

  @Inject()
  koid: KoidComponent;

  async fileSingleSave(file: any): Promise<any> {
    let { propFileInfo, data, filename } = file;
    let localFileInfo: any;
    if (propFileInfo) {
      localFileInfo = propFileInfo;
    } else {
      let snowflakeID = this.koid.idGenerator.toString();
      let fileInfo: filType = {
        id: snowflakeID,
        filePath: data,
        fileName: filename,
        upload_at: new Date(),
      };
      localFileInfo = fileInfo;
    }
    this.fileModal.save(localFileInfo);
    return localFileInfo;
  }

  async fileSave(files: any): Promise<String[]> {
    let newFiles = files.map(item => {
      let snowflakeID = this.koid.idGenerator.toString();
      let { data, filename } = item;
      let file: filType = {
        id: snowflakeID,
        filePath: data,
        fileName: filename,
        upload_at: new Date(),
      };
      this.fileModal.save(file);
      return file;
    });
    return newFiles.map(item => {
      return item.id;
    });
    // return snowflakeID;
  }

  async fileQuery(id: string) {
    let fileInfo = await this.fileModal.findOne({
      where: { id: id },
    });
    console.log({ fileInfo });
    let { filePath, fileName } = fileInfo;

    let file = readFileSync(filePath).toString('utf8');

    return { file, fileName };
  }
}
