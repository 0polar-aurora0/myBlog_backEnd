/*
 * @Author: fuzhenghao
 * @Date: 2022-06-06 17:54:58
 * @LastEditTime: 2022-06-20 16:51:58
 * @LastEditors: fuzhenghao
 * @Description:
 * @FilePath: \myBlog_backEnd\src\app\model\admin-user.ts
 */
import { EntityModel } from '@midwayjs/orm';
import {
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';

import { BaseModel } from './base';
import { AdminRoleModel } from './admin-role';
import { AdminPermissionModel } from './admin-permission';
import { ArticleSeries } from './articleSeries';
import { Article } from './article';

@EntityModel({
  name: 'admin_users',
})
export class AdminUserModel extends BaseModel {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: string;

  @Column({
    type: 'varchar',
    length: 190,
    comment: '用户名',
  })
  username: string;

  @Column({
    type: 'varchar',
    length: 60,
    nullable: true,
    comment: '密码',
  })
  password: string;

  @Column({
    type: 'varchar',
    comment: '名称',
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
    comment: '头像',
  })
  avatar: string;

  @Column({
    type: 'varchar',
    length: 100,
    comment: '记住token',
    name: 'remember_token',
  })
  rememberToken: string;

  @OneToMany(type => ArticleSeries, articleSeries => articleSeries.id)
  articleSeries: ArticleSeries[];

  @OneToMany(type => Article, article => article.id)
  articles: Article[];

  @ManyToMany(type => AdminRoleModel, role => role.users)
  @JoinTable({
    name: 'admin_role_users',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
    },
  })
  roles: AdminRoleModel[];

  @ManyToMany(type => AdminPermissionModel, permission => permission.users)
  permissions: AdminPermissionModel[];
}
