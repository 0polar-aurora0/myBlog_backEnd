/*
 * @Author: fuzhenghao
 * @Date: 2021-10-19 10:23:16
 * @LastEditTime: 2021-10-20 09:28:40
 * @LastEditors: fuzhenghao
 * @Description: 指向ctx.helper对象 this.ctx.helper调用
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
   * @example: ctx.helper.success({}, null, 201);
   */
  success(this: any, result = null, message = "请求成功", status = 200) {
    console.log("调用成功");
    console.log({ result });

    this.ctx.body = {
      code: status,
      message,
      data: result,
    };
    this.ctx.status = status;
  },

  /**
   * @method: Helper.error
   * @description: 处理失败响应
   * @param {any} this
   * @param {number} code
   * @param {string} message
   * @return {*}
   * @example:  ctx.helper.error({}, null, 400);
   */

  error(this: any, code: number, message: string) {
    this.ctx.body = {
      code,
      message,
      data: null,
    };
    this.ctx.status = code;
  },
};
