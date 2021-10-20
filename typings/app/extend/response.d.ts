// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!
import 'egg';
import ExtendResponse from '../../../src/app/extend/response';
type ExtendResponseType = typeof ExtendResponse;
declare module 'egg' {
  interface Response extends ExtendResponseType { }
}