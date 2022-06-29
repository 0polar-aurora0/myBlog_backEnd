# myblog_backend

- [myblog_backend](#myblog_backend)
  - [项目导览](#项目导览)
  - [工程目录结构](#工程目录结构)
  - [功能目录](#功能目录)
  - [安装部署](#安装部署)
  - [启动运行](#启动运行)
  - [版本历史](#版本历史)
  - [信息](#信息)
  - [技术信息](#技术信息)
    - [底层框架](#底层框架)
    - [swagger](#swagger)

## 项目导览

个人博客项目 myblog 的 Server 端, 项目基于 midway 实现

在这个项目中，你会看到以下基于 Midway 的实践案例 (上层使用 egg.js )

## 工程目录结构

```
myBlog_backEnd
├─ .editorconfig
├─ .eslintrc.json
├─ .gitignore
├─ .prettierrc.js
├─ bootstrap.js
├─ jest.config.js
├─ jest.setup.js
├─ package.json
├─ README.md
├─ README.zh-CN.md
├─ src
│  ├─ app
│  │  ├─ controller
│  │  │  ├─ api.ts
│  │  │  ├─ article.ts
│  │  │  └─ home.ts
│  │  ├─ database
│  │  │  └─ articlecard.sql
│  │  ├─ dto
│  │  │  └─ article.ts
│  │  ├─ entity
│  │  ├─ extend
│  │  │  ├─ application.ts
│  │  │  ├─ context.ts
│  │  │  ├─ helper.ts
│  │  │  ├─ request.ts
│  │  │  └─ response.ts
│  │  ├─ middleware
│  │  ├─ model
│  │  │  └─ article.ts
│  │  └─ service
│  │     ├─ article.ts
│  │     └─ user.ts
│  ├─ config
│  │  ├─ config.default.ts
│  │  ├─ config.local.ts
│  │  ├─ config.unittest.ts
│  │  └─ plugin.ts
│  ├─ configuration.ts
│  └─ interface.ts
├─ test
│  └─ controller
│     ├─ api.test.ts
│     └─ home.test.ts
├─ tsconfig.json
└─ typings
   ├─ app
   │  ├─ extend
   │  │  ├─ application.d.ts
   │  │  ├─ context.d.ts
   │  │  ├─ helper.d.ts
   │  │  ├─ request.d.ts
   │  │  └─ response.d.ts
   │  └─ index.d.ts
   └─ config
      ├─ index.d.ts
      └─ plugin.d.ts

```

## 功能目录

| 能力栏目       | 名称                                   | 进度 |
| :------------- | -------------------------------------- | :--: |
| **概述**       |                                        |      |
|                | 控制器(Controller)                     |  ✓   |
|                | 服务和注入                             |  ✓   |
|                | 请求、响应和应用                       |  ✓   |
|                | Web 中间件                             |  ✓   |
|                | 启动和部署                             |      |
| **基础能力**   |                                        |      |
|                | 依赖注入                               |  ✓   |
|                | 运行环境                               |  ✓   |
|                | 多环境配置                             |  ✓   |
|                | 参数校验和转换                         |  ✓   |
|                | 生命周期                               |  ✓   |
|                | 使用组件                               |  ✓   |
|                | 日志                                   |  ✓   |
|                | 本地调试                               |      |
|                | 测试                                   |  ✓   |
| **增强**       |                                        |      |
|                | 代码流程控制                           |      |
|                | 方法拦截器（切面）                     |      |
|                | 缓存（Cache）(目前直接使用 Redis)      |      |
|                | Database (TypeORM)                     |  ✓   |
|                | Database (Sequelize)                   |  ✓   |
|                | MongoDB                                |      |
|                | Swagger                                |  ✓   |
| **一体化研发** |                                        |      |
|                | 开发一体化项目                         |      |
|                | 非 Serverless 环境使用一体化           |      |
| **Web 技术**   |                                        |      |
|                | Cookies                                |      |
|                | Session                                |      |
|                | 跨域 CORS                              |  ✓   |
| **微服务**     |                                        |      |
|                | gRPC                                   |      |
|                | RabbitMQ (生产者)                      |  ✓   |
|                | RabbitMQ (消费者)                      |      |
|                | Consul                                 |      |
| **WebSocket**  |                                        |      |
|                | SocketIO                               |      |
| **常用能力**   |                                        |      |
|                | Admin 登录                             |  ✓   |
|                | 文件上传下载                           |  ✓   |
|                | 普通用户登录-账户密码                  |      |
|                | OAuth 2.0                              |      |
|                | 日志监控                               |      |
|                | 本地上传文件服务                       |      |
|                | 鉴权中间件                             |  ✓   |
|                | 接口响应统计中间件                     |  ✓   |
|                | 统一错误处理                           |  ✓   |
|                | SnowFlake 雪花算法生成分布式 ID        |  ✓   |
|                | Jaeger 链路追踪                        |  ✓   |
| **业务能力**   |                                        |      |
|                | 权限管理                               |      |
|                | 角色管理                               |      |
|                | 管理员管理                             |      |
|                | 文章管理                               |  ✓   |
|                | 文章系列管理                           |  ✓   |
|                | 菜单管理                               |      |
|                | 日志(操作日志，记录管理用户的实际操作) |  ✓   |

## 安装部署

<!--
OS X & Linux:0

```sh
git clone https://github.com/0polar-aurora0/myBlog_backEnd.git
npm install --save
``` -->

Windows:

```sh
git clone https://github.com/0polar-aurora0/myBlog_backEnd.git
cnpm install --save
```

## 启动运行

```sh
npm run dev
```

## 版本历史

- 0.0.1
  - CHANGE: Update docs (module code remains unchanged)

## 信息

0polar-aurora0 – [@github](https://github.com/0polar-aurora0) – 1045612802@qq.com

## 技术信息

### 底层框架

本项目采用 midway-web(即 egg)为上层框架, ctx 处理使用了 egg 中 extend 扩展 helper 等
如果需要更换 midway-koa，则需将 extend 扩展功能放入 midlleware 调用

### swagger

