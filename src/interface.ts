/*
 * @Author: fuzhenghao
 * @Date: 2021-10-15 02:39:14
 * @LastEditTime: 2022-05-20 21:16:56
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\interface.ts
 */
/* eslint-disable import/no-extraneous-dependencies */
import { Context, NextFunction } from '@midwayjs/web';
import { Application } from '@midwayjs/web';
import { JwtState } from '@mw-components/jwt';

export { Application, Context, NextFunction };

export { IMidwayContainer } from '@midwayjs/core';

/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: string;
}

// export { TracerLog } from '@mw-components/jaeger';
export { NpmPkg } from '@waiting/shared-types';

declare module '@midwayjs/core' {
  interface Context {
    reqId: string;
    _internalError?: Error;
    jwtState: JwtState<JwtUser>;
  }
}

export interface JwtUser {
  id: string;
}

export interface IGetUserResponse {
  success: boolean;
  message: string;
  data: IUserOptions;
}
