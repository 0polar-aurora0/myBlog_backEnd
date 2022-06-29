/*
 * @Author: fuzhenghao
 * @Date: 2022-05-29 22:28:34
 * @LastEditTime: 2022-06-17 12:39:48
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\service\interface.ts
 */
export interface pageQuery {
  page: Number;
  success: boolean;
  total: Number;
  data: any;
}

export interface detailQuery {
  data: any;
}

export interface filType {
  id: string;
  filePath: any;
  fileName: any;
  upload_at: Date;
}
