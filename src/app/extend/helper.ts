/*
 * @Author: fuzhenghao
 * @Date: 2021-10-19 10:23:16
 * @LastEditTime: 2021-10-19 17:29:48
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\extend\helper.ts
 *
 */

export default {
  /**
   * @method: Helper.success
   * @description:  处理成功响应
   * @param {any} this
   * @param {any} result Return data, Default null
   * @param {String} message Error message, Default '请求成功'
   * @param {Number} status Status code, Default '200'
   * @return {*}
   * ```js
   * ctx.helper.success({}, null, 201);
   * ```
   */
  success(this: any, result = null, message = "请求成功", status = 200) {
    console.log("调用成功");
    console.log({result});
    
    this.ctx.response.body = {
        code: status,
        message,
        data: result,
    };
    
    this.ctx.response.status = status;
    console.log({ ctx: this.ctx.response });
    return this.ctx.response;
  },
};
