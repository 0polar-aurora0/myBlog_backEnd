/*
 * @Author: fuzhenghao
 * @Date: 2021-09-26 11:48:29
 * @LastEditTime: 2021-10-14 16:58:00
 * @LastEditors: fuzhenghao
 * @Description: 
 * @FilePath: \myBlog_backEnd\src\app\service\user.ts
 * 
 */
import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../../interface';

@Provide()
export class UserService {
  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
